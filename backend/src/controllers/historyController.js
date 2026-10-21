/**
 * History & Civilization Controller
 * Modul Sejarah Islam Imersif & Fitur Jejak Sejarah dalam Ayat
 */
const { historyTimelineData, historicalFiguresData, historyLinksData } = require('../services/dataStore');

exports.getTimeline = async (req, res) => {
  try {
    const { era } = req.query;
    let events = historyTimelineData;

    if (era) {
      events = events.filter(e => e.era_slug.toLowerCase() === era.toLowerCase());
    }

    res.json({
      success: true,
      total: events.length,
      data: events
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getEventBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const event = historyTimelineData.find(e => e.slug === slug);

    if (!event) {
      return res.status(404).json({ success: false, message: 'Peristiwa sejarah tidak ditemukan' });
    }

    // Cari ayat yang bertaut dengan peristiwa ini
    const linkedVerses = historyLinksData.filter(l => l.event_id === event.id);

    res.json({
      success: true,
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
    let figures = historicalFiguresData;

    if (field) {
      figures = figures.filter(f => f.field.toLowerCase().includes(field.toLowerCase()));
    }

    res.json({
      success: true,
      total: figures.length,
      data: figures
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getJejakAyatList = async (req, res) => {
  try {
    res.json({
      success: true,
      total: historyLinksData.length,
      description: 'Daftar ayat Al-Qur\'an yang memiliki jejak peristiwa sejarah (Asbabun Nuzul / Konteks Historis)',
      data: historyLinksData
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
