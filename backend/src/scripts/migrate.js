// backend/src/scripts/migrate.js
/**
 * Script Otomatis Migrasi Database PostgreSQL
 * Membaca file database/schema.sql dan mengeksekusinya ke database
 */
const fs = require('fs');
const path = require('path');
const { pool } = require('../config/db');

async function runMigration() {
  const schemaPath = path.join(__dirname, '../../../database/schema.sql');
  console.log(`⏳ Membaca skema database dari: ${schemaPath}`);

  if (!fs.existsSync(schemaPath)) {
    console.error(`❌ File schema.sql tidak ditemukan di: ${schemaPath}`);
    process.exit(1);
  }

  const sql = fs.readFileSync(schemaPath, 'utf8');

  try {
    console.log('⏳ Menjalankan DDL migrasi ke PostgreSQL...');
    await pool.query(sql);
    console.log('🎉 Migrasi Berhasil! Seluruh tabel dan seed data telah dibuat.');
  } catch (err) {
    console.error('❌ Gagal menjalankan migrasi:', err.message);
  } finally {
    await pool.end();
  }
}

runMigration();
