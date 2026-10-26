# 🧪 Testing Guide - Quran Harmony

## 📋 Checklist Testing Fitur

### ✅ 1. Fitur Translate Sejarah (PRIORITAS TERTINGGI)

#### Test Case 1.1: Switch Language dari Indonesia ke English
**Steps:**
1. Buka aplikasi di `web/index.html`
2. Klik menu "Sejarah" di navbar
3. Pastikan melihat event dalam Bahasa Indonesia
4. Klik tombol 🌐 **ID** di topbar → Pilih **EN**
5. **Expected Result:**
   - ✅ Judul timeline berubah menjadi English
   - ✅ Tahun berformat English (Around 570 CE vs Sekitar 570 M)
   - ✅ Deskripsi event dalam English
   - ✅ Toast notification: "🌐 Language switched to English (US)"

#### Test Case 1.2: Open Event Modal dalam English
**Steps:**
1. Pastikan bahasa sudah di-set ke English (EN)
2. Di halaman Sejarah, klik salah satu event card
3. **Expected Result:**
   - ✅ Modal terbuka dengan judul dalam English
   - ✅ Detail event dalam English
   - ✅ "Related Verses:" (bukan "Ayat Terkait:")
   - ✅ "Key Figures" (bukan "Tokoh Terlibat")

#### Test Case 1.3: Switch Back ke Indonesia
**Steps:**
1. Dari English mode, klik tombol 🌐 **EN** → Pilih **ID**
2. **Expected Result:**
   - ✅ Semua konten kembali ke Bahasa Indonesia
   - ✅ Timeline ter-refresh otomatis
   - ✅ Toast notification: "🌐 Bahasa dialihkan ke Bahasa Indonesia"

---

### ✅ 2. Fitur Al-Qur'an Reader

#### Test Case 2.1: Load Surah
**Steps:**
1. Klik menu "Al-Qur'an"
2. Klik Surah Al-Fatihah dari sidebar
3. **Expected Result:**
   - ✅ Bismillah banner muncul
   - ✅ 7 ayat Al-Fatihah ter-load
   - ✅ Teks Arab tampil dengan font Amiri Quran
   - ✅ Terjemahan tampil (Indonesia atau English tergantung setting)

#### Test Case 2.2: Jump to Specific Verse
**Steps:**
1. Di search bar atas, ketik: `2:255`
2. Tekan Enter
3. **Expected Result:**
   - ✅ Navigate ke Surah Al-Baqarah
   - ✅ Scroll otomatis ke ayat 255
   - ✅ Toast: "Jumped to Surah Al-Baqarah : Ayat 255"

#### Test Case 2.3: Font Size Control
**Steps:**
1. Klik tombol **A+** beberapa kali
2. **Expected Result:**
   - ✅ Font Arab membesar (max 54px)
   - ✅ Label menunjukkan ukuran font saat ini

#### Test Case 2.4: Switch Translation
**Steps:**
1. Bahasa Indonesia → Terjemahan: Kemenag
2. Switch ke English → Terjemahan: Sahih International
3. **Expected Result:**
   - ✅ Terjemahan berubah sesuai bahasa
   - ✅ Ayat ter-render ulang dengan terjemahan baru

---

### ✅ 3. Fitur Audio Murottal

#### Test Case 3.1: Play Full Surah
**Steps:**
1. Di halaman Al-Qur'an, klik **"Putar Audio"** button
2. **Expected Result:**
   - ✅ Audio Surah dimulai dari ayat 1
   - ✅ Mini player muncul di bottom
   - ✅ Progress bar bergerak

#### Test Case 3.2: Play Specific Verse
**Steps:**
1. Klik icon speaker pada ayat tertentu
2. **Expected Result:**
   - ✅ Audio ayat tersebut langsung diputar
   - ✅ Verse card highlight saat playing

#### Test Case 3.3: Upload Custom Audio
**Steps:**
1. Klik menu "Audio"
2. Di "Custom Audio Uploader" card, klik **"Pilih File MP3"**
3. Upload file MP3
4. Pilih Surah dari dropdown
5. Klik **"Putar Sekarang"**
6. **Expected Result:**
   - ✅ File info ditampilkan (nama, ukuran)
   - ✅ Audio custom ter-link ke Surah yang dipilih
   - ✅ Audio custom diputar

---

### ✅ 4. Fitur Catalog 114 Surah

#### Test Case 4.1: Switch View Reader ↔ Catalog
**Steps:**
1. Di halaman Al-Qur'an, klik tab **"Daftar 114 Surah (Katalog)"**
2. **Expected Result:**
   - ✅ View berubah dari verse reader ke catalog grid
   - ✅ Educational banner muncul (Makkiyyah & Madaniyyah)
   - ✅ 114 Surah cards ditampilkan

#### Test Case 4.2: Filter by Type
**Steps:**
1. Klik tab **"🕋 Makkiyyah"**
2. **Expected Result:**
   - ✅ Hanya 84 Surah Makkiyyah yang ditampilkan
   - ✅ Counter badge: "84"

3. Klik tab **"🕌 Madaniyyah"**
4. **Expected Result:**
   - ✅ Hanya 30 Surah Madaniyyah yang ditampilkan
   - ✅ Counter badge: "30"

#### Test Case 4.3: Search Surah
**Steps:**
1. Di search box catalog, ketik: "yasin"
2. **Expected Result:**
   - ✅ Hanya Surah Yasin yang ditampilkan
   - ✅ Search case-insensitive

#### Test Case 4.4: Open Surah from Catalog
**Steps:**
1. Dari catalog view, klik tombol **"📖 Baca"** pada Surah Yasin
2. **Expected Result:**
   - ✅ Switch otomatis ke reader view
   - ✅ Load Surah Yasin
   - ✅ View tab aktif di "Baca Surah (Ayat)"

---

### ✅ 5. Fitur Asbabun Nuzul

#### Test Case 5.1: Browse Jejak Cards
**Steps:**
1. Klik menu "Asbabun Nuzul"
2. **Expected Result:**
   - ✅ Grid cards ditampilkan dengan ayat dan konteks
   - ✅ Arabic text preview (truncated)
   - ✅ Translation preview

#### Test Case 5.2: Open Modal Detail
**Steps:**
1. Klik salah satu card
2. **Expected Result:**
   - ✅ Modal terbuka dengan:
     - Event name badge
     - Full Arabic text
     - Full translation
     - Historical context detail
     - Buttons: "📖 Buka Surah" & "🏛️ Lini Masa Sejarah"

---

### ✅ 6. Fitur Settings (Pengaturan)

#### Test Case 6.1: Change Theme
**Steps:**
1. Klik menu "Pengaturan" / "Settings"
2. Pilih theme **Dark**
3. **Expected Result:**
   - ✅ Background berubah ke dark mode
   - ✅ Colors invert untuk readability
   - ✅ Toast: "🌙 Dark theme applied"

#### Test Case 6.2: Toggle Transliteration
**Steps:**
1. Toggle **"Transliterasi Latin"** ke ON
2. Buka halaman Al-Qur'an
3. **Expected Result:**
   - ✅ Latin transliteration muncul di bawah teks Arab

#### Test Case 6.3: Repeat Mode
**Steps:**
1. Set **"Mode Pengulangan"** ke **"Ulangi 3x"**
2. Play ayat
3. **Expected Result:**
   - ✅ Ayat diputar 3x sebelum lanjut ke ayat berikutnya

---

### ✅ 7. Responsiveness (Mobile/Tablet)

#### Test Case 7.1: Mobile Menu
**Steps:**
1. Resize browser ke mobile width (<768px)
2. **Expected Result:**
   - ✅ Hamburger menu muncul
   - ✅ Bottom navigation bar muncul
   - ✅ Sidebar bisa di-toggle

#### Test Case 7.2: Mobile Quick Actions
**Steps:**
1. Di mobile view, scroll ke Home section
2. **Expected Result:**
   - ✅ 4 Quick action buttons muncul:
     - 📖 Al-Qur'an
     - 🎧 Audio Qori
     - 🏛️ Asbabun Nuzul
     - 📜 Sejarah

---

## 🐛 Bug Testing

### Critical Bugs to Check:
1. ❌ Infinite loop saat switch language
2. ❌ Audio tidak berhenti saat switch page
3. ❌ Modal tidak menutup saat klik overlay
4. ❌ Scroll tidak smooth
5. ❌ Data tidak ter-load (check console)

### Performance Testing:
1. Load time < 3 seconds
2. Smooth scrolling
3. No memory leaks
4. Audio playback tidak lag

---

## 📊 Test Results Template

```
## Test Date: [DATE]
## Tester: [NAME]
## Browser: [Chrome 120 / Firefox 120 / Safari 17]
## Device: [Desktop / Mobile / Tablet]

### Test Results:
- [ ] 1.1 Switch Language ID → EN: PASS/FAIL
- [ ] 1.2 Open Event Modal EN: PASS/FAIL
- [ ] 1.3 Switch Back ID: PASS/FAIL
- [ ] 2.1 Load Surah: PASS/FAIL
- [ ] 2.2 Jump to Verse: PASS/FAIL
- [ ] 2.3 Font Size Control: PASS/FAIL
- [ ] 2.4 Switch Translation: PASS/FAIL
- [ ] 3.1 Play Full Surah: PASS/FAIL
- [ ] 3.2 Play Specific Verse: PASS/FAIL
- [ ] 3.3 Upload Custom Audio: PASS/FAIL
- [ ] 4.1 Switch View: PASS/FAIL
- [ ] 4.2 Filter by Type: PASS/FAIL
- [ ] 4.3 Search Surah: PASS/FAIL
- [ ] 4.4 Open from Catalog: PASS/FAIL
- [ ] 5.1 Browse Jejak: PASS/FAIL
- [ ] 5.2 Open Modal: PASS/FAIL
- [ ] 6.1 Change Theme: PASS/FAIL
- [ ] 6.2 Toggle Transliteration: PASS/FAIL
- [ ] 6.3 Repeat Mode: PASS/FAIL
- [ ] 7.1 Mobile Menu: PASS/FAIL
- [ ] 7.2 Mobile Quick Actions: PASS/FAIL

### Notes:
[Add any observations, bugs found, or improvement suggestions]
```

---

## 🔍 Debug Tools

### Browser Console Commands:
```javascript
// Check current state
console.log(state);

// Check loaded data
console.log(HISTORY);
console.log(HISTORY_EN_TRANSLATIONS);

// Test language switch
applyLanguage('en');
applyLanguage('id');

// Check merged data
console.log(HISTORY.kenabian[0]); // Should have titleEn, descEn, etc.

// Force reload timeline
renderTimeline('kenabian');
```

### Network Tab Checks:
- ✅ `data.js` - loaded (200 OK)
- ✅ `history-en-translations.js` - loaded (200 OK)
- ✅ `app.js` - loaded (200 OK)
- ✅ Google Fonts - loaded
- ✅ Audio CDN - status 200/206

---

## ✅ Final Acceptance Criteria

Project dianggap **PASS** jika:
1. ✅ Semua 20+ test cases PASS
2. ✅ Tidak ada critical bugs
3. ✅ Performance acceptable (load < 3s)
4. ✅ Responsive di semua devices
5. ✅ **Fitur translate sejarah 100% berfungsi**

---

**Happy Testing! 🎉**
