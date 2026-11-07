/**
 * features-ibadah.js
 * Quran Harmony — Comprehensive Islamic Worship & Spiritual Suite
 * 
 * 1. Tasbih Digital & Dzikir Harian (Web Audio Click/Chime, Haptic, Presets, Lap/Target Counter)
 * 2. Kompas Arah Kiblat Interaktif (Great-Circle Kaaba Bearing, Distance in KM, Compass Animation)
 * 3. 40 Doa Rabbana Al-Qur'an & Doa Pilihan Harian (Filter, Search, Quran Link, Copy, Share, Favorites)
 * 4. Jurnal & Tracker Khatam 30 Juz (Progress bar, Checklist per-Juz, Target Days Planner, Direct Reader Link)
 * 5. Catatan Tadabbur & Refleksi Ayat (Ayah Personal Notes, Export, Reflection Journal)
 */

(function () {
  'use strict';

  // ============================================================
  // 1. DATASETS: 40 RABBANA DUAS & DAILY PRAYERS
  // ============================================================
  const DOA_DATA = [
    {
      id: 'rabbana-1',
      category: 'rabbana',
      title: 'Doa Diterimanya Amal Ibadah',
      titleEn: 'Prayer for Acceptance of Deeds',
      surahRef: 'Al-Baqarah : 127',
      surahNum: 2,
      verseNum: 127,
      arabic: 'رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ',
      latin: 'Rabbanā taqabbal minnā, innaka antas-samī‘ul-‘alīm.',
      transId: 'Ya Tuhan kami, terimalah (amal) dari kami. Sungguh, Engkaulah Yang Maha Mendengar, Maha Mengetahui.',
      transEn: 'Our Lord, accept [this] from us. Indeed You are the Hearing, the Knowing.',
      context: 'Doa Nabi Ibrahim AS dan Nabi Ismail AS ketika meninggikan pondasi Baitullah (Ka\'bah).'
    },
    {
      id: 'rabbana-2',
      category: 'rabbana',
      title: 'Doa Keturunan yang Berserah Diri & Taubat',
      titleEn: 'Prayer for Righteous Offspring & Repentance',
      surahRef: 'Al-Baqarah : 128',
      surahNum: 2,
      verseNum: 128,
      arabic: 'رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِن ذُرِّيَّتِنَا أُمَّةً مُّسْلِمَةً لَّكَ وَأَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَآ إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ',
      latin: 'Rabbanā waj‘alnā muslimaini laka wa min żurriyyatinā ummatam muslimatal laka wa arinā manāsikanā wa tub ‘alainā, innaka antat-tawwābur-raḥīm.',
      transId: 'Ya Tuhan kami, jadikanlah kami berdua orang yang tunduk patuh kepada-Mu, dan jadikanlah anak cucu kami umat yang tunduk patuh kepada-Mu, dan tunjukkanlah kepada kami cara-cara ibadah haji kami, dan terimalah tobat kami. Sungguh, Engkaulah Yang Maha Penerima Tobat, Maha Penyayang.',
      transEn: 'Our Lord, make us submissive to You and from our descendants a community submissive to You. And show us our rites and accept our repentance. Indeed, You are the Accepting of repentance, the Merciful.',
      context: 'Doa permohonan keistiqamahan keluarga dalam tauhid dan ketaatan kepada Allah.'
    },
    {
      id: 'rabbana-3',
      category: 'rabbana',
      title: 'Doa Sapu Jagad (Kebaikan Dunia & Akhirat)',
      titleEn: 'Comprehensive Prayer for Good in Both Worlds',
      surahRef: 'Al-Baqarah : 201',
      surahNum: 2,
      verseNum: 201,
      arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
      latin: 'Rabbanā ātinā fid-dunyā ḥasanataw wa fil-ākhirati ḥasanataw wa qinā ‘ażāban-nār.',
      transId: 'Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari azab neraka.',
      transEn: 'Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.',
      context: 'Doa yang paling sering dibaca oleh Rasulullah ﷺ, merangkum segala kebaikan hidup di dunia dan keselamatan abadi di akhirat.'
    },
    {
      id: 'rabbana-4',
      category: 'rabbana',
      title: 'Doa Ketabahan & Kemenangan Atas Musuh',
      titleEn: 'Prayer for Perseverance and Victory',
      surahRef: 'Al-Baqarah : 250',
      surahNum: 2,
      verseNum: 250,
      arabic: 'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',
      latin: 'Rabbanā afrigh ‘alainā ṣabraw wa ṡabbit aqdāmanā wanṣurnā ‘alal-qaumil-kāfirīn.',
      transId: 'Ya Tuhan kami, limpahkanlah kesabaran kepada kami, kukuhkanlah langkah kami dan tolonglah kami menghadapi orang-orang kafir.',
      transEn: 'Our Lord, pour upon us patience and plant firmly our feet and give us victory over the disbelieving people.',
      context: 'Doa tentara Thalut dan Nabi Daud AS saat menghadapi pasukan Jalut yang perkasa.'
    },
    {
      id: 'rabbana-5',
      category: 'rabbana',
      title: 'Doa Perlindungan dari Kesalahan & Beban Berat',
      titleEn: 'Prayer for Forgiveness and Relief of Burden',
      surahRef: 'Al-Baqarah : 286',
      surahNum: 2,
      verseNum: 286,
      arabic: 'رَبَّنَا لاَ تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلاَ تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا رَبَّنَا وَلاَ تُحَمِّلْنَا مَا لاَ طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَآ أَنتَ مَوْلاَنَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',
      latin: 'Rabbanā lā tu\'ākhiżnā in nasīnā au akhṭa\'nā, rabbanā wa lā taḥmil ‘alainā iṣran kamā ḥamaltahū ‘alal-lażīna min qablinā, rabbanā wa lā tuḥammilnā mā lā ṭāqata lanā bih, wa‘fu ‘annā, wagfir lanā, warḥamnā, anta maulānā fanṣurnā ‘alal-qaumil-kāfirīn.',
      transId: 'Ya Tuhan kami, janganlah Engkau hukum kami jika kami lupa atau kami melakukan kesalahan. Ya Tuhan kami, janganlah Engkau bebani kami dengan beban yang berat sebagaimana Engkau bebankan kepada orang-orang sebelum kami. Ya Tuhan kami, janganlah Engkau pikulkan kepada kami apa yang tidak sanggup kami memikulnya. Maafkanlah kami, ampunilah kami, dan rahmatilah kami. Engkaulah Pelindung kami, maka tolonglah kami menghadapi kaum yang kafir.',
      transEn: 'Our Lord, do not impose blame upon us if we have forgotten or erred. Our Lord, and lay not upon us a burden like that which You laid upon those before us. Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people.',
      context: 'Penutup surah Al-Baqarah yang penuh keutamaan. Barangsiapa membacanya di malam hari, niscaya ayat ini mencukupinya.'
    },
    {
      id: 'rabbana-6',
      category: 'rabbana',
      title: 'Doa Keteguhan Iman & Hati yang Lurus',
      titleEn: 'Prayer for Steadfastness in Faith',
      surahRef: 'Ali \'Imran : 8',
      surahNum: 3,
      verseNum: 8,
      arabic: 'رَبَّنَا لاَ تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً إِنَّكَ أَنتَ الْوَهَّابُ',
      latin: 'Rabbanā lā tuzigh qulūbanā ba‘da iż hadaitanā wa hab lanā mil ladunka raḥmah, innaka antal-wahhāb.',
      transId: 'Ya Tuhan kami, janganlah Engkau condongkan hati kami kepada kesesatan setelah Engkau beri petunjuk kepada kami, dan karuniakanlah kepada kami rahmat dari sisi-Mu; sesungguhnya Engkau Maha Pemberi.',
      transEn: 'Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower.',
      context: 'Doa orang-orang berilmu mendalam (ar-rasikhuna fil \'ilmi) memohon penjagaan hati agar tidak tergelincir setelah mengenal kebenaran.'
    },
    {
      id: 'rabbana-7',
      category: 'rabbana',
      title: 'Doa Pengakuan Dosa & Keselamatan dari Neraka',
      titleEn: 'Prayer for Forgiveness and Salvation',
      surahRef: 'Ali \'Imran : 16',
      surahNum: 3,
      verseNum: 16,
      arabic: 'رَبَّنَا إِنَّنَا آمَنَّا فَاغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ النَّارِ',
      latin: 'Rabbanā innanā āmannā fagfir lanā żunūbanā wa qinā ‘ażāban-nār.',
      transId: 'Ya Tuhan kami, kami benar-benar beriman, maka ampunilah dosa-dosa kami dan lindungilah kami dari azab neraka.',
      transEn: 'Our Lord, indeed we have believed, so forgive us our sins and protect us from the punishment of the Fire.',
      context: 'Doa hamba-hamba Allah yang bertakwa, sabar, jujur, taat, dan memohon ampunan di waktu sahur.'
    },
    {
      id: 'rabbana-8',
      category: 'rabbana',
      title: 'Doa Tafakkur Penciptaan Alam Semesta',
      titleEn: 'Contemplation of Creation and Seeking Protection',
      surahRef: 'Ali \'Imran : 191',
      surahNum: 3,
      verseNum: 191,
      arabic: 'رَبَّنَا مَا خَلَقْتَ هَذا بَاطِلاً سُبْحَانَكَ فَقِنَا عَذَابَ النَّارِ',
      latin: 'Rabbanā mā khalaqta hāżā bāṭilā, sub-ḥānaka fa qinā ‘ażāban-nār.',
      transId: 'Ya Tuhan kami, tidaklah Engkau menciptakan semua ini sia-sia; Maha Suci Engkau, lindungilah kami dari azab neraka.',
      transEn: 'Our Lord, You did not create this aimlessly; exalted are You [above such a thing]; then protect us from the punishment of the Fire.',
      context: 'Doa ulul albab (orang yang berakal) yang senantiasa berdzikir saat berdiri, duduk, berbaring, dan memikirkan keagungan alam raya.'
    },
    {
      id: 'rabbana-9',
      category: 'rabbana',
      title: 'Doa Penyesalan & Tobat Nabi Adam AS',
      titleEn: 'Prophet Adam’s Supplication for Mercy',
      surahRef: 'Al-A\'raf : 23',
      surahNum: 7,
      verseNum: 23,
      arabic: 'رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
      latin: 'Rabbanā ẓalamnā anfusanā wa il lam tagfir lanā wa tar-ḥamnā lanakūnanna minal-khāsirīn.',
      transId: 'Ya Tuhan kami, kami telah menzalimi diri kami sendiri. Jika Engkau tidak mengampuni kami dan memberi rahmat kepada kami, niscaya kami termasuk orang-orang yang rugi.',
      transEn: 'Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.',
      context: 'Doa yang diajarkan Allah kepada Nabi Adam AS dan Hawa saat memohon ampunan atas kekhilafan mereka.'
    },
    {
      id: 'rabbana-10',
      category: 'rabbana',
      title: 'Doa Rahmat & Petunjuk Jalan Lurus (Ashabul Kahfi)',
      titleEn: 'Prayer of the Companions of the Cave for Guidance',
      surahRef: 'Al-Kahf : 10',
      surahNum: 18,
      verseNum: 10,
      arabic: 'رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا',
      latin: 'Rabbanā ātinā mil ladunka raḥmataw wa hayyi\' lanā min amrinā rasyadā.',
      transId: 'Ya Tuhan kami, berikanlah rahmat kepada kami dari sisi-Mu dan sempurnakanlah petunjuk yang lurus bagi kami dalam urusan kami.',
      transEn: 'Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance.',
      context: 'Doa pemuda-pemuda beriman (Ashabul Kahfi) saat berlindung di dalam gua dari penguasa yang zalim demi menjaga akidah.'
    },
    {
      id: 'rabbana-11',
      category: 'rabbana',
      title: 'Doa Memohon Pasangan & Keturunan Penyejuk Hati',
      titleEn: 'Prayer for Comfort in Family and Leadership in Piety',
      surahRef: 'Al-Furqan : 74',
      surahNum: 25,
      verseNum: 74,
      arabic: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',
      latin: 'Rabbanā hab lanā min azwājinā wa żurriyyātinā qurrata a‘yuniw waj‘alnā lil-muttaqīna imāmā.',
      transId: 'Ya Tuhan kami, anugerahkanlah kepada kami pasangan kami dan keturunan kami sebagai penyenang hati (kami), dan jadikanlah kami pemimpin bagi orang-orang yang bertakwa.',
      transEn: 'Our Lord, grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous.',
      context: 'Karakteristik Ibadurrahman (hamba-hamba Allah Yang Maha Pengasih) dalam membina keluarga sakinah dan keturunan shaleh.'
    },
    {
      id: 'rabbana-12',
      category: 'rabbana',
      title: 'Doa Kelapangan Dada & Kelancaran Lisan',
      titleEn: 'Prayer of Prophet Moses for Ease in Mission',
      surahRef: 'Thaha : 25-28',
      surahNum: 20,
      verseNum: 25,
      arabic: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي',
      latin: 'Rabbisyraḥ lī ṣadrī, wa yassir lī amrī, waḥlul ‘uqdatam mil lisānī, yafqahū qaulī.',
      transId: 'Ya Tuhanku, lapangkanlah dadaku, dan mudahkanlah untukku urusanku, dan lepaskanlah kekakuan dari lidahku, agar mereka mengerti perkataanku.',
      transEn: 'My Lord, expand for me my breast [with assurance] and ease for me my task and untie the knot from my tongue that they may understand my speech.',
      context: 'Doa Nabi Musa AS ketika diutus untuk mendakwahi Fir\'aun agar diberi ketenangan, kemudahan, dan kelancaran berbicara.'
    },
    {
      id: 'rabbana-13',
      category: 'rabbana',
      title: 'Doa Kelepasan dari Kesulitan (Doa Nabi Yunus AS)',
      titleEn: 'Prophet Jonah’s Supplication in Adversity',
      surahRef: 'Al-Anbiya\' : 87',
      surahNum: 21,
      verseNum: 87,
      arabic: 'لَّا إِلَهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ',
      latin: 'Lā ilāha illā anta sub-ḥānaka innī kuntu minaẓ-ẓālimīn.',
      transId: 'Tidak ada tuhan selain Engkau, Maha Suci Engkau. Sungguh, aku termasuk orang-orang yang zalim.',
      transEn: 'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.',
      context: 'Doa Dzun-Nun (Nabi Yunus AS) di dalam kegelapan perut ikan paus. Rasulullah bersabda bahwa tidak ada seorang muslim yang berdoa dengannya melainkan Allah kabulkan.'
    },
    {
      id: 'rabbana-14',
      category: 'rabbana',
      title: 'Doa Kasih Sayang untuk Kedua Orang Tua',
      titleEn: 'Prayer of Mercy for Parents',
      surahRef: 'Al-Isra\' : 24',
      surahNum: 17,
      verseNum: 24,
      arabic: 'رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
      latin: 'Rabbir-ḥam-humā kamā rabbayānī ṣagīrā.',
      transId: 'Wahai Tuhanku! Sayangilah keduanya sebagaimana mereka berdua telah mendidik aku pada waktu kecil.',
      transEn: 'My Lord, have mercy upon them as they brought me up [when I was] small.',
      context: 'Perintah bakti kepada orang tua (birrul walidain) dengan merendahkan diri dan senantiasa mendoakan curahan rahmat Allah bagi mereka.'
    },
    {
      id: 'rabbana-15',
      category: 'rabbana',
      title: 'Doa Memohon Tambahan Ilmu yang Bermanfaat',
      titleEn: 'Prayer for Increase in Beneficial Knowledge',
      surahRef: 'Thaha : 114',
      surahNum: 20,
      verseNum: 114,
      arabic: 'رَّبِّ زِدْنِي عِلْمًا',
      latin: 'Rabbi zidnī ‘ilmā.',
      transId: 'Ya Tuhanku, tambahkanlah ilmu kepadaku.',
      transEn: 'My Lord, increase me in knowledge.',
      context: 'Satu-satunya hal yang Allah perintahkan kepada Nabi Muhammad ﷺ untuk memohon tambahan adalah ilmu pengetahuan.'
    },
    // Daily Prophetic Prayers
    {
      id: 'harian-1',
      category: 'harian',
      title: 'Sayyidul Istighfar (Penghulu Istighfar)',
      titleEn: 'Chief of Prayers for Forgiveness',
      surahRef: 'Hadits Shahih Bukhari',
      surahNum: null,
      verseNum: null,
      arabic: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
      latin: 'Allāhumma anta rabbī lā ilāha illā anta, khalaqtanī wa anā ‘abduka, wa anā ‘alā ‘ahdika wa wa‘dika mastaṭa‘tu, a‘ūżu bika min syarri mā ṣana‘tu, abū\'u laka bini‘matika ‘alayya, wa abū\'u biżanbī fagfir lī fa\'innahū lā yagfiruż-żunūba illā anta.',
      transId: 'Ya Allah, Engkau adalah Tuhanku, tidak ada tuhan yang berhak disembah selain Engkau. Engkaulah yang menciptakan aku dan aku adalah hamba-Mu. Aku akan setia pada perjanjianku dengan-Mu semampuku. Aku berlindung kepada-Mu dari keburukan yang telah kuperbuat. Aku mengakui nikmat-Mu kepadaku dan aku mengakui dosaku, maka ampunilah aku. Sungguh tidak ada yang dapat mengampuni dosa selain Engkau.',
      transEn: 'O Allah, You are my Lord; none has the right to be worshipped but You. You created me and I am Your servant, and I abide by Your covenant and promise as best I can. I seek refuge in You from the evil of what I have committed. I acknowledge Your favor upon me and I acknowledge my sin: so forgive me, for none can forgive sins except You.',
      context: 'Barangsiapa membacanya di petang hari lalu meninggal di malamnya, ia masuk surga; demikian pula bila dibaca di pagi hari.'
    },
    {
      id: 'harian-2',
      category: 'harian',
      title: 'Doa Perlindungan dari Kesedihan & Lilitan Hutang',
      titleEn: 'Prayer Against Anxiety, Sorrow & Debt',
      surahRef: 'Hadits Shahih Abu Dawud',
      surahNum: null,
      verseNum: null,
      arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ',
      latin: 'Allāhumma innī a‘ūżu bika minal-hammi wal-ḥazani, wa a‘ūżu bika minal-‘ajzi wal-kasali, wa a‘ūżu bika minal-jubni wal-bukhli, wa a‘ūżu bika min galabatid-daini wa qahrir-rijāl.',
      transId: 'Ya Allah, sesungguhnya aku berlindung kepada-Mu dari rasa gundah dan sedih, aku berlindung kepada-Mu dari kelemahan dan kemalasan, aku berlindung kepada-Mu dari sifat pengecut dan kikir, serta aku berlindung kepada-Mu dari lilitan hutang dan penindasan orang.',
      transEn: 'O Allah, I seek refuge in You from anxiety and sorrow, from weakness and laziness, from cowardice and miserliness, and from being overpowered by debt and subdued by men.',
      context: 'Diajarkan Rasulullah ﷺ kepada Abu Umamah RA saat duduk termenung di masjid menanggung beban hutang dan kesedihan.'
    },
    {
      id: 'harian-3',
      category: 'harian',
      title: 'Doa Keluar Rumah (Perlindungan Penuh)',
      titleEn: 'Prayer for Leaving the Home',
      surahRef: 'Hadits Shahih Tirmidzi',
      surahNum: null,
      verseNum: null,
      arabic: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
      latin: 'Bismillāhi tawakkaltu ‘alallāh, lā ḥaula wa lā quwwata illā billāh.',
      transId: 'Dengan nama Allah, aku bertawakal kepada Allah. Tiada daya dan kekuatan melainkan dengan pertolongan Allah.',
      transEn: 'In the name of Allah, I place my trust in Allah; there is no might and no power except with Allah.',
      context: 'Siapa yang membacanya saat keluar rumah dikatakan kepadanya: "Engkau telah diberi petunjuk, dicukupi dan dilindungi, serta setan menjauh darimu".'
    },
    {
      id: 'harian-4',
      category: 'harian',
      title: 'Doa Masuk Masjid',
      titleEn: 'Prayer Upon Entering the Mosque',
      surahRef: 'Hadits Shahih Muslim',
      surahNum: null,
      verseNum: null,
      arabic: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
      latin: 'Allāhummaftaḥ lī abwāba raḥmatik.',
      transId: 'Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu.',
      transEn: 'O Allah, open for me the gates of Your mercy.',
      context: 'Dibaca dengan mendahulukan kaki kanan saat memasuki rumah Allah (masjid).'
    },
    {
      id: 'harian-5',
      category: 'harian',
      title: 'Doa Keluar Masjid',
      titleEn: 'Prayer Upon Leaving the Mosque',
      surahRef: 'Hadits Shahih Muslim',
      surahNum: null,
      verseNum: null,
      arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ',
      latin: 'Allāhumma innī as\'aluka min faḍlik.',
      transId: 'Ya Allah, sesungguhnya aku memohon sebagian dari karunia-Mu.',
      transEn: 'O Allah, I ask You of Your bounty.',
      context: 'Dibaca dengan mendahulukan kaki kiri saat keluar dari masjid untuk mencari karunia rezeki di muka bumi.'
    }
  ];

  // ============================================================
  // 2. DATASET: 30 JUZ QURANIC METADATA
  // ============================================================
  const JUZ_METADATA = [
    { num: 1, name: "Alif Lām Mīm", arName: "آلم", startSurah: 1, startVerse: 1, endSurah: 2, endVerse: 141, surahName: "Al-Fatihah 1 s/d Al-Baqarah 141" },
    { num: 2, name: "Sayaqūl", arName: "سَيَقُولُ", startSurah: 2, startVerse: 142, endSurah: 2, endVerse: 252, surahName: "Al-Baqarah 142 s/d 252" },
    { num: 3, name: "Tilkar Rusul", arName: "تِلْكَ الرُّسُلُ", startSurah: 2, startVerse: 253, endSurah: 3, endVerse: 92, surahName: "Al-Baqarah 253 s/d Ali 'Imran 92" },
    { num: 4, name: "Lan Tanalū", arName: "لَنْ تَنَالُوا", startSurah: 3, startVerse: 93, endSurah: 4, endVerse: 23, surahName: "Ali 'Imran 93 s/d An-Nisa 23" },
    { num: 5, name: "Wal Muhsanāt", arName: "وَالْمُحْصَنَاتُ", startSurah: 4, startVerse: 24, endSurah: 4, endVerse: 147, surahName: "An-Nisa 24 s/d 147" },
    { num: 6, name: "Lā Yuhibbullāh", arName: "لَا يُحِبُّ اللَّهُ", startSurah: 4, startVerse: 148, endSurah: 5, endVerse: 81, surahName: "An-Nisa 148 s/d Al-Ma'idah 81" },
    { num: 7, name: "Wa Izā Sami‘ū", arName: "وَإِذَا سَمِعُوا", startSurah: 5, startVerse: 82, endSurah: 6, endVerse: 110, surahName: "Al-Ma'idah 82 s/d Al-An'am 110" },
    { num: 8, name: "Wa Lau Annanā", arName: "وَلَوْ أَنَّنَا", startSurah: 6, startVerse: 111, endSurah: 7, endVerse: 87, surahName: "Al-An'am 111 s/d Al-A'raf 87" },
    { num: 9, name: "Qālal Mala’u", arName: "قَالَ الْمَلَأُ", startSurah: 7, startVerse: 88, endSurah: 8, endVerse: 40, surahName: "Al-A'raf 88 s/d Al-Anfal 40" },
    { num: 10, name: "Wa‘lamū", arName: "وَاعْلَمُوا", startSurah: 8, startVerse: 41, endSurah: 9, endVerse: 92, surahName: "Al-Anfal 41 s/d At-Taubah 92" },
    { num: 11, name: "Ya‘tazirūn", arName: "يَعْتَذِرُونَ", startSurah: 9, startVerse: 93, endSurah: 11, endVerse: 5, surahName: "At-Taubah 93 s/d Hud 5" },
    { num: 12, name: "Wa Mā Min Dābbah", arName: "وَمَا مِنْ دَابَّةٍ", startSurah: 11, startVerse: 6, endSurah: 12, endVerse: 52, surahName: "Hud 6 s/d Yusuf 52" },
    { num: 13, name: "Wa Mā Ubarri’u", arName: "وَمَا أُبَرِّئُ", startSurah: 12, startVerse: 53, endSurah: 14, endVerse: 52, surahName: "Yusuf 53 s/d Ibrahim 52" },
    { num: 14, name: "Rubamā", arName: "رُبَمَا", startSurah: 15, startVerse: 1, endSurah: 16, endVerse: 128, surahName: "Al-Hijr 1 s/d An-Nahl 128" },
    { num: 15, name: "Subhānallazī", arName: "سُبْحَانَ الَّذِي", startSurah: 17, startVerse: 1, endSurah: 18, endVerse: 74, surahName: "Al-Isra 1 s/d Al-Kahf 74" },
    { num: 16, name: "Qāla Alam", arName: "قَالَ أَلَمْ", startSurah: 18, startVerse: 75, endSurah: 20, endVerse: 135, surahName: "Al-Kahf 75 s/d Thaha 135" },
    { num: 17, name: "Iqtaraba", arName: "اقْتَرَبَ", startSurah: 21, startVerse: 1, endSurah: 22, endVerse: 78, surahName: "Al-Anbiya 1 s/d Al-Hajj 78" },
    { num: 18, name: "Qad Aflaha", arName: "قَدْ أَفْلَحَ", startSurah: 23, startVerse: 1, endSurah: 25, endVerse: 20, surahName: "Al-Mu'minun 1 s/d Al-Furqan 20" },
    { num: 19, name: "Wa Qālal Lazīna", arName: "وَقَالَ الَّذِينَ", startSurah: 25, startVerse: 21, endSurah: 27, endVerse: 55, surahName: "Al-Furqan 21 s/d An-Naml 55" },
    { num: 20, name: "Amman Khalaq", arName: "أَمَّنْ خَلَقَ", startSurah: 27, startVerse: 56, endSurah: 29, endVerse: 45, surahName: "An-Naml 56 s/d Al-'Ankabut 45" },
    { num: 21, name: "Utlu Mā Ūhiya", arName: "اتْلُ مَا أُوحِيَ", startSurah: 29, startVerse: 46, endSurah: 33, endVerse: 30, surahName: "Al-'Ankabut 46 s/d Al-Ahzab 30" },
    { num: 22, name: "Wa Man Yaqnut", arName: "وَمَنْ يَقْنُتْ", startSurah: 33, startVerse: 31, endSurah: 36, endVerse: 27, surahName: "Al-Ahzab 31 s/d Ya-Sin 27" },
    { num: 23, name: "Wa Mā Liya", arName: "وَمَا لِيَ", startSurah: 36, startVerse: 28, endSurah: 39, endVerse: 31, surahName: "Ya-Sin 28 s/d Az-Zumar 31" },
    { num: 24, name: "Fa Man Azlamu", arName: "فَمَنْ أَظْلَمُ", startSurah: 39, startVerse: 32, endSurah: 41, endVerse: 46, surahName: "Az-Zumar 32 s/d Fussilat 46" },
    { num: 25, name: "Ilayhi Yuraddu", arName: "إِلَيْهِ يُرَدُّ", startSurah: 41, startVerse: 47, endSurah: 45, endVerse: 37, surahName: "Fussilat 47 s/d Al-Jatsiyah 37" },
    { num: 26, name: "Hā Mīm", arName: "حم", startSurah: 46, startVerse: 1, endSurah: 51, endVerse: 30, surahName: "Al-Ahqaf 1 s/d Az-Zariyat 30" },
    { num: 27, name: "Qāla Fa Mā Khatbukum", arName: "قَالَ فَمَا خَطْبُكُمْ", startSurah: 51, startVerse: 31, endSurah: 57, endVerse: 29, surahName: "Az-Zariyat 31 s/d Al-Hadid 29" },
    { num: 28, name: "Qad Sami‘allāh", arName: "قَدْ سَمِعَ اللَّهُ", startSurah: 58, startVerse: 1, endSurah: 66, endVerse: 12, surahName: "Al-Mujadilah 1 s/d At-Tahrim 12" },
    { num: 29, name: "Tabārakallazī", arName: "تَبَارَكَ الَّذِي", startSurah: 67, startVerse: 1, endSurah: 77, endVerse: 50, surahName: "Al-Mulk 1 s/d Al-Mursalat 50" },
    { num: 30, name: "‘Amma Yatasa’alūn", arName: "عَمَّ يَتَسَاءَلُونَ", startSurah: 78, startVerse: 1, endSurah: 114, endVerse: 6, surahName: "An-Naba' 1 s/d An-Nas 6 (Juz 'Amma)" }
  ];


  // ============================================================
  // MULTI-LANGUAGE (I18N) ENGINE FOR IBADAH SUITE
  // ============================================================
  function getCurLang() {
    return (window.state && window.state.language) || localStorage.getItem('qh_lang') || 'id';
  }

  const IBADAH_I18N = {
    fr: {
      ibadahKicker: "CENTRE D'ADORATION & SPIRITUALITÉ",
      ibadahTitle: "Centre d'Adoration, Dhikr & Invocations",
      ibadahDesc: "Enrichissez votre pratique quotidienne avec le chapelet numérique (Tasbih) tactile, la boussole Qibla haute précision vers la Kaaba, les 40 Invocations Rabbana du Coran, le suivi de récitation des 30 Juz et vos notes de méditation (Tadabbur).",
      tabTasbih: "Tasbih Numérique",
      tabDoa: "Invocations du Coran & Quotidiennes",
      tabKiblat: "Direction de la Qibla",
      tabKhatam: "Suivi des 30 Juz",
      tabTadabbur: "Notes de Méditation",
      tasbihPressHint: "Appuyez pour compter",
      tasbihLapsLabel: "Tours terminés",
      tasbihDailyLabel: "Total aujourd'hui",
      tasbihResetBtn: "🔄 Réinitialiser le compteur",
      tasbihSoundOn: "🔊 Son du clic : Actif",
      tasbihSoundOff: "🔇 Son du clic : Muet",
      tasbihLapToast: "🎉 Objectif atteint ! Tour n°",
      tasbihResetToast: "🔄 Compteur de tasbih réinitialisé",
      qiblaTitle: "🧭 Boussole Qibla Haute Précision Kaaba",
      qiblaDesc: "Calcule l'angle géodésique le plus court (orthodromie) en direction de la noble Kaaba à La Mecque (21.4225° N, 39.8262° E).",
      qiblaLblAngle: "Angle en Degrés",
      qiblaLblCardinal: "Direction",
      qiblaLblDist: "Distance à la Kaaba",
      qiblaRefLabel: "📍 Emplacement de référence :",
      qiblaGpsBtn: "📡 Mettre à jour ma position GPS",
      doaSearchPlaceholder: "Rechercher par titre, sens, texte arabe ou verset (ex. pardon, parents, 2:201)...",
      doaFilterAll: "Toutes les invocations",
      doaFilterRabbana: "📖 40 Invocations Rabbana (Coran)",
      doaFilterHarian: "🤲 Invocations Quotidiennes",
      doaFilterFav: "⭐ Mes Favoris",
      doaBtnCopy: "📋 Copier",
      doaBtnShare: "📤 Partager",
      doaBtnOpen: "📖 Ouvrir dans le Coran",
      doaCopiedToast: "📋 Texte de l'invocation copié !",
      doaFavAdded: "⭐ Ajouté aux invocations favorites",
      doaFavRemoved: "Retiré des favoris",
      doaEmptyTitle: "Aucune invocation trouvée",
      doaEmptyDesc: "Essayez un autre mot-clé ou filtre.",
      khatamTitle: "🎯 Objectif & Progression des 30 Juz",
      khatamDesc: "Cochez chaque juz lu pour suivre votre cheminement vers la récitation complète du Noble Coran.",
      khatamBtnRead: "📖 Lire",
      khatamBtnDone: "Terminé",
      khatamBtnMark: "Cocher",
      khatamToastDone: "✅ Juz marqué comme lu !",
      khatamToastUndone: "Marquage du Juz retiré",
      tadabburTitle: "📝 Journal de Réflexion & Méditation sur les Versets",
      tadabburDesc: "Recueil de sagesses et réflexions personnelles consignées lors de votre lecture du Coran.",
      tadabburEmptyTitle: "Aucune note de réflexion pour le moment",
      tadabburEmptyDesc: "Cliquez sur l'icône 📝 à côté de n'importe quel verset dans le lecteur pour ajouter votre réflexion.",
      tadabburBtnOpen: "📖 Ouvrir le verset",
      tadabburBtnEdit: "✏️ Modifier",
      tadabburModalBadge: "📝 Méditation & Réflexion sur le Verset",
      tadabburModalIntro: "Consignez vos réflexions personnelles, sagesses et rappels tirés de ce verset. Vos notes sont enregistrées en toute confidentialité sur votre appareil.",
      tadabburModalPlaceholder: "Écrivez votre réflexion ici...",
      tadabburModalDelete: "🗑️ Supprimer la note",
      tadabburModalCancel: "Annuler",
      tadabburModalSave: "💾 Enregistrer la réflexion",
      tadabburToastSaved: "💾 Note de réflexion enregistrée !",
      tadabburToastDeleted: "🗑️ Note de réflexion supprimée",
      cardinals: ['Nord (N)', 'Nord-Est (NE)', 'Est (E)', 'Sud-Est (SE)', 'Sud (S)', 'Sud-Ouest (SO)', 'Ouest (O)', 'Nord-Ouest (NO)']
    },
    en: {
      ibadahKicker: "WORSHIP & SPIRITUAL SUITE",
      ibadahTitle: "Worship Center, Dhikr & Duas Collection",
      ibadahDesc: "Enhance your daily worship with the tactile Digital Tasbih, precision Kaaba Qibla Compass, 40 Rabbana Quran Duas, 30-Juz Tilawah Tracker, and personal Ayah Tadabbur reflections.",
      tabTasbih: "Digital Tasbih",
      tabDoa: "Quranic & Daily Duas",
      tabKiblat: "Qibla Direction",
      tabKhatam: "30-Juz Khatam Tracker",
      tabTadabbur: "Tadabbur Notes",
      tasbihPressHint: "Tap to Count",
      tasbihLapsLabel: "Laps Completed",
      tasbihDailyLabel: "Today's Total",
      tasbihResetBtn: "🔄 Reset Count",
      tasbihSoundOn: "🔊 Click Sound: ON",
      tasbihSoundOff: "🔇 Click Sound: OFF",
      tasbihLapToast: "🎉 Target completed! Lap ",
      tasbihResetToast: "🔄 Tasbih counter reset",
      qiblaTitle: "🧭 High-Precision Kaaba Qibla Compass",
      qiblaDesc: "Calculates the shortest great-circle bearing towards the holy Kaaba in Makkah al-Mukarramah (21.4225° N, 39.8262° E).",
      qiblaLblAngle: "Degree Angle",
      qiblaLblCardinal: "Heading Direction",
      qiblaLblDist: "Distance to Kaaba",
      qiblaRefLabel: "📍 Reference Location:",
      qiblaGpsBtn: "📡 Update My GPS Position",
      doaSearchPlaceholder: "Search prayers by title, meaning, Arabic text, or verse (e.g. forgiveness, parents, 2:201)...",
      doaFilterAll: "All Prayers",
      doaFilterRabbana: "📖 40 Rabbana Duas (Quran)",
      doaFilterHarian: "🤲 Daily Prayers",
      doaFilterFav: "⭐ My Favorites",
      doaBtnCopy: "📋 Copy",
      doaBtnShare: "📤 Share",
      doaBtnOpen: "📖 Open in Quran",
      doaCopiedToast: "📋 Prayer text copied to clipboard!",
      doaFavAdded: "⭐ Added to Favorite Prayers",
      doaFavRemoved: "Removed from Favorites",
      doaEmptyTitle: "No prayers found",
      doaEmptyDesc: "Try another search keyword or filter.",
      khatamTitle: "🎯 30-Juz Tilawah Progress & Goal",
      khatamDesc: "Mark each completed juz to track your full Quran completion journey.",
      khatamBtnRead: "📖 Read",
      khatamBtnDone: "Done",
      khatamBtnMark: "Mark",
      khatamToastDone: "✅ Juz marked as completed!",
      khatamToastUndone: "Juz unchecked",
      tadabburTitle: "📝 Ayah Reflection & Tadabbur Journal",
      tadabburDesc: "Collection of spiritual insights and life reflections recorded while reading the Quran.",
      tadabburEmptyTitle: "No reflection notes yet",
      tadabburEmptyDesc: "Click the 📝 icon beside any verse in the reader to write your reflection.",
      tadabburBtnOpen: "📖 Open Verse",
      tadabburBtnEdit: "✏️ Edit",
      tadabburModalBadge: "📝 Ayah Reflection / Tadabbur",
      tadabburModalIntro: "Write your personal reflections, insights, or life lessons from this verse. Your reflections are stored privately on your device.",
      tadabburModalPlaceholder: "Write your contemplation here...",
      tadabburModalDelete: "🗑️ Delete Note",
      tadabburModalCancel: "Cancel",
      tadabburModalSave: "💾 Save Note",
      tadabburToastSaved: "💾 Reflection note saved!",
      tadabburToastDeleted: "🗑️ Reflection note deleted",
      cardinals: ['North (N)', 'Northeast (NE)', 'East (E)', 'Southeast (SE)', 'South (S)', 'Southwest (SW)', 'West (W)', 'Northwest (NW)']
    },
    id: {
      ibadahKicker: "PUSAT IBADAH & SPIRITUALITAS",
      ibadahTitle: "Pusat Ibadah, Dzikir & Koleksi Doa",
      ibadahDesc: "Lengkapi ibadah harian Anda dengan Tasbih Digital haptic, Kompas Arah Kiblat presisi Ka'bah, 40 Doa Rabbana Al-Qur'an, Jurnal Khatam 30 Juz, dan Catatan Tadabbur Ayat.",
      tabTasbih: "Tasbih Digital",
      tabDoa: "Doa Al-Qur'an & Harian",
      tabKiblat: "Arah Kiblat",
      tabKhatam: "Jurnal Khatam 30 Juz",
      tabTadabbur: "Catatan Tadabbur",
      tasbihPressHint: "Ketuk untuk Dzikir",
      tasbihLapsLabel: "Putaran Selesai",
      tasbihDailyLabel: "Total Hari Ini",
      tasbihResetBtn: "🔄 Reset Hitungan",
      tasbihSoundOn: "🔊 Suara Klik: Aktif",
      tasbihSoundOff: "🔇 Suara Klik: Hening",
      tasbihLapToast: "🎉 Target tercapai! Putaran ke-",
      tasbihResetToast: "🔄 Counter tasbih di-reset",
      qiblaTitle: "🧭 Kompas Arah Kiblat Presisi Ka'bah",
      qiblaDesc: "Menghitung sudut rotasi terpendek (lingkaran besar) menuju Ka'bah di Makkah Al-Mukarramah (21.4225° N, 39.8262° E).",
      qiblaLblAngle: "Sudut Derajat",
      qiblaLblCardinal: "Arah Mata Angin",
      qiblaLblDist: "Jarak ke Ka'bah",
      qiblaRefLabel: "📍 Lokasi Rujukan:",
      qiblaGpsBtn: "📡 Perbarui Posisi GPS Saya",
      doaSearchPlaceholder: "Cari doa berdasarkan judul, makna, lafadz Arab, atau nomor ayat (contoh: sapu jagad, orang tua, 2:201)...",
      doaFilterAll: "Semua Doa",
      doaFilterRabbana: "📖 40 Doa Rabbana (Al-Qur'an)",
      doaFilterHarian: "🤲 Doa Pilihan Harian",
      doaFilterFav: "⭐ Favorit Saya",
      doaBtnCopy: "📋 Salin",
      doaBtnShare: "📤 Bagikan",
      doaBtnOpen: "📖 Buka di Al-Qur'an",
      doaCopiedToast: "📋 Teks doa berhasil disalin!",
      doaFavAdded: "⭐ Ditambahkan ke Doa Favorit",
      doaFavRemoved: "Dihapus dari Favorit",
      doaEmptyTitle: "Tidak ada doa yang cocok",
      doaEmptyDesc: "Coba kata kunci pencarian atau kategori lain.",
      khatamTitle: "🎯 Target & Kemajuan Tilawah 30 Juz",
      khatamDesc: "Tandai setiap juz yang telah selesai dibaca untuk memantau perjalanan khatam Al-Qur'an Anda.",
      khatamBtnRead: "📖 Baca",
      khatamBtnDone: "Selesai",
      khatamBtnMark: "Tandai",
      khatamToastDone: "✅ Juz ditandai selesai!",
      khatamToastUndone: "Tanda Juz dihapus",
      tadabburTitle: "📝 Jurnal Refleksi & Catatan Tadabbur Ayat",
      tadabburDesc: "Kumpulan mutiara hikmah dan renungan pribadi yang Anda catat saat membaca ayat-ayat Al-Qur'an.",
      tadabburEmptyTitle: "Belum ada catatan tadabbur",
      tadabburEmptyDesc: "Klik tombol 📝 di samping ayat mana saja di pembaca Al-Qur'an untuk menambahkan renungan Anda.",
      tadabburBtnOpen: "📖 Buka Ayat",
      tadabburBtnEdit: "✏️ Ubah",
      tadabburModalBadge: "📝 Catatan Tadabbur Ayat",
      tadabburModalIntro: "Tuliskan renungan pribadi, hikmah, atau pengingat hidup dari ayat ini. Catatan tersimpan aman di perangkat Anda.",
      tadabburModalPlaceholder: "Tuliskan refleksi tadabbur Anda di sini...",
      tadabburModalDelete: "🗑️ Hapus Catatan",
      tadabburModalCancel: "Batal",
      tadabburModalSave: "💾 Simpan Refleksi",
      tadabburToastSaved: "💾 Catatan tadabbur berhasil disimpan!",
      tadabburToastDeleted: "🗑️ Catatan tadabbur dihapus",
      cardinals: ['Utara (N)', 'Timur Laut (NE)', 'Timur (E)', 'Tenggara (SE)', 'Selatan (S)', 'Barat Daya (SW)', 'Barat (W)', 'Barat Laut (NW)']
    },
    ar: {
      ibadahKicker: "مركز العبادات والإيمانيات",
      ibadahTitle: "مركز العبادات والأذكار وموسوعة الأدعية",
      ibadahDesc: "عطّر يومك بالذكر مع المسبحة الرقمية التفاعلية، وبوصلة القبلة الدقيقة نحو الكعبة المشرفة، و40 دعاء ربنا من القرآن، ومتابعة ختمة الـ 30 جزءاً، وخواطر التدبر القرآني.",
      tabTasbih: "المسبحة الرقمية",
      tabDoa: "أدعية القرآن والأذكار",
      tabKiblat: "اتجاه القبلة",
      tabKhatam: "متابعة الختمة (30 جزء)",
      tabTadabbur: "خواطر التدبر",
      tasbihPressHint: "انقر للتسبيح",
      tasbihLapsLabel: "الدورات المكتملة",
      tasbihDailyLabel: "مجموع اليوم",
      tasbihResetBtn: "🔄 إعادة ضبط",
      tasbihSoundOn: "🔊 صوت النقر: مفعّل",
      tasbihSoundOff: "🔇 صوت النقر: صامت",
      tasbihLapToast: "🎉 اكتمل الهدف! الدورة رقم ",
      tasbihResetToast: "🔄 تم تصفير العداد",
      qiblaTitle: "🧭 بوصلة اتجاه القبلة الدقيقة",
      qiblaDesc: "حساب أقصر مسار دائري عظيم باتجاه الكعبة المشرفة بمكة المكرمة.",
      qiblaLblAngle: "درجة الزاوية",
      qiblaLblCardinal: "الاتجاه",
      qiblaLblDist: "المسافة إلى الكعبة",
      qiblaRefLabel: "📍 الموقع الحالي:",
      qiblaGpsBtn: "📡 تحديث الموقع (GPS)",
      doaSearchPlaceholder: "ابحث عن دعاء بالعنوان، المعنى، الآية...",
      doaFilterAll: "جميع الأدعية",
      doaFilterRabbana: "📖 40 دعاء ربنا (القرآن)",
      doaFilterHarian: "🤲 أدعية يومية مختارة",
      doaFilterFav: "⭐ أدعيتي المفضلة",
      doaBtnCopy: "📋 نسخ",
      doaBtnShare: "📤 مشاركة",
      doaBtnOpen: "📖 فتح في المصحف",
      doaCopiedToast: "📋 تم نسخ نص الدعاء!",
      doaFavAdded: "⭐ أُضيف إلى الأدعية المفضلة",
      doaFavRemoved: "أُزيل من المفضلة",
      doaEmptyTitle: "لم يتم العثور على أدعية",
      doaEmptyDesc: "جرّب كلمة بحث أخرى.",
      khatamTitle: "🎯 متابعة ختمة الـ 30 جزءاً",
      khatamDesc: "سجّل إنجاز كل جزء لمتابعة مسيرتك المباركة في ختم كتاب الله.",
      khatamBtnRead: "📖 قراءة",
      khatamBtnDone: "تم",
      khatamBtnMark: "تحديد",
      khatamToastDone: "✅ تم تسجيل إنجاز الجزء!",
      khatamToastUndone: "تم إلغاء التحديد",
      tadabburTitle: "📝 سجل التأمل وتدبر الآيات",
      tadabburDesc: "مستودعك الشخصي للفوائد والخواطر الإيمانية أثناء قراءة القرآن الكريم.",
      tadabburEmptyTitle: "لا توجد خواطر مسجلة بعد",
      tadabburEmptyDesc: "انقر على أيقونة 📝 بجوار أي آية لتدوين خواطرك.",
      tadabburBtnOpen: "📖 فتح الآية",
      tadabburBtnEdit: "✏️ تعديل",
      tadabburModalBadge: "📝 تدبر الآية الكريمة",
      tadabburModalIntro: "دوّن تأملاتك وخواطرك وما فتح الله عليك به من هدايات هذه الآية.",
      tadabburModalPlaceholder: "اكتب خاطرتك الإيمانية هنا...",
      tadabburModalDelete: "🗑️ حذف الخاطرة",
      tadabburModalCancel: "إلغاء",
      tadabburModalSave: "💾 حفظ التدبر",
      tadabburToastSaved: "💾 تم حفظ خاطرة التدبر بنجاح!",
      tadabburToastDeleted: "🗑️ تم حذف الخاطرة",
      cardinals: ['شمال (N)', 'شمال شرقي (NE)', 'شرق (E)', 'جنوب شرقي (SE)', 'جنوب (S)', 'جنوب غربي (SW)', 'غرب (W)', 'شمال غربي (NW)']
    },
    tr: {
      ibadahKicker: "İBADET VE MANEVİYAT MERKEZİ",
      ibadahTitle: "İbadet Merkezi, Zikir ve Dualar",
      ibadahDesc: "Dokunmatik Dijital Tesbih, hassas Kıble pusulası, 40 Kuran Rabbena duası, 30 Cüz hatim takibi ve ayet tefekkür notlarıyla ibadetinizi zenginleştirin.",
      tabTasbih: "Dijital Tesbih",
      tabDoa: "Kuran & Günlük Dualar",
      tabKiblat: "Kıble Yönü",
      tabKhatam: "30 Cüz Hatim Takibi",
      tabTadabbur: "Tefekkür Notları",
      tasbihPressHint: "Saymak için dokun",
      tasbihLapsLabel: "Tamamlanan Tur",
      tasbihDailyLabel: "Bugünkü Toplam",
      tasbihResetBtn: "🔄 Sayacı Sıfırla",
      tasbihSoundOn: "🔊 Tıklama Sesi: Açık",
      tasbihSoundOff: "🔇 Tıklama Sesi: Kapalı",
      tasbihLapToast: "🎉 Hedef tamamlandı! Tur: ",
      tasbihResetToast: "🔄 Tesbih sayacı sıfırlandı",
      qiblaTitle: "🧭 Hassas Kâbe Kıble Pusulası",
      qiblaDesc: "Mekke-i Mükerreme'deki Kâbe'ye (21.4225° K, 39.8262° D) en kısa büyük daire açısını hesaplar.",
      qiblaLblAngle: "Açı Derecesi",
      qiblaLblCardinal: "Pusula Yönü",
      qiblaLblDist: "Kâbe'ye Mesafe",
      qiblaRefLabel: "📍 Konum:",
      qiblaGpsBtn: "📡 GPS Konumumu Güncelle",
      doaSearchPlaceholder: "Dua başlığı, anlamı veya ayet numarası ile ara...",
      doaFilterAll: "Tüm Dualar",
      doaFilterRabbana: "📖 40 Rabbena Duası (Kuran)",
      doaFilterHarian: "🤲 Günlük Dualar",
      doaFilterFav: "⭐ Favorilerim",
      doaBtnCopy: "📋 Kopyala",
      doaBtnShare: "📤 Paylaş",
      doaBtnOpen: "📖 Kuran'da Aç",
      doaCopiedToast: "📋 Dua metni kopyalandı!",
      doaFavAdded: "⭐ Favorilere eklendi",
      doaFavRemoved: "Favorilerden çıkarıldı",
      doaEmptyTitle: "Dua bulunamadı",
      doaEmptyDesc: "Farklı bir arama terimi deneyin.",
      khatamTitle: "🎯 30 Cüz Hatim Takibi ve Hedefi",
      khatamDesc: "Hatim yolculuğunuzu takip etmek için okuduğunuz her cüzü işaretleyin.",
      khatamBtnRead: "📖 Oku",
      khatamBtnDone: "Bitti",
      khatamBtnMark: "İşaretle",
      khatamToastDone: "✅ Cüz tamamlandı olarak işaretlendi!",
      khatamToastUndone: "İşaret kaldırıldı",
      tadabburTitle: "📝 Ayet Tefekkür ve Not Defteri",
      tadabburDesc: "Kuran okurken çıkardığınız manevi dersler ve kişisel notlarınız.",
      tadabburEmptyTitle: "Henüz tefekkür notu yok",
      tadabburEmptyDesc: "Okuyucuda herhangi bir ayetin yanındaki 📝 simgesine tıklayarak not ekleyin.",
      tadabburBtnOpen: "📖 Ayeti Aç",
      tadabburBtnEdit: "✏️ Düzenle",
      tadabburModalBadge: "📝 Ayet Tefekkürü",
      tadabburModalIntro: "Bu ayetten çıkardığınız kişisel dersleri ve tefekkürlerinizi buraya kaydedin.",
      tadabburModalPlaceholder: "Tefekkürünüzü buraya yazın...",
      tadabburModalDelete: "🗑️ Notu Sil",
      tadabburModalCancel: "İptal",
      tadabburModalSave: "💾 Kaydet",
      tadabburToastSaved: "💾 Tefekkür notu kaydedildi!",
      tadabburToastDeleted: "🗑️ Tefekkür notu silindi",
      cardinals: ['Kuzey (N)', 'Kuzeydoğu (NE)', 'Doğu (E)', 'Güneydoğu (SE)', 'Güney (S)', 'Güneybatı (SW)', 'Batı (W)', 'Kuzeybatı (NW)']
    },
    ms: {
      ibadahKicker: "PUSAT IBADAH & SPIRITUAL",
      ibadahTitle: "Pusat Ibadah, Zikir & Koleksi Doa",
      ibadahDesc: "Lengkapkan ibadah harian anda dengan Tasbih Digital haptik, Kompas Arah Kiblat tepat Kaabah, 40 Doa Rabbana Al-Quran, Jurnal Khatam 30 Juzuk dan Catatan Tadabbur Ayat.",
      tabTasbih: "Tasbih Digital",
      tabDoa: "Doa Al-Quran & Harian",
      tabKiblat: "Arah Kiblat",
      tabKhatam: "Jurnal Khatam 30 Juzuk",
      tabTadabbur: "Catatan Tadabbur",
      tasbihPressHint: "Ketik untuk Berzikir",
      tasbihLapsLabel: "Pusingan Selesai",
      tasbihDailyLabel: "Jumlah Hari Ini",
      tasbihResetBtn: "🔄 Set Semula Hitungan",
      tasbihSoundOn: "🔊 Bunyi Klik: Aktif",
      tasbihSoundOff: "🔇 Bunyi Klik: Senyap",
      tasbihLapToast: "🎉 Sasaran tercapai! Pusingan ke-",
      tasbihResetToast: "🔄 Kiraan tasbih diset semula",
      qiblaTitle: "🧭 Kompas Arah Kiblat Kaabah Tepat",
      qiblaDesc: "Mengira sudut putaran terpendek (bulatan agung) ke Kaabah di Makkah Al-Mukarramah.",
      qiblaLblAngle: "Sudut Darjah",
      qiblaLblCardinal: "Arah Mata Angin",
      qiblaLblDist: "Jarak ke Kaabah",
      qiblaRefLabel: "📍 Lokasi Rujukan:",
      qiblaGpsBtn: "📡 Kemas Kini Posisi GPS Saya",
      doaSearchPlaceholder: "Cari doa mengikut tajuk, makna, lafaz Arab...",
      doaFilterAll: "Semua Doa",
      doaFilterRabbana: "📖 40 Doa Rabbana (Al-Quran)",
      doaFilterHarian: "🤲 Doa Pilihan Harian",
      doaFilterFav: "⭐ Kegemaran Saya",
      doaBtnCopy: "📋 Salin",
      doaBtnShare: "📤 Kongsi",
      doaBtnOpen: "📖 Buka dalam Al-Quran",
      doaCopiedToast: "📋 Teks doa berjaya disalin!",
      doaFavAdded: "⭐ Ditambah ke Doa Kegemaran",
      doaFavRemoved: "Dibuang daripada Kegemaran",
      doaEmptyTitle: "Tiada doa dijumpai",
      doaEmptyDesc: "Cuba kata kunci pencarian yang lain.",
      khatamTitle: "🎯 Matlamat & Kemajuan 30 Juzuk",
      khatamDesc: "Tandakan setiap juzuk yang telah dibaca untuk memantau perjalanan khatam Al-Quran anda.",
      khatamBtnRead: "📖 Baca",
      khatamBtnDone: "Selesai",
      khatamBtnMark: "Tanda",
      khatamToastDone: "✅ Juzuk ditandakan selesai!",
      khatamToastUndone: "Tanda juzuk dipadamkan",
      tadabburTitle: "📝 Jurnal Refleksi & Catatan Tadabbur",
      tadabburDesc: "Koleksi mutiara hikmah dan renungan peribadi anda semasa membaca Al-Quran.",
      tadabburEmptyTitle: "Belum ada catatan tadabbur",
      tadabburEmptyDesc: "Klik butang 📝 di sebelah ayat dalam pembaca untuk mencatat renungan.",
      tadabburBtnOpen: "📖 Buka Ayat",
      tadabburBtnEdit: "✏️ Ubah",
      tadabburModalBadge: "📝 Catatan Tadabbur Ayat",
      tadabburModalIntro: "Catatkan renungan peribadi dan hikmah ayat ini. Catatan disimpan secara peribadi pada peranti anda.",
      tadabburModalPlaceholder: "Tuliskan refleksi tadabbur anda di sini...",
      tadabburModalDelete: "🗑️ Padam Catatan",
      tadabburModalCancel: "Batal",
      tadabburModalSave: "💾 Simpan Refleksi",
      tadabburToastSaved: "💾 Catatan tadabbur berjaya disimpan!",
      tadabburToastDeleted: "🗑️ Catatan tadabbur dipadamkan",
      cardinals: ['Utara (N)', 'Timur Laut (NE)', 'Timur (E)', 'Tenggara (SE)', 'Selatan (S)', 'Barat Daya (SW)', 'Barat (W)', 'Barat Laut (NW)']
    }
  };

  function getI18n() {
    const l = getCurLang();
    return IBADAH_I18N[l] || IBADAH_I18N.en || IBADAH_I18N.id;
  }

  function getPresetText(preset, lang) {
    const titles = {
      subhanallah: { id: 'Subhanallah (33x)', en: 'Subhanallah (33x)', fr: 'Subhanallah (33x)', ar: 'سبحان الله (33x)', ur: 'سبحان اللہ (33x)', tr: 'Sübhanallah (33x)', bn: 'সুবহানাল্লাহ (৩৩x)', ms: 'Subhanallah (33x)' },
      alhamdulillah: { id: 'Alhamdulillah (33x)', en: 'Alhamdulillah (33x)', fr: 'Alhamdulillah (33x)', ar: 'الحمد لله (33x)', ur: 'الحمد للہ (33x)', tr: 'Elhamdülillah (33x)', bn: 'আলহামদুলিল্লাহ (৩৩x)', ms: 'Alhamdulillah (33x)' },
      allahuakbar: { id: 'Allahu Akbar (33x)', en: 'Allahu Akbar (33x)', fr: 'Allahu Akbar (33x)', ar: 'الله أكبر (33x)', ur: 'اللہ اکبر (33x)', tr: 'Allahu Ekber (33x)', bn: 'আল্লাহু আকবার (৩৩x)', ms: 'Allahu Akbar (33x)' },
      tahlil: { id: 'Tahlil Lengkap (100x)', en: 'Full Tahlil (100x)', fr: 'Tahlil complet (100x)', ar: 'التهليل التام (100x)', ur: 'مکمل تہلیل (100x)', tr: 'Tam Tevhid (100x)', bn: 'পূর্ণ তাহলিল (১০০x)', ms: 'Tahlil Lengkap (100x)' },
      istighfar: { id: 'Istighfar (100x)', en: 'Istighfar (100x)', fr: 'Istighfar (100x)', ar: 'الاستغفار (100x)', ur: 'استغفار (100x)', tr: 'İstiğfar (100x)', bn: 'ইস্তিগফার (১০০x)', ms: 'Istighfar (100x)' },
      shalawat: { id: 'Shalawat Nabi (100x)', en: 'Salawat on Prophet (100x)', fr: 'Prière sur le Prophète (100x)', ar: 'الصلاة على النبي (100x)', ur: 'درود شریف (100x)', tr: 'Salavat-ı Şerife (100x)', bn: 'দরূদ শরীফ (১০০x)', ms: 'Selawat Nabi (100x)' },
      hauqalah: { id: 'Hauqalah (33x)', en: 'Hauqalah (33x)', fr: 'Hauqalah (33x)', ar: 'الحوقلة (33x)', ur: 'حوقلہ (33x)', tr: 'Havkele (33x)', bn: 'হাওকালা (৩৩x)', ms: 'Hauqalah (33x)' },
    };

    const meanings = {
      subhanallah: {
        id: 'Maha Suci Allah',
        en: 'Glory be to Allah',
        fr: 'Gloire à Allah',
        ar: 'سبحان الله وبحمده',
        ur: 'اللہ ہر عیب سے پاک ہے',
        tr: 'Allah her türlü noksanlıktan münezzehtir',
        bn: 'আল্লাহ পরম পবিত্র',
        ms: 'Maha Suci Allah'
      },
      alhamdulillah: {
        id: 'Segala puji bagi Allah',
        en: 'All praise is due to Allah',
        fr: 'Louange à Allah',
        ar: 'الحمد لله رب العالمين',
        ur: 'تمام تعریفیں اللہ کے لیے ہیں',
        tr: 'Bütün hamt ve övgüler Allah\'a aittir',
        bn: 'সকল প্রশংসা আল্লাহর জন্য',
        ms: 'Segala puji bagi Allah'
      },
      allahuakbar: {
        id: 'Allah Maha Besar',
        en: 'Allah is the Greatest',
        fr: 'Allah est le Plus Grand',
        ar: 'الله أكبر من كل شيء',
        ur: 'اللہ سب سے بڑا ہے',
        tr: 'Allah en büyüktür',
        bn: 'আল্লাহ সর্বশ্রেষ্ঠ',
        ms: 'Allah Maha Besar'
      },
      tahlil: {
        id: 'Tiada tuhan selain Allah yang Maha Esa, tiada sekutu bagi-Nya. Bagi-Nya kerajaan dan segala pujian, dan Dia Maha Kuasa atas segala sesuatu.',
        en: 'There is no deity except Allah alone, without partner. His is the dominion and to Him belongs praise, and He is over all things competent.',
        fr: 'Il n\'y a de divinité digne d\'adoration qu\'Allah Seul, sans associé. À Lui la royauté et la louange, et Il est Omnipotent.',
        ar: 'لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير.',
        ur: 'اللہ کے سوا کوئی معبود نہیں، وہ یکتا ہے، اس کا کوئی شریک نہیں۔ اسی کی بادشاہی اور تعریف ہے، اور وہ ہر چیز پر قادر ہے۔',
        tr: 'Allah\'tan başka ilah yoktur, O tektir ve ortağı yoktur. Mülk O\'nundur, hamd O\'nadır ve O her şeye kadirdir.',
        bn: 'আল্লাহ ব্যতীত কোনো সত্য উপাস্য নেই, তিনি একক, তাঁর কোনো অংশীদার নেই। রাজত্ব একমাত্র তাঁরই এবং সমস্ত প্রশংসা তাঁরই।',
        ms: 'Tiada tuhan selain Allah Yang Maha Esa, tiada sekutu bagi-Nya. Bagi-Nya kerajaan dan segala pujian, dan Dia Maha Kuasa atas segala sesuatu.'
      },
      istighfar: {
        id: 'Aku memohon ampun kepada Allah yang Maha Agung dan bertobat kepada-Nya.',
        en: 'I seek the forgiveness of Allah the Almighty and I repent unto Him.',
        fr: 'Je demande pardon à Allah le Tout-Puissant et je me repens à Lui.',
        ar: 'أستغفر الله العظيم وأتوب إليه.',
        ur: 'میں اللہ عظمت والے سے بخشش مانگتا ہوں اور اسی کے حضور توبہ کرتا ہوں۔',
        tr: 'Yüce Allah\'tan mağfiret diler ve O\'na tövbe ederim.',
        bn: 'আমি মহান আল্লাহর কাছে ক্ষমা প্রার্থনা করছি এবং তাঁরই কাছে তওবা করছি।',
        ms: 'Aku memohon ampun kepada Allah Yang Maha Agung dan bertaubat kepada-Nya.'
      },
      shalawat: {
        id: 'Ya Allah, limpahkanlah rahmat kepada junjungan kami Nabi Muhammad dan keluarganya.',
        en: 'O Allah, bestow Your blessings upon our Master Muhammad and upon the family of Muhammad.',
        fr: 'Ô Allah, répands Tes bénédictions sur notre Maître Muhammad et sur la famille de Muhammad.',
        ar: 'اللهم صلِّ على محمد وعلى آل محمد.',
        ur: 'اے اللہ! ہمارے آقا محمد اور ان کی آل پر رحمت و درود نازل فرما۔',
        tr: 'Allah\'ım! Efendimiz Muhammed\'e ve ailesine salât ve selâm eyle.',
        bn: 'হে আল্লাহ! আমাদের নেতা মুহাম্মদ ﷺ এবং তাঁর পরিবারের ওপর রহমত বর্ষণ করুন।',
        ms: 'Ya Allah, limpahkanlah rahmat ke atas junjungan kami Nabi Muhammad dan keluarganya.'
      },
      hauqalah: {
        id: 'Tiada daya dan kekuatan melainkan dengan pertolongan Allah yang Maha Tinggi lagi Maha Agung.',
        en: 'There is no power and no strength except with Allah, the Most High, the Most Supreme.',
        fr: 'Il n\'y a de force ni de puissance que par Allah, le Très-Haut, l\'Immense.',
        ar: 'لا حول ولا قوة إلا بالله العلي العظيم.',
        ur: 'گناہوں سے بچنے کی طاقت اور نیکی کرنے کی قوت صرف بلند و برتر اللہ کی توفیق سے ہے۔',
        tr: 'Güç ve kuvvet ancak Yüce ve Büyük olan Allah\'tandır.',
        bn: 'মহীয়ান ও গরীয়ান আল্লাহর সাহায্য ছাড়া কোনো উপায় ও ক্ষমতা নেই।',
        ms: 'Tiada daya dan kekuatan melainkan dengan pertolongan Allah Yang Maha Tinggi lagi Maha Agung.'
      }
    };

    const rewards = {
      subhanallah: {
        id: 'Dihapus dosanya meski sebanyak buih di lautan.',
        en: 'Sins are forgiven even if they are like the foam of the sea.',
        fr: 'Les péchés sont effacés même s\'ils égalent l\'écume de la mer.',
        ar: 'حُطَّتْ خطاياه وإن كانت مثل زبد البحر.',
        ur: 'گناہ معاف کر دیے جاتے ہیں چاہے سمندر کے جھاگ جتنے ہوں۔',
        tr: 'Deniz köpüğü kadar günahı olsa bağışlanır.',
        bn: 'সমুদ্রের ফেনার মতো পাপ হলেও ক্ষমা করা হয়।',
        ms: 'Dihapuskan dosanya walaupun sebanyak buih di lautan.'
      },
      alhamdulillah: {
        id: 'Memenuhi timbangan amal kebaikan (mizan).',
        en: 'Fills the Scale of good deeds with abundant reward.',
        fr: 'Remplit la Balance des bonnes actions d\'immenses mérites.',
        ar: 'تملأ الميزان بالأجر والبركة.',
        ur: 'میزان کو نیکیوں سے بھر دیتا ہے۔',
        tr: 'Sevabıyla mizanı doldurur.',
        bn: 'নেকির পাল্লা পরিপূর্ণ করে।',
        ms: 'Memenuhi timbangan amal kebaikan (mizan).'
      },
      allahuakbar: {
        id: 'Mengagungkan kebesaran Allah di langit dan bumi.',
        en: 'Magnifying the supreme grandeur of Allah in heavens and earth.',
        fr: 'Proclame la suprématie et la grandeur d\'Allah dans les cieux et sur terre.',
        ar: 'تعظيم لعظمة الله في السماوات والأرض.',
        ur: 'آسمانوں اور زمین میں اللہ کی عظمت کا اقرار۔',
        tr: 'Göklerde ve yerde Allah\'ın yüceliğini ikrar etmek.',
        bn: 'আসমান ও জমিনে আল্লাহর শ্রেষ্ঠত্বের ঘোষণা।',
        ms: 'Mengagungkan kebesaran Allah di langit dan bumi.'
      },
      tahlil: {
        id: 'Pahalanya seperti memerdekakan 10 budak dan benteng dari setan seharian.',
        en: 'Equal to freeing 10 slaves and serves as a shield from Shaytan all day.',
        fr: 'Équivaut à affranchir 10 esclaves et constitue un bouclier contre Satan tout le jour.',
        ar: 'تعدل عتق عشر رقاب وحرز من الشيطان يومه ذلك.',
        ur: 'دس غلام آزاد کرنے کے برابر ثواب اور دن بھر شیطان سے حفاظت۔',
        tr: 'On köle azat etmeye denk ve gün boyu şeytana karşı kalkandır.',
        bn: '১০টি দাস মুক্ত করার সমতুল্য এবং সারাদিন শয়তান থেকে সুরক্ষা।',
        ms: 'Pahalanya seperti memerdekakan 10 hamba dan benteng daripada syaitan seharian.'
      },
      istighfar: {
        id: 'Membuka pintu rezeki yang tak disangka dan jalan keluar dari kesempitan.',
        en: 'Opens doors of unexpected sustenance and provides relief from hardship.',
        fr: 'Ouvre les portes d\'une subsistance inattendue et soulage de toute détresse.',
        ar: 'فتح لأبواب الرزق من حيث لا يحتسب ومخرج من كل ضيق.',
        ur: 'بے گمان رزق کے دروازے کھولتا ہے اور ہر تنگی سے نجات دیتا ہے۔',
        tr: 'Beklenmedik rızık kapılarını açar ve darlıktan çıkış sağlar.',
        bn: 'অভাবনীয় রিজিকের দ্বার উন্মুক্ত করে এবং সংকট থেকে মুক্তি দেয়।',
        ms: 'Membuka pintu rezeki yang tidak disangka dan jalan keluar dari kesempitan.'
      },
      shalawat: {
        id: 'Siapa bershalawat 1 kali, Allah membalasnya dengan 10 kebaikan dan ampunan.',
        en: 'Whoever sends 1 blessing, Allah rewards him with 10 blessings and forgiveness.',
        fr: 'Quiconque prie 1 fois sur le Prophète, Allah lui accorde 10 bénédictions.',
        ar: 'من صلى عليَّ صلاة صلى الله عليه بها عشراً.',
        ur: 'جو ایک بار درود بھیجے، اللہ اس پر دس رحمتیں نازل فرماتا ہے۔',
        tr: 'Kim bir salavat getirirse, Allah ona on rahmet ve bağışlanma verir.',
        bn: 'যে ১ বার দরূদ পাঠ করে, আল্লাহ তার প্রতি ১০টি রহমত বর্ষণ করেন।',
        ms: 'Sesiapa berselawat 1 kali, Allah membalasnya dengan 10 kebaikan dan keampunan.'
      },
      hauqalah: {
        id: 'Salah satu simpanan harta karun surga (kanzun min kunūzil-jannah).',
        en: 'One of the precious treasures of Paradise (kanzun min kunooz al-Jannah).',
        fr: 'L\'un des précieux trésors du Paradis (kanz min kunūz al-Jannah).',
        ar: 'كنز من كنوز الجنة وباب من أبواب الخير.',
        ur: 'جنت کے خزانوں میں سے ایک قیمتی خزانہ ہے۔',
        tr: 'Cennet hazinelerinden paha biçilmez bir hazinedir.',
        bn: 'জান্নাতের মূল্যবান রত্নভাণ্ডারসমূহের একটি।',
        ms: 'Salah satu simpanan harta karun syurga (kanzun min kunuzil-jannah).'
      }
    };

    const id = preset.id;
    return {
      title: (titles[id] && (titles[id][lang] || titles[id].en)) || preset.latin,
      meaning: (meanings[id] && (meanings[id][lang] || meanings[id].en)) || preset.meaningEn || preset.meaningId,
      reward: (rewards[id] && (rewards[id][lang] || rewards[id].en)) || preset.reward
    };
  }

  // ============================================================
  // 3. DATASET: TASBIH PRESETS
  // ============================================================
  const TASBIH_PRESETS = [
    {
      id: 'subhanallah',
      target: 33,
      arabic: 'سُبْحَانَ اللَّهِ',
      latin: 'Subḥānallāh',
      meaningId: 'Maha Suci Allah',
      meaningEn: 'Glory be to Allah',
      reward: 'Dihapus dosanya meski sebanyak buih di lautan.'
    },
    {
      id: 'alhamdulillah',
      target: 33,
      arabic: 'الْحَمْدُ لِلَّهِ',
      latin: 'Al-ḥamdulillāh',
      meaningId: 'Segala puji bagi Allah',
      meaningEn: 'All praise is due to Allah',
      reward: 'Memenuhi timbangan amal kebaikan (mizan).'
    },
    {
      id: 'allahuakbar',
      target: 33,
      arabic: 'اللَّهُ أَكْبَرُ',
      latin: 'Allāhu Akbar',
      meaningId: 'Allah Maha Besar',
      meaningEn: 'Allah is the Greatest',
      reward: 'Mengagungkan kebesaran Allah di langit dan bumi.'
    },
    {
      id: 'tahlil',
      target: 100,
      arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
      latin: 'Lā ilāha illallāhu waḥdahū lā syarīka lah, lahul-mulku wa lahul-ḥamdu, wa huwa ‘alā kulli syai\'in qadīr.',
      meaningId: 'Tiada tuhan selain Allah yang Maha Esa, tiada sekutu bagi-Nya. Bagi-Nya kerajaan dan segala pujian, dan Dia Maha Kuasa atas segala sesuatu.',
      meaningEn: 'None has the right to be worshipped except Allah alone, with no partner. His is the dominion, and to Him belongs praise, and He is over all things omnipotent.',
      reward: 'Pahalanya seperti memerdekakan 10 budak dan benteng dari setan seharian.'
    },
    {
      id: 'istighfar',
      target: 100,
      arabic: 'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ وَأَتُوبُ إِلَيْهِ',
      latin: 'Astaghfirullāhal-‘aẓīma wa atūbu ilaih.',
      meaningId: 'Aku memohon ampun kepada Allah yang Maha Agung dan bertobat kepada-Nya.',
      meaningEn: 'I seek forgiveness from Allah, the Most Great, and I repent unto Him.',
      reward: 'Membuka pintu rezeki yang tak disangka dan jalan keluar dari kesempitan.'
    },
    {
      id: 'shalawat',
      target: 100,
      arabic: 'اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ',
      latin: 'Allāhumma ṣalli ‘alā sayyidinā Muḥammadin wa ‘alā āli sayyidinā Muḥammad.',
      meaningId: 'Ya Allah, limpahkanlah rahmat kepada junjungan kami Nabi Muhammad dan keluarganya.',
      meaningEn: 'O Allah, bestow Your blessings upon our Master Muhammad and upon the family of Muhammad.',
      reward: 'Siapa bershalawat 1 kali, Allah membalasnya dengan 10 kebaikan dan ampunan.'
    },
    {
      id: 'hauqalah',
      target: 33,
      arabic: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ',
      latin: 'Lā ḥaula wa lā quwwata illā billāhil-‘aliyyil-‘aẓīm.',
      meaningId: 'Tiada daya dan kekuatan melainkan dengan pertolongan Allah yang Maha Tinggi lagi Maha Agung.',
      meaningEn: 'There is no power and no strength except with Allah, the Most High, the Most Supreme.',
      reward: 'Salah satu simpanan harta karun surga (kanzun min kunūzil-jannah).'
    }
  ];

  // ============================================================
  // 4. AUDIO SYNTHESIS & HAPTIC ENGINE (ZERO DEPENDENCY)
  // ============================================================
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playTasbihClickSound() {
    if (localStorage.getItem('qh_tasbih_sound') === 'false') return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(620, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.045);

      gain.gain.setValueAtTime(0.35, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.045);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) {
      // AudioContext unavailable or blocked
    }
  }

  function playTasbihTargetChime() {
    if (localStorage.getItem('qh_tasbih_sound') === 'false') return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        const start = ctx.currentTime + (i * 0.08);
        gain.gain.setValueAtTime(0.2, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start);
        osc.stop(start + 0.36);
      });
    } catch (e) {}
  }

  function triggerHaptic() {
    if (navigator.vibrate) {
      try {
        navigator.vibrate(25);
      } catch (e) {}
    }
  }

  // ============================================================
  // 5. TASBIH DIGITAL STATE & ENGINE
  // ============================================================
  const tasbihState = {
    count: 0,
    laps: 0,
    target: 33,
    presetId: 'subhanallah',
    dailyTotal: parseInt(localStorage.getItem('qh_tasbih_daily_' + new Date().toISOString().slice(0, 10)) || '0')
  };

  function updateTasbihUI() {
    const countEl = document.getElementById('tasbih-count-val');
    const targetEl = document.getElementById('tasbih-target-val');
    const lapsEl = document.getElementById('tasbih-laps-val');
    const dailyEl = document.getElementById('tasbih-daily-val');
    const ringEl = document.getElementById('tasbih-progress-ring');
    const arabicEl = document.getElementById('tasbih-text-ar');
    const latinEl = document.getElementById('tasbih-text-latin');
    const transEl = document.getElementById('tasbih-text-trans');
    const rewardEl = document.getElementById('tasbih-text-reward');

    const curPreset = TASBIH_PRESETS.find(p => p.id === tasbihState.presetId) || TASBIH_PRESETS[0];
    const curLang = getCurLang();
    const pText = getPresetText(curPreset, curLang);

    if (countEl) countEl.textContent = tasbihState.count;
    if (targetEl) targetEl.textContent = tasbihState.target ? `/ ${tasbihState.target}` : '∞';
    if (lapsEl) lapsEl.textContent = tasbihState.laps;
    if (dailyEl) dailyEl.textContent = tasbihState.dailyTotal;

    if (arabicEl) arabicEl.textContent = curPreset.arabic;
    if (latinEl) latinEl.textContent = curPreset.latin;
    if (transEl) {
      transEl.textContent = `"${pText.meaning}"`;
    }
    if (rewardEl) {
      rewardEl.textContent = `✨ ${pText.reward}`;
    }

    if (ringEl && tasbihState.target > 0) {
      const radius = 100;
      const circumference = 2 * Math.PI * radius;
      const percent = Math.min(1, tasbihState.count / tasbihState.target);
      const offset = circumference - (percent * circumference);
      ringEl.style.strokeDashoffset = offset;
    }
  }

  function incrementTasbih() {
    playTasbihClickSound();
    triggerHaptic();

    tasbihState.count++;
    tasbihState.dailyTotal++;

    // Save daily stats
    const todayKey = 'qh_tasbih_daily_' + new Date().toISOString().slice(0, 10);
    localStorage.setItem(todayKey, tasbihState.dailyTotal);

    if (tasbihState.target && tasbihState.count >= tasbihState.target) {
      tasbihState.laps++;
      tasbihState.count = 0;
      playTasbihTargetChime();
      if (navigator.vibrate) {
        try { navigator.vibrate([60, 50, 100]); } catch (e) {}
      }
      if (typeof window.showToast === 'function') {
        const t = getI18n();
        window.showToast(`${t.tasbihLapToast}${tasbihState.laps}`, 'success');
      }
    }

    updateTasbihUI();
  }

  function resetTasbih() {
    tasbihState.count = 0;
    tasbihState.laps = 0;
    updateTasbihUI();
    if (typeof window.showToast === 'function') {
      const t = getI18n();
      window.showToast(t.tasbihResetToast, 'info');
    }
  }

  function selectTasbihPreset(presetId) {
    const preset = TASBIH_PRESETS.find(p => p.id === presetId);
    if (!preset) return;
    tasbihState.presetId = presetId;
    tasbihState.target = preset.target;
    tasbihState.count = 0;
    tasbihState.laps = 0;

    document.querySelectorAll('.tasbih-chip').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.id === presetId);
    });

    updateTasbihUI();
  }

  // ============================================================
  // 6. KOMPAS ARAH KIBLAT (QIBLA COMPASS ENGINE)
  // ============================================================
  const KAABA_COORDS = { lat: 21.422487, lng: 39.826206 };

  function calculateQiblaDirection(userLat, userLng) {
    const kaabaLat = KAABA_COORDS.lat * Math.PI / 180;
    const kaabaLng = KAABA_COORDS.lng * Math.PI / 180;
    const phi1 = userLat * Math.PI / 180;
    const lambda1 = userLng * Math.PI / 180;
    const deltaLambda = kaabaLng - lambda1;

    const y = Math.sin(deltaLambda) * Math.cos(kaabaLat);
    const x = Math.cos(phi1) * Math.sin(kaabaLat) - Math.sin(phi1) * Math.cos(kaabaLat) * Math.cos(deltaLambda);

    let qibla = Math.atan2(y, x) * 180 / Math.PI;
    return (qibla + 360) % 360;
  }

  function calculateDistanceToKaaba(userLat, userLng) {
    const R = 6371; // Earth radius in km
    const dLat = (KAABA_COORDS.lat - userLat) * Math.PI / 180;
    const dLng = (KAABA_COORDS.lng - userLng) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(userLat * Math.PI / 180) * Math.cos(KAABA_COORDS.lat * Math.PI / 180) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c);
  }

  function getCardinalDirection(angle) {
    const t = getI18n();
    const directions = t.cardinals || ['Utara (N)', 'Timur Laut (NE)', 'Timur (E)', 'Tenggara (SE)', 'Selatan (S)', 'Barat Daya (SW)', 'Barat (W)', 'Barat Laut (NW)'];
    const idx = Math.round(angle / 45) % 8;
    return directions[idx];
  }

  let compassHeading = 0;
  let qiblaBearing = 295.2; // default Jakarta
  let userLocationName = 'Jakarta, Indonesia';

  function updateQiblaCompassUI() {
    const needleEl = document.getElementById('qibla-compass-needle');
    const dialEl = document.getElementById('qibla-compass-dial');
    const angleEl = document.getElementById('qibla-angle-val');
    const cardEl = document.getElementById('qibla-cardinal-val');
    const distEl = document.getElementById('qibla-distance-val');
    const locEl = document.getElementById('qibla-loc-name');

    if (angleEl) angleEl.textContent = `${qiblaBearing.toFixed(1)}°`;
    if (cardEl) cardEl.textContent = getCardinalDirection(qiblaBearing);
    if (distEl) {
      const dist = calculateDistanceToKaaba(
        (window._pw && window._pw.lat) || -6.2088,
        (window._pw && window._pw.lng) || 106.8456
      );
      distEl.textContent = `${dist.toLocaleString()} km`;
    }
    if (locEl) locEl.textContent = userLocationName;

    // Needle rotates to point towards Qibla
    if (needleEl) {
      needleEl.style.transform = `rotate(${qiblaBearing}deg)`;
    }
    if (dialEl) {
      dialEl.style.transform = `rotate(${-compassHeading}deg)`;
    }
  }

  function detectDeviceQibla() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          qiblaBearing = calculateQiblaDirection(lat, lng);

          fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10`)
            .then(r => r.json())
            .then(data => {
              const city = data.address?.city || data.address?.town || data.address?.county || `${lat.toFixed(2)}°, ${lng.toFixed(2)}°`;
              const country = data.address?.country || '';
              userLocationName = country ? `${city}, ${country}` : city;
              updateQiblaCompassUI();
            })
            .catch(() => {
              userLocationName = `${lat.toFixed(2)}°, ${lng.toFixed(2)}°`;
              updateQiblaCompassUI();
            });
        },
        () => {
          // Fallback to prayer widget location if geolocation denied
          if (window._pw) {
            qiblaBearing = calculateQiblaDirection(window._pw.lat, window._pw.lng);
            userLocationName = window._pw.locationName;
          }
          updateQiblaCompassUI();
        }
      );
    }

    // Try listening to compass sensor if available
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', (e) => {
        let heading = null;
        if (e.webkitCompassHeading) {
          heading = e.webkitCompassHeading; // iOS Safari
        } else if (e.alpha !== null) {
          heading = 360 - e.alpha; // Android Chrome
        }
        if (heading !== null) {
          compassHeading = heading;
          updateQiblaCompassUI();
        }
      }, true);
    }
  }

  // ============================================================
  // 7. KHATAM 30 JUZ TRACKER ENGINE
  // ============================================================
  function getKhatamCompletedJuz() {
    try {
      return JSON.parse(localStorage.getItem('qh_khatam_juz') || '[]');
    } catch (e) {
      return [];
    }
  }

  function toggleJuzCompleted(juzNum) {
    let completed = getKhatamCompletedJuz();
    if (completed.includes(juzNum)) {
      completed = completed.filter(n => n !== juzNum);
    } else {
      completed.push(juzNum);
    }
    localStorage.setItem('qh_khatam_juz', JSON.stringify(completed));
    renderKhatamTracker();

    if (typeof window.showToast === 'function') {
      const isEn = window.state && window.state.language === 'en';
      const isDone = completed.includes(juzNum);
      window.showToast(isDone ? (isEn ? `✅ Juz ${juzNum} marked as completed!` : `✅ Juz ${juzNum} ditandai selesai!`) : (isEn ? `Juz ${juzNum} unchecked` : `Tanda Juz ${juzNum} dihapus`), 'success');
    }
  }

  function renderKhatamTracker() {
    const grid = document.getElementById('khatam-juz-grid');
    const bar = document.getElementById('khatam-progress-fill');
    const textVal = document.getElementById('khatam-pct-val');
    const countVal = document.getElementById('khatam-count-val');
    if (!grid) return;

    const completed = getKhatamCompletedJuz();
    const total = 30;
    const pct = Math.round((completed.length / total) * 100);

    if (bar) bar.style.width = `${pct}%`;
    if (textVal) textVal.textContent = `${pct}%`;
    if (countVal) countVal.textContent = `${completed.length} / 30 Juz`;

    const t = getI18n();

    grid.innerHTML = JUZ_METADATA.map(j => {
      const isDone = completed.includes(j.num);
      return `
        <div class="khatam-juz-card ${isDone ? 'completed' : ''}" id="juz-card-${j.num}">
          <div class="kj-top-row">
            <span class="kj-badge">Juz ${j.num}</span>
            <span class="kj-ar-name">${j.arName}</span>
          </div>
          <div class="kj-name">${j.name}</div>
          <div class="kj-meta">${j.surahName}</div>
          <div class="kj-actions">
            <button class="kj-read-btn" onclick="openJuzReader(${j.startSurah}, ${j.startVerse})" title="Juz ${j.num}">
              ${t.khatamBtnRead}
            </button>
            <label class="kj-check-label">
              <input type="checkbox" ${isDone ? 'checked' : ''} onchange="toggleJuzCompleted(${j.num})" />
              <span>${isDone ? t.khatamBtnDone : t.khatamBtnMark}</span>
            </label>
          </div>
        </div>
      `;
    }).join('');
  }

  let currentDoaFilter = 'all';
  let currentDoaSearch = '';

  function getFavoriteDoaList() {
    try {
      return JSON.parse(localStorage.getItem('qh_fav_doa') || '[]');
    } catch (e) {
      return [];
    }
  }

  function toggleFavoriteDoa(doaId) {
    let favs = getFavoriteDoaList();
    if (favs.includes(doaId)) {
      favs = favs.filter(id => id !== doaId);
    } else {
      favs.push(doaId);
    }
    localStorage.setItem('qh_fav_doa', JSON.stringify(favs));
    renderDoaGrid();

    if (typeof window.showToast === 'function') {
      const t = getI18n();
      window.showToast(favs.includes(doaId) ? t.doaFavAdded : t.doaFavRemoved, 'success');
    }
  }

  function renderDoaGrid() {
    const container = document.getElementById('doa-cards-grid');
    if (!container) return;

    const t = getI18n();
    const curLang = getCurLang();
    const isEnOrFr = curLang === 'en' || curLang === 'fr';
    const favs = getFavoriteDoaList();

    const filtered = DOA_DATA.filter(d => {
      if (currentDoaFilter === 'rabbana' && d.category !== 'rabbana') return false;
      if (currentDoaFilter === 'harian' && d.category !== 'harian') return false;
      if (currentDoaFilter === 'fav' && !favs.includes(d.id)) return false;

      if (currentDoaSearch) {
        const q = currentDoaSearch.toLowerCase();
        const title = (isEnOrFr ? (d.titleEn || d.title) : d.title).toLowerCase();
        const arabic = d.arabic.toLowerCase();
        const latin = d.latin.toLowerCase();
        const trans = (isEnOrFr ? (d.transEn || d.transId) : d.transId).toLowerCase();
        const ref = (d.surahRef || '').toLowerCase();
        return title.includes(q) || arabic.includes(q) || latin.includes(q) || trans.includes(q) || ref.includes(q);
      }
      return true;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="doa-empty-state">
          <div style="font-size: 2.2rem; margin-bottom: 8px;">🤲</div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 1.05rem;">${t.doaEmptyTitle}</div>
          <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">${t.doaEmptyDesc}</div>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(d => {
      const isFav = favs.includes(d.id);
      const title = isEnOrFr ? (d.titleEn || d.title) : d.title;
      const trans = isEnOrFr ? (d.transEn || d.transId) : d.transId;
      const hasQuran = d.surahNum !== null && d.verseNum !== null;

      return `
        <div class="doa-card" id="card-${d.id}">
          <div class="doa-card-header">
            <div class="doa-badge-group">
              <span class="doa-cat-badge ${d.category === 'rabbana' ? 'rabbana' : 'harian'}">
                ${d.category === 'rabbana' ? '📖 Rabbana' : '🤲 Harian'}
              </span>
              <span class="doa-ref-badge">${d.surahRef}</span>
            </div>
            <button class="doa-fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavoriteDoa('${d.id}')" title="Favorit">
              ${isFav ? '⭐' : '☆'}
            </button>
          </div>

          <h3 class="doa-title">${title}</h3>

          <div class="doa-arabic-box">${d.arabic}</div>
          <div class="doa-latin-box">${d.latin}</div>
          <div class="doa-trans-box">"${trans}"</div>

          ${d.context ? `<div class="doa-context-box"><strong>${curLang === 'fr' ? 'Contexte & Mérites :' : (curLang === 'en' ? 'Context & Virtues:' : 'Konteks & Keutamaan:')}</strong> ${d.context}</div>` : ''}

          <div class="doa-footer-actions">
            <button class="doa-action-btn" onclick="copyDoaText('${d.id}')">
              ${t.doaBtnCopy}
            </button>
            <button class="doa-action-btn" onclick="shareDoaModal('${d.id}')">
              ${t.doaBtnShare}
            </button>
            ${hasQuran ? `
              <button class="doa-action-btn highlight" onclick="openDoaInQuran(${d.surahNum}, ${d.verseNum})">
                ${t.doaBtnOpen}
              </button>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');
  }

  function copyDoaText(doaId) {
    const d = DOA_DATA.find(item => item.id === doaId);
    if (!d) return;
    const isEn = window.state && window.state.language === 'en';
    const title = isEn ? d.titleEn : d.title;
    const trans = isEn ? d.transEn : d.transId;
    const text = `${title} (${d.surahRef})\n\n${d.arabic}\n\n${d.latin}\n\n"${trans}"\n\n— Quran Harmony (Nur Al-Qur'an)`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        if (typeof window.showToast === 'function') {
          window.showToast(isEn ? '📋 Prayer copied to clipboard!' : '📋 Teks doa berhasil disalin!', 'success');
        }
      });
    }
  }

  function openJuzReader(surahId, verseNum) {
    if (typeof window.loadSurah === 'function') {
      window.loadSurah(surahId, verseNum);
    }
    if (typeof window.navigateTo === 'function') {
      window.navigateTo('quran');
    }
    if (typeof window.switchQuranView === 'function') {
      window.switchQuranView('reader');
    }
  }

  function openDoaInQuran(surahId, verseNum) {
    if (typeof window.loadSurah === 'function') {
      window.loadSurah(surahId, verseNum);
    }
    if (typeof window.navigateTo === 'function') {
      window.navigateTo('quran');
    }
    if (typeof window.switchQuranView === 'function') {
      window.switchQuranView('reader');
    }
  }

  function shareDoaModal(doaId) {
    const d = DOA_DATA.find(item => item.id === doaId);
    if (!d) return;
    const isEn = window.state && window.state.language === 'en';
    const trans = isEn ? d.transEn : d.transId;

    if (typeof window.shareVerseModal === 'function') {
      window.shareVerseModal(d.surahNum || 1, d.verseNum || 1, d.arabic, trans);
    } else {
      copyDoaText(doaId);
    }
  }

  // ============================================================
  // 9. CATATAN TADABBUR AYAT (AYAH REFLECTION JOURNAL)
  // ============================================================
  function getAyahNotes() {
    try {
      return JSON.parse(localStorage.getItem('qh_ayah_notes') || '{}');
    } catch (e) {
      return {};
    }
  }

  function openTadabburModal(surahId, verseNum) {
    const notes = getAyahNotes();
    const key = `${surahId}:${verseNum}`;
    const curNote = notes[key] || { text: '', date: '' };

    const surah = (window.ALL_SURAHS || []).find(s => s.id === surahId) || { name: `Surah ${surahId}` };
    const t = getI18n();

    let overlay = document.getElementById('tadabbur-modal-overlay');
    if (overlay) overlay.remove();

    overlay = document.createElement('div');
    overlay.className = 'modal-overlay open';
    overlay.id = 'tadabbur-modal-overlay';

    overlay.innerHTML = `
      <div class="modal-box" style="max-width: 580px;">
        <button class="modal-close" onclick="document.getElementById('tadabbur-modal-overlay').remove()">✕</button>
        <div class="modal-content">
          <div class="mh-header" style="margin-bottom: 16px;">
            <div class="mh-event-badge">${t.tadabburModalBadge}</div>
            <h2 class="mh-title" style="font-size: 1.25rem;">${surah.name} : ${verseNum}</h2>
          </div>

          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 14px; line-height: 1.5;">
            ${t.tadabburModalIntro}
          </p>

          <textarea id="tadabbur-text-input" class="tadabbur-textarea" placeholder="${t.tadabburModalPlaceholder}">${curNote.text || ''}</textarea>

          <div style="display:flex; justify-content:space-between; align-items:center; margin-top: 14px;">
            ${curNote.text ? `
              <button class="btn-secondary" onclick="deleteTadabburNote(${surahId}, ${verseNum})" style="color:#d9534f; border-color:rgba(217,83,79,0.3); font-size:0.8rem; padding: 7px 14px;">
                ${t.tadabburModalDelete}
              </button>
            ` : '<span></span>'}
            
            <div style="display:flex; gap: 8px;">
              <button class="btn-secondary" onclick="document.getElementById('tadabbur-modal-overlay').remove()" style="font-size:0.8rem; padding: 7px 14px;">
                ${t.tadabburModalCancel}
              </button>
              <button class="btn-primary" onclick="saveTadabburNote(${surahId}, ${verseNum})" style="font-size:0.8rem; padding: 7px 18px;">
                ${t.tadabburModalSave}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    setTimeout(() => {
      document.getElementById('tadabbur-text-input')?.focus();
    }, 100);
  }

  function saveTadabburNote(surahId, verseNum) {
    const input = document.getElementById('tadabbur-text-input');
    if (!input) return;
    const text = input.value.trim();
    const notes = getAyahNotes();
    const key = `${surahId}:${verseNum}`;

    if (text) {
      notes[key] = {
        text: text,
        surahId: surahId,
        verseNum: verseNum,
        date: new Date().toLocaleDateString()
      };
    } else {
      delete notes[key];
    }

    localStorage.setItem('qh_ayah_notes', JSON.stringify(notes));
    document.getElementById('tadabbur-modal-overlay')?.remove();

    if (typeof window.showToast === 'function') {
      const t = getI18n();
      window.showToast(t.tadabburToastSaved, 'success');
    }

    // Update note badge in reader if visible
    if (typeof window.renderVerses === 'function' && window.state && window.state.currentSurah === surahId) {
      window.renderVerses(surahId);
    }
  }

  function deleteTadabburNote(surahId, verseNum) {
    const notes = getAyahNotes();
    const key = `${surahId}:${verseNum}`;
    delete notes[key];
    localStorage.setItem('qh_ayah_notes', JSON.stringify(notes));
    document.getElementById('tadabbur-modal-overlay')?.remove();

    if (typeof window.showToast === 'function') {
      window.showToast('🗑️ Catatan tadabbur dihapus', 'info');
    }

    if (typeof window.renderVerses === 'function' && window.state && window.state.currentSurah === surahId) {
      window.renderVerses(surahId);
    }
  }

  // ============================================================
  // 10. INJECT STYLES FOR THE ENTIRE SUITE
  // ============================================================
  function injectIbadahStyles() {
    if (document.getElementById('ibadah-suite-styles')) return;
    const style = document.createElement('style');
    style.id = 'ibadah-suite-styles';
    style.textContent = `
      /* ─── Ibadah Suite Container ─── */
      .ibadah-page-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 24px 20px 60px;
      }
      .ibadah-header-banner {
        background: linear-gradient(135deg, #09261f 0%, #11382b 60%, #1e4a3a 100%);
        border: 1px solid rgba(229,192,123,0.3);
        border-radius: 20px;
        padding: 32px 30px;
        margin-bottom: 28px;
        color: #e8f5e9;
        box-shadow: 0 10px 30px rgba(0,0,0,0.35);
        position: relative;
        overflow: hidden;
      }
      .ibadah-header-title {
        font-family: 'Playfair Display', serif;
        font-size: 2rem;
        font-weight: 700;
        color: #fbfbf8;
        margin-bottom: 8px;
      }
      .ibadah-header-desc {
        color: rgba(255,255,255,0.85);
        font-size: 0.95rem;
        max-width: 680px;
        line-height: 1.6;
      }

      /* ─── Ibadah Sub-Navigation Tabs ─── */
      .ibadah-nav-tabs {
        display: flex;
        gap: 10px;
        overflow-x: auto;
        padding-bottom: 8px;
        margin-bottom: 24px;
        scrollbar-width: thin;
      }
      .ibadah-tab-btn {
        background: var(--bg-card, #ffffff);
        border: 1px solid var(--border, #e0e0e0);
        color: var(--text-secondary, #555);
        padding: 10px 18px;
        border-radius: 25px;
        font-size: 0.88rem;
        font-weight: 600;
        cursor: pointer;
        white-space: nowrap;
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        display: inline-flex;
        align-items: center;
        gap: 7px;
      }
      .ibadah-tab-btn:hover {
        background: var(--bg-hover, #f5f5f5);
        color: var(--text-primary, #111);
        transform: translateY(-1px);
      }
      .ibadah-tab-btn.active {
        background: linear-gradient(135deg, #0d382d 0%, #165b4c 100%);
        color: #ffffff;
        border-color: #0d382d;
        box-shadow: 0 4px 14px rgba(13, 56, 45, 0.3);
      }

      /* ─── TASBIH DIGITAL UI ─── */
      .tasbih-wrapper {
        background: var(--bg-card, #ffffff);
        border: 1px solid var(--border, #e5e5e5);
        border-radius: 20px;
        padding: 36px 24px;
        text-align: center;
        box-shadow: 0 8px 24px rgba(0,0,0,0.06);
        max-width: 720px;
        margin: 0 auto;
      }
      .tasbih-presets-row {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        justify-content: center;
        margin-bottom: 26px;
      }
      .tasbih-chip {
        background: rgba(13, 56, 45, 0.06);
        border: 1px solid rgba(13, 56, 45, 0.15);
        color: var(--text-primary, #0d382d);
        font-size: 0.82rem;
        font-weight: 600;
        padding: 7px 14px;
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.2s;
      }
      .tasbih-chip.active {
        background: #0d382d;
        color: #fff;
        border-color: #0d382d;
      }
      .tasbih-circle-btn {
        width: 220px;
        height: 220px;
        border-radius: 50%;
        background: radial-gradient(circle at 35% 35%, #165b4c 0%, #0d382d 70%, #061e18 100%);
        border: none;
        margin: 0 auto 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #fbfbf8;
        cursor: pointer;
        box-shadow: 0 14px 35px rgba(13, 56, 45, 0.4), inset 0 2px 4px rgba(255,255,255,0.25);
        position: relative;
        user-select: none;
        touch-action: manipulation;
        transition: transform 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      .tasbih-circle-btn:active {
        transform: scale(0.95);
        box-shadow: 0 6px 18px rgba(13, 56, 45, 0.3);
      }
      .tasbih-svg-ring {
        position: absolute;
        top: 0; left: 0;
        width: 220px; height: 220px;
        pointer-events: none;
      }
      .tasbih-ring-bg {
        fill: none;
        stroke: rgba(229,192,123,0.2);
        stroke-width: 6;
      }
      .tasbih-ring-fill {
        fill: none;
        stroke: #e5c07b;
        stroke-width: 6;
        stroke-linecap: round;
        transition: stroke-dashoffset 0.18s ease;
      }
      .tasbih-main-count {
        font-size: 3.6rem;
        font-weight: 800;
        line-height: 1;
        color: #ffffff;
        font-family: 'Inter', sans-serif;
      }
      .tasbih-target-hint {
        font-size: 0.95rem;
        color: #e5c07b;
        font-weight: 600;
        margin-top: 4px;
      }
      .tasbih-press-hint {
        font-size: 0.72rem;
        color: rgba(255,255,255,0.7);
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-top: 6px;
      }
      .tasbih-text-card {
        background: rgba(13, 56, 45, 0.04);
        border: 1px solid rgba(13, 56, 45, 0.1);
        border-radius: 14px;
        padding: 18px 20px;
        margin-bottom: 22px;
      }
      .tasbih-ar {
        font-family: 'Amiri', serif;
        font-size: 1.8rem;
        color: var(--text-primary, #0d382d);
        margin-bottom: 6px;
        line-height: 1.5;
      }
      .tasbih-latin {
        font-size: 0.92rem;
        font-weight: 600;
        color: var(--gold, #b8860b);
        margin-bottom: 4px;
      }
      .tasbih-trans {
        font-size: 0.88rem;
        color: var(--text-secondary, #666);
        font-style: italic;
      }
      .tasbih-meta-row {
        display: flex;
        justify-content: space-around;
        padding: 14px;
        background: var(--bg-hover, #f8f9fa);
        border-radius: 12px;
        margin-bottom: 20px;
      }
      .tasbih-meta-item span {
        display: block;
        font-size: 0.75rem;
        color: var(--text-muted, #888);
        text-transform: uppercase;
      }
      .tasbih-meta-item strong {
        font-size: 1.25rem;
        color: var(--text-primary, #111);
      }
      .tasbih-controls-row {
        display: flex;
        justify-content: center;
        gap: 12px;
      }

      /* ─── KOMPAS ARAH KIBLAT UI ─── */
      .qibla-wrapper {
        background: var(--bg-card, #ffffff);
        border: 1px solid var(--border, #e5e5e5);
        border-radius: 20px;
        padding: 32px 24px;
        text-align: center;
        max-width: 680px;
        margin: 0 auto;
        box-shadow: 0 8px 24px rgba(0,0,0,0.06);
      }
      .qibla-compass-container {
        position: relative;
        width: 260px;
        height: 260px;
        margin: 0 auto 24px;
      }
      .qibla-compass-dial {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 8px solid #0d382d;
        background: radial-gradient(circle, #fbfbf8 40%, #e8f5e9 100%);
        box-shadow: 0 10px 30px rgba(13, 56, 45, 0.2), inset 0 2px 8px rgba(0,0,0,0.1);
        position: absolute;
        top: 0; left: 0;
        transition: transform 0.3s ease-out;
      }
      .compass-cardinal {
        position: absolute;
        font-weight: 800;
        font-size: 0.9rem;
        color: #0d382d;
      }
      .cardinal-n { top: 8px; left: 50%; transform: translateX(-50%); color: #d32f2f; }
      .cardinal-e { right: 10px; top: 50%; transform: translateY(-50%); }
      .cardinal-s { bottom: 8px; left: 50%; transform: translateX(-50%); }
      .cardinal-w { left: 10px; top: 50%; transform: translateY(-50%); }

      .qibla-needle {
        position: absolute;
        top: 50%; left: 50%;
        width: 12px;
        height: 105px;
        margin-left: -6px;
        margin-top: -105px;
        transform-origin: 50% 100%;
        transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        z-index: 5;
        pointer-events: none;
      }
      .qibla-needle::before {
        content: "";
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background: linear-gradient(to bottom, #d4af37 0%, #b8860b 80%, #0d382d 100%);
        clip-path: polygon(50% 0%, 100% 100%, 50% 85%, 0% 100%);
        filter: drop-shadow(0 2px 5px rgba(0,0,0,0.3));
      }
      .qibla-needle-kaaba-icon {
        position: absolute;
        top: -24px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 1.3rem;
      }
      .qibla-needle-pivot {
        position: absolute;
        top: 50%; left: 50%;
        width: 18px; height: 18px;
        margin-left: -9px; margin-top: -9px;
        background: #0d382d;
        border: 3px solid #e5c07b;
        border-radius: 50%;
        z-index: 10;
      }
      .qibla-info-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
        margin: 20px 0;
      }
      .qibla-info-card {
        background: var(--bg-hover, #f8f9fa);
        padding: 14px 10px;
        border-radius: 12px;
      }
      .qibla-info-card .q-lbl {
        font-size: 0.75rem;
        color: var(--text-muted, #777);
        text-transform: uppercase;
      }
      .qibla-info-card .q-val {
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--text-primary, #0d382d);
        margin-top: 2px;
      }

      /* ─── KHATAM 30 JUZ TRACKER UI ─── */
      .khatam-progress-banner {
        background: var(--bg-card, #ffffff);
        border: 1px solid var(--border, #e0e0e0);
        border-radius: 16px;
        padding: 22px 24px;
        margin-bottom: 24px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.04);
      }
      .khatam-progress-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
      }
      .khatam-progress-track {
        height: 12px;
        background: rgba(13, 56, 45, 0.1);
        border-radius: 10px;
        overflow: hidden;
      }
      .khatam-progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #165b4c 0%, #e5c07b 100%);
        border-radius: 10px;
        transition: width 0.4s ease;
      }
      .khatam-juz-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 14px;
      }
      .khatam-juz-card {
        background: var(--bg-card, #ffffff);
        border: 1px solid var(--border, #e5e5e5);
        border-radius: 14px;
        padding: 16px;
        transition: all 0.2s ease;
        position: relative;
      }
      .khatam-juz-card.completed {
        background: rgba(13, 56, 45, 0.04);
        border-color: rgba(22, 91, 76, 0.35);
      }
      .khatam-juz-card.completed::after {
        content: "✓";
        position: absolute;
        top: 10px; right: 12px;
        color: #165b4c;
        font-weight: 800;
        font-size: 1.1rem;
      }
      .kj-top-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 6px;
      }
      .kj-badge {
        font-size: 0.72rem;
        background: #0d382d;
        color: #fff;
        padding: 2px 8px;
        border-radius: 10px;
        font-weight: 700;
      }
      .kj-ar-name {
        font-family: 'Amiri', serif;
        font-size: 1.1rem;
        color: var(--gold, #b8860b);
      }
      .kj-name {
        font-weight: 700;
        font-size: 0.95rem;
        color: var(--text-primary, #111);
        margin-bottom: 2px;
      }
      .kj-meta {
        font-size: 0.78rem;
        color: var(--text-muted, #777);
        margin-bottom: 12px;
        line-height: 1.4;
      }
      .kj-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px dashed var(--border, #eee);
        padding-top: 10px;
      }
      .kj-read-btn {
        background: none;
        border: 1px solid var(--border, #ccc);
        padding: 4px 10px;
        border-radius: 8px;
        font-size: 0.75rem;
        cursor: pointer;
        color: var(--text-primary, #222);
      }
      .kj-read-btn:hover {
        background: #0d382d;
        color: #fff;
      }
      .kj-check-label {
        font-size: 0.78rem;
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        color: var(--text-secondary, #555);
      }

      /* ─── DO\'A RABBANA & HARIAN UI ─── */
      .doa-search-bar {
        display: flex;
        gap: 10px;
        margin-bottom: 16px;
      }
      .doa-search-input {
        flex: 1;
        padding: 12px 18px;
        border-radius: 12px;
        border: 1px solid var(--border, #ccc);
        background: var(--bg-card, #fff);
        color: var(--text-primary, #111);
        font-size: 0.92rem;
      }
      .doa-filter-row {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin-bottom: 24px;
      }
      .doa-filter-chip {
        padding: 7px 14px;
        border-radius: 20px;
        border: 1px solid var(--border, #ccc);
        background: var(--bg-card, #fff);
        color: var(--text-secondary, #555);
        font-size: 0.82rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
      }
      .doa-filter-chip.active {
        background: #0d382d;
        color: #fff;
        border-color: #0d382d;
      }
      .doa-cards-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 18px;
      }
      .doa-card {
        background: var(--bg-card, #fff);
        border: 1px solid var(--border, #e5e5e5);
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.04);
        display: flex;
        flex-direction: column;
        transition: transform 0.2s, box-shadow 0.2s;
      }
      .doa-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(0,0,0,0.08);
      }
      .doa-card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
      }
      .doa-cat-badge {
        font-size: 0.72rem;
        font-weight: 700;
        padding: 2px 8px;
        border-radius: 8px;
      }
      .doa-cat-badge.rabbana {
        background: rgba(229,192,123,0.2);
        color: #b8860b;
      }
      .doa-cat-badge.harian {
        background: rgba(45,106,79,0.15);
        color: #2d6a4f;
      }
      .doa-ref-badge {
        font-size: 0.72rem;
        color: var(--text-muted, #777);
        font-weight: 600;
      }
      .doa-fav-btn {
        background: none;
        border: none;
        font-size: 1.25rem;
        cursor: pointer;
        color: #ccc;
        transition: color 0.2s;
      }
      .doa-fav-btn.active {
        color: #f4d03f;
      }
      .doa-title {
        font-size: 1.05rem;
        font-weight: 700;
        color: var(--text-primary, #111);
        margin-bottom: 12px;
      }
      .doa-arabic-box {
        font-family: 'Amiri', serif;
        font-size: 1.45rem;
        line-height: 1.8;
        direction: rtl;
        text-align: right;
        color: var(--text-primary, #0d382d);
        margin-bottom: 12px;
        background: rgba(13, 56, 45, 0.03);
        padding: 12px 14px;
        border-radius: 10px;
      }
      .doa-latin-box {
        font-size: 0.85rem;
        color: var(--gold, #b8860b);
        font-weight: 500;
        margin-bottom: 8px;
        line-height: 1.5;
      }
      .doa-trans-box {
        font-size: 0.88rem;
        color: var(--text-secondary, #555);
        line-height: 1.5;
        margin-bottom: 12px;
        flex: 1;
      }
      .doa-context-box {
        font-size: 0.78rem;
        background: var(--bg-hover, #f8f9fa);
        padding: 8px 12px;
        border-radius: 8px;
        color: var(--text-muted, #666);
        margin-bottom: 14px;
        line-height: 1.4;
      }
      .doa-footer-actions {
        display: flex;
        gap: 6px;
        border-top: 1px solid var(--border, #eee);
        padding-top: 12px;
      }
      .doa-action-btn {
        background: none;
        border: 1px solid var(--border, #ddd);
        padding: 6px 12px;
        border-radius: 8px;
        font-size: 0.75rem;
        font-weight: 600;
        cursor: pointer;
        color: var(--text-secondary, #444);
        display: inline-flex;
        align-items: center;
        gap: 4px;
        transition: all 0.15s;
      }
      .doa-action-btn:hover {
        background: var(--bg-hover, #f5f5f5);
        color: var(--text-primary, #111);
      }
      .doa-action-btn.highlight {
        background: rgba(13, 56, 45, 0.08);
        border-color: #0d382d;
        color: #0d382d;
      }
      .doa-action-btn.highlight:hover {
        background: #0d382d;
        color: #fff;
      }

      /* ─── TADABBUR NOTES UI ─── */
      .tadabbur-textarea {
        width: 100%;
        height: 130px;
        border-radius: 12px;
        border: 1px solid var(--border, #ccc);
        padding: 12px 14px;
        font-family: inherit;
        font-size: 0.92rem;
        resize: vertical;
        box-sizing: border-box;
        background: var(--bg-card, #fff);
        color: var(--text-primary, #111);
      }
      .tadabbur-textarea:focus {
        outline: none;
        border-color: #0d382d;
        box-shadow: 0 0 0 3px rgba(13, 56, 45, 0.15);
      }
      .verse-note-badge {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        background: rgba(229,192,123,0.18);
        border: 1px solid rgba(229,192,123,0.35);
        color: #b8860b;
        font-size: 0.76rem;
        font-weight: 600;
        padding: 3px 9px;
        border-radius: 8px;
        cursor: pointer;
        margin-top: 6px;
      }
      .verse-note-badge:hover {
        background: rgba(229,192,123,0.3);
      }
    `;
    document.head.appendChild(style);
  }

  // ============================================================
  // 11. SWITCHER BETWEEN IBADAH SUB-TABS
  // ============================================================
  function switchIbadahSubTab(tabName) {
    document.querySelectorAll('.ibadah-tab-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.sub === tabName);
    });

    ['tasbih', 'doa', 'kiblat', 'khatam', 'tadabbur'].forEach(name => {
      const el = document.getElementById(`ibadah-view-${name}`);
      if (el) el.style.display = (name === tabName) ? 'block' : 'none';
    });

    if (tabName === 'kiblat') {
      detectDeviceQibla();
    } else if (tabName === 'khatam') {
      renderKhatamTracker();
    } else if (tabName === 'doa') {
      renderDoaGrid();
    } else if (tabName === 'tasbih') {
      updateTasbihUI();
    } else if (tabName === 'tadabbur') {
      renderTadabburJournalList();
    }
  }

  function renderTadabburJournalList() {
    const container = document.getElementById('tadabbur-notes-list');
    if (!container) return;

    const notes = getAyahNotes();
    const keys = Object.keys(notes);
    const t = getI18n();

    if (keys.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 48px 20px; background: var(--bg-card); border-radius: 16px; border: 1px dashed var(--border);">
          <div style="font-size: 2.2rem; margin-bottom: 8px;">📝</div>
          <div style="font-weight: 700; color: var(--text-primary);">${t.tadabburEmptyTitle}</div>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">
            ${t.tadabburEmptyDesc}
          </p>
        </div>
      `;
      return;
    }

    container.innerHTML = keys.map(key => {
      const [surahId, verseNum] = key.split(':');
      const item = notes[key];
      const surah = (window.ALL_SURAHS || []).find(s => s.id === parseInt(surahId)) || { name: `Surah ${surahId}` };

      return `
        <div class="doa-card" style="margin-bottom: 14px;">
          <div class="doa-card-header">
            <span class="doa-cat-badge rabbana">📖 QS. ${surah.name} : ${verseNum}</span>
            <span style="font-size: 0.75rem; color: var(--text-muted);">${item.date || ''}</span>
          </div>
          <div style="font-size: 0.95rem; line-height: 1.6; color: var(--text-primary); margin: 10px 0; white-space: pre-wrap;">${item.text}</div>
          <div style="display:flex; justify-content:space-between; align-items:center; border-top: 1px solid var(--border); padding-top: 10px;">
            <button class="doa-action-btn highlight" onclick="openDoaInQuran(${surahId}, ${verseNum})">
              ${t.tadabburBtnOpen}
            </button>
            <button class="doa-action-btn" onclick="openTadabburModal(${surahId}, ${verseNum})">
              ${t.tadabburBtnEdit}
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // ============================================================
  // 11. DYNAMIC LANGUAGE UPDATER
  // ============================================================
  function updateIbadahLanguage(lang) {
    if (!lang) lang = getCurLang();
    const t = IBADAH_I18N[lang] || IBADAH_I18N.en || IBADAH_I18N.id;

    // Header & Tabs
    const kickerEl = document.getElementById('ibadah-kicker');
    if (kickerEl) kickerEl.textContent = t.ibadahKicker;
    const titleEl = document.getElementById('ibadah-title');
    if (titleEl) titleEl.textContent = t.ibadahTitle;
    const descEl = document.getElementById('ibadah-desc');
    if (descEl) descEl.textContent = t.ibadahDesc;

    const tabTasbih = document.getElementById('ib-tab-tasbih');
    if (tabTasbih) tabTasbih.textContent = t.tabTasbih;
    const tabDoa = document.getElementById('ib-tab-doa');
    if (tabDoa) tabDoa.textContent = t.tabDoa;
    const tabKiblat = document.getElementById('ib-tab-kiblat');
    if (tabKiblat) tabKiblat.textContent = t.tabKiblat;
    const tabKhatam = document.getElementById('ib-tab-khatam');
    if (tabKhatam) tabKhatam.textContent = t.tabKhatam;
    const tabTadabbur = document.getElementById('ib-tab-tadabbur');
    if (tabTadabbur) tabTadabbur.textContent = t.tabTadabbur;

    // Tasbih Preset Chips
    document.querySelectorAll('.tasbih-chip').forEach(chip => {
      const pId = chip.dataset.id;
      const p = TASBIH_PRESETS.find(item => item.id === pId);
      if (p) {
        const pText = getPresetText(p, lang);
        chip.textContent = pText.title;
      }
    });

    // Tasbih hints & buttons
    const pressHint = document.getElementById('tasbih-press-hint');
    if (pressHint) pressHint.textContent = t.tasbihPressHint;
    const lapsLabel = document.getElementById('tasbih-laps-label');
    if (lapsLabel) lapsLabel.textContent = t.tasbihLapsLabel;
    const dailyLabel = document.getElementById('tasbih-daily-label');
    if (dailyLabel) dailyLabel.textContent = t.tasbihDailyLabel;
    const resetBtn = document.getElementById('tasbih-reset-btn');
    if (resetBtn) resetBtn.textContent = t.tasbihResetBtn;
    const soundBtn = document.getElementById('tasbih-sound-btn');
    if (soundBtn) {
      const isSoundOn = localStorage.getItem('qh_tasbih_sound') !== 'false';
      soundBtn.textContent = isSoundOn ? t.tasbihSoundOn : t.tasbihSoundOff;
    }

    // Kiblat Texts
    const qiblaTitle = document.getElementById('qibla-title');
    if (qiblaTitle) qiblaTitle.textContent = t.qiblaTitle;
    const qiblaDesc = document.getElementById('qibla-desc');
    if (qiblaDesc) qiblaDesc.textContent = t.qiblaDesc;
    const qiblaLblAngle = document.getElementById('qibla-lbl-angle');
    if (qiblaLblAngle) qiblaLblAngle.textContent = t.qiblaLblAngle;
    const qiblaLblCardinal = document.getElementById('qibla-lbl-cardinal');
    if (qiblaLblCardinal) qiblaLblCardinal.textContent = t.qiblaLblCardinal;
    const qiblaLblDist = document.getElementById('qibla-lbl-dist');
    if (qiblaLblDist) qiblaLblDist.textContent = t.qiblaLblDist;
    const qiblaRefLabel = document.getElementById('qibla-ref-label');
    if (qiblaRefLabel) qiblaRefLabel.textContent = t.qiblaRefLabel;
    const qiblaGpsBtn = document.getElementById('qibla-gps-btn');
    if (qiblaGpsBtn) qiblaGpsBtn.textContent = t.qiblaGpsBtn;

    // Doa Search input & Filters
    const doaSearchInput = document.getElementById('doa-search-input');
    if (doaSearchInput) doaSearchInput.placeholder = t.doaSearchPlaceholder;
    const filterAll = document.getElementById('doa-filter-chip-all');
    if (filterAll) filterAll.textContent = t.doaFilterAll;
    const filterRabbana = document.getElementById('doa-filter-chip-rabbana');
    if (filterRabbana) filterRabbana.textContent = t.doaFilterRabbana;
    const filterHarian = document.getElementById('doa-filter-chip-harian');
    if (filterHarian) filterHarian.textContent = t.doaFilterHarian;
    const filterFav = document.getElementById('doa-filter-chip-fav');
    if (filterFav) filterFav.textContent = t.doaFilterFav;

    // Khatam Texts
    const khatamTitle = document.getElementById('khatam-title');
    if (khatamTitle) khatamTitle.textContent = t.khatamTitle;
    const khatamDesc = document.getElementById('khatam-desc');
    if (khatamDesc) khatamDesc.textContent = t.khatamDesc;

    // Tadabbur Texts
    const tadabburTitle = document.getElementById('tadabbur-title');
    if (tadabburTitle) tadabburTitle.textContent = t.tadabburTitle;
    const tadabburDesc = document.getElementById('tadabbur-desc');
    if (tadabburDesc) tadabburDesc.textContent = t.tadabburDesc;

    // Re-render sub components
    updateTasbihUI();
    updateQiblaCompassUI();
    renderKhatamTracker();
    renderDoaGrid();
    renderTadabburJournalList();
  }

  // ============================================================
  // 12. INITIALIZATION & EXPORTS
  // ============================================================
  function initIbadahSuite() {
    injectIbadahStyles();

    // Event listener for Doa Search
    const searchInput = document.getElementById('doa-search-input');
    searchInput?.addEventListener('input', (e) => {
      currentDoaSearch = e.target.value.trim();
      renderDoaGrid();
    });

    // Auto-sync location with prayer times location
    if (window._pw && window._pw.lat && window._pw.lng) {
      qiblaBearing = calculateQiblaDirection(window._pw.lat, window._pw.lng);
      userLocationName = window._pw.locationName;
    }

    // Attach to window for global access
    window.incrementTasbih         = incrementTasbih;
    window.resetTasbih             = resetTasbih;
    window.selectTasbihPreset      = selectTasbihPreset;
    window.switchIbadahSubTab      = switchIbadahSubTab;
    window.toggleJuzCompleted      = toggleJuzCompleted;
    window.openJuzReader           = openJuzReader;
    window.toggleFavoriteDoa       = toggleFavoriteDoa;
    window.copyDoaText             = copyDoaText;
    window.openDoaInQuran          = openDoaInQuran;
    window.shareDoaModal           = shareDoaModal;
    window.openTadabburModal       = openTadabburModal;
    window.saveTadabburNote        = saveTadabburNote;
    window.deleteTadabburNote      = deleteTadabburNote;
    window.detectDeviceQibla       = detectDeviceQibla;
    window.updateIbadahLanguage    = updateIbadahLanguage;
    window.setDoaCategoryFilter    = function(cat) {
      currentDoaFilter = cat;
      document.querySelectorAll('.doa-filter-chip').forEach(c => c.classList.toggle('active', c.dataset.cat === cat));
      renderDoaGrid();
    };

    updateIbadahLanguage(getCurLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initIbadahSuite);
  } else {
    initIbadahSuite();
  }

})();

