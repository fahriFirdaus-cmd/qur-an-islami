// ══════════════════════════════════════════════════════════════
// FEATURES-PRAYER.JS — Prayer Times Widget (No API needed)
// Uses astronomical calculation (MWL method)
// Quran Harmony — Global Features
// ══════════════════════════════════════════════════════════════

(function() {
  'use strict';

  // ── Inject CSS ──
  const css = `
    /* Prayer Times Widget */
    .prayer-times-widget {
      background: linear-gradient(135deg, var(--sage-900, #0d382d) 0%, #0a2e24 100%);
      border-radius: 18px;
      padding: 20px 24px 18px;
      margin: 0 0 20px 0;
      color: #fff;
      box-shadow: 0 8px 30px rgba(13,56,45,0.28);
      border: 1px solid rgba(229,192,123,0.15);
    }
    .pw-header {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 16px;
    }
    .pw-title {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--accent-gold, #e5c07b);
      letter-spacing: 0.02em;
    }
    .pw-location {
      font-size: 0.75rem;
      color: rgba(255,255,255,0.55);
      background: rgba(255,255,255,0.08);
      border-radius: 20px;
      padding: 2px 10px;
      max-width: 180px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .pw-date {
      margin-left: auto;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.5);
    }
    .pw-times-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 8px;
      margin-bottom: 14px;
    }
    @media (max-width: 640px) {
      .pw-times-grid { grid-template-columns: repeat(3, 1fr); }
    }
    @media (max-width: 400px) {
      .pw-times-grid { grid-template-columns: repeat(2, 1fr); }
    }
    .pw-time-card {
      background: rgba(255,255,255,0.07);
      border-radius: 10px;
      padding: 10px 8px;
      text-align: center;
      transition: background 0.2s;
      border: 1px solid rgba(255,255,255,0.06);
      position: relative;
    }
    .pw-time-card.next-prayer {
      background: rgba(229,192,123,0.18);
      border-color: rgba(229,192,123,0.4);
    }
    .pw-time-card.passed {
      opacity: 0.45;
    }
    .pw-prayer-icon { font-size: 1.1rem; margin-bottom: 4px; }
    .pw-prayer-name {
      font-size: 0.68rem;
      font-weight: 600;
      color: rgba(255,255,255,0.6);
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .pw-prayer-time {
      font-size: 1rem;
      font-weight: 700;
      color: #fff;
      letter-spacing: 0.02em;
    }
    .pw-time-card.next-prayer .pw-prayer-time {
      color: var(--accent-gold, #e5c07b);
    }
    .pw-next-badge {
      position: absolute;
      top: -6px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--accent-gold, #e5c07b);
      color: #0d382d;
      font-size: 0.58rem;
      font-weight: 800;
      padding: 1px 7px;
      border-radius: 20px;
      white-space: nowrap;
      letter-spacing: 0.05em;
    }
    .pw-next-prayer {
      background: rgba(255,255,255,0.06);
      border-radius: 10px;
      padding: 10px 16px;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .pw-next-label {
      font-size: 0.75rem;
      color: rgba(255,255,255,0.55);
    }
    .pw-next-name {
      font-size: 0.9rem;
      font-weight: 700;
      color: var(--accent-gold, #e5c07b);
    }
    .pw-countdown {
      margin-left: auto;
      font-size: 1.1rem;
      font-weight: 800;
      color: #fff;
      letter-spacing: 0.04em;
      font-variant-numeric: tabular-nums;
    }
  `;

  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ── Astronomical helpers ──
  function toRad(d) { return d * Math.PI / 180; }
  function toDeg(r) { return r * 180 / Math.PI; }
  function fixHour(h) { return h - 24 * Math.floor(h / 24); }
  function fixAngle(a) { return a - 360 * Math.floor(a / 360); }

  function julianDate(year, month, day) {
    if (month <= 2) { year -= 1; month += 12; }
    const A = Math.floor(year / 100);
    const B = 2 - A + Math.floor(A / 4);
    return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + B - 1524.5;
  }

  function sunPosition(jd) {
    const D = jd - 2451545.0;
    const g = fixAngle(357.529 + 0.98560028 * D);
    const q = fixAngle(280.459 + 0.98564736 * D);
    const L = fixAngle(q + 1.915 * Math.sin(toRad(g)) + 0.020 * Math.sin(toRad(2 * g)));
    const e = 23.439 - 0.00000036 * D;
    const RA = toDeg(Math.atan2(Math.cos(toRad(e)) * Math.sin(toRad(L)), Math.cos(toRad(L)))) / 15;
    const eqt = q / 15 - fixHour(RA);
    const decl = toDeg(Math.asin(Math.sin(toRad(e)) * Math.sin(toRad(L))));
    return { decl, eqt };
  }

  function computeTime(angle, lat, decl, eqt) {
    const cosT = (Math.cos(toRad(angle)) - Math.sin(toRad(lat)) * Math.sin(toRad(decl))) /
                 (Math.cos(toRad(lat)) * Math.cos(toRad(decl)));
    if (cosT < -1) return 0; // polar night
    if (cosT > 1) return 12;  // polar day
    return toDeg(Math.acos(cosT)) / 15;
  }

  function asrTime(factor, lat, decl, eqt) {
    const angle = -toDeg(Math.atan(1 / (factor + Math.tan(toRad(Math.abs(lat - decl))))));
    return computeTime(angle, lat, decl, eqt);
  }

  function calculatePrayerTimes(lat, lng, date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const jd = julianDate(year, month, day);
    const { decl, eqt } = sunPosition(jd);

    const timezone = -(date.getTimezoneOffset() / 60);

    // MWL angles: Fajr 18°, Isha 17°
    const fajrAngle = 18;
    const ishaAngle = 17;

    const noon = 12 - eqt + (lng / 15 - timezone); // True solar noon
    const sunriseT = noon - computeTime(0.833, lat, decl, eqt);
    const sunsetT  = noon + computeTime(0.833, lat, decl, eqt);
    const fajrT    = noon - computeTime(fajrAngle, lat, decl, eqt);
    const dhuhrT   = noon;
    const asrT     = noon + asrTime(1, lat, decl, eqt); // Shafi'i (shadow factor 1)
    const maghribT = sunsetT;
    const ishaT    = noon + computeTime(ishaAngle, lat, decl, eqt);

    function fmt(t) {
      t = fixHour(t);
      const h = Math.floor(t);
      const m = Math.round((t - h) * 60);
      const hh = m === 60 ? h + 1 : h;
      const mm = m === 60 ? 0 : m;
      return `${String(hh % 24).padStart(2,'0')}:${String(mm).padStart(2,'0')}`;
    }

    return {
      Fajr: fmt(fajrT),
      Sunrise: fmt(sunriseT),
      Dhuhr: fmt(dhuhrT),
      Asr: fmt(asrT),
      Maghrib: fmt(maghribT),
      Isha: fmt(ishaT)
    };
  }

  // ── Get countdown ──
  function getCountdown(targetTimeStr) {
    const now = new Date();
    const [h, m] = targetTimeStr.split(':').map(Number);
    const target = new Date(now);
    target.setHours(h, m, 0, 0);
    if (target <= now) target.setDate(target.getDate() + 1);
    const diff = Math.floor((target - now) / 1000);
    const hours = Math.floor(diff / 3600);
    const mins  = Math.floor((diff % 3600) / 60);
    const secs  = diff % 60;
    return `${String(hours).padStart(2,'0')}:${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
  }

  // ── Determine next prayer ──
  function getNextPrayer(times) {
    const now = new Date();
    const nowMins = now.getHours() * 60 + now.getMinutes();
    const order = ['Fajr','Sunrise','Dhuhr','Asr','Maghrib','Isha'];

    for (const name of order) {
      const [h, m] = times[name].split(':').map(Number);
      if (h * 60 + m > nowMins) return name;
    }
    return 'Fajr'; // Next day Fajr
  }

  // ── Prayer icons & names ──
  const PRAYER_META = {
    Fajr:    { icon: '🌙', nameEn: 'Fajr',    nameId: 'Subuh'   },
    Sunrise: { icon: '🌅', nameEn: 'Sunrise',  nameId: 'Syuruk'  },
    Dhuhr:   { icon: '☀️', nameEn: 'Dhuhr',   nameId: 'Zuhur'   },
    Asr:     { icon: '🌤️', nameEn: 'Asr',     nameId: 'Ashar'   },
    Maghrib: { icon: '🌇', nameEn: 'Maghrib',  nameId: 'Maghrib' },
    Isha:    { icon: '🌌', nameEn: 'Isha',     nameId: 'Isya'    }
  };

  // ── Render widget ──
  let prayerTimes = null;
  let countdownTimer = null;
  let userCity = '';

  function renderPrayerWidget(times, city) {
    const placeholder = document.getElementById('prayer-widget-placeholder');
    if (!placeholder) return;

    const lang = (window.state && window.state.language) || 'en';
    const isEn = lang === 'en';
    const nextPrayer = getNextPrayer(times);
    const now = new Date();
    const nowMins = now.getHours() * 60 + now.getMinutes();

    const dateStr = now.toLocaleDateString(isEn ? 'en-US' : 'id-ID', {
      weekday: 'short', day: 'numeric', month: 'short'
    });

    const timesHtml = Object.entries(times).map(([name, time]) => {
      const meta = PRAYER_META[name];
      const displayName = isEn ? meta.nameEn : meta.nameId;
      const [h, m] = time.split(':').map(Number);
      const tMins = h * 60 + m;
      const isPassed = tMins < nowMins;
      const isNext = name === nextPrayer;

      return `
        <div class="pw-time-card ${isNext ? 'next-prayer' : ''} ${isPassed && !isNext ? 'passed' : ''}">
          ${isNext ? `<div class="pw-next-badge">${isEn ? 'NEXT' : 'BERIKUTNYA'}</div>` : ''}
          <div class="pw-prayer-icon">${meta.icon}</div>
          <div class="pw-prayer-name">${displayName}</div>
          <div class="pw-prayer-time">${time}</div>
        </div>`;
    }).join('');

    const nextMeta = PRAYER_META[nextPrayer];
    const nextName = isEn ? nextMeta.nameEn : nextMeta.nameId;

    placeholder.innerHTML = `
      <div class="prayer-times-widget" id="prayer-widget">
        <div class="pw-header">
          <span class="pw-title">🕌 ${isEn ? 'Prayer Times' : 'Jadwal Sholat'}</span>
          <span class="pw-location" id="pw-location">${city || (isEn ? 'Your Location' : 'Lokasi Kamu')}</span>
          <span class="pw-date">${dateStr}</span>
        </div>
        <div class="pw-times-grid" id="pw-times-grid">${timesHtml}</div>
        <div class="pw-next-prayer">
          <div>
            <div class="pw-next-label">${isEn ? 'Next Prayer' : 'Sholat Berikutnya'}</div>
            <div class="pw-next-name">${nextMeta.icon} ${nextName}</div>
          </div>
          <div class="pw-countdown" id="pw-countdown">${getCountdown(times[nextPrayer])}</div>
        </div>
      </div>`;

    // Start countdown timer
    if (countdownTimer) clearInterval(countdownTimer);
    countdownTimer = setInterval(() => {
      const el = document.getElementById('pw-countdown');
      if (el) el.textContent = getCountdown(times[nextPrayer]);
    }, 1000);
  }

  // ── Reverse geocode city name (no API key needed) ──
  function getCityName(lat, lng, callback) {
    // Use nominatim (free, no key required)
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&zoom=10&addressdetails=1`;
    fetch(url, { headers: { 'Accept-Language': 'en' } })
      .then(r => r.json())
      .then(data => {
        const city = data.address?.city || data.address?.town || data.address?.county || data.address?.state || '';
        const country = data.address?.country_code?.toUpperCase() || '';
        callback(city ? `${city}, ${country}` : `${lat.toFixed(2)}, ${lng.toFixed(2)}`);
      })
      .catch(() => callback(`${lat.toFixed(2)}, ${lng.toFixed(2)}`));
  }

  // ── Main init ──
  function initPrayerWidget() {
    const placeholder = document.getElementById('prayer-widget-placeholder');
    if (!placeholder) return;

    const today = new Date();

    // Show loading state
    placeholder.innerHTML = `
      <div class="prayer-times-widget">
        <div class="pw-header">
          <span class="pw-title">🕌 Prayer Times</span>
          <span class="pw-location">Detecting location…</span>
        </div>
        <div style="text-align:center;padding:20px;color:rgba(255,255,255,0.4);font-size:0.85rem">
          ⌛ Calculating prayer times…
        </div>
      </div>`;

    function useCoords(lat, lng) {
      prayerTimes = calculatePrayerTimes(lat, lng, today);
      getCityName(lat, lng, (city) => {
        userCity = city;
        renderPrayerWidget(prayerTimes, city);
      });
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => useCoords(pos.coords.latitude, pos.coords.longitude),
        () => useCoords(-6.2088, 106.8456), // Jakarta fallback
        { timeout: 5000 }
      );
    } else {
      useCoords(-6.2088, 106.8456);
    }
  }

  // ── Re-render on language change ──
  const origApply = window.applyLanguage;
  window.applyLanguage = function(lang, notify) {
    if (typeof origApply === 'function') origApply(lang, notify);
    if (prayerTimes) {
      setTimeout(() => renderPrayerWidget(prayerTimes, userCity), 50);
    }
  };

  // ── Exports ──
  window.calculatePrayerTimes = calculatePrayerTimes;
  window.initPrayerWidget = initPrayerWidget;

  // ── Auto-init ──
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPrayerWidget);
  } else {
    initPrayerWidget();
  }

})();

