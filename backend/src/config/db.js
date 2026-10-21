// backend/src/config/db.js
const { Pool } = require('pg');
const { DatabaseSync } = require('node:sqlite');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const sqlitePath = path.resolve(__dirname, '../../../database/quran.db');

let activeEngine = 'memory'; // 'postgres' | 'sqlite' | 'memory'
let sqliteDb = null;

// Konfigurasi koneksi PostgreSQL Pool
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'nur_alquran_db',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000, // Cepat beralih ke SQLite jika PostgreSQL tidak berjalan
});

pool.on('error', () => {
  // Menghindari unhandled error saat pg tidak aktif
});

/**
 * Helper Universal Query
 * Bekerja transparan di PostgreSQL maupun SQLite
 */
const query = async (text, params = []) => {
  if (activeEngine === 'postgres') {
    return pool.query(text, params);
  }

  if (activeEngine === 'sqlite' && sqliteDb) {
    // Ubah format placeholder PostgreSQL ($1, $2, ...) menjadi (?) untuk SQLite
    const sqliteSql = text.replace(/\$(\d+)/g, '?');
    const trimmed = sqliteSql.trim().toUpperCase();

    if (trimmed.startsWith('SELECT') || trimmed.startsWith('PRAGMA')) {
      const stmt = sqliteDb.prepare(sqliteSql);
      const rows = stmt.all(...params);
      return { rows, rowCount: rows.length };
    } else {
      const stmt = sqliteDb.prepare(sqliteSql);
      const info = stmt.run(...params);
      return { rows: [], rowCount: info.changes, lastID: info.lastInsertRowid };
    }
  }

  throw new Error('Tidak ada engine database yang aktif (menggunakan in-memory store)');
};

/**
 * Fungsi verifikasi koneksi saat server start
 * Urutan prioritas: PostgreSQL -> SQLite (database/quran.db) -> Memory DataStore
 */
const testConnection = async () => {
  // 1. Coba koneksi ke PostgreSQL
  if (process.env.DB_CLIENT !== 'sqlite') {
    try {
      const res = await pool.query('SELECT NOW() as current_time, current_database() as db_name');
      activeEngine = 'postgres';
      console.log(`✅ Berhasil terhubung ke database PostgreSQL: ${res.rows[0].db_name}`);
      return true;
    } catch {
      // PostgreSQL tidak aktif, lanjut ke SQLite
    }
  }

  // 2. Coba koneksi ke SQLite database lokal
  if (fs.existsSync(sqlitePath)) {
    try {
      sqliteDb = new DatabaseSync(sqlitePath);
      activeEngine = 'sqlite';
      const check = sqliteDb.prepare('SELECT COUNT(*) as total FROM surahs').get();
      console.log(`✅ Berhasil terhubung ke database SQLite: ${path.basename(sqlitePath)} (${check.total} Surah aktif)`);
      return true;
    } catch (err) {
      console.warn(`⚠️ Gagal membuka SQLite: ${err.message}`);
    }
  }

  // 3. Fallback ke In-Memory DataStore
  console.warn(`⚠️ Database tidak ditemukan, menggunakan data fallback di memory (dataStore.js).`);
  activeEngine = 'memory';
  return false;
};

module.exports = {
  pool,
  getSqliteDb: () => sqliteDb,
  getActiveEngine: () => activeEngine,
  query,
  testConnection
};
