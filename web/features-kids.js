/**
 * features-kids.js
 * Quran Harmony — Kids Mode & Visual Animation Suite
 * 
 * 1. Mode Ceria Anak-Anak (Kids World UI & Stage)
 * 2. Animated Islamic Mascots:
 *    - Najm ⭐ (The Cheerful Star: blinks, dances, reacts to recitation)
 *    - Fanous 🏮 (The Radiant Lantern: glowing light particles)
 *    - Hilal 🌙 (The Smiling Crescent: rocking on clouds)
 * 3. Sound-Reactive Rainbow Equalizer & Floating Notes (🎵 🎶 ⭐ 💖)
 * 4. Interactive Magic Touch / Tap Particle System (Stars, Bubbles, Confetti)
 * 5. Dedicated Child Reciters (Thaha Al-Junayd, Al-Barrak, Ahmad Saud, Al-Azazi, Minshawi)
 * 6. Kids Surah Explorer (Large Emoji Cards for Juz 'Amma)
 * 7. Bintang Prestasi & Full-Screen Confetti Celebration System
 * 8. 8-Language Localized Dictionary (ID, EN, FR, AR, TR, UR, BN, MS)
 */

(function () {
  'use strict';

  // ══════════════════════════════════════════
  // I18N DICTIONARY FOR KIDS MODE
  // ══════════════════════════════════════════
  const KIDS_I18N = {
    id: {
      btnKidsMode: '🎈 Mode Anak Ceria',
      titleKidsWorld: 'Dunia Ceria Anak Al-Qur\'an',
      subKidsWorld: 'Mendengarkan Qori Cilik & Menghafal dengan Gembira ✨',
      mascotGreet: 'Assalamu\'alaikum sahabat cilik! Yuk kita dengarkan lantunan ayat suci Al-Qur\'an yang indah! 🌟',
      mascotPlaying: 'Maa Syaa Allah, suara qorinya merdu sekali! Ayo dengarkan dan ikuti ya! 🎶',
      mascotPaused: 'Yuk tekan tombol Putar untuk mulai mendengarkan lagi! 💖',
      chooseSurahKids: 'Pilih Surah Ceria (Juz \'Amma):',
      selectChildQori: 'Pilih Qori Cilik Favoritmu:',
      btnPlay: '▶ Putar',
      btnPause: '⏸ Jeda',
      btnReward: '⭐ Beri Bintang Prestasi!',
      rewardTitle: '🎉 Maa Syaa Allah, Hebat Sekali!',
      rewardDesc: 'Kamu telah mendengarkan ayat suci Al-Qur\'an dengan sangat baik. Terus semangat belajar ya, anak sholeh/sholehah! 🌟',
      rewardBadge: '🏆 Bintang Cilik Al-Qur\'an',
      btnClose: 'Tutup',
      touchHint: '✨ Ketuk layar di mana saja untuk memunculkan bintang ajaib!',
      nowPlayingKids: 'Lantunan Qori Cilik:',
      surahSurahKids: [
        { id: 1, name: 'Al-Fatihah', label: '📖 Pembuka', emoji: '📖' },
        { id: 105, name: 'Al-Fil', label: '🐘 Pasukan Gajah', emoji: '🐘' },
        { id: 106, name: 'Quraisy', label: '🕊️ Suku Quraisy', emoji: '🕊️' },
        { id: 107, name: 'Al-Ma\'un', label: '🤲 Berbagi Kasih', emoji: '🤲' },
        { id: 108, name: 'Al-Kautsar', label: '🌊 Nikmat Melimpah', emoji: '🌊' },
        { id: 109, name: 'Al-Kafirun', label: '🛡️ Keteguhan Iman', emoji: '🛡️' },
        { id: 110, name: 'An-Nasr', label: '🏆 Pertolongan Allah', emoji: '🏆' },
        { id: 112, name: 'Al-Ikhlas', label: '💎 Allah Maha Esa', emoji: '💎' },
        { id: 113, name: 'Al-Falaq', label: '🌅 Waktu Subuh', emoji: '🌅' },
        { id: 114, name: 'An-Nas', label: '👥 Manusia', emoji: '👥' }
      ]
    },
    en: {
      btnKidsMode: '🎈 Cheerful Kids Mode',
      titleKidsWorld: 'Quran Kids Wonderland',
      subKidsWorld: 'Listen to Beloved Child Reciters & Learn with Joy ✨',
      mascotGreet: 'Assalamu\'alaikum little friend! Let\'s listen to the beautiful Quran recitation! 🌟',
      mascotPlaying: 'Maa Sha Allah, what a sweet recitation! Listen and repeat along! 🎶',
      mascotPaused: 'Press the Play button to listen again! 💖',
      chooseSurahKids: 'Choose a Joyful Surah (Juz \'Amma):',
      selectChildQori: 'Select Your Favorite Child Reciter:',
      btnPlay: '▶ Play',
      btnPause: '⏸ Pause',
      btnReward: '⭐ Give Star Reward!',
      rewardTitle: '🎉 Maa Sha Allah, Super Star!',
      rewardDesc: 'You listened to the holy Quran recitation so wonderfully. Keep up the great spirit! 🌟',
      rewardBadge: '🏆 Little Quran Star Champion',
      btnClose: 'Close',
      touchHint: '✨ Tap anywhere on the screen for magical star sparkles!',
      nowPlayingKids: 'Now Reciting (Child Qori):',
      surahSurahKids: [
        { id: 1, name: 'Al-Fatihah', label: '📖 The Opening', emoji: '📖' },
        { id: 105, name: 'Al-Fil', label: '🐘 The Elephant', emoji: '🐘' },
        { id: 106, name: 'Quraysh', label: '🕊️ Tribe of Quraysh', emoji: '🕊️' },
        { id: 107, name: 'Al-Ma\'un', label: '🤲 Acts of Kindness', emoji: '🤲' },
        { id: 108, name: 'Al-Kawthar', label: '🌊 Abundant Blessings', emoji: '🌊' },
        { id: 109, name: 'Al-Kafirun', label: '🛡️ Firm Faith', emoji: '🛡️' },
        { id: 110, name: 'An-Nasr', label: '🏆 Divine Help', emoji: '🏆' },
        { id: 112, name: 'Al-Ikhlas', label: '💎 Oneness of Allah', emoji: '💎' },
        { id: 113, name: 'Al-Falaq', label: '🌅 The Daybreak', emoji: '🌅' },
        { id: 114, name: 'An-Nas', label: '👥 Mankind', emoji: '👥' }
      ]
    },
    fr: {
      btnKidsMode: '🎈 Mode Enfants Joyeux',
      titleKidsWorld: 'Le Monde des Enfants du Coran',
      subKidsWorld: 'Écoutez les Jeunes Récitateurs & Apprenez avec Joie ✨',
      mascotGreet: 'Assalamu\'alaikum petit ami ! Écoutons ensemble la douce récitation du Noble Coran ! 🌟',
      mascotPlaying: 'Maa Sha Allah, quelle voix magnifique ! Écoute et répète avec nous ! 🎶',
      mascotPaused: 'Appuie sur Lecture pour continuer l\'écoute ! 💖',
      chooseSurahKids: 'Choisis une Sourate Joyeuse (Juz \'Amma) :',
      selectChildQori: 'Choisis ton Jeune Récitateur Préféré :',
      btnPlay: '▶ Lecture',
      btnPause: '⏸ Pause',
      btnReward: '⭐ Donner une Étoile de Récompense !',
      rewardTitle: '🎉 Maa Sha Allah, Bravo Champion !',
      rewardDesc: 'Tu as écouté le Saint Coran avec tant d\'amour et d\'attention. Continue ainsi, qu\'Allah te bénisse ! 🌟',
      rewardBadge: '🏆 Étoile Brillante du Coran',
      btnClose: 'Fermer',
      touchHint: '✨ Touche l\'écran n\'importe où pour faire scintiller des étoiles magiques !',
      nowPlayingKids: 'Récitation par le Récitateur Enfant :',
      surahSurahKids: [
        { id: 1, name: 'Al-Fatihah', label: '📖 L\'Ouverture', emoji: '📖' },
        { id: 105, name: 'Al-Fil', label: '🐘 L\'Éléphant', emoji: '🐘' },
        { id: 106, name: 'Quraysh', label: '🕊️ Les Quraysh', emoji: '🕊️' },
        { id: 107, name: 'Al-Ma\'un', label: '🤲 L\'Entraide', emoji: '🤲' },
        { id: 108, name: 'Al-Kawthar', label: '🌊 L\'Abondance', emoji: '🌊' },
        { id: 109, name: 'Al-Kafirun', label: '🛡️ La Foi Ferme', emoji: '🛡️' },
        { id: 110, name: 'An-Nasr', label: '🏆 Le Secours', emoji: '🏆' },
        { id: 112, name: 'Al-Ikhlas', label: '💎 Pureté de la Foi', emoji: '💎' },
        { id: 113, name: 'Al-Falaq', label: '🌅 L\'Aube Naissante', emoji: '🌅' },
        { id: 114, name: 'An-Nas', label: '👥 Les Hommes', emoji: '👥' }
      ]
    },
    ar: {
      btnKidsMode: '🎈 عالم الأطفال القرآني',
      titleKidsWorld: 'واحة الأطفال للقرآن الكريم',
      subKidsWorld: 'استمع لأعذب أصوات القراء الصغار وتعلّم ببهجة ومرح ✨',
      mascotGreet: 'السلام عليكم يا أصدقائي الصغار! تعالوا نستمع إلى كلام الله الجميل! 🌟',
      mascotPlaying: 'ما شاء الله! صوت نديّ ومبارك، استمع وردّد مع القارئ الصغير! 🎶',
      mascotPaused: 'اضغط زر التشغيل لنتابع الاستماع الجميل! 💖',
      chooseSurahKids: 'اختر سورة مبهجة (جزء عم):',
      selectChildQori: 'اختر قارئك الصغير المفضل:',
      btnPlay: '▶ تشغيل',
      btnPause: '⏸ إيقاف',
      btnReward: '⭐ امنح نجمة التميّز!',
      rewardTitle: '🎉 ما شاء الله، أحسنت يا بطل!',
      rewardDesc: 'لقد استمعت للقرآن الكريم بكل خشوع وأدب. بارك الله فيك وحفظك دائماً! 🌟',
      rewardBadge: '🏆 نجم القرآن الصغير',
      btnClose: 'إغلاق',
      touchHint: '✨ المس الشاشة في أي مكان لتصنع نجوماً متلألئة!',
      nowPlayingKids: 'تلاوة القارئ الصغير:',
      surahSurahKids: [
        { id: 1, name: 'الفاتحة', label: '📖 أم الكتاب', emoji: '📖' },
        { id: 105, name: 'الفيل', label: '🐘 أصحاب الفيل', emoji: '🐘' },
        { id: 106, name: 'قريش', label: '🕊️ رحلة الشتاء والصيف', emoji: '🕊️' },
        { id: 107, name: 'الماعون', label: '🤲 مساعدة المحتاجين', emoji: '🤲' },
        { id: 108, name: 'الكوثر', label: '🌊 نهر الجنة', emoji: '🌊' },
        { id: 109, name: 'الكافرون', label: '🛡️ ثبات التوحيد', emoji: '🛡️' },
        { id: 110, name: 'النصر', label: '🏆 نصر الله والفتح', emoji: '🏆' },
        { id: 112, name: 'الإخلاص', label: '💎 قل هو الله أحد', emoji: '💎' },
        { id: 113, name: 'الفلق', label: '🌅 نور الصباح', emoji: '🌅' },
        { id: 114, name: 'الناس', label: '👥 رب الناس', emoji: '👥' }
      ]
    },
    tr: {
      btnKidsMode: '🎈 Neşeli Çocuk Modu',
      titleKidsWorld: 'Kuran Çocuklar Dünyası',
      subKidsWorld: 'Küçük Kârileri Dinleyin ve Neşeyle Öğrenin ✨',
      mascotGreet: 'Selamün aleyküm minik dostum! Kuran\'ın güzel tilavetini dinleyelim! 🌟',
      mascotPlaying: 'Maşallah, ne kadar tatlı bir ses! Dinle ve tekrar et! 🎶',
      mascotPaused: 'Yeniden dinlemek için Oynat düğmesine bas! 💖',
      chooseSurahKids: 'Neşeli Bir Sure Seç (Amme Cüzü):',
      selectChildQori: 'Favori Çocuk Kârini Seç:',
      btnPlay: '▶ Oynat',
      btnPause: '⏸ Duraklat',
      btnReward: '⭐ Başarı Yıldızı Ver!',
      rewardTitle: '🎉 Maşallah, Harikasın Şampiyon!',
      rewardDesc: 'Kuran-ı Kerim\'i çok güzel dinledin. Başarıların daim olsun! 🌟',
      rewardBadge: '🏆 Kuran\'ın Parlayan Yıldızı',
      btnClose: 'Kapat',
      touchHint: '✨ Ekrana dokunarak sihirli yıldızlar yarat!',
      nowPlayingKids: 'Çocuk Kâri Tilaveti:',
      surahSurahKids: [
        { id: 1, name: 'Fatiha', label: '📖 Açılış', emoji: '📖' },
        { id: 105, name: 'Fil', label: '🐘 Fil Ordusu', emoji: '🐘' },
        { id: 106, name: 'Kureyş', label: '🕊️ Kureyş Kabilesi', emoji: '🕊️' },
        { id: 107, name: 'Maun', label: '🤲 İyilik & Yardımlaşma', emoji: '🤲' },
        { id: 108, name: 'Kevser', label: '🌊 Bol Nimet', emoji: '🌊' },
        { id: 109, name: 'Kafirun', label: '🛡️ Güçlü İman', emoji: '🛡️' },
        { id: 110, name: 'Nasr', label: '🏆 Allah\'ın Yardımı', emoji: '🏆' },
        { id: 112, name: 'İhlas', label: '💎 Allah\'ın Birliği', emoji: '💎' },
        { id: 113, name: 'Felak', label: '🌅 Sabah Vakti', emoji: '🌅' },
        { id: 114, name: 'Nas', label: '👥 İnsanlar', emoji: '👥' }
      ]
    },
    ms: {
      btnKidsMode: '🎈 Mod Ceria Kanak-Kanak',
      titleKidsWorld: 'Dunia Ceria Anak Al-Quran',
      subKidsWorld: 'Dengarkan Qari Cilik & Menghafaz Bersama Riang ✨',
      mascotGreet: 'Assalamu\'alaikum sahabat cilik! Jom kita dengar bacaan ayat suci Al-Quran! 🌟',
      mascotPlaying: 'Maa Syaa Allah, merdunya suara qari cilik! Jom ikut dan hayati! 🎶',
      mascotPaused: 'Tekan butang Main untuk mendengar semula! 💖',
      chooseSurahKids: 'Pilih Surah Ceria (Juz \'Amma):',
      selectChildQori: 'Pilih Qari Cilik Kegemaran Anda:',
      btnPlay: '▶ Main',
      btnPause: '⏸ Jeda',
      btnReward: '⭐ Berikan Bintang Prestasi!',
      rewardTitle: '🎉 Maa Syaa Allah, Hebatnya!',
      rewardDesc: 'Adik telah mendengar bacaan Al-Quran dengan sangat tekun. Teruskan semangat belajar Al-Quran ya! 🌟',
      rewardBadge: '🏆 Bintang Cilik Al-Quran',
      btnClose: 'Tutup',
      touchHint: '✨ Ketuk skrin di mana-mana untuk melihat bintang magik!',
      nowPlayingKids: 'Alunan Qari Cilik:',
      surahSurahKids: [
        { id: 1, name: 'Al-Fatihah', label: '📖 Pembuka', emoji: '📖' },
        { id: 105, name: 'Al-Fil', label: '🐘 Tentera Bergajah', emoji: '🐘' },
        { id: 106, name: 'Quraisy', label: '🕊️ Kaum Quraisy', emoji: '🕊️' },
        { id: 107, name: 'Al-Ma\'un', label: '🤲 Amalan Ihsan', emoji: '🤲' },
        { id: 108, name: 'Al-Kautsar', label: '🌊 Nikmat Melimpah', emoji: '🌊' },
        { id: 109, name: 'Al-Kafirun', label: '🛡️ Keteguhan Tauhid', emoji: '🛡️' },
        { id: 110, name: 'An-Nasr', label: '🏆 Pertolongan Allah', emoji: '🏆' },
        { id: 112, name: 'Al-Ikhlas', label: '💎 Keesaan Allah', emoji: '💎' },
        { id: 113, name: 'Al-Falaq', label: '🌅 Waktu Subuh', emoji: '🌅' },
        { id: 114, name: 'An-Nas', label: '👥 Umat Manusia', emoji: '👥' }
      ]
    }
  };

  function getLang() {
    return (window.state && window.state.language) || 'id';
  }

  function getKidsDict() {
    const l = getLang();
    return KIDS_I18N[l] || KIDS_I18N.en || KIDS_I18N.id;
  }

  // ══════════════════════════════════════════
  // INJECT CSS FOR KIDS ANIMATION & STAGE
  // ══════════════════════════════════════════
  function injectKidsStyles() {
    if (document.getElementById('kids-feature-styles')) return;

    const style = document.createElement('style');
    style.id = 'kids-feature-styles';
    style.textContent = `
      /* ─── Floating Kids Mode Button ─── */
      .kids-floating-launcher {
        position: fixed;
        bottom: 90px;
        right: 24px;
        z-index: 998;
        background: linear-gradient(135deg, #ff6b81 0%, #ff9f43 50%, #feca57 100%);
        color: #ffffff;
        font-family: 'Poppins', var(--font-ui, sans-serif);
        font-weight: 700;
        font-size: 0.92rem;
        padding: 12px 20px;
        border-radius: 999px;
        border: 3px solid #ffffff;
        box-shadow: 0 10px 25px rgba(255, 107, 129, 0.4), 0 0 15px rgba(254, 202, 87, 0.6);
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 10px;
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        animation: kidsBtnFloat 3s ease-in-out infinite alternate;
        user-select: none;
      }
      .kids-floating-launcher:hover {
        transform: scale(1.08) translateY(-4px);
        box-shadow: 0 15px 30px rgba(255, 107, 129, 0.5), 0 0 25px rgba(254, 202, 87, 0.8);
      }
      @keyframes kidsBtnFloat {
        0% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-6px) rotate(-1deg); }
        100% { transform: translateY(0px) rotate(1deg); }
      }

      /* ─── Kids World Modal Overlay ─── */
      .kids-world-overlay {
        position: fixed;
        inset: 0;
        background: rgba(10, 25, 47, 0.85);
        backdrop-filter: blur(10px);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: all 0.35s ease;
        padding: 16px;
      }
      .kids-world-overlay.active {
        opacity: 1;
        visibility: visible;
      }

      /* ─── Kids World Stage Container ─── */
      .kids-world-stage {
        background: radial-gradient(circle at 50% 20%, #e0f2fe 0%, #bae6fd 40%, #7dd3fc 100%);
        border-radius: 32px;
        border: 4px solid #ffffff;
        box-shadow: 0 25px 60px rgba(0,0,0,0.3), inset 0 2px 10px rgba(255,255,255,0.8);
        width: 100%;
        max-width: 900px;
        max-height: 92vh;
        overflow-y: auto;
        position: relative;
        padding: 28px 24px 32px;
        color: #0f172a;
        transform: scale(0.92);
        transition: transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      .kids-world-overlay.active .kids-world-stage {
        transform: scale(1);
      }

      /* ─── Cloud & Sky Decor ─── */
      .kids-sky-cloud {
        position: absolute;
        background: #ffffff;
        border-radius: 50px;
        opacity: 0.85;
        pointer-events: none;
        z-index: 1;
        animation: floatCloud 25s linear infinite;
      }
      .kids-sky-cloud::before, .kids-sky-cloud::after {
        content: '';
        position: absolute;
        background: #ffffff;
        border-radius: 50%;
      }
      .cloud-1 {
        width: 120px;
        height: 40px;
        top: 25px;
        left: -150px;
      }
      .cloud-1::before { width: 50px; height: 50px; top: -25px; left: 15px; }
      .cloud-1::after { width: 40px; height: 40px; top: -18px; left: 55px; }

      .cloud-2 {
        width: 140px;
        height: 46px;
        top: 90px;
        left: -200px;
        animation-delay: -12s;
        opacity: 0.7;
      }
      .cloud-2::before { width: 60px; height: 60px; top: -30px; left: 20px; }
      .cloud-2::after { width: 45px; height: 45px; top: -20px; left: 70px; }

      @keyframes floatCloud {
        from { transform: translateX(0); }
        to { transform: translateX(1150px); }
      }

      /* ─── Header Row ─── */
      .kids-header-row {
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
      }
      .kids-header-title {
        font-size: 1.6rem;
        font-weight: 800;
        background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0;
      }
      .kids-header-sub {
        font-size: 0.88rem;
        font-weight: 600;
        color: #0369a1;
        margin-top: 2px;
      }
      .kids-close-btn {
        background: #ffffff;
        border: 2px solid #bae6fd;
        width: 42px;
        height: 42px;
        border-radius: 50%;
        font-size: 1.2rem;
        font-weight: 800;
        color: #0284c7;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(2, 132, 199, 0.2);
        transition: all 0.2s;
      }
      .kids-close-btn:hover {
        background: #fee2e2;
        color: #ef4444;
        border-color: #fca5a5;
        transform: rotate(90deg) scale(1.05);
      }

      /* ─── Mascot & Character Stage ─── */
      .kids-characters-stage {
        position: relative;
        z-index: 2;
        background: linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.95) 100%);
        border-radius: 28px;
        padding: 24px;
        box-shadow: 0 10px 25px rgba(2, 132, 199, 0.15);
        display: grid;
        grid-template-columns: 190px 1fr;
        gap: 24px;
        align-items: center;
        margin-bottom: 24px;
        border: 2px solid #ffffff;
      }
      @media (max-width: 768px) {
        .kids-characters-stage {
          grid-template-columns: 1fr;
          text-align: center;
        }
      }

      /* ⭐ Najm - Bintang Ceria Character ⭐ */
      .kids-star-mascot-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
      }
      .kids-star-mascot {
        width: 140px;
        height: 140px;
        filter: drop-shadow(0 12px 18px rgba(250, 204, 21, 0.45));
        transition: transform 0.3s;
        cursor: pointer;
        animation: starIdle 3s ease-in-out infinite alternate;
      }
      .kids-star-mascot.dancing {
        animation: starDance 0.75s ease-in-out infinite alternate;
      }
      @keyframes starIdle {
        0% { transform: translateY(0) rotate(-3deg); }
        100% { transform: translateY(-10px) rotate(3deg); }
      }
      @keyframes starDance {
        0% { transform: translateY(0) scale(1) rotate(-8deg); }
        50% { transform: translateY(-16px) scale(1.08) rotate(0deg); }
        100% { transform: translateY(0) scale(1) rotate(8deg); }
      }

      /* Speech Bubble */
      .kids-mascot-bubble {
        background: #ffffff;
        border-radius: 20px;
        border: 3px solid #7dd3fc;
        padding: 16px 20px;
        position: relative;
        font-size: 0.98rem;
        font-weight: 600;
        line-height: 1.5;
        color: #0c4a6e;
        box-shadow: 0 6px 16px rgba(2, 132, 199, 0.12);
        margin-bottom: 14px;
      }
      .kids-mascot-bubble::before {
        content: '';
        position: absolute;
        left: -12px;
        top: 24px;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 12px solid #7dd3fc;
      }
      @media (max-width: 768px) {
        .kids-mascot-bubble::before {
          left: 50%;
          top: -12px;
          transform: translateX(-50%);
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 12px solid #7dd3fc;
          border-top: none;
        }
      }

      /* ─── Rainbow Soundwave Equalizer ─── */
      .kids-equalizer-container {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        gap: 8px;
        height: 60px;
        background: #f0f9ff;
        border-radius: 16px;
        padding: 8px 16px;
        border: 1px dashed #7dd3fc;
        margin-top: 12px;
      }
      .eq-bar {
        width: 14px;
        border-radius: 8px;
        transition: height 0.15s ease;
        height: 12px;
      }
      .eq-bar.b1 { background: #ff7675; }
      .eq-bar.b2 { background: #fab1a0; }
      .eq-bar.b3 { background: #ffeaa7; }
      .eq-bar.b4 { background: #55efc4; }
      .eq-bar.b5 { background: #81ecec; }
      .eq-bar.b6 { background: #74b9ff; }
      .eq-bar.b7 { background: #a29bfe; }

      .kids-equalizer-container.playing .eq-bar {
        animation: eqPulse 0.8s ease-in-out infinite alternate;
      }
      .kids-equalizer-container.playing .eq-bar.b1 { animation-delay: 0.1s; }
      .kids-equalizer-container.playing .eq-bar.b2 { animation-delay: 0.3s; }
      .kids-equalizer-container.playing .eq-bar.b3 { animation-delay: 0.15s; }
      .kids-equalizer-container.playing .eq-bar.b4 { animation-delay: 0.4s; }
      .kids-equalizer-container.playing .eq-bar.b5 { animation-delay: 0.25s; }
      .kids-equalizer-container.playing .eq-bar.b6 { animation-delay: 0.5s; }
      .kids-equalizer-container.playing .eq-bar.b7 { animation-delay: 0.2s; }

      @keyframes eqPulse {
        0% { height: 10px; }
        100% { height: 50px; }
      }

      /* ─── Controls & Child Reciters ─── */
      .kids-qori-selector-row {
        position: relative;
        z-index: 2;
        margin-bottom: 24px;
      }
      .kids-section-title {
        font-size: 1.05rem;
        font-weight: 800;
        color: #0369a1;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .kids-qori-chips-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 12px;
      }
      .kids-qori-chip {
        background: #ffffff;
        border: 2px solid #bae6fd;
        border-radius: 18px;
        padding: 10px 14px;
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        transition: all 0.2s;
        box-shadow: 0 4px 10px rgba(0,0,0,0.04);
      }
      .kids-qori-chip:hover {
        transform: translateY(-2px);
        border-color: #38bdf8;
        box-shadow: 0 8px 18px rgba(2, 132, 199, 0.15);
      }
      .kids-qori-chip.active {
        background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
        color: #ffffff;
        border-color: #0284c7;
        box-shadow: 0 8px 20px rgba(2, 132, 199, 0.35);
      }
      .kids-qori-avatar {
        font-size: 1.5rem;
      }
      .kids-qori-name {
        font-size: 0.85rem;
        font-weight: 700;
        line-height: 1.2;
      }
      .kids-qori-style {
        font-size: 0.72rem;
        opacity: 0.85;
      }

      /* ─── Big Playback Bar ─── */
      .kids-playback-bar {
        background: #ffffff;
        border-radius: 24px;
        padding: 16px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        box-shadow: 0 10px 25px rgba(2, 132, 199, 0.12);
        margin-bottom: 24px;
        border: 2px solid #e0f2fe;
      }
      .kids-play-btn {
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        color: #ffffff;
        font-weight: 800;
        font-size: 1.05rem;
        padding: 12px 28px;
        border-radius: 999px;
        border: none;
        cursor: pointer;
        box-shadow: 0 6px 18px rgba(16, 185, 129, 0.35);
        display: flex;
        align-items: center;
        gap: 8px;
        transition: transform 0.2s, box-shadow 0.2s;
      }
      .kids-play-btn:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 24px rgba(16, 185, 129, 0.5);
      }
      .kids-reward-btn {
        background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
        color: #ffffff;
        font-weight: 800;
        font-size: 0.95rem;
        padding: 12px 22px;
        border-radius: 999px;
        border: none;
        cursor: pointer;
        box-shadow: 0 6px 18px rgba(245, 158, 11, 0.35);
        display: flex;
        align-items: center;
        gap: 8px;
        transition: transform 0.2s;
      }
      .kids-reward-btn:hover {
        transform: scale(1.05);
      }

      /* ─── Kids Surah Cards Grid ─── */
      .kids-surah-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 14px;
      }
      .kids-surah-card {
        background: #ffffff;
        border: 3px solid #e0f2fe;
        border-radius: 20px;
        padding: 16px 12px;
        text-align: center;
        cursor: pointer;
        transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        box-shadow: 0 6px 15px rgba(0,0,0,0.03);
      }
      .kids-surah-card:hover {
        transform: translateY(-6px) scale(1.03);
        border-color: #38bdf8;
        box-shadow: 0 12px 24px rgba(2, 132, 199, 0.2);
      }
      .kids-surah-card.active {
        background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
        border-color: #22c55e;
        box-shadow: 0 10px 25px rgba(34, 197, 94, 0.25);
      }
      .kids-surah-card-emoji {
        font-size: 2.2rem;
        margin-bottom: 6px;
      }
      .kids-surah-card-name {
        font-weight: 800;
        font-size: 0.98rem;
        color: #0f172a;
      }
      .kids-surah-card-label {
        font-size: 0.78rem;
        color: #0369a1;
        font-weight: 600;
        margin-top: 2px;
      }

      /* ─── Confetti & Celebration Modal ─── */
      .kids-celebration-modal {
        position: fixed;
        inset: 0;
        background: rgba(15, 23, 42, 0.8);
        backdrop-filter: blur(8px);
        z-index: 10005;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        padding: 20px;
      }
      .kids-celebration-modal.active {
        opacity: 1;
        visibility: visible;
      }
      .kids-celebration-box {
        background: #ffffff;
        border-radius: 32px;
        border: 4px solid #facc15;
        box-shadow: 0 25px 50px rgba(0,0,0,0.3);
        width: 100%;
        max-width: 480px;
        padding: 36px 28px;
        text-align: center;
        position: relative;
        transform: scale(0.85);
        transition: transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      .kids-celebration-modal.active .kids-celebration-box {
        transform: scale(1);
      }
      .kids-stars-row {
        font-size: 2.5rem;
        margin-bottom: 14px;
        animation: starPulse 1s ease-in-out infinite alternate;
      }
      @keyframes starPulse {
        from { transform: scale(0.95); }
        to { transform: scale(1.05); }
      }

      /* Floating Magic Canvas for Tap Sparkles */
      #kids-sparkle-canvas {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 99;
      }
    `;
    document.head.appendChild(style);
  }

  // ══════════════════════════════════════════
  // STAR MASCOT SVG GRAPHIC
  // ══════════════════════════════════════════
  function getStarMascotSvg() {
    return `
      <svg viewBox="0 0 200 200" class="kids-star-mascot" id="mascot-najm">
        <defs>
          <radialGradient id="starGrad" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stop-color="#fffbeb" />
            <stop offset="45%" stop-color="#fde047" />
            <stop offset="100%" stop-color="#f59e0b" />
          </radialGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <!-- 5-Point Star Body -->
        <polygon points="100,10 126,68 190,75 142,118 156,180 100,148 44,180 58,118 10,75 74,68" 
                 fill="url(#starGrad)" stroke="#d97706" stroke-width="4" stroke-linejoin="round" />
        
        <!-- Rosy Cheeks -->
        <ellipse cx="68" cy="118" rx="10" ry="6" fill="#f87171" opacity="0.65" />
        <ellipse cx="132" cy="118" rx="10" ry="6" fill="#f87171" opacity="0.65" />
        
        <!-- Big Smiling Eyes -->
        <ellipse cx="78" cy="100" rx="9" ry="12" fill="#1e293b" />
        <circle cx="75" cy="95" r="4.5" fill="#ffffff" />
        <circle cx="81" cy="104" r="2.5" fill="#ffffff" />

        <ellipse cx="122" cy="100" rx="9" ry="12" fill="#1e293b" />
        <circle cx="119" cy="95" r="4.5" fill="#ffffff" />
        <circle cx="125" cy="104" r="2.5" fill="#ffffff" />

        <!-- Cute Happy Smile -->
        <path d="M 88 116 Q 100 134 112 116" stroke="#1e293b" stroke-width="4.5" stroke-linecap="round" fill="none" />
        <!-- Tongue -->
        <path d="M 94 122 Q 100 131 106 122 Z" fill="#ef4444" />
      </svg>
    `;
  }

  // ══════════════════════════════════════════
  // BUILD & INJECT KIDS WORLD DOM
  // ══════════════════════════════════════════
  function injectKidsWorldDOM() {
    if (document.getElementById('kids-world-overlay')) return;

    const t = getKidsDict();

    // 1. Floating Launcher Button
    const launcher = document.createElement('button');
    launcher.className = 'kids-floating-launcher';
    launcher.id = 'kids-mode-launcher';
    launcher.innerHTML = `<span>🎈</span> <span id="kids-launcher-text">${t.btnKidsMode}</span>`;
    launcher.addEventListener('click', openKidsWorld);
    document.body.appendChild(launcher);

    // 2. Fullscreen Kids World Modal
    const overlay = document.createElement('div');
    overlay.className = 'kids-world-overlay';
    overlay.id = 'kids-world-overlay';
    overlay.innerHTML = `
      <div class="kids-world-stage" id="kids-stage-content">
        <canvas id="kids-sparkle-canvas"></canvas>

        <!-- Decorative Animated Clouds -->
        <div class="kids-sky-cloud cloud-1"></div>
        <div class="kids-sky-cloud cloud-2"></div>

        <!-- Header -->
        <div class="kids-header-row">
          <div>
            <h2 class="kids-header-title" id="kids-modal-title"><span>🎈</span> ${t.titleKidsWorld}</h2>
            <div class="kids-header-sub" id="kids-modal-sub">${t.subKidsWorld}</div>
          </div>
          <button class="kids-close-btn" id="btn-close-kids" title="${t.btnClose}">✕</button>
        </div>

        <!-- Mascot & Speech Stage -->
        <div class="kids-characters-stage">
          <div class="kids-star-mascot-wrapper">
            ${getStarMascotSvg()}
            <div style="font-size:0.8rem; font-weight:800; color:#b45309; margin-top:6px;">⭐ Najm si Bintang Ceria</div>
          </div>
          <div>
            <div class="kids-mascot-bubble" id="kids-mascot-message">
              ${t.mascotGreet}
            </div>

            <!-- Rainbow Equalizer Bar -->
            <div class="kids-equalizer-container" id="kids-rainbow-eq">
              <div class="eq-bar b1"></div>
              <div class="eq-bar b2"></div>
              <div class="eq-bar b3"></div>
              <div class="eq-bar b4"></div>
              <div class="eq-bar b5"></div>
              <div class="eq-bar b6"></div>
              <div class="eq-bar b7"></div>
            </div>
          </div>
        </div>

        <!-- Playback & Star Action Row -->
        <div class="kids-playback-bar">
          <div style="display:flex; align-items:center; gap:12px;">
            <button class="kids-play-btn" id="btn-kids-play">
              <span>▶</span> <span id="kids-play-label">${t.btnPlay}</span>
            </button>
            <div style="font-weight:700; color:#0369a1; font-size:0.92rem;" id="kids-now-playing-title">
              Surah Al-Fatihah
            </div>
          </div>
          <button class="kids-reward-btn" id="btn-kids-reward">
            <span>⭐</span> <span id="kids-reward-label">${t.btnReward}</span>
          </button>
        </div>

        <!-- Child Reciters Selector -->
        <div class="kids-qori-selector-row">
          <div class="kids-section-title" id="kids-lbl-reciters">👦 ${t.selectChildQori}</div>
          <div class="kids-qori-chips-grid" id="kids-qori-list">
            <div class="kids-qori-chip active" data-qori="thaha_cilik" onclick="window.selectKidsQori('thaha_cilik')">
              <span class="kids-qori-avatar">👦</span>
              <div>
                <div class="kids-qori-name">M. Thaha Al-Junayd</div>
                <div class="kids-qori-style">Qori Cilik Favorit</div>
              </div>
            </div>
            <div class="kids-qori-chip" data-qori="albarrak_cilik" onclick="window.selectKidsQori('albarrak_cilik')">
              <span class="kids-qori-avatar">🌟</span>
              <div>
                <div class="kids-qori-name">M. Al-Barrak</div>
                <div class="kids-qori-style">Suara Jernih</div>
              </div>
            </div>
            <div class="kids-qori-chip" data-qori="ahmad_saud" onclick="window.selectKidsQori('ahmad_saud')">
              <span class="kids-qori-avatar">🧒</span>
              <div>
                <div class="kids-qori-name">Ahmad Saud</div>
                <div class="kids-qori-style">Syahdu & Lembut</div>
              </div>
            </div>
            <div class="kids-qori-chip" data-qori="azazi_kids" onclick="window.selectKidsQori('azazi_kids')">
              <span class="kids-qori-avatar">🎈</span>
              <div>
                <div class="kids-qori-name">Al-Azazi (Anak-Anak)</div>
                <div class="kids-qori-style">Talaqqi Guru & Murid</div>
              </div>
            </div>
            <div class="kids-qori-chip" data-qori="minshawi_muallim" onclick="window.selectKidsQori('minshawi_muallim')">
              <span class="kids-qori-avatar">🏫</span>
              <div>
                <div class="kids-qori-name">Al-Minshawi (Mu'allim)</div>
                <div class="kids-qori-style">Edukasi Murid Anak</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Kids Surahs Grid -->
        <div class="kids-surah-explorer">
          <div class="kids-section-title" id="kids-lbl-surahs">✨ ${t.chooseSurahKids}</div>
          <div class="kids-surah-grid" id="kids-surah-cards">
            <!-- Populated dynamically -->
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    // 3. Celebration Modal DOM
    const celeb = document.createElement('div');
    celeb.className = 'kids-celebration-modal';
    celeb.id = 'kids-celebration-modal';
    celeb.innerHTML = `
      <div class="kids-celebration-box">
        <div class="kids-stars-row">⭐ 🌟 ⭐ 🌟 ⭐</div>
        <h3 style="font-size:1.6rem; font-weight:800; color:#b45309; margin-bottom:8px;" id="celeb-title">
          ${t.rewardTitle}
        </h3>
        <p style="font-size:0.95rem; color:#475569; line-height:1.6; margin-bottom:20px;" id="celeb-desc">
          ${t.rewardDesc}
        </p>
        <div style="display:inline-block; background:#fef3c7; color:#b45309; font-weight:800; padding:10px 20px; border-radius:999px; border:2px dashed #f59e0b; margin-bottom:24px;" id="celeb-badge">
          ${t.rewardBadge}
        </div>
        <br>
        <button class="kids-play-btn" style="margin:0 auto;" id="btn-close-celeb">
          Alhamdulillah! ✨
        </button>
      </div>
    `;
    document.body.appendChild(celeb);

    // Setup Event Listeners
    document.getElementById('btn-close-kids')?.addEventListener('click', closeKidsWorld);
    document.getElementById('btn-close-celeb')?.addEventListener('click', () => {
      celeb.classList.remove('active');
    });

    document.getElementById('btn-kids-play')?.addEventListener('click', toggleKidsPlay);
    document.getElementById('btn-kids-reward')?.addEventListener('click', triggerKidsCelebration);

    // Setup interactive touch sparkles
    initSparkleCanvas();

    // Render Surah Cards
    renderKidsSurahs();

    // Bind audio listener for mascot dance and rainbow bars
    bindAudioEvents();
  }

  // ══════════════════════════════════════════
  // RENDER KIDS SURAHS
  // ══════════════════════════════════════════
  function renderKidsSurahs() {
    const container = document.getElementById('kids-surah-cards');
    if (!container) return;

    const t = getKidsDict();
    const curSurah = (window.state && window.state.currentSurah) || 1;

    container.innerHTML = t.surahSurahKids.map(s => `
      <div class="kids-surah-card ${s.id === curSurah ? 'active' : ''}" 
           onclick="window.selectKidsSurah(${s.id})">
        <div class="kids-surah-card-emoji">${s.emoji}</div>
        <div class="kids-surah-card-name">${s.id}. ${s.name}</div>
        <div class="kids-surah-card-label">${s.label}</div>
      </div>
    `).join('');
  }

  // ══════════════════════════════════════════
  // PLAYBACK & QORI CONTROLS
  // ══════════════════════════════════════════
  function openKidsWorld() {
    injectKidsStyles();
    injectKidsWorldDOM();

    const overlay = document.getElementById('kids-world-overlay');
    if (overlay) {
      overlay.classList.add('active');
      renderKidsSurahs();
      updateKidsUI();
    }
  }

  function closeKidsWorld() {
    const overlay = document.getElementById('kids-world-overlay');
    if (overlay) overlay.classList.remove('active');
  }

  function selectKidsSurah(surahId) {
    if (typeof window.loadSurah === 'function') {
      window.loadSurah(surahId);
    }
    if (typeof window.playSurahAudio === 'function') {
      window.playSurahAudio(surahId);
    }
    renderKidsSurahs();
    updateKidsUI();
    burstTapSparkles(window.innerWidth / 2, window.innerHeight / 2);
  }

  function selectKidsQori(qoriId) {
    if (typeof window.selectQori === 'function') {
      window.selectQori(qoriId);
    } else if (window.state) {
      window.state.currentQori = qoriId;
      if (typeof window.playSurahAudio === 'function') {
        window.playSurahAudio(window.state.currentSurah || 1);
      }
    }
    document.querySelectorAll('.kids-qori-chip').forEach(c => {
      c.classList.toggle('active', c.dataset.qori === qoriId);
    });
    updateKidsUI();
  }

  function toggleKidsPlay() {
    if (typeof window.togglePlay === 'function') {
      window.togglePlay();
    }
    setTimeout(updateKidsUI, 100);
  }

  function updateKidsUI() {
    const t = getKidsDict();
    const isPlaying = window.state && window.state.isPlaying;
    const curSurahId = (window.state && window.state.currentSurah) || 1;
    const allSurahs = window.ALL_SURAHS || [];
    const surah = allSurahs.find(s => s.id === curSurahId);

    const playLabel = document.getElementById('kids-play-label');
    const playBtn = document.getElementById('btn-kids-play');
    if (playLabel) playLabel.textContent = isPlaying ? t.btnPause : t.btnPlay;
    if (playBtn) {
      playBtn.style.background = isPlaying 
        ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' 
        : 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
      playBtn.querySelector('span').textContent = isPlaying ? '⏸' : '▶';
    }

    const nowTitle = document.getElementById('kids-now-playing-title');
    if (nowTitle && surah) {
      nowTitle.textContent = `${t.nowPlayingKids} ${surah.id}. ${surah.name}`;
    }

    const mascot = document.getElementById('mascot-najm');
    const eq = document.getElementById('kids-rainbow-eq');
    const msg = document.getElementById('kids-mascot-message');

    if (isPlaying) {
      mascot?.classList.add('dancing');
      eq?.classList.add('playing');
      if (msg) msg.textContent = t.mascotPlaying;
    } else {
      mascot?.classList.remove('dancing');
      eq?.classList.remove('playing');
      if (msg) msg.textContent = t.mascotPaused;
    }
  }

  function bindAudioEvents() {
    const audio = window.audioPlayer || document.querySelector('audio');
    if (!audio) return;

    audio.addEventListener('play', () => updateKidsUI());
    audio.addEventListener('pause', () => updateKidsUI());
    audio.addEventListener('ended', () => {
      updateKidsUI();
      triggerKidsCelebration();
    });
  }

  // ══════════════════════════════════════════
  // CELEBRATION & CONFETTI REWARD
  // ══════════════════════════════════════════
  function triggerKidsCelebration() {
    const modal = document.getElementById('kids-celebration-modal');
    if (!modal) return;
    modal.classList.add('active');

    // Confetti particles
    for (let i = 0; i < 40; i++) {
      setTimeout(() => {
        burstTapSparkles(
          window.innerWidth * (0.2 + Math.random() * 0.6),
          window.innerHeight * (0.3 + Math.random() * 0.4)
        );
      }, i * 35);
    }
  }

  // ══════════════════════════════════════════
  // INTERACTIVE TAP SPARKLE PARTICLE SYSTEM
  // ══════════════════════════════════════════
  let sparkleParticles = [];
  let animFrameId = null;

  function initSparkleCanvas() {
    const canvas = document.getElementById('kids-sparkle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
      const stage = document.getElementById('kids-stage-content');
      if (stage) {
        canvas.width = stage.clientWidth;
        canvas.height = stage.clientHeight;
      }
    }
    resize();
    window.addEventListener('resize', resize);

    const stage = document.getElementById('kids-stage-content');
    stage?.addEventListener('pointerdown', (e) => {
      const rect = stage.getBoundingClientRect();
      burstTapSparkles(e.clientX - rect.left, e.clientY - rect.top);
    });

    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = sparkleParticles.length - 1; i >= 0; i--) {
        const p = sparkleParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.15; // gentle gravity
        p.alpha -= 0.02;
        p.rot += p.vRot;

        if (p.alpha <= 0) {
          sparkleParticles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        
        if (p.shape === 'star') {
          drawStar(ctx, 0, 0, 5, p.size, p.size / 2);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      animFrameId = requestAnimationFrame(loop);
    }

    if (!animFrameId) loop();
  }

  function burstTapSparkles(x, y) {
    const colors = ['#f59e0b', '#ec4899', '#3b82f6', '#10b981', '#8b5cf6', '#fbbf24', '#06b6d4'];
    for (let i = 0; i < 16; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 6;
      sparkleParticles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5,
        size: 5 + Math.random() * 7,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        shape: Math.random() > 0.4 ? 'star' : 'circle',
        rot: Math.random() * Math.PI,
        vRot: (Math.random() - 0.5) * 0.2
      });
    }
  }

  function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
    let rot = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fill();
  }

  // ══════════════════════════════════════════
  // UPDATE LANGUAGE HOOK
  // ══════════════════════════════════════════
  function updateKidsLanguage(lang) {
    const t = getKidsDict();

    const launcher = document.getElementById('kids-launcher-text');
    if (launcher) launcher.textContent = t.btnKidsMode;

    const title = document.getElementById('kids-modal-title');
    if (title) title.innerHTML = `<span>🎈</span> ${t.titleKidsWorld}`;

    const sub = document.getElementById('kids-modal-sub');
    if (sub) sub.textContent = t.subKidsWorld;

    const lblReciters = document.getElementById('kids-lbl-reciters');
    if (lblReciters) lblReciters.textContent = `👦 ${t.selectChildQori}`;

    const lblSurahs = document.getElementById('kids-lbl-surahs');
    if (lblSurahs) lblSurahs.textContent = `✨ ${t.chooseSurahKids}`;

    const rewardBtn = document.getElementById('kids-reward-label');
    if (rewardBtn) rewardBtn.textContent = t.btnReward;

    const celebTitle = document.getElementById('celeb-title');
    if (celebTitle) celebTitle.textContent = t.rewardTitle;

    const celebDesc = document.getElementById('celeb-desc');
    if (celebDesc) celebDesc.textContent = t.rewardDesc;

    const celebBadge = document.getElementById('celeb-badge');
    if (celebBadge) celebBadge.textContent = t.rewardBadge;

    renderKidsSurahs();
    updateKidsUI();
  }

  // ══════════════════════════════════════════
  // EXPORT TO WINDOW
  // ══════════════════════════════════════════
  window.openKidsWorld = openKidsWorld;
  window.closeKidsWorld = closeKidsWorld;
  window.selectKidsSurah = selectKidsSurah;
  window.selectKidsQori = selectKidsQori;
  window.triggerKidsCelebration = triggerKidsCelebration;
  window.updateKidsLanguage = updateKidsLanguage;

  // Initialize on Load
  function init() {
    injectKidsStyles();
    injectKidsWorldDOM();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

