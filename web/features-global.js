/**
 * features-global.js
 * Quran Harmony — Comprehensive Global Extensions
 * 1. World Prayer Times & Interactive Leaflet Map Model (Smooth Panning, Dragging, Worldwide Presets)
 * 2. Memorization Mode / Tahfidz (Blur/Reveal, Per-verse Reveal Buttons, Progress Tracker)
 * 3. Rich Social Share & Canvas Card Generator (WhatsApp, X/Twitter, Clipboard, 16:9 PNG Card)
 * 4. Full-Text Search (Verses, Translations EN/ID/Latin, Highlighting, Instant Jump)
 */

// ============================================================
// 1. STYLES INJECTION
// ============================================================
(function injectFeatureStyles() {
  const existing = document.getElementById('gf-feature-styles');
  if (existing) existing.remove();

  const css = `
    /* ── Prayer Times Widget ── */
    .prayer-times-widget {
      background: linear-gradient(135deg, #09261f 0%, #11382b 50%, #1e4a3a 100%);
      border: 1px solid rgba(229,192,123,0.3);
      border-radius: 18px;
      padding: 22px 24px;
      margin: 20px 0 26px;
      color: #e8f5e9;
      box-shadow: 0 10px 30px rgba(0,0,0,0.35);
      position: relative;
      overflow: hidden;
    }
    .prayer-times-widget::before {
      content: "";
      position: absolute;
      top: -40px; right: -40px;
      width: 140px; height: 140px;
      background: radial-gradient(circle, rgba(229,192,123,0.12) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
    }
    .pw-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 12px;
      border-bottom: 1px solid rgba(229,192,123,0.15);
      padding-bottom: 12px;
    }
    .pw-title-group {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .pw-icon {
      font-size: 1.4rem;
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
    }
    .pw-title {
      font-size: 1.15rem;
      font-weight: 700;
      color: #e5c07b;
      letter-spacing: 0.02em;
    }
    .pw-meta-group {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }
    .pw-location {
      font-size: 0.8rem;
      color: #a5d6a7;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.12);
      padding: 4px 12px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .pw-map-btn {
      background: linear-gradient(135deg, rgba(229,192,123,0.25) 0%, rgba(229,192,123,0.1) 100%);
      border: 1.5px solid #e5c07b;
      color: #fdf5e6;
      font-size: 0.8rem;
      font-weight: 700;
      padding: 6px 15px;
      border-radius: 20px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s ease;
      box-shadow: 0 3px 10px rgba(0,0,0,0.25);
    }
    .pw-map-btn:hover {
      background: #e5c07b;
      color: #09261f;
      transform: translateY(-1px);
    }
    .pw-date {
      font-size: 0.8rem;
      color: #c8e6c9;
      opacity: 0.9;
    }

    /* ── Quick City Chips ── */
    .pw-quick-cities {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;
      margin-bottom: 14px;
    }
    .pw-city-label {
      font-size: 0.72rem;
      color: #a5d6a7;
      margin-right: 4px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      font-weight: 600;
    }
    .pw-city-chip {
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(229,192,123,0.22);
      color: #d1e7dd;
      font-size: 0.74rem;
      padding: 4px 10px;
      border-radius: 14px;
      cursor: pointer;
      transition: all 0.2s ease;
      white-space: nowrap;
    }
    .pw-city-chip:hover {
      background: rgba(229,192,123,0.2);
      border-color: #e5c07b;
      color: #fff;
    }
    .pw-city-chip.active {
      background: #e5c07b;
      color: #09261f;
      font-weight: 700;
      border-color: #e5c07b;
    }
    .pw-city-add-chip {
      background: rgba(229,192,123,0.18);
      border: 1px dashed #e5c07b;
      color: #ffe082;
      font-weight: 700;
      font-size: 0.75rem;
      padding: 4px 12px;
      border-radius: 14px;
      cursor: pointer;
      transition: all 0.2s ease;
      white-space: nowrap;
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }
    .pw-city-add-chip:hover {
      background: #e5c07b;
      color: #09261f;
      border-style: solid;
      transform: translateY(-1px);
    }
    .pw-chip-del {
      margin-left: 6px;
      background: rgba(0,0,0,0.3);
      border: none;
      color: inherit;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      line-height: 1;
      cursor: pointer;
      transition: all 0.2s;
    }
    .pw-chip-del:hover {
      background: #ff5252;
      color: #fff;
    }

    .pw-times-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 10px;
      margin-bottom: 16px;
    }
    @media (max-width: 768px) {
      .pw-times-grid { grid-template-columns: repeat(3, 1fr); gap: 8px; }
    }
    @media (max-width: 440px) {
      .pw-times-grid { grid-template-columns: repeat(2, 1fr); gap: 6px; }
    }
    .pw-card {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(229,192,123,0.15);
      border-radius: 12px;
      padding: 10px 8px;
      text-align: center;
      transition: all 0.25s ease;
      position: relative;
    }
    .pw-card:hover {
      background: rgba(255,255,255,0.09);
      border-color: rgba(229,192,123,0.35);
      transform: translateY(-2px);
    }
    .pw-card.pw-active {
      background: linear-gradient(145deg, rgba(229,192,123,0.22) 0%, rgba(13,56,45,0.4) 100%);
      border-color: #e5c07b;
      box-shadow: 0 0 14px rgba(229,192,123,0.25);
    }
    .pw-card-name {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #a5d6a7;
      margin-bottom: 5px;
      font-weight: 600;
    }
    .pw-card-time {
      font-size: 1.15rem;
      font-weight: 700;
      color: #fff;
    }
    .pw-card.pw-active .pw-card-name { color: #e5c07b; }
    .pw-card.pw-active .pw-card-time { color: #fdf5e6; }
    .pw-next-prayer {
      text-align: center;
      font-size: 0.88rem;
      color: #c8e6c9;
      background: rgba(0,0,0,0.25);
      border: 1px solid rgba(229,192,123,0.18);
      border-radius: 10px;
      padding: 10px 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      flex-wrap: wrap;
    }
    .pw-next-prayer strong { color: #e5c07b; }
    .pw-countdown {
      font-weight: 700;
      font-size: 1.05rem;
      color: #fff;
      background: rgba(229,192,123,0.2);
      padding: 2px 10px;
      border-radius: 6px;
      border: 1px solid rgba(229,192,123,0.3);
    }

    /* ── MAP MODAL ── */
    .pmm-overlay {
      position: fixed; inset: 0;
      background: rgba(4, 16, 12, 0.85);
      backdrop-filter: blur(8px);
      z-index: 999999;
      display: flex; align-items: center; justify-content: center;
      animation: fadeIn 0.2s ease;
      padding: 14px;
    }
    .pmm-modal {
      background: linear-gradient(165deg, #103328 0%, #071f18 100%);
      border: 1.5px solid rgba(229,192,123,0.38);
      border-radius: 20px;
      width: min(880px, 98vw);
      max-height: 94vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 25px 70px rgba(0,0,0,0.7);
      animation: slideUp 0.25s ease;
      color: #e8f5e9;
      overflow: hidden;
    }
    .pmm-header {
      display: flex; justify-content: space-between; align-items: center;
      padding: 16px 22px;
      border-bottom: 1px solid rgba(229,192,123,0.18);
      background: rgba(0,0,0,0.18);
    }
    .pmm-title {
      font-size: 1.15rem;
      font-weight: 700;
      color: #e5c07b;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .pmm-close-btn {
      background: transparent;
      border: none;
      color: #a5d6a7;
      font-size: 1.4rem;
      cursor: pointer;
      line-height: 1;
      padding: 4px 8px;
      border-radius: 6px;
      transition: all 0.2s;
    }
    .pmm-close-btn:hover {
      color: #fff;
      background: rgba(255,255,255,0.12);
    }
    .pmm-body {
      padding: 16px 20px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .pmm-toolbar {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .pmm-search-row {
      display: flex;
      gap: 8px;
    }
    .pmm-search-input {
      flex: 1;
      background: rgba(0,0,0,0.35);
      border: 1px solid rgba(229,192,123,0.25);
      color: #fff;
      padding: 10px 14px;
      border-radius: 10px;
      font-size: 0.9rem;
      outline: none;
      transition: border 0.2s;
    }
    .pmm-search-input:focus {
      border-color: #e5c07b;
      box-shadow: 0 0 8px rgba(229,192,123,0.25);
    }
    .pmm-search-btn {
      background: #e5c07b;
      color: #09261f;
      border: none;
      padding: 10px 20px;
      border-radius: 10px;
      font-size: 0.9rem;
      font-weight: 700;
      cursor: pointer;
      transition: filter 0.2s;
    }
    .pmm-search-btn:hover { filter: brightness(1.1); }
    
    .pmm-presets-row {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;
    }
    .pmm-preset-chip {
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(229,192,123,0.2);
      color: #d1e7dd;
      font-size: 0.74rem;
      padding: 4px 10px;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .pmm-preset-chip:hover {
      background: rgba(229,192,123,0.2);
      border-color: #e5c07b;
      color: #fff;
    }
    .pmm-preset-chip.active {
      background: #e5c07b;
      color: #09261f;
      font-weight: 700;
      border-color: #e5c07b;
    }

    /* ── MAP CONTAINER WITH FULL DRAG SUPPORT ── */
    .pmm-map-wrapper {
      position: relative;
      border: 1.5px solid rgba(229,192,123,0.35);
      border-radius: 14px;
      overflow: hidden;
      box-shadow: inset 0 2px 10px rgba(0,0,0,0.5);
      touch-action: none !important;
    }
    #prayer-leaflet-map {
      height: 350px;
      width: 100%;
      background: #061913;
      touch-action: none !important;
      cursor: grab !important;
    }
    #prayer-leaflet-map:active,
    #prayer-leaflet-map.leaflet-drag-target {
      cursor: grabbing !important;
    }
    .leaflet-container {
      touch-action: none !important;
      cursor: grab !important;
      font-family: inherit !important;
    }
    .leaflet-container:active {
      cursor: grabbing !important;
    }
    .leaflet-grab {
      cursor: grab !important;
    }
    .leaflet-grabbing {
      cursor: grabbing !important;
    }
    .custom-leaflet-pin {
      cursor: grab !important;
    }
    .custom-leaflet-pin:active {
      cursor: grabbing !important;
    }

    .pmm-map-hint {
      position: absolute;
      bottom: 10px;
      left: 12px;
      right: 12px;
      background: rgba(9,38,31,0.9);
      border: 1px solid rgba(229,192,123,0.35);
      backdrop-filter: blur(4px);
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 0.74rem;
      color: #ffe082;
      text-align: center;
      z-index: 1000;
      pointer-events: none;
    }

    .pmm-settings-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    @media (max-width: 600px) {
      .pmm-settings-grid { grid-template-columns: 1fr; }
    }
    .pmm-field {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .pmm-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #a5d6a7;
      font-weight: 600;
    }
    .pmm-select {
      background: rgba(0,0,0,0.35);
      border: 1px solid rgba(229,192,123,0.25);
      color: #fff;
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 0.85rem;
      outline: none;
    }
    .pmm-select option {
      background: #0d382d;
      color: #fff;
    }

    .pmm-preview-box {
      background: rgba(0,0,0,0.25);
      border: 1px solid rgba(229,192,123,0.2);
      border-radius: 12px;
      padding: 12px 14px;
    }
    .pmm-preview-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
      flex-wrap: wrap;
      gap: 4px;
    }
    .pmm-selected-loc {
      font-size: 0.95rem;
      font-weight: 700;
      color: #e5c07b;
    }
    .pmm-selected-meta {
      font-size: 0.76rem;
      color: #a5d6a7;
    }
    .pmm-preview-times {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 6px;
    }
    @media (max-width: 500px) {
      .pmm-preview-times { grid-template-columns: repeat(3, 1fr); }
    }
    .pmm-pt-card {
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 8px;
      padding: 6px 4px;
      text-align: center;
    }
    .pmm-pt-name {
      font-size: 0.65rem;
      color: #a5d6a7;
      text-transform: uppercase;
    }
    .pmm-pt-time {
      font-size: 0.9rem;
      font-weight: 700;
      color: #fff;
    }

    .pmm-footer {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      padding: 14px 22px;
      border-top: 1px solid rgba(229,192,123,0.18);
      background: rgba(0,0,0,0.18);
      flex-wrap: wrap;
    }
    .pmm-btn-apply {
      background: linear-gradient(135deg, #2d6a4f, #1b4332);
      border: 1.5px solid #e5c07b;
      color: #fdf5e6;
      font-weight: 700;
      padding: 10px 22px;
      border-radius: 10px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: all 0.2s;
    }
    .pmm-btn-apply:hover {
      background: #e5c07b;
      color: #09261f;
      transform: translateY(-1px);
    }
    .pmm-btn-gps {
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.2);
      color: #c8e6c9;
      font-weight: 600;
      padding: 10px 16px;
      border-radius: 10px;
      cursor: pointer;
      font-size: 0.88rem;
      transition: all 0.2s;
    }
    .pmm-btn-gps:hover {
      background: rgba(255,255,255,0.15);
      color: #fff;
    }

    /* ── ADD CITY & COUNTRY MODAL (+) ── */
    .pacm-overlay {
      position: fixed; inset: 0;
      background: rgba(4, 16, 12, 0.85);
      backdrop-filter: blur(8px);
      z-index: 999999;
      display: flex; align-items: center; justify-content: center;
      animation: fadeIn 0.2s ease;
      padding: 14px;
    }
    .pacm-modal {
      background: linear-gradient(165deg, #103328 0%, #071f18 100%);
      border: 1.5px solid rgba(229,192,123,0.38);
      border-radius: 20px;
      width: min(680px, 98vw);
      max-height: 94vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 25px 70px rgba(0,0,0,0.7);
      animation: slideUp 0.25s ease;
      color: #e8f5e9;
      overflow: hidden;
    }
    .pacm-header {
      display: flex; justify-content: space-between; align-items: center;
      padding: 16px 22px;
      border-bottom: 1px solid rgba(229,192,123,0.18);
      background: rgba(0,0,0,0.18);
    }
    .pacm-title {
      font-size: 1.15rem;
      font-weight: 700;
      color: #e5c07b;
      display: flex; align-items: center; gap: 8px;
    }
    .pacm-body {
      padding: 18px 22px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .pacm-search-box {
      background: rgba(229,192,123,0.08);
      border: 1px solid rgba(229,192,123,0.28);
      border-radius: 12px;
      padding: 12px 14px;
    }
    .pacm-search-desc {
      font-size: 0.78rem;
      color: #a5d6a7;
      margin-bottom: 8px;
      line-height: 1.4;
    }
    .pacm-search-row {
      display: flex;
      gap: 8px;
    }
    .pacm-input {
      background: rgba(0,0,0,0.35);
      border: 1px solid rgba(229,192,123,0.25);
      color: #fff;
      padding: 9px 12px;
      border-radius: 8px;
      font-size: 0.88rem;
      outline: none;
      width: 100%;
      box-sizing: border-box;
      transition: border-color 0.2s;
    }
    .pacm-input:focus {
      border-color: #e5c07b;
      box-shadow: 0 0 8px rgba(229,192,123,0.25);
    }
    .pacm-search-btn {
      background: #e5c07b;
      color: #09261f;
      border: none;
      padding: 9px 16px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 0.85rem;
      cursor: pointer;
      white-space: nowrap;
      transition: filter 0.2s;
    }
    .pacm-search-btn:hover { filter: brightness(1.1); }
    .pacm-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    @media (max-width: 550px) {
      .pacm-grid { grid-template-columns: 1fr; }
    }
    .pacm-field {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .pacm-label {
      font-size: 0.74rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #a5d6a7;
      font-weight: 600;
    }
    .pacm-footer {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      padding: 14px 22px;
      border-top: 1px solid rgba(229,192,123,0.18);
      background: rgba(0,0,0,0.18);
    }
    .pacm-btn-cancel {
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.2);
      color: #c8e6c9;
      padding: 9px 18px;
      border-radius: 10px;
      cursor: pointer;
      font-size: 0.88rem;
      font-weight: 600;
      transition: all 0.2s;
    }
    .pacm-btn-cancel:hover { background: rgba(255,255,255,0.15); color: #fff; }
    .pacm-btn-save {
      background: linear-gradient(135deg, #2d6a4f, #1b4332);
      border: 1.5px solid #e5c07b;
      color: #fdf5e6;
      font-weight: 700;
      padding: 9px 22px;
      border-radius: 10px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: all 0.2s;
    }
    .pacm-btn-save:hover {
      background: #e5c07b;
      color: #09261f;
      transform: translateY(-1px);
    }

    /* ── Memorization Mode ── */
    .memorization-active .verse-arabic {
      filter: blur(8.5px);
      user-select: none;
      cursor: pointer;
      transition: filter 0.3s ease;
    }
    .memorization-active .verse-arabic:hover {
      filter: blur(6px);
    }
    .memorization-active .verse-arabic.mem-revealed {
      filter: none;
      user-select: auto;
      cursor: default;
    }
    .mem-toggle-btn {
      background: rgba(229,192,123,0.12);
      border: 1px solid rgba(229,192,123,0.4);
      color: #e5c07b;
      border-radius: 20px;
      padding: 6px 14px;
      font-size: 0.82rem;
      cursor: pointer;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s ease;
      white-space: nowrap;
    }
    .mem-toggle-btn:hover {
      background: rgba(229,192,123,0.22);
      border-color: #e5c07b;
    }
    .mem-toggle-btn.active {
      background: #e5c07b;
      color: #09261f;
      border-color: #e5c07b;
      box-shadow: 0 0 10px rgba(229,192,123,0.3);
    }
    .mem-progress-container {
      background: rgba(13,56,45,0.7);
      border: 1px solid rgba(229,192,123,0.25);
      border-radius: 12px;
      padding: 12px 16px;
      margin: 16px 0;
      animation: fadeIn 0.3s ease;
    }
    .mem-progress-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6px;
      font-size: 0.82rem;
      color: #a5d6a7;
    }
    .mem-progress-bar-wrap {
      background: rgba(255,255,255,0.08);
      border-radius: 8px;
      height: 8px;
      overflow: hidden;
    }
    .mem-progress-bar {
      height: 100%;
      background: linear-gradient(90deg, #e5c07b, #a5d6a7);
      border-radius: 8px;
      transition: width 0.35s ease;
    }

    /* ── Social Share Modal ── */
    .share-modal-overlay {
      position: fixed; inset: 0;
      background: rgba(5,15,12,0.78);
      backdrop-filter: blur(6px);
      z-index: 99999;
      display: flex; align-items: center; justify-content: center;
      animation: fadeIn 0.2s ease;
      padding: 16px;
    }
    .share-modal {
      background: linear-gradient(160deg, #12382b 0%, #081d16 100%);
      border: 1px solid rgba(229,192,123,0.35);
      border-radius: 20px;
      padding: 26px 24px;
      width: min(440px, 100%);
      box-shadow: 0 25px 60px rgba(0,0,0,0.65);
      animation: slideUp 0.25s ease;
      color: #e8f5e9;
    }
    .share-modal-header {
      display: flex; justify-content: space-between; align-items: center;
      margin-bottom: 12px;
      border-bottom: 1px solid rgba(229,192,123,0.15);
      padding-bottom: 10px;
    }
    .share-modal-title {
      color: #e5c07b;
      font-size: 1.05rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .share-modal-close-x {
      background: transparent;
      border: none;
      color: #a5d6a7;
      font-size: 1.2rem;
      cursor: pointer;
      padding: 4px;
    }
    .share-verse-preview {
      background: rgba(0,0,0,0.22);
      border-radius: 10px;
      padding: 12px 14px;
      margin-bottom: 18px;
      border: 1px solid rgba(255,255,255,0.06);
    }
    .share-preview-arabic {
      font-family: 'Amiri', 'Amiri Quran', serif;
      font-size: 1.25rem;
      line-height: 1.8;
      text-align: right;
      direction: rtl;
      color: #fff;
      margin-bottom: 8px;
    }
    .share-preview-translation {
      font-size: 0.84rem;
      color: #c8e6c9;
      line-height: 1.5;
      font-style: italic;
    }
    .share-buttons-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-bottom: 12px;
    }
    .share-btn {
      display: flex; align-items: center; justify-content: center; gap: 8px;
      padding: 11px 12px;
      border-radius: 12px;
      border: none;
      font-size: 0.86rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .share-btn:hover { filter: brightness(1.15); transform: translateY(-1px); }
    .share-btn-wa { background: #25D366; color: #fff; }
    .share-btn-tw { background: #111; color: #fff; border: 1px solid rgba(255,255,255,0.2); }
    .share-btn-cp { background: rgba(229,192,123,0.18); color: #e5c07b; border: 1px solid rgba(229,192,123,0.4); }
    .share-btn-dl { background: linear-gradient(135deg, #2d6a4f, #1b4332); color: #fdf5e6; border: 1px solid #e5c07b; }

    /* ── Search Dropdown Enhancements ── */
    #verse-content-results {
      border-top: 1px solid rgba(229,192,123,0.2);
      margin-top: 6px;
      padding-top: 6px;
    }
    .search-section-header {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #e5c07b;
      padding: 6px 12px 4px;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .verse-search-item {
      padding: 10px 14px;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.15s ease;
      border-bottom: 1px solid rgba(255,255,255,0.04);
    }
    .verse-search-item:hover {
      background: rgba(229,192,123,0.12);
    }
    .vsi-header {
      display: flex;
      justify-content: space-between;
      font-size: 0.76rem;
      color: #e5c07b;
      font-weight: 700;
      margin-bottom: 3px;
    }
    .vsi-snippet {
      font-size: 0.82rem;
      color: #d1e7dd;
      line-height: 1.45;
    }
    .vsi-highlight {
      background: rgba(229,192,123,0.25);
      color: #ffe082;
      font-weight: 700;
      padding: 0 3px;
      border-radius: 3px;
    }

    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { transform: translateY(24px); opacity: 0; } to { transform: none; opacity: 1; } }
  `;

  const style = document.createElement('style');
  style.id = 'gf-feature-styles';
  style.textContent = css;
  document.head.appendChild(style);
})();

// ============================================================
// 2. WORLD PRESETS & CALCULATION METHODS
// ============================================================
const WORLD_PRAYER_PRESETS = {
  makkah: {
    name: 'Makkah Al-Mukarramah, Arab Saudi 🇸🇦',
    short: 'Makkah',
    lat: 21.4225,
    lng: 39.8262,
    timezone: 3,
    method: 'Makkah'
  },
  madinah: {
    name: 'Madinah Al-Munawwarah, Arab Saudi 🇸🇦',
    short: 'Madinah',
    lat: 24.5247,
    lng: 39.5692,
    timezone: 3,
    method: 'Makkah'
  },
  jerusalem: {
    name: 'Al-Quds / Yerusalem, Palestina 🇵🇸',
    short: 'Al-Quds',
    lat: 31.7683,
    lng: 35.2137,
    timezone: 3,
    method: 'MWL'
  },
  jakarta: {
    name: 'Jakarta, Indonesia 🇮🇩',
    short: 'Jakarta',
    lat: -6.2088,
    lng: 106.8456,
    timezone: 7,
    method: 'Kemenag'
  },
  kualalumpur: {
    name: 'Kuala Lumpur, Malaysia 🇲🇾',
    short: 'Kuala Lumpur',
    lat: 3.1390,
    lng: 101.6869,
    timezone: 8,
    method: 'MWL'
  },
  istanbul: {
    name: 'Istanbul, Turki 🇹🇷',
    short: 'Istanbul',
    lat: 41.0082,
    lng: 28.9784,
    timezone: 3,
    method: 'Turkey'
  },
  cairo: {
    name: 'Kairo, Mesir 🇪🇬',
    short: 'Kairo',
    lat: 30.0444,
    lng: 31.2357,
    timezone: 2,
    method: 'Egypt'
  },
  london: {
    name: 'London, Inggris 🇬🇧',
    short: 'London',
    lat: 51.5074,
    lng: -0.1278,
    timezone: 0,
    method: 'MWL'
  },
  newyork: {
    name: 'New York, Amerika Serikat 🇺🇸',
    short: 'New York',
    lat: 40.7128,
    lng: -74.0060,
    timezone: -5,
    method: 'ISNA'
  },
  tokyo: {
    name: 'Tokyo, Jepang 🇯🇵',
    short: 'Tokyo',
    lat: 35.6762,
    lng: 139.6503,
    timezone: 9,
    method: 'MWL'
  },
  sydney: {
    name: 'Sydney, Australia 🇦🇺',
    short: 'Sydney',
    lat: -33.8688,
    lng: 151.2093,
    timezone: 10,
    method: 'MWL'
  }
};

const CALCULATION_METHODS = {
  MWL: { fajr: 18, isha: 17, name: 'Muslim World League (MWL)' },
  Kemenag: { fajr: 20, isha: 18, name: 'Kemenag RI (Indonesia)' },
  Makkah: { fajr: 18.5, ishaInterval: 90, name: 'Umm Al-Qura (Makkah)' },
  ISNA: { fajr: 15, isha: 15, name: 'ISNA (North America)' },
  Egypt: { fajr: 19.5, isha: 17.5, name: 'Egyptian General Authority' },
  Karachi: { fajr: 18, isha: 18, name: 'Univ. of Islamic Sciences (Karachi)' },
  Turkey: { fajr: 18, isha: 17, name: 'Diyanet İşleri (Turkey)' }
};

const PRAYER_NAMES = {
  en: { Fajr: 'Fajr', Sunrise: 'Sunrise', Dhuhr: 'Dhuhr', Asr: 'Asr', Maghrib: 'Maghrib', Isha: 'Isha', Next: 'Next Prayer' },
  id: { Fajr: 'Subuh', Sunrise: 'Terbit', Dhuhr: 'Dzuhur', Asr: 'Ashar', Maghrib: 'Maghrib', Isha: 'Isya', Next: 'Waktu Sholat Berikutnya' },
  ar: { Fajr: 'الفجر', Sunrise: 'الشروق', Dhuhr: 'الظهر', Asr: 'العصر', Maghrib: 'المغرب', Isha: 'العشاء', Next: 'الصلاة القادمة' },
  ur: { Fajr: 'فجر', Sunrise: 'طلوع آفتاب', Dhuhr: 'ظہر', Asr: 'عصر', Maghrib: 'مغرب', Isha: 'عشاء', Next: 'اگلی نماز' },
  tr: { Fajr: 'İmsak', Sunrise: 'Güneş', Dhuhr: 'Öğle', Asr: 'İkindi', Maghrib: 'Akşam', Isha: 'Yatsı', Next: 'Sonraki Vakit' },
  fr: { Fajr: 'Fajr', Sunrise: 'Lever', Dhuhr: 'Dhuhr', Asr: 'Asr', Maghrib: 'Maghrib', Isha: 'Isha', Next: 'Prière suivante' },
  bn: { Fajr: 'ফজর', Sunrise: 'সূর্যোদয়', Dhuhr: 'যোহর', Asr: 'আসর', Maghrib: 'মাগরিব', Isha: 'ইশা', Next: 'পরবর্তী নামাজ' },
  ms: { Fajr: 'Subuh', Sunrise: 'Syuruk', Dhuhr: 'Zohor', Asr: 'Asar', Maghrib: 'Maghrib', Isha: 'Isyak', Next: 'Waktu Solat Seterusnya' }
};

function _toRad(d) { return d * Math.PI / 180; }
function _toDeg(r) { return r * 180 / Math.PI; }
function _fixAngle(a) { return a - 360 * Math.floor(a / 360); }
function _fixHour(a) { return a - 24 * Math.floor(a / 24); }

// Julian Day
function _julianDay(date) {
  let Y = date.getFullYear();
  let M = date.getMonth() + 1;
  const D = date.getDate();
  if (M <= 2) {
    Y -= 1;
    M += 12;
  }
  const A = Math.floor(Y / 100);
  const B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (Y + 4716)) + Math.floor(30.6001 * (M + 1)) + D + B - 1524.5;
}

// Sun coordinates: returns declination and equation of time (in hours)
function _sunPosition(jd) {
  const d = jd - 2451545.0;
  const g = _fixAngle(357.529 + 0.98560028 * d);
  const q = _fixAngle(280.459 + 0.98564736 * d);
  const L = _fixAngle(q + 1.915 * Math.sin(_toRad(g)) + 0.020 * Math.sin(_toRad(2 * g)));
  const e = 23.439 - 0.00000036 * d;

  let RA = _toDeg(Math.atan2(Math.cos(_toRad(e)) * Math.sin(_toRad(L)), Math.cos(_toRad(L)))) / 15;
  RA = _fixHour(RA);

  const decl = _toDeg(Math.asin(Math.sin(_toRad(e)) * Math.sin(_toRad(L))));
  const eqt = q / 15 - RA;

  return { decl, eqt: _fixHour(eqt + 12) - 12 };
}

// Hour angle H for a given altitude angle (in degrees)
function _getHourAngle(altitude, lat, decl) {
  const cosH = (Math.sin(_toRad(altitude)) - Math.sin(_toRad(lat)) * Math.sin(_toRad(decl))) /
               (Math.cos(_toRad(lat)) * Math.cos(_toRad(decl)));
  if (cosH > 1 || cosH < -1) return null;
  return _toDeg(Math.acos(cosH)) / 15;
}

// Asr hour angle (factor: 1 for Shafi'i/Maliki/Hanbali/Kemenag)
function _getAsrHourAngle(factor, lat, decl) {
  const d = Math.abs(lat - decl);
  const alt = _toDeg(Math.atan(1 / (factor + Math.tan(_toRad(d)))));
  return _getHourAngle(alt, lat, decl);
}

function _formatTime(h) {
  if (h === null || isNaN(h)) return '--:--';
  h = _fixHour(h);
  const hours = Math.floor(h);
  const mins = Math.round((h - hours) * 60);
  const finalH = (hours + Math.floor(mins / 60)) % 24;
  const finalM = mins % 60;
  return `${String(finalH).padStart(2, '0')}:${String(finalM).padStart(2, '0')}`;
}

function calculatePrayerTimes(lat, lng, date, customTimezone = null, methodName = 'MWL') {
  const jd = _julianDay(date);
  const { decl, eqt } = _sunPosition(jd);

  let timezone = customTimezone;
  if (timezone === null || typeof timezone === 'undefined') {
    timezone = -date.getTimezoneOffset() / 60;
  }

  // Solar noon in local time
  const noon = 12 - eqt - lng / 15 + timezone;

  const method = CALCULATION_METHODS[methodName] || CALCULATION_METHODS.MWL;
  const fajrAngle = -(method.fajr || 18);
  const ishaAngle = -(method.isha || 17);
  const sunriseAngle = -0.833;
  const maghribAngle = -0.833;

  const hSunrise = _getHourAngle(sunriseAngle, lat, decl);
  const hSunset  = _getHourAngle(maghribAngle, lat, decl);
  const hFajr    = _getHourAngle(fajrAngle, lat, decl);
  const hIsha    = _getHourAngle(ishaAngle, lat, decl);
  const hAsr     = _getAsrHourAngle(1, lat, decl);

  const fajr    = (hFajr !== null) ? noon - hFajr : null;
  const sunrise = (hSunrise !== null) ? noon - hSunrise : null;
  const dhuhr   = noon + (2 / 60); // 2 minutes ihtiyat
  const asr     = (hAsr !== null) ? noon + hAsr : null;
  const maghrib = (hSunset !== null) ? noon + hSunset : null;

  let isha;
  if (method.ishaInterval) {
    isha = (maghrib !== null) ? maghrib + (method.ishaInterval / 60) : null;
  } else {
    isha = (hIsha !== null) ? noon + hIsha : null;
  }

  return {
    Fajr:    _formatTime(fajr),
    Sunrise: _formatTime(sunrise),
    Dhuhr:   _formatTime(dhuhr),
    Asr:     _formatTime(asr),
    Maghrib: _formatTime(maghrib),
    Isha:    _formatTime(isha)
  };
}

// Global Prayer Widget State
const _pw = {
  lat: -6.2088,
  lng: 106.8456,
  timezone: 7,
  locationName: 'Jakarta, Indonesia',
  presetKey: 'jakarta',
  method: 'Kemenag',
  times: null,
  countdownInterval: null
};

// Load saved prayer location from localStorage if available
try {
  const saved = localStorage.getItem('qh_prayer_loc');
  if (saved) {
    const parsed = JSON.parse(saved);
    Object.assign(_pw, parsed);
  }
} catch (_) {}

// Target Location Date calculation ensuring date & day reflect the selected location timezone
function getTargetLocationDate(timezone) {
  const now = new Date();
  const utcMs = now.getTime() + (now.getTimezoneOffset() * 60000);
  return new Date(utcMs + (timezone * 3600000));
}

// Convert 2-letter country code to flag emoji
function getFlagEmoji(countryCode) {
  if (!countryCode || countryCode.length !== 2) return '📍';
  try {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  } catch (_) {
    return '📍';
  }
}

// Custom Cities Storage & Management
function getCustomCities() {
  try {
    const raw = localStorage.getItem('qh_custom_cities');
    return raw ? JSON.parse(raw) : [];
  } catch (_) {
    return [];
  }
}

function saveCustomCity(cityObj) {
  const list = getCustomCities();
  const filtered = list.filter(c => c.id !== cityObj.id && c.name.toLowerCase() !== cityObj.name.toLowerCase());
  filtered.push(cityObj);
  try {
    localStorage.setItem('qh_custom_cities', JSON.stringify(filtered));
  } catch (_) {}
}

function removeCustomCity(cityId, e) {
  if (e) e.stopPropagation();
  const list = getCustomCities().filter(c => c.id !== cityId);
  try {
    localStorage.setItem('qh_custom_cities', JSON.stringify(list));
  } catch (_) {}
  if (_pw.presetKey === cityId) {
    setPrayerPreset('jakarta');
  } else {
    renderCityChips();
  }
  if (typeof window.showToast === 'function') {
    window.showToast('🗑️ Kota kustom berhasil dihapus.');
  }
}

function setCustomPrayerCity(cityId) {
  const city = getCustomCities().find(c => c.id === cityId);
  if (!city) return;

  _pw.lat = city.lat;
  _pw.lng = city.lng;
  _pw.timezone = city.timezone;
  _pw.locationName = `${city.flag ? city.flag + ' ' : ''}${city.name}`;
  _pw.presetKey = cityId;
  _pw.method = city.method || 'MWL';

  localStorage.setItem('qh_prayer_loc', JSON.stringify({
    lat: _pw.lat,
    lng: _pw.lng,
    timezone: _pw.timezone,
    locationName: _pw.locationName,
    presetKey: _pw.presetKey,
    method: _pw.method
  }));

  renderCityChips();
  updatePrayerDisplay();

  if (typeof window.showToast === 'function') {
    window.showToast(`📍 Jadwal sholat dialihkan ke ${city.short || city.name}!`);
  }
}

function renderCityChips() {
  const container = document.getElementById('pw-quick-cities');
  if (!container) return;

  const curLang = (window.state && window.state.language) || 'en';
  const customCities = getCustomCities();

  const defaultKeys = ['makkah', 'madinah', 'jerusalem', 'jakarta', 'istanbul', 'london', 'newyork'];
  const defaultHtml = defaultKeys.map(key => {
    const p = WORLD_PRAYER_PRESETS[key];
    if (!p) return '';
    const isActive = (_pw.presetKey === key);
    return `<button class="pw-city-chip ${isActive ? 'active' : ''}" onclick="setPrayerPreset('${key}')">${p.short}</button>`;
  }).join('');

  const customHtml = customCities.map(c => {
    const isActive = (_pw.presetKey === c.id);
    const flag = c.flag || '📍';
    return `
      <button class="pw-city-chip ${isActive ? 'active' : ''}" onclick="setCustomPrayerCity('${c.id}')" title="${c.name} (${c.timezone >= 0 ? '+' : ''}${c.timezone})">
        ${flag} ${c.short || c.name}
        <span class="pw-chip-del" onclick="removeCustomCity('${c.id}', event)" title="Hapus kota ini">×</span>
      </button>
    `;
  }).join('');

  const cityLabels = {
    id: 'KOTA DUNIA:', en: 'WORLD CITIES:', ar: 'مدن العالم:', ur: 'عالمی شہر:', tr: 'DÜNYA ŞEHİRLERİ:', fr: 'VILLES DU MONDE:', bn: 'বিশ্বের শহরসমূহ:', ms: 'KOTA DUNIA:'
  };
  const addCityLabels = {
    id: '➕ Tambah Kota (+)', en: '➕ Add City (+)', ar: '➕ إضافة مدينة (+)', ur: '➕ نیا شہر (+)', tr: '➕ Şehir Ekle (+)', fr: '➕ Ajouter Ville (+)', bn: '➕ শহর যোগ করুন (+)', ms: '➕ Tambah Kota (+)'
  };
  const mapBtnLabels = {
    id: '🗺️ Buka Peta...', en: '🗺️ More on Map...', ar: '🗺️ على الخريطة...', ur: '🗺️ مزید نقشے پر...', tr: '🗺️ Haritada Gör...', fr: '🗺️ Plus sur la carte...', bn: '🗺️ মানচিত্রে আরো...', ms: '🗺️ Buka Peta...'
  };

  container.innerHTML = `
    <span class="pw-city-label">${cityLabels[curLang] || cityLabels.en}</span>
    ${defaultHtml}
    ${customHtml}
    <button class="pw-city-add-chip" onclick="openAddCityModal()" title="${addCityLabels[curLang] || addCityLabels.en}">
      ${addCityLabels[curLang] || addCityLabels.en}
    </button>
    <button class="pw-city-chip" onclick="openPrayerMapModal()" style="color:#e5c07b; font-weight:700;">
      ${mapBtnLabels[curLang] || mapBtnLabels.en}
    </button>
  `;
}

function initPrayerWidget() {
  const placeholder = document.getElementById('prayer-widget-placeholder');
  if (!placeholder) return;

  const curLang = (window.state && window.state.language) || 'en';

  placeholder.innerHTML = `
    <div class="prayer-times-widget" id="prayer-widget">
      <div class="pw-header">
        <div class="pw-title-group">
          <span class="pw-icon">🕌</span>
          <span class="pw-title">${curLang === 'id' ? 'Jadwal Waktu Sholat Dunia' : 'World Prayer Times'}</span>
        </div>
        <div class="pw-meta-group">
          <span class="pw-location" id="pw-location">📍 ${_pw.locationName}</span>
          <span class="pw-clock" id="pw-clock" style="background:rgba(229,192,123,0.18); border:1px solid rgba(229,192,123,0.35); color:#ffe082; padding:4px 11px; border-radius:20px; font-weight:700; font-size:0.8rem; display:inline-flex; align-items:center; gap:5px;" title="Jam Waktu Lokal Saat Ini">
            🕒 <span id="pw-clock-time">--:--:--</span>
          </span>
          <button class="pw-map-btn" onclick="openPrayerMapModal()" title="Pilih & Geser Peta Dunia">
            🗺️ ${curLang === 'id' ? 'Model Peta' : 'World Map'}
          </button>
          <span class="pw-date" id="pw-date"></span>
        </div>
      </div>

      <!-- Quick World City Chips -->
      <div class="pw-quick-cities" id="pw-quick-cities"></div>

      <div class="pw-times-grid" id="pw-times-grid"></div>
      <div class="pw-next-prayer" id="pw-next-prayer">⏳ Menghitung waktu sholat...</div>
    </div>
  `;

  // Render quick chips (presets + custom cities + (+) Add button)
  renderCityChips();

  // Auto-detect only if user never saved a custom location
  if (!localStorage.getItem('qh_prayer_loc') && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      pos => {
        _pw.lat = pos.coords.latitude;
        _pw.lng = pos.coords.longitude;
        _pw.timezone = -new Date().getTimezoneOffset() / 60;
        _pw.presetKey = null;

        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${_pw.lat}&lon=${_pw.lng}&zoom=10`)
          .then(r => r.json())
          .then(data => {
            const city = data.address?.city || data.address?.town || data.address?.county || `${_pw.lat.toFixed(2)}°, ${_pw.lng.toFixed(2)}°`;
            const country = data.address?.country || '';
            _pw.locationName = country ? `${city}, ${country}` : city;
            renderCityChips();
            updatePrayerDisplay();
          })
          .catch(() => {
            _pw.locationName = `${_pw.lat.toFixed(2)}°, ${_pw.lng.toFixed(2)}°`;
            renderCityChips();
            updatePrayerDisplay();
          });
      },
      () => {
        renderCityChips();
        updatePrayerDisplay();
      },
      { timeout: 6000 }
    );
  }

  updatePrayerDisplay();
}

function setPrayerPreset(presetKey) {
  const preset = WORLD_PRAYER_PRESETS[presetKey];
  if (!preset) return;

  _pw.lat = preset.lat;
  _pw.lng = preset.lng;
  _pw.timezone = preset.timezone;
  _pw.locationName = preset.name;
  _pw.presetKey = presetKey;
  _pw.method = preset.method;

  localStorage.setItem('qh_prayer_loc', JSON.stringify({
    lat: _pw.lat,
    lng: _pw.lng,
    timezone: _pw.timezone,
    locationName: _pw.locationName,
    presetKey: _pw.presetKey,
    method: _pw.method
  }));

  renderCityChips();
  updatePrayerDisplay();

  if (typeof window.showToast === 'function') {
    window.showToast(`📍 Jadwal sholat dialihkan ke ${preset.short}!`);
  }
}

function updatePrayerDisplay() {
  // CRITICAL: Calculate date corresponding to the target location timezone
  const locDate = getTargetLocationDate(_pw.timezone);
  _pw.times = calculatePrayerTimes(_pw.lat, _pw.lng, locDate, _pw.timezone, _pw.method);

  const locEl  = document.getElementById('pw-location');
  const dateEl = document.getElementById('pw-date');
  const gridEl = document.getElementById('pw-times-grid');
  const nextEl = document.getElementById('pw-next-prayer');
  if (!gridEl) return;

  const curLang = (window.state && window.state.language) || 'en';
  const labels  = PRAYER_NAMES[curLang] || PRAYER_NAMES.en;

  const tzStr = _pw.timezone >= 0 ? `UTC+${_pw.timezone}` : `UTC${_pw.timezone}`;
  if (locEl) locEl.innerHTML = `📍 ${_pw.locationName} <span style="opacity:0.75; font-size:0.72rem;">(${tzStr})</span>`;

  const widgetTitleEl = document.querySelector('.pw-title');
  if (widgetTitleEl) {
    const titles = {
      id: 'Jadwal Waktu Sholat Dunia', en: 'World Prayer Times', ar: 'مواقيت الصلاة حول العالم', ur: 'دنیا بھر کے اوقات نماز', tr: 'Dünya Namaz Vakitleri', fr: 'Horaires des Prières dans le Monde', bn: 'বিশ্বের নামাজের সময়সূচী', ms: 'Waktu Solat Seluruh Dunia'
    };
    widgetTitleEl.textContent = titles[curLang] || titles.en;
  }
  const mapHeaderBtn = document.querySelector('.pw-map-btn');
  if (mapHeaderBtn) {
    const mapLabels = {
      id: '🗺️ Model Peta', en: '🗺️ World Map', ar: '🗺️ خريطة العالم', ur: '🗺️ عالمی نقشہ', tr: '🗺️ Dünya Haritası', fr: '🗺️ Carte du Monde', bn: '🗺️ বিশ্ব মানচিত্র', ms: '🗺️ Peta Dunia'
    };
    mapHeaderBtn.textContent = mapLabels[curLang] || mapLabels.en;
  }

  // Display date following the target location calendar
  if (dateEl) {
    dateEl.textContent = locDate.toLocaleDateString(curLang === 'id' ? 'id-ID' : 'en-US', {
      weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
    });
  }

  const prayerKeys = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

  function toMinutes(hhmm) {
    if (!hhmm || hhmm.includes('-')) return 0;
    const [h, m] = hhmm.split(':').map(Number);
    return h * 60 + m;
  }

  // Calculate minutes in target location
  const curMinutes = locDate.getHours() * 60 + locDate.getMinutes();

  let nextKey = 'Fajr';
  let nextMins = Infinity;
  let activeKey = 'Isha';

  for (let i = 0; i < prayerKeys.length; i++) {
    const k = prayerKeys[i];
    const mins = toMinutes(_pw.times[k]);
    if (mins > curMinutes) {
      nextMins = mins;
      nextKey = k;
      activeKey = i > 0 ? prayerKeys[i - 1] : 'Isha';
      break;
    }
  }

  if (nextMins === Infinity) {
    nextKey = 'Fajr';
    activeKey = 'Isha';
  }

  gridEl.innerHTML = prayerKeys.map(k => {
    const isActive = (k === activeKey);
    const displayName = labels[k] || k;
    return `
      <div class="pw-card ${isActive ? 'pw-active' : ''}" title="${displayName}">
        <div class="pw-card-name">${displayName}</div>
        <div class="pw-card-time">${_pw.times[k]}</div>
      </div>
    `;
  }).join('');

  if (_pw.countdownInterval) clearInterval(_pw.countdownInterval);

  function updateCountdown() {
    const targetLocDate = getTargetLocationDate(_pw.timezone);
    const nowM = targetLocDate.getHours() * 60 + targetLocDate.getMinutes();
    const nowS = targetLocDate.getSeconds();

    // Update Live Digital Clock for the selected location
    const clockEl = document.getElementById('pw-clock-time');
    if (clockEl) {
      const hh = String(targetLocDate.getHours()).padStart(2, '0');
      const mm = String(targetLocDate.getMinutes()).padStart(2, '0');
      const ss = String(targetLocDate.getSeconds()).padStart(2, '0');
      clockEl.textContent = `${hh}:${mm}:${ss}`;
    }

    // Keep date updated dynamically as midnight rolls over in target location
    const dynamicDateEl = document.getElementById('pw-date');
    if (dynamicDateEl) {
      dynamicDateEl.textContent = targetLocDate.toLocaleDateString(curLang === 'id' ? 'id-ID' : 'en-US', {
        weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
      });
    }

    let targetMins = toMinutes(_pw.times[nextKey]);
    let diff = targetMins - nowM;
    if (diff <= 0) diff += 24 * 60;

    const totalSecondsLeft = diff * 60 - nowS;
    if (totalSecondsLeft <= 0) {
      updatePrayerDisplay();
      return;
    }

    const hLeft = Math.floor(totalSecondsLeft / 3600);
    const mLeft = Math.floor((totalSecondsLeft % 3600) / 60);
    const sLeft = totalSecondsLeft % 60;

    const nextDisplayName = labels[nextKey] || nextKey;
    const nextLabel = labels.Next || (curLang === 'id' ? 'Berikutnya' : 'Next Prayer');

    if (nextEl) {
      nextEl.innerHTML = `
        ${nextLabel}: <strong>${nextDisplayName} (${_pw.times[nextKey]})</strong> &nbsp;—&nbsp;
        <span class="pw-countdown">${String(hLeft).padStart(2,'0')}h ${String(mLeft).padStart(2,'0')}m ${String(sLeft).padStart(2,'0')}s</span>
      `;
    }
  }

  updateCountdown();
  _pw.countdownInterval = setInterval(updateCountdown, 1000);
}

// ============================================================
// 3. INTERACTIVE WORLD MAP MODAL (LEAFLET - PANNABLE & DRAGGABLE)
// ============================================================
let _leafletMap = null;
let _leafletMarker = null;

// Temporary state while user is exploring the map modal
const _mapTempState = {
  lat: -6.2088,
  lng: 106.8456,
  timezone: 7,
  locationName: 'Jakarta, Indonesia',
  method: 'Kemenag',
  presetKey: null
};

function openPrayerMapModal() {
  closePrayerMapModal();

  _mapTempState.lat = _pw.lat;
  _mapTempState.lng = _pw.lng;
  _mapTempState.timezone = _pw.timezone;
  _mapTempState.locationName = _pw.locationName;
  _mapTempState.method = _pw.method;
  _mapTempState.presetKey = _pw.presetKey;

  const overlay = document.createElement('div');
  overlay.className = 'pmm-overlay';
  overlay.id = 'pmm-overlay';

  overlay.innerHTML = `
    <div class="pmm-modal" role="dialog" aria-modal="true" aria-label="World Prayer Map">
      <div class="pmm-header">
        <div class="pmm-title">
          <span>🗺️ Model Peta — Jadwal Sholat Seluruh Dunia</span>
        </div>
        <button class="pmm-close-btn" onclick="closePrayerMapModal()">✕</button>
      </div>

      <div class="pmm-body">
        <div class="pmm-toolbar">
          <div class="pmm-search-row">
            <input type="text" id="pmm-search-input" class="pmm-search-input" placeholder="Cari kota di dunia (contoh: Makkah, Tokyo, London, Istanbul, Kairo, New York)..." />
            <button class="pmm-search-btn" onclick="searchMapCity()">Cari 🔍</button>
          </div>

          <div class="pmm-presets-row">
            <span style="font-size:0.74rem; color:#a5d6a7; font-weight:600;">Kota Cepat:</span>
            <button class="pmm-preset-chip" onclick="applyMapPreset('makkah')">🕋 Makkah</button>
            <button class="pmm-preset-chip" onclick="applyMapPreset('madinah')">🕌 Madinah</button>
            <button class="pmm-preset-chip" onclick="applyMapPreset('jerusalem')">🇵🇸 Al-Quds</button>
            <button class="pmm-preset-chip" onclick="applyMapPreset('jakarta')">🇮🇩 Jakarta</button>
            <button class="pmm-preset-chip" onclick="applyMapPreset('kualalumpur')">🇲🇾 KL</button>
            <button class="pmm-preset-chip" onclick="applyMapPreset('istanbul')">🇹🇷 Istanbul</button>
            <button class="pmm-preset-chip" onclick="applyMapPreset('cairo')">🇪🇬 Kairo</button>
            <button class="pmm-preset-chip" onclick="applyMapPreset('london')">🇬🇧 London</button>
            <button class="pmm-preset-chip" onclick="applyMapPreset('newyork')">🇺🇸 New York</button>
            <button class="pmm-preset-chip" onclick="applyMapPreset('tokyo')">🇯🇵 Tokyo</button>
            <button class="pmm-preset-chip" onclick="applyMapPreset('sydney')">🇦🇺 Sydney</button>
            <button class="pmm-preset-chip" onclick="openAddCityModal()" style="color:#ffe082; font-weight:700; border-color:#e5c07b;">➕ Tambah...</button>
          </div>
        </div>

        <div class="pmm-map-wrapper">
          <div id="prayer-leaflet-map"></div>
          <div class="pmm-map-hint">🖐️ <strong>Geser peta</strong> bebas dengan mouse / sentuh untuk menjelajahi dunia. Klik atau geser pin <strong>🕌</strong> untuk memilih lokasi.</div>
        </div>

        <div class="pmm-settings-grid">
          <div class="pmm-field">
            <label class="pmm-label">Metode Perhitungan Sholat:</label>
            <select class="pmm-select" id="pmm-method-select" onchange="onMapMethodChange()">
              <option value="Kemenag">Kemenag RI (Subuh 20°, Isya 18°)</option>
              <option value="Makkah">Umm Al-Qura, Makkah (Subuh 18.5°, Isya +90m)</option>
              <option value="MWL">Muslim World League (Subuh 18°, Isya 17°)</option>
              <option value="ISNA">ISNA North America (Subuh 15°, Isya 15°)</option>
              <option value="Egypt">Egyptian General Authority (Subuh 19.5°, Isya 17.5°)</option>
              <option value="Karachi">Univ. of Islamic Sciences Karachi (Subuh 18°, Isya 18°)</option>
              <option value="Turkey">Diyanet İşleri Turkey (Subuh 18°, Isya 17°)</option>
            </select>
          </div>

          <div class="pmm-field">
            <label class="pmm-label">Zona Waktu (UTC Offset):</label>
            <select class="pmm-select" id="pmm-tz-select" onchange="onMapTzChange()">
              <option value="-12">UTC-12 (Baker Island)</option>
              <option value="-11">UTC-11 (Samoa)</option>
              <option value="-10">UTC-10 (Hawaii)</option>
              <option value="-9">UTC-9 (Alaska)</option>
              <option value="-8">UTC-8 (Pacific Time / LA)</option>
              <option value="-7">UTC-7 (Mountain Time / Denver)</option>
              <option value="-6">UTC-6 (Central Time / Chicago)</option>
              <option value="-5">UTC-5 (Eastern Time / New York)</option>
              <option value="-4">UTC-4 (Atlantic / Santiago)</option>
              <option value="-3">UTC-3 (Buenos Aires / São Paulo)</option>
              <option value="-2">UTC-2 (Mid-Atlantic)</option>
              <option value="-1">UTC-1 (Azores / Cape Verde)</option>
              <option value="0">UTC+0 (London / Casablanca / GMT)</option>
              <option value="1">UTC+1 (Paris / Berlin / Lagos)</option>
              <option value="2">UTC+2 (Kairo / Yerusalem / Athena)</option>
              <option value="3">UTC+3 (Makkah / Madinah / Istanbul / Moskow)</option>
              <option value="4">UTC+4 (Dubai / Baku)</option>
              <option value="5">UTC+5 (Karachi / Tashkent)</option>
              <option value="5.5">UTC+5:30 (New Delhi / India)</option>
              <option value="6">UTC+6 (Dhaka / Almaty)</option>
              <option value="7">UTC+7 (Jakarta / Bangkok / WIB)</option>
              <option value="8">UTC+8 (Kuala Lumpur / Singapura / WITA)</option>
              <option value="9">UTC+9 (Tokyo / Seoul / WIT)</option>
              <option value="10">UTC+10 (Sydney / Melbourne)</option>
              <option value="11">UTC+11 (Solomon Islands)</option>
              <option value="12">UTC+12 (Auckland / Fiji)</option>
            </select>
          </div>
        </div>

        <div class="pmm-preview-box">
          <div class="pmm-preview-header">
            <span class="pmm-selected-loc" id="pmm-loc-title">📍 ${_mapTempState.locationName}</span>
            <span class="pmm-selected-meta" id="pmm-loc-meta">Lat: ${_mapTempState.lat.toFixed(2)}°, Lng: ${_mapTempState.lng.toFixed(2)}°</span>
          </div>
          <div class="pmm-preview-times" id="pmm-preview-times"></div>
        </div>
      </div>

      <div class="pmm-footer">
        <button class="pmm-btn-gps" onclick="mapUseDeviceGPS()">🎯 Gunakan GPS Saya</button>
        <button class="pmm-btn-gps" onclick="saveCurrentMapLocationAsCustomCity()" style="border-color:#e5c07b; color:#ffe082;">➕ Simpan Kota Ini (+)</button>
        <button class="pmm-btn-apply" onclick="confirmApplyMapLocation()">✅ Terapkan Lokasi Ini ke Beranda</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // Close on outside click
  overlay.onclick = (e) => { if (e.target === overlay) closePrayerMapModal(); };

  // Enter in search input
  const searchInput = document.getElementById('pmm-search-input');
  if (searchInput) {
    searchInput.onkeydown = (e) => { if (e.key === 'Enter') searchMapCity(); };
  }

  // Set initial dropdown values
  const methodSelect = document.getElementById('pmm-method-select');
  if (methodSelect) methodSelect.value = _mapTempState.method || 'MWL';

  const tzSelect = document.getElementById('pmm-tz-select');
  if (tzSelect) tzSelect.value = String(_mapTempState.timezone);

  // Initialize Leaflet Map
  setTimeout(() => {
    initLeafletMapInstance(_mapTempState.lat, _mapTempState.lng);
    updateMapPreviewTimes();
  }, 100);
}

function closePrayerMapModal() {
  if (_leafletMap) {
    try {
      _leafletMap.remove();
    } catch (_) {}
    _leafletMap = null;
    _leafletMarker = null;
  }
  const overlay = document.getElementById('pmm-overlay');
  if (overlay) overlay.remove();
}

function initLeafletMapInstance(lat, lng) {
  const mapContainer = document.getElementById('prayer-leaflet-map');
  if (!mapContainer) return;

  if (typeof L === 'undefined') {
    mapContainer.innerHTML = `
      <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; color:#e5c07b; text-align:center; padding:20px;">
        <span style="font-size:2rem; margin-bottom:8px;">🌍</span>
        <p>Memuat peta interaktif dunia...</p>
      </div>
    `;
    return;
  }

  // Clean up any existing map instance
  if (_leafletMap) {
    try {
      _leafletMap.remove();
    } catch (_) {}
    _leafletMap = null;
    _leafletMarker = null;
  }

  // Prevent scroll propagation so user can drag map freely without modal jumping
  if (L.DomEvent) {
    L.DomEvent.disableScrollPropagation(mapContainer);
    L.DomEvent.disableClickPropagation(mapContainer);
  }

  // Initialize map with explicit dragging, tap disabled for touch reliability
  _leafletMap = L.map('prayer-leaflet-map', {
    center: [lat, lng],
    zoom: 5,
    minZoom: 2,
    maxZoom: 18,
    dragging: true,
    tap: false, // Critical: tap=false prevents touch/mouse drag freezing in modern browsers
    touchZoom: true,
    scrollWheelZoom: true,
    doubleClickZoom: true,
    boxZoom: true,
    keyboard: true,
    worldCopyJump: true
  });

  _leafletMap.dragging.enable();

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(_leafletMap);

  // Gold Mosque Pin Marker
  const customIcon = L.divIcon({
    className: 'custom-leaflet-pin',
    html: `<div style="background:#e5c07b; color:#09261f; font-size:18px; width:36px; height:36px; border-radius:50%; border:2px solid #fff; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 12px rgba(0,0,0,0.5); cursor:grab;">🕌</div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18]
  });

  _leafletMarker = L.marker([lat, lng], {
    icon: customIcon,
    draggable: true,
    autoPan: true
  }).addTo(_leafletMap);

  // Marker drag handlers
  _leafletMarker.on('drag', function(e) {
    const pos = e.target.getLatLng();
    updateMapLocationHeaderFast(pos.lat, pos.lng);
  });

  _leafletMarker.on('dragend', function(e) {
    const pos = e.target.getLatLng();
    onMapPointSelected(pos.lat, pos.lng);
  });

  // Map click places marker
  _leafletMap.on('click', function(e) {
    onMapPointSelected(e.latlng.lat, e.latlng.lng);
  });

  // Multiple invalidateSize calls to guarantee full render during CSS animations
  setTimeout(() => { if (_leafletMap) _leafletMap.invalidateSize(); }, 150);
  setTimeout(() => { if (_leafletMap) _leafletMap.invalidateSize(); }, 350);
  setTimeout(() => { if (_leafletMap) _leafletMap.invalidateSize(); }, 600);
}

function updateMapLocationHeaderFast(lat, lng) {
  const metaEl = document.getElementById('pmm-loc-meta');
  if (metaEl) {
    metaEl.textContent = `Lat: ${lat.toFixed(2)}°, Lng: ${lng.toFixed(2)}° (Menggeser...)`;
  }
}

function onMapPointSelected(lat, lng, optName = null, optTimezone = null) {
  _mapTempState.lat = lat;
  _mapTempState.lng = lng;
  _mapTempState.presetKey = null;

  if (_leafletMarker) {
    _leafletMarker.setLatLng([lat, lng]);
  }

  // Estimate timezone from longitude if not provided
  if (optTimezone !== null && typeof optTimezone !== 'undefined') {
    _mapTempState.timezone = optTimezone;
  } else {
    _mapTempState.timezone = Math.round(lng / 15);
  }

  const tzSelect = document.getElementById('pmm-tz-select');
  if (tzSelect) tzSelect.value = String(_mapTempState.timezone);

  if (optName) {
    _mapTempState.locationName = optName;
    updateMapLocationHeader();
    updateMapPreviewTimes();
  } else {
    // Reverse Geocode
    _mapTempState.locationName = `${lat.toFixed(2)}°, ${lng.toFixed(2)}°`;
    updateMapLocationHeader();
    updateMapPreviewTimes();

    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10`)
      .then(r => r.json())
      .then(data => {
        const city = data.address?.city || data.address?.town || data.address?.county || data.address?.state || `${lat.toFixed(2)}°, ${lng.toFixed(2)}°`;
        const country = data.address?.country || '';
        _mapTempState.locationName = country ? `${city}, ${country}` : city;
        updateMapLocationHeader();
      })
      .catch(() => {});
  }
}

function updateMapLocationHeader() {
  const titleEl = document.getElementById('pmm-loc-title');
  const metaEl  = document.getElementById('pmm-loc-meta');
  const tzStr   = _mapTempState.timezone >= 0 ? `UTC+${_mapTempState.timezone}` : `UTC${_mapTempState.timezone}`;
  const locDate = getTargetLocationDate(_mapTempState.timezone);
  const curLang = (window.state && window.state.language) || 'id';
  const dateStr = locDate.toLocaleDateString(curLang === 'id' ? 'id-ID' : 'en-US', {
    weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
  });

  if (titleEl) titleEl.textContent = `📍 ${_mapTempState.locationName}`;
  if (metaEl)  metaEl.textContent  = `📅 ${dateStr} • Lat: ${_mapTempState.lat.toFixed(2)}°, Lng: ${_mapTempState.lng.toFixed(2)}° • Zona: ${tzStr}`;
}

function updateMapPreviewTimes() {
  const container = document.getElementById('pmm-preview-times');
  if (!container) return;

  const locDate = getTargetLocationDate(_mapTempState.timezone);
  const times = calculatePrayerTimes(_mapTempState.lat, _mapTempState.lng, locDate, _mapTempState.timezone, _mapTempState.method);

  const curLang = (window.state && window.state.language) || 'id';
  const labels  = PRAYER_NAMES[curLang] || PRAYER_NAMES.id;
  const prayerKeys = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

  container.innerHTML = prayerKeys.map(k => `
    <div class="pmm-pt-card">
      <div class="pmm-pt-name">${labels[k] || k}</div>
      <div class="pmm-pt-time">${times[k]}</div>
    </div>
  `).join('');
}

function applyMapPreset(presetKey) {
  const preset = WORLD_PRAYER_PRESETS[presetKey];
  if (!preset) return;

  _mapTempState.lat = preset.lat;
  _mapTempState.lng = preset.lng;
  _mapTempState.timezone = preset.timezone;
  _mapTempState.locationName = preset.name;
  _mapTempState.method = preset.method;
  _mapTempState.presetKey = presetKey;

  const methodSelect = document.getElementById('pmm-method-select');
  if (methodSelect) methodSelect.value = preset.method;

  const tzSelect = document.getElementById('pmm-tz-select');
  if (tzSelect) tzSelect.value = String(preset.timezone);

  if (_leafletMap) {
    _leafletMap.flyTo([preset.lat, preset.lng], 9, { duration: 1.2 });
    if (_leafletMarker) _leafletMarker.setLatLng([preset.lat, preset.lng]);
  }

  updateMapLocationHeader();
  updateMapPreviewTimes();
}

function searchMapCity() {
  const input = document.getElementById('pmm-search-input');
  if (!input || !input.value.trim()) return;

  const query = input.value.trim();

  // Check if matches preset
  const lowerQ = query.toLowerCase();
  for (const [key, p] of Object.entries(WORLD_PRAYER_PRESETS)) {
    if (p.name.toLowerCase().includes(lowerQ) || p.short.toLowerCase().includes(lowerQ)) {
      applyMapPreset(key);
      return;
    }
  }

  // Geocode with Nominatim
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`)
    .then(r => r.json())
    .then(results => {
      if (results && results.length > 0) {
        const item = results[0];
        const lat = parseFloat(item.lat);
        const lng = parseFloat(item.lon);
        const name = item.display_name.split(',').slice(0, 2).join(',');

        if (_leafletMap) {
          _leafletMap.flyTo([lat, lng], 8, { duration: 1.2 });
        }
        onMapPointSelected(lat, lng, name);
      } else {
        alert('Kota tidak ditemukan. Silakan geser atau klik langsung pada peta bumi.');
      }
    })
    .catch(() => {
      alert('Gagal mencari kota secara online. Silakan geser atau klik langsung pada peta.');
    });
}

function onMapMethodChange() {
  const methodSelect = document.getElementById('pmm-method-select');
  if (methodSelect) {
    _mapTempState.method = methodSelect.value;
    updateMapPreviewTimes();
  }
}

function onMapTzChange() {
  const tzSelect = document.getElementById('pmm-tz-select');
  if (tzSelect) {
    _mapTempState.timezone = parseFloat(tzSelect.value);
    updateMapLocationHeader();
    updateMapPreviewTimes();
  }
}

function mapUseDeviceGPS() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      pos => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const tz = -new Date().getTimezoneOffset() / 60;

        if (_leafletMap) {
          _leafletMap.flyTo([lat, lng], 9, { duration: 1.2 });
        }
        onMapPointSelected(lat, lng, 'Lokasi GPS Anda', tz);
      },
      () => alert('Tidak dapat mengakses GPS browser Anda.')
    );
  } else {
    alert('Browser tidak mendukung Geolocation.');
  }
}

function confirmApplyMapLocation() {
  _pw.lat = _mapTempState.lat;
  _pw.lng = _mapTempState.lng;
  _pw.timezone = _mapTempState.timezone;
  _pw.locationName = _mapTempState.locationName;
  _pw.method = _mapTempState.method;
  _pw.presetKey = _mapTempState.presetKey;

  localStorage.setItem('qh_prayer_loc', JSON.stringify({
    lat: _pw.lat,
    lng: _pw.lng,
    timezone: _pw.timezone,
    locationName: _pw.locationName,
    presetKey: _pw.presetKey,
    method: _pw.method
  }));

  closePrayerMapModal();
  renderCityChips();
  updatePrayerDisplay();

  if (typeof window.showToast === 'function') {
    window.showToast(`✅ Jadwal sholat berhasil diubah ke ${_pw.locationName}!`);
  }
}

function saveCurrentMapLocationAsCustomCity() {
  const parts = _mapTempState.locationName.split(',');
  const cityName = parts[0].trim();
  const countryName = parts.slice(1).join(',').trim();
  const customCity = {
    id: 'city_' + Date.now(),
    name: _mapTempState.locationName,
    short: cityName,
    flag: '📍',
    lat: _mapTempState.lat,
    lng: _mapTempState.lng,
    timezone: _mapTempState.timezone,
    method: _mapTempState.method
  };

  saveCustomCity(customCity);
  closePrayerMapModal();
  setCustomPrayerCity(customCity.id);

  if (typeof window.showToast === 'function') {
    window.showToast(`✅ ${customCity.short} berhasil disimpan ke daftar kota!`);
  }
}

// ============================================================
// 3B. ADD NEW COUNTRY & CITY MODAL (+)
// ============================================================
function openAddCityModal() {
  closeAddCityModal();

  const overlay = document.createElement('div');
  overlay.className = 'pacm-overlay';
  overlay.id = 'pacm-overlay';

  const curLang = (window.state && window.state.language) || 'id';

  overlay.innerHTML = `
    <div class="pacm-modal" role="dialog" aria-modal="true" aria-label="Tambah Negara dan Kota">
      <div class="pacm-header">
        <div class="pacm-title">
          <span>➕ ${curLang === 'id' ? 'Tambah Negara & Kota Baru' : 'Add New City & Country'}</span>
        </div>
        <button class="pmm-close-btn" onclick="closeAddCityModal()">✕</button>
      </div>

      <div class="pacm-body">
        <!-- Auto Search Bar -->
        <div class="pacm-search-box">
          <div class="pacm-search-desc">
            🔍 <strong>${curLang === 'id' ? 'Pencarian Otomatis:' : 'Auto Search:'}</strong> 
            ${curLang === 'id' 
              ? 'Ketik nama kota dan negara di dunia untuk mengisi koordinat, bendera, dan zona waktu secara otomatis.' 
              : 'Type city and country name to automatically fill coordinates, flag emoji, and timezone.'}
          </div>
          <div class="pacm-search-row">
            <input type="text" id="pacm-search-input" class="pacm-input" placeholder="${curLang === 'id' ? 'Contoh: Tokyo, Seoul, Berlin, Sydney, Bandung...' : 'Example: Tokyo, Seoul, Berlin, Sydney...'}" />
            <button id="pacm-search-btn" class="pacm-search-btn" onclick="autoSearchAddCity()">${curLang === 'id' ? 'Cari & Isi Otomatis 🔍' : 'Search & Fill 🔍'}</button>
          </div>
        </div>

        <!-- Form Fields -->
        <div class="pacm-grid">
          <div class="pacm-field">
            <label class="pacm-label">${curLang === 'id' ? 'Nama Kota:' : 'City Name:'}</label>
            <input type="text" id="pacm-city-name" class="pacm-input" placeholder="Tokyo / Seoul / Bandung" oninput="updateAddCityPreview()" />
          </div>
          <div class="pacm-field">
            <label class="pacm-label">${curLang === 'id' ? 'Nama Negara:' : 'Country Name:'}</label>
            <input type="text" id="pacm-country-name" class="pacm-input" placeholder="Jepang / Korea Selatan / Indonesia" oninput="updateAddCityPreview()" />
          </div>
          <div class="pacm-field">
            <label class="pacm-label">${curLang === 'id' ? 'Bendera / Icon Emoji:' : 'Flag / Icon Emoji:'}</label>
            <input type="text" id="pacm-emoji" class="pacm-input" placeholder="🇯🇵" oninput="updateAddCityPreview()" />
          </div>
          <div class="pacm-field">
            <label class="pacm-label">${curLang === 'id' ? 'Zona Waktu (UTC Offset):' : 'Timezone (UTC Offset):'}</label>
            <select id="pacm-tz" class="pmm-select" onchange="updateAddCityPreview()">
              <option value="-12">UTC-12 (Baker Island)</option>
              <option value="-11">UTC-11 (Samoa)</option>
              <option value="-10">UTC-10 (Hawaii)</option>
              <option value="-9">UTC-9 (Alaska)</option>
              <option value="-8">UTC-8 (Pacific Time / LA)</option>
              <option value="-7">UTC-7 (Mountain Time / Denver)</option>
              <option value="-6">UTC-6 (Central Time / Chicago)</option>
              <option value="-5">UTC-5 (Eastern Time / New York)</option>
              <option value="-4">UTC-4 (Atlantic / Santiago)</option>
              <option value="-3">UTC-3 (Buenos Aires / São Paulo)</option>
              <option value="-2">UTC-2 (Mid-Atlantic)</option>
              <option value="-1">UTC-1 (Azores / Cape Verde)</option>
              <option value="0">UTC+0 (London / Casablanca / GMT)</option>
              <option value="1">UTC+1 (Paris / Berlin / Lagos)</option>
              <option value="2">UTC+2 (Kairo / Yerusalem / Athena)</option>
              <option value="3">UTC+3 (Makkah / Madinah / Istanbul / Moskow)</option>
              <option value="4">UTC+4 (Dubai / Baku)</option>
              <option value="5">UTC+5 (Karachi / Tashkent)</option>
              <option value="5.5">UTC+5:30 (New Delhi / India)</option>
              <option value="6">UTC+6 (Dhaka / Almaty)</option>
              <option value="7" selected>UTC+7 (Jakarta / Bangkok / WIB)</option>
              <option value="8">UTC+8 (Kuala Lumpur / Singapura / WITA)</option>
              <option value="9">UTC+9 (Tokyo / Seoul / WIT)</option>
              <option value="10">UTC+10 (Sydney / Melbourne)</option>
              <option value="11">UTC+11 (Solomon Islands)</option>
              <option value="12">UTC+12 (Auckland / Fiji)</option>
              <option value="13">UTC+13 (Tonga)</option>
              <option value="14">UTC+14 (Line Islands)</option>
            </select>
          </div>
          <div class="pacm-field">
            <label class="pacm-label">Latitude (°):</label>
            <input type="number" step="0.0001" id="pacm-lat" class="pacm-input" placeholder="-6.2088" oninput="updateAddCityPreview()" />
          </div>
          <div class="pacm-field">
            <label class="pacm-label">Longitude (°):</label>
            <input type="number" step="0.0001" id="pacm-lng" class="pacm-input" placeholder="106.8456" oninput="updateAddCityPreview()" />
          </div>
        </div>

        <div class="pacm-field">
          <label class="pacm-label">${curLang === 'id' ? 'Metode Perhitungan Sholat:' : 'Calculation Method:'}</label>
          <select id="pacm-method" class="pmm-select" onchange="updateAddCityPreview()">
            <option value="MWL">Muslim World League (Subuh 18°, Isya 17°)</option>
            <option value="Kemenag" selected>Kemenag RI (Subuh 20°, Isya 18°)</option>
            <option value="Makkah">Umm Al-Qura, Makkah (Subuh 18.5°, Isya +90m)</option>
            <option value="ISNA">ISNA North America (Subuh 15°, Isya 15°)</option>
            <option value="Egypt">Egyptian General Authority (Subuh 19.5°, Isya 17.5°)</option>
            <option value="Karachi">Univ. of Islamic Sciences Karachi (Subuh 18°, Isya 18°)</option>
            <option value="Turkey">Diyanet İşleri Turkey (Subuh 18°, Isya 17°)</option>
          </select>
        </div>

        <!-- Live Preview Box -->
        <div class="pmm-preview-box">
          <div class="pmm-preview-header">
            <span class="pmm-selected-loc" id="pacm-preview-title">📍 Pratinjau Jadwal</span>
            <span class="pmm-selected-meta" id="pacm-preview-meta">Waktu lokal & waktu sholat</span>
          </div>
          <div class="pmm-preview-times" id="pacm-preview-times"></div>
        </div>
      </div>

      <div class="pacm-footer">
        <button class="pacm-btn-cancel" onclick="closeAddCityModal()">${curLang === 'id' ? 'Batal' : 'Cancel'}</button>
        <button class="pacm-btn-save" onclick="confirmSaveAddCity()">💾 ${curLang === 'id' ? 'Simpan & Terapkan (+)' : 'Save & Apply (+)'}</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // Close on backdrop click
  overlay.onclick = (e) => { if (e.target === overlay) closeAddCityModal(); };

  // Enter triggers auto-search
  const searchInput = document.getElementById('pacm-search-input');
  if (searchInput) {
    searchInput.onkeydown = (e) => { if (e.key === 'Enter') autoSearchAddCity(); };
    setTimeout(() => searchInput.focus(), 150);
  }

  // Pre-fill initial defaults (Jakarta / device)
  if (document.getElementById('pacm-city-name')) document.getElementById('pacm-city-name').value = 'Jakarta';
  if (document.getElementById('pacm-country-name')) document.getElementById('pacm-country-name').value = 'Indonesia';
  if (document.getElementById('pacm-emoji')) document.getElementById('pacm-emoji').value = '🇮🇩';
  if (document.getElementById('pacm-lat')) document.getElementById('pacm-lat').value = '-6.2088';
  if (document.getElementById('pacm-lng')) document.getElementById('pacm-lng').value = '106.8456';
  if (document.getElementById('pacm-tz')) document.getElementById('pacm-tz').value = '7';

  updateAddCityPreview();
}

function closeAddCityModal() {
  const overlay = document.getElementById('pacm-overlay');
  if (overlay) overlay.remove();
}

function autoSearchAddCity() {
  const input = document.getElementById('pacm-search-input');
  if (!input || !input.value.trim()) return;

  const btn = document.getElementById('pacm-search-btn');
  const origText = btn ? btn.textContent : '';
  if (btn) btn.textContent = 'Mencari... ⏳';

  const q = input.value.trim();
  fetch(`https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${encodeURIComponent(q)}&limit=1`)
    .then(r => r.json())
    .then(data => {
      if (btn) btn.textContent = origText;
      if (!data || data.length === 0) {
        alert('Kota tidak ditemukan. Anda dapat mengisi data koordinat secara manual.');
        return;
      }
      const item = data[0];
      const addr = item.address || {};
      const cityName = addr.city || addr.town || addr.municipality || addr.county || addr.state || q.split(',')[0].trim();
      const countryName = addr.country || '';
      const countryCode = (addr.country_code || '').toUpperCase();
      const flag = getFlagEmoji(countryCode);
      const lat = parseFloat(item.lat);
      const lng = parseFloat(item.lon);
      const tz = Math.round(lng / 15);

      if (document.getElementById('pacm-city-name')) document.getElementById('pacm-city-name').value = cityName;
      if (document.getElementById('pacm-country-name')) document.getElementById('pacm-country-name').value = countryName;
      if (document.getElementById('pacm-emoji')) document.getElementById('pacm-emoji').value = flag;
      if (document.getElementById('pacm-lat')) document.getElementById('pacm-lat').value = lat.toFixed(4);
      if (document.getElementById('pacm-lng')) document.getElementById('pacm-lng').value = lng.toFixed(4);
      if (document.getElementById('pacm-tz')) document.getElementById('pacm-tz').value = String(tz);

      let method = 'MWL';
      if (countryCode === 'ID') method = 'Kemenag';
      else if (countryCode === 'TR') method = 'Turkey';
      else if (countryCode === 'EG') method = 'Egypt';
      else if (countryCode === 'SA') method = 'Makkah';
      else if (['US', 'CA'].includes(countryCode)) method = 'ISNA';
      else if (['PK', 'IN', 'BD'].includes(countryCode)) method = 'Karachi';
      if (document.getElementById('pacm-method')) document.getElementById('pacm-method').value = method;

      updateAddCityPreview();
    })
    .catch(() => {
      if (btn) btn.textContent = origText;
      alert('Gagal mencari secara online. Anda dapat memasukkan data secara manual.');
    });
}

function updateAddCityPreview() {
  const cityName = document.getElementById('pacm-city-name')?.value.trim() || 'Kota';
  const countryName = document.getElementById('pacm-country-name')?.value.trim() || 'Negara';
  const emoji = document.getElementById('pacm-emoji')?.value.trim() || '📍';
  const lat = parseFloat(document.getElementById('pacm-lat')?.value) || 0;
  const lng = parseFloat(document.getElementById('pacm-lng')?.value) || 0;
  const tz = parseFloat(document.getElementById('pacm-tz')?.value) || 0;
  const method = document.getElementById('pacm-method')?.value || 'MWL';

  const previewTitle = document.getElementById('pacm-preview-title');
  const previewMeta = document.getElementById('pacm-preview-meta');
  const previewTimes = document.getElementById('pacm-preview-times');

  const tzStr = tz >= 0 ? `UTC+${tz}` : `UTC${tz}`;
  if (previewTitle) previewTitle.textContent = `${emoji} ${cityName}, ${countryName} (${tzStr})`;

  const locDate = getTargetLocationDate(tz);
  const curLang = (window.state && window.state.language) || 'id';
  const dateStr = locDate.toLocaleDateString(curLang === 'id' ? 'id-ID' : 'en-US', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });
  const hh = String(locDate.getHours()).padStart(2, '0');
  const mm = String(locDate.getMinutes()).padStart(2, '0');
  const ss = String(locDate.getSeconds()).padStart(2, '0');

  if (previewMeta) {
    previewMeta.textContent = `📅 ${dateStr} • 🕒 ${hh}:${mm}:${ss} • Lat: ${lat.toFixed(2)}°, Lng: ${lng.toFixed(2)}°`;
  }

  const times = calculatePrayerTimes(lat, lng, locDate, tz, method);
  const labels = PRAYER_NAMES[curLang] || PRAYER_NAMES.id;
  const keys = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

  if (previewTimes) {
    previewTimes.innerHTML = keys.map(k => `
      <div class="pmm-pt-card">
        <div class="pmm-pt-name">${labels[k] || k}</div>
        <div class="pmm-pt-time">${times[k]}</div>
      </div>
    `).join('');
  }
}

function confirmSaveAddCity() {
  const cityName = document.getElementById('pacm-city-name')?.value.trim();
  const countryName = document.getElementById('pacm-country-name')?.value.trim();
  const emoji = document.getElementById('pacm-emoji')?.value.trim() || '📍';
  const lat = parseFloat(document.getElementById('pacm-lat')?.value);
  const lng = parseFloat(document.getElementById('pacm-lng')?.value);
  const tz = parseFloat(document.getElementById('pacm-tz')?.value);
  const method = document.getElementById('pacm-method')?.value || 'MWL';

  if (!cityName) {
    alert('Mohon masukkan nama kota.');
    return;
  }
  if (isNaN(lat) || isNaN(lng) || isNaN(tz)) {
    alert('Mohon periksa kembali Latitude, Longitude, dan Zona Waktu.');
    return;
  }

  const customCity = {
    id: 'city_' + Date.now(),
    name: countryName ? `${cityName}, ${countryName}` : cityName,
    short: cityName,
    flag: emoji,
    lat,
    lng,
    timezone: tz,
    method
  };

  saveCustomCity(customCity);
  closeAddCityModal();

  // Switch to this new custom city immediately
  setCustomPrayerCity(customCity.id);

  if (typeof window.showToast === 'function') {
    window.showToast(`✅ ${emoji} ${customCity.name} berhasil ditambahkan & diterapkan!`);
  }
}

// ============================================================
// 4. FEATURE: MEMORIZATION MODE (TAHFIDZ)
// ============================================================
function initMemorizationMode() {
  if (!window.state) window.state = {};
  if (typeof window.state.memorizationMode === 'undefined') {
    window.state.memorizationMode = false;
  }
  if (!window.state.memorizationRevealed) {
    window.state.memorizationRevealed = {};
  }

  const btn = document.getElementById('mem-toggle-btn');
  if (btn) {
    btn.classList.toggle('active', !!window.state.memorizationMode);
  }
}

function toggleMemorizationMode() {
  if (!window.state) window.state = {};
  window.state.memorizationMode = !window.state.memorizationMode;

  const btn = document.getElementById('mem-toggle-btn');
  if (btn) {
    btn.classList.toggle('active', window.state.memorizationMode);
    btn.innerHTML = window.state.memorizationMode ? '✅ Memorize ON' : '📖 Memorize';
  }

  const readerPanel = document.querySelector('.verse-panel, .verses-container, #verses-container');
  if (readerPanel) {
    readerPanel.classList.toggle('memorization-active', window.state.memorizationMode);
  }
  document.body.classList.toggle('memorization-active', window.state.memorizationMode);

  const curSurah = window.state.currentSurah || 1;
  if (window.state.memorizationMode) {
    renderMemorizationView(curSurah);
  } else {
    clearMemorizationView();
  }

  if (typeof window.showToast === 'function') {
    window.showToast(
      window.state.memorizationMode
        ? '📖 Mode Hafalan Aktif — Teks Arab dikaburkan untuk melatih hafalan'
        : '✅ Mode Hafalan Dinonaktifkan',
      'info'
    );
  }
}

function renderMemorizationView(surahId) {
  const cards = document.querySelectorAll('.verse-card');
  if (!cards.length) return;
  const sId = surahId || (window.state && window.state.currentSurah) || 1;

  cards.forEach(card => {
    const arabicEl = card.querySelector('.verse-arabic');
    if (!arabicEl) return;

    let verseNum = null;
    if (card.id && card.id.includes('-')) {
      verseNum = card.id.split('-').pop();
    }
    if (!verseNum) {
      verseNum = card.querySelector('.verse-badge')?.textContent?.trim();
    }
    if (!verseNum) return;

    const key = `${sId}_${verseNum}`;
    const isRevealed = !!window.state.memorizationRevealed[key];

    if (isRevealed) {
      arabicEl.classList.add('mem-revealed');
    } else {
      arabicEl.classList.remove('mem-revealed');
    }

    arabicEl.style.cursor = 'pointer';
    arabicEl.title = isRevealed ? 'Klik untuk sembunyikan ayat' : 'Klik untuk buka hafalan ayat';
    arabicEl.onclick = (e) => {
      e.stopPropagation();
      revealVerse(sId, verseNum);
    };

    const actions = card.querySelector('.verse-actions');
    if (actions) {
      let revBtn = actions.querySelector('.mem-reveal-btn');
      if (!revBtn) {
        revBtn = document.createElement('button');
        revBtn.className = 'verse-btn mem-reveal-btn';
        revBtn.dataset.key = key;
        actions.appendChild(revBtn);
      }
      revBtn.title = isRevealed ? 'Sembunyikan Ayat' : 'Buka / Uji Hafalan';
      revBtn.innerHTML = isRevealed ? '🙈' : '👁️';
      revBtn.onclick = (e) => {
        e.stopPropagation();
        revealVerse(sId, verseNum);
      };
    }
  });

  _renderProgressBar(sId);
}

function revealVerse(surahId, verseNum) {
  const key = `${surahId}_${verseNum}`;
  window.state.memorizationRevealed[key] = !window.state.memorizationRevealed[key];

  const card = document.getElementById(`verse-${surahId}-${verseNum}`);
  if (card) {
    const arabicEl = card.querySelector('.verse-arabic');
    const isRevealed = !!window.state.memorizationRevealed[key];
    if (arabicEl) arabicEl.classList.toggle('mem-revealed', isRevealed);

    const btn = card.querySelector(`.mem-reveal-btn`);
    if (btn) {
      btn.innerHTML = isRevealed ? '🙈' : '👁️';
      btn.title = isRevealed ? 'Sembunyikan Ayat' : 'Buka Ayat';
    }
  }

  _renderProgressBar(surahId);
}

function checkMemorizationProgress(surahId) {
  const sId = surahId || (window.state && window.state.currentSurah) || 1;
  const cards = document.querySelectorAll('.verse-card');
  const total = cards.length;
  if (!total) return { revealed: 0, total: 0, percent: 0 };

  let revealed = 0;
  cards.forEach(card => {
    let verseNum = card.id ? card.id.split('-').pop() : card.querySelector('.verse-badge')?.textContent?.trim();
    if (verseNum && window.state.memorizationRevealed[`${sId}_${verseNum}`]) {
      revealed++;
    }
  });

  return { revealed, total, percent: Math.round((revealed / total) * 100) };
}

function _renderProgressBar(surahId) {
  const { revealed, total, percent } = checkMemorizationProgress(surahId);
  let container = document.getElementById('mem-progress-container');

  if (!container) {
    container = document.createElement('div');
    container.id = 'mem-progress-container';
    container.className = 'mem-progress-container';
    container.innerHTML = `
      <div class="mem-progress-header">
        <span id="mem-progress-label">Hafalan Surah: 0/0 (0%)</span>
        <span id="mem-progress-badge" style="font-weight:700; color:#e5c07b;">0%</span>
      </div>
      <div class="mem-progress-bar-wrap">
        <div class="mem-progress-bar" id="mem-progress-bar" style="width:0%"></div>
      </div>
    `;

    const banner = document.getElementById('bismillah-banner') || document.querySelector('.bismillah-banner');
    if (banner) {
      banner.after(container);
    } else {
      const header = document.querySelector('.surah-header');
      if (header) header.after(container);
    }
  }

  const labelEl = document.getElementById('mem-progress-label');
  const badgeEl = document.getElementById('mem-progress-badge');
  const barEl   = document.getElementById('mem-progress-bar');

  if (labelEl) labelEl.textContent = `Progres Hafalan: ${revealed} dari ${total} ayat terbuka`;
  if (badgeEl) badgeEl.textContent = `${percent}%`;
  if (barEl)   barEl.style.width   = `${percent}%`;
}

function clearMemorizationView() {
  document.querySelectorAll('.mem-reveal-btn').forEach(b => b.remove());
  document.querySelectorAll('.verse-arabic').forEach(el => {
    el.classList.remove('mem-revealed');
    el.style.cursor = '';
    el.title = '';
  });
  const container = document.getElementById('mem-progress-container');
  if (container) container.remove();
}

// ============================================================
// 5. FEATURE: RICH SOCIAL SHARE & CANVAS CARD GENERATOR
// ============================================================
function shareVerseModal(surahId, verseNum, arabicText, translationText) {
  const existing = document.getElementById('share-modal-overlay');
  if (existing) existing.remove();

  const allSurahs = (typeof ALL_SURAHS !== 'undefined' ? ALL_SURAHS : (window.ALL_SURAHS || []));
  const surah = allSurahs.find(s => s.id == surahId || s.number == surahId);
  const surahName = surah ? (surah.name || surah.englishName || `Surah ${surahId}`) : `Surah ${surahId}`;
  const surahArabic = surah ? (surah.ar || surah.arTitle || '') : '';

  const shareText = `${arabicText}\n\n"${translationText}"\n\n— QS. ${surahName} [${surahId}:${verseNum}]\n\n📖 Baca selengkapnya di Quran Harmony`;

  const overlay = document.createElement('div');
  overlay.className = 'share-modal-overlay';
  overlay.id = 'share-modal-overlay';

  overlay.innerHTML = `
    <div class="share-modal" role="dialog" aria-modal="true" aria-label="Share Ayah">
      <div class="share-modal-header">
        <span class="share-modal-title">📤 Bagikan Ayat ${verseNum} — ${surahName}</span>
        <button class="share-modal-close-x" id="sm-close-x">✕</button>
      </div>
      <div class="share-verse-preview">
        <div class="share-preview-arabic">${arabicText}</div>
        <div class="share-preview-translation">"${translationText}"</div>
      </div>
      <div class="share-buttons-grid">
        <button class="share-btn share-btn-wa" id="sm-wa">💬 WhatsApp</button>
        <button class="share-btn share-btn-tw" id="sm-tw">𝕏 Twitter</button>
        <button class="share-btn share-btn-cp" id="sm-cp">📋 Salin Teks</button>
        <button class="share-btn share-btn-dl" id="sm-dl">🖼️ Kartu Gambar</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  document.getElementById('sm-close-x').onclick = () => overlay.remove();
  overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };

  document.getElementById('sm-wa').onclick = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank', 'noopener');
  };

  document.getElementById('sm-tw').onclick = () => {
    const tweet = shareText.length > 275 ? shareText.substring(0, 272) + '...' : shareText;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`, '_blank', 'noopener');
  };

  document.getElementById('sm-cp').onclick = () => {
    navigator.clipboard.writeText(shareText).then(() => {
      if (typeof window.showToast === 'function') window.showToast('✅ Teks ayat berhasil disalin!');
    });
  };

  document.getElementById('sm-dl').onclick = () => {
    downloadVerseCard(surahId, verseNum, arabicText, translationText, surahName, surahArabic);
  };
}

function downloadVerseCard(surahId, verseNum, arabicText, translationText, surahName, surahArabic) {
  const W = 1200;
  const H = 675;
  const canvas = document.createElement('canvas');
  canvas.width  = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  // Background Gradient
  const bgGrad = ctx.createLinearGradient(0, 0, W, H);
  bgGrad.addColorStop(0, '#061a14');
  bgGrad.addColorStop(0.5, '#0e3327');
  bgGrad.addColorStop(1, '#174a38');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  // Border & Islamic Accents
  ctx.strokeStyle = 'rgba(229,192,123,0.45)';
  ctx.lineWidth = 3;
  ctx.strokeRect(24, 24, W - 48, H - 48);

  ctx.strokeStyle = 'rgba(229,192,123,0.2)';
  ctx.lineWidth = 1;
  ctx.strokeRect(32, 32, W - 64, H - 64);

  // Ornamental Corners
  const cs = 36;
  [[32, 32], [W - 32, 32], [32, H - 32], [W - 32, H - 32]].forEach(([x, y]) => {
    ctx.strokeStyle = '#e5c07b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x - cs/2, y); ctx.lineTo(x + cs/2, y);
    ctx.moveTo(x, y - cs/2); ctx.lineTo(x + cs/2, y);
    ctx.stroke();
  });

  // Header Title
  ctx.fillStyle = '#e5c07b';
  ctx.font = 'bold 24px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(`SURAH ${surahName.toUpperCase()} — AYAT ${verseNum}`, W / 2, 75);

  ctx.strokeStyle = 'rgba(229,192,123,0.3)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(W / 2 - 160, 95);
  ctx.lineTo(W / 2 + 160, 95);
  ctx.stroke();

  // Arabic Ayah Text
  ctx.fillStyle = '#ffffff';
  ctx.font = '36px "Amiri Quran", "Amiri", serif';
  ctx.textAlign = 'center';
  ctx.direction = 'rtl';

  const arabicLines = _wrapCanvasText(ctx, arabicText, W - 180);
  let arabicY = 175;
  arabicLines.forEach(line => {
    ctx.fillText(line, W / 2, arabicY);
    arabicY += 60;
  });

  // Translation Text
  ctx.direction = 'ltr';
  ctx.fillStyle = '#c8e6c9';
  ctx.font = 'italic 20px sans-serif';
  ctx.textAlign = 'center';

  const transMax = translationText.length > 250 ? translationText.substring(0, 247) + '...' : translationText;
  const transLines = _wrapCanvasText(ctx, `"${transMax}"`, W - 220);
  let transY = Math.max(arabicY + 30, 420);
  transLines.forEach(line => {
    ctx.fillText(line, W / 2, transY);
    transY += 34;
  });

  // Footer Branding
  ctx.fillStyle = 'rgba(229,192,123,0.7)';
  ctx.font = 'bold 16px sans-serif';
  ctx.fillText('📖 Quran Harmony — Spiritual Journey', W / 2, H - 45);

  // Trigger Download
  const link = document.createElement('a');
  link.download = `quran-harmony-surah-${surahId}-ayah-${verseNum}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();

  if (typeof window.showToast === 'function') {
    window.showToast('🖼️ Kartu gambar ayat berhasil diunduh!');
  }
}

function _wrapCanvasText(ctx, text, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let current = '';

  words.forEach(word => {
    const test = current ? `${current} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  });
  if (current) lines.push(current);
  return lines;
}

// ============================================================
// 6. FEATURE: FULL-TEXT SEARCH (VERSES & TRANSLATIONS)
// ============================================================
function searchVerseContent(query) {
  if (!query || query.trim().length < 2) return [];
  const q = query.trim().toLowerCase();
  const results = [];

  const verseSources = (typeof VERSES !== 'undefined' ? VERSES : (window.VERSES || window.state?.verses || {}));
  const allSurahs = (typeof ALL_SURAHS !== 'undefined' ? ALL_SURAHS : (window.ALL_SURAHS || []));

  for (const [surahKey, verseList] of Object.entries(verseSources)) {
    if (!Array.isArray(verseList)) continue;
    const sId = parseInt(surahKey, 10);
    const surahObj = allSurahs.find(s => s.id === sId);
    const surahName = surahObj ? surahObj.name : `Surah ${sId}`;

    for (const v of verseList) {
      const idText = (v.id || '').toLowerCase();
      const enText = (v.en || '').toLowerCase();
      const latinText = (v.latin || '').toLowerCase();
      const arText = (v.ar || v.ar_kemenag || '').toLowerCase();

      let matchType = null;
      let matchedText = '';

      if (idText.includes(q)) {
        matchType = 'id';
        matchedText = v.id;
      } else if (enText.includes(q)) {
        matchType = 'en';
        matchedText = v.en;
      } else if (latinText.includes(q)) {
        matchType = 'latin';
        matchedText = v.latin;
      } else if (arText.includes(q)) {
        matchType = 'ar';
        matchedText = v.ar;
      }

      if (matchType) {
        const idx = matchedText.toLowerCase().indexOf(q);
        const start = Math.max(0, idx - 35);
        const end = Math.min(matchedText.length, idx + q.length + 50);
        const snippet = (start > 0 ? '…' : '') + matchedText.substring(start, end) + (end < matchedText.length ? '…' : '');

        results.push({
          surahId: sId,
          verseNum: v.num,
          surahName,
          snippet,
          matchType
        });

        if (results.length >= 6) return results;
      }
    }
  }

  return results;
}

function renderVerseSearchResults(results, query, container) {
  if (!container) return;
  if (!results.length) {
    container.innerHTML = '';
    return;
  }

  const q = query.trim();
  const escapedQ = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`(${escapedQ})`, 'gi');

  container.innerHTML = `
    <div class="search-section-header">
      <span>📖 Ayat & Terjemahan (${results.length})</span>
    </div>
    <div class="verse-search-results">
      ${results.map(r => {
        const highlighted = r.snippet.replace(re, '<span class="vsi-highlight">$1</span>');
        return `
          <div class="verse-search-item" data-surah="${r.surahId}" data-verse="${r.verseNum}" role="option" tabindex="0">
            <div class="vsi-header">
              <span>QS. ${r.surahName}</span>
              <span>Ayat ${r.verseNum}</span>
            </div>
            <div class="vsi-snippet">${highlighted}</div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  container.querySelectorAll('.verse-search-item').forEach(item => {
    const handleSelect = () => {
      const surahId = parseInt(item.dataset.surah, 10);
      const verseNum = parseInt(item.dataset.verse, 10);

      if (typeof window.jumpToVerse === 'function') {
        window.jumpToVerse(surahId, verseNum);
      } else if (typeof window.loadSurah === 'function') {
        window.loadSurah(surahId, verseNum);
        if (typeof window.navigateTo === 'function') window.navigateTo('quran');
        if (typeof window.switchQuranView === 'function') window.switchQuranView('reader');
      }

      if (typeof window.hideSearchDropdown === 'function') {
        window.hideSearchDropdown();
      }
      const dropdown = document.getElementById('search-dropdown');
      if (dropdown) dropdown.style.display = 'none';
    };

    item.onclick = handleSelect;
    item.onkeydown = (e) => { if (e.key === 'Enter') handleSelect(); };
  });
}

function upgradeGlobalSearch() {
  const searchInput = document.getElementById('main-search');
  const dropdown = document.getElementById('search-dropdown');
  if (!searchInput || !dropdown) return;

  let panel = document.getElementById('verse-content-results');
  if (!panel) {
    panel = document.createElement('div');
    panel.id = 'verse-content-results';
    dropdown.appendChild(panel);
  }

  let debounceTimer = null;
  searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const q = searchInput.value.trim();
      if (q.length < 2) {
        panel.innerHTML = '';
        return;
      }
      const results = searchVerseContent(q);
      if (results.length > 0) {
        renderVerseSearchResults(results, q, panel);
        dropdown.style.display = 'block';
      } else {
        panel.innerHTML = '';
      }
    }, 300);
  });
}

// ============================================================
// 7. GLOBAL EXPOSURE & INITIALIZATION
// ============================================================
window.calculatePrayerTimes    = calculatePrayerTimes;
window.initPrayerWidget        = initPrayerWidget;
window.updatePrayerDisplay     = updatePrayerDisplay;
window.setPrayerPreset         = setPrayerPreset;

window.openPrayerMapModal      = openPrayerMapModal;
window.closePrayerMapModal     = closePrayerMapModal;
window.applyMapPreset          = applyMapPreset;
window.searchMapCity           = searchMapCity;
window.onMapMethodChange       = onMapMethodChange;
window.onMapTzChange           = onMapTzChange;
window.mapUseDeviceGPS         = mapUseDeviceGPS;
window.confirmApplyMapLocation = confirmApplyMapLocation;
window.saveCurrentMapLocationAsCustomCity = saveCurrentMapLocationAsCustomCity;

window.openAddCityModal         = openAddCityModal;
window.closeAddCityModal        = closeAddCityModal;
window.autoSearchAddCity        = autoSearchAddCity;
window.updateAddCityPreview     = updateAddCityPreview;
window.confirmSaveAddCity       = confirmSaveAddCity;
window.getCustomCities          = getCustomCities;
window.saveCustomCity           = saveCustomCity;
window.removeCustomCity         = removeCustomCity;
window.setCustomPrayerCity      = setCustomPrayerCity;
window.renderCityChips          = renderCityChips;
window.getTargetLocationDate    = getTargetLocationDate;

window.initMemorizationMode    = initMemorizationMode;
window.toggleMemorizationMode  = toggleMemorizationMode;
window.renderMemorizationView  = renderMemorizationView;
window.revealVerse             = revealVerse;
window.checkMemorizationProgress = checkMemorizationProgress;
window.clearMemorizationView   = clearMemorizationView;

window.shareVerseModal         = shareVerseModal;
window.downloadVerseCard       = downloadVerseCard;

window.searchVerseContent      = searchVerseContent;
window.renderVerseSearchResults = renderVerseSearchResults;
window.upgradeGlobalSearch     = upgradeGlobalSearch;

function initGlobalFeatures() {
  initPrayerWidget();
  initMemorizationMode();
  setTimeout(upgradeGlobalSearch, 300);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGlobalFeatures);
} else {
  initGlobalFeatures();
}
