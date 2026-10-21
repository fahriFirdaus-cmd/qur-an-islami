/**
 * Inisialisasi & Seeding Database SQLite (database/quran.db)
 * Menggunakan modul native node:sqlite (tanpa dependensi eksternal)
 */
const { DatabaseSync } = require('node:sqlite');
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'quran.db');
const schemaPath = path.join(__dirname, 'schema_sqlite.sql');

console.log('====================================================');
console.log('🕋 INISIALISASI DATABASE SQLITE: NUR AL-QUR\'AN');
console.log(`📁 File Database: ${dbPath}`);
console.log('====================================================\n');

// Hapus database lama jika ingin inisialisasi ulang yang bersih
if (fs.existsSync(dbPath)) {
  fs.unlinkSync(dbPath);
}

const db = new DatabaseSync(dbPath);
db.exec('PRAGMA foreign_keys = ON;');

// 1. Jalankan Skema
console.log('⏳ Mengeksekusi skema database (schema_sqlite.sql)...');
const schemaSql = fs.readFileSync(schemaPath, 'utf8');
db.exec(schemaSql);
console.log('✅ Skema tabel & indeks berhasil dibuat!\n');

// 2. Daftar Lengkap 114 Surah Al-Qur'an
console.log('⏳ Melakukan seeding 114 Surah...');
const surahs = [
  { id: 1, name: "Al-Fatihah", ar: "الفاتحة", tr: "Pembukaan", type: "Makkiyah", count: 7, juz: 1 },
  { id: 2, name: "Al-Baqarah", ar: "البقرة", tr: "Sapi Betina", type: "Madaniyah", count: 286, juz: 1 },
  { id: 3, name: "Ali 'Imran", ar: "آل عمران", tr: "Keluarga 'Imran", type: "Madaniyah", count: 200, juz: 3 },
  { id: 4, name: "An-Nisa'", ar: "النساء", tr: "Wanita", type: "Madaniyah", count: 176, juz: 4 },
  { id: 5, name: "Al-Ma'idah", ar: "المائدة", tr: "Jamuan Hidangan", type: "Madaniyah", count: 120, juz: 6 },
  { id: 6, name: "Al-An'am", ar: "الأنعam", tr: "Hewan Ternak", type: "Makkiyah", count: 165, juz: 7 },
  { id: 7, name: "Al-A'raf", ar: "الأعراف", tr: "Tempat Tertinggi", type: "Makkiyah", count: 206, juz: 8 },
  { id: 8, name: "Al-Anfal", ar: "الأنفال", tr: "Rampasan Perang", type: "Madaniyah", count: 75, juz: 9 },
  { id: 9, name: "At-Taubah", ar: "التوبة", tr: "Pengampunan", type: "Madaniyah", count: 129, juz: 10 },
  { id: 10, name: "Yunus", ar: "يونس", tr: "Nabi Yunus", type: "Makkiyah", count: 109, juz: 11 },
  { id: 11, name: "Hud", ar: "هود", tr: "Nabi Hud", type: "Makkiyah", count: 123, juz: 11 },
  { id: 12, name: "Yusuf", ar: "يوسف", tr: "Nabi Yusuf", type: "Makkiyah", count: 111, juz: 12 },
  { id: 13, name: "Ar-Ra'd", ar: "الرعد", tr: "Guruh", type: "Madaniyah", count: 43, juz: 13 },
  { id: 14, name: "Ibrahim", ar: "إبراهيم", tr: "Nabi Ibrahim", type: "Makkiyah", count: 52, juz: 13 },
  { id: 15, name: "Al-Hijr", ar: "الحجر", tr: "Bukit Hijr", type: "Makkiyah", count: 99, juz: 14 },
  { id: 16, name: "An-Nahl", ar: "النحل", tr: "Lebah", type: "Makkiyah", count: 128, juz: 14 },
  { id: 17, name: "Al-Isra'", ar: "الإسراء", tr: "Memperjalankan di Malam Hari", type: "Makkiyah", count: 111, juz: 15 },
  { id: 18, name: "Al-Kahf", ar: "الكهف", tr: "Gua", type: "Makkiyah", count: 110, juz: 15 },
  { id: 19, name: "Maryam", ar: "مريم", tr: "Maryam", type: "Makkiyah", count: 98, juz: 16 },
  { id: 20, name: "Taha", ar: "طه", tr: "Thaha", type: "Makkiyah", count: 135, juz: 16 },
  { id: 21, name: "Al-Anbiya'", ar: "الأنبياء", tr: "Para Nabi", type: "Makkiyah", count: 112, juz: 17 },
  { id: 22, name: "Al-Hajj", ar: "الحج", tr: "Haji", type: "Madaniyah", count: 78, juz: 17 },
  { id: 23, name: "Al-Mu'minun", ar: "المؤمنون", tr: "Orang-Orang Mukmin", type: "Makkiyah", count: 118, juz: 18 },
  { id: 24, name: "An-Nur", ar: "النور", tr: "Cahaya", type: "Madaniyah", count: 64, juz: 18 },
  { id: 25, name: "Al-Furqan", ar: "الفرقان", tr: "Pembeda", type: "Makkiyah", count: 77, juz: 18 },
  { id: 26, name: "Asy-Syu'ara'", ar: "الشعراء", tr: "Para Penyair", type: "Makkiyah", count: 227, juz: 19 },
  { id: 27, name: "An-Naml", ar: "النمل", tr: "Semut", type: "Makkiyah", count: 93, juz: 19 },
  { id: 28, name: "Al-Qasas", ar: "القصص", tr: "Kisah-Kisah", type: "Makkiyah", count: 88, juz: 20 },
  { id: 29, name: "Al-'Ankabut", ar: "العنكبوت", tr: "Laba-Laba", type: "Makkiyah", count: 69, juz: 20 },
  { id: 30, name: "Ar-Rum", ar: "الروم", tr: "Bangsa Romawi", type: "Makkiyah", count: 60, juz: 21 },
  { id: 31, name: "Luqman", ar: "لقمان", tr: "Luqman", type: "Makkiyah", count: 34, juz: 21 },
  { id: 32, name: "As-Sajdah", ar: "السجدة", tr: "Sujud", type: "Makkiyah", count: 30, juz: 21 },
  { id: 33, name: "Al-Ahzab", ar: "الأحزاب", tr: "Golongan yang Bersekutu", type: "Madaniyah", count: 73, juz: 21 },
  { id: 34, name: "Saba'", ar: "سبأ", tr: "Kaum Saba'", type: "Makkiyah", count: 54, juz: 22 },
  { id: 35, name: "Fatir", ar: "فاطر", tr: "Pencipta", type: "Makkiyah", count: 45, juz: 22 },
  { id: 36, name: "Ya-Sin", ar: "يس", tr: "Yasin", type: "Makkiyah", count: 83, juz: 22 },
  { id: 37, name: "As-Saffat", ar: "الصافات", tr: "Barisan-Barisan", type: "Makkiyah", count: 182, juz: 23 },
  { id: 38, name: "Sad", ar: "ص", tr: "Shad", type: "Makkiyah", count: 88, juz: 23 },
  { id: 39, name: "Az-Zumar", ar: "الزمر", tr: "Rombongan", type: "Makkiyah", count: 75, juz: 23 },
  { id: 40, name: "Gafir", ar: "غافر", tr: "Maha Pengampun", type: "Makkiyah", count: 85, juz: 24 },
  { id: 41, name: "Fussilat", ar: "فصلت", tr: "Yang Dijelaskan", type: "Makkiyah", count: 54, juz: 24 },
  { id: 42, name: "Asy-Syura", ar: "الشورى", tr: "Musyawarah", type: "Makkiyah", count: 53, juz: 25 },
  { id: 43, name: "Az-Zukhruf", ar: "الزخرف", tr: "Perhiasan", type: "Makkiyah", count: 89, juz: 25 },
  { id: 44, name: "Ad-Dukhan", ar: "الدخان", tr: "Kabut Asap", type: "Makkiyah", count: 59, juz: 25 },
  { id: 45, name: "Al-Jasiyah", ar: "الجاثية", tr: "Yang Berlutut", type: "Makkiyah", count: 37, juz: 25 },
  { id: 46, name: "Al-Ahqaf", ar: "الأحقاف", tr: "Bukit Pasir", type: "Makkiyah", count: 35, juz: 26 },
  { id: 47, name: "Muhammad", ar: "محمد", tr: "Nabi Muhammad", type: "Madaniyah", count: 38, juz: 26 },
  { id: 48, name: "Al-Fath", ar: "الفتح", tr: "Kemenangan", type: "Madaniyah", count: 29, juz: 26 },
  { id: 49, name: "Al-Hujurat", ar: "الحجرات", tr: "Kamar-Kamar", type: "Madaniyah", count: 18, juz: 26 },
  { id: 50, name: "Qaf", ar: "ق", tr: "Qaf", type: "Makkiyah", count: 45, juz: 26 },
  { id: 51, name: "Az-Zariyat", ar: "الذاريات", tr: "Angin Penerbang", type: "Makkiyah", count: 60, juz: 26 },
  { id: 52, name: "At-Tur", ar: "الطور", tr: "Bukit", type: "Makkiyah", count: 49, juz: 27 },
  { id: 53, name: "An-Najm", ar: "النجم", tr: "Bintang", type: "Makkiyah", count: 62, juz: 27 },
  { id: 54, name: "Al-Qamar", ar: "القمر", tr: "Bulan", type: "Makkiyah", count: 55, juz: 27 },
  { id: 55, name: "Ar-Rahman", ar: "الرحمن", tr: "Maha Pengasih", type: "Madaniyah", count: 78, juz: 27 },
  { id: 56, name: "Al-Waqi'ah", ar: "الواقعة", tr: "Hari Kiamat", type: "Makkiyah", count: 96, juz: 27 },
  { id: 57, name: "Al-Hadid", ar: "الحديد", tr: "Besi", type: "Madaniyah", count: 29, juz: 27 },
  { id: 58, name: "Al-Mujadilah", ar: "المجادلة", tr: "Gugatan", type: "Madaniyah", count: 22, juz: 28 },
  { id: 59, name: "Al-Hasyr", ar: "الحشر", tr: "Pengusiran", type: "Madaniyah", count: 24, juz: 28 },
  { id: 60, name: "Al-Mumtahanah", ar: "الممتحنة", tr: "Wanita yang Diuji", type: "Madaniyah", count: 13, juz: 28 },
  { id: 61, name: "As-Saff", ar: "الصف", tr: "Barisan", type: "Madaniyah", count: 14, juz: 28 },
  { id: 62, name: "Al-Jumu'ah", ar: "الجمعة", tr: "Hari Jumat", type: "Madaniyah", count: 11, juz: 28 },
  { id: 63, name: "Al-Munafiqun", ar: "المنافقون", tr: "Kaum Munafik", type: "Madaniyah", count: 10, juz: 28 },
  { id: 64, name: "At-Tagabun", ar: "التغابن", tr: "Hari Menampakkan Kesalahan", type: "Madaniyah", count: 18, juz: 28 },
  { id: 65, name: "At-Talaq", ar: "الطلاق", tr: "Perceraian", type: "Madaniyah", count: 12, juz: 28 },
  { id: 66, name: "At-Tahrim", ar: "التحريم", tr: "Mengharamkan", type: "Madaniyah", count: 12, juz: 28 },
  { id: 67, name: "Al-Mulk", ar: "الملك", tr: "Kerajaan", type: "Makkiyah", count: 30, juz: 29 },
  { id: 68, name: "Al-Qalam", ar: "القلم", tr: "Pena", type: "Makkiyah", count: 52, juz: 29 },
  { id: 69, name: "Al-Haqqah", ar: "الحاقة", tr: "Hari Kiamat yang Pasti", type: "Makkiyah", count: 52, juz: 29 },
  { id: 70, name: "Al-Ma'arij", ar: "المعارج", tr: "Tempat Naik", type: "Makkiyah", count: 44, juz: 29 },
  { id: 71, name: "Nuh", ar: "نوح", tr: "Nabi Nuh", type: "Makkiyah", count: 28, juz: 29 },
  { id: 72, name: "Al-Jinn", ar: "الجن", tr: "Jin", type: "Makkiyah", count: 28, juz: 29 },
  { id: 73, name: "Al-Muzzammil", ar: "المزمل", tr: "Orang yang Berselimut", type: "Makkiyah", count: 20, juz: 29 },
  { id: 74, name: "Al-Muddassir", ar: "المدثر", tr: "Orang yang Berkemul", type: "Makkiyah", count: 56, juz: 29 },
  { id: 75, name: "Al-Qiyamah", ar: "القيامة", tr: "Hari Kiamat", type: "Makkiyah", count: 40, juz: 29 },
  { id: 76, name: "Al-Insan", ar: "الإنسان", tr: "Manusia", type: "Madaniyah", count: 31, juz: 29 },
  { id: 77, name: "Al-Mursalat", ar: "المرسلات", tr: "Malaikat yang Diutus", type: "Makkiyah", count: 50, juz: 29 },
  { id: 78, name: "An-Naba'", ar: "النبأ", tr: "Berita Besar", type: "Makkiyah", count: 40, juz: 30 },
  { id: 79, name: "An-Nazi'at", ar: "النازعات", tr: "Malaikat Pencabut Nyawa", type: "Makkiyah", count: 46, juz: 30 },
  { id: 80, name: "'Abasa", ar: "عبس", tr: "Ia Bermuka Masam", type: "Makkiyah", count: 42, juz: 30 },
  { id: 81, name: "At-Takwir", ar: "التكوير", tr: "Menggulung", type: "Makkiyah", count: 29, juz: 30 },
  { id: 82, name: "Al-Infitar", ar: "الانفطار", tr: "Terbelah", type: "Makkiyah", count: 19, juz: 30 },
  { id: 83, name: "Al-Mutaffifin", ar: "المطففين", tr: "Orang yang Curang", type: "Makkiyah", count: 36, juz: 30 },
  { id: 84, name: "Al-Insyiqaq", ar: "الانشقاق", tr: "Terbelah", type: "Makkiyah", count: 25, juz: 30 },
  { id: 85, name: "Al-Buruj", ar: "البروج", tr: "Gugusan Bintang", type: "Makkiyah", count: 22, juz: 30 },
  { id: 86, name: "At-Tariq", ar: "الطارق", tr: "Yang Datang di Malam Hari", type: "Makkiyah", count: 17, juz: 30 },
  { id: 87, name: "Al-A'la", ar: "الأعلى", tr: "Maha Tinggi", type: "Makkiyah", count: 19, juz: 30 },
  { id: 88, name: "Al-Gasyiyah", ar: "الغاشية", tr: "Hari Pembalasan", type: "Makkiyah", count: 26, juz: 30 },
  { id: 89, name: "Al-Fajr", ar: "الفجر", tr: "Fajar", type: "Makkiyah", count: 30, juz: 30 },
  { id: 90, name: "Al-Balad", ar: "البلد", tr: "Negeri", type: "Makkiyah", count: 20, juz: 30 },
  { id: 91, name: "Asy-Syams", ar: "الشمس", tr: "Matahari", type: "Makkiyah", count: 15, juz: 30 },
  { id: 92, name: "Al-Lail", ar: "الليل", tr: "Malam", type: "Makkiyah", count: 21, juz: 30 },
  { id: 93, name: "Ad-Duha", ar: "الضحى", tr: "Waktu Dhuha", type: "Makkiyah", count: 11, juz: 30 },
  { id: 94, name: "Asy-Syarh", ar: "الشرح", tr: "Kelapangan", type: "Makkiyah", count: 8, juz: 30 },
  { id: 95, name: "At-Tin", ar: "التين", tr: "Buah Tin", type: "Makkiyah", count: 8, juz: 30 },
  { id: 96, name: "Al-'Alaq", ar: "العلق", tr: "Segumpal Darah", type: "Makkiyah", count: 19, juz: 30 },
  { id: 97, name: "Al-Qadr", ar: "القدر", tr: "Kemuliaan", type: "Makkiyah", count: 5, juz: 30 },
  { id: 98, name: "Al-Bayyinah", ar: "البينة", tr: "Bukti Nyata", type: "Madaniyah", count: 8, juz: 30 },
  { id: 99, name: "Az-Zalzalah", ar: "الزلزلة", tr: "Keguncangan", type: "Madaniyah", count: 8, juz: 30 },
  { id: 100, name: "Al-'Adiyat", ar: "العاديات", tr: "Kuda Perang Cepat", type: "Makkiyah", count: 11, juz: 30 },
  { id: 101, name: "Al-Qari'ah", ar: "القارعة", tr: "Hari Kiamat", type: "Makkiyah", count: 11, juz: 30 },
  { id: 102, name: "At-Takasur", ar: "التكاثر", tr: "Bermegah-Megahan", type: "Makkiyah", count: 8, juz: 30 },
  { id: 103, name: "Al-'Asr", ar: "العصر", tr: "Masa / Waktu", type: "Makkiyah", count: 3, juz: 30 },
  { id: 104, name: "Al-Humazah", ar: "الهمزة", tr: "Pengumpat", type: "Makkiyah", count: 9, juz: 30 },
  { id: 105, name: "Al-Fil", ar: "الفيل", tr: "Gajah", type: "Makkiyah", count: 5, juz: 30 },
  { id: 106, name: "Quraisy", ar: "قريش", tr: "Suku Quraisy", type: "Makkiyah", count: 4, juz: 30 },
  { id: 107, name: "Al-Ma'un", ar: "الماعون", tr: "Barang Berguna", type: "Makkiyah", count: 7, juz: 30 },
  { id: 108, name: "Al-Kausar", ar: "الكوثر", tr: "Nikmat Berlimpah", type: "Makkiyah", count: 3, juz: 30 },
  { id: 109, name: "Al-Kafirun", ar: "الكافرون", tr: "Orang Kafir", type: "Makkiyah", count: 6, juz: 30 },
  { id: 110, name: "An-Nasr", ar: "النصر", tr: "Pertolongan", type: "Madaniyah", count: 3, juz: 30 },
  { id: 111, name: "Al-Lahab", ar: "اللهب", tr: "Gejolak Api", type: "Makkiyah", count: 5, juz: 30 },
  { id: 112, name: "Al-Ikhlas", ar: "الإخلاص", tr: "Keesaan Allah", type: "Makkiyah", count: 4, juz: 30 },
  { id: 113, name: "Al-Falaq", ar: "الفلق", tr: "Waktu Subuh", type: "Makkiyah", count: 5, juz: 30 },
  { id: 114, name: "An-Nas", ar: "الناس", tr: "Manusia", type: "Makkiyah", count: 6, juz: 30 }
];

const insertSurah = db.prepare(`
  INSERT INTO surahs (id, name_latin, name_arabic, name_translation, revelation_type, total_verses, juz_start)
  VALUES (?, ?, ?, ?, ?, ?, ?)
`);

for (const s of surahs) {
  insertSurah.run(s.id, s.name, s.ar, s.tr, s.type, s.count, s.juz);
}
console.log(`✅ 114 Surah berhasil di-seed!`);

// 3. Load Dataset Kaya dari dataStore.js
const { 
  quranData, 
  recitersData, 
  historyLinksData, 
  historyTimelineData, 
  historicalFiguresData 
} = require('../backend/src/services/dataStore');

// 4. Seeding Verses & Translations
console.log('⏳ Melakukan seeding Ayat & Terjemahan...');
const insertVerse = db.prepare(`
  INSERT INTO verses (surah_id, verse_number, text_uthmani, text_latin, juz, page)
  VALUES (?, ?, ?, ?, ?, ?)
`);
const insertTranslation = db.prepare(`
  INSERT INTO translations (verse_id, language_code, source, translation_text)
  VALUES (?, ?, ?, ?)
`);

let verseCount = 0;
for (const v of quranData.verses) {
  const res = insertVerse.run(v.surah_id, v.verse_number, v.text_uthmani, v.text_latin, v.juz || 1, v.page || 1);
  const verseId = Number(res.lastInsertRowid);
  verseCount++;

  // Terjemahan Indonesia (Kemenag RI)
  if (v.translation_id) {
    insertTranslation.run(verseId, 'id', 'Kemenag RI', v.translation_id);
  }
  // Terjemahan Inggris (Sahih International)
  if (v.translation_en) {
    insertTranslation.run(verseId, 'en', 'Sahih International', v.translation_en);
  }
}
console.log(`✅ ${verseCount} Ayat & Terjemahan berhasil di-seed!`);

// 5. Seeding Qori (Reciters)
console.log('⏳ Melakukan seeding data Qori (Reciters)...');
const insertReciter = db.prepare(`
  INSERT INTO reciters (slug, name, arabic_name, country, style, category, bitrate)
  VALUES (?, ?, ?, ?, ?, ?, ?)
`);

for (const r of recitersData) {
  insertReciter.run(r.id, r.name, r.arabic_name, r.country, r.style, r.category, r.bitrate || '128kbps');
}
console.log(`✅ ${recitersData.length} Qori berhasil di-seed!`);

// 6. Seeding Kategori Sejarah
console.log('⏳ Melakukan seeding Kategori Era Sejarah...');
const insertCategory = db.prepare(`
  INSERT INTO historical_categories (id, slug, name, period_start_hijri, period_end_hijri, period_start_gregorian, period_end_gregorian, description, badge_color)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

const categories = [
  { id: 1, slug: 'kenabian_makkah', name: 'Periode Kenabian Makkah', sh: -53, eh: 1, sg: 570, eg: 622, desc: 'Fase kelahiran Nabi ﷺ, turunnya wahyu, dakwah tauhid Makkah, hingga Hijrah.', color: '#F4D03F' },
  { id: 2, slug: 'kenabian_madinah', name: 'Periode Kenabian Madinah', sh: 1, eh: 11, sg: 622, eg: 632, desc: 'Pendirian Piagam Madinah, pembentukan masyarakat berkeadaban, hingga Fathu Makkah.', color: '#2ECC71' },
  { id: 3, slug: 'khulafaur_rasyidin', name: 'Era Khulafaur Rasyidin', sh: 11, eh: 40, sg: 632, eg: 661, desc: 'Kepemimpinan Abu Bakar, Umar, Utsman, Ali. Kodifikasi Mushaf Utsmani & ekspansi keadilan.', color: '#1ABC9C' },
  { id: 4, slug: 'umayyah', name: 'Dinasti Umayyah', sh: 41, eh: 132, sg: 661, eg: 750, desc: 'Ekspansi peradaban ke Cordoba Al-Andalus hingga perbatasan barat Tiongkok.', color: '#3498DB' },
  { id: 5, slug: 'abbasiyah_golden_age', name: 'Dinasti Abbasiyah & Golden Age', sh: 132, eh: 656, sg: 750, eg: 1258, desc: 'Pusat sains dunia di Bayt Al-Hikmah Baghdad, pelopor sains eksperimental modern.', color: '#9B59B6' }
];

for (const c of categories) {
  insertCategory.run(c.id, c.slug, c.name, c.sh, c.eh, c.sg, c.eg, c.desc, c.color);
}
console.log(`✅ ${categories.length} Kategori Era Sejarah berhasil di-seed!`);

// 7. Seeding Peristiwa Bersejarah (Timeline Events)
console.log('⏳ Melakukan seeding 24 Peristiwa Sejarah Imersif...');
const insertEvent = db.prepare(`
  INSERT INTO historical_events (
    event_id, era_slug, era_title, title, slug, date_hijri, date_gregorian, 
    location, latitude, longitude, summary, detail, icon, quran_reference, 
    theological_perspective, journal_reference
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

for (const e of historyTimelineData) {
  insertEvent.run(
    e.id,
    e.era_slug,
    e.era_title,
    e.title,
    e.slug,
    e.date_hijri,
    e.date_gregorian,
    e.location,
    e.latitude || null,
    e.longitude || null,
    e.summary,
    e.detail,
    e.icon || null,
    e.quran_reference || null,
    e.theological_perspective || null,
    e.journal_reference ? JSON.stringify(e.journal_reference) : null
  );
}
console.log(`✅ ${historyTimelineData.length} Peristiwa Sejarah berhasil di-seed!`);

// 8. Seeding Tokoh & Ilmuwan Besar Islam
console.log('⏳ Melakukan seeding Tokoh & Ilmuwan Muslim...');
const insertFigure = db.prepare(`
  INSERT INTO historical_figures (
    figure_id, name, arabic_name, title, field, years_gregorian, major_work, summary, origin
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

for (const f of historicalFiguresData) {
  insertFigure.run(
    f.id,
    f.name,
    f.arabic_name,
    f.title,
    f.field,
    f.years_gregorian,
    f.major_work,
    f.summary,
    f.origin
  );
}
console.log(`✅ ${historicalFiguresData.length} Tokoh & Ilmuwan berhasil di-seed!`);

// 9. Seeding Jejak Sejarah dalam Ayat
console.log('⏳ Melakukan seeding Jejak Sejarah dalam Ayat...');
const insertLink = db.prepare(`
  INSERT INTO verse_historical_links (
    surah_id, verse_number, event_id, title, era, date_hijri, date_gregorian, 
    link_type, context_explanation, key_figures, authentic_source, latitude, longitude, location_name
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

for (const l of historyLinksData) {
  insertLink.run(
    l.surah_id,
    l.verse_number,
    l.event_id,
    l.title,
    l.era,
    l.date_hijri,
    l.date_gregorian,
    l.link_type,
    l.context_explanation,
    l.key_figures ? JSON.stringify(l.key_figures) : null,
    l.authentic_source,
    l.coordinates?.lat || null,
    l.coordinates?.lng || null,
    l.coordinates?.location || null
  );
}
console.log(`✅ ${historyLinksData.length} Jejak Sejarah Ayat berhasil di-seed!\n`);

// 10. Ringkasan Akhir
console.log('====================================================');
console.log('🎉 INVENTARIS DATABASE SELESAI DIBUAT!');
console.log('====================================================');
const tables = [
  'surahs', 
  'verses', 
  'translations', 
  'reciters', 
  'historical_categories', 
  'historical_events', 
  'historical_figures', 
  'verse_historical_links'
];

for (const tbl of tables) {
  const count = db.prepare(`SELECT COUNT(*) as count FROM ${tbl}`).get().count;
  console.log(`📊 Tabel [${tbl.padEnd(24)}]: ${count} baris data`);
}

db.close();
console.log(`\n💾 Lokasi file database: ${dbPath}`);
console.log('✨ Siap dibuka langsung di ekstensi VS Code: Database Client / SQLite Viewer!');
