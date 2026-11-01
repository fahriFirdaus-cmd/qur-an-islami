// ══════════════════════════════════════════════════════════════
// FEATURES-MEMORIZATION.JS — Tahfidz / Memorization Mode
// Quran Harmony — Global Features
// ══════════════════════════════════════════════════════════════

(function() {
  'use strict';

  // ── CSS ──
  const css = `
    /* Memorization Mode */
    .mem-mode-active .verse-arabic {
      filter: blur(8px);
      user-select: none;
      transition: filter 0.3s ease;
      cursor: pointer;
    }
    .mem-mode-active .verse-arabic.mem-revealed {
      filter: none;
      cursor: default;
    }
    .mem-mode-active .verse-latin {
      filter: blur(6px);
      transition: filter 0.3s ease;
    }
    .mem-mode-active .verse-arabic.mem-revealed ~ .verse-latin {
      filter: none;
    }
    .mem-reveal-hint {
      display: none;
      font-size: 0.72rem;
      color: var(--text-muted, #6b7280);
      text-align: center;
      margin-top: 4px;
      font-style: italic;
    }
    .mem-mode-active .mem-reveal-hint {
      display: block;
    }
    .mem-mode-active .verse-arabic:not(.mem-revealed)::after {
      content: '👁️ Tap to reveal';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: var(--font-body, sans-serif);
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--sage-600, #2d6a4f);
      background: rgba(255,255,255,0.9);
      padding: 6px 14px;
      border-radius: 20px;
      border: 1px solid var(--sage-300, #86efac);
      white-space: nowrap;
      pointer-events: none;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .mem-mode-active .verse-arabic {
      position: relative;
    }

    /* Memorization control bar */
    .mem-control-bar {
      display: none;
      align-items: center;
      gap: 12px;
      background: linear-gradient(90deg, rgba(45,106,79,0.08) 0%, rgba(229,192,123,0.06) 100%);
      border: 1px solid rgba(45,106,79,0.2);
      border-radius: 12px;
      padding: 10px 16px;
      margin-bottom: 16px;
      flex-wrap: wrap;
    }
    .mem-control-bar.visible { display: flex; }
    .mem-progress-wrap {
      flex: 1;
      min-width: 120px;
    }
    .mem-progress-label {
      font-size: 0.72rem;
      color: var(--text-muted, #6b7280);
      margin-bottom: 4px;
      font-weight: 600;
    }
    .mem-progress-bar-outer {
      height: 6px;
      background: rgba(0,0,0,0.08);
      border-radius: 10px;
      overflow: hidden;
    }
    .mem-progress-bar-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--sage-600, #2d6a4f), var(--accent-gold, #e5c07b));
      border-radius: 10px;
      transition: width 0.4s ease;
    }
    .mem-btn {
      font-size: 0.78rem;
      font-weight: 700;
      padding: 6px 14px;
      border-radius: 20px;
      border: none;
      cursor: pointer;
      transition: all 0.15s;
    }
    .mem-btn-reveal-all {
      background: rgba(45,106,79,0.12);
      color: var(--sage-700, #1b4332);
      border: 1px solid rgba(45,106,79,0.25);
    }
    .mem-btn-reveal-all:hover { background: rgba(45,106,79,0.2); }
    .mem-btn-hide-all {
      background: rgba(229,192,123,0.15);
      color: #92400e;
      border: 1px solid rgba(229,192,123,0.3);
    }
    .mem-btn-hide-all:hover { background: rgba(229,192,123,0.25); }
    .mem-mode-badge {
      font-size: 0.7rem;
      font-weight: 800;
      letter-spacing: 0.05em;
      background: var(--sage-700, #1b4332);
      color: var(--accent-gold, #e5c07b);
      padding: 3px 10px;
      border-radius: 20px;
    }

    /* Toggle button in reader header */
    .btn-memorization {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 7px 13px;
      border-radius: 20px;
      border: 1.5px solid var(--border, #e2e8f0);
      background: transparent;
      cursor: pointer;
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--text-secondary, #374151);
      transition: all 0.2s;
    }
    .btn-memorization:hover {
      border-color: var(--sage-500, #40916c);
      color: var(--sage-700, #1b4332);
      background: rgba(45,106,79,0.06);
    }
    .btn-memorization.active {
      background: var(--sage-700, #1b4332);
      color: var(--accent-gold, #e5c07b);
      border-color: transparent;
    }
  `;

  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ── State ──
  if (!window.state) window.state = {};
  window.state.memorizationMode = false;
  window.state.memorizationRevealed = {}; // key: "surahId_verseNum"

  // ── Toggle memorization mode ──
  function toggleMemorizationMode() {
    window.state.memorizationMode = !window.state.memorizationMode;
    const verseContainer = document.getElementById('verses-container');
    const memBar = document.getElementById('mem-control-bar');
    const toggleBtn = document.getElementById('btn-mem-toggle');
    const lang = (window.state && window.state.language) || 'en';
    const isEn = lang === 'en';

    if (window.state.memorizationMode) {
      verseContainer?.classList.add('mem-mode-active');
      memBar?.classList.add('visible');
      if (toggleBtn) {
        toggleBtn.classList.add('active');
        toggleBtn.innerHTML = `📚 ${isEn ? 'Memorization: ON' : 'Hafalan: ON'}`;
      }
      applyMemBlurToVerses();
      if (window.showToast) window.showToast(isEn ? '📚 Memorization Mode ON — tap any verse to reveal' : '📚 Mode Hafalan ON — ketuk ayat untuk tampilkan', 'success');
    } else {
      verseContainer?.classList.remove('mem-mode-active');
      memBar?.classList.remove('visible');
      if (toggleBtn) {
        toggleBtn.classList.remove('active');
        toggleBtn.innerHTML = `📚 ${isEn ? 'Memorize' : 'Hafalan'}`;
      }
      // Remove blur from all verses
      document.querySelectorAll('.verse-arabic').forEach(el => el.classList.remove('mem-revealed'));
      if (window.showToast) window.showToast(isEn ? 'Memorization Mode OFF' : 'Mode Hafalan OFF', 'info');
    }
    updateMemProgress();
  }

  function applyMemBlurToVerses() {
    const surahId = window.state.currentSurah;
    document.querySelectorAll('.verse-card').forEach(card => {
      const id = card.id; // verse-{surahId}-{verseNum}
      const match = id.match(/verse-(\d+)-(\d+)/);
      if (match) {
        const vNum = parseInt(match[2]);
        const key = `${surahId}_${vNum}`;
        const arabicEl = card.querySelector('.verse-arabic');
        if (arabicEl) {
          if (window.state.memorizationRevealed[key]) {
            arabicEl.classList.add('mem-revealed');
          } else {
            arabicEl.classList.remove('mem-revealed');
          }
          // Add click handler to reveal
          arabicEl.onclick = () => {
            if (window.state.memorizationMode) {
              revealVerse(surahId, vNum);
            }
          };
        }
      }
    });
  }

  function revealVerse(surahId, verseNum) {
    const key = `${surahId}_${verseNum}`;
    const wasRevealed = window.state.memorizationRevealed[key];

    if (wasRevealed) {
      delete window.state.memorizationRevealed[key];
    } else {
      window.state.memorizationRevealed[key] = true;
    }

    const arabicEl = document.querySelector(`#verse-${surahId}-${verseNum} .verse-arabic`);
    if (arabicEl) {
      arabicEl.classList.toggle('mem-revealed', !wasRevealed);
    }
    updateMemProgress();
  }

  function revealAllVerses() {
    const surahId = window.state.currentSurah;
    document.querySelectorAll('.verse-card').forEach(card => {
      const match = card.id.match(/verse-(\d+)-(\d+)/);
      if (match) {
        const vNum = parseInt(match[2]);
        const key = `${surahId}_${vNum}`;
        window.state.memorizationRevealed[key] = true;
        const arabicEl = card.querySelector('.verse-arabic');
        if (arabicEl) arabicEl.classList.add('mem-revealed');
      }
    });
    updateMemProgress();
  }

  function hideAllVerses() {
    const surahId = window.state.currentSurah;
    document.querySelectorAll('.verse-card').forEach(card => {
      const match = card.id.match(/verse-(\d+)-(\d+)/);
      if (match) {
        const vNum = parseInt(match[2]);
        const key = `${surahId}_${vNum}`;
        delete window.state.memorizationRevealed[key];
        const arabicEl = card.querySelector('.verse-arabic');
        if (arabicEl) arabicEl.classList.remove('mem-revealed');
      }
    });
    updateMemProgress();
  }

  function updateMemProgress() {
    const surahId = window.state.currentSurah;
    const ALL_SURAHS = window.ALL_SURAHS || [];
    const surahInfo = ALL_SURAHS.find(s => s.id === surahId);
    const totalVerses = surahInfo ? surahInfo.ayat : 0;

    const revealedCount = Object.keys(window.state.memorizationRevealed)
      .filter(k => k.startsWith(`${surahId}_`)).length;

    const pct = totalVerses > 0 ? Math.round((revealedCount / totalVerses) * 100) : 0;
    const lang = (window.state && window.state.language) || 'en';
    const isEn = lang === 'en';

    const fillEl = document.getElementById('mem-progress-fill');
    const labelEl = document.getElementById('mem-progress-label');
    if (fillEl) fillEl.style.width = `${pct}%`;
    if (labelEl) {
      labelEl.textContent = isEn
        ? `${revealedCount} / ${totalVerses} verses revealed (${pct}%)`
        : `${revealedCount} / ${totalVerses} ayat terlihat (${pct}%)`;
    }
  }

  function injectMemControlBar() {
    const surahControls = document.querySelector('.surah-controls');
    if (!surahControls || document.getElementById('mem-control-bar')) return;

    const lang = (window.state && window.state.language) || 'en';
    const isEn = lang === 'en';

    // Inject toggle button into surah controls
    const memToggleBtn = document.createElement('button');
    memToggleBtn.id = 'btn-mem-toggle';
    memToggleBtn.className = 'btn-memorization';
    memToggleBtn.innerHTML = `📚 ${isEn ? 'Memorize' : 'Hafalan'}`;
    memToggleBtn.title = isEn ? 'Toggle Memorization Mode (Tahfidz)' : 'Toggle Mode Hafalan (Tahfidz)';
    memToggleBtn.onclick = toggleMemorizationMode;
    surahControls.appendChild(memToggleBtn);

    // Inject progress bar above verses-container
    const versesContainer = document.getElementById('verses-container');
    if (versesContainer && versesContainer.parentNode) {
      const memBar = document.createElement('div');
      memBar.id = 'mem-control-bar';
      memBar.className = 'mem-control-bar';
      memBar.innerHTML = `
        <span class="mem-mode-badge">📚 ${isEn ? 'MEMORIZATION MODE' : 'MODE HAFALAN'}</span>
        <div class="mem-progress-wrap">
          <div class="mem-progress-label" id="mem-progress-label">0 / 0 ${isEn ? 'revealed' : 'terlihat'}</div>
          <div class="mem-progress-bar-outer">
            <div class="mem-progress-bar-fill" id="mem-progress-fill" style="width:0%"></div>
          </div>
        </div>
        <button class="mem-btn mem-btn-reveal-all" onclick="window.revealAllVerses()">
          👁️ ${isEn ? 'Reveal All' : 'Tampilkan Semua'}
        </button>
        <button class="mem-btn mem-btn-hide-all" onclick="window.hideAllVerses()">
          🙈 ${isEn ? 'Hide All' : 'Sembunyi Semua'}
        </button>
      `;
      versesContainer.parentNode.insertBefore(memBar, versesContainer);
    }
  }

  // ── Re-apply blur after surah reload ──
  function onSurahLoaded() {
    if (window.state.memorizationMode) {
      setTimeout(applyMemBlurToVerses, 300);
      updateMemProgress();
    }
  }

  // ── Init ──
  function initMemorizationMode() {
    // Wait for reader to be rendered
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.target.id === 'verses-container' && mutation.addedNodes.length > 0) {
          onSurahLoaded();
          break;
        }
      }
    });

    const container = document.getElementById('verses-container');
    if (container) {
      observer.observe(container, { childList: true });
    }

    // Inject controls after short delay
    setTimeout(injectMemControlBar, 600);
  }

  // ── Exports ──
  window.toggleMemorizationMode = toggleMemorizationMode;
  window.revealVerse = revealVerse;
  window.revealAllVerses = revealAllVerses;
  window.hideAllVerses = hideAllVerses;
  window.initMemorizationMode = initMemorizationMode;

  // ── Auto-init ──
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMemorizationMode);
  } else {
    initMemorizationMode();
  }

})();

