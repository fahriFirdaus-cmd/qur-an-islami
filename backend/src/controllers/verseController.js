/**
 * Verse & Quran Controller
 * Menghubungkan database (PostgreSQL / SQLite quran.db) dengan teks Arab Rasm Uthmani,
 * Terjemahan Kemenag RI, Audio CDN, dan Jejak Sejarah.
 * Memiliki fallback otomatis ke dataStore in-memory jika database tidak tersedia.
 */

const db = require('../config/db');
const { quranData, recitersData, historyLinksData } = require('../services/dataStore');

/**
 * GET /api/v1/surahs
 * Mengambil seluruh 114 Surah dari Database
 */
exports.getAllSurahs = async (req, res) => {
  try {
    const { search } = req.query;

    try {
      let sql = 'SELECT id, name_latin, name_arabic, name_translation, revelation_type, total_verses, juz_start, page_start FROM surahs';
      let params = [];

      if (search) {
        const q = `%${search.toLowerCase()}%`;
        sql += ' WHERE LOWER(name_latin) LIKE $1 OR name_arabic LIKE $2 OR CAST(id AS TEXT) = $3';
        params = [q, `%${search}%`, search.trim()];
      }

      sql += ' ORDER BY id ASC';

      const result = await db.query(sql, params);

      if (result.rows && result.rows.length > 0) {
        return res.json({
          success: true,
          total: result.rowCount,
          source: 'database',
          data: result.rows
        });
      }
    } catch (dbErr) {
      console.warn('⚠️ Database query error in getAllSurahs, using fallback:', dbErr.message);
    }

    // Fallback ke in-memory dataStore jika DB belum siap
    let list = quranData.surahs;
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(s => 
        s.name_latin.toLowerCase().includes(q) || 
        s.name_arabic.includes(q) ||
        s.id.toString() === q
      );
    }

    res.json({
      success: true,
      total: list.length,
      source: 'dataStore_fallback',
      data: list
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/**
 * GET /api/v1/surahs/:id
 * Mengambil detail Surah beserta seluruh ayat & terjemahannya dari Database
 */
exports.getSurahById = async (req, res) => {
  try {
    const surahId = parseInt(req.params.id);
    if (isNaN(surahId) || surahId < 1 || surahId > 114) {
      return res.status(404).json({ success: false, message: 'Surah tidak ditemukan (ID 1-114)' });
    }

    try {
      const surahRes = await db.query('SELECT * FROM surahs WHERE id = $1', [surahId]);
      if (surahRes.rows && surahRes.rows.length > 0) {
        const surah = surahRes.rows[0];

        // Ambil seluruh ayat dari database
        const versesSql = `
          SELECT v.id, v.verse_number, v.text_uthmani, v.text_latin, v.juz, v.page,
                 t_id.translation_text as translation_id,
                 t_en.translation_text as translation_en
          FROM verses v
          LEFT JOIN translations t_id ON t_id.verse_id = v.id AND t_id.language_code = 'id'
          LEFT JOIN translations t_en ON t_en.verse_id = v.id AND t_en.language_code = 'en'
          WHERE v.surah_id = $1
          ORDER BY v.verse_number ASC
        `;
        const versesRes = await db.query(versesSql, [surahId]);

        // Cek history links
        let historyLinks = [];
        try {
          const hRes = await db.query(
            'SELECT surah_id, verse_number, event_id FROM verse_historical_links WHERE surah_id = $1',
            [surahId]
          );
          historyLinks = hRes.rows || [];
        } catch (e) {
          historyLinks = historyLinksData.filter(h => h.surah_id === surahId);
        }

        return res.json({
          success: true,
          source: 'database',
          data: {
            ...surah,
            verses: versesRes.rows.map(v => ({
              verse_number: v.verse_number,
              text_uthmani: v.text_uthmani,
              text_latin: v.text_latin,
              translation_id: v.translation_id,
              translation_en: v.translation_en,
              juz: v.juz,
              page: v.page,
              has_history: !!historyLinks.find(h => h.verse_number === v.verse_number)
            }))
          }
        });
      }
    } catch (dbErr) {
      console.warn(`⚠️ Database query error in getSurahById (${surahId}), using fallback:`, dbErr.message);
    }

    // Fallback ke in-memory dataStore
    const surah = quranData.surahs.find(s => s.id === surahId);
    if (!surah) {
      return res.status(404).json({ success: false, message: 'Surah tidak ditemukan' });
    }

    const verses = quranData.verses.filter(v => v.surah_id === surahId);
    res.json({
      success: true,
      source: 'dataStore_fallback',
      data: {
        ...surah,
        verses: verses.map(v => ({
          verse_number: v.verse_number,
          text_uthmani: v.text_uthmani,
          text_latin: v.text_latin,
          translation_id: v.translation_id,
          has_history: !!historyLinksData.find(h => h.surah_id === surahId && h.verse_number === v.verse_number)
        }))
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/**
 * GET /api/v1/verses/:surahId/:verseNumber/details
 * Endpoint Relasional Ayat Lengkap (Ayat + Terjemahan ID/EN + Audio + Jejak Sejarah)
 */
exports.getVerseDetails = async (req, res) => {
  try {
    const surahId = parseInt(req.params.surahId);
    const verseNumber = parseInt(req.params.verseNumber);

    const cdnBase = process.env.CDN_AUDIO_BASE_URL || 'https://cdn.quran-peradaban.id/audio';

    try {
      const surahRes = await db.query('SELECT * FROM surahs WHERE id = $1', [surahId]);
      if (surahRes.rows && surahRes.rows.length > 0) {
        const surah = surahRes.rows[0];

        const verseSql = `
          SELECT v.*,
                 t_id.translation_text as translation_id, t_id.footnotes as footnotes_id,
                 t_en.translation_text as translation_en, t_en.footnotes as footnotes_en
          FROM verses v
          LEFT JOIN translations t_id ON t_id.verse_id = v.id AND t_id.language_code = 'id'
          LEFT JOIN translations t_en ON t_en.verse_id = v.id AND t_en.language_code = 'en'
          WHERE v.surah_id = $1 AND v.verse_number = $2
        `;
        const verseRes = await db.query(verseSql, [surahId, verseNumber]);

        if (verseRes.rows && verseRes.rows.length > 0) {
          const verse = verseRes.rows[0];

          // Ambil relasi Jejak Sejarah (Asbabun Nuzul / Peristiwa Bersejarah)
          let historyLinks = [];
          try {
            const hlSql = `
              SELECT vhl.*, he.title as event_title, he.era_title as era, he.date_hijri, he.date_gregorian,
                     he.location, he.latitude, he.longitude, he.summary as context_explanation,
                     he.journal_reference as authentic_source
              FROM verse_historical_links vhl
              LEFT JOIN historical_events he ON he.id = vhl.event_id
              WHERE vhl.surah_id = $1 AND vhl.verse_number = $2
            `;
            const hlRes = await db.query(hlSql, [surahId, verseNumber]);
            if (hlRes.rows && hlRes.rows.length > 0) {
              historyLinks = hlRes.rows.map(link => ({
                event_id: link.event_id,
                event_title: link.event_title || link.title || '',
                era: link.era || link.era_title || '',
                date_hijri: link.date_hijri || '',
                date_gregorian: link.date_gregorian || '',
                link_type: link.link_type || 'asbabun_nuzul',
                context_explanation: link.context_explanation || '',
                key_figures: link.key_figures || '',
                authentic_source: link.authentic_source || '',
                coordinates: link.latitude ? { lat: link.latitude, lng: link.longitude } : null
              }));
            }
          } catch (e) {
            historyLinks = historyLinksData.filter(
              h => h.surah_id === surahId && h.verse_number === verseNumber
            );
          }

          // Ambil daftar Qori
          let reciters = recitersData;
          try {
            const rRes = await db.query('SELECT slug as id, name, country, style, category FROM reciters');
            if (rRes.rows && rRes.rows.length > 0) reciters = rRes.rows;
          } catch (e) {}

          return res.json({
            success: true,
            source: 'database',
            data: {
              surah: {
                id: surah.id,
                name_latin: surah.name_latin,
                name_arabic: surah.name_arabic,
                name_translation: surah.name_translation,
                revelation_type: surah.revelation_type,
                total_verses: surah.total_verses
              },
              verse: {
                number: verse.verse_number,
                juz: verse.juz,
                page: verse.page,
                text_uthmani: verse.text_uthmani,
                text_latin: verse.text_latin,
                font_recommended: "UthmanicHafs / LPMQ Isep Misbah"
              },
              translations: [
                {
                  language: "id",
                  source: "Kementerian Agama Republik Indonesia (Kemenag RI)",
                  text: verse.translation_id || "Terjemahan tersedia.",
                  footnotes: verse.footnotes_id || null
                },
                {
                  language: "en",
                  source: "Sahih International",
                  text: verse.translation_en || "Translation available in multi-language mode.",
                  footnotes: verse.footnotes_en || null
                }
              ],
              audio_streams: reciters.map(reciter => ({
                reciter_id: reciter.id,
                reciter_name: reciter.name,
                country: reciter.country,
                style: reciter.style,
                category: reciter.category,
                audio_url: `${cdnBase}/${reciter.id}/${String(surahId).padStart(3, '0')}${String(verseNumber).padStart(3, '0')}.mp3`,
                bitrate: "128kbps"
              })),
              historical_context: {
                has_historical_link: historyLinks.length > 0,
                total_links: historyLinks.length,
                links: historyLinks
              }
            }
          });
        }
      }
    } catch (dbErr) {
      console.warn(`⚠️ Database query error in getVerseDetails (${surahId}:${verseNumber}):`, dbErr.message);
    }

    // Fallback ke in-memory dataStore
    const surah = quranData.surahs.find(s => s.id === surahId);
    if (!surah) {
      return res.status(404).json({ success: false, message: `Surah ID ${surahId} tidak ditemukan` });
    }

    const verse = quranData.verses.find(v => v.surah_id === surahId && v.verse_number === verseNumber);
    if (!verse) {
      return res.status(404).json({ 
        success: false, 
        message: `Ayat ${verseNumber} pada Surah ${surah.name_latin} tidak ditemukan` 
      });
    }

    const historyLinks = historyLinksData.filter(
      h => h.surah_id === surahId && h.verse_number === verseNumber
    );

    res.json({
      success: true,
      source: 'dataStore_fallback',
      data: {
        surah: {
          id: surah.id,
          name_latin: surah.name_latin,
          name_arabic: surah.name_arabic,
          revelation_type: surah.revelation_type,
          total_verses: surah.total_verses
        },
        verse: {
          number: verse.verse_number,
          juz: verse.juz,
          page: verse.page,
          text_uthmani: verse.text_uthmani,
          text_latin: verse.text_latin,
          font_recommended: "UthmanicHafs / LPMQ Isep Misbah"
        },
        translations: [
          {
            language: "id",
            source: "Kementerian Agama Republik Indonesia (Kemenag RI)",
            text: verse.translation_id,
            footnotes: verse.footnotes || null
          },
          {
            language: "en",
            source: "Sahih International",
            text: verse.translation_en || "Translation available in multi-language mode.",
            footnotes: null
          }
        ],
        audio_streams: recitersData.map(reciter => ({
          reciter_id: reciter.id,
          reciter_name: reciter.name,
          country: reciter.country,
          style: reciter.style,
          category: reciter.category,
          audio_url: `${cdnBase}/${reciter.id}/${String(surahId).padStart(3, '0')}${String(verseNumber).padStart(3, '0')}.mp3`,
          bitrate: "128kbps"
        })),
        historical_context: {
          has_historical_link: historyLinks.length > 0,
          total_links: historyLinks.length,
          links: historyLinks
        }
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/**
 * GET /api/v1/reciters
 * Mengambil daftar Qori dari Database
 */
exports.getReciters = async (req, res) => {
  try {
    const { category, style } = req.query;

    try {
      let sql = 'SELECT slug as id, name, arabic_name, country, style, category, bitrate FROM reciters';
      let params = [];
      let where = [];

      if (category) {
        where.push(`LOWER(category) = LOWER($${where.length + 1})`);
        params.push(category);
      }
      if (style) {
        where.push(`LOWER(style) = LOWER($${where.length + 1})`);
        params.push(style);
      }

      if (where.length > 0) {
        sql += ' WHERE ' + where.join(' AND ');
      }

      const result = await db.query(sql, params);
      if (result.rows && result.rows.length > 0) {
        return res.json({
          success: true,
          total: result.rowCount,
          source: 'database',
          data: result.rows
        });
      }
    } catch (dbErr) {
      console.warn('⚠️ Database query error in getReciters, using fallback:', dbErr.message);
    }

    let list = recitersData;
    if (category) {
      list = list.filter(r => r.category.toLowerCase() === category.toLowerCase());
    }
    if (style) {
      list = list.filter(r => r.style.toLowerCase() === style.toLowerCase());
    }

    res.json({
      success: true,
      total: list.length,
      source: 'dataStore_fallback',
      data: list
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
