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
      lblModeStandard: 'Standar',
      lblModeKids: 'Kids Ceria',
      popupKidsTitle: 'Masuk ke Mode Kids Ceria? 🎈',
      popupKidsDesc: 'Beralih ke Dunia Ceria Al-Qur\'an ramah anak dengan qori cilik pilihan, maskot bintang interaktif, animasi warna-warni, dan penghargaan prestasi belajar!',
      popupFeatQori: '5 Qori Cilik',
      popupFeatMascot: 'Maskot Interaktif',
      popupFeatReward: 'Bintang Prestasi',
      btnEnterKids: 'Ya, Masuk Mode Kids! 🚀',
      btnStayStandard: 'Tetap di Mode Standar',
      transitionEntering: 'Bismillah... Membuka Dunia Ceria Anak! ✨',
      transitionExiting: 'Kembali ke Mode Standar... 📖',
      btnBackToStandard: 'Mode Standar',
      btnKidsMode: '🎈 Mode Anak Ceria',
      titleKidsWorld: 'Dunia Ceria Anak Al-Qur\'an',
      subKidsWorld: 'Mendengarkan Qori Cilik & Menghafal dengan Gembira ✨',
      mascotGreet: 'Assalamu\'alaikum sahabat cilik! Yuk kita dengarkan lantunan ayat suci Al-Qur\'an yang indah! 🌟',
      mascotPlaying: 'Maa Syaa Allah, suara qorinya merdu sekali! Ayo dengarkan dan ikuti ya! 🎶',
      mascotPaused: 'Yuk tekan tombol Putar untuk mulai mendengarkan lagi! 💖',
      chooseSurahKids: 'Pilih Surah Ceria (Juz \'Amma):',
      selectChildQori: 'Pilih Qori Cilik Favoritmu:',
      btnPlay: 'Putar',
      btnPause: 'Jeda',
      btnReward: 'Beri Bintang Prestasi!',
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
      lblModeStandard: 'Standard',
      lblModeKids: 'Kids Mode',
      popupKidsTitle: 'Switch to Cheerful Kids Mode? 🎈',
      popupKidsDesc: 'Enter a joyful Quran wonderland for kids with sweet child reciters, interactive star mascot, vibrant animations, and star rewards!',
      popupFeatQori: '5 Child Reciters',
      popupFeatMascot: 'Interactive Mascot',
      popupFeatReward: 'Star Rewards',
      btnEnterKids: 'Yes, Enter Kids Mode! 🚀',
      btnStayStandard: 'Stay in Standard Mode',
      transitionEntering: 'Bismillah... Opening Quran Kids Wonderland! ✨',
      transitionExiting: 'Returning to Standard Mode... 📖',
      btnBackToStandard: 'Standard Mode',
      btnKidsMode: '🎈 Cheerful Kids Mode',
      titleKidsWorld: 'Quran Kids Wonderland',
      subKidsWorld: 'Listen to Beloved Child Reciters & Learn with Joy ✨',
      mascotGreet: 'Assalamu\'alaikum little friend! Let\'s listen to the beautiful Quran recitation! 🌟',
      mascotPlaying: 'Maa Sha Allah, what a sweet recitation! Listen and repeat along! 🎶',
      mascotPaused: 'Press the Play button to listen again! 💖',
      chooseSurahKids: 'Choose a Joyful Surah (Juz \'Amma):',
      selectChildQori: 'Select Your Favorite Child Reciter:',
      btnPlay: 'Play',
      btnPause: 'Pause',
      btnReward: 'Give Star Reward!',
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
      lblModeStandard: 'Standard',
      lblModeKids: 'Mode Enfants',
      popupKidsTitle: 'Passer au Mode Enfants Joyeux ? 🎈',
      popupKidsDesc: 'Entrez dans le monde merveilleux du Coran avec de jeunes récitateurs, une mascotte interactive, des animations et des récompenses !',
      popupFeatQori: '5 Jeunes Récitateurs',
      popupFeatMascot: 'Mascotte Étoile',
      popupFeatReward: 'Étoiles & Récompenses',
      btnEnterKids: 'Oui, Ouvrir Mode Enfants ! 🚀',
      btnStayStandard: 'Rester en Mode Standard',
      transitionEntering: 'Bismillah... Ouverture du Monde des Enfants ! ✨',
      transitionExiting: 'Retour au Mode Standard... 📖',
      btnBackToStandard: 'Mode Standard',
      btnKidsMode: '🎈 Mode Enfants Joyeux',
      titleKidsWorld: 'Le Monde des Enfants du Coran',
      subKidsWorld: 'Écoutez les Jeunes Récitateurs & Apprenez avec Joie ✨',
      mascotGreet: 'Assalamu\'alaikum petit ami ! Écoutons ensemble la douce récitation du Noble Coran ! 🌟',
      mascotPlaying: 'Maa Sha Allah, quelle voix magnifique ! Écoute et répète avec nous ! 🎶',
      mascotPaused: 'Appuie sur Lecture pour continuer l\'écoute ! 💖',
      chooseSurahKids: 'Choisis une Sourate Joyeuse (Juz \'Amma) :',
      selectChildQori: 'Choisis ton Jeune Récitateur Préféré :',
      btnPlay: 'Lecture',
      btnPause: 'Pause',
      btnReward: 'Donner une Étoile de Récompense !',
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
      lblModeStandard: 'الوضع العادي',
      lblModeKids: 'وضع الأطفال',
      popupKidsTitle: 'الانتقال إلى عالم الأطفال القرآني؟ 🎈',
      popupKidsDesc: 'ادخل واحة الأطفال المبهجة للقرآن الكريم مع أصوات القراء الصغار، والنجمة التفاعلية، والرسوم المتحركة والمكافآت!',
      popupFeatQori: '٥ قراء صغار',
      popupFeatMascot: 'نجمة تفاعلية مبتهجة',
      popupFeatReward: 'أوسمة وجوائز تشجيعية',
      btnEnterKids: 'نعم، ادخل وضع الأطفال! 🚀',
      btnStayStandard: 'البقاء في الوضع العادي',
      transitionEntering: 'بسم الله... جاري فتح عالم الأطفال! ✨',
      transitionExiting: 'العودة إلى الوضع العادي... 📖',
      btnBackToStandard: 'الوضع العادي',
      btnKidsMode: '🎈 عالم الأطفال القرآني',
      titleKidsWorld: 'واحة الأطفال للقرآن الكريم',
      subKidsWorld: 'استمع لأعذب أصوات القراء الصغار وتعلّم ببهجة ومرح ✨',
      mascotGreet: 'السلام عليكم يا أصدقائي الصغار! تعالوا نستمع إلى كلام الله الجميل! 🌟',
      mascotPlaying: 'ما شاء الله! صوت نديّ ومبارك، استمع وردّد مع القارئ الصغير! 🎶',
      mascotPaused: 'اضغط زر التشغيل لنتابع الاستماع الجميل! 💖',
      chooseSurahKids: 'اختر سورة مبهجة (جزء عم):',
      selectChildQori: 'اختر قارئك الصغير المفضل:',
      btnPlay: 'تشغيل',
      btnPause: 'إيقاف',
      btnReward: 'امنح نجمة التميّز!',
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
      lblModeStandard: 'Standart',
      lblModeKids: 'Çocuk Modu',
      popupKidsTitle: 'Neşeli Çocuk Moduna Geçilsin mi? 🎈',
      popupKidsDesc: 'Küçük kâri tilavetleri, interaktif yıldız maskot ve başarı ödülleriyle dolu çocuk Kuran dünyasına adım atın!',
      popupFeatQori: '5 Çocuk Kâri',
      popupFeatMascot: 'İnteraktif Yıldız Maskot',
      popupFeatReward: 'Başarı Yıldızları',
      btnEnterKids: 'Evet, Çocuk Moduna Geç! 🚀',
      btnStayStandard: 'Standart Modda Kal',
      transitionEntering: 'Bismillah... Çocuk Dünyası Açılıyor! ✨',
      transitionExiting: 'Standart Moda Dönülüyor... 📖',
      btnBackToStandard: 'Standart Mod',
      btnKidsMode: '🎈 Neşeli Çocuk Modu',
      titleKidsWorld: 'Kuran Çocuklar Dünyası',
      subKidsWorld: 'Küçük Kârileri Dinleyin ve Neşeyle Öğrenin ✨',
      mascotGreet: 'Selamün aleyküm minik dostum! Kuran\'ın güzel tilavetini dinleyelim! 🌟',
      mascotPlaying: 'Maşallah, ne kadar tatlı bir ses! Dinle ve tekrar et! 🎶',
      mascotPaused: 'Yeniden dinlemek için Oynat düğmesine bas! 💖',
      chooseSurahKids: 'Neşeli Bir Sure Seç (Amme Cüzü):',
      selectChildQori: 'Favori Çocuk Kârini Seç:',
      btnPlay: 'Oynat',
      btnPause: 'Duraklat',
      btnReward: 'Başarı Yıldızı Ver!',
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
      lblModeStandard: 'Standard',
      lblModeKids: 'Mod Kanak-Kanak',
      popupKidsTitle: 'Tukar ke Mod Ceria Kanak-Kanak? 🎈',
      popupKidsDesc: 'Masuki Dunia Ceria Al-Quran mesra kanak-kanak bersama qari cilik, maskot bintang interaktif, dan bintang prestasi!',
      popupFeatQori: '5 Qari Cilik Pilihan',
      popupFeatMascot: 'Maskot Bintang Interaktif',
      popupFeatReward: 'Bintang Prestasi & Konfeti',
      btnEnterKids: 'Ya, Masuk Mod Kanak-Kanak! 🚀',
      btnStayStandard: 'Kekal di Mod Standard',
      transitionEntering: 'Bismillah... Membuka Dunia Kanak-Kanak! ✨',
      transitionExiting: 'Kembali ke Mod Standard... 📖',
      btnBackToStandard: 'Mod Standard',
      btnKidsMode: '🎈 Mod Ceria Kanak-Kanak',
      titleKidsWorld: 'Dunia Ceria Anak Al-Quran',
      subKidsWorld: 'Dengarkan Qari Cilik & Menghafaz Bersama Riang ✨',
      mascotGreet: 'Assalamu\'alaikum sahabat cilik! Jom kita dengar bacaan ayat suci Al-Quran! 🌟',
      mascotPlaying: 'Maa Syaa Allah, merdunya suara qari cilik! Jom ikut dan hayati! 🎶',
      mascotPaused: 'Tekan butang Main untuk mendengar semula! 💖',
      chooseSurahKids: 'Pilih Surah Ceria (Juz \'Amma):',
      selectChildQori: 'Pilih Qari Cilik Kegemaran Anda:',
      btnPlay: 'Main',
      btnPause: 'Jeda',
      btnReward: 'Berikan Bintang Prestasi!',
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
      /* ─── Mode Switcher Capsule (Header) ─── */
      .app-mode-switcher {
        display: inline-flex;
        align-items: center;
        background: #f1f5f9;
        border: 1px solid #cbd5e1;
        border-radius: 999px;
        padding: 3px;
        gap: 3px;
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.06);
        user-select: none;
      }
      .mode-tab-btn {
        border: none;
        background: transparent;
        padding: 5px 12px;
        border-radius: 999px;
        font-family: inherit;
        font-size: 0.8rem;
        font-weight: 600;
        color: #64748b;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
        transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      .mode-tab-btn:hover {
        color: #0f172a;
      }
      .mode-tab-btn.active#btn-mode-standard {
        background: #ffffff;
        color: #0d9488;
        font-weight: 700;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
      }
      .mode-tab-btn.active#btn-mode-kids {
        background: linear-gradient(135deg, #ff6b81 0%, #ff9f43 100%);
        color: #ffffff;
        font-weight: 700;
        box-shadow: 0 2px 10px rgba(255, 107, 129, 0.4);
      }
      body.dark-mode .app-mode-switcher {
        background: #1e293b;
        border-color: #334155;
      }
      body.dark-mode .mode-tab-btn {
        color: #94a3b8;
      }
      body.dark-mode .mode-tab-btn.active#btn-mode-standard {
        background: #0f172a;
        color: #2dd4bf;
      }
      @media (max-width: 480px) {
        .mode-tab-btn {
          padding: 4px 8px;
          font-size: 0.74rem;
          gap: 4px;
        }
      }

      /* ─── Confirmation Modal (Pindah ke Mode Kids) ─── */
      .kids-confirm-overlay {
        position: fixed;
        inset: 0;
        background: rgba(15, 23, 42, 0.7);
        backdrop-filter: blur(8px);
        z-index: 10060;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        padding: 16px;
      }
      .kids-confirm-overlay.active {
        opacity: 1;
        visibility: visible;
      }
      .kids-confirm-box {
        background: linear-gradient(180deg, #ffffff 0%, #fefce8 100%);
        border-radius: 32px;
        border: 4px solid #fde047;
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.28), 0 0 25px rgba(250, 204, 21, 0.35);
        width: 100%;
        max-width: 460px;
        padding: 32px 26px;
        text-align: center;
        position: relative;
        transform: scale(0.85);
        transition: transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      .kids-confirm-overlay.active .kids-confirm-box {
        transform: scale(1);
      }
      .kids-confirm-badge {
        display: inline-block;
        background: #fef08a;
        color: #854d0e;
        font-size: 0.74rem;
        font-weight: 800;
        letter-spacing: 0.08em;
        padding: 4px 14px;
        border-radius: 999px;
        margin-bottom: 12px;
        border: 1px dashed #ca8a04;
      }
      .kids-confirm-mascot-row {
        font-size: 3.2rem;
        line-height: 1;
        margin-bottom: 10px;
        animation: mascotBounce 1.6s ease-in-out infinite alternate;
      }
      @keyframes mascotBounce {
        0% { transform: translateY(0) scale(0.95); }
        100% { transform: translateY(-8px) scale(1.05); }
      }
      .kids-confirm-title {
        font-size: 1.35rem;
        font-weight: 800;
        color: #0f172a;
        margin-bottom: 8px;
      }
      .kids-confirm-desc {
        font-size: 0.92rem;
        color: #475569;
        line-height: 1.55;
        margin-bottom: 18px;
      }
      .kids-confirm-features {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 24px;
      }
      .kids-feat-chip {
        background: #ffffff;
        border: 1.5px solid #fed7aa;
        color: #9a3412;
        font-size: 0.78rem;
        font-weight: 700;
        padding: 6px 12px;
        border-radius: 999px;
        display: flex;
        align-items: center;
        gap: 5px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.04);
      }
      .kids-confirm-actions {
        display: flex;
        gap: 10px;
        justify-content: center;
      }
      .kids-btn-secondary {
        flex: 1;
        background: #f1f5f9;
        color: #475569;
        border: 1.5px solid #cbd5e1;
        padding: 12px 16px;
        border-radius: 999px;
        font-size: 0.88rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s;
      }
      .kids-btn-secondary:hover {
        background: #e2e8f0;
        color: #1e293b;
      }
      .kids-btn-primary {
        flex: 1.3;
        background: linear-gradient(135deg, #ff6b81 0%, #ff9f43 50%, #feca57 100%);
        color: #ffffff;
        border: none;
        padding: 12px 18px;
        border-radius: 999px;
        font-size: 0.92rem;
        font-weight: 800;
        cursor: pointer;
        box-shadow: 0 6px 18px rgba(255, 107, 129, 0.4);
        transition: all 0.2s;
      }
      .kids-btn-primary:hover {
        transform: translateY(-2px) scale(1.02);
        box-shadow: 0 8px 24px rgba(255, 107, 129, 0.6);
      }

      /* ─── Magical Transition Portal Overlay ─── */
      .kids-transition-overlay {
        position: fixed;
        inset: 0;
        z-index: 10050;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.4s ease, visibility 0.4s ease;
        pointer-events: none;
        overflow: hidden;
      }
      .kids-transition-overlay.active {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
      }
      .kids-transition-backdrop {
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at center, #0284c7 0%, #0369a1 40%, #0f172a 100%);
        opacity: 0.96;
      }
      .kids-portal-vortex {
        position: absolute;
        width: 800px;
        height: 800px;
        border-radius: 50%;
        background: conic-gradient(from 0deg, #ff7675, #ffeaa7, #55efc4, #81ecec, #74b9ff, #a29bfe, #ff7675);
        opacity: 0.25;
        filter: blur(40px);
        animation: portalSwirl 4s linear infinite;
      }
      @keyframes portalSwirl {
        0% { transform: rotate(0deg) scale(0.9); }
        50% { transform: rotate(180deg) scale(1.15); }
        100% { transform: rotate(360deg) scale(0.9); }
      }
      .kids-transition-particles {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }
      .transition-burst-star {
        position: absolute;
        font-size: 1.8rem;
        user-select: none;
        animation: starBurstOut 1.2s cubic-bezier(0.12, 0.8, 0.32, 1) forwards;
      }
      @keyframes starBurstOut {
        0% {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.2) rotate(0deg);
        }
        30% {
          opacity: 1;
        }
        100% {
          opacity: 0;
          transform: translate(var(--tx), var(--ty)) scale(1.3) rotate(var(--rot));
        }
      }
      .kids-transition-card {
        position: relative;
        z-index: 2;
        text-align: center;
        color: #ffffff;
        padding: 30px;
        animation: cardPortalZoom 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      @keyframes cardPortalZoom {
        0% { transform: scale(0.4); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }
      .kids-portal-mascot {
        font-size: 4rem;
        margin-bottom: 12px;
        display: inline-block;
        animation: portalMascotSpin 1.2s ease-in-out infinite alternate;
        filter: drop-shadow(0 0 20px rgba(254, 240, 138, 0.8));
      }
      @keyframes portalMascotSpin {
        0% { transform: rotate(-10deg) scale(0.95); }
        100% { transform: rotate(10deg) scale(1.1); }
      }
      .kids-portal-text {
        font-size: 1.5rem;
        font-weight: 800;
        letter-spacing: 0.02em;
        color: #ffffff;
        text-shadow: 0 4px 15px rgba(0, 0, 0, 0.5), 0 0 25px rgba(56, 189, 248, 0.8);
        margin-bottom: 14px;
      }
      .kids-portal-dots {
        display: flex;
        gap: 8px;
        justify-content: center;
      }
      .pdot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #fde047;
        animation: dotBlink 0.8s infinite alternate;
      }
      .pdot.d2 { animation-delay: 0.25s; }
      .pdot.d3 { animation-delay: 0.5s; }
      @keyframes dotBlink {
        0% { opacity: 0.3; transform: scale(0.8); }
        100% { opacity: 1; transform: scale(1.3); }
      }

      /* Exiting state (back to standard) */
      .kids-transition-overlay.exiting .kids-transition-backdrop {
        background: radial-gradient(circle at center, #059669 0%, #065f46 50%, #064e3b 100%);
      }
      .kids-transition-overlay.exiting .kids-portal-vortex {
        background: conic-gradient(from 0deg, #34d399, #10b981, #6ee7b7, #059669);
      }

      /* Button back to standard in Kids Header */
      .kids-back-standard-btn {
        background: #ffffff;
        border: 2px solid #bae6fd;
        color: #0369a1;
        font-weight: 700;
        font-size: 0.82rem;
        padding: 8px 14px;
        border-radius: 999px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
        transition: all 0.2s;
        box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      }
      .kids-back-standard-btn:hover {
        background: #e0f2fe;
        border-color: #38bdf8;
        transform: translateY(-2px);
      }

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

      body.kids-mode-active {
        overflow: hidden !important;
      }

      /* ─── Kids World Fullscreen Overlay (Pixel Art Islamic Palace in Water) ─── */
      .kids-world-overlay {
        position: fixed;
        inset: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10000;
        display: flex;
        flex-direction: column;
        align-items: center;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.45s ease, visibility 0.45s ease;
        overflow-y: auto;
        overflow-x: hidden;
        /* Beautiful Islamic Water Palace Pixel Art Background */
        background-color: #46869f;
        background-image: 
          radial-gradient(circle at 50% 15%, rgba(255, 255, 255, 0.18), transparent 65%),
          url('images/kids-bg.jpg');
        background-repeat: no-repeat;
        background-position: center bottom;
        background-size: cover;
        background-attachment: fixed;
      }
      .kids-world-overlay.active {
        opacity: 1;
        visibility: visible;
      }

      /* Hide elements that clash with the pixel art illustration */
      .kids-rainbow-arch,
      .kids-sky-hilal,
      .kids-sky-sun,
      .kids-grass-bottom {
        display: none !important;
      }

      /* Subtle dreamy drifting clouds for living atmosphere */
      .kids-sky-cloud {
        position: fixed;
        background: rgba(255, 255, 255, 0.22);
        border-radius: 60px;
        pointer-events: none;
        z-index: 1;
        filter: blur(1.5px);
        animation: floatCloudFullscreen 48s linear infinite;
      }
      .kids-sky-cloud::before, .kids-sky-cloud::after {
        content: '';
        position: absolute;
        background: rgba(255, 255, 255, 0.22);
        border-radius: 50%;
      }
      .cloud-1 {
        width: 160px;
        height: 52px;
        top: 50px;
        left: -220px;
      }
      .cloud-1::before { width: 68px; height: 68px; top: -34px; left: 24px; }
      .cloud-1::after { width: 54px; height: 54px; top: -24px; left: 78px; }

      .cloud-2 {
        width: 190px;
        height: 60px;
        top: 140px;
        left: -260px;
        animation-delay: -14s;
        animation-duration: 44s;
        opacity: 0.85;
      }
      .cloud-2::before { width: 80px; height: 80px; top: -40px; left: 30px; }
      .cloud-2::after { width: 64px; height: 64px; top: -28px; left: 95px; }

      .cloud-3 {
        width: 130px;
        height: 44px;
        top: 260px;
        left: -180px;
        animation-delay: -26s;
        animation-duration: 38s;
        opacity: 0.78;
      }
      .cloud-3::before { width: 56px; height: 56px; top: -28px; left: 20px; }
      .cloud-3::after { width: 44px; height: 44px; top: -20px; left: 65px; }

      .cloud-4 {
        width: 175px;
        height: 55px;
        top: 390px;
        left: -240px;
        animation-delay: -8s;
        animation-duration: 50s;
        opacity: 0.75;
      }
      .cloud-4::before { width: 75px; height: 75px; top: -38px; left: 28px; }
      .cloud-4::after { width: 58px; height: 58px; top: -26px; left: 88px; }

      @keyframes floatCloudFullscreen {
        from { transform: translateX(0); }
        to { transform: translateX(calc(100vw + 320px)); }
      }

      /* Floating Crescent & Cute Stars */
      .kids-sky-hilal {
        position: fixed;
        top: 28px;
        right: 40px;
        font-size: 2.8rem;
        user-select: none;
        pointer-events: none;
        z-index: 1;
        animation: hilalRock 4s ease-in-out infinite alternate;
        filter: drop-shadow(0 0 16px rgba(254, 240, 138, 0.8));
      }
      .hilal-star {
        font-size: 1.5rem;
        display: inline-block;
        animation: starTwinkle 1.6s ease-in-out infinite alternate;
      }
      @keyframes hilalRock {
        0% { transform: rotate(-8deg) translateY(0); }
        100% { transform: rotate(10deg) translateY(-10px); }
      }
      @keyframes starTwinkle {
        0% { transform: scale(0.8) rotate(0deg); opacity: 0.7; }
        100% { transform: scale(1.2) rotate(25deg); opacity: 1; }
      }

      /* Cute Smiling Sun in Upper Left */
      .kids-sky-sun {
        position: fixed;
        top: 25px;
        left: 30px;
        font-size: 3.4rem;
        user-select: none;
        pointer-events: none;
        z-index: 1;
        filter: drop-shadow(0 0 24px rgba(253, 224, 71, 0.9));
        animation: sunSpinSlow 24s linear infinite;
      }
      @keyframes sunSpinSlow {
        0% { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(180deg) scale(1.1); }
        100% { transform: rotate(360deg) scale(1); }
      }

      /* Floating Balloons & Whimsical Lanterns */
      .kids-floating-balloon {
        position: fixed;
        pointer-events: none;
        z-index: 1;
        user-select: none;
        animation: balloonFloatUp 20s ease-in-out infinite;
      }
      .fb-1 { left: 6%; bottom: -80px; font-size: 2.6rem; animation-duration: 22s; animation-delay: 0s; }
      .fb-2 { right: 10%; bottom: -80px; font-size: 2.4rem; animation-duration: 27s; animation-delay: -11s; }
      .fb-3 { left: 90%; bottom: -80px; font-size: 2.1rem; animation-duration: 24s; animation-delay: -17s; }
      @keyframes balloonFloatUp {
        0% { transform: translateY(0) rotate(-6deg); opacity: 0; }
        10% { opacity: 0.85; }
        50% { transform: translateY(-50vh) rotate(6deg); }
        90% { opacity: 0.85; }
        100% { transform: translateY(-115vh) rotate(-6deg); opacity: 0; }
      }

      /* ─── Kids World Stage Container (Fullscreen Content Canvas) ─── */
      /* Animated Green Grass Hill at bottom */
      .kids-grass-bottom {
        position: fixed;
        bottom: -10px;
        left: -5%;
        width: 110%;
        height: 130px;
        background: radial-gradient(ellipse at center bottom, #22c55e 0%, #16a34a 50%, #15803d 100%);
        border-radius: 55% 55% 0 0;
        pointer-events: none;
        z-index: 2;
        box-shadow: 0 -8px 30px rgba(34, 197, 94, 0.45);
        animation: grassWave 6s ease-in-out infinite alternate;
      }
      .kids-grass-bottom::before {
        content: '🌸🌼🌻🌷🌺🌸🌼🌻🌷🌺🌸🌼🌻🌷🌺🌸🌼🌻🌷🌺';
        position: absolute;
        top: -22px;
        left: 0;
        width: 100%;
        font-size: 1.3rem;
        letter-spacing: 4px;
        white-space: nowrap;
        overflow: hidden;
        animation: flowerSway 4s ease-in-out infinite alternate;
      }
      .kids-grass-bottom::after {
        content: '🦋🐝🐛🦋🐝🐛🦋🐝🐛';
        position: absolute;
        top: -40px;
        left: 20%;
        font-size: 1.1rem;
        animation: bugFloat 8s ease-in-out infinite alternate;
      }
      @keyframes grassWave {
        0%  { transform: scaleX(1) translateY(0); }
        100% { transform: scaleX(1.015) translateY(4px); }
      }
      @keyframes flowerSway {
        0%  { transform: rotate(-3deg); }
        100% { transform: rotate(3deg); }
      }
      @keyframes bugFloat {
        0%  { transform: translateX(-20px) translateY(0); }
        100% { transform: translateX(30px) translateY(-10px); }
      }

      .kids-world-stage {
        position: relative;
        z-index: 3;
        width: 100%;
        min-height: 100vh;
        padding: 24px 20px 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: transparent;
        box-shadow: none;
        border: none;
        border-radius: 0;
        max-width: 100%;
        overflow-y: visible;
        transform: none !important;
      }
      .kids-content-wrapper {
        width: 100%;
        max-width: 1100px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      /* ─── Header Top Bar ─── */
      .kids-header-row {
        position: relative;
        z-index: 3;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgba(255, 255, 255, 0.92);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        border: 2.5px solid #ffffff;
        border-radius: 28px;
        padding: 16px 24px;
        box-shadow: 
          0 12px 30px rgba(15, 60, 90, 0.18),
          0 0 0 2px rgba(255, 255, 255, 0.7);
      }
      .kids-title-group {
        display: flex;
        align-items: center;
        gap: 14px;
      }
      .kids-title-icon {
        font-size: 2.2rem;
        line-height: 1;
        animation: mascotBounce 2s ease-in-out infinite alternate;
      }
      .kids-header-title {
        font-size: 1.65rem;
        font-weight: 900;
        background: linear-gradient(135deg, #0369a1 0%, #0284c7 40%, #b45309 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin: 0;
        line-height: 1.2;
        filter: drop-shadow(0 2px 4px rgba(2, 132, 199, 0.2));
      }
      .kids-header-sub {
        font-size: 0.92rem;
        font-weight: 700;
        color: #0369a1;
        margin-top: 2px;
      }
      .kids-header-actions {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .kids-back-standard-btn {
        background: linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%);
        border: 2.5px solid #22c55e;
        color: #15803d;
        font-weight: 800;
        font-size: 0.95rem;
        padding: 10px 20px;
        border-radius: 999px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        box-shadow: 0 4px 14px rgba(34, 197, 94, 0.2);
        user-select: none;
      }
      .kids-back-standard-btn:hover {
        transform: scale(1.06) translateY(-2px);
        background: #22c55e;
        color: #ffffff;
        box-shadow: 0 8px 24px rgba(34, 197, 94, 0.4);
      }
      .kids-close-btn {
        background: #ffffff;
        border: 2.5px solid #cbd5e1;
        color: #64748b;
        font-size: 1.1rem;
        font-weight: 800;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
      }
      .kids-close-btn:hover {
        background: #fee2e2;
        border-color: #ef4444;
        color: #dc2626;
        transform: scale(1.1) rotate(90deg);
      }

      @media (max-width: 640px) {
        .kids-header-row {
          flex-direction: column;
          gap: 14px;
          text-align: center;
          padding: 14px 16px;
        }
        .kids-title-group {
          flex-direction: column;
          gap: 6px;
        }
        .kids-header-title {
          font-size: 1.35rem;
        }
        .kids-playback-bar {
          flex-direction: column;
          align-items: stretch;
          text-align: center;
          gap: 12px;
        }
        .kids-playback-bar > div {
          justify-content: center;
        }
        .kids-play-btn, .kids-reward-btn {
          justify-content: center;
        }
        .kids-qori-chips-grid {
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        }
        .kids-surah-grid {
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
        }
      }

      /* ─── Mascot & Character Stage ─── */
      .kids-characters-stage {
        position: relative;
        z-index: 2;
        background: linear-gradient(135deg, rgba(255,240,255,0.95) 0%, rgba(240,255,255,0.95) 50%, rgba(255,255,220,0.95) 100%);
        backdrop-filter: blur(16px);
        border-radius: 28px;
        padding: 28px;
        box-shadow: 
          0 12px 32px rgba(255,100,200,0.2),
          0 0 0 3px rgba(255,255,255,0.8),
          inset 0 0 40px rgba(255,255,255,0.4);
        display: grid;
        grid-template-columns: 190px 1fr;
        gap: 24px;
        align-items: center;
        margin-bottom: 24px;
        border: 3px solid rgba(255,255,255,0.9);
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
        background: linear-gradient(135deg, rgba(255,247,237,0.96) 0%, rgba(255,237,255,0.96) 100%);
        backdrop-filter: blur(16px);
        border: 3px solid rgba(255,255,255,0.9);
        border-radius: 28px;
        padding: 22px 26px;
        box-shadow: 
          0 15px 35px rgba(255,100,50,0.12),
          0 0 0 3px rgba(255,255,255,0.5);
      }
      .kids-section-title {
        font-size: 1.15rem;
        font-weight: 900;
        background: linear-gradient(135deg, #f97316 0%, #ec4899 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .kids-qori-chips-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(185px, 1fr));
        gap: 14px;
      }
      .kids-qori-chip {
        background: linear-gradient(135deg, #fff7ed 0%, #fef3c7 100%);
        border: 2.5px solid #fde68a;
        border-radius: 20px;
        padding: 12px 16px;
        display: flex;
        align-items: center;
        gap: 12px;
        cursor: pointer;
        transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        box-shadow: 0 4px 12px rgba(251, 191, 36, 0.12);
      }
      .kids-qori-chip:nth-child(2) {
        background: linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%);
        border-color: #6ee7b7;
      }
      .kids-qori-chip:nth-child(3) {
        background: linear-gradient(135deg, #fdf4ff 0%, #ede9fe 100%);
        border-color: #c4b5fd;
      }
      .kids-qori-chip:nth-child(4) {
        background: linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%);
        border-color: #fda4af;
      }
      .kids-qori-chip:nth-child(5) {
        background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
        border-color: #7dd3fc;
      }
      .kids-qori-chip:hover {
        transform: translateY(-5px) scale(1.04);
        box-shadow: 0 12px 24px rgba(255, 100, 150, 0.25);
      }
      .kids-qori-chip.active {
        background: linear-gradient(135deg, #ff6b9d 0%, #ff9f43 100%);
        color: #ffffff;
        border-color: #ff6b9d;
        box-shadow: 0 10px 28px rgba(255, 100, 150, 0.5);
        transform: scale(1.05);
      }
      .kids-qori-avatar {
        font-size: 1.7rem;
      }
      .kids-qori-name {
        font-size: 0.88rem;
        font-weight: 800;
        line-height: 1.25;
      }
      .kids-qori-style {
        font-size: 0.74rem;
        opacity: 0.88;
      }

      /* ─── Big Playback Bar ─── */
      .kids-playback-bar {
        background: linear-gradient(135deg, rgba(255,250,255,0.97) 0%, rgba(240,255,250,0.97) 100%);
        backdrop-filter: blur(20px);
        border-radius: 28px;
        padding: 18px 26px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        box-shadow: 
          0 15px 35px rgba(255,100,180,0.15),
          0 0 0 3px rgba(255,255,255,0.7);
        border: 3px solid rgba(255,255,255,0.9);
        position: relative;
        z-index: 2;
      }
      .kids-play-btn {
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        color: #ffffff;
        font-weight: 800;
        font-size: 1.05rem;
        padding: 12px 30px;
        border-radius: 999px;
        border: none;
        cursor: pointer;
        box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
        display: flex;
        align-items: center;
        gap: 8px;
        transition: transform 0.25s, box-shadow 0.25s;
      }
      .kids-play-btn:hover {
        transform: scale(1.06);
        box-shadow: 0 10px 26px rgba(16, 185, 129, 0.55);
      }
      .kids-reward-btn {
        background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
        color: #ffffff;
        font-weight: 800;
        font-size: 0.98rem;
        padding: 12px 24px;
        border-radius: 999px;
        border: none;
        cursor: pointer;
        box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4);
        display: flex;
        align-items: center;
        gap: 8px;
        transition: transform 0.25s, box-shadow 0.25s;
        animation: rewardBtnPulse 2.5s infinite alternate;
      }
      @keyframes rewardBtnPulse {
        0% { transform: scale(1); }
        100% { transform: scale(1.04); box-shadow: 0 8px 24px rgba(245, 158, 11, 0.55); }
      }
      .kids-reward-btn:hover {
        transform: scale(1.08);
      }

      /* ─── Kids Surah Cards Grid ─── */
      .kids-surah-explorer {
        position: relative;
        z-index: 2;
        background: linear-gradient(135deg, rgba(240,255,255,0.96) 0%, rgba(255,245,255,0.96) 100%);
        backdrop-filter: blur(16px);
        border: 3px solid rgba(255,255,255,0.9);
        border-radius: 28px;
        padding: 22px 26px;
        box-shadow: 
          0 15px 35px rgba(100,50,200,0.15),
          0 0 0 3px rgba(255,255,255,0.6);
      }
      .kids-surah-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        gap: 16px;
      }
      .kids-surah-card {
        background: linear-gradient(135deg, #fff7ed 0%, #fef3c7 100%);
        border: 3px solid #fde68a;
        border-radius: 22px;
        padding: 18px 14px;
        text-align: center;
        cursor: pointer;
        transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        box-shadow: 0 6px 16px rgba(251, 191, 36, 0.15);
      }
      .kids-surah-card:nth-child(3n+1) {
        background: linear-gradient(135deg, #fdf4ff 0%, #f3e8ff 100%);
        border-color: #d8b4fe;
        box-shadow: 0 6px 16px rgba(167, 139, 250, 0.2);
      }
      .kids-surah-card:nth-child(3n+2) {
        background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
        border-color: #86efac;
        box-shadow: 0 6px 16px rgba(74, 222, 128, 0.2);
      }
      .kids-surah-card:nth-child(3n+3) {
        background: linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%);
        border-color: #fdba74;
        box-shadow: 0 6px 16px rgba(251, 146, 60, 0.2);
      }
      .kids-surah-card:hover {
        transform: translateY(-8px) scale(1.08);
        border-color: #ff6b9d;
        box-shadow: 0 20px 35px rgba(255, 100, 150, 0.3);
      }
      .kids-surah-card.active {
        background: linear-gradient(135deg, #fdf2ff 0%, #fbcfe8 100%);
        border-color: #ec4899;
        box-shadow: 0 12px 32px rgba(236, 72, 153, 0.4);
        transform: scale(1.05);
      }
      .kids-surah-card-emoji {
        font-size: 2.4rem;
        margin-bottom: 8px;
        filter: drop-shadow(0 4px 6px rgba(0,0,0,0.08));
      }
      .kids-surah-card-name {
        font-weight: 800;
        font-size: 1rem;
        color: #0f172a;
      }
      .kids-surah-card-label {
        font-size: 0.8rem;
        color: #0369a1;
        font-weight: 700;
        margin-top: 3px;
      }

      /* ─── Confetti & Celebration Modal ─── */
      .kids-celebration-modal {
        position: fixed;
        inset: 0;
        background: rgba(15, 23, 42, 0.8);
        backdrop-filter: blur(8px);
        z-index: 10070;
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

      /* Floating Magic Canvas for Tap Sparkles Across Fullscreen */
      #kids-sparkle-canvas {
        position: fixed;
        inset: 0;
        width: 100vw;
        height: 100vh;
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
    launcher.addEventListener('click', requestKidsMode);
    document.body.appendChild(launcher);

    // 2. Fullscreen Kids World Environment
    const overlay = document.createElement('div');
    overlay.className = 'kids-world-overlay';
    overlay.id = 'kids-world-overlay';
    overlay.innerHTML = `
      <canvas id="kids-sparkle-canvas"></canvas>

      <!-- Giant Cheerful Rainbow Arch -->
      <div class="kids-rainbow-arch"></div>

      <!-- Cute Smiling Sun in Upper Left -->
      <div class="kids-sky-sun">☀️</div>

      <!-- Whimsical Drifting Cartoon Clouds -->
      <div class="kids-sky-cloud cloud-1"></div>
      <div class="kids-sky-cloud cloud-2"></div>
      <div class="kids-sky-cloud cloud-3"></div>
      <div class="kids-sky-cloud cloud-4"></div>

      <!-- Floating Crescent Moon & Shining Star -->
      <div class="kids-sky-hilal">🌙 <span class="hilal-star">⭐</span></div>

      <!-- Floating Balloons & Whimsical Lanterns -->
      <div class="kids-floating-balloon fb-1">🎈</div>
      <div class="kids-floating-balloon fb-2">🏮</div>
      <div class="kids-floating-balloon fb-3">✨</div>

      <!-- Main Scrollable Fullscreen Playground Stage -->
      <div class="kids-world-stage" id="kids-stage-content">
        <div class="kids-content-wrapper">

          <!-- Header Top Bar -->
          <div class="kids-header-row">
            <div class="kids-title-group">
              <span class="kids-title-icon">🎈</span>
              <div>
                <h2 class="kids-header-title" id="kids-modal-title">${t.titleKidsWorld}</h2>
                <div class="kids-header-sub" id="kids-modal-sub">${t.subKidsWorld}</div>
              </div>
            </div>
            <div class="kids-header-actions">
              <button class="kids-back-standard-btn" id="btn-back-to-standard" title="${t.btnBackToStandard}">
                <span class="btn-icon">📖</span> <span id="kids-lbl-back-std">${t.btnBackToStandard}</span>
              </button>
              <button class="kids-close-btn" id="btn-close-kids" title="${t.btnClose}">✕</button>
            </div>
          </div>

          <!-- Mascot & Speech Stage -->
          <div class="kids-characters-stage">
            <div class="kids-star-mascot-wrapper">
              ${getStarMascotSvg()}
              <div style="font-size:0.85rem; font-weight:800; color:#b45309; margin-top:8px;">⭐ Najm si Bintang Ceria</div>
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
            <div style="display:flex; align-items:center; gap:14px;">
              <button class="kids-play-btn" id="btn-kids-play">
                <span>▶</span> <span id="kids-play-label">${t.btnPlay}</span>
              </button>
              <div style="font-weight:800; color:#0369a1; font-size:1.05rem;" id="kids-now-playing-title">
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

        </div> <!-- /.kids-content-wrapper -->
      </div> <!-- /.kids-world-stage -->

      <!-- Animated Green Grass Hill & Flowers at bottom -->
      <div class="kids-grass-bottom"></div>
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

    // 4. Confirmation Popup Modal (Mode Switch Prompt)
    const confirmModal = document.createElement('div');
    confirmModal.className = 'kids-confirm-overlay';
    confirmModal.id = 'kids-confirm-overlay';
    confirmModal.innerHTML = `
      <div class="kids-confirm-box">
        <div class="kids-confirm-badge">✨ MODE KHUSUS ANAK ✨</div>
        <div class="kids-confirm-mascot-row">⭐ 🎈 🌟</div>
        <h3 class="kids-confirm-title" id="kids-confirm-title">${t.popupKidsTitle}</h3>
        <p class="kids-confirm-desc" id="kids-confirm-desc">${t.popupKidsDesc}</p>
        
        <div class="kids-confirm-features">
          <div class="kids-feat-chip"><span>👦</span> <span id="kids-feat-qori">${t.popupFeatQori}</span></div>
          <div class="kids-feat-chip"><span>⭐</span> <span id="kids-feat-mascot">${t.popupFeatMascot}</span></div>
          <div class="kids-feat-chip"><span>🏆</span> <span id="kids-feat-reward">${t.popupFeatReward}</span></div>
        </div>

        <div class="kids-confirm-actions">
          <button class="kids-btn-secondary" id="btn-cancel-kids-modal">
            ${t.btnStayStandard}
          </button>
          <button class="kids-btn-primary" id="btn-accept-kids-modal">
            ${t.btnEnterKids}
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(confirmModal);

    // 5. Magical Transition Animation Overlay
    const transOverlay = document.createElement('div');
    transOverlay.className = 'kids-transition-overlay';
    transOverlay.id = 'kids-transition-overlay';
    transOverlay.innerHTML = `
      <div class="kids-transition-backdrop"></div>
      <div class="kids-portal-vortex"></div>
      <div class="kids-transition-particles" id="kids-transition-particles"></div>
      <div class="kids-transition-card">
        <div class="kids-portal-mascot" id="kids-portal-mascot">⭐</div>
        <h2 class="kids-portal-text" id="kids-portal-text">${t.transitionEntering}</h2>
        <div class="kids-portal-dots">
          <span class="pdot d1"></span>
          <span class="pdot d2"></span>
          <span class="pdot d3"></span>
        </div>
      </div>
    `;
    document.body.appendChild(transOverlay);

    // Setup Event Listeners
    document.getElementById('btn-close-kids')?.addEventListener('click', transitionToStandardMode);
    document.getElementById('btn-back-to-standard')?.addEventListener('click', transitionToStandardMode);
    document.getElementById('btn-cancel-kids-modal')?.addEventListener('click', closeKidsConfirm);
    confirmModal.addEventListener('click', (e) => {
      if (e.target === confirmModal) closeKidsConfirm();
    });
    document.getElementById('btn-accept-kids-modal')?.addEventListener('click', transitionToKidsMode);

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
  // APP MODE & MAGICAL TRANSITION SYSTEM
  // ══════════════════════════════════════════
  function playMagicalChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.1);

        gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.1);
        gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + idx * 0.1 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.1 + 0.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.1);
        osc.stop(ctx.currentTime + idx * 0.1 + 0.55);
      });
    } catch (e) {
      // AudioContext safe fallback
    }
  }

  function spawnTransitionParticles(container) {
    if (!container) return;
    container.innerHTML = '';
    const emojis = ['⭐', '🌟', '🎈', '💖', '🎶', '✨', '🌙', '💫', '🎉'];
    const count = 24;
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.className = 'transition-burst-star';
      star.textContent = emojis[i % emojis.length];

      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.3;
      const distance = 160 + Math.random() * 260;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      const rot = (Math.random() * 360 - 180) + 'deg';

      if (star.style && typeof star.style.setProperty === 'function') {
        star.style.setProperty('--tx', `${tx}px`);
        star.style.setProperty('--ty', `${ty}px`);
        star.style.setProperty('--rot', rot);
      } else {
        star.style.transform = `translate(${tx}px, ${ty}px) rotate(${rot})`;
      }
      star.style.left = '50%';
      star.style.top = '50%';
      star.style.animationDelay = `${(i % 5) * 0.04}s`;
      container.appendChild(star);
    }
  }

  function setAppMode(mode) {
    if (window.state) {
      window.state.appMode = mode;
    }
    const btnStd = document.getElementById('btn-mode-standard');
    const btnKids = document.getElementById('btn-mode-kids');
    if (btnStd) btnStd.classList.toggle('active', mode === 'standard');
    if (btnKids) btnKids.classList.toggle('active', mode === 'kids');
  }

  function requestKidsMode() {
    injectKidsStyles();
    injectKidsWorldDOM();

    const confirmOverlay = document.getElementById('kids-confirm-overlay');
    if (confirmOverlay) {
      confirmOverlay.classList.add('active');
    }
  }

  function closeKidsConfirm() {
    const confirmOverlay = document.getElementById('kids-confirm-overlay');
    if (confirmOverlay) {
      confirmOverlay.classList.remove('active');
    }
  }

  function transitionToKidsMode() {
    closeKidsConfirm();
    playMagicalChime();

    const transitionOverlay = document.getElementById('kids-transition-overlay');
    const portalText = document.getElementById('kids-portal-text');
    const particlesContainer = document.getElementById('kids-transition-particles');
    const t = getKidsDict();

    if (portalText) portalText.textContent = t.transitionEntering;
    if (particlesContainer) spawnTransitionParticles(particlesContainer);

    if (transitionOverlay) {
      transitionOverlay.classList.remove('exiting');
      transitionOverlay.classList.add('active');
    }

    setTimeout(() => {
      openKidsWorld();
      setTimeout(() => {
        if (transitionOverlay) transitionOverlay.classList.remove('active');
      }, 400);
    }, 1100);
  }

  function switchToStandardMode() {
    const kidsOverlay = document.getElementById('kids-world-overlay');
    if (kidsOverlay && kidsOverlay.classList.contains('active')) {
      transitionToStandardMode();
    } else {
      setAppMode('standard');
    }
  }

  function transitionToStandardMode() {
    const transitionOverlay = document.getElementById('kids-transition-overlay');
    const portalText = document.getElementById('kids-portal-text');
    const particlesContainer = document.getElementById('kids-transition-particles');
    const t = getKidsDict();

    if (portalText) portalText.textContent = t.transitionExiting;
    if (particlesContainer) particlesContainer.innerHTML = '';

    if (transitionOverlay) {
      transitionOverlay.classList.add('exiting', 'active');
    }

    setTimeout(() => {
      closeKidsWorld();
      setTimeout(() => {
        if (transitionOverlay) transitionOverlay.classList.remove('active', 'exiting');
      }, 350);
    }, 850);
  }

  // ══════════════════════════════════════════
  // PLAYBACK & QORI CONTROLS
  // ══════════════════════════════════════════
  let hasStartedPlayingOnce = false;

  function openKidsWorld() {
    injectKidsStyles();
    injectKidsWorldDOM();

    hasStartedPlayingOnce = !!(window.state && window.state.isPlaying);

    const overlay = document.getElementById('kids-world-overlay');
    if (overlay) {
      overlay.classList.add('active');
      renderKidsSurahs();
      updateKidsUI();
    }
    document.body.classList.add('kids-mode-active');
    setAppMode('kids');
  }

  function closeKidsWorld() {
    const overlay = document.getElementById('kids-world-overlay');
    if (overlay) overlay.classList.remove('active');
    document.body.classList.remove('kids-mode-active');
    setAppMode('standard');
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
      const iconSpan = playBtn.querySelector ? (playBtn.querySelector('.btn-icon') || playBtn.querySelector('span')) : null;
      if (iconSpan) iconSpan.textContent = isPlaying ? '⏸' : '▶';
    }

    const nowTitle = document.getElementById('kids-now-playing-title');
    if (nowTitle && surah) {
      nowTitle.textContent = `${t.nowPlayingKids} ${surah.id}. ${surah.name}`;
    }

    const mascot = document.getElementById('mascot-najm');
    const eq = document.getElementById('kids-rainbow-eq');
    const msg = document.getElementById('kids-mascot-message');

    if (isPlaying) {
      hasStartedPlayingOnce = true;
      mascot?.classList.add('dancing');
      eq?.classList.add('playing');
      if (msg) msg.textContent = t.mascotPlaying;
    } else {
      mascot?.classList.remove('dancing');
      eq?.classList.remove('playing');
      if (msg) msg.textContent = hasStartedPlayingOnce ? t.mascotPaused : t.mascotGreet;
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
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const overlay = document.getElementById('kids-world-overlay');
    overlay?.addEventListener('pointerdown', (e) => {
      // Don't burst if tapping directly on actionable controls
      if (e.target.closest('button, .kids-qori-chip, .kids-surah-card')) return;
      burstTapSparkles(e.clientX, e.clientY);
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

    const lblModeStd = document.getElementById('lbl-mode-standard');
    if (lblModeStd) lblModeStd.textContent = t.lblModeStandard;

    const lblModeKids = document.getElementById('lbl-mode-kids');
    if (lblModeKids) lblModeKids.textContent = t.lblModeKids;

    const confirmTitle = document.getElementById('kids-confirm-title');
    if (confirmTitle) confirmTitle.textContent = t.popupKidsTitle;

    const confirmDesc = document.getElementById('kids-confirm-desc');
    if (confirmDesc) confirmDesc.textContent = t.popupKidsDesc;

    const featQori = document.getElementById('kids-feat-qori');
    if (featQori) featQori.textContent = t.popupFeatQori;

    const featMascot = document.getElementById('kids-feat-mascot');
    if (featMascot) featMascot.textContent = t.popupFeatMascot;

    const featReward = document.getElementById('kids-feat-reward');
    if (featReward) featReward.textContent = t.popupFeatReward;

    const btnAccept = document.getElementById('btn-accept-kids-modal');
    if (btnAccept) btnAccept.textContent = t.btnEnterKids;

    const btnCancel = document.getElementById('btn-cancel-kids-modal');
    if (btnCancel) btnCancel.textContent = t.btnStayStandard;

    const lblBackStd = document.getElementById('kids-lbl-back-std');
    if (lblBackStd) lblBackStd.textContent = t.btnBackToStandard;

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
  window.requestKidsMode = requestKidsMode;
  window.closeKidsConfirm = closeKidsConfirm;
  window.transitionToKidsMode = transitionToKidsMode;
  window.switchToStandardMode = switchToStandardMode;
  window.transitionToStandardMode = transitionToStandardMode;
  window.setAppMode = setAppMode;

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

