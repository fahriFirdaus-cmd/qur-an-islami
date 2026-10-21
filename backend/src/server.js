/**
 * Nur Al-Qur'an Backend API
 * Server Entry Point & Router Config
 */
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const apiRouter = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware keamanan dan logging
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Root Healthcheck
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    app: 'Nur Al-Qur\'an API',
    description: 'Pusat Ibadah & Edukasi Peradaban Islam',
    version: '1.0.0',
    endpoints: {
      surahs: '/api/v1/surahs',
      verseDetail: '/api/v1/verses/:surahId/:verseNumber/details',
      reciters: '/api/v1/reciters',
      historyTimeline: '/api/v1/history/timeline',
      historicalFigures: '/api/v1/history/figures',
      jejakAyat: '/api/v1/history/jejak-ayat'
    }
  });
});

// Mount API v1 Routes
app.use('/api/v1', apiRouter);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint tidak ditemukan'
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('[SERVER ERROR]:', err);
  res.status(500).json({
    success: false,
    message: 'Terjadi kesalahan internal pada server',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

const { testConnection } = require('./config/db');

app.listen(PORT, async () => {
  console.log(`====================================================`);
  console.log(`🚀 Nur Al-Qur'an API berjalan di port: ${PORT}`);
  console.log(`📡 URL: http://localhost:${PORT}`);
  console.log(`🕋 Rasm Uthmani Standar Madinah / Kemenag RI Active`);
  console.log(`====================================================`);
  await testConnection();
});

module.exports = app;
