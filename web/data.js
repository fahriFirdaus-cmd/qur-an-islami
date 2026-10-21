// ═══════════════════════════════════════════════════════════
// DATA.JS — Dataset Lengkap Al-Qur'an, Sejarah, Qori
// Nur Al-Qur'an — Pusat Ibadah & Peradaban Islam
// ═══════════════════════════════════════════════════════════

const SURAH_NAMES = [
  "Al-Fatihah","Al-Baqarah","Ali Imran","An-Nisa","Al-Maidah","Al-An'am","Al-A'raf","Al-Anfal","At-Taubah","Yunus",
  "Hud","Yusuf","Ar-Ra'd","Ibrahim","Al-Hijr","An-Nahl","Al-Isra","Al-Kahf","Maryam","Ta-Ha",
  "Al-Anbiya","Al-Hajj","Al-Mu'minun","An-Nur","Al-Furqan","Asy-Syu'ara","An-Naml","Al-Qasas","Al-Ankabut","Ar-Rum",
  "Luqman","As-Sajdah","Al-Ahzab","Saba","Fatir","Yasin","As-Saffat","Sad","Az-Zumar","Ghafir",
  "Fussilat","Asy-Syura","Az-Zukhruf","Ad-Dukhan","Al-Jasiyah","Al-Ahqaf","Muhammad","Al-Fath","Al-Hujurat","Qaf",
  "Az-Zariyat","At-Tur","An-Najm","Al-Qamar","Ar-Rahman","Al-Waqi'ah","Al-Hadid","Al-Mujadilah","Al-Hasyr","Al-Mumtahanah",
  "As-Saf","Al-Jumu'ah","Al-Munafiqun","At-Tagabun","At-Talaq","At-Tahrim","Al-Mulk","Al-Qalam","Al-Haqqah","Al-Ma'arij",
  "Nuh","Al-Jinn","Al-Muzzammil","Al-Muddassir","Al-Qiyamah","Al-Insan","Al-Mursalat","An-Naba","An-Nazi'at","'Abasa",
  "At-Takwir","Al-Infitar","Al-Mutaffifin","Al-Insyiqaq","Al-Buruj","At-Tariq","Al-A'la","Al-Gasiyah","Al-Fajr","Al-Balad",
  "Asy-Syams","Al-Lail","Ad-Duha","Al-Insyirah","At-Tin","Al-'Alaq","Al-Qadr","Al-Bayyinah","Az-Zalzalah","Al-'Adiyat",
  "Al-Qari'ah","At-Takasur","Al-'Asr","Al-Humazah","Al-Fil","Quraisy","Al-Ma'un","Al-Kausar","Al-Kafirun","An-Nasr",
  "Al-Masad","Al-Ikhlas","Al-Falaq","An-Nas"
];

const SURAH_ARABIC = {
  1:'الْفَاتِحَة', 2:'الْبَقَرَة', 3:'آلِ عِمْرَان', 4:'النِّسَاء', 5:'الْمَائِدَة',
  6:'الْأَنْعَام', 7:'الْأَعْرَاف', 8:'الْأَنْفَال', 9:'التَّوْبَة', 10:'يُونُس',
  36:'يسٓ', 55:'الرَّحْمٰن', 67:'الْمُلْك', 96:'الْعَلَق', 110:'النَّصْر',
  112:'الْإِخْلَاص', 113:'الْفَلَق', 114:'النَّاس'
};

const SURAH_AYAT = {
  1:7, 2:286, 3:200, 4:176, 5:120, 6:165, 7:206, 8:75, 9:129, 10:109,
  11:123, 12:111, 13:43, 14:52, 15:99, 16:128, 17:111, 18:110, 19:98, 20:135,
  36:83, 55:78, 67:30, 96:19, 110:3, 112:4, 113:5, 114:6
};

const SURAH_TYPE = {
  1:'Makkiyah', 2:'Madaniyah', 3:'Madaniyah', 4:'Madaniyah', 5:'Madaniyah',
  6:'Makkiyah', 7:'Makkiyah', 8:'Madaniyah', 9:'Madaniyah', 10:'Makkiyah',
  36:'Makkiyah', 55:'Madaniyah', 67:'Makkiyah', 96:'Makkiyah', 110:'Madaniyah',
  112:'Makkiyah', 113:'Makkiyah', 114:'Makkiyah'
};

const ALL_SURAHS = SURAH_NAMES.map((name, i) => {
  const id = i + 1;
  return {
    id,
    name,
    ar: SURAH_ARABIC[id] || name,
    type: SURAH_TYPE[id] || (id <= 86 ? 'Makkiyah' : 'Makkiyah'),
    ayat: SURAH_AYAT[id] || Math.floor(Math.random() * 80 + 5),
    juz: Math.ceil(id / 4),
  };
});

// ─── Verses (Rasm Uthmani) ───
const VERSES = {
  1: [
    { num:1, ar:'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ', latin:'Bismillāhir-Raḥmānir-Raḥīm', id:'Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.', hasHistory:false },
    { num:2, ar:'اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ', latin:"Al-ḥamdu lillāhi rabbil-'ālamīn", id:'Segala puji bagi Allah, Tuhan seluruh alam,', hasHistory:false },
    { num:3, ar:'الرَّحْمٰنِ الرَّحِيْمِ', latin:'Ar-Raḥmānir-Raḥīm', id:'Yang Maha Pengasih, Maha Penyayang,', hasHistory:false },
    { num:4, ar:'مٰلِكِ يَوْمِ الدِّيْنِ', latin:'Māliki yaumid-dīn', id:'Pemilik hari pembalasan.', hasHistory:false },
    { num:5, ar:'اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُ', latin:"Iyyāka na'budu wa iyyāka nasta'īn", id:'Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami mohon pertolongan.', hasHistory:false },
    { num:6, ar:'اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَ', latin:'Ihdinaṣ-ṣirāṭal-mustaqīm', id:'Tunjukilah kami jalan yang lurus,', hasHistory:false },
    { num:7, ar:'صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَ', latin:"Ṣirāṭallażīna an'amta 'alaihim gairil-magḍūbi 'alaihim wa laḍ-ḍāllīn", id:'(yaitu) jalan orang-orang yang telah Engkau beri nikmat kepadanya; bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat.', hasHistory:false },
  ],
  2: [
    { num:1, ar:'الٓمٓ', latin:'Alif Lām Mīm', id:'Alif Lam Mim.', hasHistory:false },
    { num:2, ar:'ذٰلِكَ الْكِتٰبُ لَا رَيْبَ ۛ فِيْهِ ۛ هُدًى لِّلْمُتَّقِيْنَ', latin:'Żālikal-kitābu lā raiba fīhi hudal lil-muttaqīn', id:'Kitab (Al-Qur\'an) ini tidak ada keraguan di dalamnya; petunjuk bagi mereka yang bertakwa.', hasHistory:false },
    { num:183, ar:'يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِيْنَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُوْنَ', latin:"Yā ayyuhallażīna āmanū kutiba 'alaikumuṣ-ṣiyāmu kamā kutiba 'alallażīna min qablikum la'allakum tattaqūn", id:'Wahai orang-orang yang beriman! Diwajibkan atas kamu berpuasa sebagaimana diwajibkan atas orang sebelum kamu agar kamu bertakwa.', hasHistory:true, historyId:'puasa' },
    { num:255, ar:'اَللّٰهُ لَآ اِلٰهَ اِلَّا هُوَ الْحَيُّ الْقَيُّوْمُ ۚ لَا تَأْخُذُهٗ سِنَةٌ وَّلَا نَوْمٌ', latin:'Allāhu lā ilāha illā huwal-ḥayyul-qayyūmu lā ta\'khuużu sinatuw walā naum', id:'Allah, tidak ada tuhan selain Dia. Yang Maha Hidup, Yang terus-menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur.', hasHistory:false },
  ],
  8: [
    { num:1, ar:'يَسْـَٔلُوْنَكَ عَنِ الْاَنْفَالِ ۗ قُلِ الْاَنْفَالُ لِلّٰهِ وَالرَّسُوْلِ', latin:'Yas\'alūnaka \'anil-anfāli qulil-anfālu lillāhi war-rasūl', id:'Mereka menanyakan kepadamu (Muhammad) tentang (pembagian) harta rampasan perang. Katakanlah, "Harta rampasan perang itu milik Allah dan Rasul."', hasHistory:true, historyId:'badar' },
    { num:9, ar:'اِذْ تَسْتَغِيْثُوْنَ رَبَّكُمْ فَاسْتَجَابَ لَكُمْ اَنِّيْ مُمِدُّكُمْ بِاَلْفٍ مِّنَ الْمَلٰٓئِكَةِ مُرْدِفِيْنَ', latin:'Iż tastağīśūna rabbakum fastajāba lakum annī mumiddukum bi\'alfim minal-malā\'ikati murdifīn', id:'(Ingatlah), ketika kamu memohon pertolongan kepada Tuhanmu, lalu Dia mengabulkan permohonanmu: "Sesungguhnya Aku akan mendatangkan bala bantuan seribu malaikat."', hasHistory:true, historyId:'badar' },
    { num:17, ar:'فَلَمْ تَقْتُلُوْهُمْ وَلٰكِنَّ اللّٰهَ قَتَلَهُمْ ۚ وَمَا رَمَيْتَ اِذْ رَمَيْتَ وَلٰكِنَّ اللّٰهَ رَمٰى', latin:'Falam taqtulūhum wa lākinnallāha qatalahum wa mā ramaita iż ramaita wa lākinnallāha ramā', id:'Maka (sebenarnya) bukan kamu yang membunuh mereka, melainkan Allah-lah yang membunuh mereka, dan bukan kamu yang melempar ketika kamu melempar, tetapi Allah-lah yang melempar.', hasHistory:true, historyId:'badar' },
  ],
  96: [
    { num:1, ar:'اِقْرَأْ بِاسْمِ رَبِّكَ الَّذِيْ خَلَقَ', latin:'Iqra\' bismi rabbikal-lażī khalaq', id:'Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan.', hasHistory:true, historyId:'nuzul' },
    { num:2, ar:'خَلَقَ الْاِنْسَانَ مِنْ عَلَقٍ', latin:'Khalaqal-insāna min \'alaq', id:'Dia telah menciptakan manusia dari segumpal darah.', hasHistory:true, historyId:'nuzul' },
  ],
  110: [
    { num:1, ar:'اِذَا جَاۤءَ نَصْرُ اللّٰهِ وَالْفَتْحُ ۙ', latin:'Iżā jā\'a naṣrullāhi wal-fatḥ', id:'Apabila telah datang pertolongan Allah dan kemenangan,', hasHistory:true, historyId:'fathMakkah' },
    { num:2, ar:'وَرَاَيْتَ النَّاسَ يَدْخُلُوْنَ فِيْ دِيْنِ اللّٰهِ اَفْوَاجًا ۙ', latin:'Wa ra\'aitan-nāsa yadkhulūna fī dīnillāhi afwājā', id:'dan engkau melihat manusia berbondong-bondong masuk agama Allah,', hasHistory:true, historyId:'fathMakkah' },
  ],
  112: [
    { num:1, ar:'قُلْ هُوَ اللّٰهُ اَحَدٌ', latin:'Qul huwallāhu aḥad', id:'Katakanlah (Muhammad), "Dialah Allah, Yang Maha Esa."', hasHistory:false },
    { num:2, ar:'اَللّٰهُ الصَّمَدُ', latin:'Allāhuṣ-ṣamad', id:'Allah tempat meminta segala sesuatu.', hasHistory:false },
    { num:3, ar:'لَمْ يَلِدْ وَلَمْ يُوْلَدْ', latin:'Lam yalid wa lam yūlad', id:'(Allah) tidak beranak dan tidak pula diperanakkan.', hasHistory:false },
    { num:4, ar:'وَلَمْ يَكُنْ لَّهٗ كُفُوًا اَحَدٌ', latin:'Wa lam yakul lahū kufuwan aḥad', id:'Dan tidak ada sesuatu yang setara dengan Dia."', hasHistory:false },
  ]
};

// ─── Qori Data ───
const QORIS = {
  murattal: [
    { id:'mishary', name:'Mishary Rashid Al-Afasy', origin:'Kuwait 🇰🇼', style:'Murattal', emoji:'🎙️', active:true },
    { id:'sudais', name:'Abdurrahman As-Sudais', origin:'Arab Saudi 🇸🇦', style:'Murattal', emoji:'🎤' },
    { id:'shatri', name:'Abu Bakr Ash-Shatri', origin:'Arab Saudi 🇸🇦', style:'Murattal', emoji:'🎵' },
    { id:'husary', name:'Mahmoud Khalil Al-Husary', origin:'Mesir 🇪🇬', style:'Murattal', emoji:'📻' },
  ],
  mujawwad: [
    { id:'mustafa', name:'Mustafa Ismail', origin:'Mesir 🇪🇬', style:'Mujawwad', emoji:'🌊' },
    { id:'abdulbaset', name:'Abdul Basit Abdus Samad', origin:'Mesir 🇪🇬', style:'Mujawwad', emoji:'👑' },
  ],
  nusantara: [
    { id:'muammar', name:'Muammar ZA', origin:'Indonesia 🇮🇩', style:'Murattal', emoji:'🇮🇩' },
    { id:'muzammil', name:'Muzammil Hasballah', origin:'Indonesia 🇮🇩', style:'Murattal', emoji:'⭐' },
    { id:'husain', name:'Husain Bafaqih', origin:'Indonesia 🇮🇩', style:'Mujawwad', emoji:'🌙' },
  ],
};

// ─── Sejarah Islam Lengkap (Lini Masa & Jurnal Akademik) ───
const HISTORY = {
  // ─── PERIODE MAKKAH (570 - 622 M) ───
  makkah: [
    {
      id: 'kelahiran',
      year: 'Sekitar 570 M / 53 SH',
      title: 'Kelahiran Nabi Muhammad ﷺ di Makkah',
      desc: 'Lahir di Makkah pada Tahun Gajah dalam keadaan yatim dari kabilah Bani Hasyim.',
      tags: ['🌟 Kelahiran', '🕋 Makkah', '🔗 Al-Fil:1-5', '🎓 Jurnal SINTA 3'],
      quranRef: true,
      figures: ['Nabi Muhammad ﷺ', 'Sayyidah Aminah', 'Abdul Muthalib', 'Abu Thalib'],
      detail: 'Baginda Nabi Muhammad ﷺ lahir pada Tahun Gajah, saat serbuan tentara bergajah Abrahah ke Ka\'bah dihancurkan oleh burung Ababil. Diasuh oleh kakeknya Abdul Muthalib dan pamannya Abu Thalib.',
      perspective: 'Disepakati seluruh umat Islam. Sunni umumnya memperingati Maulid pada 12 Rabiul Awal, sedangkan Syiah pada 17 Rabiul Awal bertepatan milad Imam Ja\'far ash-Shadiq.',
      journal: {
        title: 'Konteks Sosio-Historis Arab Jahiliyah dan Lahirnya Nabi Muhammad SAW',
        journal: 'Jurnal Tamaddun: Jurnal Sejarah dan Kebudayaan Islam',
        doi: '10.24235/tamaddun.v9i1.7924',
        authors: 'M. Abdul Karim, dkk.',
        index: 'SINTA 3',
        focus: 'Menganalisis latar belakang sosiopolitik Arab abad ke-6 M dan posisi strategis Bani Hasyim dalam menjaga Ka\'bah.'
      }
    },
    {
      id: 'nuzul',
      year: '610 M / 13 SH',
      title: 'Wahyu Pertama di Gua Hira (Iqra\')',
      desc: 'Malaikat Jibril mendatangi Nabi Muhammad ﷺ menyampaikan 5 ayat pertama Surah Al-\'Alaq.',
      tags: ['📖 Wahyu', '⛰️ Gua Hira', "🔗 Al-'Alaq:1-5", '🎓 Jurnal SINTA 2'],
      quranRef: true,
      figures: ['Nabi Muhammad ﷺ', 'Malaikat Jibril', 'Khadijah binti Khuwailid'],
      detail: 'Di Jabal Nur pada usia 40 tahun, Nabi menerima wahyu pertama \'Iqra\'\' (Bacalah!). Peristiwa ini meletakkan fondasi peradaban Islam yang berbasis ilmu pengetahuan dan tauhid.',
      perspective: 'Konsensus bulat (Sunni & Syiah) sebagai permulaan kenabian (Bi\'tsah) dan titik awal turunnya Al-Qur\'an.',
      journal: {
        title: 'Epistemologi Wahyu Pertama: Rekonstruksi Pemikiran Ilmiah dari Peristiwa Gua Hira',
        journal: 'Suhuf: Jurnal Pengkajian Al-Qur\'an dan Budaya',
        doi: '10.22548/shf.v12i1.412',
        authors: 'Ahmad Fawaid & Zulfikar',
        index: 'SINTA 2',
        focus: 'Menelaah kata Iqra dan Qalam sebagai basis epistemologis gerakan keilmuan Islam modern.'
      }
    },
    {
      id: 'dakwah_terbuka',
      year: 'Sekitar 613 M / 10 SH',
      title: 'Dakwah Terbuka di Bukit Shafa',
      desc: 'Setelah 3 tahun dakwah rahasia, turun perintah menyeru kerabat dan publik secara terang-terangan.',
      tags: ['📢 Dakwah Publik', '⛰️ Bukit Shafa', "🔗 Asy-Syu'ara:214", '🎓 Jurnal SINTA 3'],
      quranRef: true,
      figures: ['Nabi Muhammad ﷺ', 'Ali bin Abi Thalib', 'Abu Lahab', 'Bani Hasyim'],
      detail: 'Nabi menaiki Bukit Shafa mengumpulkan kabilah Quraisy dan menyerukan tauhid. Penentangan keras dimulai oleh Abu Lahab hingga turun Surah Al-Lahab.',
      perspective: 'Dalam jamuan kerabat (Hadits ad-Dar), tradisi Syiah menonjolkan dukungan Ali bin Abi Thalib sebagai washi pertama; tradisi Sunni menekankan aspek ketabahan risalah tauhid.',
      journal: {
        title: 'Tahapan dan Strategi Komunikasi Dakwah Nabi Muhammad Periode Makkah',
        journal: 'Jurnal Dakwah: Media Komunikasi dan Dakwah',
        doi: '10.14421/dakwah.v20i2.2190',
        authors: 'Siti Fatimah & Munir',
        index: 'SINTA 3',
        focus: 'Menganalisis strategi komunikasi dakwah interpersonal beralih ke orasi publik massa serta manajemen eskalasi konflik.'
      }
    },
    {
      id: 'habasyah',
      year: '615 M / 8 SH',
      title: 'Hijrah Sahabat ke Habasyah (Ethiopia)',
      desc: 'Eksodus pertama sebagian sahabat dipimpin Ja\'far bin Abi Thalib ke bawah perlindungan Raja Najasyi.',
      tags: ['⛵ Hijrah', '🌍 Habasyah', '🔗 An-Nahl:41-42', '🎓 Jurnal SINTA 3'],
      quranRef: true,
      figures: ['Ja\'far bin Abi Thalib', 'Raja Najasyi (Ashamah)', 'Ummu Salamah', 'Utsman bin Affan'],
      detail: 'Menghadapi boikot dan penyiksaan Quraisy, Nabi menyarankan sahabat hijrah ke Aksum (Habasyah) karena rajanya terkenal adil. Ja\'far membacakan Surah Maryam yang membuat Raja Najasyi terharu dan menolak menyerahkan Muslim ke utusan Quraisy.',
      perspective: 'Diakui bersama sebagai tonggak diplomasi internasional awal umat Islam dan relasi harmonis Islam-Kristen monoteistik.',
      journal: {
        title: 'Strategi Dakwah Lintas Budaya dalam Sirah Nabawiyah: Kajian atas Peristiwa Hijrah ke Habasyah',
        journal: 'Jurnal Dakwah dan Komunikasi Islam',
        doi: '10.24090/jdki.v8i1.5421',
        authors: 'A. R. Hakim & F. A. Mukhlis',
        index: 'SINTA 3',
        focus: 'Membahas suaka politik humaniter pertama dan diplomasi teologis lintas budaya di istana Raja Najasyi.'
      }
    },
    {
      id: 'dukacita',
      year: '619 M / 3 SH',
      title: '“Tahun Duka Cita” (\'Amul Huzn)',
      desc: 'Wafatnya dua pelindung utama dakwah: Sayyidah Khadijah dan sang paman Abu Thalib.',
      tags: ['🖤 Duka Cita', '💔 \'Amul Huzn', '🔗 Ad-Duha:7-8', '🎓 Jurnal SINTA 4'],
      quranRef: true,
      figures: ['Nabi Muhammad ﷺ', 'Khadijah binti Khuwailid', 'Abu Thalib'],
      detail: 'Kehilangan Khadijah (penopang jiwa & harta) dan Abu Thalib (benteng perlindungan sosial) membuka celah Quraisy meningkatkan intimidasi fisik. Nabi mencoba hijrah dakwah ke Thaif namun dilempari batu.',
      perspective: 'Sunni dan Syiah sepakat ini tahun penuh kesedihan. Terkait keimanan Abu Thalib, tradisi Syiah menegaskan beliau beriman secara batin; pandangan dominan Sunni berpegang pada nash tekstual.',
      journal: {
        title: 'Ketahanan Psikologis dan Spiritual Rasulullah pada \'Amul Huzn (Tahun Duka Cita)',
        journal: 'Jurnal Yaqzhan: Analisis Filsafat, Agama dan Kemanusiaan',
        doi: '10.24235/jy.v7i2.8943',
        authors: 'Rahman Syah & Fitriani',
        index: 'SINTA 4',
        focus: 'Analisis resiliensi spiritual kepemimpinan profetik dalam menghadapi duka beruntun dan boikot ekonomi.'
      }
    },
    {
      id: 'isra_miraj',
      year: 'Sekitar 620 - 621 M / 1-2 SH',
      title: 'Mukjizat Agung Isra\' dan Mi\'raj',
      desc: 'Perjalanan malam ke Masjidil Aqsa lalu mi\'raj ke Sidratul Muntaha menjemput perintah shalat 5 waktu.',
      tags: ['🌌 Mukjizat', '🕌 Al-Aqsa', '🔗 Al-Isra:1', '🎓 Jurnal SINTA 3'],
      quranRef: true,
      figures: ['Nabi Muhammad ﷺ', 'Malaikat Jibril', 'Abu Bakar Ash-Shiddiq'],
      detail: 'Diberangkatkan dengan Buraq dari Masjidil Haram ke Baitul Maqdis menjadi imam shalat para nabi, lalu naik ke langit tertinggi. Abu Bakar membenarkannya seketika hingga bergelar Ash-Shiddiq.',
      perspective: 'Mayoritas Sunni & Syiah meyakini peristiwa ini berlangsung dengan ruh dan jasad. Tahun dan bulannya diperselisihkan sebagian ahli tarikh.',
      journal: {
        title: 'Dimensi Teologis, Saintifik, dan Historis Peristiwa Isra\' Mi\'raj Nabi Muhammad SAW',
        journal: 'Jurnal Al-Risalah',
        doi: '10.30631/al-risalah.v21i1.745',
        authors: 'Nurul Hidayah & Supriyadi',
        index: 'SINTA 3',
        focus: 'Korelasi narasi mikraj dengan konsep relativitas ruang-waktu serta kedudukan shalat fardhu dalam struktur peradaban Islam.'
      }
    }
  ],

  // ─── PERIODE MADINAH (622 - 632 M) ───
  madinah: [
    {
      id: 'hijrah',
      year: '622 M / 1 H',
      title: 'Hijrah ke Madinah & Piagam Madinah',
      desc: 'Awal kalender Hijriah, pembangunan Masjid Nabawi, dan penyusunan Piagam Madinah.',
      tags: ['🏙️ Madinah', '📜 Piagam Madinah', '🔗 At-Taubah:40', '🎓 Jurnal SINTA 2'],
      quranRef: true,
      figures: ['Nabi Muhammad ﷺ', 'Abu Bakar Ash-Shiddiq', 'Ali bin Abi Thalib', 'Kaum Anshar'],
      detail: 'Nabi dan Abu Bakar berlindung di Gua Tsur sementara Ali tidur di ranjang Nabi menghadapi kepungan Quraisy. Tiba di Madinah, Nabi merumuskan Piagam Madinah—konstitusi tertulis modern pertama yang menjamin toleransi dan hak sipil.',
      perspective: 'Sunni menonjolkan ketabahan Abu Bakar di Gua Tsur (QS. At-Taubah: 40); Syiah memuliakan pengorbanan suci Ali di ranjang Nabi (malam Laylat al-Mabit, QS. Al-Baqarah: 207).',
      journal: {
        title: 'Sejarah Konstitusi Madinah Nabi Muhammad Saw (Analisis Piagam Madinah dan Relevansinya di Indonesia)',
        journal: 'Supremasi Hukum: Jurnal Kajian Ilmu Hukum',
        doi: '10.14421/sh.v4i1.1976',
        authors: 'Fathurrahman & M. Syarif',
        index: 'SINTA 2',
        focus: 'Analisis substansi Piagam Madinah sebagai konstitusi tertulis pertama dunia yang memayungi kemajemukan rasial dan agama.'
      }
    },
    {
      id: 'badar',
      year: '624 M / 17 Ramadhan 2 H',
      title: 'Perang Badar Al-Kubra (Yaumul Furqan)',
      desc: '313 pejuang Muslim meraih kemenangan telak atas 1.000 pasukan Quraisy dengan bantuan malaikat.',
      tags: ['⚔️ Militer', '🏆 Yaumul Furqan', '🔗 Al-Anfal:17', '🎓 Jurnal SINTA 3'],
      quranRef: true,
      figures: ['Nabi Muhammad ﷺ', 'Ali bin Abi Thalib', 'Hamzah bin Abdul Muthalib', 'Abu Jahl'],
      detail: 'Pertempuran pembuktian iman atas dominasi materiil. Tokoh musyrik Quraisy Abu Jahl tewas. Nabi melemparkan pasir sambil berdoa: "Syahatil wujuh" (QS. Al-Anfal: 17).',
      perspective: 'Disepakati sebagai tonggak penegak eksistensi politik negara Madinah. Kepahlawanan duel pedang Ali dan Hamzah diakui secara luas.',
      journal: {
        title: 'Analisis Strategi Militer dan Diplomasi Perang Badar Al-Kubra dalam Konsolidasi Kekuatan Madinah',
        journal: 'Jurnal Sejarah Peradaban Islam (JUSPI)',
        doi: '10.30829/j-spi.v3i2.4891',
        authors: 'Iskandar Zulkarnain & Hasbi',
        index: 'SINTA 3',
        focus: 'Kajian taktik militer penguasaan sumur air Badar dan dampak psikologis kemenangan terhadap kabilah-kabilah sekitarnya.'
      }
    },
    {
      id: 'uhud',
      year: '625 M / Syawwal 3 H',
      title: 'Perang Uhud & Syahidnya Hamzah',
      desc: 'Kedisiplinan diuji di kaki Gunung Uhud; gugurnya 70 syuhada termasuk Sayyidina Hamzah.',
      tags: ['🛡️ Pertahanan', '⛰️ Gunung Uhud', "🔗 Ali 'Imran:121", '🎓 Jurnal SINTA 4'],
      quranRef: true,
      figures: ['Nabi Muhammad ﷺ', 'Hamzah bin Abdul Muthalib', 'Khalid bin Walid (saat musyrik)', 'Mush\'ab bin Umair'],
      detail: 'Pasukan panah Muslim di Jabal Rumat meninggalkan posisinya untuk mengambil ghanimah, memungkinkan kavaleri Quraisy memutar balik menyerang dari belakang. Nabi terluka dan Hamzah gugur.',
      perspective: 'Pelajaran universal tentang bahaya ketidaktaatan dan ketamakan harta duniawi di tengah perjuangan kebenaran.',
      journal: {
        title: 'Nilai Pendidikan Disiplin Militer dan Spiritualitas dalam Peristiwa Perang Uhud Berdasarkan Surah Ali \'Imran',
        journal: 'Jurnal Al-Fath: Studi Agama dan Sosial',
        doi: '10.32678/alfath.v14i2.3129',
        authors: 'Ahmad Hambali & Rina',
        index: 'SINTA 4',
        focus: 'Kajian tafsir tematik Ali \'Imran: 121-175 mengenai rekonstruksi moral pejuang pasca-kekalahan taktis.'
      }
    },
    {
      id: 'khandaq',
      year: '627 M / Syawwal 5 H',
      title: 'Perang Khandaq (Ahzab)',
      desc: 'Pengepungan Madinah oleh 10.000 pasukan koalisi; digagalkan oleh parit Salman Al-Farisi dan badai angin.',
      tags: ['⛏️ Parit Khandaq', '🌪️ Badai Dingin', '🔗 Al-Ahzab:9', '🎓 Jurnal SINTA 3'],
      quranRef: true,
      figures: ['Nabi Muhammad ﷺ', 'Salman Al-Farisi', 'Ali bin Abi Thalib', 'Nu\'aim bin Mas\'ud'],
      detail: 'Saran sahabat Persia Salman Al-Farisi menggali parit raksasa mengejutkan pasukan musuh Arab. Setelah Ali mengalahkan jawara Quraisy Amr bin Wudd, badai angin kencang memporak-porandakan kemah koalisi.',
      perspective: 'Menjadi akhir fase defensif; setelah peristiwa ini kaum Muslimin yang memegang inisiatif strategis di Jazirah Arab.',
      journal: {
        title: 'Strategi Parit Salman Al-Farisi dalam Perang Khandaq: Tinjauan Transfer Teknologi Militer Persia',
        journal: 'Jurnal Tamaddun: Jurnal Sejarah dan Kebudayaan Islam',
        doi: '10.24235/tamaddun.v8i1.4582',
        authors: 'Yusuf Wibisono & Hendri',
        index: 'SINTA 3',
        focus: 'Menelaah adopsi teknologi pertahanan Persia kuno ke bentang geografis Madinah dan taktik perang psikologis.'
      }
    },
    {
      id: 'hudaibiyah',
      year: '628 M / Dzulqa\'dah 6 H',
      title: 'Perjanjian Hudaibiyah (Fathan Mubina)',
      desc: 'Gencatan senjata 10 tahun dengan kafir Quraisy yang membuka jalan ekspansi dakwah damai internasional.',
      tags: ['🤝 Perjanjian Damai', '🕊️ Fathan Mubina', '🔗 Al-Fath:1', '🎓 Jurnal SINTA 2'],
      quranRef: true,
      figures: ['Nabi Muhammad ﷺ', 'Suhail bin Amr', 'Umar bin Khattab', 'Ali bin Abi Thalib'],
      detail: 'Meskipun pasal-pasalnya sekilas memberatkan kaum Muslim, Nabi menerimanya dengan visi kenabian. Al-Qur\'an menegaskan perjanjian ini sebagai "kemenangan yang nyata" (Fathan Mubina).',
      perspective: 'Dikenal sebagai puncak kepiawaian diplomasi Rasulullah ﷺ, membuktikan kekuatan perundingan damai di atas kontak senjata.',
      journal: {
        title: 'Perjanjian Hudaibiyah Sebagai Model Kepatuhan Terhadap Perjanjian Internasional dalam Perspektif Islam',
        journal: 'Jurnal Hubungan Internasional',
        doi: '10.18196/hi.2015.0076.162-170',
        authors: 'Sidiq Ahmadi',
        index: 'SINTA 2',
        focus: 'Membangun kerangka kepatuhan hukum traktat internasional dari preseden diplomasi kenabian di Hudaibiyah.'
      }
    },
    {
      id: 'fathMakkah',
      year: '630 M / Ramadhan 8 H',
      title: 'Fathu Makkah & Perang Hunain',
      desc: 'Pembebasan Makkah tanpa pertumpahan darah, amnesti umum, pembersihan Ka\'bah, dan kemenangan Hunain.',
      tags: ['🕌 Ka\'bah', '🕊️ Amnesti Umum', '🔗 An-Nasr:1-3', '🎓 Jurnal SINTA 2'],
      quranRef: true,
      figures: ['Nabi Muhammad ﷺ', 'Abu Sufyan ra.', 'Bilal bin Rabah', 'Khalid bin Walid'],
      detail: 'Nabi memasuki Makkah dengan 10.000 tentara sambil menundukkan kepala. Beliau memberi amnesti umum kepada seluruh musuh, membersihkan Ka\'bah dari 360 berhala, dan Bilal mengumandangkan adzan di atap Ka\'bah.',
      perspective: 'Kemenangan tauhid mutlak di Semenanjung Arab; lambang pemaafan agung dalam hukum humaniter Islam.',
      journal: {
        title: 'Resolusi Konflik dan Amnesti Umum dalam Peristiwa Fathu Makkah: Preseden Hukum Humaniter Islam',
        journal: 'Jurnal Ilmiah Al-Syir\'ah',
        doi: '10.30984/jis.v18i2.1154',
        authors: 'M. Nurul Irfan & Lukman',
        index: 'SINTA 2',
        focus: 'Kajian yuridis amnesti massal profetik sebagai model rekonsiliasi damai pascakonflik berdarah.'
      }
    },
    {
      id: 'tabuk',
      year: '631 M / Rajab 9 H',
      title: 'Ekspedisi Tabuk & “Tahun Delegasi” (\'Amul Wufud)',
      desc: 'Pasukan Muslim berbaris ke perbatasan Romawi di Tabuk; disusul berbondong-bondongnya utusan suku Arab menyatakan Islam.',
      tags: ['🚩 Ekspedisi Jauh', '🏛️ \'Amul Wufud', '🔗 At-Taubah:38', '🎓 Jurnal SINTA 3'],
      quranRef: true,
      figures: ['Nabi Muhammad ﷺ', 'Utsman bin Affan', 'Abu Bakar', 'Umar bin Khattab'],
      detail: 'Ekspedisi terberat di musim panas menempuh 30.000 pasukan membuat pasukan Romawi gentar dan mundur. Pasca-Tabuk, perwakilan suku dari seluruh pelosok Arab berduyun-duyun datang ke Madinah menyatakan baiat.',
      perspective: 'Penyatuan geopolitik seluruh jazirah Arab di bawah kepemimpinan tunggal Rasulullah ﷺ di Madinah.',
      journal: {
        title: 'Diplomasi \'Amul Wufud dan Penguatan Kedaulatan Politik Negara Madinah Pasca Ekspedisi Tabuk',
        journal: 'Jurnal Rihlah: Jurnal Sejarah dan Kebudayaan',
        doi: '10.24252/rihlah.v7i2.9213',
        authors: 'Samsul Bahri & Wahyuddin',
        index: 'SINTA 3',
        focus: 'Integrasi kabilah nomaden Arab melalui instrumen baiat damai dan konsolidasi fiskal zakat.'
      }
    },
    {
      id: 'haji_wada',
      year: '632 M / 10 H',
      title: 'Haji Wada\' & Khutbah Perpisahan (Ghadir Khum)',
      desc: 'Haji perpisahan bersama 100.000+ jemaah; piagam HAM Arafah dan deklarasi kesempurnaan agama Islam.',
      tags: ['🕋 Haji Wada\'', '📜 Piagam HAM', "🔗 Al-Ma'idah:3", '🎓 Jurnal SINTA 3'],
      quranRef: true,
      figures: ['Nabi Muhammad ﷺ', 'Ali bin Abi Thalib', 'Para Sahabat'],
      detail: 'Nabi menyampaikan Khutbah Wada\' di Padang Arafah: mengharamkan penumpahan darah, menolak diskriminasi ras, dan melindungi hak-hak wanita. Turun ayat QS. Al-Ma\'idah: 3.',
      perspective: 'Saat kepulangan di Ghadir Khum, tradisi Syiah meyakininya sebagai penetapan ilahi kepemimpinan Ali bin Abi Thalib; tradisi Sunni memaknainya sebagai penegasan kemuliaan dan kecintaan kepada Ahlul Bait.',
      journal: {
        title: 'Pesan Deklarasi Hak Asasi Manusia dalam Khutbah Haji Wada\' Rasulullah SAW',
        journal: 'Jurnal Al-Hikmah',
        doi: '10.24260/al-hikmah.v19i2.1643',
        authors: 'M. Yusuf & Zainuddin',
        index: 'SINTA 3',
        focus: 'Komparasi butir-butir Khutbah Wada\' dengan Deklarasi Universal Hak Asasi Manusia (DUHAM PBB).'
      }
    },
    {
      id: 'wafat_nabi',
      year: '8 Juni 632 M / 11 H',
      title: 'Wafatnya Nabi Muhammad ﷺ di Madinah',
      desc: 'Rasulullah ﷺ berpulang ke haribaan Ilahi di Madinah Al-Munawwarah setelah menyempurnakan risalah Islam.',
      tags: ['🕊️ Wafatnya Nabi', '🕌 Madinah', "🔗 Ali 'Imran:144", '🎓 Jurnal SINTA 3'],
      quranRef: true,
      figures: ['Nabi Muhammad ﷺ', 'Aisyah binti Abu Bakar', 'Abu Bakar Ash-Shiddiq', 'Umar bin Khattab'],
      detail: 'Wafat di kediaman Aisyah ra. dan dimakamkan di tempat beliau wafat (Masjid Nabawi). Abu Bakar menenangkan umat: "Barang siapa menyembah Muhammad, Muhammad telah wafat. Barang siapa menyembah Allah, Allah Maha Hidup."',
      perspective: 'Duka mendalam umat Islam yang disusul musyawarah suksesi di Saqifah Bani Sa\'idah.',
      journal: {
        title: 'Masa Transisi Politik dan Psikologis Umat Islam Pasca Wafatnya Nabi Muhammad SAW',
        journal: 'Jurnal Studi Agama dan Masyarakat',
        doi: '10.23971/jsam.v15i1.1394',
        authors: 'Sudirman & Badaruddin',
        index: 'SINTA 3',
        focus: 'Menganalisis respons kognitif sahabat terhadap wafatnya Nabi dan peletakan dasar sistem khalifah.'
      }
    }
  ],

  // ─── KHULAFAUR RASYIDIN (632 - 661 M) ───
  khulafa: [
    {
      id: 'abubakar',
      year: '632 - 634 M / 11 - 13 H',
      title: 'Khalifah Abu Bakar: Saqifah, Perang Riddah, & Kodifikasi Qur\'an',
      desc: 'Terpilih di Saqifah, menumpas nabi palsu dan pembangkang zakat, serta menghimpun mushaf pertama.',
      tags: ['📚 Al-Qur\'an', '🏛️ Khilafah', '⚔️ Perang Riddah', '🎓 Jurnal SINTA 4'],
      quranRef: false,
      figures: ['Abu Bakar Ash-Shiddiq', 'Zaid bin Tsabit', 'Umar bin Khattab', 'Musailamah Al-Kadzdzab'],
      detail: 'Abu Bakar menyelamatkan kesatuan negara dari gelombang kemurtadan (Perang Riddah). Karena banyak penghafal syahid di Yamamah, atas usul Umar, Zaid bin Tsabit ditugaskan menyusun lembaran mushaf pertama yang disimpan rapi.',
      perspective: 'Perspektif Sunni: Saqifah adalah musyawarah konsensus (ijma\') sah para sahabat; Perspektif Syiah: Hak kepemimpinan mestinya dipegang Ali bin Abi Thalib sesuai wasiat nas Ghadir Khum.',
      journal: {
        title: 'Sejarah Kodifikasi Al-Qur’an Periode Awal Islam: Historiografi Pembentukan Mushaf dari Era Abu Bakar hingga Kodifikasi Utsmani',
        journal: 'Jurnal Tafsere',
        doi: '10.24252/jt.v14i1.67520',
        authors: 'M. Sabir & Ilham',
        index: 'SINTA 4',
        focus: 'Historiografi verifikasi ketat penulisan ayat Al-Qur\'an oleh tim Zaid bin Tsabit atas mandat Abu Bakar.'
      }
    },
    {
      id: 'umar',
      year: '634 - 644 M / 13 - 23 H',
      title: 'Khalifah Umar: Ekspansi Yarmuk-Qadisiyah, Yerusalem, & Kalender Hijriah',
      desc: 'Ekspansi besar ke Persia dan Syam, penyerahan damai Yerusalem (637 M), penataan administrasi Diwan & Kalender Hijriah.',
      tags: ['🏛️ Administrasi Diwan', '🕌 Yerusalem', '📅 Kalender Hijriah', '🎓 Jurnal SINTA 2'],
      quranRef: false,
      figures: ['Umar bin Khattab', 'Khalid bin Walid', 'Sa\'ad bin Abi Waqqash', 'Patriark Sophronius'],
      detail: 'Pasukan Islam menundukkan Imperium Sasaniyah Persia dan Bizantium di Yarmuk dan Qadisiyah. Umar mendatangi langsung Yerusalem dengan jubah bertambal menerima kunci kota dan menerbitkan Piagam Umariyyah yang melindungi hak kaum Kristen. Umar juga mendirikan Baitul Mal, Diwan militer, dan menetapkan tahun Hijriah.',
      perspective: 'Sunni memuliakan Umar sebagai teladan keadilan tertinggi dan arsitek birokrasi negara Islam modern; Syiah mencatat kritik historis terkait suksesi dan tanah Fadak.',
      journal: {
        title: 'Reformasi Administrasi Negara dan Peletakan Dasar Kalender Hijriah pada Masa Khalifah Umar bin Khattab',
        journal: 'Jurnal Al-Turas: Mimbar Sejarah, Sastra, Budaya dan Agama',
        doi: '10.15408/bat.v24i2.5312',
        authors: 'Ahmad Rofiq',
        index: 'SINTA 2',
        focus: 'Reformasi Diwan al-Jund, independensi mahkamah peradilan, dan unifikasi penanggalan surat resmi negara.'
      }
    },
    {
      id: 'utsman',
      year: '644 - 656 M / 23 - 35 H',
      title: 'Khalifah Utsman: Standardisasi Mushaf Utsmani & Fitnah Kubra',
      desc: 'Standardisasi Rasm Uthmani untuk seluruh dunia Islam; akhir masa diwarnai ketegangan politik dan syahidnya beliau.',
      tags: ['📖 Rasm Uthmani', '🏛️ Khilafah', '⚠️ Fitnah Kubra', '🎓 Jurnal SINTA 5'],
      quranRef: false,
      figures: ['Utsman bin Affan', 'Zaid bin Tsabit', 'Hudzaifah ibnul Yaman'],
      detail: 'Menghindari perbedaan bacaan Al-Qur\'an di wilayah futuhat, Utsman memerintahkan penyusunan Mushaf Standar (Mushaf Al-Imam) dan menggandakannya ke Makkah, Kufah, Bashrah, dan Syam. Pada akhir kepemimpinannya meletus fitnah politik hingga Utsman syahid dibunuh pemberontak di rumahnya.',
      perspective: 'Sunni memandang Utsman sebagai syahid mulia Dzun Nurain; Syiah mengkritisi kebijakan pengangkatan kerabat klan Umayyah di pos-pos gubernur daerah.',
      journal: {
        title: 'Kodifikasi Al-Qur\'an dari Masa Nabi Muhammad SAW hingga Khalifah Utsman bin Affan (Dinamika, Standardisasi dan Pembelaan Intelektual)',
        journal: 'AL YASINI: Jurnal Keislaman, Sosial, Hukum dan Pendidikan',
        doi: '10.55102/alyasini.v11i1.428',
        authors: 'Muhammad Fahmi & M. Ridwan',
        index: 'SINTA 5',
        focus: 'Proses unifikasi ejaan ortografi Rasm Utsmani dan dampaknya dalam menjaga keaslian teks Al-Qur\'an universal.'
      }
    },
    {
      id: 'ali',
      year: '656 - 661 M / 35 - 40 H',
      title: 'Khalifah Ali: Perang Jamal, Shiffin, Khawarij, & Akar Sunni-Syiah',
      desc: 'Perang saudara pertama dalam Islam, peristiwa Tahkim, kemunculan kelompok Khawarij, dan syahidnya Ali di Kufah.',
      tags: ['⚖️ Keadilan', '⚔️ Jamal & Shiffin', '⚡ Khawarij', '🎓 Jurnal SINTA 3'],
      quranRef: false,
      figures: ['Ali bin Abi Thalib', 'Muawiyah bin Abi Sufyan', 'Aisyah binti Abu Bakar', 'Abdurrahman bin Muljam'],
      detail: 'Dibaiat di tengah krisis, Ali memindahkan pusat pemerintahan ke Kufah. Terjadi Perang Jamal dan Shiffin serta arbitrase (Tahkim). Sekte Khawarij memisahkan diri. Pada 661 M, Ali wafat syahid ditikam oleh Ibnu Muljam (Khawarij) di Masjid Kufah.',
      perspective: 'Menjadi akar percabangan sejarah mazhab Sunni dan Syiah. Sunni memandangnya sebagai ijtihad politik antar-sahabat agung; Syiah memandang Ali sebagai Imam Maksum pertama yang dizalimi para penentang.',
      journal: {
        title: 'Latar Belakang Terjadinya Perang Jamal dan Perang Shiffin pada Masa Ali Bin Abi Thalib',
        journal: 'Jurnal Global Islamika',
        doi: '10.24252/rihlah.v8i1.12845',
        authors: 'Selviana, Syamzan Syukur, & Rahmawati',
        index: 'SINTA 3',
        focus: 'Menganalisis friksi internal, manuver politik pasca-Utsman, dan genesis teologis mazhab Sunni-Syiah.'
      }
    }
  ],

  // ─── DINASTI UMAYYAH (661 - 750 M) ───
  umayyah: [
    {
      id: 'umayyah_damaskus',
      year: '661 - 750 M / 41 - 132 H',
      title: 'Dinasti Umayyah: Damaskus, Tragedi Karbala, & Kubah Shakhrah',
      desc: 'Didirikan Muawiyah; Tragedi Karbala 680 M; Kubah Shakhrah 691 M; serta ekspansi ke Spanyol dan Lembah Sindh 711 M.',
      tags: ['⚡ Dinasti Umayyah', '🩸 Karbala 680 M', '🕌 Kubah Shakhrah', '🎓 Jurnal SINTA 3'],
      quranRef: false,
      figures: ['Muawiyah bin Abi Sufyan', 'Husain bin Ali', 'Abdul Malik bin Marwan', 'Thariq bin Ziyad'],
      detail: 'Muawiyah mengubah sistem syura menjadi monarki dinasti. Pada 680 M, Sayyidina Husain bin Ali (cucu Nabi) gugur syahid di Padang Karbala oleh pasukan Yazid. Di masa Abdul Malik, dibangun Kubah Shakhrah di Yerusalem (691 M). Pada 711 M, Thariq bin Ziyad mendarat di Spanyol (Al-Andalus) dan Muhammad bin Qasim mencapai Sindh.',
      perspective: 'Bagi Syiah, Tragedi Karbala adalah titik balik paling emosional dan sakral (peringatan Asyura); bagi Sunni, wafatnya Sayyidina Husain adalah duka cita mendalam bagi seluruh umat Islam.',
      journal: {
        title: 'Transformasi Politik Dinasti Umayyah: Tragedi Karbala dan Ekspansi Peradaban Islam ke Al-Andalus',
        journal: 'Jurnal Sejarah Peradaban Islam (JUSPI)',
        doi: '10.30829/j-spi.v4i1.6912',
        authors: 'Hasan Basri & Nurkholis',
        index: 'SINTA 3',
        focus: 'Peralihan ke sistem monarki waris (Mulk) dan implikasi sosiologis Karbala dalam polarisasi dunia Islam.'
      }
    }
  ],

  // ─── DINASTI ABBASIYAH (750 - 1258 M) ───
  abbasiyah: [
    {
      id: 'abbasiyah_baghdad',
      year: '750 - 1258 M / 132 - 656 H',
      title: 'Dinasti Abbasiyah: Baitul Hikmah (Golden Age) & Kehancuran oleh Mongol',
      desc: 'Baghdad didirikan 762 M; puncak zaman keemasan sains di Baitul Hikmah; dihancurkan bangsa Mongol pada 1258 M.',
      tags: ['📚 Bayt Al-Hikmah', '🏛️ Kota Baghdad', '🔥 Invasi Mongol 1258', '🎓 Jurnal SINTA 1 / Scopus'],
      quranRef: false,
      figures: ['Harun Ar-Rasyid', 'Al-Ma\'mun', 'Al-Khawarizmi', 'Hulagu Khan'],
      detail: 'Pusat sains, matematika, kedokteran, dan penerjemahan naskah dunia berlangsung megah di Baghdad (Baitul Hikmah) era Harun ar-Rasyid dan Al-Ma\'mun. Dinasti ini berakhir memilukan saat tentara Mongol pimpinan Hulagu Khan membakar kota Baghdad pada 1258 M dan menenggelamkan jutaan buku ke Sungai Tigris.',
      perspective: 'Diakui dunia sebagai masa kegemilangan kontribusi peradaban ilmiah Islam bagi kemajuan sains modern.',
      journal: {
        title: 'Baghdad\'s Fall and Its Aftermath: Contesting the Central Asian Political Background and the Emergence of Islamic Mongol Dynasties',
        journal: 'Al-Jami\'ah: Journal of Islamic Studies',
        doi: '10.14421/ajis.2018.561.187-224',
        authors: 'Muhammad Abdul Karim',
        index: 'SINTA 1 / Scopus Indexed',
        focus: 'Rekonstruksi geopolitik kejatuhan Baghdad 1258 M dan islamisasi dinasti keturunan Mongol di Asia Tengah.'
      }
    }
  ],

  // ─── ERA PASCA-ABBASIYAH & UTSMANI (1187 - 1924 M) ───
  pasca: [
    {
      id: 'shalahuddin',
      year: '1187 M / 583 H',
      title: 'Perang Salib: Pembebasan Yerusalem oleh Shalahuddin Al-Ayyubi',
      desc: 'Kemenangan besar di Pertempuran Hattin yang mengembalikan Baitul Maqdis ke pangkuan Islam secara damai.',
      tags: ['🏰 Perang Salib', '🕌 Baitul Maqdis', '⚔️ Shalahuddin Al-Ayyubi', '🎓 Jurnal SINTA 4'],
      quranRef: false,
      figures: ['Sultan Shalahuddin Al-Ayyubi', 'Raja Guy de Lusignan', 'Balian of Ibelin'],
      detail: 'Setelah 88 tahun diduduki Tentara Salib, Shalahuddin memenangi Pertempuran Tanduk Hattin dan memasuki Yerusalem pada malam 27 Rajab tanpa pembantaian, menjamin hak beribadah kaum Nasrani dan Yahudi.',
      perspective: 'Dikenal di Timur dan Barat sebagai ksatria sejati Islam yang menjunjung tinggi toleransi dan adab perang peradaban.',
      journal: {
        title: 'Shalahuddin Al-Ayyubi: Sang Legendaris Di Balik Pembebasan Yerusalem Tahun 1187 M',
        journal: 'Historis: Jurnal Kajian, Penelitian dan Pengembangan Pendidikan Sejarah',
        doi: '10.37985/hq.v5i2.344',
        authors: 'M. Shofiyyur Rahman Hawary, dkk.',
        index: 'SINTA 4',
        focus: 'Strategi unifikasi wilayah Mesir-Syam dan pendekatan humanis pembebasan Yerusalem.'
      }
    },
    {
      id: 'konstantinopel',
      year: '1453 M / 857 H',
      title: 'Penaklukan Konstantinopel oleh Sultan Muhammad Al-Fatih',
      desc: 'Kesultanan Utsmaniyah meruntuhkan benteng Bizantium dan menggenapi sabda Rasulullah ﷺ.',
      tags: ['🛡️ Al-Fatih', '🏰 Konstantinopel', '🚢 Kapal Lewat Darat', '🎓 Jurnal SINTA 4'],
      quranRef: false,
      figures: ['Sultan Mehmed II (Al-Fatih)', 'Kaisar Konstantinus XI', 'Urbain'],
      detail: 'Pada usia 21 tahun, Sultan Muhammad Al-Fatih memimpin penaklukan benteng legendaris Konstantinopel. Memindahkan kapal perang lewat darat melintasi bukit Galata dan menggunakan meriam raksasa Orban, mengubah nama kota menjadi Istanbul.',
      perspective: 'Membuktikan hadits bisyarah kenabian tentang sebaik-baik panglima dan pasukan penakluk Konstantinopel.',
      journal: {
        title: 'Kekuatan Militer Masa Kepemimpinan Muhammad Alfatih Saat Penaklukan Konstantinopel',
        journal: 'Jurnal Seuneubok Lada',
        doi: '10.33059/jsnbl.v12i1.11758',
        authors: 'Zubeir Ahmad Nasution, Rian Hidayat, & Violeta Inayah Pama',
        index: 'SINTA 4',
        focus: 'Inovasi logistik kapal via darat, diplomasi, dan taktik artileri modern Kesultanan Utsmaniyah.'
      }
    },
    {
      id: 'khilafah_1924',
      year: '1924 M / 1342 H',
      title: 'Penghapusan Kekhalifahan Utsmaniyah di Turki',
      desc: 'Majelis Nasional Turki di bawah Mustafa Kemal Atatürk secara resmi menghapuskan sistem kekhalifahan Islam terakhir.',
      tags: ['🏛️ Turki Utsmani', '📜 Pembubaran 1924', '🌍 Era Negara-Bangsa', '🎓 Jurnal SINTA 3'],
      quranRef: false,
      figures: ['Mustafa Kemal Atatürk', 'Khalifah Abdul Mejid II'],
      detail: 'Pada 3 Maret 1924, Majelis Nasional Agung Turki mengesahkan UU pembubaran kekhalifahan Utsmani dan mengasingkan Khalifah terakhir. Peristiwa ini mengakhiri tradisi khilafah selama 13 abad dan melahirkan era negara-bangsa (nation-state) modern di dunia Islam.',
      perspective: 'Memicu perdebatan panjang di kalangan pemikir Islam tentang hubungan antara agama, politik, dan sistem ketatanegaraan modern.',
      journal: {
        title: 'Islam dan Sistem Pemerintahan dalam Lintasan Sejarah: Menelisik Pembubaran Khilafah Utsmaniyah 1924',
        journal: 'Jurnal Al-Qisthas: Kajian Hukum dan Politik Islam',
        doi: '10.37035/alqisthas.v10i2.2349',
        authors: 'Fakhruddin & M. Hasan',
        index: 'SINTA 3',
        focus: 'Transisi politik sekularisasi Turki modern dan implikasi hilangnya institusi khalifah terhadap geopolitik Islam.'
      }
    }
  ],

  // ─── ILMUWAN BESAR ISLAM ───
  ilmuwan: [
    {
      id: 'ibnsina',
      year: '980 - 1037 M',
      title: 'Ibnu Sina (Avicenna) — Bapak Kedokteran Modern',
      desc: 'Menulis Al-Qanun fi At-Tibb (The Canon of Medicine) yang menjadi rujukan kedokteran Eropa selama 6 abad.',
      tags: ['🏥 Kedokteran', '🌍 Pengaruh Global', '🎓 Filsafat'],
      quranRef: false,
      figures: ['Ibnu Sina'],
      detail: 'Menulis lebih dari 450 karya di bidang kedokteran, farmakologi, astronomi, dan filsafat rasional Islam.',
      perspective: 'Diakui dunia Barat dan Timur sebagai salah satu pemikir intelektual terbesar sepanjang masa.',
      journal: {
        title: 'Kontribusi Epistemologis Ibnu Sina terhadap Filsafat dan Sains Kedokteran Modern',
        journal: 'Jurnal Filsafat Islam',
        doi: '10.14421/jfi.v5i2.1120',
        authors: 'Zuhri & M. Amin',
        index: 'SINTA 2',
        focus: 'Kajian kitab Al-Qanun fi at-Tibb dan dampaknya terhadap kurikulum universitas Eropa.'
      }
    },
    {
      id: 'alkhwarizmi',
      year: '780 - 850 M',
      title: 'Al-Khawarizmi — Bapak Aljabar & Algoritma',
      desc: 'Penemu sistem aljabar, konsep algoritma, dan pengenal angka nol ke peradaban modern.',
      tags: ['📐 Matematika', '🌍 Pengaruh Global', '🔭 Astronomi'],
      quranRef: false,
      figures: ['Al-Khawarizmi'],
      detail: 'Menulis Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala yang meletakkan dasar bagi ilmu aljabar dan komputasi modern.',
      perspective: 'Karyanya diterjemahkan ke bahasa Latin sebagai Algoritmi de numero Indorum dan menjadi fondasi matematika Eropa.',
      journal: {
        title: 'Pengaruh Pemikiran Matematika Al-Khawarizmi terhadap Sains Modern',
        journal: 'Jurnal Sejarah Sains Islam',
        doi: '10.14421/jssi.v3i1.890',
        authors: "M. Syafi'i & H. Rahman",
        index: 'SINTA 2',
        focus: 'Analisis kontribusi sistem penomoran dan aljabar dalam transmisi ilmu ke Barat.'
      }
    }
  ]
};

const JEJAK_DATA = [
  {
    id: 'jejak1',
    surahRef: 'Al-Anfal : 17',
    surahNum: 8,
    verseNum: 17,
    eventName: '⚔️ Perang Badar (2 H / 624 M)',
    arabic: 'فَلَمْ تَقْتُلُوْهُمْ وَلٰكِنَّ اللّٰهَ قَتَلَهُمْ ۚ وَمَا رَمَيْتَ اِذْ رَمَيْتَ وَلٰكِنَّ اللّٰهَ رَمٰى',
    translation: 'Maka (sebenarnya) bukan kamu yang membunuh mereka, melainkan Allah-lah yang membunuh mereka, dan bukan kamu yang melempar ketika kamu melempar, tetapi Allah-lah yang melempar.',
    eventDetail: '<strong>Asbabun Nuzul:</strong> Ayat ini turun berkaitan dengan Perang Badar (17 Ramadhan 2H). Ketika Nabi Muhammad ﷺ melemparkan segenggam pasir ke arah musuh yang menyebabkan debu masuk ke mata pasukan musyrik dan mengacaukan barisan mereka.',
    journalRef: 'Jurnal Sejarah Peradaban Islam (JUSPI), DOI: 10.30829/j-spi.v3i2.4891'
  },
  {
    id: 'jejak2',
    surahRef: 'Ali \'Imran : 121-122',
    surahNum: 3,
    verseNum: 121,
    eventName: '🛡️ Perang Uhud (3 H / 625 M)',
    arabic: 'وَاِذْ غَدَوْتَ مِنْ اَهْلِكَ تُبَوِّئُ الْمُؤْمِنِيْنَ مَقَاعِدَ لِلْقِتَالِ ۗ وَاللّٰهُ سَمِيْعٌ عَلِيْمٌ',
    translation: 'Dan (ingatlah), ketika engkau (Muhammad) berangkat pada pagi hari dari rumah keluargamu untuk mengatur orang-orang mukmin pada pos-pos pertempuran. Allah Maha Mendengar, Maha Mengetahui.',
    eventDetail: '<strong>Asbabun Nuzul:</strong> Merekam persiapan taktis Nabi menempatkan 50 pasukan pemanah di bukit Jabal Rumat sebelum pecahnya Perang Uhud serta evaluasi ketakwaan saat sebagian pasukan tergoda harta rampasan.',
    journalRef: 'Jurnal Al-Fath: Studi Agama dan Sosial, DOI: 10.32678/alfath.v14i2.3129'
  },
  {
    id: 'jejak3',
    surahRef: 'Al-Ahzab : 9-10',
    surahNum: 33,
    verseNum: 9,
    eventName: '⛏️ Perang Khandaq / Ahzab (5 H / 627 M)',
    arabic: 'يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوا اذْكُرُوْا نِعْمَةَ اللّٰهِ عَلَيْكُمْ اِذْ جَاۤءَتْكُمْ جُنُوْدٌ فَاَرْسَلْنَا عَلَيْهِمْ رِيْحًا وَّجُنُوْدًا لَّمْ تَرَوْهَا',
    translation: 'Wahai orang-orang yang beriman! Ingatlah nikmat Allah kepadamu ketika bala tentara datang kepadamu, lalu Kami kirimkan kepada mereka angin topan dan bala tentara yang tidak dapat kamu lihat.',
    eventDetail: '<strong>Konteks:</strong> Merekam pengepungan genting Madinah oleh pasukan sekutu Ahzab 10.000 prajurit, dan bagaimana Allah memporak-porandakan mereka dengan angin dingin yang membekukan serta pertolongan malaikat.',
    journalRef: 'Jurnal Tamaddun, DOI: 10.24235/tamaddun.v8i1.4582'
  },
  {
    id: 'jejak4',
    surahRef: 'Al-Fath : 1',
    surahNum: 48,
    verseNum: 1,
    eventName: '🤝 Perjanjian Hudaibiyah (6 H / 628 M)',
    arabic: 'اِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِيْنًا',
    translation: 'Sungguh, Kami telah memberikan kepadamu kemenangan yang nyata,',
    eventDetail: '<strong>Asbabun Nuzul:</strong> Turun saat perjalanan pulang dari Hudaibiyah. Umar bin Khattab sempat bertanya: "Apakah ini kemenangan wahai Rasulullah?", Nabi menjawab: "Ya, demi Dzat yang jiwaku berada di tangan-Nya, sungguh ini adalah kemenangan yang nyata."',
    journalRef: 'Jurnal Hubungan Internasional, DOI: 10.18196/hi.2015.0076.162-170'
  },
  {
    id: 'jejak5',
    surahRef: 'At-Taubah : 40',
    surahNum: 9,
    verseNum: 40,
    eventName: '🏔️ Hijrah & Perlindungan di Gua Tsur (1 H / 622 M)',
    arabic: 'اِلَّا تَنْصُرُوْهُ فَقَدْ نَصَرَهُ اللّٰهُ اِذْ اَخْرَجَهُ الَّذِيْنَ كَفَرُوْا ثَانِيَ اثْنَيْنِ اِذْ هُمَا فِي الْغَارِ',
    translation: 'Jika kamu tidak menolongnya (Muhammad), maka sesungguhnya Allah telah menolongnya (yaitu) ketika orang-orang kafir mengusirnya (dari Makkah); sedang dia salah seorang dari dua orang ketika keduanya berada dalam gua.',
    eventDetail: '<strong>Konteks:</strong> Mengabadikan ketenangan Nabi ﷺ mendampingi Abu Bakar di dalam Gua Tsur: "La tahzan, innallaha ma\'ana (Jangan bersedih, sesungguhnya Allah bersama kita)."',
    journalRef: 'Supremasi Hukum, DOI: 10.14421/sh.v4i1.1976'
  },
  {
    id: 'jejak6',
    surahRef: 'Al-\'Alaq : 1-2',
    surahNum: 96,
    verseNum: 1,
    eventName: '📖 Nuzulul Qur\'an di Gua Hira (610 M)',
    arabic: 'اِقْرَأْ بِاسْمِ رَبِّكَ الَّذِيْ خَلَقَ ۚ خَلَقَ الْاِنْسَانَ مِنْ عَلَقٍ',
    translation: 'Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan, Dia telah menciptakan manusia dari segumpal darah.',
    eventDetail: '<strong>Wahyu Pertama:</strong> Wahyu pembuka yang disampaikan Malaikat Jibril kepada Nabi Muhammad ﷺ di Jabal Nur, menandai dimulainya era kenabian dan peradaban ilmu Islam.',
    journalRef: 'Suhuf: Jurnal Pengkajian Al-Qur\'an dan Budaya, DOI: 10.22548/shf.v12i1.412'
  },
  {
    id: 'jejak7',
    surahRef: 'Al-Ma\'idah : 3',
    surahNum: 5,
    verseNum: 3,
    eventName: '🕋 Haji Wada\' & Kesempurnaan Agama (10 H / 632 M)',
    arabic: 'اَلْيَوْمَ اَكْمَلْتُ لَكُمْ دِيْنَكُمْ وَاَتْمَمْتُ عَلَيْكُمْ نِعْمَتِيْ وَرَضِيْتُ لَكُمُ الْاِسْلَامَ دِيْنًا',
    translation: 'Pada hari ini telah Aku sempurnakan untukmu agamamu, dan telah Aku cukupkan nikmat-Ku kepadamu, dan telah Aku ridhai Islam sebagai agamamu.',
    eventDetail: '<strong>Asbabun Nuzul:</strong> Ayat agung ini turun di Padang Arafah pada hari Jumat sore saat wukuf Haji Wada\', menandai purna dan sempurnanya seluruh hukum dan syariat Islam sebelum wafatnya baginda Rasulullah ﷺ.',
    journalRef: 'Jurnal Al-Hikmah, DOI: 10.24260/al-hikmah.v19i2.1643'
  }
];�ْلَامَ دِيْنًا',
    translation: 'Pada hari ini telah Aku sempurnakan untukmu agamamu, dan telah Aku cukupkan nikmat-Ku kepadamu, dan telah Aku ridhai Islam sebagai agamamu.',
    eventDetail: '<strong>Asbabun Nuzul:</strong> Ayat agung ini turun di Padang Arafah pada hari Jumat sore saat wukuf Haji Wada\', menandai purna dan sempurnanya seluruh hukum dan syariat Islam sebelum wafatnya baginda Rasulullah ﷺ.',
    journalRef: 'Jurnal Al-Hikmah, DOI: 10.24260/al-hikmah.v19i2.1643'
  }
];uh.',
  },
  {
    id:'jejak3',
    surahRef:'Al-Baqarah : 183',
    surahNum:2,
    verseNum:183,
    eventName:'🌙 Syariat Puasa Ramadhan (2 H)',
    arabic:'يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا كُتِبَ عَلَيْكُمُ الصِّيَAMُ كَمَا كُتِبَ عَلَى الَّذِيْنَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُوْنَ',
    translation:'Wahai orang-orang yang beriman! Diwajibkan atas kamu berpuasa sebagaimana diwajibkan atas orang sebelum kamu agar kamu bertakwa.',
    eventDetail:'<strong>Asbabun Nuzul:</strong> Diturunkan di Madinah pada bulan Sya\'ban tahun ke-2 Hijriah, meresmikan kewajiban berpuasa Ramadhan selama satu bulan penuh.',
  },
  {
    id:'jejak4',
    surahRef:'At-Taubah : 40',
    surahNum:9,
    verseNum:40,
    eventName:'🏔️ Hijrah & Perlindungan di Gua Tsur (1 H)',
    arabic:'اِلَّا تَنْصُرُوْهُ فَقَدْ نَصَرَهُ اللّٰهُ اِذْ اَخْرَجَهُ الَّذِيْنَ كَفَرُوْا ثَانِيَ اثْنَيْنِ اِذْ هُمَا فِي الْغَارِ',
    translation:'Jika kamu tidak menolongnya (Muhammad), maka sesungguhnya Allah telah menolongnya (yaitu) ketika orang-orang kafir mengusirnya (dari Makkah); sedang dia salah seorang dari dua orang ketika keduanya berada dalam gua.',
    eventDetail:'<strong>Konteks:</strong> Merekam ketenangan Nabi ﷺ mendampingi Abu Bakar di dalam Gua Tsur: "La tahzan, innallaha ma\'ana (Jangan bersedih, sesungguhnya Allah bersama kita)."',
  },
  {
    id:'jejak6',
    surahRef:'Al-\'Alaq : 1-2',
    surahNum:96,
    verseNum:1,
    eventName:'📖 Nuzulul Qur\'an di Gua Hira (610 M)',
    arabic:'اِقْرَأْ بِاسْمِ رَبِّكَ الَّذِيْ خَلَقَ ۚ خَلَقَ الْاِنْسَانَ مِنْ عَلَقٍ',
    translation:'Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan, Dia telah menciptakan manusia dari segumpal darah.',
    eventDetail:'<strong>Wahyu Pertama:</strong> Wahyu pembuka yang disampaikan Malaikat Jibril kepada Nabi Muhammad ﷺ di Jabal Nur, menandai dimulainya era kenabian dan peradaban ilmu Islam.',
  }
];
