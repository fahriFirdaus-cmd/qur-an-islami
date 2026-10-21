-- =====================================================================
-- SKEMA DATABASE RELASIONAL (PostgreSQL)
-- Aplikasi: Nur Al-Qur'an (Pusat Ibadah & Peradaban Islam)
-- Standar Teks: Rasm Uthmani (Madinah / Kemenag RI)
-- =====================================================================

-- Ekstensi untuk UUID dan indexing teks
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- ---------------------------------------------------------------------
-- 1. TABEL INTI AL-QUR'AN
-- ---------------------------------------------------------------------

-- Tabel Surah
CREATE TABLE IF NOT EXISTS surahs (
    id SMALLINT PRIMARY KEY CHECK (id BETWEEN 1 AND 114),
    name_latin VARCHAR(100) NOT NULL,
    name_arabic VARCHAR(100) NOT NULL,
    name_translation VARCHAR(150) NOT NULL,
    revelation_type VARCHAR(20) NOT NULL CHECK (revelation_type IN ('Makkiyah', 'Madaniyah')),
    total_verses SMALLINT NOT NULL CHECK (total_verses > 0),
    revelation_order SMALLINT,
    juz_start SMALLINT CHECK (juz_start BETWEEN 1 AND 30),
    page_start SMALLINT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabel Ayat (Verses) dengan teks Rasm Uthmani
CREATE TABLE IF NOT EXISTS verses (
    id SERIAL PRIMARY KEY,
    surah_id SMALLINT NOT NULL REFERENCES surahs(id) ON DELETE CASCADE,
    verse_number SMALLINT NOT NULL,
    text_uthmani TEXT NOT NULL,         -- Teks Rasm Uthmani berharakat lengkap
    text_uthmani_simple TEXT,           -- Teks tanpa harakat untuk pencarian cepat
    text_latin TEXT,                    -- Transliterasi latin resmi
    juz SMALLINT NOT NULL CHECK (juz BETWEEN 1 AND 30),
    page SMALLINT,
    sajdah BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_surah_verse UNIQUE (surah_id, verse_number)
);

-- Tabel Terjemahan (Multi-bahasa & Multi-sumber resmi)
CREATE TABLE IF NOT EXISTS translations (
    id SERIAL PRIMARY KEY,
    verse_id INT NOT NULL REFERENCES verses(id) ON DELETE CASCADE,
    language_code VARCHAR(10) NOT NULL DEFAULT 'id', -- 'id', 'en', dsb.
    source VARCHAR(100) NOT NULL,                    -- 'Kemenag RI', 'Sahih International', dll.
    translation_text TEXT NOT NULL,
    footnotes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_verse_lang_source UNIQUE (verse_id, language_code, source)
);

-- Tabel Qori (Reciters)
CREATE TABLE IF NOT EXISTS reciters (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    arabic_name VARCHAR(150),
    country VARCHAR(100),
    style VARCHAR(50) NOT NULL CHECK (style IN ('Murattal', 'Mujawwad')),
    category VARCHAR(50) NOT NULL CHECK (category IN ('Internasional', 'Nusantara')),
    biography TEXT,
    profile_image_url TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabel File Audio (Streaming & CDN Sync)
CREATE TABLE IF NOT EXISTS audio_files (
    id SERIAL PRIMARY KEY,
    reciter_id INT NOT NULL REFERENCES reciters(id) ON DELETE RESTRICT,
    surah_id SMALLINT NOT NULL REFERENCES surahs(id) ON DELETE CASCADE,
    verse_number SMALLINT, -- NULL jika audio mewakili satu surah penuh
    audio_url TEXT NOT NULL,
    format VARCHAR(10) DEFAULT 'mp3',
    duration_seconds NUMERIC(6, 2),
    file_size_bytes BIGINT,
    bitrate_kbps SMALLINT DEFAULT 128,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_audio_reciter_surah_verse UNIQUE (reciter_id, surah_id, verse_number)
);

-- ---------------------------------------------------------------------
-- 2. TABEL SEJARAH ISLAM & FITUR JEJAK SEJARAH DALAM AYAT
-- ---------------------------------------------------------------------

-- Kategori Sejarah (Era / Domain)
CREATE TABLE IF NOT EXISTS historical_categories (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(50) UNIQUE NOT NULL, -- 'kenabian', 'khulafaur_rasyidin', 'umayyah', 'abbasiyah', 'ilmuwan'
    name VARCHAR(100) NOT NULL,
    period_start_hijri INT,
    period_end_hijri INT,
    period_start_gregorian INT,
    period_end_gregorian INT,
    description TEXT,
    badge_color VARCHAR(20) DEFAULT '#C9A227'
);

-- Peristiwa Bersejarah
CREATE TABLE IF NOT EXISTS historical_events (
    id SERIAL PRIMARY KEY,
    category_id INT NOT NULL REFERENCES historical_categories(id) ON DELETE RESTRICT,
    title VARCHAR(200) NOT NULL,
    slug VARCHAR(200) UNIQUE NOT NULL,
    hijri_date VARCHAR(100),
    gregorian_date VARCHAR(100),
    location_name VARCHAR(150),
    latitude NUMERIC(9, 6),
    longitude NUMERIC(9, 6),
    summary TEXT NOT NULL,
    full_narrative TEXT NOT NULL,
    impact_analysis TEXT,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tokoh / Ilmuwan Besar Islam
CREATE TABLE IF NOT EXISTS historical_figures (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    arabic_name VARCHAR(150),
    title_or_epithet VARCHAR(150),  -- e.g. "Bapak Kedokteran Modern", "Amirul Mukminin"
    era_id INT REFERENCES historical_categories(id) ON DELETE SET NULL,
    birth_year_gregorian INT,
    death_year_gregorian INT,
    field_of_expertise VARCHAR(150), -- "Kedokteran, Filsafat", "Astronomi, Matematika"
    major_works TEXT[],             -- Array judul kitab/karya
    biography TEXT NOT NULL,
    image_url TEXT
);

-- Relasi Multi-ke-Multi: Peristiwa & Tokoh
CREATE TABLE IF NOT EXISTS event_figures (
    event_id INT NOT NULL REFERENCES historical_events(id) ON DELETE CASCADE,
    figure_id INT NOT NULL REFERENCES historical_figures(id) ON DELETE CASCADE,
    role_description VARCHAR(200),
    PRIMARY KEY (event_id, figure_id)
);

-- TABEL PENGHUBUNG INTI: "Jejak Sejarah dalam Ayat"
-- Menghubungkan ayat tertentu dengan peristiwa sejarah / Asbabun Nuzul
CREATE TABLE IF NOT EXISTS verse_historical_links (
    id SERIAL PRIMARY KEY,
    verse_id INT NOT NULL REFERENCES verses(id) ON DELETE CASCADE,
    event_id INT NOT NULL REFERENCES historical_events(id) ON DELETE CASCADE,
    link_type VARCHAR(50) NOT NULL DEFAULT 'asbabun_nuzul' 
        CHECK (link_type IN ('asbabun_nuzul', 'peristiwa_terkait', 'referensi_langsung', 'nubuat_terpenuhi')),
    context_explanation TEXT NOT NULL,
    authentic_sources VARCHAR(255), -- e.g. "HR. Bukhari no. 3953; Tafsir Ibnu Katsir Vol. 4"
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_verse_event_link UNIQUE (verse_id, event_id, link_type)
);

-- ---------------------------------------------------------------------
-- 3. INDEX UNTUK PERFORMA QUERY
-- ---------------------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_verses_surah ON verses(surah_id, verse_number);
CREATE INDEX IF NOT EXISTS idx_translations_verse ON translations(verse_id);
CREATE INDEX IF NOT EXISTS idx_audio_lookup ON audio_files(surah_id, verse_number, reciter_id);
CREATE INDEX IF NOT EXISTS idx_verse_links_verse ON verse_historical_links(verse_id);
CREATE INDEX IF NOT EXISTS idx_verse_links_event ON verse_historical_links(event_id);
CREATE INDEX IF NOT EXISTS idx_events_category ON historical_events(category_id);
CREATE INDEX IF NOT EXISTS idx_verses_text_simple_trgm ON verses USING gin (text_uthmani_simple gin_trgm_ops);

-- ---------------------------------------------------------------------
-- 4. CONTOH SEED DATA AWAL
-- ---------------------------------------------------------------------
INSERT INTO surahs (id, name_latin, name_arabic, name_translation, revelation_type, total_verses, juz_start)
VALUES
(1, 'Al-Fatihah', 'الفاتحة', 'Pembukaan', 'Makkiyah', 7, 1),
(2, 'Al-Baqarah', 'البقرة', 'Sapi Betina', 'Madaniyah', 286, 1),
(3, 'Ali ''Imran', 'آل عمران', 'Keluarga ''Imran', 'Madaniyah', 200, 3),
(8, 'Al-Anfal', 'الأنفال', 'Harta Rampasan Perang', 'Madaniyah', 75, 9),
(9, 'At-Taubah', 'التوبة', 'Pengampunan', 'Madaniyah', 129, 10),
(96, 'Al-''Alaq', 'العلق', 'Segumpal Darah', 'Makkiyah', 19, 30),
(110, 'An-Nasr', 'النصر', 'Pertolongan', 'Madaniyah', 3, 30)
ON CONFLICT (id) DO NOTHING;

INSERT INTO historical_categories (id, slug, name, period_start_hijri, period_end_hijri, period_start_gregorian, period_end_gregorian, description, badge_color)
VALUES
(1, 'kenabian', 'Era Kenabian', -53, 11, 570, 632, 'Fase kelahiran Nabi Muhammad ﷺ, turunnya wahyu, dakwah Makkah, Hijrah hingga penaklukan Makkah', '#F4D03F'),
(2, 'khulafaur_rasyidin', 'Era Khulafaur Rasyidin', 11, 40, 632, 661, 'Kepemimpinan Abu Bakar, Umar, Utsman, dan Ali — kodifikasi Al-Qur''an & ekspansi awal peradaban', '#2ECC71'),
(3, 'umayyah', 'Dinasti Umayyah', 41, 132, 661, 750, 'Ekspansi ke Afrika Utara, Al-Andalus (Spanyol), hingga perbatasan barat Tiongkok', '#3498DB'),
(4, 'abbasiyah', 'Dinasti Abbasiyah & Golden Age', 132, 656, 750, 1258, 'Pusat ilmu dunia di Baghdad (Bayt Al-Hikmah), era keemasan sains dan filsafat', '#9B59B6'),
(5, 'ilmuwan', 'Ilmuwan & Tokoh Besar Islam', 150, 900, 767, 1492, 'Biografi sarjana multidisiplin yang mengubah peradaban dunia', '#E67E22')
ON CONFLICT (id) DO NOTHING;

INSERT INTO reciters (id, name, arabic_name, country, style, category, biography)
VALUES
(1, 'Mishary Rashid Al-Afasy', 'مشاري بن راشد العفاسي', 'Kuwait', 'Murattal', 'Internasional', 'Imam Masjidil Kabir Kuwait, qori internasional dengan tilawah tartil merdu'),
(2, 'Mahmoud Khalil Al-Husary', 'محمود خليل الحصري', 'Mesir', 'Murattal', 'Internasional', 'Pionir rekaman Al-Qur''an dengan tajwid paling presisi'),
(3, 'Abdul Basit Abdus Samad', 'عبد الباسط عبد الصمد', 'Mesir', 'Mujawwad', 'Internasional', 'Legenda qori dunia dengan nafas panjang dan teknik maqomat tinggi'),
(4, 'Muammar ZA', 'معمر ز.ع', 'Indonesia', 'Murattal', 'Nusantara', 'Maestro qori Indonesia legendaris dengan cengkok khas Nusantara'),
(5, 'Muzammil Hasballah', 'مزمل حسب الله', 'Indonesia', 'Murattal', 'Nusantara', 'Qori generasi muda pelopor tilawah modern inspiratif Indonesia')
ON CONFLICT (id) DO NOTHING;
