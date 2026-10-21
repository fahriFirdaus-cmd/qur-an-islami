// backend/src/config/db.js
const { Pool } = require('pg');
require('dotenv').config();

// Konfigurasi koneksi PostgreSQL Pool
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'nur_alquran_db',
  max: 20,                  // Maksimal koneksi simultan
  idleTimeoutMillis: 30000, // Timeout koneksi idle (30 detik)
  connectionTimeoutMillis: 5000,
});

// Event listener saat koneksi berhasil dibuat
pool.on('connect', () => {
  console.log('✅ Berhasil terhubung ke database PostgreSQL');
});

// Event listener jika terjadi error pada client idle
pool.on('error', (err) => {
  console.error('❌ Error tak terduga pada koneksi PostgreSQL client:', err);
});

// Fungsi helper untuk menjalankan query
const query = (text, params) => pool.query(text, params);

// Fungsi verifikasi koneksi saat server start
const testConnection = async () => {
  try {
    const res = await pool.query('SELECT NOW() as current_time, current_database() as db_name');
    console.log(`📡 Database aktif: ${res.rows[0].db_name} | Waktu DB: ${res.rows[0].current_time}`);
    return true;
  } catch (err) {
    console.warn(`⚠️ Peringatan: Tidak dapat terhubung ke PostgreSQL (${err.message}).`);
    console.warn(`👉 Menggunakan data fallback di memory (dataStore.js).`);
    return false;
  }
};

module.exports = {
  pool,
  query,
  testConnection
};
