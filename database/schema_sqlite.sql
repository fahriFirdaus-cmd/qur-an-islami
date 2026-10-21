-- =====================================================================
-- SKEMA DATABASE SQLITE
-- Aplikasi: Nur Al-Qur'an (Pusat Ibadah & Peradaban Islam)
-- Standar Teks: Rasm Uthmani (Madinah / Kemenag RI)
-- =====================================================================

PRAGMA foreign_keys = ON;

-- ---------------------------------------------------------------------
-- 1. TABEL INTI AL-QUR'AN
-- ---------------------------------------------------------------------

-- Tabel Surah (1 - 114)
CREATE TABLE IF NOT EXISTS surahs (
    id INTEGER PRIMARY KEY CHECK (id BETWEEN 1 AND 114),
    name_latin TEXT NOT NULL,
    name_arabic TEXT NOT NULL,
    name_translation TEXT NOT NULL,
    revelation_type TEXT NOT NULL CHECK (revelation_type IN ('Makkiyah', 'Madaniyah')),
    total_verses INTEGER NOT NULL CHECK (total_verses > 0),
    revelation_order INTEGER,
    juz_start INTEGER CHECK (juz_start BETWEEN 1 AND 30),
    page_start INTEGER,
    created_at TEXT DEFAULT (datetime('now'))
);

-- Tabel Ayat (Verses)
CREATE TABLE IF NOT EXISTS verses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    surah_id INTEGER NOT NULL REFERENCES surahs(id) ON DELETE CASCADE,
    verse_number INTEGER NOT NULL,
    text_uthmani TEXT NOT NULL,
    text_uthmani_simple TEXT,
    text_latin TEXT,
    juz INTEGER NOT NULL CHECK (juz BETWEEN 1 AND 30),
    page INTEGER,
    sajdah INTEGER DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now')),
    CONSTRAINT uq_surah_verse UNIQUE (surah_id, verse_number)
);

-- Tabel Terjemahan
CREATE TABLE IF NOT EXISTS translations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    verse_id INTEGER NOT NULL REFERENCES verses(id) ON DELETE CASCADE,
    language_code TEXT NOT NULL DEFAULT 'id',
    source TEXT NOT NULL,
    translation_text TEXT NOT NULL,
    footnotes TEXT,
    created_at TEXT DEFAULT (datetime('now')),
    CONSTRAINT uq_verse_lang_source UNIQUE (verse_id, language_code, source)
);

-- Tabel Qori (Reciters)
CREATE TABLE IF NOT EXISTS reciters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    arabic_name TEXT,
    country TEXT,
    style TEXT NOT NULL CHECK (style IN ('Murattal', 'Mujawwad')),
    category TEXT NOT NULL CHECK (category IN ('Internasional', 'Nusantara')),
    bitrate TEXT DEFAULT '128kbps',
    biography TEXT,
    profile_image_url TEXT,
    is_active INTEGER DEFAULT 1,
    created_at TEXT DEFAULT (datetime('now'))
);

-- Tabel File Audio
CREATE TABLE IF NOT EXISTS audio_files (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    reciter_id INTEGER NOT NULL REFERENCES reciters(id) ON DELETE RESTRICT,
    surah_id INTEGER NOT NULL REFERENCES surahs(id) ON DELETE CASCADE,
    verse_number INTEGER,
    audio_url TEXT NOT NULL,
    format TEXT DEFAULT 'mp3',
    duration_seconds REAL,
    bitrate_kbps INTEGER DEFAULT 128,
    created_at TEXT DEFAULT (datetime('now')),
    CONSTRAINT uq_audio_reciter_surah_verse UNIQUE (reciter_id, surah_id, verse_number)
);

-- ---------------------------------------------------------------------
-- 2. TABEL SEJARAH ISLAM & JEJAK SEJARAH DALAM AYAT
-- ---------------------------------------------------------------------

-- Kategori Sejarah (Era)
CREATE TABLE IF NOT EXISTS historical_categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    period_start_hijri INTEGER,
    period_end_hijri INTEGER,
    period_start_gregorian INTEGER,
    period_end_gregorian INTEGER,
    description TEXT,
    badge_color TEXT DEFAULT '#C9A227'
);

-- Peristiwa Bersejarah
CREATE TABLE IF NOT EXISTS historical_events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_id TEXT UNIQUE NOT NULL,
    category_id INTEGER REFERENCES historical_categories(id) ON DELETE RESTRICT,
    era_slug TEXT NOT NULL,
    era_title TEXT NOT NULL,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    date_hijri TEXT,
    date_gregorian TEXT,
    location TEXT,
    latitude REAL,
    longitude REAL,
    summary TEXT NOT NULL,
    detail TEXT NOT NULL,
    icon TEXT,
    quran_reference TEXT,
    theological_perspective TEXT,
    journal_reference TEXT, -- format JSON string
    created_at TEXT DEFAULT (datetime('now'))
);

-- Tokoh / Ilmuwan Besar Islam
CREATE TABLE IF NOT EXISTS historical_figures (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    figure_id TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    arabic_name TEXT,
    title TEXT,
    field TEXT,
    years_gregorian TEXT,
    major_work TEXT,
    summary TEXT NOT NULL,
    origin TEXT,
    created_at TEXT DEFAULT (datetime('now'))
);

-- Tabel Penghubung: Jejak Sejarah dalam Ayat
CREATE TABLE IF NOT EXISTS verse_historical_links (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    surah_id INTEGER NOT NULL REFERENCES surahs(id) ON DELETE CASCADE,
    verse_number INTEGER NOT NULL,
    event_id TEXT NOT NULL,
    title TEXT NOT NULL,
    era TEXT NOT NULL,
    date_hijri TEXT,
    date_gregorian TEXT,
    link_type TEXT NOT NULL DEFAULT 'asbabun_nuzul',
    context_explanation TEXT NOT NULL,
    key_figures TEXT, -- JSON array of strings
    authentic_source TEXT,
    latitude REAL,
    longitude REAL,
    location_name TEXT,
    created_at TEXT DEFAULT (datetime('now'))
);

-- ---------------------------------------------------------------------
-- 3. INDEX UNTUK PERFORMA QUERY
-- ---------------------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_verses_surah ON verses(surah_id, verse_number);
CREATE INDEX IF NOT EXISTS idx_translations_verse ON translations(verse_id);
CREATE INDEX IF NOT EXISTS idx_audio_lookup ON audio_files(surah_id, verse_number, reciter_id);
CREATE INDEX IF NOT EXISTS idx_verse_links_lookup ON verse_historical_links(surah_id, verse_number);
CREATE INDEX IF NOT EXISTS idx_events_era ON historical_events(era_slug);
