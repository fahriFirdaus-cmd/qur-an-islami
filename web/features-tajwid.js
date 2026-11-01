// ═══════════════════════════════════════════════════════════════════════════
//  QURAN HARMONY — TAJWID (TAJWEED) COLORING ENGINE
//  features-tajwid.js
//  Pewarnaan hukum tajwid pada teks Arab secara client-side
// ═══════════════════════════════════════════════════════════════════════════

(function () {
  'use strict';

  // ─── Unicode Arabic constants ───────────────────────────────────────────
  const FATHAH    = '\u064E'; // َ
  const DAMMAH    = '\u064F'; // ُ
  const KASRAH    = '\u0650'; // ِ
  const SUKUN     = '\u0652'; // ْ
  const SHADDAH   = '\u0651'; // ّ
  const TANWIN_F  = '\u064B'; // ً
  const TANWIN_D  = '\u064C'; // ٌ
  const TANWIN_K  = '\u064D'; // ٍ
  const FATHAH_T  = '\u0670'; // ٰ (alif khanjariyyah)
  const HAMZA_W   = '\u0648'; // و
  const YA        = '\u064A'; // ي
  const ALIF      = '\u0627'; // ا
  const NUN       = '\u0646'; // ن
  const MIM       = '\u0645'; // م
  const LAM       = '\u0644'; // ل
  const ALIF_LAM  = '\u0627\u0644'; // ال
  const BA        = '\u0628'; // ب

  // Huruf Qalqalah: ق ط ب ج د
  const QALQALAH_LETTERS = new Set(['\u0642', '\u0637', '\u0628', '\u062C', '\u062F']);

  // Huruf Ikhfa (15 huruf selain izhar, idgham, iqlab)
  const IKHFA_LETTERS = new Set([
    '\u062A', // ت
    '\u062B', // ث
    '\u062C', // ج (beberapa madzhab)
    '\u062F', // د
    '\u0630', // ذ
    '\u0632', // ز
    '\u0633', // س
    '\u0634', // ش
    '\u0635', // ص
    '\u0636', // ض
    '\u0637', // ط
    '\u0638', // ظ
    '\u0641', // ف
    '\u0642', // ق
    '\u0643', // ك
  ]);

  // Huruf Idgham Bi Ghunnah (و ي م ن)
  const IDGHAM_GHUNNAH_LETTERS = new Set(['\u0648', '\u064A', '\u0645', '\u0646']);

  // Huruf Idgham Bila Ghunnah (ر ل)
  const IDGHAM_BILAGHAN_LETTERS = new Set(['\u0631', '\u0644']);

  // Huruf Izhar (ء ه ع ح غ خ)
  const IZHAR_LETTERS = new Set([
    '\u0621', '\u0647', '\u0639', '\u062D', '\u063A', '\u062E'
  ]);

  // Huruf Syamsiyyah (sun letters) — Lam asimilasi
  const SHAMSI_LETTERS = new Set([
    '\u062A', '\u062B', '\u062F', '\u0630', '\u0631', '\u0632',
    '\u0633', '\u0634', '\u0635', '\u0636', '\u0637', '\u0638',
    '\u0644', '\u0646'
  ]);

  // Huruf Mad (ا و ي)
  const MAD_LETTERS = new Set(['\u0627', '\u0648', '\u064A']);

  // Waqf signs
  const WAQF_SIGNS = new Set([
    '\u06D6', '\u06D7', '\u06D8', '\u06D9', '\u06DA', '\u06DB',
    '\u06DC', '\u06DD', '\u06DE', '\u06DF', '\u06E0', '\u06E5',
    '\u06E6', '\u0615'
  ]);

  // ─── Inject CSS Styles ─────────────────────────────────────────────────
  function injectTajweedStyles() {
    if (document.getElementById('tajwid-styles')) return;
    const style = document.createElement('style');
    style.id = 'tajwid-styles';
    style.textContent = `
      /* ── Tajwid base ── */
      .verse-arabic.tajwid-active span[class^="tj-"],
      .verse-arabic.tajwid-active span[class*=" tj-"] {
        border-radius: 3px;
        padding: 0 1px;
        transition: background 0.2s;
      }

      /* Qalqalah — Merah */
      .tj-qalqalah { color: #FF5252; font-weight: bold; text-shadow: 0 0 6px rgba(255,82,82,0.5); }

      /* Ghunnah (nun/mim shaddah) — Hijau */
      .tj-ghunnah { color: #69F0AE; text-shadow: 0 0 6px rgba(105,240,174,0.5); }

      /* Ikhfa — Kuning/Amber */
      .tj-ikhfa { color: #FFD740; text-shadow: 0 0 6px rgba(255,215,64,0.5); }

      /* Idgham Bighunnah — Biru Teal */
      .tj-idgham { color: #40C4FF; text-shadow: 0 0 6px rgba(64,196,255,0.5); }

      /* Idgham Bila Ghunnah — Biru terang */
      .tj-idgham-bila { color: #82B1FF; text-shadow: 0 0 6px rgba(130,177,255,0.4); }

      /* Iqlab (nun/tanwin + ba) — Ungu */
      .tj-iqlab { color: #EA80FC; text-shadow: 0 0 6px rgba(234,128,252,0.5); }

      /* Mad (perpanjangan) — Teal/Cyan */
      .tj-madd { color: #84FFFF; text-shadow: 0 0 6px rgba(132,255,255,0.4); }

      /* Lam Syamsiyyah — Oranye */
      .tj-lam-shamsi { color: #FFAB40; text-shadow: 0 0 6px rgba(255,171,64,0.4); }

      /* Lam Qamariyyah — Biru muda */
      .tj-lam-qamari { color: #82B1FF; text-shadow: 0 0 6px rgba(130,177,255,0.4); }

      /* Waqf signs — Emas */
      .tj-waqf { color: #e5c07b; font-size: 0.7em; vertical-align: super; }

      /* ── Toggle Button ── */
      #tajwid-toggle-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: rgba(229,192,123,0.08);
        border: 1.5px solid rgba(229,192,123,0.25);
        color: #a0b899;
        border-radius: 8px;
        padding: 5px 12px;
        font-size: 13px;
        cursor: pointer;
        transition: all 0.22s;
        white-space: nowrap;
        font-family: inherit;
      }
      #tajwid-toggle-btn:hover {
        background: rgba(229,192,123,0.16);
        border-color: rgba(229,192,123,0.5);
        color: #e5c07b;
      }
      #tajwid-toggle-btn.active {
        background: rgba(229,192,123,0.18);
        border-color: #e5c07b;
        color: #e5c07b;
        box-shadow: 0 0 10px rgba(229,192,123,0.2);
      }
      #tajwid-toggle-btn .tj-dot {
        width: 8px; height: 8px;
        border-radius: 50%;
        background: #e5c07b;
        display: inline-block;
        transition: transform 0.2s;
      }
      #tajwid-toggle-btn.active .tj-dot {
        background: #FFD740;
        box-shadow: 0 0 6px #FFD740;
        transform: scale(1.3);
      }

      /* ── Legend Panel ── */
      #tajwid-legend {
        display: none;
        position: fixed;
        z-index: 9900;
        bottom: 80px;
        right: 20px;
        background: #0d2d22;
        border: 1.5px solid rgba(229,192,123,0.3);
        border-radius: 14px;
        padding: 14px 18px;
        min-width: 220px;
        max-width: 280px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.5);
        font-size: 13px;
        color: #c8d8c0;
        animation: tjLegendIn 0.22s ease;
      }
      @keyframes tjLegendIn {
        from { opacity:0; transform: translateY(10px); }
        to   { opacity:1; transform: translateY(0);    }
      }
      #tajwid-legend.visible { display: block; }
      #tajwid-legend h4 {
        margin: 0 0 10px;
        color: #e5c07b;
        font-size: 14px;
        letter-spacing: 0.5px;
        border-bottom: 1px solid rgba(229,192,123,0.2);
        padding-bottom: 7px;
      }
      .tj-legend-row {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 3px 0;
      }
      .tj-legend-swatch {
        width: 14px; height: 14px;
        border-radius: 3px;
        flex-shrink: 0;
      }
      .tj-legend-label { font-size: 12px; }
      .tj-legend-example {
        margin-left: auto;
        font-family: 'Traditional Arabic', 'Amiri', serif;
        font-size: 18px;
        opacity: 0.85;
      }
      #tajwid-legend-close {
        position: absolute;
        top: 8px; right: 10px;
        background: none; border: none;
        color: #a0b899; cursor: pointer;
        font-size: 16px; line-height: 1;
        padding: 2px 6px;
        border-radius: 4px;
        transition: color 0.2s;
      }
      #tajwid-legend-close:hover { color: #e5c07b; }

      /* ── Legend toggle btn ── */
      #tajwid-legend-btn {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        background: rgba(229,192,123,0.06);
        border: 1.5px solid rgba(229,192,123,0.2);
        color: #a0b899;
        border-radius: 8px;
        padding: 5px 10px;
        font-size: 13px;
        cursor: pointer;
        transition: all 0.22s;
        font-family: inherit;
      }
      #tajwid-legend-btn:hover {
        background: rgba(229,192,123,0.14);
        border-color: rgba(229,192,123,0.4);
        color: #e5c07b;
      }

      /* ── Wrapper ── */
      #tajwid-controls {
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }
    `;
    document.head.appendChild(style);
  }

  // ─── Core Tajweed Coloring Engine ───────────────────────────────────────
  /**
   * Menganalisis string Arab dan membungkus karakter/kluster dengan span berwarna.
   * Mengembalikan HTML string.
   */
  function applyTajweedColors(text) {
    if (!text) return text;

    // Tokenize: pisahkan teks menjadi "cluster" (huruf + harakat/diacritics)
    const clusters = tokenizeClusters(text);
    const out = [];

    for (let i = 0; i < clusters.length; i++) {
      const cl = clusters[i];
      const base = cl.base; // huruf utama (tanpa diacritics)
      const full = cl.full; // huruf + semua diacritics

      // --- 1. Waqf signs ---
      if (WAQF_SIGNS.has(base)) {
        out.push(`<span class="tj-waqf">${full}</span>`);
        continue;
      }

      // --- 2. Lam dalam ال (Syamsiyyah / Qamariyyah) ---
      if (base === LAM) {
        // Cek apakah cluster sebelumnya adalah Alif dan membentuk ال
        const prev = clusters[i - 1];
        const next = clusters[i + 1];
        if (prev && prev.base === ALIF && next) {
          const nextBase = next.base;
          if (SHAMSI_LETTERS.has(nextBase)) {
            out.push(`<span class="tj-lam-shamsi">${full}</span>`);
            continue;
          } else {
            out.push(`<span class="tj-lam-qamari">${full}</span>`);
            continue;
          }
        }
      }

      // --- 3. Ghunnah: Nun atau Mim dengan Shaddah ---
      if ((base === NUN || base === MIM) && cl.diacritics.includes(SHADDAH)) {
        out.push(`<span class="tj-ghunnah">${full}</span>`);
        continue;
      }

      // --- 4. Iqlab: Nun Sukun / Tanwin + Ba ---
      if (base === NUN && (cl.diacritics.includes(SUKUN) || isTanwin(cl))) {
        const next = clusters[i + 1];
        if (next && next.base === BA) {
          out.push(`<span class="tj-iqlab">${full}</span>`);
          continue;
        }
      }
      // Tanwin + Ba (tanwin on non-nun letter)
      if (isTanwin(cl)) {
        const next = clusters[i + 1];
        if (next && next.base === BA) {
          out.push(`<span class="tj-iqlab">${full}</span>`);
          continue;
        }
        // Idgham Bighunnah: Tanwin + (و ي م ن)
        if (next && IDGHAM_GHUNNAH_LETTERS.has(next.base)) {
          out.push(`<span class="tj-idgham">${full}</span>`);
          continue;
        }
        // Idgham Bila Ghunnah: Tanwin + (ر ل)
        if (next && IDGHAM_BILAGHAN_LETTERS.has(next.base)) {
          out.push(`<span class="tj-idgham-bila">${full}</span>`);
          continue;
        }
        // Ikhfa: Tanwin + ikhfa letters
        if (next && IKHFA_LETTERS.has(next.base)) {
          out.push(`<span class="tj-ikhfa">${full}</span>`);
          continue;
        }
      }

      // --- 5. Nun Sukun rules ---
      if (base === NUN && cl.diacritics.includes(SUKUN)) {
        const next = clusters[i + 1];
        if (next) {
          if (next.base === BA) {
            out.push(`<span class="tj-iqlab">${full}</span>`);
            continue;
          }
          if (IDGHAM_GHUNNAH_LETTERS.has(next.base)) {
            out.push(`<span class="tj-idgham">${full}</span>`);
            continue;
          }
          if (IDGHAM_BILAGHAN_LETTERS.has(next.base)) {
            out.push(`<span class="tj-idgham-bila">${full}</span>`);
            continue;
          }
          if (IKHFA_LETTERS.has(next.base)) {
            out.push(`<span class="tj-ikhfa">${full}</span>`);
            continue;
          }
          // Izhar: tidak diberi warna khusus (biarkan default)
        }
      }

      // --- 6. Qalqalah: huruf qalqalah + sukun ---
      if (QALQALAH_LETTERS.has(base) && cl.diacritics.includes(SUKUN)) {
        out.push(`<span class="tj-qalqalah">${full}</span>`);
        continue;
      }
      // Qalqalah di akhir kata (waqf/sukun implisit) — jika sukun ada
      if (QALQALAH_LETTERS.has(base) && isAtWordEnd(clusters, i)) {
        out.push(`<span class="tj-qalqalah">${full}</span>`);
        continue;
      }

      // --- 7. Mad (Madd) ---
      // Alif mad: huruf sebelumnya fathah + alif tanpa harakat
      if (base === ALIF && !hasDiacritic(cl)) {
        const prev = clusters[i - 1];
        if (prev && prev.diacritics.includes(FATHAH)) {
          out.push(`<span class="tj-madd">${full}</span>`);
          continue;
        }
      }
      // Waw mad: huruf sebelumnya dammah + waw sukun
      if (base === HAMZA_W && cl.diacritics.includes(SUKUN)) {
        const prev = clusters[i - 1];
        if (prev && prev.diacritics.includes(DAMMAH)) {
          out.push(`<span class="tj-madd">${full}</span>`);
          continue;
        }
      }
      // Ya mad: huruf sebelumnya kasrah + ya sukun
      if (base === YA && cl.diacritics.includes(SUKUN)) {
        const prev = clusters[i - 1];
        if (prev && prev.diacritics.includes(KASRAH)) {
          out.push(`<span class="tj-madd">${full}</span>`);
          continue;
        }
      }
      // Alif khanjariyyah (ٰ) — mad lazim
      if (cl.diacritics.includes(FATHAH_T)) {
        out.push(`<span class="tj-madd">${full}</span>`);
        continue;
      }

      // --- Default: tidak ada pewarnaan ---
      out.push(full);
    }

    return out.join('');
  }

  // ─── Tokenizer ─────────────────────────────────────────────────────────
  // Unicode ranges for Arabic diacritics / combining marks
  const DIACRITIC_RE = /[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/;

  function tokenizeClusters(text) {
    const clusters = [];
    let i = 0;
    while (i < text.length) {
      const ch = text[i];
      let diacritics = '';
      let j = i + 1;
      // Collect following diacritics / combining chars
      while (j < text.length && DIACRITIC_RE.test(text[j])) {
        diacritics += text[j];
        j++;
      }
      clusters.push({ base: ch, diacritics, full: ch + diacritics });
      i = j;
    }
    return clusters;
  }

  function isTanwin(cl) {
    return cl.diacritics.includes(TANWIN_F) ||
           cl.diacritics.includes(TANWIN_D) ||
           cl.diacritics.includes(TANWIN_K);
  }

  function hasDiacritic(cl) {
    return cl.diacritics.length > 0;
  }

  function isAtWordEnd(clusters, i) {
    // Cluster di akhir teks, atau diikuti spasi
    if (i >= clusters.length - 1) return true;
    return clusters[i + 1].base === ' ';
  }

  // ─── Legend Data ────────────────────────────────────────────────────────
  const LEGEND_ITEMS = [
    { cls: 'tj-qalqalah',    color: '#FF5252', label: { id:'Qalqalah',          en:'Qalqalah',          ar:'قلقلة'          }, example: 'قَدْ' },
    { cls: 'tj-ghunnah',     color: '#69F0AE', label: { id:'Ghunnah',           en:'Ghunnah',           ar:'غنة'            }, example: 'إِنَّ' },
    { cls: 'tj-ikhfa',       color: '#FFD740', label: { id:'Ikhfa',             en:'Ikhfa',             ar:'إخفاء'          }, example: 'مَنْ ت' },
    { cls: 'tj-idgham',      color: '#40C4FF', label: { id:'Idgham Bighunnah',  en:'Idgham w/Ghunnah',  ar:'إدغام بغنة'    }, example: 'مِنْ و' },
    { cls: 'tj-idgham-bila', color: '#82B1FF', label: { id:'Idgham Bilaghunnah',en:'Idgham w/o Ghunnah',ar:'إدغام بلا غنة' }, example: 'مِنْ ر' },
    { cls: 'tj-iqlab',       color: '#EA80FC', label: { id:'Iqlab',             en:'Iqlab',             ar:'إقلاب'          }, example: 'مِنْ ب' },
    { cls: 'tj-madd',        color: '#84FFFF', label: { id:'Mad (Panjang)',      en:'Madd (Lengthening)',ar:'مد'             }, example: 'قَالَ' },
    { cls: 'tj-lam-shamsi',  color: '#FFAB40', label: { id:'Lam Syamsiyyah',    en:'Lam Shamsiyyah',    ar:'لام شمسية'     }, example: 'الشَّ' },
    { cls: 'tj-lam-qamari',  color: '#82B1FF', label: { id:'Lam Qamariyyah',    en:'Lam Qamariyyah',    ar:'لام قمرية'     }, example: 'الْقُ' },
    { cls: 'tj-waqf',        color: '#e5c07b', label: { id:'Tanda Waqf',        en:'Waqf Sign',         ar:'وقف'            }, example: '۞'    },
  ];

  function renderTajweedLegend() {
    const existing = document.getElementById('tajwid-legend');
    if (existing) { existing.classList.toggle('visible'); return; }

    const lang = (window.state && window.state.language) || 'id';
    const l = (item) => item.label[lang] || item.label['id'];

    const html = `
      <div id="tajwid-legend" class="visible">
        <button id="tajwid-legend-close" title="Tutup" onclick="window.closeTajweedLegend()">✕</button>
        <h4>🎨 Panduan Warna Tajwid</h4>
        ${LEGEND_ITEMS.map(item => `
          <div class="tj-legend-row">
            <span class="tj-legend-swatch" style="background:${item.color}"></span>
            <span class="tj-legend-label">${l(item)}</span>
            <span class="tj-legend-example tj-${item.cls.replace('tj-','')}" style="color:${item.color}">${item.example}</span>
          </div>
        `).join('')}
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
  }

  window.closeTajweedLegend = function () {
    const el = document.getElementById('tajwid-legend');
    if (el) el.classList.remove('visible');
  };

  // ─── Toggle Tajweed ─────────────────────────────────────────────────────
  window.toggleTajweed = function () {
    const s = window.state || {};
    s.tajweed = !s.tajweed;
    localStorage.setItem('qh_tajweed', JSON.stringify(s.tajweed));

    const btn = document.getElementById('tajwid-toggle-btn');
    if (btn) {
      btn.classList.toggle('active', s.tajweed);
      const lang = s.language || 'id';
      btn.title = s.tajweed
        ? (lang === 'en' ? 'Tajweed coloring ON — click to disable' : 'Tajwid aktif — klik untuk nonaktifkan')
        : (lang === 'en' ? 'Enable Tajweed coloring' : 'Aktifkan Tajwid');
    }

    // Re-render ayat yang sedang tampil
    if (typeof window.renderVerses === 'function') {
      window.renderVerses(s.currentSurah || 1);
    }
  };

  // ─── Expose coloring function ────────────────────────────────────────────
  window.applyTajweedColors = applyTajweedColors;

  // ─── Inject Toggle Button into Reader Controls ───────────────────────────
  function injectTajweedControls() {
    if (document.getElementById('tajwid-controls')) return;

    // Cari area font controls / reader settings
    // Biasanya ada di .reader-controls / .reader-settings-row / .font-controls
    const targets = [
      '.font-controls',
      '.reader-controls-row',
      '.reader-settings',
      '.verse-controls',
      '.reader-topbar',
      '#reader-settings-panel',
      '.settings-row',
    ];

    let anchor = null;
    for (const sel of targets) {
      anchor = document.querySelector(sel);
      if (anchor) break;
    }

    const lang = (window.state && window.state.language) || 'id';
    const isActive = (window.state && window.state.tajweed) || false;
    const label = lang === 'en' ? 'Tajweed' : 'Tajwid';

    const controlsHTML = `
      <div id="tajwid-controls">
        <button id="tajwid-toggle-btn" class="${isActive ? 'active' : ''}"
          onclick="window.toggleTajweed()"
          title="${isActive ? (lang==='en'?'Tajweed ON':'Tajwid Aktif') : (lang==='en'?'Enable Tajweed':'Aktifkan Tajwid')}">
          <span class="tj-dot"></span>
          ${label}
        </button>
        <button id="tajwid-legend-btn" onclick="window.renderTajweedLegend()"
          title="${lang === 'en' ? 'Tajweed color guide' : 'Panduan warna Tajwid'}">
          🎨
        </button>
      </div>
    `;

    if (anchor) {
      anchor.insertAdjacentHTML('afterend', controlsHTML);
    } else {
      // Fallback: tambahkan ke #quran-reader atau body sebagai floating
      const reader = document.getElementById('quran-reader') ||
                     document.querySelector('.quran-page') ||
                     document.querySelector('.reader-page');
      if (reader) {
        reader.insertAdjacentHTML('afterbegin', `<div style="padding:8px 16px;">${controlsHTML}</div>`);
      }
    }

    window.renderTajweedLegend = renderTajweedLegend;
  }

  // ─── Mark verse-arabic divs dengan class tajwid-active ───────────────────
  function updateTajweedActiveClass() {
    const isActive = window.state && window.state.tajweed;
    document.querySelectorAll('.verse-arabic').forEach(el => {
      el.classList.toggle('tajwid-active', !!isActive);
    });
  }

  // ─── Watch for page navigation (quran reader page) ───────────────────────
  // Inject controls whenever the reader is shown
  const _origRenderVerses = null;

  function tryInjectControls() {
    // Coba inject saat reader page aktif
    const readerPage = document.querySelector('.reader-page.active') ||
                       document.querySelector('#quran-reader:not([style*="none"])') ||
                       document.querySelector('.quran-page');
    if (readerPage && !document.getElementById('tajwid-controls')) {
      injectTajweedControls();
    }
    updateTajweedActiveClass();
  }

  // MutationObserver: amati perubahan DOM untuk inject kontrol saat reader muncul
  const observer = new MutationObserver(() => {
    tryInjectControls();
  });

  // ─── Initialization ──────────────────────────────────────────────────────
  function init() {
    injectTajweedStyles();

    // Tambahkan state.tajweed jika belum ada
    if (window.state && typeof window.state.tajweed === 'undefined') {
      window.state.tajweed = JSON.parse(localStorage.getItem('qh_tajweed') || 'false');
    }

    // Observe perubahan DOM
    observer.observe(document.body, { childList: true, subtree: true });

    // Coba inject sekarang
    setTimeout(tryInjectControls, 500);
    setTimeout(tryInjectControls, 1500);
    setTimeout(tryInjectControls, 3000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose legend function globally
  window.renderTajweedLegend = renderTajweedLegend;

})();

