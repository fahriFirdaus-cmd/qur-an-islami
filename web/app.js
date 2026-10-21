// ═══════════════════════════════════════════
// APP.JS — Main Application Logic
// Nur Al-Qur'an Interactive Web App
// ═══════════════════════════════════════════

// ─── State ───
const state = {
  currentPage: 'beranda',
  currentSurah: 1,
  currentEra: 'kenabian',
  currentMode: 'murattal',
  currentQori: 'mishary',
  fontSize: 36,
  isPlaying: false,
  transliterasi: false,
  showVerse: true,
};

// ─── Init ───
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initQuranPage();
  initAudioPage();
  initSejarahPage();
  initJejakPage();
  initSettings();
  initModal();
  initMiniPlayer();
  setCurrentHijriDate();
});

// ══════════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════════
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const page = item.dataset.page;
      navigateTo(page);
    });
  });

  // Hamburger
  const hamburger = document.getElementById('hamburger-btn');
  const sidebar = document.getElementById('sidebar');
  hamburger?.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  // Close sidebar on overlay click (mobile)
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
      if (!sidebar.contains(e.target) && e.target !== hamburger) {
        sidebar.classList.remove('open');
      }
    }
  });
}

function navigateTo(page) {
  // Update state
  state.currentPage = page;

  // Update nav items
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.page === page);
  });

  // Update pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(`page-${page}`);
  if (target) target.classList.add('active');

  // Update topbar title
  const titles = {
    beranda: 'Beranda',
    quran: 'Al-Qur\'an',
    audio: 'Audio Qori',
    sejarah: 'Sejarah Islam',
    jejak: 'Jejak Sejarah dalam Ayat',
    pengaturan: 'Pengaturan',
  };
  document.getElementById('topbar-title').textContent = titles[page] || page;

  // Close sidebar on mobile
  if (window.innerWidth <= 768) {
    document.getElementById('sidebar').classList.remove('open');
  }
}

// ══════════════════════════════════════════
// AL-QUR'AN PAGE
// ══════════════════════════════════════════
function initQuranPage() {
  renderSurahList();
  loadSurah(1);

  // Search
  const searchInput = document.getElementById('surah-search');
  searchInput?.addEventListener('input', (e) => {
    filterSurahList(e.target.value);
  });

  // Font Slider
  const slider = document.getElementById('font-slider');
  slider?.addEventListener('input', (e) => {
    state.fontSize = parseInt(e.target.value);
    document.getElementById('font-size-label').textContent = `${state.fontSize}px`;
    document.querySelectorAll('.verse-arabic').forEach(el => {
      el.style.fontSize = `${state.fontSize}px`;
    });
  });
}

function renderSurahList(filter = '') {
  const container = document.getElementById('surah-list');
  if (!container) return;

  const filtered = ALL_SURAHS.filter(s =>
    s.name.toLowerCase().includes(filter.toLowerCase()) ||
    s.ar.includes(filter) ||
    s.id.toString().includes(filter)
  );

  container.innerHTML = filtered.map(s => `
    <div class="surah-item ${s.id === state.currentSurah ? 'active' : ''}" 
         id="surah-item-${s.id}"
         onclick="loadSurah(${s.id})" 
         role="button" tabindex="0">
      <div class="surah-num">${s.id}</div>
      <div class="surah-info">
        <div class="surah-item-name">${s.name}</div>
        <div class="surah-item-sub">${s.type} • ${s.ayat} Ayat</div>
      </div>
      <div class="surah-item-ar">${s.ar}</div>
    </div>
  `).join('');
}

function filterSurahList(query) {
  renderSurahList(query);
}

function loadSurah(surahId) {
  state.currentSurah = surahId;
  const surah = ALL_SURAHS.find(s => s.id === surahId);
  if (!surah) return;

  // Update active item in list
  document.querySelectorAll('.surah-item').forEach(item => item.classList.remove('active'));
  const activeItem = document.getElementById(`surah-item-${surahId}`);
  if (activeItem) {
    activeItem.classList.add('active');
    activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  // Update header
  document.getElementById('surah-num-badge').textContent = surahId;
  document.getElementById('surah-name-ar').textContent = surah.ar;
  document.getElementById('surah-name-id').textContent = `${surah.name} • ${surah.type} • ${surah.ayat} Ayat`;

  // Hide bismillah for surah 1 (it IS the bismillah) and surah 9
  const bismillah = document.getElementById('bismillah-banner');
  if (bismillah) {
    bismillah.style.display = (surahId === 1 || surahId === 9) ? 'none' : 'block';
  }

  // Render verses
  renderVerses(surahId);
}

function renderVerses(surahId) {
  const container = document.getElementById('verses-container');
  if (!container) return;

  const verses = VERSES[surahId];

  if (!verses || verses.length === 0) {
    // Show placeholder for surahs without full verse data
    const surah = ALL_SURAHS.find(s => s.id === surahId);
    container.innerHTML = `
      <div style="text-align:center; padding: 40px; color: var(--text-secondary);">
        <div style="font-size: 3rem; margin-bottom: 16px;">📖</div>
        <div style="font-size: 1.1rem; font-weight: 600; margin-bottom: 8px; color: var(--text-primary);">${surah?.name}</div>
        <div style="font-family: var(--font-arabic); font-size: 1.6rem; color: var(--gold-1); margin: 16px 0; direction: rtl; line-height: 2;">${surah?.ar}</div>
        <p style="font-size: 0.85rem; line-height: 1.7; max-width: 400px; margin: 0 auto;">
          Data lengkap ${surah?.ayat} ayat surah ini tersedia melalui API. <br/>
          Dalam demo ini, tampilkan Al-Fatihah (1), Al-Anfal (8), atau Al-Baqarah (2) untuk melihat ayat lengkap.
        </p>
        <div style="margin-top: 20px; display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
          <button onclick="loadSurah(1)" class="btn-primary" style="font-size:0.8rem; padding: 8px 16px;">Al-Fatihah</button>
          <button onclick="loadSurah(2)" class="btn-secondary" style="font-size:0.8rem; padding: 8px 16px;">Al-Baqarah</button>
          <button onclick="loadSurah(8)" class="btn-secondary" style="font-size:0.8rem; padding: 8px 16px;">Al-Anfal</button>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = verses.map(v => `
    <div class="verse-card ${v.num === 1 ? 'highlighted' : ''}" id="verse-${surahId}-${v.num}">
      <div class="verse-top">
        <div class="verse-badge">${v.num}</div>
        <div class="verse-actions">
          <button class="verse-btn" title="Putar Audio" onclick="playVerse(${surahId}, ${v.num})">▶</button>
          <button class="verse-btn" title="Bookmark" onclick="bookmarkVerse(${surahId}, ${v.num})">🔖</button>
          <button class="verse-btn" title="Salin" onclick="copyVerse(this, '${escapeStr(v.ar)}')">📋</button>
          ${v.hasHistory ? `<button class="verse-btn has-history" title="Lihat Konteks Sejarah" onclick="openHistoryModal('${v.historyId}')">🏛️</button>` : ''}
        </div>
      </div>
      <div class="verse-arabic" style="font-size: ${state.fontSize}px">${v.ar}</div>
      <div class="verse-latin" id="latin-${surahId}-${v.num}">${v.latin}</div>
      <div class="verse-translation">${v.id}</div>
      ${v.hasHistory ? `
        <div class="verse-history-tag" onclick="openHistoryModal('${v.historyId}')">
          🔗 Ada kaitan sejarah — Klik untuk lihat
        </div>
      ` : ''}
    </div>
  `).join('');
}

function escapeStr(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '\\"');
}

function playVerse(surahId, verseNum) {
  const surah = ALL_SURAHS.find(s => s.id === surahId);
  const mp = document.getElementById('mini-player');
  const mpSurah = document.getElementById('mp-surah');
  const mpQori = document.getElementById('mp-qori');

  if (mp) mp.style.display = 'block';
  if (mpSurah) mpSurah.textContent = `${surah?.name} : ${verseNum}`;
  if (mpQori) mpQori.textContent = `Mishary Rashid Al-Afasy`;

  // Highlight verse
  document.querySelectorAll('.verse-card').forEach(c => c.classList.remove('highlighted'));
  const card = document.getElementById(`verse-${surahId}-${verseNum}`);
  if (card) {
    card.classList.add('highlighted');
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  showToast('▶ Memutar audio...', 'info');
}

function bookmarkVerse(surahId, verseNum) {
  showToast('🔖 Ayat disimpan ke bookmark!', 'success');
}

function copyVerse(btn, text) {
  navigator.clipboard?.writeText(text).then(() => {
    showToast('📋 Ayat berhasil disalin!', 'success');
  }).catch(() => {
    showToast('📋 Salin: ' + text.substring(0, 30) + '...', 'info');
  });
}

// ══════════════════════════════════════════
// AUDIO PAGE
// ══════════════════════════════════════════
function initAudioPage() {
  renderQoriGrid('murattal');

  // Mode tabs
  document.querySelectorAll('.mode-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.mode-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.currentMode = tab.dataset.mode;
      renderQoriGrid(tab.dataset.mode);
    });
  });

  // Now Playing controls
  document.getElementById('np-play')?.addEventListener('click', togglePlay);
  document.getElementById('mp-play-pause')?.addEventListener('click', togglePlay);
  document.getElementById('mp-close-player')?.addEventListener('click', () => {
    document.getElementById('mini-player').style.display = 'none';
  });

  // Fake progress animation
  animateProgress();
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

  // Update UI
  document.querySelectorAll('.qori-card').forEach(c => c.classList.remove('active'));
  const card = document.getElementById(`qori-${qoriId}`);
  if (card) card.classList.add('active');

  // Update Now Playing
  document.getElementById('np-title').textContent = qori.name;
  document.getElementById('np-subtitle').textContent = `${qori.style} • ${qori.origin}`;
  document.getElementById('np-avatar').textContent = qori.emoji;

  showToast(`🎙️ ${qori.name} dipilih`, 'success');
  state.isPlaying = true;
  updatePlayBtn();
}

let progressInterval = null;
let progressVal = 0;

function animateProgress() {
  // decorative only
}

function togglePlay() {
  state.isPlaying = !state.isPlaying;
  updatePlayBtn();
  showToast(state.isPlaying ? '▶ Sedang memutar...' : '⏸ Dijeda', 'info');
}

function updatePlayBtn() {
  const btn = document.getElementById('np-play');
  const mpBtn = document.getElementById('mp-play-pause');
  if (btn) btn.textContent = state.isPlaying ? '⏸' : '▶';
  if (mpBtn) mpBtn.textContent = state.isPlaying ? '⏸' : '▶';
}

// ══════════════════════════════════════════
// SEJARAH PAGE
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
    container.innerHTML = `<div style="text-align:center; padding: 40px; color: var(--text-secondary);">Data era ini sedang dipersiapkan.</div>`;
    return;
  }

  container.innerHTML = events.map(ev => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card" onclick="openEventModal('${ev.id}', '${era}')">
        <div class="tl-year">📅 ${ev.year}</div>
        <div class="tl-title">${ev.title}</div>
        <div class="tl-desc">${ev.desc}</div>
        <div class="tl-tags">
          ${ev.tags.map(t => `<span class="tl-tag ${t.includes('🔗') ? 'quran-ref' : ''}">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// ══════════════════════════════════════════
// JEJAK SEJARAH PAGE
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
  document.getElementById('modal-content').innerHTML = html;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function openEventModal(eventId, era) {
  const events = HISTORY[era] || [];
  const ev = events.find(e => e.id === eventId);
  if (!ev) return;

  const html = `
    <div class="mh-header">
      <div class="mh-event-badge">${ev.tags[0] || '📅 Sejarah'}</div>
      <div class="mh-title">${ev.title}</div>
      <div class="mh-year">📅 ${ev.year}</div>
    </div>
    <p class="mh-story">${ev.detail}</p>
    ${ev.quranRef ? `
    <div class="mh-verse-ref">
      <div style="font-size:0.7rem; color: var(--text-muted); margin-bottom: 8px; text-align:left; direction:ltr;">Ayat Al-Qur'an yang Berkaitan:</div>
      <div class="mh-arabic" style="font-family: var(--font-arabic); font-size: 1.3rem; color: var(--gold-1);">${ev.tags.find(t => t.includes('🔗'))?.replace('🔗 ', '') || ''}</div>
    </div>
    ` : ''}
    <div class="mh-figures">
      <div class="mh-figures-title">👥 Tokoh Utama</div>
      <div class="mh-figure-list">
        ${ev.figures.map(f => `<span class="mh-figure">${f}</span>`).join('')}
      </div>
    </div>
  `;
  openModal(html);
}

function openHistoryModal(historyId) {
  // Find event in all eras
  let ev = null;
  let eraName = '';
  for (const [era, events] of Object.entries(HISTORY)) {
    const found = events.find(e => e.id === historyId);
    if (found) { ev = found; eraName = era; break; }
  }

  if (!ev) {
    // Try to find by jejak data
    const jejak = JEJAK_DATA.find(j => j.id === historyId || (ev?.eventDetail?.includes(historyId)));
    if (!jejak) {
      // Open Badar default
      openEventModal('badar', 'kenabian');
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
      <div class="mh-title">Jejak Sejarah: ${j.surahRef}</div>
    </div>
    <div class="mh-verse-ref">
      <div class="mh-arabic">${j.arabic}</div>
      <div class="mh-translate-label">Terjemahan (Kemenag RI):</div>
      <div class="mh-translation">"${j.translation}"</div>
    </div>
    <div class="mh-story">${j.eventDetail}</div>
    <div style="margin-top:16px;">
      <button class="btn-primary" onclick="navigateTo('sejarah'); closeModal();" style="font-size: 0.82rem; padding: 10px 18px;">
        🏛️ Lihat di Modul Sejarah
      </button>
    </div>
  `;
  openModal(html);
}

// ══════════════════════════════════════════
// SETTINGS
// ══════════════════════════════════════════
function initSettings() {
  // Transliterasi toggle
  const transToggle = document.getElementById('toggle-transliterasi');
  transToggle?.addEventListener('change', (e) => {
    state.transliterasi = e.target.checked;
    document.querySelectorAll('.verse-latin').forEach(el => {
      el.style.display = state.transliterasi ? 'block' : 'none';
    });
    showToast(state.transliterasi ? '✅ Transliterasi ditampilkan' : 'Transliterasi disembunyikan', 'info');
  });

  // Theme options
  document.querySelectorAll('.theme-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.theme-opt').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      applyTheme(opt.dataset.theme);
    });
  });
}

function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === 'light') {
    root.style.setProperty('--bg-primary', '#F5F5F0');
    root.style.setProperty('--bg-secondary', '#EBEBE6');
    root.style.setProperty('--bg-card', '#FFFFFF');
    root.style.setProperty('--text-primary', '#1A1A2E');
    root.style.setProperty('--text-secondary', '#555577');
    showToast('☀️ Tema Terang diterapkan', 'success');
  } else if (theme === 'sepia') {
    root.style.setProperty('--bg-primary', '#2C1A0E');
    root.style.setProperty('--bg-secondary', '#3A2210');
    root.style.setProperty('--bg-card', '#432910');
    root.style.setProperty('--text-primary', '#F5E6C8');
    root.style.setProperty('--text-secondary', '#C8A87A');
    showToast('📜 Tema Sepia diterapkan', 'success');
  } else {
    root.style.setProperty('--bg-primary', '#0A0F1E');
    root.style.setProperty('--bg-secondary', '#0F1629');
    root.style.setProperty('--bg-card', '#141C35');
    root.style.setProperty('--text-primary', '#F0F4FF');
    root.style.setProperty('--text-secondary', '#9BA3C5');
    showToast('🌙 Tema Gelap diterapkan', 'success');
  }
}

// ══════════════════════════════════════════
// MINI PLAYER
// ══════════════════════════════════════════
function initMiniPlayer() {
  const playBtn = document.getElementById('mp-play-pause');
  const closeBtn = document.getElementById('mp-close-player');

  playBtn?.addEventListener('click', togglePlay);
  closeBtn?.addEventListener('click', () => {
    document.getElementById('mini-player').style.display = 'none';
    state.isPlaying = false;
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
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    background: ${type === 'success' ? 'rgba(46,204,113,0.15)' : 'rgba(52,152,219,0.15)'};
    border: 1px solid ${type === 'success' ? 'rgba(46,204,113,0.4)' : 'rgba(52,152,219,0.4)'};
    color: ${type === 'success' ? '#2ECC71' : '#5DADE2'};
    padding: 10px 20px;
    border-radius: 50px;
    font-size: 0.83rem;
    font-family: var(--font-body);
    font-weight: 600;
    z-index: 9999;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    white-space: nowrap;
    pointer-events: none;
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
  }, 2500);
}

// ══════════════════════════════════════════
// HIJRI DATE
// ══════════════════════════════════════════
function setCurrentHijriDate() {
  // Current date: 14 October 2026 = 17 Rabi' al-Akhir 1448 H (approximate)
  const hijriEl = document.querySelector('.hijri-value');
  if (hijriEl) {
    hijriEl.textContent = '17 Rabi\' al-Akhir 1448 H';
  }
}

// ══════════════════════════════════════════
// SEARCH BUTTON (placeholder)
// ══════════════════════════════════════════
document.getElementById('search-btn')?.addEventListener('click', () => {
  showToast('🔍 Fitur pencarian global akan segera hadir!', 'info');
});

document.getElementById('bookmark-btn')?.addEventListener('click', () => {
  showToast('🔖 Lihat daftar bookmark Anda di sini', 'info');
});

document.getElementById('play-all-btn')?.addEventListener('click', () => {
  const mp = document.getElementById('mini-player');
  if (mp) mp.style.display = 'block';
  state.isPlaying = true;
  updatePlayBtn();
  showToast('▶ Memutar semua ayat surah ini...', 'success');
});
