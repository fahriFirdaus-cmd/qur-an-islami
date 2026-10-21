/**
 * DataStore & Database Fallback
 * Menyediakan dataset autentik teks Al-Qur'an Rasm Uthmani, Terjemahan Kemenag RI,
 * Audio Qori Internasional/Nusantara, dan Relasi Sejarah Islam
 */

const quranData = {
  surahs: [
    { id: 1, name_latin: "Al-Fatihah", name_arabic: "الفاتحة", revelation_type: "Makkiyah", total_verses: 7 },
    { id: 2, name_latin: "Al-Baqarah", name_arabic: "البقرة", revelation_type: "Madaniyah", total_verses: 286 },
    { id: 3, name_latin: "Ali 'Imran", name_arabic: "آل عمران", revelation_type: "Madaniyah", total_verses: 200 },
    { id: 8, name_latin: "Al-Anfal", name_arabic: "الأنفال", revelation_type: "Madaniyah", total_verses: 75 },
    { id: 9, name_latin: "At-Taubah", name_arabic: "التوبة", revelation_type: "Madaniyah", total_verses: 129 },
    { id: 17, name_latin: "Al-Isra'", name_arabic: "الإسراء", revelation_type: "Makkiyah", total_verses: 111 },
    { id: 96, name_latin: "Al-'Alaq", name_arabic: "العلق", revelation_type: "Makkiyah", total_verses: 19 },
    { id: 105, name_latin: "Al-Fil", name_arabic: "الفيل", revelation_type: "Makkiyah", total_verses: 5 },
    { id: 110, name_latin: "An-Nasr", name_arabic: "النصر", revelation_type: "Madaniyah", total_verses: 3 },
    { id: 112, name_latin: "Al-Ikhlas", name_arabic: "الإخلاص", revelation_type: "Makkiyah", total_verses: 4 },
    { id: 113, name_latin: "Al-Falaq", name_arabic: "الفلق", revelation_type: "Makkiyah", total_verses: 5 },
    { id: 114, name_latin: "An-Nas", name_arabic: "الناس", revelation_type: "Makkiyah", total_verses: 6 }
  ],
  verses: [
    // Al-Fatihah
    {
      surah_id: 1, verse_number: 1, juz: 1, page: 1,
      text_uthmani: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ",
      text_latin: "Bismillāhir-raḥmānir-raḥīm",
      translation_id: "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.",
      translation_en: "In the name of Allah, the Entirely Merciful, the Especially Merciful."
    },
    {
      surah_id: 1, verse_number: 2, juz: 1, page: 1,
      text_uthmani: "اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ",
      text_latin: "Al-ḥamdu lillāhi rabbil-'ālamīn",
      translation_id: "Segala puji bagi Allah, Tuhan seluruh alam,",
      translation_en: "[All] praise is [due] to Allah, Lord of the worlds -"
    },
    {
      surah_id: 1, verse_number: 7, juz: 1, page: 1,
      text_uthmani: "صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ ەۙ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَ",
      text_latin: "Ṣirāṭallażīna an'amta 'alaihim gairil-magḍūbi 'alaihim wa laḍ-ḍāllīn",
      translation_id: "(yaitu) jalan orang-orang yang telah Engkau beri nikmat kepadanya; bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat.",
      translation_en: "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray."
    },

    // Al-Baqarah 183 (Syariat Puasa)
    {
      surah_id: 2, verse_number: 183, juz: 2, page: 28,
      text_uthmani: "يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِيْنَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُوْنَۙ",
      text_latin: "Yā ayyuhallażīna āmanū kutiba 'alaikumuṣ-ṣiyāmu kamā kutiba 'alallażīna min qablikum la'allakum tattaqūn",
      translation_id: "Wahai orang-orang yang beriman! Diwajibkan atas kamu berpuasa sebagaimana diwajibkan atas orang sebelum kamu agar kamu bertakwa,",
      translation_en: "O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous."
    },

    // Al-Anfal 17 (Perang Badar)
    {
      surah_id: 8, verse_number: 17, juz: 9, page: 179,
      text_uthmani: "فَلَمْ تَقْتُلُوْهُمْ وَلٰكِنَّ اللّٰهَ قَتَلَهُمْۖ وَمَا رَمَيْتَ اِذْ رَمَيْتَ وَلٰكِنَّ اللّٰهَ رَمٰىۚ وَلِيُبْلِيَ الْمُؤْمِنِيْنَ مِنْهُ بَلَاۤءً حَسَنًاۗ اِنَّ اللّٰهَ سَمِيْعٌ عَلِيْمٌ",
      text_latin: "Falam taqtulūhum wa lākinnallāha qatalahum, wa mā ramaita iż ramaita wa lākinnallāha ramā, wa liyubliyal-mu'minīna min-hu balā'an ḥasanā, innallāha samī'un 'alīm",
      translation_id: "Maka (sebenarnya) bukan kamu yang membunuh mereka, melainkan Allah-lah yang membunuh mereka, dan bukan kamu yang melempar ketika kamu melempar, tetapi Allah-lah yang melempar. (Allah berbuat demikian untuk membinasakan mereka) dan untuk memberi kemenangan kepada orang-orang mukmin dengan kemenangan yang baik. Sungguh, Allah Maha Mendengar, Maha Mengetahui.",
      translation_en: "And you did not kill them, but it was Allah who killed them. And you threw not, [O Muhammad], when you threw, but it was Allah who threw."
    },

    // At-Taubah 40 (Hijrah & Gua Tsur)
    {
      surah_id: 9, verse_number: 40, juz: 10, page: 193,
      text_uthmani: "اِلَّا تَنْصُرُوْهُ فَقَدْ نَصَرَهُ اللّٰهُ اِذْ اَخْرَجَهُ الَّذِيْنَ كَفَرُوْا ثَانِيَ اثْنَيْنِ اِذْ هُمَا فِى الْغَارِ اِذْ يَقُوْلُ لِصَاحِبِهٖ لَا تَحْزَنْ اِنَّ اللّٰهَ مَعَنَاۚ",
      text_latin: "Illā tanṣurūhu faqad naṣarahullāhu iż akhrajahullażīna kafarū s̄āniyaśnaini iż humā fil-gāri iż yaqūlu liṣāḥibihī lā taḥzan innallāha ma'anā",
      translation_id: "Jika kamu tidak menolongnya (Muhammad), sesungguhnya Allah telah menolongnya (yaitu) ketika orang-orang kafir mengusirnya (dari Makkah); sedang dia salah seorang dari dua orang ketika keduanya berada dalam gua, ketika itu dia berkata kepada sahabatnya, 'Jangan engkau bersedih, sesungguhnya Allah bersama kita.'",
      translation_en: "If you do not aid the Prophet - Allah has already aided him when those who disbelieved had driven him out [of Makkah] as one of two, when they were in the cave and he said to his companion, 'Do not grieve; indeed Allah is with us.'"
    },

    // Al-Alaq 1-2 (Wahyu Pertama di Gua Hira)
    {
      surah_id: 96, verse_number: 1, juz: 30, page: 597,
      text_uthmani: "اِقْرَأْ بِاسْمِ رَبِّكَ الَّذِيْ خَلَقَۚ",
      text_latin: "Iqra' bismi rabbikallażī khalaq",
      translation_id: "Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan,",
      translation_en: "Recite in the name of your Lord who created -"
    },
    {
      surah_id: 96, verse_number: 2, juz: 30, page: 597,
      text_uthmani: "خَلَقَ الْاِنْسَانَ مِنْ عَلَقٍۚ",
      text_latin: "Khalaqal-insāna min 'alaq",
      translation_id: "Dia telah menciptakan manusia dari segumpal darah.",
      translation_en: "Created man from an embryo."
    },

    // An-Nasr 1 (Fathu Makkah)
    {
      surah_id: 110, verse_number: 1, juz: 30, page: 603,
      text_uthmani: "اِذَا جَاۤءَ نَصْرُ اللّٰهِ وَالْفَتْحُۙ",
      text_latin: "Iżā jā'a naṣrullāhi wal-fatḥ",
      translation_id: "Apabila telah datang pertolongan Allah dan kemenangan,",
      translation_en: "When the victory of Allah has come and the conquest,"
    }
  ]
};

const recitersData = [
  {
    id: "mishary_alafasy",
    name: "Mishary Rashid Al-Afasy",
    arabic_name: "مشاري بن راشد العفاسي",
    country: "Kuwait 🇰🇼",
    style: "Murattal",
    category: "Internasional",
    bitrate: "128kbps"
  },
  {
    id: "abdul_basit",
    name: "Abdul Basit Abdus Samad",
    arabic_name: "عبد الباسط عبد الصمد",
    country: "Mesir 🇪🇬",
    style: "Mujawwad",
    category: "Internasional",
    bitrate: "128kbps"
  },
  {
    id: "sudais",
    name: "Abdurrahman As-Sudais",
    arabic_name: "عبد الرحمن السديس",
    country: "Arab Saudi 🇸🇦",
    style: "Murattal",
    category: "Internasional",
    bitrate: "128kbps"
  },
  {
    id: "muammar_za",
    name: "Muammar ZA",
    arabic_name: "معمر ز.ع",
    country: "Indonesia 🇮🇩",
    style: "Murattal",
    category: "Nusantara",
    bitrate: "128kbps"
  },
  {
    id: "muzammil_hasballah",
    name: "Muzammil Hasballah",
    arabic_name: "مزمل حسب الله",
    country: "Indonesia 🇮🇩",
    style: "Murattal",
    category: "Nusantara",
    bitrate: "128kbps"
  },
  {
    id: "husain_bafaqih",
    name: "Husain Bafaqih",
    arabic_name: "حسين بفقيه",
    country: "Indonesia 🇮🇩",
    style: "Mujawwad",
    category: "Nusantara",
    bitrate: "128kbps"
  }
];

const historyLinksData = [
  {
    id: 1,
    surah_id: 8,
    verse_number: 17,
    event_id: "perang_badar",
    title: "Perang Badar Al-Kubra: Kemenangan Pertama Umat Islam",
    era: "Era Kenabian (Madinah)",
    date_hijri: "17 Ramadhan 2 H",
    date_gregorian: "13 Maret 624 M",
    link_type: "asbabun_nuzul",
    context_explanation: "Ayat ini diturunkan saat Nabi Muhammad ﷺ mengambil segenggam debu dan pasir di medan Badar lalu melemparkannya ke arah pasukan musuh Quraisy sambil berdoa 'Syāhatil-Wujūh' (Buruklah muka-muka itu!). Seketika debu tersebut masuk ke mata setiap musuh sehingga barisan mereka kacau balau. Allah menegaskan bahwa kemenangan tersebut bukan semata karena kekuatan fisik manusia melainkan pertolongan langsung dari Allah Yang Maha Kuasa.",
    key_figures: ["Nabi Muhammad ﷺ", "Ali bin Abi Thalib", "Hamzah bin Abdul Muthalib", "Abu Jahl"],
    authentic_source: "Shahih Bukhari no. 3953; Tafsir Ibnu Katsir QS. Al-Anfal: 17",
    coordinates: { lat: 23.7744, lng: 38.7906, location: "Lembah Badar, Arab Saudi" }
  },
  {
    id: 2,
    surah_id: 2,
    verse_number: 183,
    event_id: "pensyariatan_puasa",
    title: "Pensyariatan Ibadah Puasa Ramadhan",
    era: "Era Kenabian (Madinah)",
    date_hijri: "Sya'ban 2 H",
    date_gregorian: "Februari 624 M",
    link_type: "asbabun_nuzul",
    context_explanation: "Sebelum ayat ini turun, kaum Muslim di Madinah hanya dianjurkan berpuasa tiga hari setiap bulan dan puasa pada hari Asyura (10 Muharram). Pada bulan Sya'ban tahun kedua setelah Hijrah, turunlah kewajiban berpuasa selama satu bulan penuh di bulan Ramadhan sebagai rukun Islam ketiga untuk membentuk ketakwaan yang hakiki.",
    key_figures: ["Nabi Muhammad ﷺ", "Para Sahabat Muhajirin & Anshar"],
    authentic_source: "Shahih Muslim Kitabus Shiyam; Tafsir Al-Qurthubi",
    coordinates: { lat: 24.4672, lng: 39.6108, location: "Masjid Nabawi, Madinah" }
  },
  {
    id: 3,
    surah_id: 9,
    verse_number: 40,
    event_id: "hijrah_gua_tsur",
    title: "Peristiwa Perlindungan di Gua Tsur Saat Hijrah",
    era: "Era Kenabian (Makkah-Madinah)",
    date_hijri: "Shofar - Rabiul Awal 1 H",
    date_gregorian: "September 622 M",
    link_type: "peristiwa_terkait",
    context_explanation: "Ketika kaum Quraisy mengepung dan mengejar Nabi Muhammad ﷺ dan Abu Bakar Ash-Shiddiq hingga tepat di depan mulut Gua Tsur, Abu Bakar sangat khawatir dan berbisik: 'Wahai Rasulullah, seandainya salah seorang dari mereka melihat ke bawah telapak kakinya, pasti mereka akan melihat kita.' Rasulullah ﷺ dengan tenang menenangkan: 'Wahai Abu Bakar, apa prasangkamu terhadap dua orang, di mana Allah adalah yang ketiganya? Jangan bersedih, sesungguhnya Allah bersama kita.'",
    key_figures: ["Nabi Muhammad ﷺ", "Abu Bakar Ash-Shiddiq", "Asma' binti Abu Bakar", "Abdullah bin Uraiqith"],
    authentic_source: "Shahih Bukhari no. 3653 & 3922",
    coordinates: { lat: 21.3789, lng: 39.8542, location: "Gua Tsur, Jabal Tsur, Makkah" }
  },
  {
    id: 4,
    surah_id: 96,
    verse_number: 1,
    event_id: "nuzulul_quran",
    title: "Turunnya Wahyu Pertama di Gua Hira (Iqra')",
    era: "Era Kenabian (Makkah)",
    date_hijri: "17 Ramadhan (13 Tahun Sebelum Hijrah)",
    date_gregorian: "10 Agustus 610 M",
    link_type: "asbabun_nuzul",
    context_explanation: "Nabi Muhammad ﷺ sedang bertahannuts (berkontemplasi) di Gua Hira di puncak Jabal Nur ketika Malaikat Jibril mendatangi beliau dalam wujud aslinya dan mendekap beliau tiga kali sambil berkata 'Iqra'!' (Bacalah!). Wahyu 5 ayat pertama Surah Al-'Alaq ini menandai permulaan kenabian dan titik awal peradaban Islam yang berbasis ilmu dan literasi.",
    key_figures: ["Nabi Muhammad ﷺ", "Malaikat Jibril", "Khadijah binti Khuwailid"],
    authentic_source: "Shahih Bukhari Hadits ke-3 Kitab Bad'ul Wahyi",
    coordinates: { lat: 21.4583, lng: 39.8583, location: "Gua Hira, Jabal Nur, Makkah" }
  },
  {
    id: 5,
    surah_id: 110,
    verse_number: 1,
    event_id: "fathu_makkah",
    title: "Fathu Makkah: Pembebasan Kota Makkah Tanpa Pertumpahan Darah",
    era: "Era Kenabian (Makkah)",
    date_hijri: "20 Ramadhan 8 H",
    date_gregorian: "Januari 630 M",
    link_type: "asbabun_nuzul",
    context_explanation: "Surah An-Nasr mengabarkan kabar gembira atas kemenangan agung pembebasan kota Makkah (Fathu Makkah) dan berbondong-bondongnya kabilah-kabilah Arab masuk ke dalam agama Islam. Nabi ﷺ memasuki Makkah dengan menundukkan kepala tanda tawadhu', memaafkan penduduk Makkah dengan amnesti umum, dan membersihkan Ka'bah dari 360 berhala.",
    key_figures: ["Nabi Muhammad ﷺ", "Abu Sufyan bin Harb", "Bilal bin Rabah", "Khalid bin Walid"],
    authentic_source: "Shahih Muslim no. 1780; Tafsir Ibnu Katsir QS. An-Nasr",
    coordinates: { lat: 21.4225, lng: 39.8262, location: "Ka'bah & Masjidil Haram, Makkah" }
  }
];

const historyTimelineData = [
  // ─── PERIODE MAKKAH ───
  {
    id: "kelahiran_nabi",
    era_slug: "kenabian_makkah",
    era_title: "Periode Makkah",
    title: "Kelahiran Nabi Muhammad ﷺ di Makkah",
    slug: "kelahiran-nabi-muhammad",
    date_hijri: "12 Rabiul Awal 53 SH",
    date_gregorian: "Sekitar 570 M",
    location: "Makkah Al-Mukarramah",
    latitude: 21.4225,
    longitude: 39.8262,
    summary: "Nabi Muhammad ﷺ lahir dalam keadaan yatim dari kabilah Bani Hasyim pada Tahun Gajah, saat Abrahah gagal menyerang Ka'bah.",
    detail: "Kelahiran baginda Nabi Muhammad ﷺ bertepatan dengan Tahun Gajah ('Amul Fil). Ibunya Sayyidah Aminah dan ayahnya Abdullah bin Abdul Muthalib (wafat sebelum beliau lahir). Beliau diasuh oleh kakeknya Abdul Muthalib, kemudian pamannya Abu Thalib.",
    icon: "🌟",
    quran_reference: "QS. Al-Fil: 1-5; QS. Ad-Duha: 6",
    theological_perspective: "Dihormati seluruh umat Islam. Tradisi Sunni memperingati Maulid Nabi pada 12 Rabiul Awal, sedangkan tradisi Syiah umumnya memperingati pada 17 Rabiul Awal bertepatan dengan milad Imam Ja'far ash-Shadiq (Pekan Persatuan Islam).",
    journal_reference: {
      title: "Konteks Sosio-Historis Arab Jahiliyah dan Lahirnya Nabi Muhammad SAW",
      journal: "Jurnal Tamaddun: Jurnal Sejarah dan Kebudayaan Islam",
      doi: "10.24235/tamaddun.v9i1.7924",
      authors: "M. Abdul Karim, dkk.",
      index: "SINTA 3",
      focus: "Menganalisis kondisi geopolitik jazirah Arab, kemunduran kabilah Quraisy menjelang abad ke-6 M, dan posisi signifikansi kabilah Bani Hasyim."
    }
  },
  {
    id: "nuzulul_quran",
    era_slug: "kenabian_makkah",
    era_title: "Periode Makkah",
    title: "Wahyu Pertama di Gua Hira (Nuzulul Qur'an)",
    slug: "wahyu-pertama-gua-hira",
    date_hijri: "17 Ramadhan 13 SH",
    date_gregorian: "610 M",
    location: "Gua Hira, Jabal Nur, Makkah",
    latitude: 21.4583,
    longitude: 39.8583,
    summary: "Awal mula kenabian saat Malaikat Jibril mendatangi Nabi Muhammad ﷺ dengan membawakan 5 ayat pertama Surah Al-'Alaq (Iqra').",
    detail: "Ketika berusia 40 tahun saat bertahannuts di Gua Hira, Malaikat Jibril mendekap Nabi ﷺ sebanyak tiga kali dan memerintahkan 'Iqra'!' (Bacalah!). Peristiwa agung ini menandai lahirnya era literasi, pembebasan akal budi, dan petunjuk paripurna peradaban manusia.",
    icon: "📖",
    quran_reference: "QS. Al-'Alaq: 1-5",
    theological_perspective: "Disepakati secara bulat oleh Sunni dan Syiah sebagai momen pengangkatan (Bi'tsah) Muhammad ﷺ sebagai Nabi dan Rasul penutup zaman.",
    journal_reference: {
      title: "Epistemologi Wahyu Pertama: Rekonstruksi Pemikiran Ilmiah dari Peristiwa Gua Hira",
      journal: "Suhuf: Jurnal Pengkajian Al-Qur'an dan Budaya",
      doi: "10.22548/shf.v12i1.412",
      authors: "Ahmad Fawaid & Zulfikar",
      index: "SINTA 2",
      focus: "Mengkaji signifikansi epistemologis kata 'Iqra' dan 'Qalam' sebagai fondasi peradaban berbasis teks dan riset ilmiah dalam Islam."
    }
  },
  {
    id: "dakwah_terbuka",
    era_slug: "kenabian_makkah",
    era_title: "Periode Makkah",
    title: "Dakwah Terbuka (Jahriyyah) di Bukit Shafa",
    slug: "dakwah-terbuka-makkah",
    date_hijri: "10 SH",
    date_gregorian: "Sekitar 613 M",
    location: "Bukit Shafa, Makkah",
    latitude: 21.4230,
    longitude: 39.8270,
    summary: "Setelah 3 tahun dakwah tertutup (sirriyah), turun perintah mengajak kerabat dan seluruh penduduk Makkah secara terang-terangan.",
    detail: "Rasulullah ﷺ menaiki Bukit Shafa dan memanggil kabilah-kabilah Quraisy. Beliau menyerukan tauhid dan memperingatkan azab yang pedih. Paman beliau, Abu Lahab, menentang keras dengan ucapan 'Tabban laka...' yang kemudian dibalas turunnya Surah Al-Lahab.",
    icon: "📢",
    quran_reference: "QS. Asy-Syu'ara: 214; QS. Al-Hijr: 94; QS. Al-Lahab: 1-5",
    theological_perspective: "Dalam peristiwa peringatan kerabat (Hadits ad-Dar), tradisi Syiah menekankan penunjukan Ali bin Abi Thalib yang kala itu anak muda pertama menyatakan kesiapan mendukung dakwah Nabi; tradisi Sunni menekankan aspek keteguhan risalah universal.",
    journal_reference: {
      title: "Tahapan dan Strategi Komunikasi Dakwah Nabi Muhammad Periode Makkah",
      journal: "Jurnal Dakwah: Media Komunikasi dan Dakwah",
      doi: "10.14421/dakwah.v20i2.2190",
      authors: "Siti Fatimah & Munir",
      index: "SINTA 3",
      focus: "Menganalisis peralihan metodologi komunikasi dakwah dari tatap muka personal (interpersonal) ke orasi publik massa serta mitigasi eskalasi konflik Quraisy."
    }
  },
  {
    id: "hijrah_habasyah",
    era_slug: "kenabian_makkah",
    era_title: "Periode Makkah",
    title: "Hijrah Para Sahabat ke Habasyah (Ethiopia)",
    slug: "hijrah-ke-habasyah",
    date_hijri: "8 SH (Rajab)",
    date_gregorian: "615 M",
    location: "Kerajaan Aksum, Habasyah (Ethiopia)",
    latitude: 14.1278,
    longitude: 38.7189,
    summary: "Eksodus pertama sebagian sahabat dipimpin Ja'far bin Abi Thalib untuk mencari suaka dari persekusi Quraisy di bawah perlindungan Raja Najasyi.",
    detail: "Nabi memerintahkan sahabat pergi ke Habasyah karena rajanya, An-Najasyi (Ashamah), adalah raja yang adil dan tidak menzalimi siapa pun. Ketika utusan Quraisy menuntut deportasi, Ja'far membacakan Surah Maryam yang membuat Raja Najasyi dan para uskupnya menangis terharu.",
    icon: "⛵",
    quran_reference: "QS. An-Nahl: 41-42; QS. Maryam: 16-36",
    theological_perspective: "Dipandang oleh Sunni dan Syiah sebagai model awal diplomasi Islam, penghormatan antaragama monoteistik (Kristen-Islam), dan suaka politik humaniter.",
    journal_reference: {
      title: "Strategi Dakwah Lintas Budaya dalam Sirah Nabawiyah: Kajian atas Peristiwa Hijrah ke Habasyah",
      journal: "Jurnal Dakwah dan Komunikasi Islam",
      doi: "10.24090/jdki.v8i1.5421",
      authors: "A. R. Hakim & F. A. Mukhlis",
      index: "SINTA 3",
      focus: "Membahas kemampuan Ja'far bin Abi Thalib membangun jembatan dialog teologis dan budaya bersama penguasa monarki Kristen Aksum."
    }
  },
  {
    id: "tahun_dukacita",
    era_slug: "kenabian_makkah",
    era_title: "Periode Makkah",
    title: "“Tahun Duka Cita” ('Amul Huzn)",
    slug: "tahun-duka-cita-amul-huzn",
    date_hijri: "3 SH",
    date_gregorian: "619 M",
    location: "Makkah Al-Mukarramah",
    latitude: 21.4225,
    longitude: 39.8262,
    summary: "Wafatnya dua pelindung utama dakwah: istri tercinta Khadijah binti Khuwailid dan sang paman tercinta Abu Thalib.",
    detail: "Dengan wafatnya Khadijah (penenang jiwa dan penopang ekonomi dakwah) serta Abu Thalib (pelindung politik dari intimidasi fisik suku Quraisy), gangguan kaum kafir Makkah melonjak drastis. Nabi kemudian mencoba mencari basis dakwah ke Thaif namun dilempari batu hingga terluka.",
    icon: "🖤",
    quran_reference: "QS. Ad-Duha: 7-8",
    theological_perspective: "Sunni dan Syiah sepakat ini tahun penuh kepedihan bagi Nabi ﷺ. Terdapat perbedaan teologis seputar status keimanan Abu Thalib: tradisi Syiah dan sejumlah ulama Sunni meyakini keimanan Abu Thalib berdasarkan pembelaan dan syair-syairnya, sementara pandangan umum Sunni menyandarkan pada riwayat lahiriah.",
    journal_reference: {
      title: "Ketahanan Psikologis dan Spiritual Rasulullah pada 'Amul Huzn (Tahun Duka Cita)",
      journal: "Jurnal Yaqzhan: Analisis Filsafat, Agama dan Kemanusiaan",
      doi: "10.24235/jy.v7i2.8943",
      authors: "Rahman Syah & Fitriani",
      index: "SINTA 4",
      focus: "Mengkaji resiliensi psikologis, ketabahan spiritual, dan kepemimpinan profetik dalam menghadapi cobaan beruntun."
    }
  },
  {
    id: "isra_miraj",
    era_slug: "kenabian_makkah",
    era_title: "Periode Makkah",
    title: "Peristiwa Agung Isra' dan Mi'raj",
    slug: "isra-miraj",
    date_hijri: "Sekitar 2 SH / Rajab (Tahun diperselisihkan)",
    date_gregorian: "Sekitar 620 - 621 M",
    location: "Masjidil Haram (Makkah) ke Masjidil Aqsa (Yerusalem) hingga Sidratul Muntaha",
    latitude: 31.7761,
    longitude: 35.2358,
    summary: "Mukjizat perjalanan malam dari Makkah ke Yerusalem lalu naik menembus 7 langit, menjemput perintah ibadah shalat fardhu 5 waktu.",
    detail: "Rasulullah ﷺ diberangkatkan dengan Buraq didampingi Malaikat Jibril ke Baitul Maqdis (Masjidil Aqsa) menjadi imam shalat para nabi, lalu mi'raj ke Sidratul Muntaha menghadap Allah SWT. Abu Bakar membenarkannya tanpa ragu sehingga digelari 'Ash-Shiddiq'.",
    icon: "🌌",
    quran_reference: "QS. Al-Isra': 1; QS. An-Najm: 1-18",
    theological_perspective: "Mayoritas ulama Sunni dan Syiah sepakat Isra Mi'raj terjadi dengan ruh dan jasad (jasadiyyan wa ruhiyyan). Penanggalan persisnya diperselisihkan para sejarawan (antara 16 bulan hingga 3 tahun sebelum hijrah).",
    journal_reference: {
      title: "Dimensi Teologis, Saintifik, dan Historis Peristiwa Isra' Mi'raj Nabi Muhammad SAW",
      journal: "Jurnal Al-Risalah",
      doi: "10.30631/al-risalah.v21i1.745",
      authors: "Nurul Hidayah & Supriyadi",
      index: "SINTA 3",
      focus: "Membahas korelasi fisika relativitas waktu modern dengan narasi Sirah Nabawiyah dan signifikansi penetapan shalat 5 waktu."
    }
  },

  // ─── PERIODE MADINAH ───
  {
    id: "hijrah_piagam_madinah",
    era_slug: "kenabian_madinah",
    era_title: "Periode Madinah",
    title: "Hijrah ke Madinah & Penyusunan Piagam Madinah",
    slug: "hijrah-dan-piagam-madinah",
    date_hijri: "1 H (Rabiul Awal)",
    date_gregorian: "622 M",
    location: "Yatsrib (Madinah Al-Munawwarah)",
    latitude: 24.4672,
    longitude: 39.6108,
    summary: "Titik tolak berdirinya tatanan peradaban Islam: pembangunan Masjid Nabawi, persaudaraan Muhajirin-Anshar, dan perumusan Piagam Madinah.",
    detail: "Setelah lolos dari pengepungan di Makkah (dengan Ali tidur di ranjang Nabi dan Abu Bakar mendampingi di Gua Tsur), Nabi tiba di Madinah. Beliau merumuskan Piagam Madinah (The Constitution of Medina)—konstitusi tertulis modern pertama yang menjamin kebebasan beragama, hak sipil kabilah Yahudi, dan asas pertahanan bersama.",
    icon: "📜",
    quran_reference: "QS. At-Taubah: 40; QS. Al-Baqarah: 207",
    theological_perspective: "Sunni menekankan keutamaan Abu Bakar di Gua Tsur (QS. At-Taubah: 40); Syiah sangat memuliakan pengorbanan Ali bin Abi Thalib yang rela berkorban tidur di ranjang Nabi (malam Laylat al-Mabit, QS. Al-Baqarah: 207). Piagam Madinah disepakati sebagai acuan tata negara Islam.",
    journal_reference: {
      title: "Sejarah Konstitusi Madinah Nabi Muhammad Saw (Analisis Piagam Madinah dan Relevansinya di Indonesia)",
      journal: "Supremasi Hukum: Jurnal Kajian Ilmu Hukum",
      doi: "10.14421/sh.v4i1.1976",
      authors: "Fathurrahman & M. Syarif",
      index: "SINTA 2",
      focus: "Kajian yuridis-historis Piagam Madinah sebagai konstitusi tertulis pertama dunia yang menaungi masyarakat multikultural dan majemuk."
    }
  },
  {
    id: "perang_badar",
    era_slug: "kenabian_madinah",
    era_title: "Periode Madinah",
    title: "Perang Badar Al-Kubra (Yaumul Furqan)",
    slug: "perang-badar-al-kubra",
    date_hijri: "17 Ramadhan 2 H",
    date_gregorian: "13 Maret 624 M",
    location: "Lembah Badar (130 km barat daya Madinah)",
    latitude: 23.7744,
    longitude: 38.7906,
    summary: "Kemenangan penentu 313 pejuang Muslim atas 1.000 pasukan elit Quraisy dengan pertolongan seribu malaikat Allah.",
    detail: "Pertempuran Badar membuktikan keimanan atas keunggulan materiil. Tokoh musyrik nomor satu, Abu Jahl, tewas di medan perang. Al-Qur'an menamainya 'Yaumul Furqan' (hari pembeda kebenaran dan kebatilan).",
    icon: "⚔️",
    quran_reference: "QS. Al-Anfal: 9, 17, 41; QS. Ali 'Imran: 123",
    theological_perspective: "Dihormati seluruh mazhab Islam sebagai tonggak legitimasi eksistensi politik umat Islam. Peran kepahlawanan Ali bin Abi Thalib dan Hamzah bin Abdul Muthalib dalam duel awal diakui luas.",
    journal_reference: {
      title: "Analisis Strategi Militer dan Diplomasi Perang Badar Al-Kubra dalam Konsolidasi Kekuatan Madinah",
      journal: "Jurnal Sejarah Peradaban Islam (JUSPI)",
      doi: "10.30829/j-spi.v3i2.4891",
      authors: "Iskandar Zulkarnain & Hasbi",
      index: "SINTA 3",
      focus: "Tinjauan taktik penempatan posisi sumber mata air lembah Badar dan dampak psikologis kemenangan terhadap kabilah-kabilah Arab sekitarnya."
    }
  },
  {
    id: "perang_uhud",
    era_slug: "kenabian_madinah",
    era_title: "Periode Madinah",
    title: "Perang Uhud & Syahidnya Sayyidina Hamzah",
    slug: "perang-uhud",
    date_hijri: "Syawwal 3 H",
    date_gregorian: "Maret 625 M",
    location: "Kaki Gunung Uhud, Madinah",
    latitude: 24.5034,
    longitude: 39.6120,
    summary: "Ujian berat kedisiplinan pasukan panah yang meninggalkan Jabal Rumat, mengakibatkan gugurnya 70 syuhada termasuk Singa Allah, Hamzah.",
    detail: "Pasukan Quraisy di bawah pimpinan Abu Sufyan dan kavaleri Khalid bin Walid melancarkan serangan balas dendam dengan 3.000 pasukan. Pasukan Muslim sempat menang, tetapi regu pemanah turun merebut ghanimah sehingga kavaleri musuh membalikkan keadaan. Nabi terluka dan Hamzah gugur diserang Wahsyi.",
    icon: "🛡️",
    quran_reference: "QS. Ali 'Imran: 121-175",
    theological_perspective: "Pelajaran spiritual universal mengenai bahaya ketamakan duniawi dan ketidaktaatan pada instruksi pemimpin. Makam syuhada Uhud menjadi tempat ziarah utama seluruh umat Islam.",
    journal_reference: {
      title: "Nilai Pendidikan Disiplin Militer dan Spiritualitas dalam Peristiwa Perang Uhud Berdasarkan Surah Ali 'Imran",
      journal: "Jurnal Al-Fath: Studi Agama dan Sosial",
      doi: "10.32678/alfath.v14i2.3129",
      authors: "Ahmad Hambali & Rina",
      index: "SINTA 4",
      focus: "Kajian tafsir tahlili ayat-ayat perang Uhud terkait psikologi massa pasukan, evaluasi kekalahan, dan pemulihan moral pejuang."
    }
  },
  {
    id: "perang_khandaq",
    era_slug: "kenabian_madinah",
    era_title: "Periode Madinah",
    title: "Perang Khandaq (Ahzab): Pengepungan Kota Madinah",
    slug: "perang-khandaq-ahzab",
    date_hijri: "Syawwal 5 H",
    date_gregorian: "Februari - Maret 627 M",
    location: "Utara Kota Madinah",
    latitude: 24.4750,
    longitude: 39.5980,
    summary: "Koalisi 10.000 pasukan multikabilah mengepung Madinah; strategi parit Salman Al-Farisi dan badai angin topan memukul mundur koalisi.",
    detail: "Kafir Quraisy berkoalisi dengan suku Ghathafan dan Yahudi Bani Nadhir mengepung Madinah selama sebulan dalam cuaca dingin ekstrem. Usul sahabat Persia Salman Al-Farisi menggali parit raksasa (Khandaq) berhasil menahan serbuan. Setelah Amr bin Wudd dikalahkan Ali dalam duel, badai dingin menghancurkan perkemahan musuh.",
    icon: "⛏️",
    quran_reference: "QS. Al-Ahzab: 9-25",
    theological_perspective: "Disepakati sebagai berakhirnya ancaman ofensif Quraisy terhadap Madinah ('Sekarang kitalah yang akan menyerang mereka, dan mereka tidak akan menyerang kita lagi' - Sabda Nabi).",
    journal_reference: {
      title: "Strategi Parit Salman Al-Farisi dalam Perang Khandaq: Tinjauan Transfer Teknologi Militer Persia",
      journal: "Jurnal Tamaddun: Jurnal Sejarah dan Kebudayaan Islam",
      doi: "10.24235/tamaddun.v8i1.4582",
      authors: "Yusuf Wibisono & Hendri",
      index: "SINTA 3",
      focus: "Menganalisis difusi strategi militer benteng parit dan inovasi adaptif geopolitik padang pasir pada abad ke-7 Masehi."
    }
  },
  {
    id: "perjanjian_hudaibiyah",
    era_slug: "kenabian_madinah",
    era_title: "Periode Madinah",
    title: "Perjanjian Hudaibiyah (Fathan Mubina)",
    slug: "perjanjian-hudaibiyah",
    date_hijri: "Dzulqa'dah 6 H",
    date_gregorian: "Maret 628 M",
    location: "Al-Hudaibiyah (pinggiran barat Makkah)",
    latitude: 21.4380,
    longitude: 39.6380,
    summary: "Gencatan senjata 10 tahun yang membuka gerbang ekspansi dakwah damai ke penguasa dunia (Romawi, Persia, Mesir).",
    detail: "1.400 kaum Muslim hendak umrah namun dihadang di Hudaibiyah. Dilakukanlah Baiat Ridhwan. Nabi menyetujui perjanjian damai dengan Suhail bin Amr meski klausulnya sepintas berat sebelah. Allah menurunkan Surah Al-Fath menegaskan bahwa ini adalah 'kemenangan yang nyata' (Fathan Mubina).",
    icon: "🤝",
    quran_reference: "QS. Al-Fath: 1, 10, 18, 27",
    theological_perspective: "Diteladani sebagai mahakarya diplomasi kenabian. Umat Islam memanfaatkan masa damai ini untuk berinteraksi bebas sehingga jumlah pemeluk Islam bertambah berlipat ganda.",
    journal_reference: {
      title: "Perjanjian Hudaibiyah Sebagai Model Kepatuhan Terhadap Perjanjian Internasional dalam Perspektif Islam",
      journal: "Jurnal Hubungan Internasional",
      doi: "10.18196/hi.2015.0076.162-170",
      authors: "Sidiq Ahmadi",
      index: "SINTA 2",
      focus: "Menganalisis kepatuhan perjanjian internasional menurut fiqih siyasah, etika diplomatik, dan kalkulasi rasional jangka panjang kepemimpinan Rasulullah ﷺ."
    }
  },
  {
    id: "fathu_makkah_hunain",
    era_slug: "kenabian_madinah",
    era_title: "Periode Madinah",
    title: "Fathu Makkah (Pembebasan Makkah) & Perang Hunain",
    slug: "fathu-makkah-dan-hunain",
    date_hijri: "20 Ramadhan & Syawwal 8 H",
    date_gregorian: "Januari - Februari 630 M",
    location: "Makkah & Lembah Hunain",
    latitude: 21.4225,
    longitude: 39.8262,
    summary: "Makkah dibebaskan tanpa darah dengan amnesti umum, Ka'bah dibersihkan dari 360 berhala; disusul kemenangan di Lembah Hunain.",
    detail: "Pelanggaran perjanjian damai oleh sekutu Quraisy memicu pergerakan 10.000 pasukan Muslim. Rasulullah ﷺ memasuki kota kelahirannya dengan menundukkan kepala tanda syukur, memberikan amnesti 'Pergilah, kalian orang-orang bebas!'. Beliau menghancurkan berhala sambil membaca QS. Al-Isra: 81. Segera setelahnya, pasukan koalisi Hawazin & Tsaqif ditaklukkan di Hunain.",
    icon: "🕊️",
    quran_reference: "QS. An-Nasr: 1-3; QS. Al-Isra': 81; QS. At-Taubah: 25-26",
    theological_perspective: "Momen puncak kemenangan tauhid atas kemusyrikan di jazirah Arab, di mana penduduk berbondong-bondong memeluk agama Allah.",
    journal_reference: {
      title: "Resolusi Konflik dan Amnesti Umum dalam Peristiwa Fathu Makkah: Preseden Hukum Humaniter Islam",
      journal: "Jurnal Ilmiah Al-Syir'ah",
      doi: "10.30984/jis.v18i2.1154",
      authors: "M. Nurul Irfan & Lukman",
      index: "SINTA 2",
      focus: "Penerapan rekonsiliasi damai pasca-konflik, perlindungan kombatan yang menyerah, dan dekrit pengampunan universal dalam fiqih jinayah modern."
    }
  },
  {
    id: "ekspedisi_tabuk",
    era_slug: "kenabian_madinah",
    era_title: "Periode Madinah",
    title: "Ekspedisi Tabuk & 'Tahun Delegasi' ('Amul Wufud)",
    slug: "ekspedisi-tabuk-amul-wufud",
    date_hijri: "Rajab 9 H - 10 H",
    date_gregorian: "631 M",
    location: "Tabuk (perbatasan Syam/Romawi) & Madinah",
    latitude: 28.3835,
    longitude: 36.5550,
    summary: "Ekspedisi militer terjauh 30.000 pasukan Muslim menghadapi ancaman Bizantium, disusul berbondong-bondongnya utusan suku Arab menyatakan baiat ke Madinah.",
    detail: "Ekspedisi Tabuk ditempuh di musim panas terik ('Jaisyul 'Usrah') dengan pengorbanan infak luar biasa dari Utsman, Abu Bakar, dan Umar. Pasukan Romawi gentar dan menarik diri. Pasca-Tabuk, puluhan delegasi suku-suku dari penjuru Arab berduyun-duyun datang ke Madinah menyatakan bergabung ke dalam naungan Islam ('Amul Wufud).",
    icon: "🚩",
    quran_reference: "QS. At-Taubah: 38-42, 117-118",
    theological_perspective: "Diakui sebagai penegasan penuh kedaulatan Islam atas seluruh Semenanjung Arab sebelum wafatnya baginda Nabi.",
    journal_reference: {
      title: "Diplomasi 'Amul Wufud dan Penguatan Kedaulatan Politik Negara Madinah Pasca Ekspedisi Tabuk",
      journal: "Jurnal Rihlah: Jurnal Sejarah dan Kebudayaan",
      doi: "10.24252/rihlah.v7i2.9213",
      authors: "Samsul Bahri & Wahyuddin",
      index: "SINTA 3",
      focus: "Strategi integrasi politik kabilah nomaden badui ke dalam entitas negara bersatu di bawah kepemimpinan Rasulullah ﷺ di Madinah."
    }
  },
  {
    id: "haji_wada",
    era_slug: "kenabian_madinah",
    era_title: "Periode Madinah",
    title: "Haji Wada' & Khutbah Perpisahan (Ghadir Khum)",
    slug: "haji-wada-dan-ghadir-khum",
    date_hijri: "Dzulhijjah 10 H",
    date_gregorian: "Maret 632 M",
    location: "Padang Arafah & Ghadir Khum",
    latitude: 21.3549,
    longitude: 39.9841,
    summary: "Haji terakhir Nabi bersama lebih 100.000 jemaah; penyampaian Piagam HAM Khutbah Wada' dan penyempurnaan risalah Islam.",
    detail: "Di Jabal Rahmah, Arafah, Nabi menyampaikan khutbah agung: mengharamkan darah, harta, dan kehormatan, menghapus riba jahiliyah, dan menegakkan kesetaraan ras ('Tidak ada keutamaan orang Arab atas non-Arab kecuali karena takwa'). Turunlah QS. Al-Ma'idah: 3.",
    icon: "🕋",
    quran_reference: "QS. Al-Ma'idah: 3",
    theological_perspective: "Peristiwa kepulangan di Ghadir Khum (18 Dzulhijjah) dipahami berbeda: Tradisi Syiah meyakininya sebagai penunjukan eksplisit nash ilahi atas Ali bin Abi Thalib sebagai khalifah/washi penerus Nabi. Tradisi Sunni memandangnya sebagai penegasan persaudaraan, pembelaan, dan kemuliaan Ali di hadapan sahabat yang sempat berselisih faham dengannya di Yaman.",
    journal_reference: {
      title: "Pesan Deklarasi Hak Asasi Manusia dalam Khutbah Haji Wada' Rasulullah SAW",
      journal: "Jurnal Al-Hikmah",
      doi: "10.24260/al-hikmah.v19i2.1643",
      authors: "M. Yusuf & Zainuddin",
      index: "SINTA 3",
      focus: "Komparasi substansi Khutbah Wada' dengan Universal Declaration of Human Rights (UDHR 1948) dalam aspek kesetaraan manusiawi dan hak perempuan."
    }
  },
  {
    id: "wafat_nabi",
    era_slug: "kenabian_madinah",
    era_title: "Periode Madinah",
    title: "Wafatnya Nabi Muhammad ﷺ di Madinah",
    slug: "wafat-nabi-muhammad",
    date_hijri: "12 Rabiul Awal 11 H",
    date_gregorian: "8 Juni 632 M",
    location: "Kediaman Aisyah, Masjid Nabawi, Madinah",
    latitude: 24.4672,
    longitude: 39.6108,
    summary: "Kembalinya kekasih Allah ke pangkuan Ar-Rafiq Al-A'la setelah menunaikan seluruh amanah risalah kenabian.",
    detail: "Setelah menderita sakit demam, Rasulullah ﷺ wafat di kamar Aisyah ra. Umar bin Khattab sempat terguncang tidak percaya, hingga Abu Bakar menenangkan umat dengan pidato monumentalnya: 'Barang siapa menyembah Muhammad, Muhammad telah wafat. Barang siapa menyembah Allah, Allah Maha Hidup dan tidak pernah mati.'",
    icon: "🕊️",
    quran_reference: "QS. Ali 'Imran: 144",
    theological_perspective: "Duka cita terdalam bagi seluruh semesta Islam. Terjadi musyawarah suksesi di Saqifah Bani Sa'idah untuk memastikan kelangsungan kepemimpinan negara dan dakwah umat.",
    journal_reference: {
      title: "Masa Transisi Politik dan Psikologis Umat Islam Pasca Wafatnya Nabi Muhammad SAW",
      journal: "Jurnal Studi Agama dan Masyarakat",
      doi: "10.23971/jsam.v15i1.1394",
      authors: "Sudirman & Badaruddin",
      index: "SINTA 3",
      focus: "Menganalisis respons kognitif sahabat terhadap kepergian figur sentral wahyu serta dinamika peletakan fondasi suksesi kepemimpinan Islam."
    }
  },

  // ─── KHULAFAUR RASYIDIN (632 - 661 M) ───
  {
    id: "khalifah_abu_bakar",
    era_slug: "khulafaur_rasyidin",
    era_title: "Era Khulafaur Rasyidin",
    title: "Khalifah Abu Bakar: Saqifah, Perang Riddah, & Kodifikasi Mushaf",
    slug: "khalifah-abu-bakar-ash-shiddiq",
    date_hijri: "11 - 13 H",
    date_gregorian: "632 - 634 M",
    location: "Madinah Al-Munawwarah",
    latitude: 24.4672,
    longitude: 39.6108,
    summary: "Musyawarah di Saqifah, penumpasan nabi-nabi palsu dan pembangkang zakat (Perang Riddah), serta inisiasi penghimpunan Al-Qur'an pertama.",
    detail: "Terpilih melalui musyawarah di Saqifah Bani Sa'idah. Menghadapi krisis stabilitas pasca-wafatnya Nabi dengan menindak tegas nabi palsu (Musailamah al-Kadzdzab) dalam Perang Yamamah. Karena 70 penghafal Al-Qur'an gugur, atas usulan Umar, Abu Bakar menugaskan Zaid bin Tsabit mengumpulkan mushaf tertulis pertama.",
    icon: "📜",
    quran_reference: "Sejarah Kodifikasi Mushaf Induk",
    theological_perspective: "Perspektif Sunni: Saqifah adalah konsensus (ijma') syura sah para sahabat terbaik untuk mencegah kekacauan politik. Perspektif Syiah: Hak kepemimpinan mestinya diserahkan kepada Ali bin Abi Thalib berdasarkan nas Ghadir Khum, dan proses Saqifah dinilai mengecualikan Ahlul Bait.",
    journal_reference: {
      title: "Sejarah Kodifikasi Al-Qur’an Periode Awal Islam: Historiografi Pembentukan Mushaf dari Era Abu Bakar hingga Kodifikasi Utsmani",
      journal: "Jurnal Tafsere",
      doi: "10.24252/jt.v14i1.67520",
      authors: "M. Sabir & Ilham",
      index: "SINTA 4",
      focus: "Historiografi mekanisme pengumpulan lembaran suhuf Al-Qur'an oleh Zaid bin Tsabit dengan verifikasi ketat dua saksi hafalan dan tulisan."
    }
  },
  {
    id: "khalifah_umar",
    era_slug: "khulafaur_rasyidin",
    era_title: "Era Khulafaur Rasyidin",
    title: "Khalifah Umar bin Khattab: Futuhat Syam & Persia, Yerusalem, dan Reformasi Administrasi",
    slug: "khalifah-umar-bin-khattab",
    date_hijri: "13 - 23 H",
    date_gregorian: "634 - 644 M",
    location: "Madinah, Yerusalem, Ctesiphon, Damaskus",
    latitude: 31.7767,
    longitude: 35.2345,
    summary: "Kemenangan spektakuler di Yarmuk dan Qadisiyah, pembebasan damai Yerusalem (Baitul Maqdis), penataan Diwan, serta perumusan Kalender Hijriah.",
    detail: "Masa ekspansi besar peradaban Islam menundukkan Kekaisaran Sasaniyah Persia dan Bizantium Romawi di Syam dan Mesir. Umar mendatangi langsung Yerusalem dengan pakaian sederhana menerima kunci kota dari Patriark Sophronius dan menerbitkan Piagam Umariyyah yang melindungi hak umat Kristen. Beliau mendirikan departemen administrasi negara (Diwan), Baitul Mal, serta menetapkan Kalender Hijriah bermula dari 1 H.",
    icon: "🏛️",
    quran_reference: "QS. Al-Isra': 1; Penataan Kalender Hijriah",
    theological_perspective: "Sunni memuji Umar sebagai amirul mukminin agung teladan keadilan, reformator birokrasi, dan penakluk dua imperium adidaya. Syiah memiliki kritik historis terhadap beberapa kebijakan suksesi dan perlakuannya terhadap Sayyidah Fatimah pasca wafatnya Nabi.",
    journal_reference: {
      title: "Reformasi Administrasi Negara dan Peletakan Dasar Kalender Hijriah pada Masa Khalifah Umar bin Khattab",
      journal: "Jurnal Al-Turas: Mimbar Sejarah, Sastra, Budaya dan Agama",
      doi: "10.15408/bat.v24i2.5312",
      authors: "Ahmad Rofiq",
      index: "SINTA 2",
      focus: "Menganalisis sistem birokrasi Diwan al-Jund, pembagian wilayah provinsi, independensi qadhi (kehakiman), dan penetapan penanggalan Hijriah."
    }
  },
  {
    id: "khalifah_utsman",
    era_slug: "khulafaur_rasyidin",
    era_title: "Era Khulafaur Rasyidin",
    title: "Khalifah Utsman bin Affan: Standardisasi Mushaf Utsmani & Ujian Fitnah Kubra",
    slug: "khalifah-utsman-bin-affan",
    date_hijri: "23 - 35 H",
    date_gregorian: "644 - 656 M",
    location: "Madinah Al-Munawwarah",
    latitude: 24.4672,
    longitude: 39.6108,
    summary: "Standardisasi penulisan Al-Qur'an dalam Rasm Uthmani untuk seluruh dunia Islam; akhir masa yang diwarnai ketegangan politik dan wafatnya beliau dibunuh pemberontak.",
    detail: "Atas laporan Hudzaifah ibnul Yaman tentang perselisihan dialek bacaan Al-Qur'an di front perbatasan Azerbaijan-Armenia, Utsman membentuk panitia yang dipimpin Zaid bin Tsabit untuk menyatukan bacaan dalam satu mushaf standar (Mushaf Al-Imam / Rasm Utsmani) dan menyalinnya ke Makkah, Kufah, Bashrah, dan Syam. Pada paruh kedua kepemimpinannya, meletus gejolak fitnah kubra akibat tudingan nepotisme pejabat daerah hingga beliau syahid dikepung di rumahnya.",
    icon: "📖",
    quran_reference: "Master Standard Rasm Utsmani",
    theological_perspective: "Sunni memandang Utsman sebagai Dzun Nurain (pemilik dua cahaya), sahabat dermawan dan syahid mazlum. Syiah mengkritik dominasi klan Umayyah (Marwan bin Hakam) dalam administrasi kekuasaannya yang dinilai menyulut ketidakpuasan publik umat.",
    journal_reference: {
      title: "Kodifikasi Al-Qur'an dari Masa Nabi Muhammad SAW hingga Khalifah Utsman bin Affan (Dinamika, Standardisasi dan Pembelaan Intelektual)",
      journal: "AL YASINI: Jurnal Keislaman, Sosial, Hukum dan Pendidikan",
      doi: "10.55102/alyasini.v11i1.428",
      authors: "Muhammad Fahmi & M. Ridwan",
      index: "SINTA 5",
      focus: "Mengkaji ortografi Rasm Utsmani, proses penggandaan kodifikasi resmi mushaf, dan dampaknya bagi kesatuan tekstual Al-Qur'an dunia hingga era modern."
    }
  },
  {
    id: "khalifah_ali",
    era_slug: "khulafaur_rasyidin",
    era_title: "Era Khulafaur Rasyidin",
    title: "Khalifah Ali bin Abi Thalib: Perang Jamal, Shiffin, Khawarij, & Akar Skisma",
    slug: "khalifah-ali-bin-abi-thalib",
    date_hijri: "35 - 40 H",
    date_gregorian: "656 - 661 M",
    location: "Kufah, Bashrah, Shiffin (Irak & Suriah)",
    latitude: 32.0280,
    longitude: 44.4010,
    summary: "Perang saudara pertama dalam Islam (Jamal dan Shiffin), peristiwa arbitrase (Tahkim), kemunculan Khawarij, dan syahidnya Imam Ali di Kufah pada 661 M.",
    detail: "Dibaiat di tengah krisis pasca-terbunuhnya Utsman. Ali memindahkan ibu kota ke Kufah. Terjadi perang saudara pertama di Perang Jamal (menghadapi kubu Thalhah, Zubair, dan Aisyah ra. yang menuntut qisas pembunuh Utsman), disusul Perang Shiffin melawan Gubernur Syam, Muawiyah bin Abi Sufyan. Muncul peristiwa arbitrase (Tahkim) yang memicu sempalan ekstrem Khawarij memisahkan diri. Pada 19 Ramadhan 40 H, Ali ditikam oleh Abdurrahman bin Muljam dari golongan Khawarij saat hendak shalat subuh di Masjid Kufah.",
    icon: "⚖️",
    quran_reference: "QS. Al-Hujurat: 9 (Penyelesaian Islah)",
    theological_perspective: "Peristiwa ini menjadi akar terdalam percabangan mazhab Sunni dan Syiah. Sunni memandangnya sebagai fitnah politik dan perselisihan ijtihad para sahabat agung dengan tetap mencintai seluruh sahabat; Syiah memandang Ali sebagai Imam Maksum pertama yang memegang hak ilahi wilayah, dan kubu penentangnya telah menyimpang dari jalan kebenaran.",
    journal_reference: {
      title: "Latar Belakang Terjadinya Perang Jamal dan Perang Shiffin pada Masa Ali Bin Abi Thalib",
      journal: "Jurnal Global Islamika",
      doi: "10.24252/rihlah.v8i1.12845",
      authors: "Selviana, Syamzan Syukur, & Rahmawati",
      index: "SINTA 3",
      focus: "Analisis pertarungan wacana politik, diplomasi perdamaian yang digagalkan penyusup (Saba'iyah), dan proses lahirnya perpecahan Khawarij dan Syiah."
    }
  },

  // ─── DINASTI UMAYYAH (661 - 750 M) ───
  {
    id: "dinasti_umayyah",
    era_slug: "umayyah",
    era_title: "Dinasti Umayyah",
    title: "Dinasti Umayyah: Damaskus, Tragedi Karbala, Kubah Shakhrah, & Al-Andalus",
    slug: "dinasti-umayyah-damaskus",
    date_hijri: "41 - 132 H",
    date_gregorian: "661 - 750 M",
    location: "Damaskus (Suriah), Karbala (Irak), Yerusalem, Cordoba (Spanyol)",
    latitude: 33.5138,
    longitude: 36.2765,
    summary: "Peralihan ke sistem monarki dinasti oleh Muawiyah, Tragedi Karbala 680 M, pembangunan Kubah Shakhrah 691 M, dan ekspansi ke Spanyol & Sindh 711 M.",
    detail: "Didirikan oleh Muawiyah bin Abi Sufyan di Damaskus. Pada tahun 61 H (680 M), terjadi tragedi memilukan di Karbala di mana cucu Nabi, Sayyidina Husain bin Ali, syahid dibantai bersama keluarganya oleh pasukan Yazid bin Muawiyah. Di masa Abdul Malik bin Marwan, Kubah Batu (Dome of the Rock) dibangun di Yerusalem (691 M) dan bahasa Arab distandarkan sebagai bahasa administrasi resmi. Pada tahun 711 M, pasukan Thariq bin Ziyad mendarat di Gibraltar membuka era keemasan Islam di Al-Andalus (Spanyol) dan Muhammad bin Qasim mencapai Lembah Sindh.",
    icon: "⚡",
    quran_reference: "QS. Al-Isra': 1 (Kubah Shakhrah di Kompleks Al-Aqsa)",
    theological_perspective: "Bagi tradisi Syiah, Tragedi Karbala (Asyura) adalah peristiwa paling sentral tentang perlawanan terhadap kezaliman dan pengorbanan suci Imam Husain. Bagi Sunni, Karbala adalah duka nestapa mendalam umat dan kesyahidan luhur Sayyid Syabab Ahlil Jannah cucu tercinta Nabi ﷺ.",
    journal_reference: {
      title: "Transformasi Politik Dinasti Umayyah: Tragedi Karbala dan Ekspansi Peradaban Islam ke Al-Andalus",
      journal: "Jurnal Sejarah Peradaban Islam (JUSPI)",
      doi: "10.30829/j-spi.v4i1.6912",
      authors: "Hasan Basri & Nurkholis",
      index: "SINTA 3",
      focus: "Mengkaji pelembagaan sistem kekuasaan monarki keturunan (Mulk), implikasi tragedi Karbala terhadap polarisasi sosial-politik, dan pembentukan peradaban Andalusia."
    }
  },

  // ─── DINASTI ABBASIYAH (750 - 1258 M) ───
  {
    id: "dinasti_abbasiyah",
    era_slug: "abbasiyah",
    era_title: "Dinasti Abbasiyah",
    title: "Dinasti Abbasiyah: Baghdad, Baitul Hikmah (Golden Age), & Invasi Mongol 1258 M",
    slug: "dinasti-abbasiyah-baghdad",
    date_hijri: "132 - 656 H",
    date_gregorian: "750 - 1258 M",
    location: "Baghdad, Irak",
    latitude: 33.3152,
    longitude: 44.3661,
    summary: "Puncak Zaman Keemasan Sains dan Filsafat dunia Islam di Baitul Hikmah Baghdad, yang berakhir tragis saat dihancurkan pasukan Mongol Hulagu Khan.",
    detail: "Kekhalifahan Abbasiyah didirikan oleh Abu al-Abbas as-Saffah. Baghdad dibangun sebagai 'Madinat as-Salam' pada 762 M oleh Khalifah Al-Mansur. Di bawah Harun ar-Rasyid dan putranya Al-Ma'mun, didirikan Bayt Al-Hikmah (House of Wisdom) yang mensponsori gerakan penerjemahan besar-besaran karya Yunani, Persia, dan India ke dalam bahasa Arab. Era ini melahirkan sarjana kelas dunia: Al-Khawarizmi, Al-Kindi, Al-Farabi, hingga Ibnu Sina. Dinasti ini runtuh ketika bangsa Mongol pimpinan Hulagu Khan mengepung Baghdad pada Februari 1258 M, membakar jutaan manuskrip hingga Sungai Tigris menghitam oleh tinta buku dan memerah oleh darah penduduk.",
    icon: "📚",
    quran_reference: "QS. Az-Zumar: 9; QS. Al-Mujadilah: 11 (Keutamaan Ilmu)",
    theological_perspective: "Diakui universal oleh seluruh dunia sebagai puncak kontribusi keilmuan dan sains Islam kepada peradaban manusia dunia.",
    journal_reference: {
      title: "Baghdad's Fall and Its Aftermath: Contesting the Central Asian Political Background and the Emergence of Islamic Mongol Dynasties",
      journal: "Al-Jami'ah: Journal of Islamic Studies",
      doi: "10.14421/ajis.2018.561.187-224",
      authors: "Muhammad Abdul Karim",
      index: "SINTA 1 / Scopus Indexed",
      focus: "Menganalisis invasi Hulagu Khan ke Baghdad tahun 1258, runtuhnya kekhalifahan formal Abbasiyah, dan transformasi penguasa Mongol memeluk Islam (Dinasti Ilkhanat)."
    }
  },

  // ─── ERA PASCA-ABBASIYAH & UTSMANI (1187 - 1924 M) ───
  {
    id: "perang_salib_shalahuddin",
    era_slug: "pasca_utsmani",
    era_title: "Era Perang Salib & Utsmani",
    title: "Pembebasan Yerusalem oleh Shalahuddin Al-Ayyubi (Perang Salib)",
    slug: "pembebasan-yerusalem-shalahuddin",
    date_hijri: "583 H (27 Rajab)",
    date_gregorian: "1187 M",
    location: "Hattin & Yerusalem (Baitul Maqdis)",
    latitude: 31.7767,
    longitude: 35.2345,
    summary: "Kemenangan gemilang Sultan Shalahuddin Al-Ayyubi di Pertempuran Hattin yang mengembalikan Baitul Maqdis ke pangkuan Islam dengan penuh keadilan dan kemanusiaan.",
    detail: "Setelah 88 tahun dikuasai Kerajaan Salib sejak 1099, Shalahuddin mengalahkan pasukan gabungan Salib dalam Pertempuran Tanduk Hattin. Pada 2 Oktober 1187 M (bertepatan malam 27 Rajab), Shalahuddin memasuki Yerusalem dengan damai. Berbeda dengan pembantaian brutal saat tentara Salib merebut kota tersebut, Shalahuddin menjamin keselamatan penduduk Nasrani dan Yahudi, memperbolehkan peribadatan dan melarang perusakan gereja.",
    icon: "🏰",
    quran_reference: "QS. Al-Isra': 1; QS. Al-Anbiya': 105",
    theological_perspective: "Dihormati oleh dunia Timur dan Barat sebagai ksatria sejati Islam yang menjunjung tinggi toleransi dan etika perang ksatria (chivalry).",
    journal_reference: {
      title: "Shalahuddin Al-Ayyubi: Sang Legendaris Di Balik Pembebasan Yerusalem Tahun 1187 M",
      journal: "Historis: Jurnal Kajian, Penelitian dan Pengembangan Pendidikan Sejarah",
      doi: "10.37985/hq.v5i2.344",
      authors: "M. Shofiyyur Rahman Hawary, M. Akil Fathur Rahman Syah, & Ellya Roza",
      index: "SINTA 4",
      focus: "Strategi unifikasi wilayah Mesir-Syam oleh Shalahuddin, taktik isolasi air di padang Hattin, dan penerapan diplomasi humanis dalam pembebasan Al-Quds."
    }
  },
  {
    id: "penaklukan_konstantinopel",
    era_slug: "pasca_utsmani",
    era_title: "Era Perang Salib & Utsmani",
    title: "Penaklukan Konstantinopel oleh Sultan Muhammad Al-Fatih",
    slug: "penaklukan-konstantinopel-1453",
    date_hijri: "20 Jumadil Ula 857 H",
    date_gregorian: "29 Mei 1453 M",
    location: "Konstantinopel (Istanbul, Turki)",
    latitude: 41.0082,
    longitude: 28.9784,
    summary: "Sultan Mehmed II (Al-Fatih) dari Kesultanan Utsmaniyah meruntuhkan benteng Konstantinopel, menggenapi sabda Rasulullah ﷺ dan mengakhiri imperium Bizantium.",
    detail: "Pada usia 21 tahun, Sultan Muhammad Al-Fatih memimpin pengepungan benteng legendaris Bizantium Konstantinopel selama 53 hari. Beliau membuat inovasi meriam raksasa Orban dan memindahkan puluhan kapal perang melalui darat melintasi bukit Galata dalam satu malam untuk memasuki selat Tanduk Emas (Golden Horn). Penaklukan ini membuktikan hadits Nabi: 'Konstantinopel pasti akan ditaklukkan; sebaik-baik panglima adalah panglimanya, dan sebaik-baik pasukan adalah pasukannya.'",
    icon: "🛡️",
    quran_reference: "HR. Ahmad No. 18977 (Hadits Bisyarah Penaklukan Konstantinopel)",
    theological_perspective: "Menandai berakhirnya Abad Pertengahan dunia dan dimulainya era Renaisans di Eropa, serta mengukuhkan Daulah Utsmaniyah sebagai adidaya Islam global.",
    journal_reference: {
      title: "Kekuatan Militer Masa Kepemimpinan Muhammad Alfatih Saat Penaklukan Konstantinopel",
      journal: "Jurnal Seuneubok Lada",
      doi: "10.33059/jsnbl.v12i1.11758",
      authors: "Zubeir Ahmad Nasution, Rian Hidayat, & Violeta Inayah Pama",
      index: "SINTA 4",
      focus: "Menganalisis grand-strategy militer, logistik pemindahan kapal melalui darat, serta kepemimpinan integratif spiritual dan teknologi artileri modern."
    }
  },
  {
    id: "penghapusan_khilafah",
    era_slug: "pasca_utsmani",
    era_title: "Era Perang Salib & Utsmani",
    title: "Penghapusan Kekhalifahan Utsmaniyah di Turki",
    slug: "penghapusan-khilafah-utsmani-1924",
    date_hijri: "28 Rajab 1342 H",
    date_gregorian: "3 Maret 1924 M",
    location: "Ankara & Istanbul, Turki",
    latitude: 39.9334,
    longitude: 32.8597,
    summary: "Majelis Nasional Agung Turki di bawah Mustafa Kemal Atatürk resmi membubarkan kekhalifahan Islam terakhir, mengubah peta politik dunia Islam ke sistem negara-bangsa (nation-state).",
    detail: "Menyusul kekalahan Kesultanan Utsmaniyah dalam Perang Dunia I dan Perjanjian Lausanne, Majelis Nasional Agung Turki menerbitkan UU No. 431 pada 3 Maret 1924 yang secara resmi menghapuskan jabatan Khalifah dan mengasingkan Khalifah terakhir Abdul Mejid II. Peristiwa ini mengakhiri tradisi kekhalifahan Islam yang telah berlangsung selama 1.300 tahun sejak era Abu Bakar Ash-Shiddiq dan melahirkan fragmentasi negara-negara bangsa berdaulat di Timur Tengah dan dunia Muslim.",
    icon: "🏛️",
    quran_reference: "QS. Ali 'Imran: 26 (Kekuasaan Allah)",
    theological_perspective: "Peristiwa ini memicu lahirnya berbagai gerakan pembaharuan Islam modern, Muktamar Dunia Islam di Kairo dan Makkah, serta diskusi mendalam mengenai hubungan antara agama dan negara dalam pemikiran politik Islam modern.",
    journal_reference: {
      title: "Islam dan Sistem Pemerintahan dalam Lintasan Sejarah: Menelisik Pembubaran Khilafah Utsmaniyah 1924",
      journal: "Jurnal Al-Qisthas: Kajian Hukum dan Politik Islam",
      doi: "10.37035/alqisthas.v10i2.2349",
      authors: "Fakhruddin & M. Hasan",
      index: "SINTA 3",
      focus: "Mengkaji runtuhnya monarki teokratis Utsmani, adopsi sekularisme Turki modern, dan transformasi konsep khilafah menuju tatanan negara bangsa (nation-state)."
    }
  }
];

const historicalFiguresData = [
  {
    id: "ibnu_sina",
    name: "Ibnu Sina (Avicenna)",
    arabic_name: "ابن سينا",
    title: "Bapak Kedokteran Modern",
    field: "Kedokteran, Filsafat, Astronomi",
    years_gregorian: "980 - 1037 M",
    major_work: "Al-Qanun fi At-Tibb (The Canon of Medicine)",
    summary: "Karyanya menjadi buku teks standar di universitas kedokteran Eropa selama lebih dari 600 tahun.",
    origin: "Bukhara (Uzbekistan modern)"
  },
  {
    id: "al_khawarizmi",
    name: "Al-Khawarizmi",
    arabic_name: "الخوارزمي",
    title: "Bapak Aljabar & Algoritma",
    field: "Matematika, Astronomi, Geografi",
    years_gregorian: "780 - 850 M",
    major_work: "Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala",
    summary: "Penemu sistem aljabar, konsep algoritma (dinamai dari namanya), dan pengenal angka nol (sifr) ke dunia Barat.",
    origin: "Khiva (Uzbekistan modern)"
  },
  {
    id: "ibnu_rushd",
    name: "Ibnu Rusyd (Averroes)",
    arabic_name: "ابن رشد",
    title: "Sang Komentator Agung (The Commentator)",
    field: "Filsafat, Fikih, Kedokteran",
    years_gregorian: "1126 - 1198 M",
    major_work: "Tahafut at-Tahafut, Bidayatul Mujtahid",
    summary: "Filsuf terkemuka dari Cordoba, Al-Andalus yang menjembatani rasionalitas filsafat klasik dengan wahyu Islam.",
    origin: "Cordoba, Al-Andalus (Spanyol)"
  },
  {
    id: "al_biruni",
    name: "Al-Biruni",
    arabic_name: "البيروني",
    title: "Bapak Indologi & Geodesi",
    field: "Fisika, Astronomi, Matematika, Antropologi",
    years_gregorian: "973 - 1048 M",
    major_work: "Tahqiq ma lil-Hind, Al-Qanun al-Mas'udi",
    summary: "Berhasil menghitung keliling dan jari-jari bumi dengan ketelitian 99.7% dari pengukuran satelit modern.",
    origin: "Khwarazm"
  },
  {
    id: "ibnu_al_haitsam",
    name: "Ibnu Al-Haitsam (Alhazen)",
    arabic_name: "ابن الهيثم",
    title: "Bapak Optik Modern",
    field: "Fisika, Optika, Metode Ilmiah",
    years_gregorian: "965 - 1040 M",
    major_work: "Kitab Al-Manazir (Book of Optics)",
    summary: "Penemu prinsip kamera obskura dan pelopor metode ilmiah eksperimental modern.",
    origin: "Basra (Irak)"
  }
];

module.exports = {
  quranData,
  recitersData,
  historyLinksData,
  historyTimelineData,
  historicalFiguresData
};
