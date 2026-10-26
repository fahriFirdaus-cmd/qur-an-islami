// ══════════════════════════════════════════════════════════════
// APP.JS — Quran Harmony Application Logic
// All Interactive Buttons & Dynamic Features Fully Operational
// ══════════════════════════════════════════════════════════════

// ─── Global State ───
const state = {
  currentPage: 'beranda',
  currentSurah: 1,
  currentVerse: 1,
  currentEra: 'kenabian',
  currentMode: 'murattal',
  currentQori: 'mishary',
  fontSize: 38,
  isPlaying: false,
  transliterasi: false,
  autoplay: true,
  repeat: 'none',
  speed: 1.0,
  language: localStorage.getItem('qh_lang') || 'en',
  translation: localStorage.getItem('qh_trans') || 'sahih',
  rasm: localStorage.getItem('qh_rasm') || 'madinah',
  bookmarks: JSON.parse(localStorage.getItem('qh_bookmarks') || '[]'),
};

// ─── Custom User Audio Store ───
const customAudios = {
  surahs: {}, // surahId -> { url, name, size }
  current: null
};

// ─── Internationalization (I18N) ───
const I18N = {
  en: {
    navBeranda: 'Home',
    navQuran: 'Quran',
    navAudio: 'Audio',
    navSejarah: 'History',
    navJejak: 'Revelations',
    langIndicator: 'EN',
    readerSettingsLabel: 'Reader Settings',
    mainSearchPlaceholder: 'Jump to surah, verse (e.g. 2:255) or page...',
    sidebarSearchPlaceholder: 'Search surah...',
    heroQuote: '<em>"Verily, in the remembrance of Allah do hearts find rest."</em>',
    heroBtnRead: 'Start Reading',
    heroBtnAudio: 'Explore Audio',
    featQuranTitle: 'Full Quran Text',
    featQuranDesc: 'Read all 114 surahs in Arabic with a translation beside every verse.',
    featAudioTitle: 'Audio Recitations',
    featAudioDesc: 'Listen to recitations verse by verse and follow along as you read.',
    featSpiritualTitle: 'Spiritual Growth',
    featSpiritualDesc: 'Save bookmarks, keep a reading history and build a steady daily habit.',
    dailyTitle: 'Verse of the Day',
    dailyBadge: '94:5',
    dailyVerseTrans: 'Indeed, with every hardship there is ease.',
    dailyBtnPlay: 'Listen',
    dailyBtnRead: 'Save',
    dailyBtnCopy: 'Share',
    popularTitle: 'Popular Surahs',
    popularViewAll: 'View All →',
    // Explore Catalog Banner (Beranda)
    exploreCatalogTitle: 'Complete Catalog of 114 Surahs',
    exploreCatalogSub: '• Explore themes & revelation chronology',
    exploreCatalogBtnText: 'Open Catalog of 114 Surahs →',
    exploreMakkBadge: '🕋 84 Meccan',
    exploreMadanBadge: '🕌 30 Medinan',
    // View switcher (Al-Qur'an page)
    labelViewReader: 'Read Surah (Verses)',
    labelViewCatalog: 'List of 114 Surahs (Catalog)',
    // Educational Banner (Catalog)
    eduBannerTitle: 'Understanding Surah Classification: Meccan & Medinan',
    eduBannerSub: 'Understanding the context of place & time of revelation of 114 Surahs.',
    eduMakkTitle: '🕋 Meccan Surahs',
    eduMakkBadge: '84 Surahs',
    eduMakkDesc: '<strong>Revealed before Hijrah:</strong> Revealed to the Prophet Muhammad ﷺ in Mecca (610–622 CE) before the migration to Medina.',
    eduMakkP1: 'Focus on establishing Aqeedah, Tawheed, and purity of faith.',
    eduMakkP2: 'Warnings about the Day of Judgment, recompense, Paradise & Hell.',
    eduMakkP3: 'Verses are generally concise, firm, rhythmic, and poetic.',
    eduMakkP4: 'Often contain the call <em>"Yā ayyuhan-nās"</em> (O mankind).',
    eduMadanTitle: '🕌 Medinan Surahs',
    eduMadanBadge: '30 Surahs',
    eduMadanDesc: '<strong>Revealed after Hijrah:</strong> Revealed after the Prophet ﷺ migrated to Medina (622–632 CE) until the end of his life.',
    eduMadanP1: 'Focus on Sharia law, social worship, and jurisprudence.',
    eduMadanP2: 'Rules on family, inheritance, economics, and diplomacy.',
    eduMadanP3: 'Verses tend to be long and explanatory in nature (*tashrī\').',
    eduMadanP4: 'Often contain the call <em>"Yā ayyuhallażīna āmanū"</em> (O you who believe).',
    // Sidebar filter tabs
    sTabAll: 'Semua',
    sTabMakk: 'Makkiyyah',
    sTabMadan: 'Madaniyyah',
    // Catalog filter tabs
    catTabAll: '🌟 All Surahs',
    catTabMakk: '🕋 Meccan',
    catTabMadan: '🕌 Medinan',
    catSearchPlaceholder: 'Search by surah number, name, or meaning...',
    catBtnRead: '📖 Read',
    catBtnAudio: '▶ Audio',
    catNoResult: 'No matching surah found',
    catNoResultSub: 'Try a different search keyword or select the "All Surahs" tab.',
    // Surah header & meta
    meaningPrefix: 'Meaning',
    revTagMakk: '🕋 Meccan',
    revTagMadan: '🕌 Medinan',
    revModalTitleMakk: '🕋 Meccan Surah',
    revModalTitleMadan: '🕌 Medinan Surah',
    revModalMeaningLabel: 'Name Meaning:',
    revModalVerseLabel: 'Number of Verses:',
    revModalPeriodLabel: 'Period & Place of Revelation:',
    revModalPeriodMakk: 'Revealed in Makkah al-Mukarramah before the Prophet Muhammad ﷺ migrated to Medina (610–622 CE).',
    revModalPeriodMadan: 'Revealed in Madinah al-Munawwarah after the Prophet ﷺ migrated from Mecca (622–632 CE).',
    revModalCharTitle_makk: 'Key Characteristics of Meccan Surahs:',
    revModalCharTitle_madan: 'Key Characteristics of Medinan Surahs:',
    revModalCharBody_makk: 'This surah was revealed during the foundational phase of Islamic da\u02bbwah. Its main teachings focus on purifying aqeedah, monotheism (Tawheed), certainty of the Day of Judgment, and building the moral character and spiritual resilience of the believers in the face of Qurayshi oppression.',
    revModalCharBody_madan: 'This surah was revealed during the phase of building a just civilization and social order in Medina. It contains guidelines for Sharia law, family & judicial systems, economic transactions, international diplomacy, and fostering brotherhood between the Muhajirin and Ansar.',
    revModalBtnClose: 'Close',
    revModalBtnViewAll: 'View All Surahs',
    // Sidebar empty state
    sidebarNoResult: 'No surah matches the filter.',
    // Search dropdown
    searchNoResult: 'No surah or verse found for',
    searchVerseLabel: 'Verse',
    searchJump: 'Jump →',
    prevSurahLabel: 'Prev',
    homeSurahLabel: 'Home',
    nextSurahLabel: 'Next',
    fontControlLabel: 'Font:',
    playAllLabel: 'Play Audio',
    audioKicker: 'TILAWATUL QUR\'AN',
    audioTitle: 'Audio Recitations',
    audioDesc: 'Listen to beautiful Quran recitations from world-renowned reciters with crystal clear audio quality.',
    tabModeMurattal: 'Murattal',
    tabModeMujawwad: 'Mujawwad',
    tabModeNusantara: 'Nusantara',
    sejarahKicker: 'CHRONICLE',
    sejarahTitle: 'Islamic History',
    sejarahDesc: 'Explore the glorious journey of Islam from the first revelation at Cave Hira to the golden age of science.',
    tabEraKenabian: 'Prophetic Era',
    tabEraKhulafa: 'Rightly Guided Caliphs',
    tabEraUmayyah: 'Umayyad Dynasty',
    tabEraAbbasiyah: 'Abbasid Dynasty',
    tabEraIlmuwan: 'Islamic Scholars',
    jejakKicker: 'ASBABUN NUZUL',
    jejakTitle: 'Verse History',
    jejakDesc: 'Every verse has a story. Discover the historical events behind the revelation of the Quran.',
    jejakIntroText: 'This exclusive feature reconstructs the connections between Quran verses and real historical events (Asbabun Nuzul). Supported by authentic hadith references (Bukhari, Muslim) and classical tafsir works.',
    settingsKicker: 'PREFERENCES',
    settingsTitle: 'Reader Settings',
    settingsDesc: 'Customize your reading experience for maximum comfort and spiritual focus.',
    settingsSecTypography: 'Typography & Text',
    settingNameAppLang: 'Application Language',
    settingDescAppLang: 'Choose interface & translation language',
    settingNameRasm: 'Mushaf & Rasm Standard',
    settingDescRasm: 'Choose Rasm Uthmani script standard',
    settingNameFont: 'Arabic Font',
    settingDescFont: 'Choose Uthmani script style',
    settingNameTrans: 'Translation',
    settingDescTrans: 'Active translation version',
    settingNameLatin: 'Transliteration',
    settingDescLatin: 'Show Latin pronunciation',
    settingsSecAudio: 'Audio & Playback',
    settingNameAutoplay: 'Auto-Play Next',
    settingDescAutoplay: 'Automatically continue to next verse',
    settingNameRepeat: 'Repeat Mode',
    settingDescRepeat: 'Repeat verses for memorization',
    settingNameSpeed: 'Playback Speed',
    settingDescSpeed: 'Adjust recitation tempo',
    optRepeatNone: 'No Repeat',
    optRepeat3: 'Repeat 3x',
    optRepeat5: 'Repeat 5x',
    optRepeatCont: 'Repeat Continuously',
    optSpeedSlow: '0.75x (Slow)',
    optSpeedNormal: '1.0x (Normal)',
    optSpeedFast: '1.25x (Fast)',
    optSpeedVFast: '1.5x (Very Fast)',
    notifTitle: 'Daily Notifications',
    notifTitle1: 'Surah Al-Kahf (18)',
    notifDesc1: 'Sunnah reading and reflection on Friday',
    notifTitle2: 'Daily Tilawah: Ya-Sin (36)',
    notifDesc2: 'Continue your daily Quran tilawah today',
    notifTitle3: 'World-Renowned Reciters',
    notifDesc3: 'Listen to sweet recitations from Al-Afasy & As-Sudais',
    langChangedToast: '🌐 Language switched to English (US)',
    readerUploadLabel: 'Upload MP3',
    cauTitle: 'Play Your Own Audio File (Upload Local MP3)',
    cauDesc: 'Upload any recording or recitation from your computer to play directly or link to any Surah.',
    cauBtnText: 'Choose Audio File',
    cauAssignLabel: 'Link to Surah:',
    cauPlayNow: '▶ Play Now',
    cauClear: '✕ Reset',
    lastReadBadge: 'CONTINUE READING',
    lastReadBtnText: 'Resume',
    btnChooseSurah: 'Choose Surah ▾',
    mQuickQuran: 'Al-Qur\'an',
    mQuickAudio: 'Audio Qori',
    mQuickJejak: 'Revelations',
    mQuickSejarah: 'History',
    mobLabelBeranda: 'Home',
    mobLabelQuran: 'Quran',
    mobLabelAudio: 'Audio',
    mobLabelSejarah: 'History',
    mobLabelPengaturan: 'Settings',
  },
  id: {
    navBeranda: 'Beranda',
    navQuran: 'Al-Qur\'an',
    navAudio: 'Audio',
    navSejarah: 'Sejarah',
    navJejak: 'Asbabun Nuzul',
    langIndicator: 'ID',
    readerSettingsLabel: 'Pengaturan Tampilan',
    mainSearchPlaceholder: 'Cari surah, ayat (misal: 2:255) atau topik...',
    sidebarSearchPlaceholder: 'Cari surah...',
    heroQuote: '<em>"Ingatlah, hanya dengan mengingat Allah hati menjadi tenteram."</em>',
    heroBtnRead: 'Mulai Membaca',
    heroBtnAudio: 'Dengarkan Audio',
    featQuranTitle: 'Teks Al-Qur\'an Lengkap',
    featQuranDesc: 'Akses 114 surah lengkap dengan mushaf Utsmani & terjemahan resmi Kemenag RI.',
    featAudioTitle: 'Audio Murottal',
    featAudioDesc: 'Dengarkan tilawah merdu dari para Qori terkemuka dunia ayat demi ayat.',
    featSpiritualTitle: 'Perjalanan Spiritual',
    featSpiritualDesc: 'Antarmuka modern dan tenang untuk tadabbur dan kedamaian hati.',
    dailyTitle: 'Ayat Hari Ini',
    dailyBadge: '94:5',
    dailyVerseTrans: 'Maka sesungguhnya bersama kesulitan ada kemudahan.',
    dailyBtnPlay: 'Dengar',
    dailyBtnRead: 'Simpan',
    dailyBtnCopy: 'Bagikan',
    popularTitle: 'Surah Pilihan Populer',
    popularViewAll: 'Lihat Semua →',
    // Explore Catalog Banner (Beranda)
    exploreCatalogTitle: 'Katalog Lengkap 114 Surah Al-Qur\'an',
    exploreCatalogSub: '• Telusuri tema & periodisasi wahyu',
    exploreCatalogBtnText: 'Buka Katalog 114 Surah →',
    exploreMakkBadge: '🕋 84 Makkiyyah',
    exploreMadanBadge: '🕌 30 Madaniyyah',
    // View switcher (Al-Qur'an page)
    labelViewReader: 'Baca Surah (Ayat)',
    labelViewCatalog: 'Daftar 114 Surah (Katalog)',
    // Educational Banner (Catalog)
    eduBannerTitle: 'Mengenal Klasifikasi Surah: Makkiyyah & Madaniyyah',
    eduBannerSub: 'Memahami konteks tempat & masa pewahyuan 114 Surah Al-Qur\'an.',
    eduMakkTitle: '🕋 Surah Makkiyyah',
    eduMakkBadge: '84 Surah',
    eduMakkDesc: '<strong>Diturunkan sebelum Hijrah:</strong> Diturunkan kepada Nabi Muhammad ﷺ di Makkah (610 – 622 M) sebelum berhijrah ke Madinah.',
    eduMakkP1: 'Fokus pada penanaman Aqidah, Tauhid, dan kemurnian iman.',
    eduMakkP2: 'Peringatan Hari Kiamat, pembalasan amal, Surga & Neraka.',
    eduMakkP3: 'Ayat-ayatnya umumnya ringkas, tegas, ritmis, dan puitis.',
    eduMakkP4: 'Sering memuat seruan <em>\'Yā ayyuhan-nās\'</em> (Wahai sekalian manusia).',
    eduMadanTitle: '🕌 Surah Madaniyyah',
    eduMadanBadge: '30 Surah',
    eduMadanDesc: '<strong>Diturunkan setelah Hijrah:</strong> Diturunkan setelah Rasulullah ﷺ hijrah ke Madinah (622 – 632 M) hingga akhir hayat beliau.',
    eduMadanP1: 'Fokus pada Syariat hukum, ibadah kemasyarakatan, dan peradilan.',
    eduMadanP2: 'Aturan keluarga, waris, muamalah ekonomi, dan diplomasi politik.',
    eduMadanP3: 'Ayat-ayatnya cenderung panjang dan bernada penjelasan hukum (*tasyrī\').',
    eduMadanP4: 'Sering memuat seruan <em>\'Yā ayyuhallażīna āmanū\'</em> (Wahai orang beriman).',
    // Sidebar filter tabs
    sTabAll: 'Semua',
    sTabMakk: 'Makkiyyah',
    sTabMadan: 'Madaniyyah',
    // Catalog filter tabs
    catTabAll: '🌟 Semua Surah',
    catTabMakk: '🕋 Makkiyyah',
    catTabMadan: '🕌 Madaniyyah',
    catSearchPlaceholder: 'Cari nomor surah, nama, atau arti...',
    catBtnRead: '📖 Baca',
    catBtnAudio: '▶ Audio',
    catNoResult: 'Tidak ada surah yang cocok',
    catNoResultSub: 'Coba gunakan kata kunci pencarian lain atau pilih tab filter "Semua Surah".',
    // Surah header & meta
    meaningPrefix: 'Arti',
    revTagMakk: '🕋 Makkiyyah',
    revTagMadan: '🕌 Madaniyyah',
    revModalTitleMakk: '🕋 Golongan Surah Makkiyyah',
    revModalTitleMadan: '🕌 Golongan Surah Madaniyyah',
    revModalMeaningLabel: 'Arti Nama:',
    revModalVerseLabel: 'Jumlah Ayat:',
    revModalPeriodLabel: 'Masa & Tempat Pewahyuan:',
    revModalPeriodMakk: 'Diturunkan di Makkah al-Mukarramah sebelum Nabi Muhammad ﷺ hijrah ke Madinah (periode 610 – 622 M).',
    revModalPeriodMadan: 'Diturunkan di Madinah al-Munawwarah setelah Nabi Muhammad ﷺ hijrah dari Makkah (periode 622 – 632 M).',
    revModalCharTitle_makk: 'Karakteristik & Hikmah Utama Surah Makkiyyah:',
    revModalCharTitle_madan: 'Karakteristik & Hikmah Utama Surah Madaniyyah:',
    revModalCharBody_makk: 'Surah ini diturunkan pada fase fondasi dakwah Islam. Pokok ajarannya memusatkan perhatian pada pemurnian aqidah, ketauhidan kepada Allah SWT, kepastian Hari Kiamat dan Hari Pembalasan, serta penempaan akhlak dan ketabahan spiritual kaum beriman menghadapi intimidasi kaum Quraisy.',
    revModalCharBody_madan: 'Surah ini diturunkan pada fase pembangunan peradaban dan tatanan masyarakat berkeadilan di Madinah. Memuat pedoman hukum syariat, tatanan keluarga & peradilan, muamalah ekonomi, hubungan diplomasi internasional, serta pembinaan ukhuwah antara Muhajirin dan Anshar.',
    revModalBtnClose: 'Tutup',
    revModalBtnViewAll: 'Lihat Semua Surah',
    // Sidebar empty state
    sidebarNoResult: 'Tidak ada surah yang cocok dengan filter.',
    // Search dropdown
    searchNoResult: 'Tidak ada surah atau ayat untuk',
    searchVerseLabel: 'Ayat',
    searchJump: 'Buka →',
    prevSurahLabel: 'Sebelumnya',
    homeSurahLabel: 'Beranda',
    nextSurahLabel: 'Selanjutnya',
    fontControlLabel: 'Huruf:',
    playAllLabel: 'Putar Audio',
    audioKicker: 'TILAWATUL QUR\'AN',
    audioTitle: 'Lantunan Murottal',
    audioDesc: 'Dengarkan tilawah Al-Qur\'an yang indah dari para Qori terkemuka dunia dalam audio jernih.',
    tabModeMurattal: 'Murattal',
    tabModeMujawwad: 'Mujawwad',
    tabModeNusantara: 'Nusantara',
    sejarahKicker: 'KRONOLOGI',
    sejarahTitle: 'Kronologi Peradaban Islam',
    sejarahDesc: 'Telusuri perjalanan gemilang Islam dari wahyu pertama di Gua Hira hingga era keemasan sains.',
    tabEraKenabian: 'Era Kenabian',
    tabEraKhulafa: 'Khulafaur Rasyidin',
    tabEraUmayyah: 'Dinasti Umayyah',
    tabEraAbbasiyah: 'Dinasti Abbasiyah',
    tabEraIlmuwan: 'Cendekiawan Islam',
    jejakKicker: 'ASBABUN NUZUL',
    jejakTitle: 'Asbabun Nuzul & Jejak Wahyu',
    jejakDesc: 'Setiap ayat memiliki kisah mulia. Temukan konteks sejarah di balik turunnya ayat-ayat suci.',
    jejakIntroText: 'Fitur ini menghubungkan ayat-ayat Al-Qur\'an dengan peristiwa sejarah nyata (Asbabun Nuzul), didukung rujukan hadits shahih (Bukhari, Muslim) dan karya tafsir mu\'tabar.',
    settingsKicker: 'PREFERENSI',
    settingsTitle: 'Pengaturan Tampilan & Aplikasi',
    settingsDesc: 'Sesuaikan pengalaman membaca Anda untuk kenyamanan maksimal dan tadabbur khusyuk.',
    settingsSecTypography: 'Tipografi & Teks',
    settingNameAppLang: 'Bahasa Aplikasi',
    settingDescAppLang: 'Pilih bahasa antarmuka & terjemahan ayat',
    settingNameRasm: 'Standar Rasm / Mushaf',
    settingDescRasm: 'Pilih kaidah teks Rasm Utsmani mushaf',
    settingNameFont: 'Huruf Arab',
    settingDescFont: 'Pilih gaya penulisan rasm Utsmani',
    settingNameTrans: 'Versi Terjemahan',
    settingDescTrans: 'Versi terjemahan yang aktif',
    settingNameLatin: 'Transliterasi Latin',
    settingDescLatin: 'Tampilkan panduan lafal latin',
    settingsSecAudio: 'Audio & Pemutaran',
    settingNameAutoplay: 'Putar Otomatis',
    settingDescAutoplay: 'Lanjut otomatis ke ayat berikutnya',
    settingNameRepeat: 'Mode Pengulangan',
    settingDescRepeat: 'Ulangi ayat untuk membantu hafalan',
    settingNameSpeed: 'Kecepatan Audio',
    settingDescSpeed: 'Sesuaikan tempo lantunan suara',
    optRepeatNone: 'Tanpa Pengulangan',
    optRepeat3: 'Ulangi 3x',
    optRepeat5: 'Ulangi 5x',
    optRepeatCont: 'Ulangi Terus Menerus',
    optSpeedSlow: '0.75x (Lambat)',
    optSpeedNormal: '1.0x (Normal)',
    optSpeedFast: '1.25x (Cepat)',
    optSpeedVFast: '1.5x (Sangat Cepat)',
    notifTitle: 'Pemberitahuan Harian',
    notifTitle1: 'Surah Al-Kahf (18)',
    notifDesc1: 'Sunnah membaca dan tadabbur di hari Jumat',
    notifTitle2: 'Tilawah Harian: Ya-Sin (36)',
    notifDesc2: 'Lanjutkan tilawah harian Anda hari ini',
    notifTitle3: 'Murattal Qori Internasional',
    notifDesc3: 'Dengarkan lantunan merdu Syaikh Al-Afasy & As-Sudais',
    langChangedToast: '🌐 Bahasa dialihkan ke Bahasa Indonesia',
    readerUploadLabel: 'Upload MP3',
    cauTitle: 'Putar Audio MP3 Sendiri (Upload File Lokal)',
    cauDesc: 'Unggah file rekaman atau lantunan MP3 dari komputer Anda untuk langsung diputar atau dihubungkan ke Surah.',
    cauBtnText: 'Pilih File MP3',
    cauAssignLabel: 'Hubungkan ke Surah:',
    cauPlayNow: '▶ Putar Sekarang',
    cauClear: '✕ Reset',
    lastReadBadge: 'TERAKHIR DIBACA',
    lastReadBtnText: 'Lanjutkan',
    btnChooseSurah: 'Pilih Surah ▾',
    mQuickQuran: 'Al-Qur\'an',
    mQuickAudio: 'Audio Qori',
    mQuickJejak: 'Asbabun Nuzul',
    mQuickSejarah: 'Sejarah',
    mobLabelBeranda: 'Beranda',
    mobLabelQuran: 'Al-Qur\'an',
    mobLabelAudio: 'Audio',
    mobLabelSejarah: 'Sejarah',
    mobLabelPengaturan: 'Setelan',
  }
};

function applyLanguage(lang, notify = true) {
  if (!I18N[lang]) lang = 'en';
  state.language = lang;
  state.translation = (lang === 'en' ? 'sahih' : 'kemenag');
  localStorage.setItem('qh_lang', lang);
  localStorage.setItem('qh_trans', state.translation);

  const dict = I18N[lang];

  const setHtml = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };
  const setAttr = (id, attr, val) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute(attr, val);
  };

  // Nav pills
  setText('nav-pill-beranda', dict.navBeranda);
  setText('nav-pill-quran', dict.navQuran);
  setText('nav-pill-audio', dict.navAudio);
  setText('nav-pill-sejarah', dict.navSejarah);
  setText('nav-pill-jejak', dict.navJejak);

  // Topbar
  setText('lang-indicator', dict.langIndicator);
  setText('reader-settings-label', dict.readerSettingsLabel);
  setAttr('main-search', 'placeholder', dict.mainSearchPlaceholder);
  setAttr('sidebar-surah-search', 'placeholder', dict.sidebarSearchPlaceholder);

  // Hero Section
  setHtml('hero-quote', dict.heroQuote);
  setText('hero-btn-read-text', dict.heroBtnRead);
  setText('hero-btn-audio-text', dict.heroBtnAudio);
  setText('last-read-badge', dict.lastReadBadge);
  setText('last-read-btn-text', dict.lastReadBtnText);

  // Feature Cards
  setText('feat-quran-title', dict.featQuranTitle);
  setText('feat-quran-desc', dict.featQuranDesc);
  setText('feat-audio-title', dict.featAudioTitle);
  setText('feat-audio-desc', dict.featAudioDesc);
  setText('feat-spiritual-title', dict.featSpiritualTitle);
  setText('feat-spiritual-desc', dict.featSpiritualDesc);

  // Daily Section
  setText('daily-title', dict.dailyTitle);
  setText('daily-badge', dict.dailyBadge);
  setText('daily-verse-trans', dict.dailyVerseTrans);
  setText('daily-btn-play-text', dict.dailyBtnPlay);
  setText('daily-btn-read-text', dict.dailyBtnRead);
  setText('daily-btn-copy-text', dict.dailyBtnCopy);

  // Popular Surahs
  setText('popular-title', dict.popularTitle);
  setText('popular-view-all', dict.popularViewAll);
  setText('ps-meta-1', lang === 'en' ? 'Meccan · 7 verses' : 'Makkiyyah · 7 ayat');
  setText('ps-meta-36', lang === 'en' ? 'Meccan · 83 verses' : 'Makkiyyah · 83 ayat');
  setText('ps-meta-67', lang === 'en' ? 'Meccan · 30 verses' : 'Makkiyyah · 30 ayat');
  setText('ps-meta-55', lang === 'en' ? 'Medinan · 78 verses' : 'Madaniyyah · 78 ayat');

  // Reader Header
  setText('prev-surah-label', dict.prevSurahLabel);
  setText('home-surah-label', dict.homeSurahLabel);
  setText('next-surah-label', dict.nextSurahLabel);
  setText('font-control-label', dict.fontControlLabel);
  setText('play-all-label', dict.playAllLabel);
  setText('reader-upload-label', dict.readerUploadLabel);

  // Audio Page
  setText('audio-kicker', dict.audioKicker);
  setText('audio-title', dict.audioTitle);
  setText('audio-desc', dict.audioDesc);
  setText('tab-mode-murattal', dict.tabModeMurattal);
  setText('tab-mode-mujawwad', dict.tabModeMujawwad);
  setText('tab-mode-nusantara', dict.tabModeNusantara);
  setText('cau-title', dict.cauTitle);
  setText('cau-desc', dict.cauDesc);
  setText('cau-btn-text', dict.cauBtnText);
  setText('cau-assign-label', dict.cauAssignLabel);
  setText('cau-play-now-btn', dict.cauPlayNow);
  setText('cau-clear-btn', dict.cauClear);

  // Sejarah Page
  setText('sejarah-kicker', dict.sejarahKicker);
  setText('sejarah-title', dict.sejarahTitle);
  setText('sejarah-desc', dict.sejarahDesc);
  setText('tab-era-kenabian', dict.tabEraKenabian);
  setText('tab-era-khulafa', dict.tabEraKhulafa);
  setText('tab-era-umayyah', dict.tabEraUmayyah);
  setText('tab-era-abbasiyah', dict.tabEraAbbasiyah);
  setText('tab-era-ilmuwan', dict.tabEraIlmuwan);

  // Jejak Page
  setText('jejak-kicker', dict.jejakKicker);
  setText('jejak-title', dict.jejakTitle);
  setText('jejak-desc', dict.jejakDesc);
  setText('jejak-intro-text', dict.jejakIntroText);

  // Settings Page
  setText('settings-kicker', dict.settingsKicker);
  setText('settings-title', dict.settingsTitle);
  setText('settings-desc', dict.settingsDesc);
  setText('settings-sec-typography', dict.settingsSecTypography);
  setText('setting-name-app-lang', dict.settingNameAppLang);
  setText('setting-desc-app-lang', dict.settingDescAppLang);
  setText('setting-name-rasm', dict.settingNameRasm);
  setText('setting-desc-rasm', dict.settingDescRasm);
  setText('setting-name-font', dict.settingNameFont);
  setText('setting-desc-font', dict.settingDescFont);
  setText('setting-name-trans', dict.settingNameTrans);
  setText('setting-desc-trans', dict.settingDescTrans);
  setText('setting-name-latin', dict.settingNameLatin);
  setText('setting-desc-latin', dict.settingDescLatin);
  setText('settings-sec-audio', dict.settingsSecAudio);
  setText('setting-name-autoplay', dict.settingNameAutoplay);
  setText('setting-desc-autoplay', dict.settingDescAutoplay);
  setText('setting-name-repeat', dict.settingNameRepeat);
  setText('setting-desc-repeat', dict.settingDescRepeat);
  setText('setting-name-speed', dict.settingNameSpeed);
  setText('setting-desc-speed', dict.settingDescSpeed);
  setText('opt-repeat-none', dict.optRepeatNone);
  setText('opt-repeat-3', dict.optRepeat3);
  setText('opt-repeat-5', dict.optRepeat5);
  setText('opt-repeat-cont', dict.optRepeatCont);
  setText('opt-speed-slow', dict.optSpeedSlow);
  setText('opt-speed-normal', dict.optSpeedNormal);
  setText('opt-speed-fast', dict.optSpeedFast);
  setText('opt-speed-vfast', dict.optSpeedVFast);

  // Notifications
  setText('notif-title', dict.notifTitle);
  setText('notif-title-1', dict.notifTitle1);
  setText('notif-desc-1', dict.notifDesc1);
  setText('notif-title-2', dict.notifTitle2);
  setText('notif-desc-2', dict.notifDesc2);
  setText('notif-title-3', dict.notifTitle3);
  setText('notif-desc-3', dict.notifDesc3);

  // Explore Catalog Banner (Beranda)
  setText('explore-catalog-title', dict.exploreCatalogTitle);
  setText('explore-catalog-sub', dict.exploreCatalogSub);
  setText('explore-catalog-btn-text', dict.exploreCatalogBtnText);
  setText('explore-makk-badge', dict.exploreMakkBadge);
  setText('explore-madan-badge', dict.exploreMadanBadge);

  // View Switcher
  setText('label-view-reader', dict.labelViewReader);
  setText('label-view-catalog', dict.labelViewCatalog);

  // Educational Banner (Catalog)
  setText('edu-banner-title', dict.eduBannerTitle);
  setText('edu-banner-sub', dict.eduBannerSub);
  setText('edu-makk-title', dict.eduMakkTitle);
  setText('edu-makk-badge', dict.eduMakkBadge);
  setHtml('edu-makk-desc', dict.eduMakkDesc);
  setHtml('edu-makk-p1', dict.eduMakkP1);
  setHtml('edu-makk-p2', dict.eduMakkP2);
  setHtml('edu-makk-p3', dict.eduMakkP3);
  setHtml('edu-makk-p4', dict.eduMakkP4);
  setText('edu-madan-title', dict.eduMadanTitle);
  setText('edu-madan-badge', dict.eduMadanBadge);
  setHtml('edu-madan-desc', dict.eduMadanDesc);
  setHtml('edu-madan-p1', dict.eduMadanP1);
  setHtml('edu-madan-p2', dict.eduMadanP2);
  setHtml('edu-madan-p3', dict.eduMadanP3);
  setHtml('edu-madan-p4', dict.eduMadanP4);

  // Sidebar Filter Tabs
  setText('s-tab-all-label', dict.sTabAll);
  setText('s-tab-makk-label', dict.sTabMakk);
  setText('s-tab-madan-label', dict.sTabMadan);

  // Catalog Filter Tabs
  setText('cat-tab-all-label', dict.catTabAll);
  setText('cat-tab-makk-label', dict.catTabMakk);
  setText('cat-tab-madan-label', dict.catTabMadan);
  setAttr('catalog-search-input', 'placeholder', dict.catSearchPlaceholder);

  // Sync selectors
  const appLangSelect = document.getElementById('app-lang-select');
  if (appLangSelect) appLangSelect.value = lang;

  const rasmSelect = document.getElementById('rasm-select');
  if (rasmSelect) rasmSelect.value = state.rasm;

  const transSelect = document.getElementById('trans-select');
  if (transSelect) transSelect.value = (lang === 'en' ? 'sahih' : 'kemenag');

  // Refresh surah meta and list
  const surah = ALL_SURAHS.find(s => s.id === state.currentSurah);
  if (surah) {
    const isMakk = surah.type === 'Makkiyyah' || surah.revelation === 'Mekah';
    const metaSub = document.getElementById('surah-meta-sub');
    const meaningVal = lang === 'en' ? (surah.meaning || surah.arti) : (surah.arti || surah.meaning);
    const revTypeLabel = isMakk ? (lang === 'en' ? 'Meccan' : 'Makkiyyah') : (lang === 'en' ? 'Medinan' : 'Madaniyyah');
    if (metaSub) metaSub.textContent = `${revTypeLabel} • ${surah.ayat} ${lang === 'en' ? 'Verses' : 'Ayat'} • ${dict.meaningPrefix}: "${meaningVal}"`;

    // Also update revelation badge
    const revBadge = document.getElementById('surah-revelation-badge');
    if (revBadge) {
      revBadge.className = `surah-revelation-tag ${isMakk ? 'makk' : 'madan'}`;
      revBadge.innerHTML = `
        <span>${isMakk ? dict.revTagMakk : dict.revTagMadan}</span>
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
      `;
    }
  }
  renderSidebarSurahList();
  renderQuranCatalog(currentCatalogSearchQuery, currentCatalogFilterType);
  renderVerses(state.currentSurah);

  // Refresh Sejarah Timeline if on that page
  if (state.currentPage === 'sejarah') {
    renderTimeline(state.currentEra);
  }

  // Refresh Jejak grid if on that page
  if (state.currentPage === 'jejak') {
    renderJejakGrid();
  }

  // Last Read & Mobile Elements
  setText('last-read-badge', dict.lastReadBadge);
  setText('last-read-btn-text', dict.lastReadBtnText);
  const chooseSurahSpan = document.querySelector('#btn-choose-surah span');
  if (chooseSurahSpan) chooseSurahSpan.textContent = dict.btnChooseSurah.replace(' ▾', '');
  setText('m-quick-quran', dict.mQuickQuran);
  setText('m-quick-audio', dict.mQuickAudio);
  setText('m-quick-jejak', dict.mQuickJejak);
  setText('m-quick-sejarah', dict.mQuickSejarah);
  setText('mob-label-beranda', dict.mobLabelBeranda);
  setText('mob-label-quran', dict.mobLabelQuran);
  setText('mob-label-audio', dict.mobLabelAudio);
  setText('mob-label-sejarah', dict.mobLabelSejarah);
  setText('mob-label-pengaturan', dict.mobLabelPengaturan);
  renderLastReadCard();

  if (notify) {
    showToast(dict.langChangedToast, 'success');
  }
}

// ─── Audio Instance ───
const audioPlayer = new Audio();

// ─── Reciter Audio Configuration ───
const RECITER_URLS = {
  mishary: {
    surah: (id) => `https://server8.mp3quran.net/afs/${String(id).padStart(3, '0')}.mp3`,
    verse: (surah, verse) => `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${getGlobalVerseIndex(surah, verse)}.mp3`,
  },
  sudais: {
    surah: (id) => `https://server11.mp3quran.net/sds/${String(id).padStart(3, '0')}.mp3`,
    verse: (surah, verse) => `https://cdn.islamic.network/quran/audio/128/ar.abdurrahmaansudais/${getGlobalVerseIndex(surah, verse)}.mp3`,
  },
  shatri: {
    surah: (id) => `https://server11.mp3quran.net/shatr/${String(id).padStart(3, '0')}.mp3`,
    verse: (surah, verse) => `https://cdn.islamic.network/quran/audio/128/ar.shaatree/${getGlobalVerseIndex(surah, verse)}.mp3`,
  },
  husary: {
    surah: (id) => `https://server13.mp3quran.net/husr/${String(id).padStart(3, '0')}.mp3`,
    verse: (surah, verse) => `https://cdn.islamic.network/quran/audio/128/ar.husary/${getGlobalVerseIndex(surah, verse)}.mp3`,
  },
  abdulbaset: {
    surah: (id) => `https://server7.mp3quran.net/basit/${String(id).padStart(3, '0')}.mp3`,
    verse: (surah, verse) => `https://cdn.islamic.network/quran/audio/128/ar.abdulbasitmurattal/${getGlobalVerseIndex(surah, verse)}.mp3`,
  },
  mustafa: {
    surah: (id) => `https://server8.mp3quran.net/mustafa/${String(id).padStart(3, '0')}.mp3`,
    verse: (surah, verse) => `https://cdn.islamic.network/quran/audio/128/ar.minshawi/${getGlobalVerseIndex(surah, verse)}.mp3`,
  },
  muammar: {
    surah: (id) => `https://server8.mp3quran.net/afs/${String(id).padStart(3, '0')}.mp3`,
    verse: (surah, verse) => `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${getGlobalVerseIndex(surah, verse)}.mp3`,
  },
  muzammil: {
    surah: (id) => `https://server8.mp3quran.net/afs/${String(id).padStart(3, '0')}.mp3`,
    verse: (surah, verse) => `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${getGlobalVerseIndex(surah, verse)}.mp3`,
  },
  husain: {
    surah: (id) => `https://server8.mp3quran.net/afs/${String(id).padStart(3, '0')}.mp3`,
    verse: (surah, verse) => `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${getGlobalVerseIndex(surah, verse)}.mp3`,
  }
};

// Global Verse Index Calculator for API Audio
function getGlobalVerseIndex(surahId, verseNum) {
  let count = 0;
  for (let i = 1; i < surahId; i++) {
    const s = ALL_SURAHS.find(item => item.id === i);
    count += s ? s.ayat : 0;
  }
  return count + verseNum;
}

// ─── Merge English Translations into HISTORY Data ───
function mergeHistoryTranslations() {
  if (typeof HISTORY_EN_TRANSLATIONS === 'undefined') return;
  
  for (const era in HISTORY_EN_TRANSLATIONS) {
    if (HISTORY[era]) {
      const translations = HISTORY_EN_TRANSLATIONS[era];
      HISTORY[era].forEach(event => {
        if (translations[event.id]) {
          Object.assign(event, translations[event.id]);
        }
      });
    }
  }
}

// Merge translations on load
mergeHistoryTranslations();

// ─── Initialization ───
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initSidebarSurahList();
  initGlobalSearch();
  initQuranPage();
  initAudioPage();
  initSejarahPage();
  initJejakPage();
  initSettings();
  initModal();
  initMiniPlayer();
  initAudioEvents();

  // Restore saved theme
  const savedTheme = localStorage.getItem('qh_theme') || 'light';
  applyTheme(savedTheme, false);

  // Apply active or saved language on startup
  applyLanguage(state.language, false);
});

// ══════════════════════════════════════════
// NAVIGATION & HEADER CONTROLS
// ══════════════════════════════════════════
function initNavigation() {
  const hamburger = document.getElementById('hamburger-btn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const closeBtn = document.getElementById('sidebar-close-btn');

  // Mobile Hamburger Toggle
  hamburger?.addEventListener('click', () => {
    const isOpen = sidebar?.classList.toggle('open');
    if (isOpen) {
      overlay?.classList.add('open');
    } else {
      overlay?.classList.remove('open');
    }
  });

  // Sidebar Close Button & Backdrop Overlay
  closeBtn?.addEventListener('click', () => {
    sidebar?.classList.remove('open');
    overlay?.classList.remove('open');
  });

  overlay?.addEventListener('click', () => {
    sidebar?.classList.remove('open');
    overlay?.classList.remove('open');
  });

  // Quick Surah Picker button in Reader Header on Mobile
  document.getElementById('btn-choose-surah')?.addEventListener('click', () => {
    sidebar?.classList.add('open');
    overlay?.classList.add('open');
  });

  // Language Switcher Toggle Button
  document.getElementById('lang-toggle-btn')?.addEventListener('click', () => {
    const nextLang = state.language === 'en' ? 'id' : 'en';
    applyLanguage(nextLang, true);
  });

  // Topbar Navigation Tabs (Desktop)
  document.querySelectorAll('.nav-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      const page = btn.dataset.page;
      if (page) navigateTo(page);
    });
  });

  // Mobile Bottom Navigation Tabs (HP / Smartphone)
  document.querySelectorAll('.mobile-nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const page = btn.dataset.page;
      if (page) navigateTo(page);
    });
  });

  // Reader Settings Button
  document.getElementById('reader-settings-btn')?.addEventListener('click', () => {
    navigateTo('pengaturan');
  });

  // Theme Toggle Button
  document.getElementById('theme-toggle-btn')?.addEventListener('click', () => {
    const isDark = document.body.classList.contains('theme-dark');
    applyTheme(isDark ? 'light' : 'dark');
  });

  // Notification Button & Dropdown
  const notifBtn = document.getElementById('notification-btn');
  const notifDropdown = document.getElementById('notification-dropdown');
  const notifClose = document.getElementById('notif-close-btn');

  notifBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleNotification();
  });

  notifClose?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleNotification(false);
  });

  document.addEventListener('click', (e) => {
    if (notifDropdown && !notifDropdown.contains(e.target) && e.target !== notifBtn) {
      toggleNotification(false);
    }
  });

  // Prev / Next Surah Buttons in Reader Header
  document.getElementById('prev-surah-btn')?.addEventListener('click', () => {
    if (state.currentSurah > 1) {
      loadSurah(state.currentSurah - 1);
      showToast(`📖 Loading Surah ${ALL_SURAHS[state.currentSurah - 1]?.name}`, 'info');
    } else {
      showToast('First Surah reached', 'info');
    }
  });

  document.getElementById('next-surah-btn')?.addEventListener('click', () => {
    if (state.currentSurah < 114) {
      loadSurah(state.currentSurah + 1);
      showToast(`📖 Loading Surah ${ALL_SURAHS[state.currentSurah - 1]?.name}`, 'info');
    } else {
      showToast('Last Surah reached', 'info');
    }
  });
}

function toggleNotification(show) {
  const dropdown = document.getElementById('notification-dropdown');
  if (!dropdown) return;
  const isVisible = dropdown.style.display === 'block';
  dropdown.style.display = (show !== undefined ? show : !isVisible) ? 'block' : 'none';
}

function navigateTo(page) {
  state.currentPage = page;

  // Switch pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(`page-${page}`);
  if (target) target.classList.add('active');

  // Update nav pills in topbar (Desktop)
  document.querySelectorAll('.nav-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.page === page);
  });

  // Update mobile bottom nav items (HP)
  document.querySelectorAll('.mobile-nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.page === page);
  });

  // Scroll main container to top smoothly
  document.querySelector('.content-area')?.scrollTo({ top: 0, behavior: 'smooth' });

  // Close sidebar drawer & overlay on mobile
  if (window.innerWidth <= 768) {
    document.getElementById('sidebar')?.classList.remove('open');
    document.getElementById('sidebar-overlay')?.classList.remove('open');
  }
}

// ══════════════════════════════════════════
// GLOBAL SMART SEARCH BAR
// ══════════════════════════════════════════
function initGlobalSearch() {
  const searchInput = document.getElementById('main-search');
  const dropdown = document.getElementById('search-dropdown');
  if (!searchInput || !dropdown) return;

  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (!q) {
      dropdown.style.display = 'none';
      return;
    }

    // Check verse pattern e.g. "2:255" or "1:1"
    const verseMatch = q.match(/^(\d{1,3}):(\d{1,3})$/);
    if (verseMatch) {
      const sId = parseInt(verseMatch[1]);
      const vNum = parseInt(verseMatch[2]);
      const surah = ALL_SURAHS.find(s => s.id === sId);
      if (surah) {
        const d = I18N[state.language] || I18N.id;
        dropdown.innerHTML = `
          <div class="search-result-item" onclick="jumpToVerse(${sId}, ${vNum})">
            <div>
              <strong>${surah.name} : ${d.searchVerseLabel} ${vNum}</strong>
              <div style="font-size:0.75rem; color:var(--text-muted);">${surah.arTitle}</div>
            </div>
            <span style="font-size:0.75rem; color:var(--sage-600); font-weight:600;">${d.searchJump}</span>
          </div>
        `;
        dropdown.style.display = 'block';
        return;
      }
    }

    // Search Surahs (name, number, arti, arabic, or makkiyyah/madaniyyah)
    const matches = ALL_SURAHS.filter(s => {
      const isMakk = s.type === 'Makkiyyah' || s.revelation === 'Mekah';
      const revText = isMakk ? 'makkiyyah mekah meccan' : 'madaniyyah madinah medinan';

      return s.name.toLowerCase().includes(q) ||
        (s.arti && s.arti.toLowerCase().includes(q)) ||
        s.id.toString() === q ||
        s.ar.includes(q) ||
        (s.arTitle && s.arTitle.includes(q)) ||
        revText.includes(q);
    }).slice(0, 8);

    if (matches.length > 0) {
      const isEn = state.language === 'en';
      dropdown.innerHTML = matches.map(s => {
        const isMakk = s.type === 'Makkiyyah' || s.revelation === 'Mekah';
        const revBadgeClass = isMakk ? 'rev-makkiyyah' : 'rev-madaniyyah';
        const revBadgeText = isMakk ? (isEn ? '🕋 Meccan' : '🕋 Makkiyyah') : (isEn ? '🕌 Medinan' : '🕌 Madaniyyah');
        const meaningText = isEn ? (s.meaning || s.arti) : (s.arti || s.meaning);

        return `
          <div class="search-result-item" onclick="loadSurah(${s.id}); navigateTo('quran'); switchQuranView('reader'); hideSearchDropdown();">
            <div>
              <strong>${s.id}. ${s.name} ${meaningText ? `<span style="font-weight:normal; color:var(--text-muted);">(${meaningText})</span>` : ''}</strong>
              <div style="font-size:0.75rem; color:var(--text-muted); display:flex; align-items:center; gap:6px; margin-top:2px;">
                <span class="badge-mini-rev ${revBadgeClass}">${revBadgeText}</span>
                <span>• ${s.ayat} ${isEn ? 'Verses' : 'Ayat'}</span>
              </div>
            </div>
            <span style="font-family:var(--font-arabic); font-size:1.1rem; color:var(--sage-700);">${s.arTitle || s.ar}</span>
          </div>
        `;
      }).join('');
      dropdown.style.display = 'block';
    } else {
      const d = I18N[state.language] || I18N.id;
      dropdown.innerHTML = `
        <div style="padding:12px; font-size:0.8rem; color:var(--text-muted); text-align:center;">
          ${d.searchNoResult} "${q}"
        </div>
      `;
      dropdown.style.display = 'block';
    }
  });

  // Handle Enter key
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const q = searchInput.value.trim().toLowerCase();
      const verseMatch = q.match(/^(\d{1,3}):(\d{1,3})$/);
      if (verseMatch) {
        jumpToVerse(parseInt(verseMatch[1]), parseInt(verseMatch[2]));
        hideSearchDropdown();
        return;
      }

      // Check module keywords
      if (q.includes('audio') || q.includes('qori') || q.includes('murattal')) {
        navigateTo('audio');
        hideSearchDropdown();
        return;
      }
      if (q.includes('sejarah') || q.includes('history')) {
        navigateTo('sejarah');
        hideSearchDropdown();
        return;
      }
      if (q.includes('jejak') || q.includes('asbab')) {
        navigateTo('jejak');
        hideSearchDropdown();
        return;
      }
      if (q.includes('setting') || q.includes('pengaturan')) {
        navigateTo('pengaturan');
        hideSearchDropdown();
        return;
      }

      // Match first surah
      const match = ALL_SURAHS.find(s =>
        s.name.toLowerCase().includes(q) ||
        s.id.toString() === q ||
        s.ar.includes(q)
      );
      if (match) {
        loadSurah(match.id);
        navigateTo('quran');
        hideSearchDropdown();
      }
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && e.target !== searchInput) {
      hideSearchDropdown();
    }
  });
}

function hideSearchDropdown() {
  const dropdown = document.getElementById('search-dropdown');
  if (dropdown) dropdown.style.display = 'none';
}

function jumpToVerse(surahId, verseNum) {
  loadSurah(surahId, verseNum);
  navigateTo('quran');
  hideSearchDropdown();
  showToast(`Jumped to Surah ${ALL_SURAHS[surahId - 1]?.name} : Ayat ${verseNum}`, 'success');
}

// ══════════════════════════════════════════
// SIDEBAR SURAH LIST
// ══════════════════════════════════════════
let currentSidebarFilterType = 'all';

function initSidebarSurahList() {
  updateSidebarCounts();
  renderSidebarSurahList();

  const searchInput = document.getElementById('sidebar-surah-search');
  searchInput?.addEventListener('input', (e) => {
    renderSidebarSurahList(e.target.value, currentSidebarFilterType);
  });

  // Filter tabs: Semua, Makkiyyah, Madaniyyah
  document.querySelectorAll('.s-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.s-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSidebarFilterType = btn.dataset.type || 'all';
      renderSidebarSurahList(searchInput?.value || '', currentSidebarFilterType);
    });
  });
}

function updateSidebarCounts() {
  const makkCount = ALL_SURAHS.filter(s => s.type === 'Makkiyyah' || s.revelation === 'Mekah').length;
  const madanCount = ALL_SURAHS.filter(s => s.type === 'Madaniyyah' || s.revelation === 'Madinah').length;
  const countAllEl = document.getElementById('s-count-all');
  const countMakkEl = document.getElementById('s-count-makk');
  const countMadanEl = document.getElementById('s-count-madan');
  if (countAllEl) countAllEl.textContent = ALL_SURAHS.length;
  if (countMakkEl) countMakkEl.textContent = makkCount;
  if (countMadanEl) countMadanEl.textContent = madanCount;

  // Also update catalog pill counts if present
  const catAll = document.getElementById('cat-count-all');
  const catMakk = document.getElementById('cat-count-makk');
  const catMadan = document.getElementById('cat-count-madan');
  if (catAll) catAll.textContent = ALL_SURAHS.length;
  if (catMakk) catMakk.textContent = makkCount;
  if (catMadan) catMadan.textContent = madanCount;
}

function renderSidebarSurahList(filter = '', typeFilter = 'all') {
  const container = document.getElementById('sidebar-surah-list');
  if (!container) return;

  const q = filter.trim().toLowerCase();

  const filtered = ALL_SURAHS.filter(s => {
    const isMakk = s.type === 'Makkiyyah' || s.revelation === 'Mekah';
    const isMadan = s.type === 'Madaniyyah' || s.revelation === 'Madinah';

    const matchText = !q ||
      s.name.toLowerCase().includes(q) ||
      (s.arti && s.arti.toLowerCase().includes(q)) ||
      s.ar.includes(q) ||
      (s.arTitle && s.arTitle.includes(q)) ||
      s.id.toString() === q ||
      s.id.toString().includes(q);

    const matchType = typeFilter === 'all' ||
      (typeFilter === 'Makkiyyah' && isMakk) ||
      (typeFilter === 'Madaniyyah' && isMadan);

    return matchText && matchType;
  });

  if (filtered.length === 0) {
    const d = I18N[state.language] || I18N.id;
    container.innerHTML = `
      <div style="padding: 24px 12px; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        ${d.sidebarNoResult}
      </div>
    `;
    return;
  }

  const isEn = state.language === 'en';
  const shownCountEl = document.getElementById('surah-shown-count');
  if (shownCountEl) {
    shownCountEl.textContent = (!filter && typeFilter === 'all') ? '7 shown' : `${filtered.length} shown`;
  }

  container.innerHTML = filtered.map(s => {
    const isMakk = s.type === 'Makkiyyah' || s.revelation === 'Mekah';
    const revBadgeClass = isMakk ? 'rev-makkiyyah' : 'rev-madaniyyah';
    const revBadgeText = isMakk ? 'MAKKIYYAH' : 'MADANIYYAH';
    const meaningText = isEn ? (s.meaning || s.arti) : (s.arti || s.meaning);

    return `
      <div class="surah-item ${s.id === state.currentSurah ? 'active' : ''}" 
           id="sidebar-surah-${s.id}"
           onclick="loadSurah(${s.id}); navigateTo('quran'); switchQuranView('reader');" 
           role="button" tabindex="0">
        <div class="surah-num">${s.id}</div>
        <div class="surah-info">
          <div class="surah-item-name-row">
            <span class="surah-item-name">${s.name}</span>
            ${meaningText ? `<span class="surah-item-meaning">${meaningText}</span>` : ''}
          </div>
          <div class="surah-item-sub">
            <span class="badge-mini-rev ${revBadgeClass}">${revBadgeText}</span>
            <span class="surah-item-verses">${s.ayat} ${isEn ? 'verses' : 'ayat'}</span>
          </div>
        </div>
        <div class="surah-item-ar">${s.ar || s.arTitle}</div>
      </div>
    `;
  }).join('');
}

// ══════════════════════════════════════════
// AL-QUR'AN PAGE & VERSES
// ══════════════════════════════════════════
function initQuranPage() {
  loadSurah(1);

  // Font Slider & Steppers
  const slider = document.getElementById('font-slider');
  slider?.addEventListener('input', (e) => {
    state.fontSize = parseInt(e.target.value);
    updateFontSizeUI();
  });

  document.getElementById('font-dec-btn')?.addEventListener('click', () => {
    state.fontSize = Math.max(24, state.fontSize - 2);
    updateFontSizeUI();
  });

  document.getElementById('font-inc-btn')?.addEventListener('click', () => {
    state.fontSize = Math.min(54, state.fontSize + 2);
    updateFontSizeUI();
  });

  // Play All Button in Reader Header
  document.getElementById('play-all-btn')?.addEventListener('click', () => {
    playSurahAudio(state.currentSurah);
  });

  // Custom Audio Upload Button in Reader Header
  const readerUploadBtn = document.getElementById('btn-upload-reader-audio');
  const readerFileInput = document.getElementById('reader-audio-file-input');

  readerUploadBtn?.addEventListener('click', () => {
    readerFileInput?.click();
  });

  readerFileInput?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileUrl = URL.createObjectURL(file);
    customAudios.surahs[state.currentSurah] = {
      url: fileUrl,
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(1) + ' MB'
    };

    const surah = ALL_SURAHS.find(s => s.id === state.currentSurah);
    audioPlayer.src = fileUrl;
    audioPlayer.playbackRate = state.speed;
    audioPlayer.play().catch(err => console.warn(err));
    state.isPlaying = true;

    const titlePrefix = state.language === 'en' ? '[Custom Audio]' : '[Audio Kustom]';
    updatePlayerUI(surah?.name || 'Surah', `${titlePrefix} ${file.name}`);
    updatePlayButtons();
    showToast(state.language === 'en' 
      ? `🎵 Playing custom audio for Surah ${surah?.name}` 
      : `🎵 Memutar audio kustom untuk Surah ${surah?.name}`, 'success');
  });

  // Initialize the 114 Surah Catalog & Revelation feature
  initQuranCatalog();
}

// ══════════════════════════════════════════
// 114 SURAH CATALOG & MAKKIYYAH/MADANIYYAH
// ══════════════════════════════════════════
let currentCatalogFilterType = 'all';
let currentCatalogSearchQuery = '';

function initQuranCatalog() {
  renderQuranCatalog();
}

function switchQuranView(view) {
  const readerEl = document.getElementById('quran-reader-layout');
  const catalogEl = document.getElementById('quran-catalog-view');
  const btnReader = document.getElementById('btn-view-reader');
  const btnCatalog = document.getElementById('btn-view-catalog');

  if (view === 'catalog') {
    if (readerEl) readerEl.style.display = 'none';
    if (catalogEl) catalogEl.style.display = 'block';
    btnReader?.classList.remove('active');
    btnCatalog?.classList.add('active');
    renderQuranCatalog(currentCatalogSearchQuery, currentCatalogFilterType);
  } else {
    if (readerEl) readerEl.style.display = 'flex';
    if (catalogEl) catalogEl.style.display = 'none';
    btnReader?.classList.add('active');
    btnCatalog?.classList.remove('active');
  }
}

function filterCatalog(type) {
  currentCatalogFilterType = type;
  document.querySelectorAll('#catalog-filter-tabs .c-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.type === type);
  });
  renderQuranCatalog(currentCatalogSearchQuery, currentCatalogFilterType);
}

function handleCatalogSearch(query) {
  currentCatalogSearchQuery = query;
  renderQuranCatalog(currentCatalogSearchQuery, currentCatalogFilterType);
}

function renderQuranCatalog(filter = '', typeFilter = 'all') {
  const grid = document.getElementById('catalog-grid');
  if (!grid) return;

  const q = filter.trim().toLowerCase();

  const filtered = ALL_SURAHS.filter(s => {
    const isMakk = s.type === 'Makkiyyah' || s.revelation === 'Mekah';
    const isMadan = s.type === 'Madaniyyah' || s.revelation === 'Madinah';

    const matchText = !q ||
      s.name.toLowerCase().includes(q) ||
      (s.arti && s.arti.toLowerCase().includes(q)) ||
      s.ar.includes(q) ||
      (s.arTitle && s.arTitle.includes(q)) ||
      s.id.toString() === q ||
      s.id.toString().includes(q);

    const matchType = typeFilter === 'all' ||
      (typeFilter === 'Makkiyyah' && isMakk) ||
      (typeFilter === 'Madaniyyah' && isMadan);

    return matchText && matchType;
  });

  const isEn = state.language === 'en';
  const d = I18N[state.language] || I18N.id;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 48px 24px; text-align: center; color: var(--text-muted);">
        <div style="font-size: 2.2rem; margin-bottom: 8px;">🔍</div>
        <div style="font-weight: 600; font-size: 1rem; color: var(--text-primary);">${d.catNoResult}</div>
        <div style="font-size: 0.85rem; margin-top: 4px;">${d.catNoResultSub}</div>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(s => {
    const isMakk = s.type === 'Makkiyyah' || s.revelation === 'Mekah';
    const revBadgeClass = isMakk ? 'rev-makkiyyah' : 'rev-madaniyyah';
    const revBadgeText = isMakk ? (isEn ? '🕋 Meccan' : '🕋 Makkiyyah') : (isEn ? '🕌 Medinan' : '🕌 Madaniyyah');
    const meaningVal = isEn ? (s.meaning || s.arti) : (s.arti || s.meaning);

    return `
      <div class="catalog-card" onclick="loadSurah(${s.id}); switchQuranView('reader');">
        <div class="catalog-card-top">
          <div class="c-num-box">${s.id}</div>
          <div class="c-surah-title-wrap">
            <div class="c-surah-name">${s.name}</div>
            <div class="c-surah-meaning">${d.meaningPrefix}: "${meaningVal || s.name}"</div>
          </div>
          <div class="c-surah-arabic">${s.arTitle || s.ar}</div>
        </div>
        <div class="catalog-card-bottom">
          <div style="display:flex; align-items:center; gap:8px;">
            <span class="c-badge-rev ${revBadgeClass}">${revBadgeText}</span>
            <span class="c-ayat-count">${s.ayat} ${isEn ? 'Verses' : 'Ayat'}</span>
          </div>
          <div class="c-card-actions" onclick="event.stopPropagation()">
            <button class="c-btn-action" onclick="loadSurah(${s.id}); switchQuranView('reader');" title="${isEn ? 'Read Surah' : 'Baca Surah'}">
              ${d.catBtnRead}
            </button>
            <button class="c-btn-action" onclick="playSurahAudio(${s.id})" title="${isEn ? 'Play Surah Audio' : 'Putar Audio Surah'}">
              ${d.catBtnAudio}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function openRevelationModal(surahId) {
  const surah = ALL_SURAHS.find(s => s.id === surahId);
  if (!surah) return;

  const isMakk = surah.type === 'Makkiyyah' || surah.revelation === 'Mekah';
  const modal = document.getElementById('rev-modal-backdrop');
  const body = document.getElementById('rev-modal-body');
  if (!modal || !body) return;

  const d = I18N[state.language] || I18N.id;
  const isEn = state.language === 'en';
  const meaningVal = isEn ? (surah.meaning || surah.arti) : (surah.arti || surah.meaning);
  const verseUnit = isEn ? 'Verses' : 'Ayat';

  body.innerHTML = `
    <div style="text-align: center; margin-bottom: 20px;">
      <div style="display: inline-flex; width: 54px; height: 54px; border-radius: 16px; background: ${isMakk ? 'rgba(45, 106, 79, 0.12)' : 'rgba(217, 119, 6, 0.12)'}; align-items: center; justify-content: center; font-size: 1.8rem; margin-bottom: 12px;">
        ${isMakk ? '🕋' : '🕌'}
      </div>
      <h3 style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--text-primary); margin: 0 0 4px 0;">
        ${surah.id}. ${surah.name} (${surah.arTitle || surah.ar})
      </h3>
      <div style="display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 0.82rem; font-weight: 700; background: ${isMakk ? 'rgba(45, 106, 79, 0.15)' : 'rgba(217, 119, 6, 0.15)'}; color: ${isMakk ? '#1b4332' : '#b45309'}; margin-top: 6px;">
        ${isMakk ? d.revModalTitleMakk : d.revModalTitleMadan}
      </div>
    </div>

    <div style="background: var(--bg-input); border-radius: 12px; padding: 14px 16px; margin-bottom: 16px; font-size: 0.86rem; line-height: 1.6; color: var(--text-primary);">
      <div style="margin-bottom: 6px;">
        <strong>${d.revModalMeaningLabel}</strong> "${meaningVal || '-'}"
      </div>
      <div style="margin-bottom: 6px;">
        <strong>${d.revModalVerseLabel}</strong> ${surah.ayat} ${verseUnit}
      </div>
      <div>
        <strong>${d.revModalPeriodLabel}</strong> ${isMakk ? d.revModalPeriodMakk : d.revModalPeriodMadan}
      </div>
    </div>

    <div style="border-top: 1px solid var(--border); padding-top: 14px;">
      <h4 style="font-size: 0.92rem; font-weight: 700; color: var(--text-primary); margin: 0 0 8px 0;">
        ${isMakk ? d.revModalCharTitle_makk : d.revModalCharTitle_madan}
      </h4>
      <p style="font-size: 0.84rem; color: var(--text-secondary); line-height: 1.55; margin: 0;">
        ${isMakk ? d.revModalCharBody_makk : d.revModalCharBody_madan}
      </p>
    </div>

    <div style="margin-top: 22px; display: flex; gap: 10px; justify-content: flex-end;">
      <button class="btn-secondary" onclick="closeRevelationModal()" style="padding: 8px 18px; font-size: 0.84rem;">${d.revModalBtnClose}</button>
      <button class="btn-primary" onclick="closeRevelationModal(); switchQuranView('catalog'); filterCatalog('${surah.type}');" style="padding: 8px 18px; font-size: 0.84rem;">
        ${d.revModalBtnViewAll} ${isMakk ? d.sTabMakk : d.sTabMadan} →
      </button>
    </div>
  `;

  modal.classList.add('open');
}

function closeRevelationModal(event) {
  if (event && event.target !== event.currentTarget && !event.target.classList.contains('rev-modal-close')) {
    return;
  }
  const modal = document.getElementById('rev-modal-backdrop');
  if (modal) modal.classList.remove('open');
}

function updateFontSizeUI() {
  const slider = document.getElementById('font-slider');
  if (slider) slider.value = state.fontSize;
  const label = document.getElementById('font-size-label');
  if (label) label.textContent = `${state.fontSize}px`;
  document.querySelectorAll('.verse-arabic').forEach(el => {
    el.style.fontSize = `${state.fontSize}px`;
  });
}

// ─── Last Read Storage & Functions ───
function saveLastRead(surahId, verseNum = 1) {
  const surah = ALL_SURAHS.find(s => s.id === surahId);
  if (!surah) return;
  const data = {
    surahId,
    verseNum,
    name: surah.name,
    ar: surah.ar,
    type: surah.type,
    time: Date.now()
  };
  localStorage.setItem('qh_last_read', JSON.stringify(data));
  renderLastReadCard();
}

function renderLastReadCard() {
  const card = document.getElementById('last-read-card');
  if (!card) return;
  const raw = localStorage.getItem('qh_last_read');
  const titleEl = document.getElementById('last-read-title');
  const arabicEl = document.getElementById('last-read-arabic');
  const subEl = document.getElementById('last-read-sub');
  const progressEl = document.getElementById('last-read-progress');

  if (!raw) {
    // Default to Al-Baqarah (as shown in reference mockup)
    if (titleEl) titleEl.textContent = 'Al-Baqarah';
    if (arabicEl) arabicEl.textContent = 'البَقَرَة';
    if (subEl) subEl.textContent = state.language === 'en' ? 'Verse 255 of 286' : 'Ayat 255 dari 286';
    if (progressEl) progressEl.style.width = '89%';
    card.style.display = 'block';
    return;
  }
  try {
    const data = JSON.parse(raw);
    const surahObj = ALL_SURAHS.find(s => s.id === data.surahId) || { ayat: 286, ar: 'البَقَرَة' };
    if (titleEl) titleEl.textContent = data.name || 'Al-Baqarah';
    if (arabicEl) arabicEl.textContent = surahObj.ar || 'البَقَرَة';
    if (subEl) {
      subEl.textContent = state.language === 'en' 
        ? `Verse ${data.verseNum} of ${surahObj.ayat || 286}` 
        : `Ayat ${data.verseNum} dari ${surahObj.ayat || 286}`;
    }
    if (progressEl && surahObj.ayat) {
      const pct = Math.min(100, Math.max(5, Math.round((data.verseNum / surahObj.ayat) * 100)));
      progressEl.style.width = `${pct}%`;
    }
    card.style.display = 'block';
  } catch (e) {
    card.style.display = 'block';
  }
}

function continueLastRead() {
  const raw = localStorage.getItem('qh_last_read');
  if (raw) {
    try {
      const data = JSON.parse(raw);
      loadSurah(data.surahId, data.verseNum);
      navigateTo('quran');
      return;
    } catch (e) {}
  }
  loadSurah(2, 255);
  navigateTo('quran');
  switchQuranView('reader');
}

async function loadSurah(surahId, targetVerse = null) {
  if (surahId < 1 || surahId > 114) return;
  state.currentSurah = surahId;
  const surah = ALL_SURAHS.find(s => s.id === surahId);
  if (!surah) return;

  // Save to Last Read
  saveLastRead(surahId, targetVerse || 1);

  // Update sidebar active indicator
  document.querySelectorAll('.surah-item').forEach(item => item.classList.remove('active'));
  const sidebarItem = document.getElementById(`sidebar-surah-${surahId}`);
  if (sidebarItem) {
    sidebarItem.classList.add('active');
    sidebarItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  // Update header content
  const badge = document.getElementById('surah-num-badge');
  const nameId = document.getElementById('surah-name-id');
  const metaSub = document.getElementById('surah-meta-sub');
  const nameAr = document.getElementById('surah-name-ar');
  const revBadge = document.getElementById('surah-revelation-badge');

  const isMakk = surah.type === 'Makkiyyah' || surah.revelation === 'Mekah';
  const isEn = state.language === 'en';
  const dict = I18N[state.language] || I18N.id;
  const meaningVal = isEn ? (surah.meaning || surah.arti) : (surah.arti || surah.meaning);
  const revTypeLabel = isMakk ? (isEn ? 'Meccan' : 'Makkiyyah') : (isEn ? 'Medinan' : 'Madaniyyah');

  if (badge) badge.textContent = surahId;
  if (nameId) nameId.textContent = surah.name;
  if (metaSub) metaSub.textContent = `${revTypeLabel} • ${surah.ayat} ${isEn ? 'Verses' : 'Ayat'} • ${dict.meaningPrefix}: "${meaningVal || surah.name}"`;
  if (nameAr) nameAr.textContent = surah.arTitle || ('سُوْرَةُ ' + surah.ar);

  if (revBadge) {
    revBadge.className = `surah-revelation-tag ${isMakk ? 'makk' : 'madan'}`;
    revBadge.innerHTML = `
      <span>${isMakk ? dict.revTagMakk : dict.revTagMadan}</span>
      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
    `;
    revBadge.title = isEn ? `Click for info: ${surah.name} (${isMakk ? 'Meccan' : 'Medinan'})` : `Klik untuk info lengkap Surah ${surah.name} (${surah.type})`;
  }

  // Update Prev / Next buttons state
  const prevBtn = document.getElementById('prev-surah-btn');
  const nextBtn = document.getElementById('next-surah-btn');
  if (prevBtn) prevBtn.style.opacity = surahId === 1 ? '0.4' : '1';
  if (nextBtn) nextBtn.style.opacity = surahId === 114 ? '0.4' : '1';

  // Toggle Bismillah
  const bismillah = document.getElementById('bismillah-banner');
  if (bismillah) {
    bismillah.style.display = (surahId === 1 || surahId === 9) ? 'none' : 'block';
  }

  // Render verses
  await renderVerses(surahId, targetVerse);
}

async function renderVerses(surahId, targetVerse = null) {
  const container = document.getElementById('verses-container');
  if (!container) return;

  const isEn = state.language === 'en' || state.translation === 'sahih';

  const expectedCount = ALL_SURAHS[surahId - 1]?.ayat || 0;
  let verses = VERSES[surahId];

  // If verses not loaded or only partial, load from the dedicated per-surah JSON file (1-114)
  if (!verses || verses.length < expectedCount) {
    container.innerHTML = `
      <div style="text-align:center; padding: 48px 24px; color: var(--text-secondary);">
        <div style="font-size: 2.5rem; margin-bottom: 12px; animation: spin 1s infinite linear;">⌛</div>
        <div style="font-size: 1rem; font-weight:600; color:var(--text-primary);">${isEn ? `Loading Surah ${ALL_SURAHS[surahId - 1]?.name} verses...` : `Memuat ayat Surah ${ALL_SURAHS[surahId - 1]?.name}...`}</div>
      </div>
    `;

    // 1. Load from local per-surah file: data/surah/${surahId}.json
    try {
      const localRes = await fetch(`data/surah/${surahId}.json`);
      if (localRes.ok) {
        const surahData = await localRes.json();
        if (surahData && surahData.ayahs && surahData.ayahs.length > 0) {
          VERSES[surahId] = surahData.ayahs.map(a => {
            const histId = getHistoryId(surahId, a.number);
            return {
              num: a.number,
              ar: a.arab,
              ar_uthmani: a.arab,
              ar_kemenag: a.arab_kemenag || a.arab,
              latin: a.latin,
              id: a.translation_id,
              en: a.translation_en,
              audio: a.audio,
              hasHistory: !!histId,
              historyId: histId
            };
          });
          verses = VERSES[surahId];
        }
      }
    } catch (localErr) {
      console.warn("Could not load local surah file, falling back to network APIs:", localErr);
    }

    // 2. Fallback to public Quran APIs if local file is missing or blocked
    if (!verses || verses.length === 0) {
      try {
        const [resId, resEn, resUth] = await Promise.allSettled([
          fetch(`https://equran.id/api/v2/surat/${surahId}`),
          fetch(`https://api.alquran.cloud/v1/surah/${surahId}/en.sahih`),
          fetch(`https://api.alquran.cloud/v1/surah/${surahId}/quran-uthmani`)
        ]);

        let jsonId = null;
        let jsonEn = null;
        let jsonUth = null;

        if (resId.status === 'fulfilled' && resId.value.ok) jsonId = await resId.value.json();
        if (resEn.status === 'fulfilled' && resEn.value.ok) jsonEn = await resEn.value.json();
        if (resUth.status === 'fulfilled' && resUth.value.ok) jsonUth = await resUth.value.json();

        if (jsonId?.data?.ayat) {
          const enAyahs = jsonEn?.data?.ayahs || [];
          const uthAyahs = jsonUth?.data?.ayahs || [];
          VERSES[surahId] = jsonId.data.ayat.map((a, idx) => {
            const textUthmani = uthAyahs[idx]?.text || a.teksArab;
            const textKemenag = a.teksArab;
            const histId = getHistoryId(surahId, a.nomorAyat);
            return {
              num: a.nomorAyat,
              ar: textUthmani,
              ar_uthmani: textUthmani,
              ar_kemenag: textKemenag,
              latin: a.teksLatin,
              id: a.teksIndonesia,
              en: enAyahs[idx]?.text || a.teksIndonesia,
              audio: a.audio,
              hasHistory: !!histId,
              historyId: histId
            };
          });
          verses = VERSES[surahId];
        }
      } catch (e) {
        console.warn("API fetch error, using generated fallback:", e);
      }
    }

    // Secondary fallback generator
    if (!verses || verses.length === 0) {
      const surahInfo = ALL_SURAHS.find(s => s.id === surahId);
      VERSES[surahId] = [
        {
          num: 1,
          ar: surahInfo.arTitle,
          ar_uthmani: surahInfo.arTitle,
          ar_kemenag: surahInfo.arTitle,
          latin: `${surahInfo.name} - Verse 1`,
          id: `Dengan nama Allah Yang Maha Pengasih, Maha Penyayang. Pembukaan Surah ${surahInfo.name}.`,
          en: `In the name of Allah, the Entirely Merciful, the Especially Merciful. Opening of Surah ${surahInfo.name}.`,
          hasHistory: false
        },
        {
          num: 2,
          ar: 'الْحَمْدُ لِلَّهِ الَّذِي أَنزَلَ عَلَىٰ عَبْدِهِ الْكِتَابَ',
          ar_uthmani: 'ٱلْحَمْدُ لِلَّهِ ٱلَّذِىٓ أَنزَلَ عَلَىٰ عَبْدِهِ ٱلْكِتَٰبَ',
          ar_kemenag: 'الْحَمْدُ لِلَّهِ الَّذِي أَنزَلَ عَلَىٰ عَبْدِهِ الْكِتَابَ',
          latin: 'Al-hamdu lillahil-ladzi anzala \'ala \'abdihil-kitab',
          id: 'Segala puji bagi Allah yang telah menurunkan Kitab Suci kepada hamba-Nya sebagai petunjuk bagi seluruh alam.',
          en: '[All] praise is [due] to Allah, who has sent down upon His Servant the Book and has not made therein any deviance.',
          hasHistory: false
        }
      ];
      verses = VERSES[surahId];
    }
  }

  container.innerHTML = verses.map(v => {
    const isBookmarked = state.bookmarks.some(b => b.surah === surahId && b.verse === v.num);
    const transText = isEn ? (v.en || v.id) : (v.id || v.en);
    const arabicText = state.rasm === 'madinah' ? (v.ar_uthmani || v.ar) : (v.ar_kemenag || v.ar);
    return `
      <div class="verse-card ${targetVerse === v.num ? 'highlighted' : ''}" id="verse-${surahId}-${v.num}">
        <div class="verse-top">
          <div class="verse-badge">${v.num}</div>
          <div class="verse-actions">
            <button class="verse-btn" title="${isEn ? 'Play Verse Audio' : 'Putar Audio Ayat'}" onclick="playVerse(${surahId}, ${v.num})">▶</button>
            <button class="verse-btn ${isBookmarked ? 'active' : ''}" title="${isEn ? 'Bookmark Verse' : 'Tandai Ayat'}" onclick="bookmarkVerse(${surahId}, ${v.num})">
              ${isBookmarked ? '⭐' : '🔖'}
            </button>
            <button class="verse-btn" title="${isEn ? 'Copy Verse' : 'Salin Ayat'}" onclick="copyVerse(this, '${escapeStr(arabicText)}', '${escapeStr(transText)}')">📋</button>
            ${v.hasHistory ? `<button class="verse-btn has-history" title="Asbabun Nuzul" onclick="openHistoryModal('${v.historyId}')">🏛️</button>` : ''}
          </div>
        </div>
        <div class="verse-arabic" style="font-size: ${state.fontSize}px">${arabicText}</div>
        <div class="verse-latin" style="display: ${state.transliterasi ? 'block' : 'none'};">${v.latin}</div>
        <div class="verse-translation">${transText}</div>
        ${v.hasHistory ? `
          <div class="verse-history-tag" onclick="openHistoryModal('${v.historyId}')">
            ${isEn ? '🏛️ Historical context available (Asbabun Nuzul) — Click to view chronicle' : '🏛️ Konteks sejarah tersedia (Asbabun Nuzul) — Klik untuk melihat telaah sejarah'}
          </div>
        ` : ''}
      </div>
    `;
  }).join('');

  // Scroll to target verse if specified
  if (targetVerse) {
    setTimeout(() => {
      const el = document.getElementById(`verse-${surahId}-${targetVerse}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('highlighted');
      }
    }, 150);
  }
}

function getHistoryId(surahId, verseNum) {
  const map = {
    '2:183': 'puasa',
    '8:1': 'badar',
    '8:9': 'badar',
    '8:17': 'badar',
    '3:121': 'uhud',
    '3:152': 'uhud',
    '9:40': 'hijrah',
    '33:9': 'khandaq',
    '48:1': 'hudaibiyah',
    '48:27': 'hudaibiyah',
    '110:1': 'fathMakkah',
    '110:2': 'fathMakkah',
    '110:3': 'fathMakkah',
    '96:1': 'nuzul',
    '96:2': 'nuzul',
    '96:3': 'nuzul',
    '105:1': 'fil',
    '17:1': 'israMiraj'
  };
  return map[`${surahId}:${verseNum}`] || null;
}

function escapeStr(str) {
  if (!str) return '';
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

// ══════════════════════════════════════════
// AUDIO SYSTEM & CONTROLS
// ══════════════════════════════════════════
function initAudioEvents() {
  audioPlayer.addEventListener('timeupdate', () => {
    if (!audioPlayer.duration) return;
    const pct = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    
    // Update progress bars
    const npFill = document.getElementById('progress-fill');
    const mpFill = document.getElementById('mp-fill');
    if (npFill) npFill.style.width = `${pct}%`;
    if (mpFill) mpFill.style.width = `${pct}%`;

    // Update times
    const timesEl = document.querySelector('.progress-times');
    if (timesEl) {
      timesEl.innerHTML = `<span>${formatTime(audioPlayer.currentTime)}</span><span>${formatTime(audioPlayer.duration)}</span>`;
    }
  });

  audioPlayer.addEventListener('ended', () => {
    if (state.repeat === 'continuous') {
      audioPlayer.currentTime = 0;
      audioPlayer.play();
    } else if (state.autoplay) {
      playNextVerse();
    } else {
      state.isPlaying = false;
      updatePlayButtons();
    }
  });

  // Progress bar seek on click
  const progressBar = document.querySelector('.progress-bar');
  progressBar?.addEventListener('click', (e) => {
    if (!audioPlayer.duration) return;
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = clickX / rect.width;
    audioPlayer.currentTime = pct * audioPlayer.duration;
  });
}

function formatTime(sec) {
  if (isNaN(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function playVerse(surahId, verseNum) {
  state.currentSurah = surahId;
  state.currentVerse = verseNum;
  state.isPlaying = true;

  const surah = ALL_SURAHS.find(s => s.id === surahId);
  const verseData = VERSES[surahId]?.find(v => v.num === verseNum);

  let audioUrl = null;
  const qoriMap = {
    'juhany': '01',
    'al-qasim': '02',
    'sudais': '03',
    'dossari': '04',
    'mishary': '05',
    'al-dosari': '06'
  };
  const qCode = qoriMap[state.currentQori] || '05';

  if (verseData?.audio && verseData.audio[qCode]) {
    audioUrl = verseData.audio[qCode];
  } else {
    const reciterConfig = RECITER_URLS[state.currentQori] || RECITER_URLS.mishary;
    audioUrl = reciterConfig.verse(surahId, verseNum);
  }

  audioPlayer.src = audioUrl;
  audioPlayer.playbackRate = state.speed;
  audioPlayer.play().catch(e => {
    console.warn("Audio play blocked or offline, fallback:", e);
    showToast(`▶ Playing Surah ${surah?.name} : Ayat ${verseNum}`, 'info');
  });

  // Update mini player & now playing info
  updatePlayerUI(surah?.name, `Ayat ${verseNum}`);
  updatePlayButtons();

  // Highlight verse
  document.querySelectorAll('.verse-card').forEach(c => c.classList.remove('highlighted'));
  const card = document.getElementById(`verse-${surahId}-${verseNum}`);
  if (card) {
    card.classList.add('highlighted');
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  showToast(`▶ Playing: ${surah?.name} : ${verseNum}`, 'info');
}

function playSurahAudio(surahId) {
  state.currentSurah = surahId;
  state.isPlaying = true;

  const surah = ALL_SURAHS.find(s => s.id === surahId);

  // Check if user uploaded a custom audio for this surah
  if (customAudios.surahs[surahId]) {
    const custom = customAudios.surahs[surahId];
    audioPlayer.src = custom.url;
    audioPlayer.playbackRate = state.speed;
    audioPlayer.play().catch(e => console.warn("Custom audio stream error:", e));

    const titlePrefix = state.language === 'en' ? '[Custom Audio]' : '[Audio Kustom]';
    updatePlayerUI(surah?.name, `${titlePrefix} ${custom.name}`);
    updatePlayButtons();
    showToast(state.language === 'en' 
      ? `▶ Playing custom audio: ${custom.name}` 
      : `▶ Memutar rekaman audio kustom: ${custom.name}`, 'success');
    return;
  }

  const reciterConfig = RECITER_URLS[state.currentQori] || RECITER_URLS.mishary;
  const audioUrl = reciterConfig.surah(surahId);

  audioPlayer.src = audioUrl;
  audioPlayer.playbackRate = state.speed;
  audioPlayer.play().catch(e => {
    console.warn("Surah audio stream:", e);
  });

  updatePlayerUI(surah?.name, state.language === 'en' ? 'Full Surah Audio' : 'Audio Surah Penuh');
  updatePlayButtons();
  showToast(state.language === 'en' ? `▶ Playing Surah ${surah?.name} recitation` : `▶ Memutar lantunan Surah ${surah?.name}`, 'success');
}

function playNextVerse() {
  const surah = ALL_SURAHS.find(s => s.id === state.currentSurah);
  if (surah && state.currentVerse < surah.ayat) {
    playVerse(state.currentSurah, state.currentVerse + 1);
  } else if (state.currentSurah < 114) {
    loadSurah(state.currentSurah + 1, 1);
    playVerse(state.currentSurah + 1, 1);
  } else {
    state.isPlaying = false;
    updatePlayButtons();
  }
}

function togglePlay() {
  if (audioPlayer.src) {
    if (audioPlayer.paused) {
      audioPlayer.play();
      state.isPlaying = true;
      showToast('▶ Audio playing', 'info');
    } else {
      audioPlayer.pause();
      state.isPlaying = false;
      showToast('⏸ Audio paused', 'info');
    }
  } else {
    // If nothing loaded yet, start current surah
    playSurahAudio(state.currentSurah);
  }
  updatePlayButtons();
}

function updatePlayButtons() {
  const npBtn = document.getElementById('np-play');
  const mpBtn = document.getElementById('mp-play-pause');
  const icon = state.isPlaying ? '⏸' : '▶';

  if (npBtn) npBtn.textContent = icon;
  if (mpBtn) mpBtn.textContent = icon;
}

function updatePlayerUI(title, subtitle) {
  // Mini Player
  const mp = document.getElementById('mini-player');
  const mpSurah = document.getElementById('mp-surah');
  const mpQori = document.getElementById('mp-qori');
  if (mp) mp.style.display = 'block';
  if (mpSurah) mpSurah.textContent = `${title} : ${subtitle}`;
  if (mpQori) mpQori.textContent = getCurrentQoriName();

  // Now Playing Card on Audio Page
  const npTitle = document.getElementById('np-title');
  const npSubtitle = document.getElementById('np-subtitle');
  if (npTitle) npTitle.textContent = `${title} — ${subtitle}`;
  if (npSubtitle) npSubtitle.textContent = `Qori: ${getCurrentQoriName()} · High Quality`;
}

function getCurrentQoriName() {
  const allQoris = [...QORIS.murattal, ...QORIS.mujawwad, ...QORIS.nusantara];
  return allQoris.find(q => q.id === state.currentQori)?.name || 'Mishary Rashid Al-Afasy';
}

function bookmarkVerse(surahId, verseNum) {
  const idx = state.bookmarks.findIndex(b => b.surah === surahId && b.verse === verseNum);
  const surah = ALL_SURAHS.find(s => s.id === surahId);

  if (idx !== -1) {
    state.bookmarks.splice(idx, 1);
    showToast(`Bookmark removed for ${surah?.name} : ${verseNum}`, 'info');
  } else {
    state.bookmarks.push({ surah: surahId, verse: verseNum, time: Date.now() });
    showToast(`⭐ Verse ${surah?.name} : ${verseNum} bookmarked!`, 'success');
  }

  localStorage.setItem('qh_bookmarks', JSON.stringify(state.bookmarks));
  renderVerses(surahId);
}

function copyVerse(btn, arabic, translation) {
  const textToCopy = `${arabic}\n\n"${translation}"\n(Al-Qur'an)`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast('📋 Verse copied to clipboard!', 'success');
    }).catch(() => {
      showToast('📋 Verse copied!', 'info');
    });
  } else {
    showToast('📋 Copied!', 'info');
  }
}

// ══════════════════════════════════════════
// AUDIO PAGE & QORI SELECTION
// ══════════════════════════════════════════
function initAudioPage() {
  renderQoriGrid('murattal');

  // Mode Tabs
  document.querySelectorAll('.mode-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.mode-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.currentMode = tab.dataset.mode;
      renderQoriGrid(tab.dataset.mode);
    });
  });

  // Now Playing Controls
  document.getElementById('np-play')?.addEventListener('click', togglePlay);

  document.getElementById('np-next')?.addEventListener('click', () => {
    if (state.currentSurah < 114) {
      loadSurah(state.currentSurah + 1);
      playSurahAudio(state.currentSurah);
    } else {
      loadSurah(1);
      playSurahAudio(1);
    }
  });

  document.getElementById('np-prev')?.addEventListener('click', () => {
    if (state.currentSurah > 1) {
      loadSurah(state.currentSurah - 1);
      playSurahAudio(state.currentSurah);
    } else {
      loadSurah(114);
      playSurahAudio(114);
    }
  });

  // Populate Custom Audio Surah Selector (1-114)
  const cauSurahSelect = document.getElementById('cau-surah-select');
  if (cauSurahSelect && cauSurahSelect.options.length === 0) {
    cauSurahSelect.innerHTML = ALL_SURAHS.map(s => 
      `<option value="${s.id}">${s.id}. ${s.name} (${s.ar})</option>`
    ).join('');
    cauSurahSelect.value = state.currentSurah;
  }

  // Custom Audio File Upload Elements
  const cauTriggerBtn = document.getElementById('cau-trigger-btn');
  const cauFileInput = document.getElementById('cau-file-input');
  const cauControls = document.getElementById('cau-controls');
  const cauFileName = document.getElementById('cau-file-name');
  const cauFileSize = document.getElementById('cau-file-size');
  const cauPlayNowBtn = document.getElementById('cau-play-now-btn');
  const cauClearBtn = document.getElementById('cau-clear-btn');

  cauTriggerBtn?.addEventListener('click', () => {
    cauFileInput?.click();
  });

  cauFileInput?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileUrl = URL.createObjectURL(file);
    const sizeStr = (file.size / (1024 * 1024)).toFixed(1) + ' MB';
    
    customAudios.current = {
      url: fileUrl,
      name: file.name,
      size: sizeStr
    };

    if (cauControls) cauControls.style.display = 'flex';
    if (cauFileName) cauFileName.textContent = file.name;
    if (cauFileSize) cauFileSize.textContent = sizeStr;

    const targetSurah = parseInt(cauSurahSelect?.value || state.currentSurah);
    customAudios.surahs[targetSurah] = customAudios.current;

    showToast(state.language === 'en' 
      ? `📁 Audio "${file.name}" loaded! Ready to play.` 
      : `📁 Audio "${file.name}" berhasil dimuat! Siap diputar.`, 'success');
  });

  cauSurahSelect?.addEventListener('change', (e) => {
    const sId = parseInt(e.target.value);
    if (customAudios.current) {
      customAudios.surahs[sId] = customAudios.current;
      const s = ALL_SURAHS.find(item => item.id === sId);
      showToast(state.language === 'en' 
        ? `Linked "${customAudios.current.name}" to Surah ${s?.name}` 
        : `File "${customAudios.current.name}" dihubungkan ke Surah ${s?.name}`, 'info');
    }
  });

  cauPlayNowBtn?.addEventListener('click', () => {
    if (customAudios.current) {
      audioPlayer.src = customAudios.current.url;
      audioPlayer.playbackRate = state.speed;
      audioPlayer.play().catch(err => console.warn(err));
      state.isPlaying = true;

      const targetSurah = parseInt(cauSurahSelect?.value || state.currentSurah);
      const surah = ALL_SURAHS.find(s => s.id === targetSurah);
      const titlePrefix = state.language === 'en' ? '[Custom Audio]' : '[Audio Kustom]';
      updatePlayerUI(surah ? surah.name : 'Audio Player', `${titlePrefix} ${customAudios.current.name}`);
      updatePlayButtons();
      showToast(`▶ ${state.language === 'en' ? 'Playing' : 'Memutar'}: ${customAudios.current.name}`, 'success');
    }
  });

  cauClearBtn?.addEventListener('click', () => {
    customAudios.current = null;
    const targetSurah = parseInt(cauSurahSelect?.value || state.currentSurah);
    delete customAudios.surahs[targetSurah];

    if (cauControls) cauControls.style.display = 'none';
    if (cauFileInput) cauFileInput.value = '';
    
    showToast(state.language === 'en' ? 'Custom audio cleared' : 'Audio kustom direset', 'info');
  });
}

function renderQoriGrid(mode) {
  const container = document.getElementById('qori-grid');
  if (!container) return;

  const list = QORIS[mode] || [];
  container.innerHTML = list.map(q => `
    <div class="qori-card ${q.id === state.currentQori ? 'active' : ''}" 
         id="qori-${q.id}"
         onclick="selectQori('${q.id}')">
      <div class="qori-avatar">${q.emoji}</div>
      <div class="qori-info">
        <div class="qori-name">${q.name}</div>
        <div class="qori-origin">${q.origin}</div>
        <span class="qori-style">${q.style}</span>
      </div>
      <div class="qori-play-icon">${q.id === state.currentQori ? '🔊' : '▶'}</div>
    </div>
  `).join('');
}

function selectQori(qoriId) {
  state.currentQori = qoriId;
  const allQoris = [...QORIS.murattal, ...QORIS.mujawwad, ...QORIS.nusantara];
  const qori = allQoris.find(q => q.id === qoriId);
  if (!qori) return;

  document.querySelectorAll('.qori-card').forEach(c => c.classList.remove('active'));
  document.getElementById(`qori-${qoriId}`)?.classList.add('active');

  const avatar = document.getElementById('np-avatar');
  if (avatar) avatar.textContent = qori.emoji;

  playSurahAudio(state.currentSurah);
  showToast(`🎙️ Selected Qori: ${qori.name}`, 'success');
}

// ══════════════════════════════════════════
// SEJARAH ISLAM PAGE
// ══════════════════════════════════════════
function initSejarahPage() {
  renderTimeline('kenabian');

  document.querySelectorAll('.era-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.era-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.currentEra = tab.dataset.era;
      renderTimeline(tab.dataset.era);
    });
  });
}

function renderTimeline(era) {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  const events = HISTORY[era] || [];
  if (events.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding: 40px; color: var(--text-secondary);">${state.language === 'en' ? 'Data for this era is being compiled.' : 'Data era ini sedang dirangkum.'}</div>`;
    return;
  }

  const isEn = state.language === 'en';
  container.innerHTML = events.map(ev => {
    const title = isEn && ev.titleEn ? ev.titleEn : ev.title;
    const desc = isEn && ev.descEn ? ev.descEn : ev.desc;
    const year = isEn && ev.yearEn ? ev.yearEn : ev.year;
    
    return `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card" onclick="openEventModal('${ev.id}', '${era}')">
          <div class="tl-year">📅 ${year}</div>
          <div class="tl-title">${title}</div>
          <div class="tl-desc">${desc}</div>
          <div class="tl-tags">
            ${ev.tags.map(t => `<span class="tl-tag ${t.includes('🔗') ? 'quran-ref' : ''}">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ══════════════════════════════════════════
// JEJAK SEJARAH (ASBABUN NUZUL)
// ══════════════════════════════════════════
function initJejakPage() {
  renderJejakGrid();
}

function renderJejakGrid() {
  const container = document.getElementById('jejak-grid');
  if (!container) return;

  container.innerHTML = JEJAK_DATA.map(j => `
    <div class="jejak-card" onclick="openJejakModal('${j.id}')">
      <div class="jejak-card-header">
        <span class="jejak-surah-badge">${j.surahRef}</span>
        <span class="jejak-event-name">${j.eventName}</span>
      </div>
      <div class="jejak-card-body">
        <div class="jejak-arabic">${j.arabic.substring(0, 80)}${j.arabic.length > 80 ? '...' : ''}</div>
        <div class="jejak-translation">"${j.translation.substring(0, 120)}${j.translation.length > 120 ? '...' : ''}"</div>
        <div class="jejak-event-detail">${j.eventDetail}</div>
      </div>
    </div>
  `).join('');
}

// ══════════════════════════════════════════
// READER SETTINGS PAGE
// ══════════════════════════════════════════
function initSettings() {
  // Rasm / Mushaf Standard Selector
  const rasmSelect = document.getElementById('rasm-select');
  if (rasmSelect) {
    rasmSelect.value = state.rasm;
    rasmSelect.addEventListener('change', (e) => {
      state.rasm = e.target.value;
      localStorage.setItem('qh_rasm', state.rasm);
      renderVerses(state.currentSurah);
      showToast(state.language === 'en' 
        ? `📖 Mushaf Standard: ${e.target.options[e.target.selectedIndex].text}`
        : `📖 Standar Mushaf: ${e.target.options[e.target.selectedIndex].text}`, 'success');
    });
  }

  // Arabic Font Selector
  const fontSelect = document.getElementById('font-select');
  fontSelect?.addEventListener('change', (e) => {
    const val = e.target.value;
    let family = "'Amiri Quran', serif";
    if (val === 'uthmanic') family = "'Amiri', serif";
    if (val === 'lpmq') family = "'Traditional Arabic', 'Amiri', serif";

    document.documentElement.style.setProperty('--font-arabic', family);
    document.querySelectorAll('.verse-arabic').forEach(el => el.style.fontFamily = family);
    showToast(`🔤 Font Arabic: ${e.target.options[e.target.selectedIndex].text}`, 'success');
  });

  // Application Language Selector
  const appLangSelect = document.getElementById('app-lang-select');
  if (appLangSelect) {
    appLangSelect.value = state.language;
    appLangSelect.addEventListener('change', (e) => {
      applyLanguage(e.target.value, true);
    });
  }

  // Translation Selector
  const transSelect = document.getElementById('trans-select');
  if (transSelect) {
    transSelect.value = (state.language === 'en' ? 'sahih' : 'kemenag');
    transSelect.addEventListener('change', (e) => {
      const val = e.target.value;
      if (val === 'sahih') {
        state.translation = 'sahih';
        if (state.language !== 'en') {
          applyLanguage('en', true);
        } else {
          renderVerses(state.currentSurah);
        }
      } else if (val === 'kemenag') {
        state.translation = 'kemenag';
        if (state.language !== 'id') {
          applyLanguage('id', true);
        } else {
          renderVerses(state.currentSurah);
        }
      } else {
        state.translation = val;
        renderVerses(state.currentSurah);
      }
      showToast(`📖 ${state.language === 'en' ? 'Active Translation:' : 'Terjemahan aktif:'} ${e.target.options[e.target.selectedIndex].text}`, 'success');
    });
  }

  // Transliteration Toggle
  const transToggle = document.getElementById('toggle-transliterasi');
  transToggle?.addEventListener('change', (e) => {
    state.transliterasi = e.target.checked;
    document.querySelectorAll('.verse-latin').forEach(el => {
      el.style.display = state.transliterasi ? 'block' : 'none';
    });
    showToast(state.transliterasi ? '✅ Transliteration enabled' : 'Transliteration disabled', 'info');
  });

  // Autoplay Toggle
  const autoToggle = document.getElementById('toggle-autoplay');
  autoToggle?.addEventListener('change', (e) => {
    state.autoplay = e.target.checked;
    showToast(state.autoplay ? '🔄 Auto-play next verse: ON' : 'Auto-play: OFF', 'info');
  });

  // Repeat Selector
  const repeatSelect = document.getElementById('repeat-select');
  repeatSelect?.addEventListener('change', (e) => {
    state.repeat = e.target.value;
    showToast(`🔁 Repeat Mode: ${e.target.options[e.target.selectedIndex].text}`, 'info');
  });

  // Playback Speed Selector
  const speedSelect = document.getElementById('speed-select');
  speedSelect?.addEventListener('change', (e) => {
    state.speed = parseFloat(e.target.value);
    audioPlayer.playbackRate = state.speed;
    showToast(`⚡ Playback Speed: ${e.target.value}x`, 'info');
  });

  // Theme Selector Options
  document.querySelectorAll('.theme-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.theme-opt').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      applyTheme(opt.dataset.theme);
    });
  });
}

function applyTheme(theme, notify = true) {
  document.body.classList.remove('theme-dark', 'theme-sepia');
  
  if (theme === 'dark') {
    document.body.classList.add('theme-dark');
    if (notify) showToast('🌙 Dark theme applied', 'success');
  } else if (theme === 'sepia') {
    document.body.classList.add('theme-sepia');
    if (notify) showToast('📜 Sepia theme applied', 'success');
  } else {
    if (notify) showToast('☀️ Light theme applied', 'success');
  }

  // Update settings theme buttons active state
  document.querySelectorAll('.theme-opt').forEach(o => {
    o.classList.toggle('active', o.dataset.theme === theme);
  });

  localStorage.setItem('qh_theme', theme);
}

// ══════════════════════════════════════════
// MODAL SYSTEM
// ══════════════════════════════════════════
function initModal() {
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');

  closeBtn?.addEventListener('click', closeModal);
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(html) {
  const content = document.getElementById('modal-content');
  if (content) content.innerHTML = html;
  document.getElementById('modal-overlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

function openEventModal(eventId, era) {
  const events = HISTORY[era] || [];
  const ev = events.find(e => e.id === eventId);
  if (!ev) return;

  const isEn = state.language === 'en';
  const title = isEn && ev.titleEn ? ev.titleEn : ev.title;
  const year = isEn && ev.yearEn ? ev.yearEn : ev.year;
  const detail = isEn && ev.detailEn ? ev.detailEn : (ev.detail || ev.desc);
  const relatedVerses = isEn ? 'Related Verses:' : 'Ayat Terkait:';
  const keyFigures = isEn ? '👥 Key Figures' : '👥 Tokoh Terlibat';

  const html = `
    <div class="mh-header">
      <div class="mh-event-badge">${ev.tags[0] || (isEn ? '📅 History' : '📅 Sejarah')}</div>
      <div class="mh-title">${title}</div>
      <div class="mh-year">📅 ${year}</div>
    </div>
    <p class="mh-story">${detail}</p>
    ${ev.quranRef ? `
    <div class="mh-verse-ref">
      <div style="font-size:0.75rem; color: var(--text-muted); margin-bottom: 8px;">${relatedVerses}</div>
      <div class="mh-arabic">${ev.tags.find(t => t.includes('🔗'))?.replace('🔗 ', '') || ''}</div>
    </div>
    ` : ''}
    <div class="mh-figures">
      <div class="mh-figures-title">${keyFigures}</div>
      <div class="mh-figure-list">
        ${(ev.figures || (isEn ? ['Prophet Muhammad ﷺ', 'Companions RA'] : ['Nabi Muhammad ﷺ', 'Sahabat RA'])).map(f => `<span class="mh-figure">${f}</span>`).join('')}
      </div>
    </div>
  `;
  openModal(html);
}

function openHistoryModal(historyId) {
  let ev = null;
  let eraName = '';
  for (const [era, events] of Object.entries(HISTORY)) {
    const found = events.find(e => e.id === historyId);
    if (found) { ev = found; eraName = era; break; }
  }

  if (!ev) {
    const jejak = JEJAK_DATA.find(j => j.id === historyId);
    if (jejak) {
      openJejakModal(historyId);
      return;
    }
  }

  if (ev) openEventModal(ev.id, eraName);
}

function openJejakModal(jejakId) {
  const j = JEJAK_DATA.find(item => item.id === jejakId);
  if (!j) return;

  const html = `
    <div class="mh-header">
      <div class="mh-event-badge">${j.eventName}</div>
      <div class="mh-title">Asbabun Nuzul: ${j.surahRef}</div>
    </div>
    <div class="mh-verse-ref">
      <div class="mh-arabic">${j.arabic}</div>
      <div class="mh-translate-label" style="font-size:0.75rem; color:var(--text-muted); margin: 6px 0 2px;">${state.language === 'en' ? 'Translation:' : 'Terjemahan:'}</div>
      <div class="mh-translation">"${j.translation}"</div>
    </div>
    <div class="mh-story">${j.eventDetail}</div>
    <div style="margin-top:20px; display:flex; gap:10px;">
      <button class="btn-primary" onclick="loadSurah(${j.surahId || 2}); navigateTo('quran'); closeModal();" style="font-size: 0.82rem; padding: 10px 20px;">
        ${state.language === 'en' ? '📖 Open Surah' : '📖 Buka Surah'}
      </button>
      <button class="btn-secondary" onclick="navigateTo('sejarah'); closeModal();" style="font-size: 0.82rem; padding: 10px 20px; background:var(--sage-50); color:var(--sage-700); border-color:var(--sage-200);">
        ${state.language === 'en' ? '🏛️ History Timeline' : '🏛️ Lini Masa Sejarah'}
      </button>
    </div>
  `;
  openModal(html);
}

// ══════════════════════════════════════════
// MINI PLAYER
// ══════════════════════════════════════════
function initMiniPlayer() {
  document.getElementById('mp-play-pause')?.addEventListener('click', togglePlay);
  document.getElementById('mp-close-player')?.addEventListener('click', () => {
    document.getElementById('mini-player').style.display = 'none';
    audioPlayer.pause();
    state.isPlaying = false;
    updatePlayButtons();
  });
}

// ══════════════════════════════════════════
// TOAST NOTIFICATIONS
// ══════════════════════════════════════════
function showToast(message, type = 'info') {
  const existing = document.getElementById('app-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'app-toast';
  toast.style.cssText = `
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    background: ${type === 'success' ? '#1b4332' : '#2d3748'};
    border: 1px solid rgba(255,255,255,0.15);
    color: #ffffff;
    padding: 11px 24px;
    border-radius: 50px;
    font-size: 0.84rem;
    font-family: var(--font-body);
    font-weight: 600;
    z-index: 99999;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    white-space: nowrap;
    pointer-events: none;
    box-shadow: 0 8px 24px rgba(0,0,0,0.18);
    opacity: 0;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.transform = 'translateX(-50%) translateY(0)';
    toast.style.opacity = '1';
  });

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}
