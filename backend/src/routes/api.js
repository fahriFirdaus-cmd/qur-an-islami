const express = require('express');
const router = express.Router();
const verseController = require('../controllers/verseController');
const historyController = require('../controllers/historyController');

// ─── Endpoint Al-Qur'an & Ayat ───
router.get('/surahs', verseController.getAllSurahs);
router.get('/surahs/:id', verseController.getSurahById);

// FITUR INTI: Endpoint Relasional Ayat + Terjemahan + Audio + Jejak Sejarah
router.get('/verses/:surahId/:verseNumber/details', verseController.getVerseDetails);

// ─── Endpoint Qori & Audio ───
router.get('/reciters', verseController.getReciters);

// ─── Endpoint Sejarah & Edukasi Peradaban ───
router.get('/history/timeline', historyController.getTimeline);
router.get('/history/events/:slug', historyController.getEventBySlug);
router.get('/history/figures', historyController.getHistoricalFigures);
router.get('/history/jejak-ayat', historyController.getJejakAyatList);

module.exports = router;
