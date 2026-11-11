/**
 * History & Civilization Controller
 * Modul Sejarah Islam Imersif & Fitur Jejak Sejarah dalam Ayat
 */
const db = require('../config/db');
const { historyTimelineData, historicalFiguresData, historyLinksData } = require('../services/dataStore');

exports.getTimeline = async (req, res) => {
  try {
    const { era } = req.query;

    try {
      let sql = 'SELECT * FROM historical_events';
      let params = [];
      if (era) {
        sql += ' WHERE LOWER(era_slug) = LOWER($1)';
        params.push(era);
      }
      sql += ' ORDER BY id ASC';
      const r = await db.query(sql, params);
      if (r.rows && r.rows.length > 0) {
        return res.json({
          success: true,
          total: r.rowCount,
          source: 'database',
          data: r.rows
        });
      }
    } catch (e) {}

    let events = historyTimelineData;
    if (era) {
      events = events.filter(e => e.era_slug.toLowerCase() === era.toLowerCase());
    }

    res.json({
      success: true,
      total: events.length,
      source: 'dataStore_fallback',
      data: events
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getEventBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    try {
      const r = await db.query('SELECT * FROM historical_events WHERE slug = $1', [slug]);
      if (r.rows && r.rows.length > 0) {
        const event = r.rows[0];
        let linkedVerses = [];
        try {
          const lRes = await db.query('SELECT * FROM verse_historical_links WHERE event_id = $1', [event.event_id || event.id]);
          linkedVerses = lRes.rows;
        } catch (e) {
          linkedVerses = historyLinksData.filter(l => l.event_id === event.id || l.event_id === event.event_id);
        }

        return res.json({
          success: true,
          source: 'database',
          data: {
            ...event,
            linked_verses: linkedVerses
          }
        });
      }
    } catch (e) {}

    const event = historyTimelineData.find(e => e.slug === slug);
    if (!event) {
      return res.status(404).json({ success: false, message: 'Peristiwa sejarah tidak ditemukan' });
    }

    const linkedVerses = historyLinksData.filter(l => l.event_id === event.id);
    res.json({
      success: true,
      source: 'dataStore_fallback',
      data: {
        ...event,
        linked_verses: linkedVerses
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getHistoricalFigures = async (req, res) => {
  try {
    const { field } = req.query;

    try {
      let sql = 'SELECT * FROM historical_figures';
      let params = [];
      if (field) {
        sql += ' WHERE LOWER(field) LIKE LOWER($1)';
        params.push(`%${field}%`);
      }
      sql += ' ORDER BY id ASC';
      const r = await db.query(sql, params);
      if (r.rows && r.rows.length > 0) {
        return res.json({
          success: true,
          total: r.rowCount,
          source: 'database',
          data: r.rows
        });
      }
    } catch (e) {}

    let figures = historicalFiguresData;
    if (field) {
      figures = figures.filter(f => f.field.toLowerCase().includes(field.toLowerCase()));
    }

    res.json({
      success: true,
      total: figures.length,
      source: 'dataStore_fallback',
      data: figures
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getJejakAyatList = async (req, res) => {
  try {
    try {
      const r = await db.query('SELECT * FROM verse_historical_links ORDER BY surah_id ASC, verse_number ASC');
      if (r.rows && r.rows.length > 0) {
        return res.json({
          success: true,
          total: r.rowCount,
          source: 'database',
          description: 'Daftar ayat Al-Qur\'an yang memiliki jejak peristiwa sejarah (Asbabun Nuzul / Konteks Historis)',
          data: r.rows
        });
      }
    } catch (e) {}

    res.json({
      success: true,
      total: historyLinksData.length,
      source: 'dataStore_fallback',
      description: 'Daftar ayat Al-Qur\'an yang memiliki jejak peristiwa sejarah (Asbabun Nuzul / Konteks Historis)',
      data: historyLinksData
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
