// ══════════════════════════════════════════════════════════════
// FEATURES-SHARE.JS — Rich Social Sharing (WhatsApp, Twitter, Canvas)
// Quran Harmony — Global Features
// ══════════════════════════════════════════════════════════════

(function() {
  'use strict';

  // ── CSS ──
  const css = `
    /* Share Modal */
    .share-modal-backdrop {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.55);
      backdrop-filter: blur(4px);
      z-index: 99000;
      align-items: center;
      justify-content: center;
    }
    .share-modal-backdrop.open { display: flex; }
    .share-modal-box {
      background: var(--bg-card, #fff);
      border-radius: 20px;
      width: min(420px, 92vw);
      padding: 28px 24px 24px;
      box-shadow: 0 24px 60px rgba(0,0,0,0.22);
      border: 1px solid var(--border, #e2e8f0);
      position: relative;
      animation: shareModalIn 0.25s cubic-bezier(0.34,1.56,0.64,1) forwards;
    }
    @keyframes shareModalIn {
      from { transform: scale(0.85) translateY(20px); opacity: 0; }
      to   { transform: scale(1) translateY(0); opacity: 1; }
    }
    .share-modal-close {
      position: absolute;
      top: 14px;
      right: 16px;
      background: none;
      border: none;
      font-size: 1.1rem;
      cursor: pointer;
      color: var(--text-muted, #6b7280);
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .share-modal-close:hover { background: var(--bg-hover, #f3f4f6); }
    .share-modal-title {
      font-size: 1rem;
      font-weight: 700;
      color: var(--text-primary, #111827);
      margin-bottom: 4px;
    }
    .share-modal-ref {
      font-size: 0.78rem;
      color: var(--text-muted, #6b7280);
      margin-bottom: 14px;
    }
    .share-verse-preview {
      background: linear-gradient(135deg, var(--sage-900, #0d382d), #0a2e24);
      border-radius: 14px;
      padding: 16px 18px;
      margin-bottom: 18px;
      text-align: right;
    }
    .share-verse-arabic {
      font-family: var(--font-arabic, 'Amiri Quran', serif);
      font-size: 1.5rem;
      color: #fff;
      line-height: 1.8;
      margin-bottom: 10px;
      direction: rtl;
    }
    .share-verse-trans {
      font-size: 0.82rem;
      color: rgba(255,255,255,0.7);
      font-style: italic;
      text-align: left;
      line-height: 1.5;
      border-top: 1px solid rgba(255,255,255,0.12);
      padding-top: 8px;
      margin-top: 4px;
    }
    .share-verse-ref-badge {
      display: inline-block;
      background: rgba(229,192,123,0.2);
      color: var(--accent-gold, #e5c07b);
      font-size: 0.7rem;
      font-weight: 700;
      padding: 2px 10px;
      border-radius: 20px;
      margin-bottom: 8px;
      letter-spacing: 0.04em;
    }
    .share-buttons-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    .share-btn {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 14px;
      border-radius: 12px;
      border: 1.5px solid var(--border, #e2e8f0);
      background: var(--bg-input, #f9fafb);
      cursor: pointer;
      transition: all 0.15s;
      text-decoration: none;
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--text-primary, #111827);
    }
    .share-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    .share-btn-icon { font-size: 1.3rem; flex-shrink: 0; }
    .share-btn-label { font-size: 0.8rem; color: var(--text-muted, #6b7280); font-weight: 400; }
    .share-btn.whatsapp { border-color: #25d366; background: #f0fdf4; }
    .share-btn.whatsapp:hover { background: #dcfce7; }
    .share-btn.twitter { border-color: #1da1f2; background: #eff6ff; }
    .share-btn.twitter:hover { background: #dbeafe; }
    .share-btn.copy { border-color: var(--sage-300, #86efac); background: rgba(45,106,79,0.05); }
    .share-btn.copy:hover { background: rgba(45,106,79,0.1); }
    .share-btn.download { border-color: rgba(229,192,123,0.4); background: rgba(229,192,123,0.06); }
    .share-btn.download:hover { background: rgba(229,192,123,0.12); }
    
    /* Verse card share button */
    .verse-share-btn {
      padding: 4px 10px;
      border-radius: 8px;
      border: 1px solid var(--border, #e2e8f0);
      background: transparent;
      font-size: 0.78rem;
      cursor: pointer;
      color: var(--text-secondary, #374151);
      transition: all 0.15s;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    .verse-share-btn:hover {
      background: rgba(45,106,79,0.08);
      border-color: var(--sage-400, #52b788);
      color: var(--sage-700, #1b4332);
    }
  `;

  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ── Inject share modal HTML ──
  function injectShareModal() {
    if (document.getElementById('share-modal-backdrop')) return;
    const modal = document.createElement('div');
    modal.id = 'share-modal-backdrop';
    modal.className = 'share-modal-backdrop';
    modal.innerHTML = `
      <div class="share-modal-box" onclick="event.stopPropagation()">
        <button class="share-modal-close" onclick="window.closeShareModal()" aria-label="Close">✕</button>
        <div id="share-modal-content"></div>
      </div>`;
    modal.addEventListener('click', () => window.closeShareModal());
    document.body.appendChild(modal);
  }

  // ── Open share modal ──
  function shareVerseModal(surahId, verseNum, arabicText, translationText) {
    injectShareModal();
    const modal = document.getElementById('share-modal-backdrop');
    const content = document.getElementById('share-modal-content');
    if (!modal || !content) return;

    const lang = (window.state && window.state.language) || 'en';
    const isEn = lang === 'en';
    const ALL_SURAHS = window.ALL_SURAHS || [];
    const surahInfo = ALL_SURAHS.find(s => s.id === surahId);
    const surahName = surahInfo ? surahInfo.name : `Surah ${surahId}`;
    const refLabel = `${surahName} ${surahId}:${verseNum}`;

    // Clean text for sharing
    const cleanTrans = translationText.replace(/"/g, '').trim();
    const shareText = `${arabicText}\n\n"${cleanTrans}"\n\n— Al-Qur'an, ${refLabel}\n\nQuran Harmony App`;
    const encodedText = encodeURIComponent(shareText);
    const shortText = `"${cleanTrans.substring(0, 120)}${cleanTrans.length > 120 ? '…' : ''}" — ${refLabel} (Al-Qur'an)`;
    const encodedShort = encodeURIComponent(shortText + '\n\n#Quran #Islam #QuranHarmony');

    content.innerHTML = `
      <div class="share-modal-title">
        ${isEn ? '📤 Share This Verse' : '📤 Bagikan Ayat Ini'}
      </div>
      <div class="share-modal-ref">${refLabel}</div>
      <div class="share-verse-preview">
        <div class="share-verse-ref-badge">Qur'an ${surahId}:${verseNum}</div>
        <div class="share-verse-arabic">${arabicText}</div>
        <div class="share-verse-trans">${cleanTrans}</div>
      </div>
      <div class="share-buttons-grid">
        <button class="share-btn whatsapp" onclick="window.shareToWhatsApp('${escapeForAttr(shareText)}')">
          <span class="share-btn-icon">💬</span>
          <div>
            <div>WhatsApp</div>
            <div class="share-btn-label">${isEn ? 'Send to contacts' : 'Kirim ke kontak'}</div>
          </div>
        </button>
        <button class="share-btn twitter" onclick="window.shareToTwitter('${escapeForAttr(shortText)}')">
          <span class="share-btn-icon">🐦</span>
          <div>
            <div>Twitter / X</div>
            <div class="share-btn-label">${isEn ? 'Post to timeline' : 'Posting ke timeline'}</div>
          </div>
        </button>
        <button class="share-btn copy" onclick="window.copyVerseText('${escapeForAttr(arabicText)}', '${escapeForAttr(cleanTrans)}', '${escapeForAttr(refLabel)}')">
          <span class="share-btn-icon">📋</span>
          <div>
            <div>${isEn ? 'Copy Text' : 'Salin Teks'}</div>
            <div class="share-btn-label">${isEn ? 'Arabic + translation' : 'Arab + terjemahan'}</div>
          </div>
        </button>
        <button class="share-btn download" onclick="window.downloadVerseCard(${surahId}, ${verseNum}, '${escapeForAttr(arabicText)}', '${escapeForAttr(cleanTrans)}', '${escapeForAttr(refLabel)}')">
          <span class="share-btn-icon">🖼️</span>
          <div>
            <div>${isEn ? 'Save as Image' : 'Simpan Gambar'}</div>
            <div class="share-btn-label">${isEn ? 'PNG card (share ready)' : 'Kartu PNG siap share'}</div>
          </div>
        </button>
      </div>`;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeShareModal() {
    const modal = document.getElementById('share-modal-backdrop');
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function escapeForAttr(str) {
    if (!str) return '';
    return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;').replace(/\n/g, '\\n');
  }

  // ── Share actions ──
  function shareToWhatsApp(text) {
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  function shareToTwitter(text) {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text + '\n\n#Quran #Islam #QuranHarmony')}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  function copyVerseText(arabicText, translationText, refLabel) {
    const text = `${arabicText}\n\n"${translationText}"\n\n— ${refLabel} (Al-Qur'an)`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        if (window.showToast) window.showToast('📋 Verse copied to clipboard!', 'success');
      }).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
    closeShareModal();
  }

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px;';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    if (window.showToast) window.showToast('📋 Copied!', 'success');
  }

  // ── Download verse as PNG card ──
  function downloadVerseCard(surahId, verseNum, arabicText, translationText, refLabel) {
    const canvas = document.createElement('canvas');
    const W = 1080, H = 608;
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');

    // Background gradient
    const grad = ctx.createLinearGradient(0, 0, W, H);
    grad.addColorStop(0, '#0d382d');
    grad.addColorStop(1, '#0a2e24');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Decorative border
    ctx.strokeStyle = 'rgba(229,192,123,0.3)';
    ctx.lineWidth = 3;
    ctx.strokeRect(24, 24, W - 48, H - 48);

    // Gold corner accents
    const corners = [[24,24], [W-24,24], [24,H-24], [W-24,H-24]];
    ctx.strokeStyle = 'rgba(229,192,123,0.7)';
    ctx.lineWidth = 2;
    corners.forEach(([cx, cy]) => {
      const len = 30;
      const sx = cx === 24 ? 1 : -1;
      const sy = cy === 24 ? 1 : -1;
      ctx.beginPath();
      ctx.moveTo(cx + sx * len, cy);
      ctx.lineTo(cx, cy);
      ctx.lineTo(cx, cy + sy * len);
      ctx.stroke();
    });

    // Quran Harmony branding
    ctx.font = '600 22px "Segoe UI", sans-serif';
    ctx.fillStyle = 'rgba(229,192,123,0.7)';
    ctx.textAlign = 'center';
    ctx.fillText('Quran Harmony', W / 2, 72);

    // Reference badge
    ctx.font = 'bold 18px "Segoe UI", sans-serif';
    ctx.fillStyle = 'rgba(229,192,123,0.9)';
    ctx.fillText(refLabel, W / 2, 108);

    // Arabic text (fallback system font with RTL support)
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';
    const arabicLines = wrapText(ctx, arabicText, W - 120, 40);
    let yPos = H / 2 - (arabicLines.length * 56) / 2 - 20;
    ctx.font = `bold ${arabicLines.length > 2 ? '42' : '48'}px "Amiri Quran", "Traditional Arabic", serif`;
    arabicLines.forEach(line => {
      ctx.fillText(line, W / 2, yPos);
      yPos += arabicLines.length > 2 ? 58 : 64;
    });

    // Divider
    yPos += 16;
    ctx.strokeStyle = 'rgba(255,255,255,0.15)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(120, yPos);
    ctx.lineTo(W - 120, yPos);
    ctx.stroke();
    yPos += 24;

    // Translation text
    ctx.font = '20px "Segoe UI", Georgia, serif';
    ctx.fillStyle = 'rgba(255,255,255,0.75)';
    ctx.fontStyle = 'italic';
    const transLines = wrapText(ctx, `"${translationText}"`, W - 160, 20);
    transLines.forEach(line => {
      ctx.fillText(line, W / 2, yPos);
      yPos += 30;
    });

    // Bottom watermark
    ctx.font = '14px "Segoe UI", sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.fillText('Al-Qur\'an · Quran Harmony App', W / 2, H - 44);

    // Download
    const link = document.createElement('a');
    link.download = `quran-${surahId}-${verseNum}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();

    if (window.showToast) {
      const lang = (window.state && window.state.language) || 'en';
      const isEn = lang === 'en';
      window.showToast(isEn ? '🖼️ Verse card downloaded!' : '🖼️ Kartu ayat berhasil diunduh!', 'success');
    }
    closeShareModal();
  }

  function wrapText(ctx, text, maxWidth, padding) {
    if (!text) return [''];
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth - padding * 2 && currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines.slice(0, 5); // max 5 lines
  }

  // ── Patch renderVerses to add share button ──
  function patchVerseShareButton() {
    // Observe verses-container for new verse cards
    const container = document.getElementById('verses-container');
    if (!container) return;

    const observer = new MutationObserver(() => {
      container.querySelectorAll('.verse-actions').forEach(actionsEl => {
        const card = actionsEl.closest('.verse-card');
        if (!card || actionsEl.querySelector('.verse-share-btn')) return;

        const idMatch = card.id.match(/verse-(\d+)-(\d+)/);
        if (!idMatch) return;
        const [, surahId, verseNum] = idMatch;

        const lang = (window.state && window.state.language) || 'en';
        const isEn = lang === 'en';

        const shareBtn = document.createElement('button');
        shareBtn.className = 'verse-btn verse-share-btn';
        shareBtn.title = isEn ? 'Share Verse' : 'Bagikan Ayat';
        shareBtn.innerHTML = '📤';
        shareBtn.onclick = () => {
          const arabicEl = card.querySelector('.verse-arabic');
          const transEl = card.querySelector('.verse-translation');
          const arabic = arabicEl ? arabicEl.textContent.trim() : '';
          const trans = transEl ? transEl.textContent.trim() : '';
          window.shareVerseModal(parseInt(surahId), parseInt(verseNum), arabic, trans);
        };
        actionsEl.appendChild(shareBtn);
      });
    });

    observer.observe(container, { childList: true, subtree: true });
  }

  // ── Exports ──
  window.shareVerseModal = shareVerseModal;
  window.closeShareModal = closeShareModal;
  window.shareToWhatsApp = shareToWhatsApp;
  window.shareToTwitter = shareToTwitter;
  window.copyVerseText = copyVerseText;
  window.downloadVerseCard = downloadVerseCard;

  // ── Auto-init ──
  function init() {
    injectShareModal();
    setTimeout(patchVerseShareButton, 700);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

