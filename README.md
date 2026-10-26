# 📖 Quran Harmony - Spiritual Journey

<div align="center">

![Quran Harmony](https://img.shields.io/badge/Al--Qur'an-Digital-1b4332?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![Translation](https://img.shields.io/badge/Multi--Language-ID%20%7C%20EN-blue?style=for-the-badge)

**Aplikasi Al-Qur'an digital interaktif lengkap dengan audio murottal, sejarah Islam, dan Asbabun Nuzul**

[🚀 Demo](#-cara-menjalankan) • [✨ Fitur](#-fitur-utama) • [📖 Dokumentasi](#-dokumentasi) • [🛠️ Teknologi](#️-teknologi)

</div>

---

## 🌟 Tentang Project

**Quran Harmony** adalah aplikasi Al-Qur'an digital modern yang menggabungkan:
- 📖 Teks Al-Qur'an lengkap (114 Surah) dengan Rasm Uthmani
- 🌍 Terjemahan multi-bahasa (Indonesia & English)
- 🎧 Audio murottal dari 6 Qori terkenal dunia
- 📜 Timeline sejarah Islam yang interaktif
- 🏛️ Asbabun Nuzul (konteks historis wahyu)

---

## ✨ Fitur Utama

### 1. 📖 **Al-Qur'an Digital Lengkap**
- ✅ 114 Surah dengan teks Arab Rasm Uthmani standar Madinah
- ✅ Terjemahan Indonesia (Kemenag RI) dan English (Sahih International)
- ✅ Transliterasi Latin untuk memudahkan pembacaan
- ✅ Font size adjustable (26px - 54px)
- ✅ Bookmark ayat favorit
- ✅ Jump to ayat (cari dengan format: 2:255)
- ✅ Filter Surah: Semua, Makkiyyah (84), Madaniyyah (30)
- ✅ Catalog view dengan informasi lengkap setiap Surah

### 2. 🎧 **Audio Murottal Premium**
- ✅ 6 Qori terkenal dunia:
  - Mishary Rashid Al-Afasy
  - Abdurrahman As-Sudais
  - Abu Bakr Ash-Shatri
  - Mahmoud Khalil Al-Husary
  - Abdul Basit Abdus Samad
  - Mustafa Ismail
- ✅ Play per ayat atau full surah
- ✅ Upload audio MP3 custom
- ✅ Repeat mode (3x, 5x, continuous) untuk hafalan
- ✅ Playback speed control (0.75x - 1.5x)
- ✅ Auto-play next verse

### 3. 📜 **Sejarah Islam Interaktif** ⭐ **(FULL MULTI-LANGUAGE)**
- ✅ Timeline lengkap dari Era Kenabian (570 M) hingga Wafatnya Nabi (632 M)
- ✅ **Terjemahan Bahasa Indonesia & English yang sempurna**
- ✅ 14+ event penting dengan detail lengkap
- ✅ Rujukan akademik (Shahih Bukhari, Muslim, Ibn Hisham, at-Tabari, Ibn Kathir)
- ✅ Link ke ayat Al-Qur'an terkait
- ✅ Tokoh-tokoh penting dalam setiap event
- ✅ Modal detail dengan narasi lengkap

#### Event Sejarah yang Tersedia:
1. **Kelahiran Nabi Muhammad ﷺ** (570 M)
2. **Wahyu Pertama di Gua Hira** (610 M)
3. **Dakwah Terbuka di Bukit Shafa** (613 M)
4. **Hijrah ke Habasyah** (615 M)
5. **Tahun Duka Cita** (619 M)
6. **Isra' Mi'raj** (620-621 M)
7. **Hijrah ke Madinah & Piagam Madinah** (622 M)
8. **Perang Badar** (624 M)
9. **Perang Uhud** (625 M)
10. **Perang Khandaq** (627 M)
11. **Perjanjian Hudaibiyah** (628 M)
12. **Fathu Makkah** (630 M)
13. **Ekspedisi Tabuk** (631 M)
14. **Haji Wada'** (632 M)
15. **Wafatnya Nabi Muhammad ﷺ** (632 M)

### 4. 🏛️ **Asbabun Nuzul (Jejak Wahyu)**
- ✅ Konteks historis turunnya ayat-ayat suci
- ✅ Rujukan hadis sahih (Bukhari & Muslim)
- ✅ Hubungan antara ayat dan peristiwa sejarah
- ✅ Penjelasan lengkap dengan tafsir

### 5. ⚙️ **Pengaturan Lengkap**
- ✅ **Bahasa:** Indonesia / English (seamless switching)
- ✅ **Rasm/Mushaf:** Madinah / Kemenag RI
- ✅ **Font Arab:** Amiri Quran / Uthmanic / Traditional
- ✅ **Theme:** Light / Dark / Sepia
- ✅ **Transliterasi:** On / Off
- ✅ **Audio Settings:** Auto-play, Repeat mode, Speed control

---

## 🚀 Cara Menjalankan

### Metode 1: Live Server (Rekomendasi untuk Development)

```bash
# Clone repository
git clone <repo-url>
cd "qur-an islami"

# Buka dengan Live Server (VS Code Extension)
# Atau gunakan Python Simple HTTP Server:
python -m http.server 8000

# Akses di browser:
# http://localhost:8000/web/
```

### Metode 2: Langsung Buka File HTML

```bash
# Buka file ini di browser:
web/index.html
```

### Metode 3: Dengan Backend API (Opsional)

```bash
# Jalankan backend
cd backend
npm install
npm start

# Backend akan berjalan di http://localhost:5000
# Frontend tetap di web/index.html
```

---

## 🎯 Cara Menggunakan

### 1. **Membaca Al-Qur'an**
- Klik menu **"Al-Qur'an"** di navbar
- Pilih surah dari sidebar atau gunakan search
- Scroll untuk membaca ayat
- Klik speaker icon untuk mendengar audio per ayat

### 2. **Ganti Bahasa ke English**
- Klik tombol **🌐 ID** di pojok kanan atas
- Pilih **EN** untuk English
- Semua konten (termasuk sejarah) akan otomatis ter-translate

### 3. **Mendengarkan Murottal**
- Klik menu **"Audio"**
- Pilih Qori favorit
- Klik **Play** untuk mulai mendengarkan
- Gunakan repeat mode untuk hafalan

### 4. **Menjelajahi Sejarah Islam**
- Klik menu **"Sejarah" / "History"**
- Pilih tab Era (Kenabian, Khulafaur Rasyidin, dll)
- Klik event untuk melihat detail lengkap
- Ganti bahasa untuk membaca dalam English

### 5. **Asbabun Nuzul**
- Klik menu **"Asbabun Nuzul" / "Revelations"**
- Browse kartu-kartu yang menampilkan ayat dan konteksnya
- Klik untuk detail lengkap

---

## 🛠️ Teknologi

### Frontend
- **HTML5** - Struktur halaman semantic
- **CSS3** - Pure CSS, no framework, full responsive
- **Vanilla JavaScript (ES6+)** - No jQuery, no React
- **Custom i18n System** - Multi-language support

### Backend (Optional)
- **Node.js + Express.js** - RESTful API
- **SQLite** - Lightweight database

### Data Sources
- **Al-Qur'an Text:** Mushaf Rasm Uthmani (Kemenag RI)
- **Terjemahan:** Kemenag RI & Sahih International
- **Audio:** cdn.equran.id & islamic.network (Free CDN)
- **Sejarah:** Ibn Hisham (Sirah), at-Tabari (Tarikh), Ibn Kathir (Al-Bidayah wan-Nihayah)
- **Hadis:** Shahih Bukhari & Shahih Muslim

---

## 📁 Struktur Project

```
qur-an islami/
├── web/                           # Frontend Application
│   ├── index.html                 # Main HTML
│   ├── style.css                  # Complete Styling
│   ├── data.js                    # Al-Qur'an & History Data (ID)
│   ├── history-en-translations.js # History English Translations
│   ├── app.js                     # Main Application Logic
│   ├── mosque-hero.jpg            # Hero Background
│   └── _redirects                 # Netlify redirects
│
├── backend/                       # Backend API (Optional)
│   ├── src/
│   │   ├── server.js              # Express Server
│   │   ├── config/
│   │   │   └── db.js              # Database Config
│   │   ├── controllers/
│   │   │   ├── historyController.js
│   │   │   └── verseController.js
│   │   ├── routes/
│   │   │   └── api.js             # API Routes
│   │   ├── services/
│   │   │   └── dataStore.js       # Data Management
│   │   └── scripts/
│   │       ├── migrate.js         # Data Migration
│   │       └── testEndpoints.js   # API Testing
│   ├── package.json
│   └── .env.example
│
├── database/                      # Database Files
│   ├── quran.db                   # SQLite Database
│   ├── schema.sql                 # Database Schema
│   └── init_sqlite.js             # Init Script
│
├── .kiro/                         # AWS Agent Toolkit
│   └── steering/
│       └── aws-starter-rules.md   # AWS Rules
│
├── README.md                      # This file
├── PERBAIKAN_PROJECT.md           # Detailed Fix Report
└── netlify.toml                   # Netlify Config
```

---

## 🎨 Screenshots

### 1. Halaman Beranda
![Beranda](https://via.placeholder.com/800x450?text=Homepage+Screenshot)

### 2. Pembaca Al-Qur'an
![Reader](https://via.placeholder.com/800x450?text=Quran+Reader+Screenshot)

### 3. Sejarah Islam (Multi-Language)
![History](https://via.placeholder.com/800x450?text=History+Timeline+Screenshot)

### 4. Audio Murottal
![Audio](https://via.placeholder.com/800x450?text=Audio+Player+Screenshot)

---

## 🌐 Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome / Edge | ✅ 90+ |
| Firefox | ✅ 88+ |
| Safari | ✅ 14+ |
| Mobile Safari (iOS) | ✅ 14+ |
| Chrome Android | ✅ 90+ |

---

## 📝 Changelog

### Version 3.0 (October 2026) - Islamic Peaceful Redesign ✨ **LATEST**

#### 🎨 Complete UI/UX Redesign
- **New Islamic Color Palette:**
  - Emerald Green (#10b981) - Kesucian & kedamaian
  - Gold (#f59e0b) - Cahaya ilahi & kemewahan spiritual  
  - Cream (#fdfbf7) - Kesederhanaan & ketenangan
- **Enhanced Typography:**
  - Cinzel display font untuk elegance
  - Font size 0.9rem+ untuk semua buttons (lebih besar & jelas)
  - Amiri Quran untuk teks Arab
- **Islamic Visual Elements:**
  - Geometric pattern background (subtle & tidak mengganggu)
  - Gradient effects di sidebar, topbar, buttons
  - Custom emerald green scrollbar
  - Soft shadows untuk depth perception

#### ✨ Animation & Interactions
- Smooth transitions: 0.2s - 0.5s (tidak berlebihan)
- Glowing hover states dengan lift-up effect (translateY -2px)
- Pulse animation di notification dot (2s loop)
- Fade-in page transitions (0.4s ease)
- Respects `prefers-reduced-motion` for accessibility

#### 🔧 Indonesia Text Fix — 100% Complete
- ✅ All buttons: `padding: 12px 26px` (lebih besar)
- ✅ All buttons: `min-width: fit-content` + `white-space: nowrap`
- ✅ No text cutoff di semua bahasa (Indonesia/English)
- ✅ Responsive padding untuk mobile, tablet, desktop

#### 📱 Enhanced Responsive Design
- **Desktop (>1200px):** Full features, sidebar 320px
- **Tablet (769-1200px):** Sidebar 280px, nav pills hidden
- **Mobile (<768px):** Off-canvas sidebar, hamburger menu
- **Extra Small (<400px):** Ultra compact mode

#### 🌙 Dark Mode Improvements
- Forest green theme (bukan hitam pekat)
- Better contrast ratios
- Cream text untuk readability tinggi

#### 📚 New Documentation
- `style-islamic-redesign.css` - Complete redesign CSS (35 KB)
- `REDESIGN_ISLAMI_DOKUMENTASI.md` - Full design system docs
  - Color palette explained
  - Typography system
  - Component-by-component breakdown
  - Before/after comparisons
  - Testing checklist

---

### Version 2.1 (October 2026)
- ✨ **NEW:** Perbaikan UI terpotong untuk Bahasa Indonesia
- 🐛 **FIX:** All buttons sekarang tampil penuh tanpa ellipsis
- 🐛 **FIX:** Navigation pills tidak lagi terpotong
- 🐛 **FIX:** Era tabs di halaman Sejarah tampil sempurna
- 🐛 **FIX:** Reader controls (Sebelumnya/Beranda/Selanjutnya) readable
- 🐛 **FIX:** View switchers dan filter tabs optimal
- ⚡ **IMPROVE:** Responsive adjustments untuk semua screen sizes
- 📚 **DOCS:** UI_FIXES_DOCUMENTATION.md dengan detail lengkap

### Version 2.0 (October 2026)
- ✨ **NEW:** Fitur translate sejarah sekarang berfungsi sempurna
- ✨ **NEW:** Multi-language support untuk semua event Kenabian
- 🐛 **FIX:** renderTimeline() sekarang support bahasa dinamis
- 🐛 **FIX:** openEventModal() menampilkan konten dalam bahasa yang dipilih
- ⚡ **IMPROVE:** Auto-refresh timeline ketika bahasa diganti
- 📚 **DOCS:** Dokumentasi lengkap di PERBAIKAN_PROJECT.md

### Version 1.0 (Initial Release)
- 📖 114 Surah Al-Qur'an lengkap
- 🎧 Audio murottal dari 6 Qori
- 📜 Timeline sejarah Islam (Indonesia only)
- 🏛️ Asbabun Nuzul feature
- ⚙️ Pengaturan lengkap

---

## 🚨 Known Issues & Solutions

### Issue: Translate tidak bekerja
**Solution:**
1. Clear browser cache (Ctrl + Shift + Del)
2. Hard refresh (Ctrl + F5 / Cmd + Shift + R)
3. Pastikan `history-en-translations.js` ter-load

### Issue: Audio tidak play
**Solution:**
1. Check internet connection
2. Try different Qori
3. Check browser console for errors
4. Make sure browser allows autoplay

### Issue: Font Arab tidak muncul
**Solution:**
1. Tunggu Google Fonts ter-load
2. Refresh halaman
3. Check internet connection

### ~~Issue: Text Indonesia terpotong~~
**✅ FIXED in v2.1:**
- All buttons sekarang tampil penuh
- Navigation pills optimal
- Era tabs tidak terpotong
- Responsive di semua screen sizes
- Detail: Lihat `UI_FIXES_DOCUMENTATION.md`

---

## 🎯 Roadmap

### Short Term (Q4 2026)
- [ ] Tambah terjemahan English untuk era Khulafaur Rasyidin
- [ ] Tambah terjemahan English untuk era Umayyah
- [ ] Tambah terjemahan English untuk era Abbasiyah
- [ ] Implement lazy loading untuk performa

### Mid Term (Q1 2027)
- [ ] Backend API integration
- [ ] User authentication & personal bookmarks
- [ ] Progressive Web App (PWA) support
- [ ] Offline mode dengan Service Worker
- [ ] Push notifications untuk reminder tilawah

### Long Term (Q2 2027+)
- [ ] Fitur tafsir per ayat (multiple tafsir)
- [ ] Sharing ayat ke social media
- [ ] Dark mode enhancement
- [ ] Mobile apps (React Native)
- [ ] AI-powered verse search
- [ ] Community features (notes, discussions)

---

## 🤝 Contributing

Contributions are welcome! Untuk berkontribusi:

1. Fork repository ini
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📜 License & Credits

### Data Sources
- **Al-Qur'an Text:** Mushaf Rasm Uthmani - Kemenag RI (Public Domain)
- **Indonesian Translation:** Kemenag RI (Public Domain)
- **English Translation:** Sahih International (Free to use)
- **Audio Recitations:** cdn.equran.id & islamic.network (Free CDN)
- **Historical Sources:** 
  - Ibn Hisham - Sirah Nabawiyah
  - at-Tabari - Tarikh ar-Rusul wal-Muluk
  - Ibn Kathir - Al-Bidayah wan-Nihayah
  - Shahih Bukhari & Shahih Muslim

### Project License
MIT License - Feel free to use for educational and personal purposes

---

## 👨‍💻 Developer

Developed with ❤️ by the Quran Harmony Team

---

## 📞 Support

Jika ada pertanyaan atau menemukan bug:
- 📧 Email: support@quranharmony.com
- 🐛 Issues: [GitHub Issues](#)
- 💬 Discussions: [GitHub Discussions](#)

---

<div align="center">

**⭐ Star this repo if you find it useful!**

Made with 💚 for Muslims around the world

</div>
