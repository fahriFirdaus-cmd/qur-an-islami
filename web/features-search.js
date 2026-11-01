// ══════════════════════════════════════════════════════════════
// FEATURES-SEARCH.JS — Full-Text Verse Search & Smart Search Upgrade
// Quran Harmony — Global Features
// ══════════════════════════════════════════════════════════════

(function() {
  'use strict';

  // ── Inject CSS ──
  const css = `
    /* Full-Text Search Results */
    .fts-section-header {
      padding: 8px 14px 4px;
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      color: var(--text-muted, #6b7280);
      text-transform: uppercase;
      border-bottom: 1px solid rgba(0,0,0,0.06);
    }
    .fts-verse-result {
      padding: 10px 14px;
      cursor: pointer;
      border-bottom: 1px solid rgba(0,0,0,0.04);
      transition: background 0.15s;
    }
    .fts-verse-result:hover {
      background: rgba(45,106,79,0.07);
    }
    .fts-verse-ref {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--sage-600, #2d6a4f);
      margin-bottom: 3px;
    }
    .fts-verse-snippet {
      font-size: 0.8rem;
      color: var(--text-secondary, #374151);
      line-height: 1.45;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .fts-highlight {
      background: rgba(229,192,123,0.4);
      border-radius: 2px;
      padding: 0 1px;
      font-weight: 600;
      color: #92400e;
    }
    .fts-loading {
      padding: 14px;
      text-align: center;
      font-size: 0.8rem;
      color: var(--text-muted, #6b7280);
    }
    .fts-no-result {
      padding: 16px;
      text-align: center;
      font-size: 0.82rem;
      color: var(--text-muted, #6b7280);
    }
    .fts-show-more {
      padding: 8px 14px;
      font-size: 0.78rem;
      color: var(--sage-600, #2d6a4f);
      font-weight: 600;
      cursor: pointer;
      text-align: center;
      background: none;
      border: none;
      width: 100%;
      border-top: 1px solid rgba(0,0,0,0.06);
    }
    .fts-show-more:hover { background: rgba(45,106,79,0.06); }
    
    /* Search dropdown container enhancements */
    #search-dropdown {
      max-height: 400px;
      overflow-y: auto;
    }
    .search-dropdown-tabs {
      display: flex;
      border-bottom: 1px solid rgba(0,0,0,0.08);
      background: rgba(0,0,0,0.02);
    }
    .sd-tab {
      flex: 1;
      padding: 7px 10px;
      font-size: 0.75rem;
      font-weight: 600;
      cursor: pointer;
      border: none;
      background: none;
      color: var(--text-muted, #6b7280);
      transition: all 0.15s;
      border-bottom: 2px solid transparent;
      margin-bottom: -1px;
    }
    .sd-tab.active {
      color: var(--sage-700, #1b4332);
      border-bottom-color: var(--sage-600, #2d6a4f);
      background: rgba(45,106,79,0.05);
    }
  `;

  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ── State for search ──
  let searchMode = 'surah'; // 'surah' | 'verse'
  let ftsDebounceTimer = null;

  // ── Highlight text helper ──
  function highlightText(text, query) {
    if (!text || !query) return text || '';
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`(${escaped})`, 'gi');
    return text.replace(re, '<span class="fts-highlight">$1</span>');
  }

  // ── Search verse content across loaded VERSES ──
  function searchVerseContent(query) {
    if (!query || query.length < 3) return [];
    const q = query.toLowerCase();
    const results = [];
    const VERSES = window.VERSES || {};
    const ALL_SURAHS = window.ALL_SURAHS || [];
    const lang = (window.state && window.state.language) || 'en';
    const isEn = lang === 'en';

    for (const surahId in VERSES) {
      const verses = VERSES[surahId];
      if (!Array.isArray(verses)) continue;
      const surahInfo = ALL_SURAHS.find(s => s.id === parseInt(surahId));
      if (!surahInfo) continue;

      for (const v of verses) {
        const transText = isEn ? (v.en || v.id || '') : (v.id || v.en || '');
        const latinText = v.latin || '';
        const arabicText = v.ar || '';

        if (
          transText.toLowerCase().includes(q) ||
          latinText.toLowerCase().includes(q) ||
          arabicText.includes(query)
        ) {
          results.push({
            surahId: parseInt(surahId),
            surahName: surahInfo.name,
            surahAr: surahInfo.ar,
            verseNum: v.num,
            arabic: arabicText,
            translation: transText,
            latin: latinText
          });
          if (results.length >= 20) return results;
        }
      }
    }
    return results;
  }

  // ── Render verse search results in dropdown ──
  function renderVerseSearchResults(results, query, dropdown) {
    const lang = (window.state && window.state.language) || 'en';
    const isEn = lang === 'en';

    if (results.length === 0) {
      return `
        <div class="fts-no-result">
          ${isEn
            ? `No verse found containing "<strong>${query}</strong>"`
            : `Tidak ada ayat yang mengandung "<strong>${query}</strong>"`}
          <br><span style="font-size:0.72rem; margin-top:4px; display:block; color:var(--text-muted)">
            ${isEn ? 'Only verses already loaded are searched.' : 'Hanya ayat yang sudah dimuat yang dicari.'}
          </span>
        </div>`;
    }

    const shown = results.slice(0, 5);
    const items = shown.map(r => {
      const snippet = highlightText(r.translation.substring(0, 130) + (r.translation.length > 130 ? '…' : ''), query);
      return `
        <div class="fts-verse-result" onclick="
          window.loadSurah(${r.surahId}, ${r.verseNum});
          window.navigateTo('quran');
          window.switchQuranView('reader');
          document.getElementById('search-dropdown').style.display='none';
          document.getElementById('main-search').value='';
        ">
          <div class="fts-verse-ref">
            📖 ${r.surahName} (${r.surahId}:${r.verseNum})
            <span style="font-family:var(--font-arabic,serif); font-size:0.9rem; margin-left:6px; font-weight:400;">${r.surahAr}</span>
          </div>
          <div class="fts-verse-snippet">${snippet}</div>
        </div>`;
    }).join('');

    const moreNote = results.length > 5
      ? `<button class="fts-show-more">
          ${isEn ? `+ ${results.length - 5} more results (open more surahs to search them)` : `+ ${results.length - 5} hasil lainnya (buka lebih banyak surah dulu)`}
         </button>`
      : '';

    return `
      <div class="fts-section-header">
        ${isEn ? `📜 Verse Content (${results.length} found)` : `📜 Konten Ayat (${results.length} ditemukan)`}
      </div>
      ${items}
      ${moreNote}`;
  }

  // ── Build tabs HTML ──
  function buildTabsHtml(activeTab) {
    const lang = (window.state && window.state.language) || 'en';
    const isEn = lang === 'en';
    return `
      <div class="search-dropdown-tabs">
        <button class="sd-tab ${activeTab === 'surah' ? 'active' : ''}" data-tab="surah">
          📚 ${isEn ? 'Surah' : 'Surah'}
        </button>
        <button class="sd-tab ${activeTab === 'verse' ? 'active' : ''}" data-tab="verse">
          📜 ${isEn ? 'Verse Content' : 'Isi Ayat'}
        </button>
      </div>`;
  }

  // ── Upgrade the existing global search ──
  function upgradeGlobalSearch() {
    const searchInput = document.getElementById('main-search');
    const dropdown = document.getElementById('search-dropdown');
    if (!searchInput || !dropdown) return;

    // Remove existing listeners by cloning
    const newInput = searchInput.cloneNode(true);
    searchInput.parentNode.replaceChild(newInput, searchInput);

    newInput.addEventListener('input', (e) => {
      clearTimeout(ftsDebounceTimer);
      const raw = e.target.value.trim();
      const q = raw.toLowerCase();

      if (!raw) {
        dropdown.style.display = 'none';
        return;
      }

      // Verse reference pattern: 2:255
      const verseMatch = q.match(/^(\d{1,3}):(\d{1,3})$/);
      if (verseMatch) {
        const sId = parseInt(verseMatch[1]);
        const vNum = parseInt(verseMatch[2]);
        const ALL_SURAHS = window.ALL_SURAHS || [];
        const surah = ALL_SURAHS.find(s => s.id === sId);
        if (surah) {
          const lang = (window.state && window.state.language) || 'en';
          const isEn = lang === 'en';
          dropdown.innerHTML = `
            <div class="search-result-item" onclick="window.jumpToVerse(${sId},${vNum}); document.getElementById('search-dropdown').style.display='none'; document.getElementById('main-search').value='';">
              <div>
                <strong>${surah.name} : ${isEn ? 'Verse' : 'Ayat'} ${vNum}</strong>
                <div style="font-size:0.75rem;color:var(--text-muted)">${surah.arTitle || surah.ar}</div>
              </div>
              <span style="font-size:0.75rem;color:var(--sage-600);font-weight:600">${isEn ? 'Jump →' : 'Buka →'}</span>
            </div>`;
          dropdown.style.display = 'block';
          return;
        }
      }

      // Show tabs and start search
      const ALL_SURAHS = window.ALL_SURAHS || [];
      const lang = (window.state && window.state.language) || 'en';
      const isEn = lang === 'en';

      // Surah matches
      const surahMatches = ALL_SURAHS.filter(s => {
        const isMakk = s.type === 'Makkiyyah' || s.revelation === 'Mekah';
        const revText = isMakk ? 'makkiyyah mekah meccan' : 'madaniyyah madinah medinan';
        return (
          s.name.toLowerCase().includes(q) ||
          (s.arti && s.arti.toLowerCase().includes(q)) ||
          (s.meaning && s.meaning.toLowerCase().includes(q)) ||
          s.id.toString() === q ||
          s.ar.includes(raw) ||
          (s.arTitle && s.arTitle.includes(raw)) ||
          revText.includes(q)
        );
      }).slice(0, 5);

      let surahHtml = '';
      if (surahMatches.length > 0) {
        surahHtml = `<div class="fts-section-header">📚 ${isEn ? 'Surahs' : 'Surah'}</div>` +
          surahMatches.map(s => {
            const isMakk = s.type === 'Makkiyyah' || s.revelation === 'Mekah';
            const revClass = isMakk ? 'rev-makkiyyah' : 'rev-madaniyyah';
            const revText = isMakk ? (isEn ? '🕋 Meccan' : '🕋 Makkiyyah') : (isEn ? '🕌 Medinan' : '🕌 Madaniyyah');
            const meaning = isEn ? (s.meaning || s.arti) : (s.arti || s.meaning);
            return `
              <div class="search-result-item" onclick="window.loadSurah(${s.id}); window.navigateTo('quran'); window.switchQuranView('reader'); document.getElementById('search-dropdown').style.display='none'; document.getElementById('main-search').value='';">
                <div>
                  <strong>${s.id}. ${s.name}${meaning ? ` <span style="font-weight:400;color:var(--text-muted)">(${meaning})</span>` : ''}</strong>
                  <div style="font-size:0.75rem;color:var(--text-muted);display:flex;align-items:center;gap:6px;margin-top:2px">
                    <span class="badge-mini-rev ${revClass}">${revText}</span>
                    <span>• ${s.ayat} ${isEn ? 'Verses' : 'Ayat'}</span>
                  </div>
                </div>
                <span style="font-family:var(--font-arabic,serif);font-size:1.1rem;color:var(--sage-700)">${s.arTitle || s.ar}</span>
              </div>`;
          }).join('');
      }

      // Verse content search (debounced, only if query >= 3 chars)
      let verseSearchHtml = '';
      if (raw.length >= 3) {
        verseSearchHtml = `<div class="fts-loading">🔍 ${isEn ? 'Searching verse content...' : 'Mencari isi ayat...'}</div>`;
      }

      if (surahHtml || verseSearchHtml) {
        dropdown.innerHTML = surahHtml + verseSearchHtml;
        dropdown.style.display = 'block';
      } else {
        dropdown.innerHTML = `<div class="fts-no-result">${isEn ? `No result for "${raw}"` : `Tidak ada hasil untuk "${raw}"`}</div>`;
        dropdown.style.display = 'block';
      }

      // Debounced verse content search
      if (raw.length >= 3) {
        ftsDebounceTimer = setTimeout(() => {
          const verseResults = searchVerseContent(raw);
          const verseHtml = renderVerseSearchResults(verseResults, raw, dropdown);
          // Update only the verse search section
          const loadingEl = dropdown.querySelector('.fts-loading');
          if (loadingEl) {
            loadingEl.outerHTML = verseHtml;
          } else {
            dropdown.innerHTML = surahHtml + verseHtml;
          }
        }, 350);
      }
    });

    // Keyboard navigation
    newInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dropdown.style.display = 'none';
        newInput.blur();
        return;
      }
      if (e.key === 'Enter') {
        const q = newInput.value.trim().toLowerCase();
        const ALL_SURAHS = window.ALL_SURAHS || [];
        // Direct surah match
        const match = ALL_SURAHS.find(s =>
          s.name.toLowerCase() === q || s.id.toString() === q
        );
        if (match) {
          window.loadSurah(match.id);
          window.navigateTo('quran');
          dropdown.style.display = 'none';
          newInput.value = '';
        }
      }
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target) && e.target !== newInput) {
        dropdown.style.display = 'none';
      }
    });
  }

  // ── Export ──
  window.upgradeGlobalSearch = upgradeGlobalSearch;
  window.searchVerseContent = searchVerseContent;

  // ── Auto-init ──
  function init() {
    setTimeout(upgradeGlobalSearch, 800);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

