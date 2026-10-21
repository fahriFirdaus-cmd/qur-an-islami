/**
 * Verse & Quran Controller
 * Menghubungkan teks Arab Rasm Uthmani, Terjemahan, Audio CDN, dan Jejak Sejarah
 */

// Dataset bawaan yang kaya (Mock DB / Fallback jika PostgreSQL belum di-migrate)
const { quranData, recitersData, historyLinksData } = require('../services/dataStore');

exports.getAllSurahs = async (req, res) => {
  try {
    const { search } = req.query;
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
      data: list
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getSurahById = async (req, res) => {
  try {
    const surahId = parseInt(req.params.id);
    const surah = quranData.surahs.find(s => s.id === surahId);

    if (!surah) {
      return res.status(404).json({ success: false, message: 'Surah tidak ditemukan' });
    }

    // Ambil daftar ayat dari surah terkait
    const verses = quranData.verses.filter(v => v.surah_id === surahId);

    res.json({
      success: true,
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
 * IMPLEMENTASI UTAMA: Endpoint Relasional Ayat Lengkap
 * GET /api/v1/verses/:surahId/:verseNumber/details
 */
exports.getVerseDetails = async (req, res) => {
  try {
    const surahId = parseInt(req.params.surahId);
    const verseNumber = parseInt(req.params.verseNumber);

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

    // Ambil relasi Jejak Sejarah (Asbabun Nuzul / Peristiwa Bersejarah)
    const historyLinks = historyLinksData.filter(
      h => h.surah_id === surahId && h.verse_number === verseNumber
    );

    // CDN Audio Base URL
    const cdnBase = process.env.CDN_AUDIO_BASE_URL || 'https://cdn.quran-peradaban.id/audio';

    // Format respon JSON relasional yang bersih dan kaya
    const responsePayload = {
      success: true,
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
          // Kaidah Rasm Uthmani standar Madinah / Kemenag RI
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
          style: reciter.style,       // Murattal / Mujawwad
          category: reciter.category, // Internasional / Nusantara
          audio_url: `${cdnBase}/${reciter.id}/${String(surahId).padStart(3, '0')}${String(verseNumber).padStart(3, '0')}.mp3`,
          bitrate: "128kbps"
        })),
        historical_context: {
          has_historical_link: historyLinks.length > 0,
          total_links: historyLinks.length,
          links: historyLinks.map(link => ({
            event_id: link.event_id,
            event_title: link.title,
            era: link.era,
            date_hijri: link.date_hijri,
            date_gregorian: link.date_gregorian,
            link_type: link.link_type, // 'asbabun_nuzul' | 'peristiwa_terkait'
            context_explanation: link.context_explanation,
            key_figures: link.key_figures,
            authentic_source: link.authentic_source,
            coordinates: link.coordinates
          }))
        }
      }
    };

    res.json(responsePayload);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getReciters = async (req, res) => {
  try {
    const { category, style } = req.query;
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
      data: list
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
