// ══════════════════════════════════════════════════════════════
// FEATURES-MULTILANG.JS — Quran Harmony Multi-Language Extension
// Adds 5 extra UI languages + upgraded language selector +
// enhanced transliteration toggle + verse translation helpers
// ══════════════════════════════════════════════════════════════

// ─── TASK 1: Extra Language Translations ───────────────────────
const EXTRA_LANGUAGES = {

  // ── Urdu (Pakistan / India) ────────────────────────────────
  ur: {
    navBeranda: 'ہوم',
    navQuran: 'قرآن',
    navAudio: 'آڈیو',
    navSejarah: 'تاریخ',
    navJejak: 'اسباب النزول',
    langIndicator: 'اردو',
    readerSettingsLabel: 'ریڈر کی ترتیبات',
    mainSearchPlaceholder: 'سورہ، آیت (مثلاً 2:255) یا صفحہ تلاش کریں...',
    sidebarSearchPlaceholder: 'سورہ تلاش کریں...',
    heroQuote: '<em>«یاد رہے، اللہ کی یاد سے ہی دلوں کو سکون ملتا ہے۔»</em>',
    heroBtnRead: 'پڑھنا شروع کریں',
    heroBtnAudio: 'آڈیو سنیں',
    featQuranTitle: 'مکمل قرآنی متن',
    featQuranDesc: 'تمام 114 سورتیں عربی متن اور ترجمے کے ساتھ پڑھیں۔',
    featAudioTitle: 'قرآنی تلاوت',
    featAudioDesc: 'مشہور قاریوں کی خوبصورت تلاوتیں آیت بہ آیت سنیں۔',
    featSpiritualTitle: 'روحانی ترقی',
    featSpiritualDesc: 'بک مارک محفوظ کریں، پڑھنے کی تاریخ رکھیں اور روزانہ کی عادت بنائیں۔',
    dailyTitle: 'آج کی آیت',
    dailyVerseTrans: 'بے شک ہر مشکل کے ساتھ آسانی ہے۔',
    dailyBtnPlay: 'سنیں',
    dailyBtnRead: 'محفوظ کریں',
    dailyBtnCopy: 'شیئر کریں',
    popularTitle: 'مشہور سورتیں',
    labelViewReader: 'سورہ پڑھیں (آیات)',
    labelViewCatalog: '114 سورتوں کی فہرست (کیٹلاگ)',
    eduBannerTitle: 'سورتوں کی درجہ بندی: مکی اور مدنی',
    catTabAll: '🌟 تمام سورتیں',
    catTabMakk: '🕋 مکی',
    catTabMadan: '🕌 مدنی',
    catSearchPlaceholder: 'سورہ نمبر، نام یا مفہوم سے تلاش کریں...',
    catBtnRead: '📖 پڑھیں',
    catBtnAudio: '▶ آڈیو',
    catNoResult: 'کوئی سورہ نہیں ملی',
    meaningPrefix: 'معنی',
    revTagMakk: '🕋 مکی',
    revTagMadan: '🕌 مدنی',
    prevSurahLabel: 'پچھلی',
    nextSurahLabel: 'اگلی',
    homeSurahLabel: 'ہوم',
    audioTitle: 'قرآنی تلاوتیں',
    audioDesc: 'عالمی شہرت یافتہ قاریوں کی خوبصورت تلاوتیں سنیں۔',
    sejarahTitle: 'اسلامی تاریخ',
    jejakTitle: 'آیت کی تاریخ',
    settingsTitle: 'ریڈر کی ترتیبات',
    settingNameTrans: 'ترجمہ',
    settingNameLatin: 'تلفظ',
    lastReadBadge: 'پڑھنا جاری رکھیں',
    lastReadBtnText: 'دوبارہ شروع کریں',
    searchNoResult: 'کوئی سورہ یا آیت نہیں ملی',
    searchJump: 'جائیں ←',
    sidebarNoResult: 'فلٹر سے کوئی سورہ نہیں ملی۔',
    langChangedToast: '🌐 زبان اردو میں تبدیل ہو گئی',
    mobLabelBeranda: 'ہوم',
    mobLabelQuran: 'قرآن',
    mobLabelAudio: 'آڈیو',
    mobLabelSejarah: 'تاریخ',
    mobLabelPengaturan: 'ترتیبات',
  },

  // ── Turkish (Turkey) ─────────────────────────────────────────
  tr: {
    navBeranda: 'Ana Sayfa',
    navQuran: 'Kuran',
    navAudio: 'Ses',
    navSejarah: 'Tarih',
    navJejak: 'Nüzul Sebepleri',
    langIndicator: 'TR',
    readerSettingsLabel: 'Okuyucu Ayarları',
    mainSearchPlaceholder: 'Sure, ayet (örn. 2:255) veya sayfa ara...',
    sidebarSearchPlaceholder: 'Sure ara...',
    heroQuote: '<em>«Biliniz ki, kalpler ancak Allah\'ı zikretmekle huzur bulur.»</em>',
    heroBtnRead: 'Okumaya Başla',
    heroBtnAudio: 'Sesi Keşfet',
    featQuranTitle: 'Tam Kuran Metni',
    featQuranDesc: 'Tüm 114 sureyi Arapça olarak her ayetin yanında çeviriyle okuyun.',
    featAudioTitle: 'Ses Tilavetleri',
    featAudioDesc: 'Dünyaca ünlü hafızların tilavetlerini ayet ayet dinleyin.',
    featSpiritualTitle: 'Manevi Gelişim',
    featSpiritualDesc: 'Yer imleri kaydedin, okuma geçmişi tutun ve düzenli günlük alışkanlık edinin.',
    dailyTitle: 'Günün Ayeti',
    dailyVerseTrans: 'Gerçekten, güçlükle birlikte kolaylık vardır.',
    dailyBtnPlay: 'Dinle',
    dailyBtnRead: 'Kaydet',
    dailyBtnCopy: 'Paylaş',
    popularTitle: 'Popüler Sureler',
    labelViewReader: 'Sureyi Oku (Ayetler)',
    labelViewCatalog: '114 Surenin Listesi (Katalog)',
    eduBannerTitle: 'Sure Sınıflandırmasını Anlamak: Mekki & Medeni',
    catTabAll: '🌟 Tüm Sureler',
    catTabMakk: '🕋 Mekki',
    catTabMadan: '🕌 Medeni',
    catSearchPlaceholder: 'Sure numarası, adı veya anlamıyla ara...',
    catBtnRead: '📖 Oku',
    catBtnAudio: '▶ Ses',
    catNoResult: 'Eşleşen sure bulunamadı',
    meaningPrefix: 'Anlam',
    revTagMakk: '🕋 Mekki',
    revTagMadan: '🕌 Medeni',
    prevSurahLabel: 'Önceki',
    nextSurahLabel: 'Sonraki',
    homeSurahLabel: 'Ana Sayfa',
    audioTitle: 'Ses Tilavetleri',
    audioDesc: 'Dünyaca ünlü hafızlardan kristal netliğinde tilavetler dinleyin.',
    sejarahTitle: 'İslam Tarihi',
    jejakTitle: 'Ayet Tarihi',
    settingsTitle: 'Okuyucu Ayarları',
    settingNameTrans: 'Çeviri',
    settingNameLatin: 'Transliterasyon',
    lastReadBadge: 'OKUMAYA DEVAM ET',
    lastReadBtnText: 'Devam Et',
    searchNoResult: 'Sure veya ayet bulunamadı',
    searchJump: 'Git →',
    sidebarNoResult: 'Filtreyle eşleşen sure yok.',
    langChangedToast: '🌐 Dil Türkçe\'ye değiştirildi',
    mobLabelBeranda: 'Ana Sayfa',
    mobLabelQuran: 'Kuran',
    mobLabelAudio: 'Ses',
    mobLabelSejarah: 'Tarih',
    mobLabelPengaturan: 'Ayarlar',
  },

  // ── French (France) ──────────────────────────────────────────
  fr: {
    navBeranda: 'Accueil',
    navQuran: 'Coran',
    navAudio: 'Audio',
    navSejarah: 'Histoire',
    navJejak: 'Révélations',
    langIndicator: 'FR',
    readerSettingsLabel: 'Paramètres du lecteur',
    mainSearchPlaceholder: 'Chercher une sourate, un verset (ex. 2:255) ou une page...',
    sidebarSearchPlaceholder: 'Chercher une sourate...',
    heroQuote: '<em>«Sachez que c\'est par l\'évocation d\'Allah que les cœurs trouvent la paix.»</em>',
    heroBtnRead: 'Commencer la lecture',
    heroBtnAudio: 'Écouter l\'audio',
    featQuranTitle: 'Texte intégral du Coran',
    featQuranDesc: 'Lisez les 114 sourates en arabe avec une traduction à côté de chaque verset.',
    featAudioTitle: 'Récitations audio',
    featAudioDesc: 'Écoutez des récitations verset par verset et suivez pendant que vous lisez.',
    featSpiritualTitle: 'Croissance spirituelle',
    featSpiritualDesc: 'Sauvegardez des favoris, gardez un historique de lecture et créez une habitude quotidienne.',
    dailyTitle: 'Verset du jour',
    dailyVerseTrans: 'En vérité, avec chaque difficulté vient un soulagement.',
    dailyBtnPlay: 'Écouter',
    dailyBtnRead: 'Sauvegarder',
    dailyBtnCopy: 'Partager',
    popularTitle: 'Sourates populaires',
    labelViewReader: 'Lire la sourate (versets)',
    labelViewCatalog: 'Liste des 114 sourates (catalogue)',
    eduBannerTitle: 'Comprendre la classification des sourates : Mecquoises & Médinoises',
    catTabAll: '🌟 Toutes les sourates',
    catTabMakk: '🕋 Mecquoises',
    catTabMadan: '🕌 Médinoises',
    catSearchPlaceholder: 'Chercher par numéro, nom ou signification...',
    catBtnRead: '📖 Lire',
    catBtnAudio: '▶ Audio',
    catNoResult: 'Aucune sourate correspondante',
    meaningPrefix: 'Signification',
    revTagMakk: '🕋 Mecquoise',
    revTagMadan: '🕌 Médinoise',
    prevSurahLabel: 'Précédent',
    nextSurahLabel: 'Suivant',
    homeSurahLabel: 'Accueil',
    audioTitle: 'Récitations audio',
    audioDesc: 'Écoutez de belles récitations du Coran par des récitateurs de renommée mondiale.',
    sejarahTitle: 'Histoire islamique',
    jejakTitle: 'Historique des versets',
    settingsTitle: 'Paramètres du lecteur',
    settingNameTrans: 'Traduction',
    settingNameLatin: 'Translittération',
    lastReadBadge: 'CONTINUER LA LECTURE',
    lastReadBtnText: 'Reprendre',
    searchNoResult: 'Aucune sourate ou verset trouvé pour',
    searchJump: 'Aller →',
    sidebarNoResult: 'Aucune sourate ne correspond au filtre.',
    langChangedToast: '🌐 Langue changée en Français',
    mobLabelBeranda: 'Accueil',
    mobLabelQuran: 'Coran',
    mobLabelAudio: 'Audio',
    mobLabelSejarah: 'Histoire',
    mobLabelPengaturan: 'Paramètres',
  },

  // ── Bengali (Bangladesh) ─────────────────────────────────────
  bn: {
    navBeranda: 'হোম',
    navQuran: 'কুরআন',
    navAudio: 'অডিও',
    navSejarah: 'ইতিহাস',
    navJejak: 'নাযিলের কারণ',
    langIndicator: 'বাং',
    readerSettingsLabel: 'পাঠক সেটিংস',
    mainSearchPlaceholder: 'সূরা, আয়াত (যেমন 2:255) বা পৃষ্ঠা খুঁজুন...',
    sidebarSearchPlaceholder: 'সূরা খুঁজুন...',
    heroQuote: '<em>«জেনে রাখো, আল্লাহর স্মরণেই অন্তর প্রশান্ত হয়।»</em>',
    heroBtnRead: 'পড়া শুরু করুন',
    heroBtnAudio: 'অডিও শুনুন',
    featQuranTitle: 'সম্পূর্ণ কুরআন পাঠ',
    featQuranDesc: 'সমস্ত ১১৪টি সূরা আরবিতে প্রতিটি আয়াতের পাশে অনুবাদসহ পড়ুন।',
    featAudioTitle: 'অডিও তিলাওয়াত',
    featAudioDesc: 'বিশ্বখ্যাত ক্বারিদের তিলাওয়াত আয়াত ধরে ধরে শুনুন।',
    featSpiritualTitle: 'আধ্যাত্মিক উন্নতি',
    featSpiritualDesc: 'বুকমার্ক সংরক্ষণ করুন, পাঠের ইতিহাস রাখুন এবং দৈনিক অভ্যাস গড়ে তুলুন।',
    dailyTitle: 'আজকের আয়াত',
    dailyVerseTrans: 'নিশ্চয়ই প্রতিটি কষ্টের সাথে সহজ রয়েছে।',
    dailyBtnPlay: 'শুনুন',
    dailyBtnRead: 'সংরক্ষণ',
    dailyBtnCopy: 'শেয়ার',
    popularTitle: 'জনপ্রিয় সূরাসমূহ',
    labelViewReader: 'সূরা পড়ুন (আয়াত)',
    labelViewCatalog: '১১৪ সূরার তালিকা (ক্যাটালগ)',
    eduBannerTitle: 'সূরার শ্রেণীবিভাগ বোঝা: মক্কী ও মাদানী',
    catTabAll: '🌟 সকল সূরা',
    catTabMakk: '🕋 মক্কী',
    catTabMadan: '🕌 মাদানী',
    catSearchPlaceholder: 'সূরা নম্বর, নাম বা অর্থ দিয়ে খুঁজুন...',
    catBtnRead: '📖 পড়ুন',
    catBtnAudio: '▶ অডিও',
    catNoResult: 'কোনো সূরা পাওয়া যায়নি',
    meaningPrefix: 'অর্থ',
    revTagMakk: '🕋 মক্কী',
    revTagMadan: '🕌 মাদানী',
    prevSurahLabel: 'পূর্ববর্তী',
    nextSurahLabel: 'পরবর্তী',
    homeSurahLabel: 'হোম',
    audioTitle: 'অডিও তিলাওয়াত',
    audioDesc: 'বিশ্বখ্যাত ক্বারিদের স্ফটিক স্বচ্ছ কণ্ঠে কুরআন তিলাওয়াত শুনুন।',
    sejarahTitle: 'ইসলামের ইতিহাস',
    jejakTitle: 'আয়াতের ইতিহাস',
    settingsTitle: 'পাঠক সেটিংস',
    settingNameTrans: 'অনুবাদ',
    settingNameLatin: 'প্রতিলিপি',
    lastReadBadge: 'পড়া চালিয়ে যান',
    lastReadBtnText: 'পুনরায় শুরু',
    searchNoResult: 'কোনো সূরা বা আয়াত পাওয়া যায়নি',
    searchJump: 'যান →',
    sidebarNoResult: 'ফিল্টারে কোনো সূরা মেলেনি।',
    langChangedToast: '🌐 ভাষা বাংলায় পরিবর্তিত হয়েছে',
    mobLabelBeranda: 'হোম',
    mobLabelQuran: 'কুরআন',
    mobLabelAudio: 'অডিও',
    mobLabelSejarah: 'ইতিহাস',
    mobLabelPengaturan: 'সেটিংস',
  },

  // ── Malay (Malaysia) ─────────────────────────────────────────
  ms: {
    navBeranda: 'Laman Utama',
    navQuran: 'Al-Quran',
    navAudio: 'Audio',
    navSejarah: 'Sejarah',
    navJejak: 'Asbabun Nuzul',
    langIndicator: 'MS',
    readerSettingsLabel: 'Tetapan Pembaca',
    mainSearchPlaceholder: 'Cari surah, ayat (cth. 2:255) atau halaman...',
    sidebarSearchPlaceholder: 'Cari surah...',
    heroQuote: '<em>«Ketahuilah, hanya dengan mengingati Allah hati akan menjadi tenang.»</em>',
    heroBtnRead: 'Mula Membaca',
    heroBtnAudio: 'Terokai Audio',
    featQuranTitle: 'Teks Al-Quran Penuh',
    featQuranDesc: 'Baca kesemua 114 surah dalam bahasa Arab berserta terjemahan di setiap ayat.',
    featAudioTitle: 'Bacaan Audio',
    featAudioDesc: 'Dengar bacaan ayat demi ayat dan ikuti semasa anda membaca.',
    featSpiritualTitle: 'Pertumbuhan Rohani',
    featSpiritualDesc: 'Simpan penanda buku, jejak sejarah bacaan dan bina tabiat harian yang tetap.',
    dailyTitle: 'Ayat Hari Ini',
    dailyVerseTrans: 'Sesungguhnya bersama kesukaran ada kemudahan.',
    dailyBtnPlay: 'Dengar',
    dailyBtnRead: 'Simpan',
    dailyBtnCopy: 'Kongsi',
    popularTitle: 'Surah Popular',
    labelViewReader: 'Baca Surah (Ayat)',
    labelViewCatalog: 'Senarai 114 Surah (Katalog)',
    eduBannerTitle: 'Memahami Pengelasan Surah: Makkiyyah & Madaniyyah',
    catTabAll: '🌟 Semua Surah',
    catTabMakk: '🕋 Makkiyyah',
    catTabMadan: '🕌 Madaniyyah',
    catSearchPlaceholder: 'Cari mengikut nombor, nama atau makna surah...',
    catBtnRead: '📖 Baca',
    catBtnAudio: '▶ Audio',
    catNoResult: 'Tiada surah yang sepadan dijumpai',
    meaningPrefix: 'Makna',
    revTagMakk: '🕋 Makkiyyah',
    revTagMadan: '🕌 Madaniyyah',
    prevSurahLabel: 'Sebelum',
    nextSurahLabel: 'Seterusnya',
    homeSurahLabel: 'Utama',
    audioTitle: 'Bacaan Audio',
    audioDesc: 'Dengar bacaan Al-Quran yang indah daripada qari bertaraf antarabangsa.',
    sejarahTitle: 'Sejarah Islam',
    jejakTitle: 'Sejarah Ayat',
    settingsTitle: 'Tetapan Pembaca',
    settingNameTrans: 'Terjemahan',
    settingNameLatin: 'Transliterasi',
    lastReadBadge: 'TERUSKAN MEMBACA',
    lastReadBtnText: 'Sambung',
    searchNoResult: 'Tiada surah atau ayat ditemui untuk',
    searchJump: 'Pergi →',
    sidebarNoResult: 'Tiada surah yang sepadan dengan penapis.',
    langChangedToast: '🌐 Bahasa ditukar kepada Bahasa Melayu',
    mobLabelBeranda: 'Utama',
    mobLabelQuran: 'Al-Quran',
    mobLabelAudio: 'Audio',
    mobLabelSejarah: 'Sejarah',
    mobLabelPengaturan: 'Tetapan',
  },
};

// ─── Language metadata (flag, display label, native name) ────────
const LANG_META = {
  en: { flag: '🇺🇸', code: 'EN',   label: 'English' },
  id: { flag: '🇮🇩', code: 'ID',   label: 'Indonesia' },
  ur: { flag: '🇵🇰', code: 'اردو', label: 'اردو' },
  tr: { flag: '🇹🇷', code: 'TR',   label: 'Türkçe' },
  fr: { flag: '🇫🇷', code: 'FR',   label: 'Français' },
  bn: { flag: '🇧🇩', code: 'বাং',  label: 'বাংলা' },
  ms: { flag: '🇲🇾', code: 'MS',   label: 'Melayu' },
};

// Languages that do NOT yet have verse-level translations
const LANGS_WITHOUT_VERSE_TRANS = ['ur', 'tr', 'fr', 'bn', 'ms'];

// ─── TASK 2: Upgrade Language Selector ──────────────────────────
function upgradeLanguageSelector() {
  // Inject CSS first
  injectLangDropdownCSS();

  // Build the dropdown HTML
  const currentLang = (window.state && window.state.language) || localStorage.getItem('qh_lang') || 'en';
  const meta = LANG_META[currentLang] || LANG_META['en'];

  const optionsHTML = Object.entries(LANG_META).map(([code, info]) => {
    const isActive = code === currentLang ? ' lang-option--active' : '';
    return `<button class="lang-option${isActive}" data-lang="${code}" type="button">
      <span class="lang-option-flag">${info.flag}</span>
      <span class="lang-option-code">${info.code}</span>
      <span class="lang-option-label">${info.label}</span>
    </button>`;
  }).join('');

  const wrapperHTML = `
<div class="lang-dropdown-wrapper" id="lang-dropdown-wrapper">
  <button class="lang-dropdown-btn" id="lang-dropdown-btn" type="button" aria-haspopup="listbox" aria-expanded="false">
    <span id="lang-flag-indicator">${meta.flag}</span>
    <span id="lang-code-indicator">${meta.code}</span>
    <svg class="lang-chevron" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
  </button>
  <div class="lang-dropdown-menu" id="lang-dropdown-menu" role="listbox" style="display:none">
    ${optionsHTML}
  </div>
</div>`;

  // Try to replace an existing lang-toggle button in the nav
  const existingToggle =
    document.getElementById('lang-toggle') ||
    document.querySelector('.lang-toggle') ||
    document.querySelector('[data-lang-toggle]') ||
    document.querySelector('button.lang-btn');

  if (existingToggle) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = wrapperHTML.trim();
    const wrapper = tempDiv.firstElementChild;
    existingToggle.parentNode.replaceChild(wrapper, existingToggle);
  } else {
    // Fallback: append to nav or header
    const nav = document.querySelector('nav') || document.querySelector('header') || document.body;
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = wrapperHTML.trim();
    nav.appendChild(tempDiv.firstElementChild);
  }

  // Wire up toggle open/close
  const btn  = document.getElementById('lang-dropdown-btn');
  const menu = document.getElementById('lang-dropdown-menu');

  if (btn && menu) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = menu.style.display !== 'none';
      menu.style.display = isOpen ? 'none' : 'block';
      btn.setAttribute('aria-expanded', String(!isOpen));
      btn.classList.toggle('lang-dropdown-btn--open', !isOpen);
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!document.getElementById('lang-dropdown-wrapper').contains(e.target)) {
        menu.style.display = 'none';
        btn.setAttribute('aria-expanded', 'false');
        btn.classList.remove('lang-dropdown-btn--open');
      }
    });

    // Wire each option
    menu.querySelectorAll('.lang-option').forEach((optBtn) => {
      optBtn.addEventListener('click', () => {
        const lang = optBtn.getAttribute('data-lang');
        selectLanguage(lang);
        menu.style.display = 'none';
        btn.setAttribute('aria-expanded', 'false');
        btn.classList.remove('lang-dropdown-btn--open');
      });
    });
  }
}

/**
 * Select a language, update UI indicators, persist, and call applyLanguage.
 * @param {string} lang - language code
 */
function selectLanguage(lang) {
  if (!LANG_META[lang]) return;
  const meta = LANG_META[lang];

  // Update indicator spans inside the toggle button
  const flagEl = document.getElementById('lang-flag-indicator');
  const codeEl = document.getElementById('lang-code-indicator');
  if (flagEl) flagEl.textContent = meta.flag;
  if (codeEl) codeEl.textContent = meta.code;

  // Mark active option
  document.querySelectorAll('.lang-option').forEach((el) => {
    el.classList.toggle('lang-option--active', el.getAttribute('data-lang') === lang);
  });

  // Persist
  localStorage.setItem('qh_lang', lang);
  if (window.state) window.state.language = lang;

  // Apply via the app's own mechanism
  if (typeof window.applyLanguage === 'function') {
    window.applyLanguage(lang, true);
  }

  // Notify user if the verse translation is a fallback
  if (LANGS_WITHOUT_VERSE_TRANS.includes(lang)) {
    showTranslationNote(lang);
  }
}

// ─── TASK 3: Enhanced Transliteration Toggle ─────────────────────
function enhanceTransliterationToggle() {
  injectTransliterationCSS();

  // 1. Make existing settings toggle more visible
  const existingToggle =
    document.getElementById('toggle-latin') ||
    document.getElementById('latin-toggle') ||
    document.querySelector('[data-setting="transliterasi"]') ||
    document.querySelector('.setting-toggle[data-key="transliterasi"]');

  if (existingToggle) {
    existingToggle.classList.add('translit-enhanced-toggle');
    // Ensure label is clear
    const nearbyLabel = existingToggle.closest('label') || existingToggle.previousElementSibling;
    if (nearbyLabel && !nearbyLabel.querySelector('.translit-badge')) {
      const badge = document.createElement('span');
      badge.className = 'translit-badge';
      badge.textContent = 'Aa';
      nearbyLabel.appendChild(badge);
    }
  }

  // 2. Inject quick "Aa" button into the reader header area
  const readerHeader =
    document.querySelector('.reader-header') ||
    document.querySelector('.surah-header') ||
    document.querySelector('#reader-controls') ||
    document.querySelector('.reader-controls');

  if (readerHeader && !document.getElementById('quick-translit-btn')) {
    const quickBtn = document.createElement('button');
    quickBtn.id = 'quick-translit-btn';
    quickBtn.className = 'quick-translit-btn';
    quickBtn.setAttribute('type', 'button');
    quickBtn.setAttribute('title', 'Toggle Transliteration');
    quickBtn.setAttribute('aria-pressed', String(!!(window.state && window.state.transliterasi)));
    quickBtn.innerHTML = '<span class="quick-translit-icon">Aa</span>';

    // Reflect current state
    if (window.state && window.state.transliterasi) {
      quickBtn.classList.add('quick-translit-btn--active');
    }

    quickBtn.addEventListener('click', () => {
      const isNowActive = toggleTransliterasiState();
      quickBtn.classList.toggle('quick-translit-btn--active', isNowActive);
      quickBtn.setAttribute('aria-pressed', String(isNowActive));
      refreshArabicDisplay(isNowActive);
    });

    readerHeader.appendChild(quickBtn);
  }
}

/**
 * Toggle the transliterasi state in window.state and
 * the corresponding checkbox/toggle in settings, then return new value.
 */
function toggleTransliterasiState() {
  if (!window.state) return false;
  window.state.transliterasi = !window.state.transliterasi;

  // Sync any existing toggle input
  const toggleEl =
    document.getElementById('toggle-latin') ||
    document.getElementById('latin-toggle') ||
    document.querySelector('[data-setting="transliterasi"]');
  if (toggleEl) {
    if (toggleEl.type === 'checkbox') {
      toggleEl.checked = window.state.transliterasi;
      toggleEl.dispatchEvent(new Event('change', { bubbles: true }));
    } else {
      toggleEl.setAttribute('data-active', String(window.state.transliterasi));
      toggleEl.dispatchEvent(new Event('click', { bubbles: true }));
    }
  }

  return window.state.transliterasi;
}

/**
 * When transliteration is activated, increase the Arabic font size
 * and ensure diacritics (tashkeel) are visible.
 * @param {boolean} active
 */
function refreshArabicDisplay(active) {
  const arabicEls = document.querySelectorAll('.arabic-text, .verse-arabic, [class*="arabic"]');
  arabicEls.forEach((el) => {
    if (active) {
      el.classList.add('translit-mode-arabic');
    } else {
      el.classList.remove('translit-mode-arabic');
    }
  });
}

// ─── TASK 4: Per-language Verse Translation ──────────────────────

/**
 * Return the best available translation for a verse object.
 * @param {Object} verse  - verse object with at least .en and optionally .id
 * @param {string} lang   - language code
 * @returns {string}      - HTML string with translation text
 */
function getVerseTranslation(verse, lang) {
  if (!verse) return '';

  switch (lang) {
    case 'id':
      return verse.id || verse.en || '';
    case 'en':
      return verse.en || '';
    case 'ur':
    case 'tr':
    case 'fr':
    case 'bn':
    case 'ms': {
      const langLabels = {
        ur: 'Urdu',
        tr: 'Türkçe',
        fr: 'Français',
        bn: 'বাংলা',
        ms: 'Melayu',
      };
      const fallback = verse.en || '';
      const noticeLabel = langLabels[lang] || lang.toUpperCase();
      return `<span class="verse-trans-fallback"><span class="verse-trans-note">(EN)</span> ${fallback} <em class="verse-trans-preparing">— ${noticeLabel} translation coming soon</em></span>`;
    }
    default:
      return verse.en || '';
  }
}

/**
 * Show a toast notice when the user switches to a language that
 * does not yet have verse-level translations.
 * @param {string} lang - language code of the newly selected language
 */
function showTranslationNote(lang) {
  const langLabels = {
    ur: 'Urdu (اردو)',
    tr: 'Türkçe',
    fr: 'Français',
    bn: 'বাংলা',
    ms: 'Bahasa Melayu',
  };
  const langName = langLabels[lang] || lang.toUpperCase();
  const message = `ℹ️ Verse translations in ${langName} are being prepared. English fallback is shown for now.`;
  showToastNotice(message, 4500);
}

/**
 * Generic toast display utility.
 * @param {string} message  - text to show
 * @param {number} duration - ms before auto-hide (default 3000)
 */
function showToastNotice(message, duration = 3000) {
  // Reuse existing toast system if available
  if (typeof window.showToast === 'function') {
    window.showToast(message);
    return;
  }

  let toast = document.getElementById('qh-multilang-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'qh-multilang-toast';
    toast.className = 'qh-multilang-toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('qh-multilang-toast--visible');

  clearTimeout(toast._hideTimer);
  toast._hideTimer = setTimeout(() => {
    toast.classList.remove('qh-multilang-toast--visible');
  }, duration);
}

// ─── TASK 5: CSS Injection ───────────────────────────────────────

function injectLangDropdownCSS() {
  if (document.getElementById('qh-lang-dropdown-style')) return;
  const style = document.createElement('style');
  style.id = 'qh-lang-dropdown-style';
  style.textContent = `
/* ── Language Dropdown Wrapper ── */
.lang-dropdown-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
  z-index: 1000;
}

/* ── Toggle Button ── */
.lang-dropdown-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 10px;
  background: rgba(255,255,255,0.08);
  border: 1.5px solid rgba(212,175,55,0.45);
  border-radius: 8px;
  color: #d4af37;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
  white-space: nowrap;
  outline: none;
}
.lang-dropdown-btn:hover,
.lang-dropdown-btn--open {
  background: rgba(212,175,55,0.15);
  border-color: #d4af37;
  box-shadow: 0 0 0 3px rgba(212,175,55,0.12);
}
.lang-chevron {
  transition: transform 0.25s ease;
  color: #d4af37;
  flex-shrink: 0;
}
.lang-dropdown-btn--open .lang-chevron {
  transform: rotate(180deg);
}

/* ── Dropdown Menu Panel ── */
.lang-dropdown-menu {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 175px;
  background: #1a2e1a;
  border: 1.5px solid rgba(212,175,55,0.35);
  border-radius: 10px;
  box-shadow: 0 8px 28px rgba(0,0,0,0.45);
  overflow: hidden;
  animation: langMenuFadeIn 0.18s ease forwards;
  z-index: 1001;
}
@keyframes langMenuFadeIn {
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Individual Language Option ── */
.lang-option {
  display: flex;
  align-items: center;
  gap: 9px;
  width: 100%;
  padding: 9px 14px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #d4d4c8;
  font-size: 0.85rem;
  text-align: left;
  transition: background 0.15s, color 0.15s;
}
.lang-option:hover {
  background: rgba(212,175,55,0.12);
  color: #f5e6a0;
}
.lang-option--active {
  background: rgba(212,175,55,0.18);
  color: #d4af37;
  font-weight: 700;
}
.lang-option-flag {
  font-size: 1.1em;
  line-height: 1;
  flex-shrink: 0;
}
.lang-option-code {
  font-weight: 700;
  font-size: 0.82rem;
  min-width: 28px;
  color: inherit;
}
.lang-option-label {
  font-size: 0.8rem;
  opacity: 0.85;
  color: inherit;
}

/* ── Toast notice ── */
.qh-multilang-toast {
  position: fixed;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  background: #1a2e1a;
  border: 1.5px solid rgba(212,175,55,0.5);
  color: #f5e6a0;
  font-size: 0.85rem;
  padding: 10px 20px;
  border-radius: 24px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.4);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s, transform 0.3s;
  z-index: 9999;
  white-space: nowrap;
  max-width: 90vw;
  text-align: center;
}
.qh-multilang-toast--visible {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
  pointer-events: auto;
}
`;
  document.head.appendChild(style);
}

function injectTransliterationCSS() {
  if (document.getElementById('qh-translit-style')) return;
  const style = document.createElement('style');
  style.id = 'qh-translit-style';
  style.textContent = `
/* ── Enhanced settings toggle ── */
.translit-enhanced-toggle {
  accent-color: #d4af37 !important;
  width: 42px !important;
  height: 22px !important;
  cursor: pointer;
}
.translit-badge {
  display: inline-block;
  background: rgba(212,175,55,0.2);
  color: #d4af37;
  font-size: 0.7rem;
  font-weight: 700;
  border-radius: 4px;
  padding: 1px 5px;
  margin-left: 6px;
  vertical-align: middle;
  letter-spacing: 0.05em;
}

/* ── Quick Aa button in reader header ── */
.quick-translit-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background: rgba(255,255,255,0.07);
  border: 1.5px solid rgba(212,175,55,0.35);
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
  margin-left: 8px;
  flex-shrink: 0;
}
.quick-translit-btn:hover {
  background: rgba(212,175,55,0.15);
  border-color: #d4af37;
}
.quick-translit-btn--active {
  background: rgba(212,175,55,0.25);
  border-color: #d4af37;
  box-shadow: 0 0 0 3px rgba(212,175,55,0.1);
}
.quick-translit-icon {
  color: #d4af37;
  font-size: 0.78rem;
  font-weight: 800;
  line-height: 1;
  font-family: serif;
}

/* ── Transliteration mode: larger Arabic text with clearer diacritics ── */
.translit-mode-arabic {
  font-size: 1.35em !important;
  line-height: 2.2 !important;
  letter-spacing: 0.02em;
  word-spacing: 0.18em;
}

/* ── Verse translation fallback styling ── */
.verse-trans-fallback {
  display: inline;
}
.verse-trans-note {
  display: inline-block;
  font-size: 0.7em;
  font-weight: 700;
  background: rgba(212,175,55,0.2);
  color: #d4af37;
  border-radius: 3px;
  padding: 0 4px;
  margin-right: 3px;
  vertical-align: middle;
}
.verse-trans-preparing {
  display: block;
  font-size: 0.75em;
  color: rgba(212,175,55,0.6);
  margin-top: 2px;
  font-style: italic;
}
`;
  document.head.appendChild(style);
}

// ─── INTEGRATION: inject extra languages into I18N ───────────────
function injectExtraLanguages() {
  if (typeof I18N !== 'undefined') {
    Object.assign(I18N, EXTRA_LANGUAGES);

    // Wrap applyLanguage to support 7 languages gracefully
    const originalApplyLanguage = window.applyLanguage;
    window.applyLanguage = function(lang, notify = true) {
      if (I18N[lang]) {
        if (typeof originalApplyLanguage === 'function') {
          originalApplyLanguage(lang, notify);
        }
      } else {
        console.warn('[Quran Harmony] Language not found in I18N:', lang);
      }
    };
  } else {
    console.warn('[Quran Harmony] I18N object not found. features-multilang.js loaded before app.js?');
  }
}

// ─── Expose helpers globally ─────────────────────────────────────
window.getVerseTranslation  = getVerseTranslation;
window.showTranslationNote  = showTranslationNote;
window.showToastNotice      = showToastNotice;
window.selectLanguage       = selectLanguage;
window.EXTRA_LANGUAGES      = EXTRA_LANGUAGES;
window.LANG_META            = LANG_META;

// ─── DOMContentLoaded bootstrap ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Small delay to let app.js finish its own DOMContentLoaded handlers
  setTimeout(() => {
    injectExtraLanguages();
    upgradeLanguageSelector();
    enhanceTransliterationToggle();
  }, 100);
});
