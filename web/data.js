// ═══════════════════════════════════════════════════════════
// DATA.JS — Dataset Lengkap Al-Qur'an Harmony, Sejarah, Qori
// Quran Harmony — Spiritual Journey
// ═══════════════════════════════════════════════════════════

const ALL_SURAHS = [
  {
    "id": 1,
    "name": "Al-Faatiha",
    "arTitle": "سُوْرَةُ الفَاتِحَةِ",
    "ar": "الفَاتِحَة",
    "type": "MECCAN",
    "ayat": 7
  },
  {
    "id": 2,
    "name": "Al-Baqara",
    "arTitle": "سُوْرَةُ البَقَرَةِ",
    "ar": "البَقَرَة",
    "type": "MEDINAN",
    "ayat": 286
  },
  {
    "id": 3,
    "name": "Aal-i-Imraan",
    "arTitle": "سُوْرَةُ آلِ عِمْرَانَ",
    "ar": "آلِ عِمْرَان",
    "type": "MEDINAN",
    "ayat": 200
  },
  {
    "id": 4,
    "name": "An-Nisaa",
    "arTitle": "سُوْرَةُ النِّسَاءِ",
    "ar": "النِّسَاء",
    "type": "MEDINAN",
    "ayat": 176
  },
  {
    "id": 5,
    "name": "Al-Maaida",
    "arTitle": "سُوْرَةُ المَائِدَةِ",
    "ar": "المَائِدَة",
    "type": "MEDINAN",
    "ayat": 120
  },
  {
    "id": 6,
    "name": "Al-An'aam",
    "arTitle": "سُوْرَةُ الأَنْعَامِ",
    "ar": "الأَنْعَام",
    "type": "MECCAN",
    "ayat": 165
  },
  {
    "id": 7,
    "name": "Al-A'raaf",
    "arTitle": "سُوْرَةُ الأَعْرَافِ",
    "ar": "الأَعْرَاف",
    "type": "MECCAN",
    "ayat": 206
  },
  {
    "id": 8,
    "name": "Al-Anfaal",
    "arTitle": "سُوْرَةُ الأَنْفَالِ",
    "ar": "الأَنْفَال",
    "type": "MEDINAN",
    "ayat": 75
  },
  {
    "id": 9,
    "name": "At-Tawba",
    "arTitle": "سُوْرَةُ التَّوْبَةِ",
    "ar": "التَّوْبَة",
    "type": "MEDINAN",
    "ayat": 129
  },
  {
    "id": 10,
    "name": "Yunus",
    "arTitle": "سُوْرَةُ يُوْنُسَ",
    "ar": "يُوْنُس",
    "type": "MECCAN",
    "ayat": 109
  },
  {
    "id": 11,
    "name": "Hud",
    "arTitle": "سُوْرَةُ هُوْدٍ",
    "ar": "هُوْد",
    "type": "MECCAN",
    "ayat": 123
  },
  {
    "id": 12,
    "name": "Yusuf",
    "arTitle": "سُوْرَةُ يُوْسُفَ",
    "ar": "يُوْسُف",
    "type": "MECCAN",
    "ayat": 111
  },
  {
    "id": 13,
    "name": "Ar-Ra'd",
    "arTitle": "سُوْرَةُ الرَّعْدِ",
    "ar": "الرَّعْد",
    "type": "MEDINAN",
    "ayat": 43
  },
  {
    "id": 14,
    "name": "Ibrahim",
    "arTitle": "سُوْرَةُ إِبْرَاهِيمَ",
    "ar": "إِبْرَاهِيم",
    "type": "MECCAN",
    "ayat": 52
  },
  {
    "id": 15,
    "name": "Al-Hijr",
    "arTitle": "سُوْرَةُ الحِجْرِ",
    "ar": "الحِجْر",
    "type": "MECCAN",
    "ayat": 99
  },
  {
    "id": 16,
    "name": "An-Nahl",
    "arTitle": "سُوْرَةُ النَّحْلِ",
    "ar": "النَّحْل",
    "type": "MECCAN",
    "ayat": 128
  },
  {
    "id": 17,
    "name": "Al-Israa",
    "arTitle": "سُوْرَةُ الإِسْرَاءِ",
    "ar": "الإِسْرَاء",
    "type": "MECCAN",
    "ayat": 111
  },
  {
    "id": 18,
    "name": "Al-Kahf",
    "arTitle": "سُوْرَةُ الكَهْفِ",
    "ar": "الكَهْف",
    "type": "MECCAN",
    "ayat": 110
  },
  {
    "id": 19,
    "name": "Maryam",
    "arTitle": "سُوْرَةُ مَرْيَمَ",
    "ar": "مَرْيَم",
    "type": "MECCAN",
    "ayat": 98
  },
  {
    "id": 20,
    "name": "Taa-Haa",
    "arTitle": "سُوْرَةُ طٰهٰ",
    "ar": "طٰهٰ",
    "type": "MECCAN",
    "ayat": 135
  },
  {
    "id": 21,
    "name": "Al-Anbiyaa",
    "arTitle": "سُوْرَةُ الأَنْبِيَاءِ",
    "ar": "الأَنْبِيَاء",
    "type": "MECCAN",
    "ayat": 112
  },
  {
    "id": 22,
    "name": "Al-Hajj",
    "arTitle": "سُوْرَةُ الحَجِّ",
    "ar": "الحَجّ",
    "type": "MEDINAN",
    "ayat": 78
  },
  {
    "id": 23,
    "name": "Al-Mu'minoon",
    "arTitle": "سُوْرَةُ المُؤْمِنُونَ",
    "ar": "المُؤْمِنُون",
    "type": "MECCAN",
    "ayat": 118
  },
  {
    "id": 24,
    "name": "An-Noor",
    "arTitle": "سُوْرَةُ النُّورِ",
    "ar": "النُّور",
    "type": "MEDINAN",
    "ayat": 64
  },
  {
    "id": 25,
    "name": "Al-Furqaan",
    "arTitle": "سُوْرَةُ الفُرْقَانِ",
    "ar": "الفُرْقَان",
    "type": "MECCAN",
    "ayat": 77
  },
  {
    "id": 26,
    "name": "Ash-Shu'araa",
    "arTitle": "سُوْرَةُ الشُّعَرَاءِ",
    "ar": "الشُّعَرَاء",
    "type": "MECCAN",
    "ayat": 227
  },
  {
    "id": 27,
    "name": "An-Naml",
    "arTitle": "سُوْرَةُ النَّمْلِ",
    "ar": "النَّمْل",
    "type": "MECCAN",
    "ayat": 93
  },
  {
    "id": 28,
    "name": "Al-Qasas",
    "arTitle": "سُوْرَةُ القَصَصِ",
    "ar": "القَصَص",
    "type": "MECCAN",
    "ayat": 88
  },
  {
    "id": 29,
    "name": "Al-Ankaboot",
    "arTitle": "سُوْرَةُ العَنْكَبُوتِ",
    "ar": "العَنْكَبُوت",
    "type": "MECCAN",
    "ayat": 69
  },
  {
    "id": 30,
    "name": "Ar-Room",
    "arTitle": "سُوْرَةُ الرُّومِ",
    "ar": "الرُّوم",
    "type": "MECCAN",
    "ayat": 60
  },
  {
    "id": 31,
    "name": "Luqman",
    "arTitle": "سُوْرَةُ لُقْمَانَ",
    "ar": "لُقْمَان",
    "type": "MECCAN",
    "ayat": 34
  },
  {
    "id": 32,
    "name": "As-Sajda",
    "arTitle": "سُوْرَةُ السَّجْدَةِ",
    "ar": "السَّجْدَة",
    "type": "MECCAN",
    "ayat": 30
  },
  {
    "id": 33,
    "name": "Al-Ahzaab",
    "arTitle": "سُوْرَةُ الأَحْزَابِ",
    "ar": "الأَحْزَاب",
    "type": "MEDINAN",
    "ayat": 73
  },
  {
    "id": 34,
    "name": "Saba",
    "arTitle": "سُوْرَةُ سَبَإٍ",
    "ar": "سَبَأ",
    "type": "MECCAN",
    "ayat": 54
  },
  {
    "id": 35,
    "name": "Faatir",
    "arTitle": "سُوْرَةُ فَاطِرٍ",
    "ar": "فَاطِر",
    "type": "MECCAN",
    "ayat": 45
  },
  {
    "id": 36,
    "name": "Yaa-Seen",
    "arTitle": "سُوْرَةُ يٰسٓ",
    "ar": "يسٓ",
    "type": "MECCAN",
    "ayat": 83
  },
  {
    "id": 37,
    "name": "As-Saaffaat",
    "arTitle": "سُوْرَةُ الصَّافَّاتِ",
    "ar": "الصَّافَّات",
    "type": "MECCAN",
    "ayat": 182
  },
  {
    "id": 38,
    "name": "Saad",
    "arTitle": "سُوْرَةُ صٓ",
    "ar": "صٓ",
    "type": "MECCAN",
    "ayat": 88
  },
  {
    "id": 39,
    "name": "Az-Zumar",
    "arTitle": "سُوْرَةُ الزُّمَرِ",
    "ar": "الزُّمَر",
    "type": "MECCAN",
    "ayat": 75
  },
  {
    "id": 40,
    "name": "Ghafir",
    "arTitle": "سُوْرَةُ غَافِرٍ",
    "ar": "غَافِر",
    "type": "MECCAN",
    "ayat": 85
  },
  {
    "id": 41,
    "name": "Fussilat",
    "arTitle": "سُوْرَةُ فُصِّلَتْ",
    "ar": "فُصِّلَت",
    "type": "MECCAN",
    "ayat": 54
  },
  {
    "id": 42,
    "name": "Ash-Shoora",
    "arTitle": "سُوْرَةُ الشُّورَىٰ",
    "ar": "الشُّورَى",
    "type": "MECCAN",
    "ayat": 53
  },
  {
    "id": 43,
    "name": "Az-Zukhruf",
    "arTitle": "سُوْرَةُ الزُّخْرُفِ",
    "ar": "الزُّخْرُف",
    "type": "MECCAN",
    "ayat": 89
  },
  {
    "id": 44,
    "name": "Ad-Dukhaan",
    "arTitle": "سُوْرَةُ الدُّخَانِ",
    "ar": "الدُّخَان",
    "type": "MECCAN",
    "ayat": 59
  },
  {
    "id": 45,
    "name": "Al-Jaathiya",
    "arTitle": "سُوْرَةُ الجَاثِيَةِ",
    "ar": "الجَاثِيَة",
    "type": "MECCAN",
    "ayat": 37
  },
  {
    "id": 46,
    "name": "Al-Ahqaf",
    "arTitle": "سُوْرَةُ الأَحْقَافِ",
    "ar": "الأَحْقَاف",
    "type": "MECCAN",
    "ayat": 35
  },
  {
    "id": 47,
    "name": "Muhammad",
    "arTitle": "سُوْرَةُ مُحَمَّدٍ",
    "ar": "مُحَمَّد",
    "type": "MEDINAN",
    "ayat": 38
  },
  {
    "id": 48,
    "name": "Al-Fat-h",
    "arTitle": "سُوْرَةُ الفَتْحِ",
    "ar": "الفَتْح",
    "type": "MEDINAN",
    "ayat": 29
  },
  {
    "id": 49,
    "name": "Al-Hujuraat",
    "arTitle": "سُوْرَةُ الحُجُرَاتِ",
    "ar": "الحُجُرَات",
    "type": "MEDINAN",
    "ayat": 18
  },
  {
    "id": 50,
    "name": "Qaaf",
    "arTitle": "سُوْرَةُ قٓ",
    "ar": "قٓ",
    "type": "MECCAN",
    "ayat": 45
  },
  {
    "id": 51,
    "name": "Adh-Dhaariyaat",
    "arTitle": "سُوْرَةُ الذَّارِيَاتِ",
    "ar": "الذَّارِيَات",
    "type": "MECCAN",
    "ayat": 60
  },
  {
    "id": 52,
    "name": "At-Toor",
    "arTitle": "سُوْرَةُ الطُّورِ",
    "ar": "الطُّور",
    "type": "MECCAN",
    "ayat": 49
  },
  {
    "id": 53,
    "name": "An-Najm",
    "arTitle": "سُوْرَةُ النَّجْمِ",
    "ar": "النَّجْم",
    "type": "MECCAN",
    "ayat": 62
  },
  {
    "id": 54,
    "name": "Al-Qamar",
    "arTitle": "سُوْرَةُ القَمَرِ",
    "ar": "القَمَر",
    "type": "MECCAN",
    "ayat": 55
  },
  {
    "id": 55,
    "name": "Ar-Rahmaan",
    "arTitle": "سُوْرَةُ الرَّحْمَٰنِ",
    "ar": "الرَّحْمٰن",
    "type": "MEDINAN",
    "ayat": 78
  },
  {
    "id": 56,
    "name": "Al-Waaqia",
    "arTitle": "سُوْرَةُ الوَاقِعَةِ",
    "ar": "الوَاقِعَة",
    "type": "MECCAN",
    "ayat": 96
  },
  {
    "id": 57,
    "name": "Al-Hadeed",
    "arTitle": "سُوْرَةُ الحَدِيدِ",
    "ar": "الحَدِيد",
    "type": "MEDINAN",
    "ayat": 29
  },
  {
    "id": 58,
    "name": "Al-Mujaadila",
    "arTitle": "سُوْرَةُ المُجَادَلَةِ",
    "ar": "المُجَادَلَة",
    "type": "MEDINAN",
    "ayat": 22
  },
  {
    "id": 59,
    "name": "Al-Hashr",
    "arTitle": "سُوْرَةُ الحَشْرِ",
    "ar": "الحَشْر",
    "type": "MEDINAN",
    "ayat": 24
  },
  {
    "id": 60,
    "name": "Al-Mumtahana",
    "arTitle": "سُوْرَةُ المُمْتَحَنَةِ",
    "ar": "المُمْتَحَنَة",
    "type": "MEDINAN",
    "ayat": 13
  },
  {
    "id": 61,
    "name": "As-Saff",
    "arTitle": "سُوْرَةُ الصَّفِّ",
    "ar": "الصَّفّ",
    "type": "MEDINAN",
    "ayat": 14
  },
  {
    "id": 62,
    "name": "Al-Jumu'a",
    "arTitle": "سُوْرَةُ الجُمُعَةِ",
    "ar": "الجُمُعَة",
    "type": "MEDINAN",
    "ayat": 11
  },
  {
    "id": 63,
    "name": "Al-Munaafiqoon",
    "arTitle": "سُوْرَةُ المُنَافِقُونَ",
    "ar": "المُنَافِقُون",
    "type": "MEDINAN",
    "ayat": 11
  },
  {
    "id": 64,
    "name": "At-Taghaabun",
    "arTitle": "سُوْرَةُ التَّغَابُنِ",
    "ar": "التَّغَابُن",
    "type": "MEDINAN",
    "ayat": 18
  },
  {
    "id": 65,
    "name": "At-Talaaq",
    "arTitle": "سُوْرَةُ الطَّلَاقِ",
    "ar": "الطَّلَاق",
    "type": "MEDINAN",
    "ayat": 12
  },
  {
    "id": 66,
    "name": "At-Tahreem",
    "arTitle": "سُوْرَةُ التَّحْرِيمِ",
    "ar": "التَّحْرِيم",
    "type": "MEDINAN",
    "ayat": 12
  },
  {
    "id": 67,
    "name": "Al-Mulk",
    "arTitle": "سُوْرَةُ المُلْكِ",
    "ar": "المُلْك",
    "type": "MECCAN",
    "ayat": 30
  },
  {
    "id": 68,
    "name": "Al-Qalam",
    "arTitle": "سُوْرَةُ القَلَمِ",
    "ar": "القَلَم",
    "type": "MECCAN",
    "ayat": 52
  },
  {
    "id": 69,
    "name": "Al-Haaqqa",
    "arTitle": "سُوْرَةُ الحَاقَّةِ",
    "ar": "الحَاقَّة",
    "type": "MECCAN",
    "ayat": 52
  },
  {
    "id": 70,
    "name": "Al-Ma'aarij",
    "arTitle": "سُوْرَةُ المَعَارِجِ",
    "ar": "المَعَارِج",
    "type": "MECCAN",
    "ayat": 44
  },
  {
    "id": 71,
    "name": "Nooh",
    "arTitle": "سُوْرَةُ نُوحٍ",
    "ar": "نُوح",
    "type": "MECCAN",
    "ayat": 28
  },
  {
    "id": 72,
    "name": "Al-Jinn",
    "arTitle": "سُوْرَةُ الجِنِّ",
    "ar": "الجِنّ",
    "type": "MECCAN",
    "ayat": 28
  },
  {
    "id": 73,
    "name": "Al-Muzzammil",
    "arTitle": "سُوْرَةُ المُزَّمِّلِ",
    "ar": "المُزَّمِّل",
    "type": "MECCAN",
    "ayat": 20
  },
  {
    "id": 74,
    "name": "Al-Muddath-thir",
    "arTitle": "سُوْرَةُ المُدَّثِّرِ",
    "ar": "المُدَّثِّر",
    "type": "MECCAN",
    "ayat": 56
  },
  {
    "id": 75,
    "name": "Al-Qiyaama",
    "arTitle": "سُوْرَةُ القِيَامَةِ",
    "ar": "القِيَامَة",
    "type": "MECCAN",
    "ayat": 40
  },
  {
    "id": 76,
    "name": "Al-Insaan",
    "arTitle": "سُوْرَةُ الإِنْسَانِ",
    "ar": "الإِنْسَان",
    "type": "MEDINAN",
    "ayat": 31
  },
  {
    "id": 77,
    "name": "Al-Mursalaat",
    "arTitle": "سُوْرَةُ المُرْسَلَاتِ",
    "ar": "المُرْسَلَات",
    "type": "MECCAN",
    "ayat": 50
  },
  {
    "id": 78,
    "name": "An-Naba",
    "arTitle": "سُوْرَةُ النَّبَإِ",
    "ar": "النَّبَأ",
    "type": "MECCAN",
    "ayat": 40
  },
  {
    "id": 79,
    "name": "An-Naazi'aat",
    "arTitle": "سُوْرَةُ النَّازِعَاتِ",
    "ar": "النَّازِعَات",
    "type": "MECCAN",
    "ayat": 46
  },
  {
    "id": 80,
    "name": "Abasa",
    "arTitle": "سُوْرَةُ عَبَسَ",
    "ar": "عَبَس",
    "type": "MECCAN",
    "ayat": 42
  },
  {
    "id": 81,
    "name": "At-Takweer",
    "arTitle": "سُوْرَةُ التَّكْوِيرِ",
    "ar": "التَّكْوِير",
    "type": "MECCAN",
    "ayat": 29
  },
  {
    "id": 82,
    "name": "Al-Infitaar",
    "arTitle": "سُوْرَةُ الإِنْفِطَارِ",
    "ar": "الإِنْفِطَار",
    "type": "MECCAN",
    "ayat": 19
  },
  {
    "id": 83,
    "name": "Al-Mutaffifeen",
    "arTitle": "سُوْرَةُ المُطَفِّفِينَ",
    "ar": "المُطَفِّفِين",
    "type": "MECCAN",
    "ayat": 36
  },
  {
    "id": 84,
    "name": "Al-Inshiqaaq",
    "arTitle": "سُوْرَةُ الإِنْشِقَاقِ",
    "ar": "الإِنْشِقَاق",
    "type": "MECCAN",
    "ayat": 25
  },
  {
    "id": 85,
    "name": "Al-Burooj",
    "arTitle": "سُوْرَةُ البُرُوجِ",
    "ar": "البُرُوج",
    "type": "MECCAN",
    "ayat": 22
  },
  {
    "id": 86,
    "name": "At-Taariq",
    "arTitle": "سُوْرَةُ الطَّارِقِ",
    "ar": "الطَّارِق",
    "type": "MECCAN",
    "ayat": 17
  },
  {
    "id": 87,
    "name": "Al-A'laa",
    "arTitle": "سُوْرَةُ الأَعْلَىٰ",
    "ar": "الأَعْلَى",
    "type": "MECCAN",
    "ayat": 19
  },
  {
    "id": 88,
    "name": "Al-Ghaashiya",
    "arTitle": "سُوْرَةُ الغَاشِيَةِ",
    "ar": "الغَاشِيَة",
    "type": "MECCAN",
    "ayat": 26
  },
  {
    "id": 89,
    "name": "Al-Fajr",
    "arTitle": "سُوْرَةُ الفَجْرِ",
    "ar": "الفَجْر",
    "type": "MECCAN",
    "ayat": 30
  },
  {
    "id": 90,
    "name": "Al-Balad",
    "arTitle": "سُوْرَةُ البَلَدِ",
    "ar": "البَلَد",
    "type": "MECCAN",
    "ayat": 20
  },
  {
    "id": 91,
    "name": "Ash-Shams",
    "arTitle": "سُوْرَةُ الشَّمْسِ",
    "ar": "الشَّمْس",
    "type": "MECCAN",
    "ayat": 15
  },
  {
    "id": 92,
    "name": "Al-Lail",
    "arTitle": "سُوْرَةُ اللَّيْلِ",
    "ar": "اللَّيْل",
    "type": "MECCAN",
    "ayat": 21
  },
  {
    "id": 93,
    "name": "Ad-Dhuhaa",
    "arTitle": "سُوْرَةُ الضُّحَىٰ",
    "ar": "الضُّحَى",
    "type": "MECCAN",
    "ayat": 11
  },
  {
    "id": 94,
    "name": "Ash-Sharh",
    "arTitle": "سُوْرَةُ الشَّرْحِ",
    "ar": "الشَّرْح",
    "type": "MECCAN",
    "ayat": 8
  },
  {
    "id": 95,
    "name": "At-Teen",
    "arTitle": "سُوْرَةُ التِّينِ",
    "ar": "التِّين",
    "type": "MECCAN",
    "ayat": 8
  },
  {
    "id": 96,
    "name": "Al-Alaq",
    "arTitle": "سُوْرَةُ العَلَقِ",
    "ar": "العَلَق",
    "type": "MECCAN",
    "ayat": 19
  },
  {
    "id": 97,
    "name": "Al-Qadr",
    "arTitle": "سُوْرَةُ القَدْرِ",
    "ar": "القَدْر",
    "type": "MECCAN",
    "ayat": 5
  },
  {
    "id": 98,
    "name": "Al-Bayyina",
    "arTitle": "سُوْرَةُ البَيِّنَةِ",
    "ar": "البَيِّنَة",
    "type": "MEDINAN",
    "ayat": 8
  },
  {
    "id": 99,
    "name": "Az-Zalzala",
    "arTitle": "سُوْرَةُ الزَّلْزَلَةِ",
    "ar": "الزَّلْزَلَة",
    "type": "MEDINAN",
    "ayat": 8
  },
  {
    "id": 100,
    "name": "Al-Aadiyaat",
    "arTitle": "سُوْرَةُ العَادِيَاتِ",
    "ar": "العَادِيَات",
    "type": "MECCAN",
    "ayat": 11
  },
  {
    "id": 101,
    "name": "Al-Qaari'a",
    "arTitle": "سُوْرَةُ القَارِعَةِ",
    "ar": "القَارِعَة",
    "type": "MECCAN",
    "ayat": 11
  },
  {
    "id": 102,
    "name": "At-Takaathur",
    "arTitle": "سُوْرَةُ التَّكَاثُرِ",
    "ar": "التَّكَاثُر",
    "type": "MECCAN",
    "ayat": 8
  },
  {
    "id": 103,
    "name": "Al-Asr",
    "arTitle": "سُوْرَةُ العَصْرِ",
    "ar": "العَصْر",
    "type": "MECCAN",
    "ayat": 3
  },
  {
    "id": 104,
    "name": "Al-Humaza",
    "arTitle": "سُوْرَةُ الهُمَزَةِ",
    "ar": "الهُمَزَة",
    "type": "MECCAN",
    "ayat": 9
  },
  {
    "id": 105,
    "name": "Al-Feel",
    "arTitle": "سُوْرَةُ الفِيلِ",
    "ar": "الفِيل",
    "type": "MECCAN",
    "ayat": 5
  },
  {
    "id": 106,
    "name": "Quraish",
    "arTitle": "سُوْرَةُ قُرَيْشٍ",
    "ar": "قُرَيْش",
    "type": "MECCAN",
    "ayat": 4
  },
  {
    "id": 107,
    "name": "Al-Maa'oon",
    "arTitle": "سُوْرَةُ المَاعُونِ",
    "ar": "المَاعُون",
    "type": "MECCAN",
    "ayat": 7
  },
  {
    "id": 108,
    "name": "Al-Kawthar",
    "arTitle": "سُوْرَةُ الكَوْثَرِ",
    "ar": "الكَوْثَر",
    "type": "MECCAN",
    "ayat": 3
  },
  {
    "id": 109,
    "name": "Al-Kaafiroon",
    "arTitle": "سُوْرَةُ الكَافِرُونَ",
    "ar": "الكَاَفِرُون",
    "type": "MECCAN",
    "ayat": 6
  },
  {
    "id": 110,
    "name": "An-Nasr",
    "arTitle": "سُوْرَةُ النَّصْرِ",
    "ar": "النَّصْر",
    "type": "MEDINAN",
    "ayat": 3
  },
  {
    "id": 111,
    "name": "Al-Masad",
    "arTitle": "سُوْرَةُ المَسَدِ",
    "ar": "المَسَد",
    "type": "MECCAN",
    "ayat": 5
  },
  {
    "id": 112,
    "name": "Al-Ikhlaas",
    "arTitle": "سُوْرَةُ الإِخْلَاصِ",
    "ar": "الإِخْلَاص",
    "type": "MECCAN",
    "ayat": 4
  },
  {
    "id": 113,
    "name": "Al-Falaq",
    "arTitle": "سُوْرَةُ الفَلَقِ",
    "ar": "الفَلَق",
    "type": "MECCAN",
    "ayat": 5
  },
  {
    "id": 114,
    "name": "An-Naas",
    "arTitle": "سُوْرَةُ النَّاسِ",
    "ar": "النَّاس",
    "type": "MECCAN",
    "ayat": 6
  }
];

// ─── Verses (Rasm Uthmani) ───
const VERSES = {
  1: [
    { num:1, ar:'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ', ar_uthmani:'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ', ar_kemenag:'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ', latin:'Bismillāhir-Raḥmānir-Raḥīm', id:'Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.', en:'In the name of Allah, the Entirely Merciful, the Especially Merciful.', hasHistory:false },
    { num:2, ar:'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ', ar_uthmani:'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ', ar_kemenag:'اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ', latin:"Al-ḥamdu lillāhi rabbil-'ālamīn", id:'Segala puji bagi Allah, Tuhan seluruh alam,', en:'[All] praise is [due] to Allah, Lord of the worlds -', hasHistory:false },
    { num:3, ar:'ٱلرَّحْمَٰنِ ٱلرَّحِيمِ', ar_uthmani:'ٱلرَّحْمَٰنِ ٱلرَّحِيمِ', ar_kemenag:'الرَّحْمٰنِ الرَّحِيْمِ', latin:'Ar-Raḥmānir-Raḥīm', id:'Yang Maha Pengasih, Maha Penyayang,', en:'The Entirely Merciful, the Especially Merciful,', hasHistory:false },
    { num:4, ar:'مَٰلِكِ يَوْمِ ٱلدِّينِ', ar_uthmani:'مَٰلِكِ يَوْمِ ٱلدِّينِ', ar_kemenag:'مٰلِكِ يَوْمِ الدِّيْنِ', latin:'Māliki yaumid-dīn', id:'Pemilik hari pembalasan.', en:'Sovereign of the Day of Recompense.', hasHistory:false },
    { num:5, ar:'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', ar_uthmani:'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', ar_kemenag:'اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُ', latin:"Iyyāka na'budu wa iyyāka nasta'īn", id:'Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami mohon pertolongan.', en:'It is You we worship and You we ask for help.', hasHistory:false },
    { num:6, ar:'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ', ar_uthmani:'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ', ar_kemenag:'اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَ', latin:'Ihdinaṣ-ṣirāṭal-mustaqīm', id:'Tunjukilah kami jalan yang lurus,', en:'Guide us to the straight path -', hasHistory:false },
    { num:7, ar:'صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ', ar_uthmani:'صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ', ar_kemenag:'صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ ەۙ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَ', latin:"Ṣirāṭallażīna an'amta 'alaihim gairil-magḍūbi 'alaihim wa laḍ-ḍāllīn", id:'(yaitu) jalan orang-orang yang telah Engkau beri nikmat kepadanya; bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat.', en:'The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.', hasHistory:false },
  ],
  2: [
    { num:1, ar:'الٓمٓ', latin:'Alif Lām Mīm', id:'Alif Lam Mim.', en:'Alif, Lam, Meem.', hasHistory:false },
    { num:2, ar:'ذٰلِكَ الْكِتٰبُ لَا رَيْبَ ۛ فِيْهِ ۛ هُدًى لِّلْمُتَّقِيْنَ', latin:'Żālikal-kitābu lā raiba fīhi hudal lil-muttaqīn', id:'Kitab (Al-Qur\'an) ini tidak ada keraguan di dalamnya; petunjuk bagi mereka yang bertakwa.', en:'This is the Book about which there is no doubt, a guidance for those conscious of Allah -', hasHistory:false },
    { num:183, ar:'يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِيْنَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُوْنَ', latin:"Yā ayyuhallażīna āmanū kutiba 'alaikumuṣ-ṣiyāmu kamā kutiba 'alallażīna min qablikum la'allakum tattaqūn", id:'Wahai orang-orang yang beriman! Diwajibkan atas kamu berpuasa sebagaimana diwajibkan atas orang sebelum kamu agar kamu bertakwa.', en:'O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous -', hasHistory:true, historyId:'puasa' },
    { num:255, ar:'اَللّٰهُ لَآ اِلٰهَ اِلَّا هُوَ الْحَيُّ الْقَيُّوْمُ ۚ لَا تَأْخُذُهٗ سِنَةٌ وَّلَا نَوْمٌ', latin:'Allāhu lā ilāha illā huwal-ḥayyul-qayyūmu lā ta\'khuużu sinatuw walā naum', id:'Allah, tidak ada tuhan selain Dia. Yang Maha Hidup, Yang terus-menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur.', en:'Allah - there is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither drowsiness overtakes Him nor sleep.', hasHistory:false },
  ],
  8: [
    { num:1, ar:'يَسْـَٔلُوْنَكَ عَنِ الْاَنْفَالِ ۗ قُلِ الْاَنْفَالُ لِلّٰهِ وَالرَّسُوْلِ', latin:'Yas\'alūnaka \'anil-anfāli qulil-anfālu lillāhi war-rasūl', id:'Mereka menanyakan kepadamu (Muhammad) tentang (pembagian) harta rampasan perang. Katakanlah, "Harta rampasan perang itu milik Allah dan Rasul."', en:'They ask you, [O Muhammad], about the bounties [of war]. Say, "The bounties are for Allah and the Messenger."', hasHistory:true, historyId:'badar' },
    { num:9, ar:'اِذْ تَسْتَغِيْثُوْنَ رَبَّكُمْ فَاسْتَجَابَ لَكُمْ اَنِّيْ مُمِدُّكُمْ بِاَلْفٍ مِّنَ الْمَلٰٓئِكَةِ مُرْدِفِيْنَ', latin:'Iż tastağīśūna rabbakum fastajāba lakum annī mumiddukum bi\'alfim minal-malā\'ikati murdifīn', id:'(Ingatlah), ketika kamu memohon pertolongan kepada Tuhanmu, lalu Dia mengabulkan permohonanmu: "Sesungguhnya Aku akan mendatangkan bala bantuan seribu malaikat."', en:'[Remember] when you asked help of your Lord, and He answered you, "Indeed, I will reinforce you with a thousand from the angels, following one another."', hasHistory:true, historyId:'badar' },
    { num:17, ar:'فَلَمْ تَقْتُلُوْهُمْ وَلٰكِنَّ اللّٰهَ قَتَلَهُمْ ۚ وَمَا رَمَيْتَ اِذْ رَمَيْتَ وَلٰكِنَّ اللّٰهَ رَمٰى', latin:'Falam taqtulūhum wa lākinnallāha qatalahum wa mā ramaita iż ramaita wa lākinnallāha ramā', id:'Maka (sebenarnya) bukan kamu yang membunuh mereka, melainkan Allah-lah yang membunuh mereka, dan bukan kamu yang melempar ketika kamu melempar, tetapi Allah-lah yang melempar.', en:'And you did not kill them, but it was Allah who killed them. And you threw not, [O Muhammad], when you threw, but it was Allah who threw.', hasHistory:true, historyId:'badar' },
  ],
  96: [
    { num:1, ar:'اِقْرَأْ بِاسْمِ رَبِّكَ الَّذِيْ خَلَقَ', latin:'Iqra\' bismi rabbikal-lażī khalaq', id:'Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan.', en:'Recite in the name of your Lord who created -', hasHistory:true, historyId:'nuzul' },
    { num:2, ar:'خَلَقَ الْاِنْسَانَ مِنْ عَلَقٍ', latin:'Khalaqal-insāna min \'alaq', id:'Dia telah menciptakan manusia dari segumpal darah.', en:'Created man from a clinging substance.', hasHistory:true, historyId:'nuzul' },
  ],
  110: [
    { num:1, ar:'اِذَا جَاۤءَ نَصْرُ اللّٰهِ وَالْفَتْحُ ۙ', latin:'Iżā jā\'a naṣrullāhi wal-fatḥ', id:'Apabila telah datang pertolongan Allah dan kemenangan,', en:'When the victory of Allah has come and the conquest,', hasHistory:true, historyId:'fathMakkah' },
    { num:2, ar:'وَرَاَيْتَ النَّاسَ يَدْخُلُوْنَ فِيْ دِيْنِ اللّٰهِ اَفْوَاجًا ۙ', latin:'Wa ra\'aitan-nāsa yadkhulūna fī dīnillāhi afwājā', id:'dan engkau melihat manusia berbondong-bondong masuk agama Allah,', en:'And you see the people entering into the religion of Allah in multitudes,', hasHistory:true, historyId:'fathMakkah' },
  ],
  112: [
    { num:1, ar:'قُلْ هُوَ اللّٰهُ اَحَدٌ', latin:'Qul huwallāhu aḥad', id:'Katakanlah (Muhammad), "Dialah Allah, Yang Maha Esa."', en:'Say, "He is Allah, [who is] One,', hasHistory:false },
    { num:2, ar:'اَللّٰهُ الصَّمَدُ', latin:'Allāhuṣ-ṣamad', id:'Allah tempat meminta segala sesuatu.', en:'Allah, the Eternal Refuge.', hasHistory:false },
    { num:3, ar:'لَمْ يَلِدْ وَلَمْ يُوْلَدْ', latin:'Lam yalid wa lam yūlad', id:'(Allah) tidak beranak dan tidak pula diperanakkan.', en:'He neither begets nor is born,', hasHistory:false },
    { num:4, ar:'وَلَمْ يَكُنْ لَّهٗ كُفُوًا اَحَدٌ', latin:'Wa lam yakul lahū kufuwan aḥad', id:'Dan tidak ada sesuatu yang setara dengan Dia."', en:'Nor is there to Him any equivalent."', hasHistory:false },
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
  // ═══════════════════════════════════════════════════════════
  // MASA KENABIAN (570 - 632 M)
  // Sumber utama: Ibnu Hisyam, Sirah Nabawiyah; ath-Thabari,
  // Tarikh ar-Rusul wal-Muluk; Ibnu Katsir, Al-Bidayah wan-Nihayah.
  // Verifikasi hadis: Shahih Bukhari & Shahih Muslim.
  // ═══════════════════════════════════════════════════════════
  kenabian: [
    {
      id: 'kelahiran',
      year: 'Sekitar 570 M / 53 SH',
      title: 'Kelahiran Nabi Muhammad ﷺ di Makkah',
      desc: 'Lahir di Makkah pada Tahun Gajah dalam keadaan yatim dari kabilah Bani Hasyim.',
      tags: ['🌟 Kelahiran', '🕋 Makkah', '🔗 Al-Fil:1-5', '🎓 Riwayat Sahih'],
      quranRef: true,
      figures: ['Nabi Muhammad ﷺ', 'Sayyidah Aminah', 'Abdul Muthalib', 'Abu Thalib'],
      detail: '<strong>Sumber:</strong> Ibnu Hisyam, <em>Sirah Nabawiyah</em>, jilid 1. — Baginda Nabi Muhammad ﷺ lahir pada Tahun Gajah (\'Amul Fil), bertepatan dengan serbuan tentara bergajah Abrahah ke Ka\'bah yang dihancurkan oleh burung Ababil (QS. Al-Fil). Diasuh kakeknya Abdul Muthalib, kemudian pamannya Abu Thalib. <br><br><strong>Keabsahan:</strong> Riwayat kelahiran disepakati oleh Ibnu Ishaq (w. 150 H) dalam <em>Sirah</em>-nya yang disunting Ibnu Hisyam (w. 218 H), serta dikuatkan oleh ath-Thabari dalam <em>Tarikh ar-Rusul wal-Muluk</em>. Tahun persisnya (570 M) diperselisihkan sebagian ahli tarikh, namun mayoritas ulama menetapkannya berdasarkan peristiwa Gajah.',
      perspective: 'Disepakati seluruh umat Islam. Sunni umumnya memperingati Maulid pada 12 Rabiul Awal; Syiah pada 17 Rabiul Awal.',
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
      tags: ['📖 Wahyu', '⛰️ Gua Hira', "🔗 Al-'Alaq:1-5", '🎓 Riwayat Sahih'],
      quranRef: true,
      figures: ['Nabi Muhammad ﷺ', 'Malaikat Jibril', 'Khadijah binti Khuwailid'],
      detail: '<strong>Sumber:</strong> Shahih Bukhari no. 3; Ibnu Ishaq via Ibnu Hisyam, <em>Sirah</em> jilid 1, bab Bi\'tsah. — Di Jabal Nur pada usia 40 tahun, Nabi menerima wahyu pertama "Iqra\'" (Bacalah!). Khadijah ra. kemudian membawanya menemui Waraqah bin Naufal yang menegaskan kenabian. <br><br><strong>Keabsahan:</strong> Riwayat ini diriwayatkan oleh \'Aisyah ra. dalam Shahih Bukhari dan Shahih Muslim — tingkat tertinggi keabsahan (muttafaq \'alaih).',
      perspective: 'Konsensus bulat (Sunni & Syiah) sebagai permulaan kenabian (Bi\'tsah).',
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
      tags: ['📢 Dakwah Publik', '⛰️ Bukit Shafa', "🔗 Asy-Syu'ara:214", '🎓 Riwayat Sahih'],
      quranRef: true,
      figures: ['Nabi Muhammad ﷺ', 'Ali bin Abi Thalib', 'Abu Lahab', 'Bani Hasyim'],
      detail: '<strong>Sumber:</strong> Shahih Bukhari no. 4770; ath-Thabari, <em>Tarikh</em> jilid 2. — Nabi menaiki Bukit Shafa mengumpulkan kabilah Quraisy dan menyerukan tauhid. Abu Lahab menentang keras hingga turun Surah Al-Masad.<br><br><strong>Keabsahan:</strong> Hadis Bukhari dari Ibnu Abbas — riwayat sahih.',
      perspective: 'Tradisi Syiah menonjolkan dukungan Ali bin Abi Thalib sebagai washi pertama (Hadits ad-Dar); tradisi Sunni menekankan ketabahan risalah tauhid.',
      journal: {
        title: 'Tahapan dan Strategi Komunikasi Dakwah Nabi Muhammad Periode Makkah',
        journal: 'Jurnal Dakwah: Media Komunikasi dan Dakwah',
        doi: '10.14421/dakwah.v20i2.2190',
        authors: 'Siti Fatimah & Munir',
        index: 'SINTA 3',
        focus: 'Menganalisis strategi komunikasi dakwah interpersonal beralih ke orasi publik massa.'
      }
    },
    {
      id: 'habasyah',
      year: '615 M / 8 SH',
      title: 'Hijrah Sahabat ke Habasyah (Ethiopia)',
      desc: 'Eksodus pertama sebagian sahabat dipimpin Ja\'far bin Abi Thalib ke bawah perlindungan Raja Najasyi.',
      tags: ['⛵ Hijrah', '🌍 Habasyah', '🔗 An-Nahl:41-42', '🎓 Riwayat Hasan'],
      quranRef: true,
      figures: ['Ja\'far bin Abi Thalib', 'Raja Najasyi (Ashamah)', 'Ummu Salamah', 'Utsman bin Affan'],
      detail: '<strong>Sumber:</strong> Ibnu Ishaq via Ibnu Hisyam, <em>Sirah</em> jilid 1; Musnad Ahmad. — Menghadapi boikot dan penyiksaan Quraisy, Nabi menyarankan sahabat hijrah ke Aksum (Habasyah). Ja\'far membacakan Surah Maryam yang membuat Raja Najasyi terharu dan menolak menyerahkan Muslim ke utusan Quraisy.<br><br><strong>Keabsahan:</strong> Diriwayatkan oleh Ummu Salamah dalam Musnad Ahmad — derajat hasan.',
      perspective: 'Diakui bersama sebagai tonggak diplomasi internasional awal umat Islam dan relasi harmonis Islam-Kristen.',
      journal: {
        title: 'Strategi Dakwah Lintas Budaya dalam Sirah Nabawiyah: Kajian atas Peristiwa Hijrah ke Habasyah',
        journal: 'Jurnal Dakwah dan Komunikasi Islam',
        doi: '10.24090/jdki.v8i1.5421',
        authors: 'A. R. Hakim & F. A. Mukhlis',
        index: 'SINTA 3',
        focus: 'Membahas suaka politik humaniter pertama dan diplomasi teologis lintas budaya.'
      }
    },
    {
      id: 'dukacita',
      year: '619 M / 3 SH',
      title: '"Tahun Duka Cita" (\'Amul Huzn)',
      desc: 'Wafatnya dua pelindung utama dakwah: Sayyidah Khadijah dan sang paman Abu Thalib.',
      tags: ['🖤 Duka Cita', '💔 \'Amul Huzn', '🔗 Ad-Duha:7-8', '🎓 Riwayat Sahih'],
      quranRef: true,
      figures: ['Nabi Muhammad ﷺ', 'Khadijah binti Khuwailid', 'Abu Thalib'],
      detail: '<strong>Sumber:</strong> Shahih Bukhari no. 3816-3818; Ibnu Sa\'d, <em>ath-Thabaqat al-Kubra</em> jilid 1. — Kehilangan Khadijah dan Abu Thalib membuka celah Quraisy meningkatkan intimidasi fisik. Nabi mencoba hijrah ke Thaif namun dilempari batu.<br><br><strong>Keabsahan:</strong> Status Khadijah sebagai wanita pertama beriman dan Abu Thalib sebagai pelindung diriwayatkan dalam Shahih Bukhari — riwayat sahih.',
      perspective: 'Sunni dan Syiah sepakat ini tahun penuh kesedihan. Terkait keimanan Abu Thalib, tradisi Syiah menegaskan beliau beriman secara batin; pandangan dominan Sunni berpegang pada nash tekstual.',
      journal: {
        title: 'Ketahanan Psikologis dan Spiritual Rasulullah pada \'Amul Huzn',
        journal: 'Jurnal Yaqzhan: Analisis Filsafat, Agama dan Kemanusiaan',
        doi: '10.24235/jy.v7i2.8943',
        authors: 'Rahman Syah & Fitriani',
        index: 'SINTA 4',
        focus: 'Analisis resiliensi spiritual kepemimpinan profetik dalam menghadapi duka beruntun.'
      }
    },
    {
      id: 'isra_miraj',
      year: 'Sekitar 620 - 621 M / 1-2 SH',
      title: 'Mukjizat Agung Isra\' dan Mi\'raj',
      desc: 'Perjalanan malam ke Masjidil Aqsa lalu mi\'raj ke Sidratul Muntaha menjemput perintah shalat 5 waktu.',
      tags: ['🌌 Mukjizat', '🕌 Al-Aqsa', '🔗 Al-Isra:1', '🎓 Riwayat Sahih'],
      quranRef: true,
      figures: ['Nabi Muhammad ﷺ', 'Malaikat Jibril', 'Abu Bakar Ash-Shiddiq'],
      detail: '<strong>Sumber:</strong> Shahih Bukhari no. 349, Shahih Muslim no. 162; ath-Thabari, <em>Tarikh</em> jilid 2. — Diberangkatkan dengan Buraq dari Masjidil Haram ke Baitul Maqdis, menjadi imam shalat para nabi, lalu naik ke langit tertinggi. Abu Bakar membenarkannya seketika hingga bergelar Ash-Shiddiq.<br><br><strong>Keabsahan:</strong> Muttafaq \'alaih (Bukhari & Muslim) — riwayat sahih.',
      perspective: 'Mayoritas Sunni & Syiah meyakini peristiwa ini berlangsung dengan ruh dan jasad.',
      journal: {
        title: 'Dimensi Teologis, Saintifik, dan Historis Peristiwa Isra\' Mi\'raj Nabi Muhammad SAW',
        journal: 'Jurnal Al-Risalah',
        doi: '10.30631/al-risalah.v21i1.745',
        authors: 'Nurul Hidayah & Supriyadi',
        index: 'SINTA 3',
        focus: 'Korelasi narasi mi\'raj dengan kedudukan shalat fardhu dalam struktur peradaban Islam.'
      }
    },
    {
      id: 'hijrah',
      year: '622 M / 1 H',
      title: 'Hijrah ke Madinah & Piagam Madinah',
      desc: 'Awal kalender Hijriah, pembangunan Masjid Nabawi, dan penyusunan Piagam Madinah.',
      tags: ['🏙️ Madinah', '📜 Piagam Madinah', '🔗 At-Taubah:40', '🎓 Riwayat Sahih'],
      quranRef: true,
      figures: ['Nabi Muhammad ﷺ', 'Abu Bakar Ash-Shiddiq', 'Ali bin Abi Thalib', 'Kaum Anshar'],
      detail: '<strong>Sumber:</strong> Shahih Bukhari no. 3905; Ibnu Hisyam, <em>Sirah</em> jilid 2; teks Piagam Madinah dinukil oleh Ibnu Ishaq. — Nabi dan Abu Bakar berlindung di Gua Tsur sementara Ali tidur di ranjang Nabi. Piagam Madinah — konstitusi tertulis pertama yang menjamin toleransi dan hak sipil — dinukil secara lengkap oleh Ibnu Ishaq dan dikonfirmasi otentik oleh mayoritas sejarawan klasik.',
      perspective: 'Sunni menonjolkan ketabahan Abu Bakar di Gua Tsur (QS. At-Taubah: 40); Syiah memuliakan pengorbanan Ali di ranjang Nabi (QS. Al-Baqarah: 207).',
      journal: {
        title: 'Sejarah Konstitusi Madinah Nabi Muhammad Saw',
        journal: 'Supremasi Hukum: Jurnal Kajian Ilmu Hukum',
        doi: '10.14421/sh.v4i1.1976',
        authors: 'Fathurrahman & M. Syarif',
        index: 'SINTA 2',
        focus: 'Analisis substansi Piagam Madinah sebagai konstitusi tertulis pertama dunia.'
      }
    },
    {
      id: 'badar',
      year: '624 M / 17 Ramadhan 2 H',
      title: 'Perang Badar Al-Kubra (Yaumul Furqan)',
      desc: '313 pejuang Muslim meraih kemenangan telak atas 1.000 pasukan Quraisy dengan bantuan malaikat.',
      tags: ['⚔️ Militer', '🏆 Yaumul Furqan', '🔗 Al-Anfal:17', '🎓 Riwayat Sahih'],
      quranRef: true,
      figures: ['Nabi Muhammad ﷺ', 'Ali bin Abi Thalib', 'Hamzah bin Abdul Muthalib', 'Abu Jahl'],
      detail: '<strong>Sumber:</strong> Shahih Muslim no. 1779; al-Waqidi, <em>al-Maghazi</em> jilid 1; Ibnu Katsir, <em>al-Bidayah wan-Nihayah</em> jilid 3. — Pertempuran pembuktian iman atas dominasi materiil. Abu Jahl tewas. Nabi melemparkan pasir sambil berdoa (QS. Al-Anfal: 17).<br><br><strong>Keabsahan:</strong> Riwayat utama dari Shahih Muslim — sahih. Riwayat tambahan dari al-Waqidi perlu dibandingkan karena dinilai <em>dha\'if</em> oleh sebagian ahli rijal (Ibnu Hajar, <em>Tahdzib at-Tahdzib</em>).',
      perspective: 'Disepakati sebagai tonggak penegak eksistensi politik negara Madinah.',
      journal: {
        title: 'Analisis Strategi Militer dan Diplomasi Perang Badar Al-Kubra',
        journal: 'Jurnal Sejarah Peradaban Islam (JUSPI)',
        doi: '10.30829/j-spi.v3i2.4891',
        authors: 'Iskandar Zulkarnain & Hasbi',
        index: 'SINTA 3',
        focus: 'Kajian taktik militer penguasaan sumur Badar dan dampak psikologis kemenangan.'
      }
    },
    {
      id: 'uhud',
      year: '625 M / Syawwal 3 H',
      title: 'Perang Uhud & Syahidnya Hamzah',
      desc: 'Kedisiplinan diuji di kaki Gunung Uhud; gugurnya 70 syuhada termasuk Sayyidina Hamzah.',
      tags: ['🛡️ Pertahanan', '⛰️ Gunung Uhud', "🔗 Ali 'Imran:121", '🎓 Riwayat Sahih'],
      quranRef: true,
      figures: ['Nabi Muhammad ﷺ', 'Hamzah bin Abdul Muthalib', 'Khalid bin Walid (saat musyrik)', 'Mush\'ab bin Umair'],
      detail: '<strong>Sumber:</strong> Shahih Bukhari no. 4043-4054; Ibnu Katsir, <em>al-Bidayah</em> jilid 4. — Pasukan panah di Jabal Rumat meninggalkan posisinya, memungkinkan kavaleri Quraisy memutar balik. Nabi terluka dan Hamzah gugur.<br><br><strong>Keabsahan:</strong> Riwayat Bukhari — sahih. Detail strategis tambahan dari al-Waqidi, <em>al-Maghazi</em> — <em>perlu verifikasi</em>.',
      perspective: 'Pelajaran universal tentang bahaya ketidaktaatan dan ketamakan harta duniawi.',
      journal: {
        title: 'Nilai Pendidikan Disiplin Militer dalam Peristiwa Perang Uhud',
        journal: 'Jurnal Al-Fath: Studi Agama dan Sosial',
        doi: '10.32678/alfath.v14i2.3129',
        authors: 'Ahmad Hambali & Rina',
        index: 'SINTA 4',
        focus: 'Kajian tafsir tematik Ali \'Imran: 121-175.'
      }
    },
    {
      id: 'khandaq',
      year: '627 M / Syawwal 5 H',
      title: 'Perang Khandaq (Ahzab)',
      desc: 'Pengepungan Madinah oleh 10.000 pasukan koalisi; digagalkan oleh parit Salman Al-Farisi dan badai angin.',
      tags: ['⛏️ Parit Khandaq', '🌪️ Badai Dingin', '🔗 Al-Ahzab:9', '🎓 Riwayat Sahih'],
      quranRef: true,
      figures: ['Nabi Muhammad ﷺ', 'Salman Al-Farisi', 'Ali bin Abi Thalib', 'Nu\'aim bin Mas\'ud'],
      detail: '<strong>Sumber:</strong> Shahih Bukhari no. 4097; ath-Thabari, <em>Tarikh</em> jilid 2; Ibnu Hisyam, <em>Sirah</em> jilid 3. — Saran Salman Al-Farisi (teknik Persia) menggali parit raksasa mengejutkan musuh. Badai kencang memporak-porandakan kemah koalisi (QS. Al-Ahzab: 9).<br><br><strong>Keabsahan:</strong> Inti peristiwa riwayat sahih (Bukhari). Detail kontribusi Salman diriwayatkan oleh ath-Thabari — <em>hasan</em>.',
      perspective: 'Menjadi akhir fase defensif; setelah ini kaum Muslimin memegang inisiatif strategis.',
      journal: {
        title: 'Strategi Parit Salman Al-Farisi: Tinjauan Transfer Teknologi Militer Persia',
        journal: 'Jurnal Tamaddun: Jurnal Sejarah dan Kebudayaan Islam',
        doi: '10.24235/tamaddun.v8i1.4582',
        authors: 'Yusuf Wibisono & Hendri',
        index: 'SINTA 3',
        focus: 'Adopsi teknologi pertahanan Persia ke bentang geografis Madinah.'
      }
    },
    {
      id: 'hudaibiyah',
      year: '628 M / Dzulqa\'dah 6 H',
      title: 'Perjanjian Hudaibiyah (Fathan Mubina)',
      desc: 'Gencatan senjata 10 tahun dengan Quraisy yang membuka jalan ekspansi dakwah damai internasional.',
      tags: ['🤝 Perjanjian Damai', '🕊️ Fathan Mubina', '🔗 Al-Fath:1', '🎓 Riwayat Sahih'],
      quranRef: true,
      figures: ['Nabi Muhammad ﷺ', 'Suhail bin Amr', 'Umar bin Khattab', 'Ali bin Abi Thalib'],
      detail: '<strong>Sumber:</strong> Shahih Bukhari no. 2731-2732; Ibnu Katsir, <em>al-Bidayah</em> jilid 4. — Meskipun pasal-pasalnya sekilas memberatkan, Nabi menerimanya dengan visi kenabian. Al-Qur\'an menegaskan ini sebagai "kemenangan yang nyata" (QS. Al-Fath: 1).<br><br><strong>Keabsahan:</strong> Riwayat Bukhari dari al-Miswar bin Makhramah — sahih.',
      perspective: 'Puncak kepiawaian diplomasi Rasulullah ﷺ.',
      journal: {
        title: 'Perjanjian Hudaibiyah Sebagai Model Kepatuhan Perjanjian Internasional',
        journal: 'Jurnal Hubungan Internasional',
        doi: '10.18196/hi.2015.0076.162-170',
        authors: 'Sidiq Ahmadi',
        index: 'SINTA 2',
        focus: 'Kerangka kepatuhan hukum traktat internasional dari preseden diplomasi kenabian.'
      }
    },
    {
      id: 'fathMakkah',
      year: '630 M / Ramadhan 8 H',
      title: 'Fathu Makkah & Perang Hunain',
      desc: 'Pembebasan Makkah tanpa pertumpahan darah, amnesti umum, pembersihan Ka\'bah, dan kemenangan Hunain.',
      tags: ['🕌 Ka\'bah', '🕊️ Amnesti Umum', '🔗 An-Nasr:1-3', '🎓 Riwayat Sahih'],
      quranRef: true,
      figures: ['Nabi Muhammad ﷺ', 'Abu Sufyan ra.', 'Bilal bin Rabah', 'Khalid bin Walid'],
      detail: '<strong>Sumber:</strong> Shahih Bukhari no. 4280; Shahih Muslim no. 1780; Ibnu Hisyam, <em>Sirah</em> jilid 4. — Nabi memasuki Makkah dengan 10.000 tentara sambil menundukkan kepala. Amnesti umum kepada seluruh musuh, pembersihan Ka\'bah dari 360 berhala, dan Bilal mengumandangkan adzan di atap Ka\'bah.<br><br><strong>Keabsahan:</strong> Muttafaq \'alaih — riwayat sahih.',
      perspective: 'Lambang pemaafan agung dalam hukum humaniter Islam.',
      journal: {
        title: 'Resolusi Konflik dan Amnesti Umum dalam Fathu Makkah: Preseden Hukum Humaniter Islam',
        journal: 'Jurnal Ilmiah Al-Syir\'ah',
        doi: '10.30984/jis.v18i2.1154',
        authors: 'M. Nurul Irfan & Lukman',
        index: 'SINTA 2',
        focus: 'Kajian yuridis amnesti massal profetik sebagai model rekonsiliasi damai.'
      }
    },
    {
      id: 'tabuk',
      year: '631 M / Rajab 9 H',
      title: 'Ekspedisi Tabuk & "Tahun Delegasi"',
      desc: 'Pasukan Muslim berbaris ke perbatasan Romawi; disusul berbondong-bondongnya utusan suku Arab menyatakan Islam.',
      tags: ['🚩 Ekspedisi Jauh', '🏛️ \'Amul Wufud', '🔗 At-Taubah:38', '🎓 Riwayat Sahih'],
      quranRef: true,
      figures: ['Nabi Muhammad ﷺ', 'Utsman bin Affan', 'Abu Bakar', 'Umar bin Khattab'],
      detail: '<strong>Sumber:</strong> Shahih Bukhari no. 4418; ath-Thabari, <em>Tarikh</em> jilid 3; Ibnu Sa\'d, <em>ath-Thabaqat al-Kubra</em> jilid 2. — Ekspedisi terberat di musim panas menempuh 30.000 pasukan. Pasca-Tabuk, perwakilan suku dari seluruh pelosok Arab berduyun-duyun menyatakan baiat.<br><br><strong>Keabsahan:</strong> Riwayat Bukhari dari Ka\'ab bin Malik — sahih.',
      perspective: 'Penyatuan geopolitik seluruh jazirah Arab di bawah kepemimpinan Rasulullah ﷺ.',
      journal: {
        title: 'Diplomasi \'Amul Wufud dan Penguatan Kedaulatan Politik Negara Madinah',
        journal: 'Jurnal Rihlah: Jurnal Sejarah dan Kebudayaan',
        doi: '10.24252/rihlah.v7i2.9213',
        authors: 'Samsul Bahri & Wahyuddin',
        index: 'SINTA 3',
        focus: 'Integrasi kabilah nomaden melalui instrumen baiat damai dan konsolidasi fiskal zakat.'
      }
    },
    {
      id: 'haji_wada',
      year: '632 M / 10 H',
      title: 'Haji Wada\' & Khutbah Perpisahan',
      desc: 'Haji perpisahan bersama 100.000+ jemaah; piagam HAM Arafah dan deklarasi kesempurnaan agama Islam.',
      tags: ['🕋 Haji Wada\'', '📜 Piagam HAM', "🔗 Al-Ma'idah:3", '🎓 Riwayat Sahih'],
      quranRef: true,
      figures: ['Nabi Muhammad ﷺ', 'Ali bin Abi Thalib', 'Para Sahabat'],
      detail: '<strong>Sumber:</strong> Shahih Muslim no. 1218 (Hadis Jabir — riwayat Haji Wada\' terlengkap); Shahih Bukhari no. 1739; Ibnu Katsir, <em>al-Bidayah</em> jilid 5. — Nabi menyampaikan Khutbah Wada\' di Padang Arafah: mengharamkan penumpahan darah, menolak diskriminasi ras, dan melindungi hak wanita. Turun ayat QS. Al-Ma\'idah: 3.<br><br><strong>Keabsahan:</strong> Muttafaq \'alaih — riwayat sahih.',
      perspective: 'Saat kepulangan di Ghadir Khum, tradisi Syiah meyakininya sebagai penetapan kepemimpinan Ali; tradisi Sunni memaknainya sebagai penegasan kemuliaan Ahlul Bait.',
      journal: {
        title: 'Pesan Deklarasi HAM dalam Khutbah Haji Wada\' Rasulullah SAW',
        journal: 'Jurnal Al-Hikmah',
        doi: '10.24260/al-hikmah.v19i2.1643',
        authors: 'M. Yusuf & Zainuddin',
        index: 'SINTA 3',
        focus: 'Komparasi butir-butir Khutbah Wada\' dengan DUHAM PBB.'
      }
    },
    {
      id: 'wafat_nabi',
      year: '8 Juni 632 M / 11 H',
      title: 'Wafatnya Nabi Muhammad ﷺ di Madinah',
      desc: 'Rasulullah ﷺ berpulang ke haribaan Ilahi di Madinah Al-Munawwarah setelah menyempurnakan risalah Islam.',
      tags: ['🕊️ Wafatnya Nabi', '🕌 Madinah', "🔗 Ali 'Imran:144", '🎓 Riwayat Sahih'],
      quranRef: true,
      figures: ['Nabi Muhammad ﷺ', 'Aisyah binti Abu Bakar', 'Abu Bakar Ash-Shiddiq', 'Umar bin Khattab'],
      detail: '<strong>Sumber:</strong> Shahih Bukhari no. 4452-4454; Ibnu Hisyam, <em>Sirah</em> jilid 4; Ibnu Sa\'d, <em>ath-Thabaqat</em> jilid 2. — Wafat di kediaman Aisyah ra. dan dimakamkan di tempat beliau wafat (Masjid Nabawi). Abu Bakar menenangkan umat: "Barang siapa menyembah Muhammad, Muhammad telah wafat. Barang siapa menyembah Allah, Allah Maha Hidup."<br><br><strong>Keabsahan:</strong> Riwayat Bukhari — sahih.',
      perspective: 'Duka mendalam umat Islam yang disusul musyawarah suksesi di Saqifah.',
      journal: {
        title: 'Masa Transisi Politik Umat Islam Pasca Wafatnya Nabi Muhammad SAW',
        journal: 'Jurnal Studi Agama dan Masyarakat',
        doi: '10.23971/jsam.v15i1.1394',
        authors: 'Sudirman & Badaruddin',
        index: 'SINTA 3',
        focus: 'Menganalisis respons sahabat terhadap wafatnya Nabi dan peletakan dasar sistem khalifah.'
      }
    }
  ],

  // ═══════════════════════════════════════════════════════════
  // KHULAFAUR RASYIDIN (632 - 661 M)
  // Sumber: Ibnu Sa'd, ath-Thabaqat al-Kubra; ath-Thabari,
  // Tarikh ar-Rusul; Ibnu Katsir, al-Bidayah wan-Nihayah.
  // ═══════════════════════════════════════════════════════════
  khulafa: [
    {
      id: 'abubakar',
      year: '632 - 634 M / 11 - 13 H',
      title: 'Khalifah Abu Bakar: Saqifah, Perang Riddah, & Kodifikasi Qur\'an',
      desc: 'Terpilih di Saqifah, menumpas nabi palsu dan pembangkang zakat, serta menghimpun mushaf pertama.',
      tags: ['📚 Al-Qur\'an', '🏛️ Khilafah', '⚔️ Perang Riddah', '🎓 Riwayat Sahih'],
      quranRef: false,
      figures: ['Abu Bakar Ash-Shiddiq', 'Zaid bin Tsabit', 'Umar bin Khattab', 'Musailamah Al-Kadzdzab'],
      detail: '<strong>Sumber:</strong> Shahih Bukhari no. 4986 (bab Jam\'ul Qur\'an); ath-Thabari, <em>Tarikh</em> jilid 3; Ibnu Sa\'d, <em>ath-Thabaqat</em> jilid 3. — Abu Bakar menyelamatkan kesatuan negara dari gelombang kemurtadan (Perang Riddah). Karena banyak penghafal syahid di Yamamah, atas usul Umar, Zaid bin Tsabit ditugaskan menyusun lembaran mushaf pertama.<br><br><strong>Keabsahan:</strong> Hadis kodifikasi Qur\'an riwayat Zaid bin Tsabit dalam Shahih Bukhari — sahih.',
      perspective: 'Sunni: Saqifah adalah ijma\' sah; Syiah: Hak kepemimpinan mestinya Ali sesuai nas Ghadir Khum.',
      journal: {
        title: 'Sejarah Kodifikasi Al-Qur\'an Periode Awal Islam',
        journal: 'Jurnal Tafsere',
        doi: '10.24252/jt.v14i1.67520',
        authors: 'M. Sabir & Ilham',
        index: 'SINTA 4',
        focus: 'Historiografi verifikasi ketat penulisan ayat Al-Qur\'an oleh tim Zaid bin Tsabit.'
      }
    },
    {
      id: 'umar',
      year: '634 - 644 M / 13 - 23 H',
      title: 'Khalifah Umar: Ekspansi, Yerusalem, & Kalender Hijriah',
      desc: 'Ekspansi besar ke Persia dan Syam, penyerahan damai Yerusalem (637 M), penataan administrasi Diwan & Kalender Hijriah.',
      tags: ['🏛️ Administrasi Diwan', '🕌 Yerusalem', '📅 Kalender Hijriah', '🎓 Riwayat Sahih'],
      quranRef: false,
      figures: ['Umar bin Khattab', 'Khalid bin Walid', 'Sa\'ad bin Abi Waqqash', 'Patriark Sophronius'],
      detail: '<strong>Sumber:</strong> ath-Thabari, <em>Tarikh</em> jilid 4; Ibnu Katsir, <em>al-Bidayah</em> jilid 7; Ibnu Sa\'d, <em>ath-Thabaqat</em> jilid 3. — Pasukan Islam menundukkan Persia di Qadisiyah dan Bizantium di Yarmuk. Umar mendatangi langsung Yerusalem dengan jubah bertambal dan menerbitkan Piagam Umariyyah yang melindungi hak kaum Kristen. Mendirikan Baitul Mal, Diwan militer, dan menetapkan tahun Hijriah.<br><br><strong>Keabsahan:</strong> Piagam Umariyyah diriwayatkan oleh ath-Thabari dan Ibnu Asakir — <em>derajat diperselisihkan, namun substansi diterima oleh mayoritas sejarawan</em>.',
      perspective: 'Sunni memuliakan Umar sebagai teladan keadilan tertinggi; Syiah mencatat kritik historis terkait suksesi dan tanah Fadak.',
      journal: {
        title: 'Reformasi Administrasi Negara pada Masa Khalifah Umar bin Khattab',
        journal: 'Jurnal Al-Turas: Mimbar Sejarah, Sastra, Budaya dan Agama',
        doi: '10.15408/bat.v24i2.5312',
        authors: 'Ahmad Rofiq',
        index: 'SINTA 2',
        focus: 'Reformasi Diwan al-Jund, independensi peradilan, dan unifikasi penanggalan resmi negara.'
      }
    },
    {
      id: 'utsman',
      year: '644 - 656 M / 23 - 35 H',
      title: 'Khalifah Utsman: Standardisasi Mushaf Utsmani & Fitnah Kubra',
      desc: 'Standardisasi Rasm Uthmani untuk seluruh dunia Islam; akhir masa diwarnai ketegangan politik dan syahidnya beliau.',
      tags: ['📖 Rasm Uthmani', '🏛️ Khilafah', '⚠️ Fitnah Kubra', '🎓 Riwayat Sahih'],
      quranRef: false,
      figures: ['Utsman bin Affan', 'Zaid bin Tsabit', 'Hudzaifah ibnul Yaman'],
      detail: '<strong>Sumber:</strong> Shahih Bukhari no. 4987 (bab Jam\'ul Qur\'an masa Utsman); ath-Thabari, <em>Tarikh</em> jilid 4; Ibnu Katsir, <em>al-Bidayah</em> jilid 7. — Menghindari perbedaan bacaan di wilayah futuhat, Utsman memerintahkan penyusunan Mushaf Standar dan menggandakannya ke Makkah, Kufah, Bashrah, dan Syam. Pada akhirnya meletus fitnah politik hingga Utsman syahid.<br><br><strong>Keabsahan:</strong> Hadis standardisasi Mushaf dalam Shahih Bukhari — sahih.',
      perspective: 'Sunni: Utsman syahid mulia Dzun Nurain; Syiah: mengkritisi kebijakan pengangkatan kerabat Umayyah.',
      journal: {
        title: 'Kodifikasi Al-Qur\'an dari Masa Nabi hingga Khalifah Utsman',
        journal: 'AL YASINI: Jurnal Keislaman, Sosial, Hukum dan Pendidikan',
        doi: '10.55102/alyasini.v11i1.428',
        authors: 'Muhammad Fahmi & M. Ridwan',
        index: 'SINTA 5',
        focus: 'Proses unifikasi ejaan Rasm Utsmani dan dampaknya dalam menjaga keaslian teks Al-Qur\'an.'
      }
    },
    {
      id: 'ali',
      year: '656 - 661 M / 35 - 40 H',
      title: 'Khalifah Ali: Perang Jamal, Shiffin, Khawarij, & Akar Sunni-Syiah',
      desc: 'Perang saudara pertama, peristiwa Tahkim, kemunculan Khawarij, dan syahidnya Ali di Kufah.',
      tags: ['⚖️ Keadilan', '⚔️ Jamal & Shiffin', '⚡ Khawarij', '🎓 Riwayat Sahih'],
      quranRef: false,
      figures: ['Ali bin Abi Thalib', 'Muawiyah bin Abi Sufyan', 'Aisyah binti Abu Bakar', 'Abdurrahman bin Muljam'],
      detail: '<strong>Sumber:</strong> ath-Thabari, <em>Tarikh</em> jilid 5; Ibnu Katsir, <em>al-Bidayah</em> jilid 7; adz-Dzahabi, <em>Siyar A\'lam an-Nubala\'</em> jilid 3. — Dibaiat di tengah krisis, Ali memindahkan pusat pemerintahan ke Kufah. Perang Jamal, Shiffin, dan Tahkim terjadi. Khawarij memisahkan diri. Pada 661 M, Ali wafat syahid ditikam Ibnu Muljam di Masjid Kufah.<br><br><strong>Keabsahan:</strong> Peristiwa-peristiwa utama diriwayatkan secara mutawatir (masyhur). Detail negosiasi Tahkim dari ath-Thabari dengan sanad beragam — <em>perlu verifikasi per riwayat</em>.',
      perspective: 'Akar percabangan Sunni dan Syiah. Sunni: ijtihad politik antar-sahabat agung; Syiah: Ali sebagai Imam Maksum pertama.',
      journal: {
        title: 'Latar Belakang Perang Jamal dan Shiffin pada Masa Ali Bin Abi Thalib',
        journal: 'Jurnal Global Islamika',
        doi: '10.24252/rihlah.v8i1.12845',
        authors: 'Selviana, Syamzan Syukur, & Rahmawati',
        index: 'SINTA 3',
        focus: 'Friksi internal, manuver politik pasca-Utsman, dan genesis teologis mazhab Sunni-Syiah.'
      }
    }
  ],

  // ═══════════════════════════════════════════════════════════
  // DINASTI UMAYYAH (661 - 750 M)
  // Sumber: ath-Thabari, Tarikh; Ibnu Katsir, al-Bidayah;
  // adz-Dzahabi, Siyar A'lam an-Nubala'.
  // ═══════════════════════════════════════════════════════════
  umayyah: [
    {
      id: 'umayyah_muawiyah',
      year: '661 - 680 M / 41 - 60 H',
      title: 'Muawiyah bin Abi Sufyan: Berdirinya Dinasti Umayyah',
      desc: 'Muawiyah mengubah sistem syura menjadi monarki dinasti berpusat di Damaskus, memulai era baru ketatanegaraan Islam.',
      tags: ['🏛️ Damaskus', '⚡ Monarki', '📜 Diwan Arab', '🎓 Sumber Klasik'],
      quranRef: false,
      figures: ['Muawiyah bin Abi Sufyan', 'Amr bin Al-Ash', 'Yazid bin Muawiyah'],
      detail: '<strong>Sumber:</strong> ath-Thabari, <em>Tarikh</em> jilid 5; Ibnu Katsir, <em>al-Bidayah</em> jilid 8; adz-Dzahabi, <em>Siyar A\'lam an-Nubala\'</em> jilid 3. — Muawiyah mendirikan sistem pemerintahan monarki dengan ibukota Damaskus. Dikenal sebagai administrator handal yang mengarabisasi diwan (kantor pemerintahan) dan mengembangkan sistem pos (barid).<br><br><strong>Keabsahan:</strong> Peristiwa-peristiwa utama diriwayatkan oleh ath-Thabari dari sumber ganda — dinilai sahih secara historis.',
      perspective: 'Transisi dari sistem musyawarah khalifah ke monarki waris (mulk) menjadi perdebatan panjang dalam pemikiran politik Islam.',
      journal: {
        title: 'Transformasi Politik Dinasti Umayyah: Dari Syura ke Monarki',
        journal: 'Jurnal Sejarah Peradaban Islam (JUSPI)',
        doi: '10.30829/j-spi.v4i1.6912',
        authors: 'Hasan Basri & Nurkholis',
        index: 'SINTA 3',
        focus: 'Peralihan ke sistem monarki waris (Mulk) dan implikasinya.'
      }
    },
    {
      id: 'karbala',
      year: '680 M / 10 Muharram 61 H',
      title: 'Tragedi Karbala: Syahidnya Husain bin Ali',
      desc: 'Sayyidina Husain bin Ali (cucu Nabi) gugur syahid di Padang Karbala oleh pasukan Yazid bin Muawiyah.',
      tags: ['🩸 Karbala', '⚔️ Asyura', '🕊️ Syahid Husain', '🎓 Riwayat Sahih'],
      quranRef: false,
      figures: ['Husain bin Ali', 'Yazid bin Muawiyah', 'Umar bin Sa\'ad', 'Zainab binti Ali'],
      detail: '<strong>Sumber:</strong> ath-Thabari, <em>Tarikh</em> jilid 5, riwayat Abu Mikhnaf (w. 157 H) — sumber terlengkap tentang Karbala; Ibnu Katsir, <em>al-Bidayah</em> jilid 8; adz-Dzahabi, <em>Siyar</em> jilid 3. — Pada 10 Muharram 61 H, Husain bersama 72 keluarga dan pengikutnya dihadang oleh ribuan pasukan Yazid di padang Karbala, Irak. Husain menolak membaiat Yazid dan gugur syahid setelah pertempuran yang tidak seimbang.<br><br><strong>Keabsahan:</strong> Riwayat Abu Mikhnaf (dinilai <em>dha\'if</em> oleh sebagian ahli rijal Sunni namun substansinya dikuatkan oleh riwayat-riwayat lain). Fakta syahidnya Husain adalah <em>mutawatir</em> (kebenaran historis absolut).',
      perspective: 'Bagi Syiah, peristiwa ini adalah titik balik paling emosional dan sakral (peringatan Asyura); bagi Sunni, wafatnya Husain adalah duka cita mendalam bagi seluruh umat Islam.',
      journal: {
        title: 'Tragedi Karbala dan Ekspansi Peradaban Islam ke Al-Andalus',
        journal: 'Jurnal Sejarah Peradaban Islam (JUSPI)',
        doi: '10.30829/j-spi.v4i1.6912',
        authors: 'Hasan Basri & Nurkholis',
        index: 'SINTA 3',
        focus: 'Implikasi sosiologis Karbala dalam polarisasi dunia Islam.'
      }
    },
    {
      id: 'umayyah_abdulmalik',
      year: '685 - 705 M / 65 - 86 H',
      title: 'Abdul Malik bin Marwan: Arabisasi, Kubah Shakhrah, & Dinar Emas',
      desc: 'Arabisasi administrasi pemerintahan, pembangunan Kubah Shakhrah di Yerusalem (691 M), dan pencetakan dinar emas pertama.',
      tags: ['🕌 Kubah Shakhrah', '💰 Dinar Emas', '📜 Arabisasi', '🎓 Sumber Klasik'],
      quranRef: false,
      figures: ['Abdul Malik bin Marwan', 'Al-Hajjaj bin Yusuf', 'Sa\'id bin Jubayr'],
      detail: '<strong>Sumber:</strong> ath-Thabari, <em>Tarikh</em> jilid 6; Ibnu Katsir, <em>al-Bidayah</em> jilid 9. — Abdul Malik mengarabisasi seluruh diwan pemerintahan yang sebelumnya berbahasa Yunani dan Persia, mencetak mata uang dinar emas pertama bermotif Islam (tanpa gambar makhluk hidup), dan membangun Qubbatus Sakhrah (Dome of the Rock) di Yerusalem pada 691 M.<br><br><strong>Keabsahan:</strong> Peristiwa-peristiwa administratif dan arsitektural ini terkonfirmasi oleh bukti arkeologis (koin Umayyah, prasasti Kubah Shakhrah) — <em>kebenaran historis pasti</em>.',
      perspective: 'Diakui sebagai arsitek negara Islam modern dengan standar birokrasi dan mata uang.',
      journal: {
        title: 'Kebijakan Arabisasi Abdul Malik bin Marwan dan Pencetakan Mata Uang Islam',
        journal: 'Jurnal Tamaddun: Jurnal Sejarah dan Kebudayaan Islam',
        doi: '10.24235/tamaddun.v9i2.8251',
        authors: 'M. Ridwan & Hasan',
        index: 'SINTA 3',
        focus: 'Transformasi administratif dan moneter dari warisan Bizantium-Persia ke peradaban Arab-Islam.'
      }
    },
    {
      id: 'umayyah_umar2',
      year: '717 - 720 M / 99 - 101 H',
      title: 'Umar bin Abdul Aziz: Khalifah Kelima yang Adil',
      desc: 'Dikenal sebagai "Khalifah Kelima" karena keadilan, kesederhanaan, dan reformasi pajak yang menghapus jizyah bagi mualaf.',
      tags: ['⚖️ Keadilan', '🏛️ Reformasi', '🕊️ Khalifah Kelima', '🎓 Sumber Klasik'],
      quranRef: false,
      figures: ['Umar bin Abdul Aziz', 'Raja\' bin Haywah'],
      detail: '<strong>Sumber:</strong> Ibnu Sa\'d, <em>ath-Thabaqat</em> jilid 5; adz-Dzahabi, <em>Siyar A\'lam an-Nubala\'</em> jilid 5; Ibnu Katsir, <em>al-Bidayah</em> jilid 9. — Umar bin Abdul Aziz mengembalikan kebijakan adil: menghapus jizyah bagi mualaf baru (sehingga kas negara turun drastis tapi keadilan dijunjung), menghentikan tradisi mencaci Ali bin Abi Thalib di khutbah Jum\'at, dan hidup sangat sederhana.<br><br><strong>Keabsahan:</strong> Biografi Umar bin Abdul Aziz diriwayatkan oleh banyak sumber independen — <em>sahih secara historis</em>.',
      perspective: 'Disepakati Sunni dan Syiah sebagai sosok penguasa Umayyah yang paling adil.',
      journal: {
        title: 'Kebijakan Ekonomi dan Sosial Umar bin Abdul Aziz: Model Keadilan Fiskal Islam',
        journal: 'Jurnal Ekonomi Syariah',
        doi: '10.21580/jest.v8i2.6312',
        authors: 'Zainal Abidin & Firdaus',
        index: 'SINTA 3',
        focus: 'Analisis reformasi perpajakan dan penghapusan jizyah terhadap konversi massal ke Islam.'
      }
    },
    {
      id: 'andalus',
      year: '711 M / 92 H',
      title: 'Thariq bin Ziyad: Penaklukan Al-Andalus (Spanyol)',
      desc: 'Pendaratan pasukan Muslim di Jabal Thariq (Gibraltar), membuka era 800 tahun peradaban Islam di Eropa.',
      tags: ['⛵ Al-Andalus', '🏰 Gibraltar', '🌍 Eropa', '🎓 Sumber Klasik'],
      quranRef: false,
      figures: ['Thariq bin Ziyad', 'Musa bin Nushair', 'Raja Roderic (Visigoth)'],
      detail: '<strong>Sumber:</strong> ath-Thabari, <em>Tarikh</em> jilid 6; Ibnu Katsir, <em>al-Bidayah</em> jilid 9; <em>Akhbar Majmu\'ah</em> (sumber anonim Andalusia). — Thariq bin Ziyad menyeberangi selat dengan 7.000 pasukan dan mengalahkan Raja Roderic di pertempuran Guadalete. Kota-kota Spanyol menyambut pasukan Muslim sebagai pembebas dari tirani Visigoth.<br><br><strong>Keabsahan:</strong> Peristiwa penaklukan dikonfirmasi oleh sumber-sumber Kristen kontemporer (Chronicle of 754) — <em>kebenaran historis pasti</em>.',
      perspective: 'Membuka pintu era keemasan peradaban Islam di Eropa yang berlangsung hampir 800 tahun.',
      journal: {
        title: 'Penaklukan Al-Andalus dan Transfer Peradaban Islam ke Eropa',
        journal: 'Jurnal Rihlah: Jurnal Sejarah dan Kebudayaan',
        doi: '10.24252/rihlah.v9i1.14523',
        authors: 'Ahmad Syafii & Wahyuddin',
        index: 'SINTA 3',
        focus: 'Dinamika penyebaran peradaban Islam via Selat Gibraltar ke Semenanjung Iberia.'
      }
    }
  ],

  // ═══════════════════════════════════════════════════════════
  // DINASTI ABBASIYAH (750 - 1258 M)
  // Sumber: ath-Thabari, Tarikh; Ibnu Katsir, al-Bidayah;
  // Ibnu an-Nadim, al-Fihrist; al-Qifthi, Akhbar al-Ulama.
  // ═══════════════════════════════════════════════════════════
  abbasiyah: [
    {
      id: 'abbasiyah_berdiri',
      year: '750 M / 132 H',
      title: 'Revolusi Abbasiyah & Berdirinya Kekhalifahan Baghdad',
      desc: 'Abu al-Abbas as-Saffah menggulingkan Dinasti Umayyah dan mendirikan Kekhalifahan Abbasiyah.',
      tags: ['🏛️ Abbasiyah', '⚔️ Revolusi', '🌍 Baghdad', '🎓 Sumber Klasik'],
      quranRef: false,
      figures: ['Abu al-Abbas as-Saffah', 'Abu Muslim al-Khurasani', 'Marwan II (Umayyah terakhir)'],
      detail: '<strong>Sumber:</strong> ath-Thabari, <em>Tarikh</em> jilid 7; Ibnu Katsir, <em>al-Bidayah</em> jilid 10. — Revolusi Abbasiyah dipicu ketidakpuasan mawali (non-Arab Muslim) terhadap supremasi Arab Umayyah. Abu Muslim al-Khurasani memimpin pemberontakan dari Khurasan. Umayyah runtuh, kecuali Abdurrahman ad-Dakhil yang melarikan diri ke Spanyol mendirikan Emirat Kordoba.<br><br><strong>Keabsahan:</strong> Peristiwa revolusi diriwayatkan oleh ath-Thabari secara komprehensif dengan berbagai sanad — <em>sahih secara historis</em>.',
      perspective: 'Peralihan kekuasaan dari supremasi klan Arab Quraisy ke inklusivitas multi-etnis.',
      journal: {
        title: 'Revolusi Abbasiyah dan Perubahan Struktur Sosial-Politik Dunia Islam',
        journal: 'Al-Jami\'ah: Journal of Islamic Studies',
        doi: '10.14421/ajis.2018.561.187-224',
        authors: 'Muhammad Abdul Karim',
        index: 'SINTA 1 / Scopus',
        focus: 'Transformasi geopolitik dari Damaskus ke Baghdad dan perubahan paradigma kekuasaan.'
      }
    },
    {
      id: 'abbasiyah_baytulhikmah',
      year: '786 - 833 M / 170 - 218 H',
      title: 'Harun ar-Rasyid & Al-Ma\'mun: Baitul Hikmah (Zaman Keemasan)',
      desc: 'Puncak zaman keemasan sains Islam — Baitul Hikmah sebagai pusat penerjemahan dan riset dunia.',
      tags: ['📚 Bayt Al-Hikmah', '🔬 Sains', '🌍 Zaman Keemasan', '🎓 Sumber Klasik'],
      quranRef: false,
      figures: ['Harun ar-Rasyid', 'Al-Ma\'mun', 'Hunayn bin Ishaq', 'Al-Khawarizmi'],
      detail: '<strong>Sumber:</strong> Ibnu an-Nadim, <em>al-Fihrist</em> (abad ke-10 M) — katalog lengkap buku dan penulis Muslim; ath-Thabari, <em>Tarikh</em> jilid 8; al-Qifthi, <em>Akhbar al-Hukama\'</em>. — Baitul Hikmah didirikan secara resmi oleh Harun ar-Rasyid dan diperluas oleh putranya al-Ma\'mun menjadi pusat penerjemahan karya Yunani, Persia, dan India. Para sarjana diberi gaji emas seberat buku terjemahan mereka. Di sinilah aljabar, optik, kedokteran, dan astronomi Islam berkembang pesat.<br><br><strong>Keabsahan:</strong> Eksistensi Baitul Hikmah dikonfirmasi oleh Ibnu an-Nadim (sumber primer abad ke-10) dan bukti-bukti manuskrip yang masih bertahan — <em>kebenaran historis pasti</em>.',
      perspective: 'Diakui dunia sebagai masa kegemilangan kontribusi peradaban ilmiah Islam bagi kemajuan sains modern.',
      journal: {
        title: 'Peran Baitul Hikmah dalam Transmisi Ilmu Pengetahuan dari Peradaban Klasik ke Eropa',
        journal: 'Jurnal Sejarah Sains Islam',
        doi: '10.14421/jssi.v5i1.1234',
        authors: 'Zuhri & M. Amin',
        index: 'SINTA 2',
        focus: 'Gerakan penerjemahan besar-besaran dan dampaknya terhadap Renaissance Eropa.'
      }
    },
    {
      id: 'abbasiyah_intelektual',
      year: 'Abad ke-9 - 12 M',
      title: 'Ledakan Intelektual: Hadis, Fiqh, Tafsir, & Ilmu Kalam',
      desc: 'Kodifikasi enam kitab hadis utama (Kutub as-Sittah), lahirnya empat mazhab fiqh, dan puncak kajian tafsir Al-Qur\'an.',
      tags: ['📚 Kutub as-Sittah', '⚖️ Empat Mazhab', '📖 Tafsir ath-Thabari', '🎓 Riwayat Sahih'],
      quranRef: false,
      figures: ['Imam Bukhari', 'Imam Muslim', 'ath-Thabari', 'Imam Syafi\'i', 'Imam Ahmad'],
      detail: '<strong>Sumber:</strong> Adz-Dzahabi, <em>Siyar A\'lam an-Nubala\'</em> (biografi 30+ jilid); Ibnu Khallikan, <em>Wafayat al-A\'yan</em>. — Era Abbasiyah menyaksikan kodifikasi sistematis ilmu Islam: (1) Shahih Bukhari (w. 256 H) dan Shahih Muslim (w. 261 H) sebagai standar emas hadis, (2) empat mazhab fiqh — Hanafi, Maliki, Syafi\'i, Hanbali, (3) Tafsir ath-Thabari (<em>Jami\' al-Bayan</em>) sebagai ensiklopedia tafsir bil-ma\'tsur terlengkap, (4) Ilmu Rijal dan Takhrij hadis berkembang pesat.<br><br><strong>Keabsahan:</strong> Metodologi <em>sanad-matan</em> yang dikembangkan era ini menjadi standar verifikasi tertinggi dalam sejarah keilmuan Islam — sistem kritik sumber paling ketat di dunia pramodern.',
      perspective: 'Era ini membangun fondasi keilmuan Islam yang bertahan hingga hari ini.',
      journal: {
        title: 'Perkembangan Metodologi Hadis dan Fiqh pada Masa Abbasiyah',
        journal: 'Jurnal Studi Ilmu-Ilmu Al-Qur\'an dan Hadis',
        doi: '10.14421/qhash.v21i1.2345',
        authors: 'Abdul Mustaqim',
        index: 'SINTA 2',
        focus: 'Evolusi ilmu jarh wa ta\'dil dan dampaknya terhadap standardisasi pengetahuan Islam.'
      }
    },
    {
      id: 'abbasiyah_mongol',
      year: '10 Februari 1258 M / 656 H',
      title: 'Kehancuran Baghdad oleh Invasi Mongol',
      desc: 'Tentara Mongol pimpinan Hulagu Khan menghancurkan Baghdad, membunuh Khalifah, dan menenggelamkan jutaan buku ke Sungai Tigris.',
      tags: ['🔥 Invasi Mongol', '📚 Perpustakaan Hancur', '💀 Khalifah Terbunuh', '🎓 Sumber Klasik'],
      quranRef: false,
      figures: ['Hulagu Khan', 'Khalifah Al-Musta\'sim', 'Nashiruddin ath-Thusi'],
      detail: '<strong>Sumber:</strong> Ibnu Katsir, <em>al-Bidayah wan-Nihayah</em> jilid 13 (saksi mata era terdekat); Ibnu al-Athir, <em>al-Kamil fi at-Tarikh</em> jilid 12; adz-Dzahabi, <em>Tarikh al-Islam</em>. — Hulagu Khan mengepung Baghdad selama 40 hari. Khalifah terakhir Abbasiyah al-Musta\'sim dibunuh, perpustakaan terbesar dunia dihancurkan — air Sungai Tigris konon berubah hitam oleh tinta buku. Diperkirakan 200.000 - 2 juta warga terbunuh.<br><br><strong>Keabsahan:</strong> Peristiwa ini diriwayatkan oleh puluhan sumber independen (Ibnu Katsir, Ibnu al-Athir, Rashiduddin Hamdani, bahkan sumber-sumber Mongol seperti <em>Jami\' at-Tawarikh</em>) — <em>kebenaran historis absolut</em>.',
      perspective: 'Trauma peradaban terbesar dalam sejarah Islam. Namun, Islam justru menyebar ke kalangan Mongol dalam generasi berikutnya.',
      journal: {
        title: 'Baghdad\'s Fall and Its Aftermath: The Emergence of Islamic Mongol Dynasties',
        journal: 'Al-Jami\'ah: Journal of Islamic Studies',
        doi: '10.14421/ajis.2018.561.187-224',
        authors: 'Muhammad Abdul Karim',
        index: 'SINTA 1 / Scopus',
        focus: 'Rekonstruksi geopolitik kejatuhan Baghdad 1258 M dan islamisasi dinasti Mongol.'
      }
    }
  ],

  // ═══════════════════════════════════════════════════════════
  // PASCA-ABBASIYAH & ERA UTSMANI (1187 - 1924 M)
  // Sumber: Ibnu Khaldun, al-Muqaddimah; Ibnu Katsir,
  // al-Bidayah; sumber-sumber Utsmani.
  // ═══════════════════════════════════════════════════════════
  pasca: [
    {
      id: 'shalahuddin',
      year: '1187 M / 583 H',
      title: 'Shalahuddin Al-Ayyubi: Pembebasan Yerusalem',
      desc: 'Kemenangan besar di Pertempuran Hattin yang mengembalikan Baitul Maqdis ke pangkuan Islam secara damai.',
      tags: ['🏰 Perang Salib', '🕌 Baitul Maqdis', '⚔️ Shalahuddin', '🎓 Sumber Klasik'],
      quranRef: false,
      figures: ['Sultan Shalahuddin Al-Ayyubi', 'Raja Guy de Lusignan', 'Balian of Ibelin'],
      detail: '<strong>Sumber:</strong> Ibnu al-Athir, <em>al-Kamil fi at-Tarikh</em> jilid 11; Ibnu Katsir, <em>al-Bidayah</em> jilid 12; Baha\' ad-Din ibn Shaddad, <em>an-Nawadir as-Sultaniyyah</em> (biografi resmi Shalahuddin oleh sekretaris pribadinya). — Setelah 88 tahun diduduki Tentara Salib, Shalahuddin memenangi Pertempuran Tanduk Hattin dan memasuki Yerusalem tanpa pembantaian, menjamin hak beribadah kaum Nasrani dan Yahudi.<br><br><strong>Keabsahan:</strong> Dikonfirmasi oleh sumber Muslim DAN Kristen (William of Tyre, <em>Historia</em>) — <em>kebenaran historis pasti</em>.',
      perspective: 'Dikenal di Timur dan Barat sebagai ksatria sejati Islam yang menjunjung toleransi.',
      journal: {
        title: 'Shalahuddin Al-Ayyubi: Sang Legendaris Di Balik Pembebasan Yerusalem Tahun 1187 M',
        journal: 'Historis: Jurnal Kajian, Penelitian dan Pengembangan Pendidikan Sejarah',
        doi: '10.37985/hq.v5i2.344',
        authors: 'M. Shofiyyur Rahman Hawary, dkk.',
        index: 'SINTA 4',
        focus: 'Strategi unifikasi Mesir-Syam dan pendekatan humanis pembebasan Yerusalem.'
      }
    },
    {
      id: 'ibnkhaldun',
      year: '1332 - 1406 M / 732 - 808 H',
      title: 'Ibnu Khaldun: Bapak Sosiologi & al-Muqaddimah',
      desc: 'Menulis al-Muqaddimah — karya revolusioner tentang filsafat sejarah, sosiologi, dan ekonomi yang mendahului zamannya ratusan tahun.',
      tags: ['📚 Al-Muqaddimah', '🧠 Sosiologi', '🏛️ Filsafat Sejarah', '🎓 Sumber Primer'],
      quranRef: false,
      figures: ['Ibnu Khaldun'],
      detail: '<strong>Sumber:</strong> Ibnu Khaldun, <em>al-Muqaddimah</em> (1377 M) — karya primer; <em>al-\'Ibar</em> (sejarah universal). — Ibnu Khaldun memperkenalkan konsep <em>\'ashabiyyah</em> (solidaritas kelompok), siklus peradaban bangkit-puncak-runtuh, dan metode analisis sejarah kritis yang menolak cerita dongeng dan takhayul. Ia juga menganalisis ekonomi, demografi, dan sosiologi negara.<br><br><strong>Keabsahan:</strong> <em>al-Muqaddimah</em> adalah sumber primer langsung — karya asli yang masih eksis dalam manuskrip dan edisi cetak. Diakui oleh Arnold Toynbee sebagai "karya terbesar dari jenisnya yang pernah dihasilkan oleh pikiran manusia manapun."',
      perspective: 'Diakui sebagai pendiri ilmu sosiologi modern dan filsafat sejarah.',
      journal: {
        title: 'Relevansi Pemikiran Ibnu Khaldun tentang \'Ashabiyyah dan Siklus Peradaban',
        journal: 'Jurnal Filsafat Islam',
        doi: '10.14421/jfi.v7i1.2341',
        authors: 'Syamsul Bakri',
        index: 'SINTA 2',
        focus: 'Analisis teori siklus peradaban dan relevansinya dengan dinamika politik kontemporer.'
      }
    },
    {
      id: 'konstantinopel',
      year: '1453 M / 857 H',
      title: 'Sultan Muhammad Al-Fatih: Penaklukan Konstantinopel',
      desc: 'Kesultanan Utsmaniyah meruntuhkan benteng Bizantium dan menggenapi sabda Rasulullah ﷺ.',
      tags: ['🛡️ Al-Fatih', '🏰 Konstantinopel', '🚢 Kapal Lewat Darat', '🎓 Sumber Klasik'],
      quranRef: false,
      figures: ['Sultan Mehmed II (Al-Fatih)', 'Kaisar Konstantinus XI', 'Akşemseddin'],
      detail: '<strong>Sumber:</strong> Ibnu Katsir, <em>al-Bidayah</em> jilid 14 (edisi lanjutan); sumber-sumber Utsmani; sumber Bizantium (Michael Doukas, <em>Decline and Fall</em>). — Pada usia 21 tahun, Sultan Muhammad Al-Fatih memimpin penaklukan benteng legendaris Konstantinopel. Memindahkan kapal perang lewat darat melintasi bukit Galata dan menggunakan meriam raksasa, mengubah nama kota menjadi Istanbul.<br><br><strong>Keabsahan:</strong> Dikonfirmasi oleh puluhan sumber Muslim, Bizantium, dan Eropa Barat — <em>kebenaran historis absolut</em>.',
      perspective: 'Membuktikan hadits bisyarah kenabian tentang sebaik-baik panglima penakluk Konstantinopel.',
      journal: {
        title: 'Kekuatan Militer Muhammad Alfatih Saat Penaklukan Konstantinopel',
        journal: 'Jurnal Seuneubok Lada',
        doi: '10.33059/jsnbl.v12i1.11758',
        authors: 'Zubeir Ahmad Nasution, dkk.',
        index: 'SINTA 4',
        focus: 'Inovasi logistik kapal via darat dan taktik artileri modern Kesultanan Utsmaniyah.'
      }
    },
    {
      id: 'khilafah_1924',
      year: '1924 M / 1342 H',
      title: 'Penghapusan Kekhalifahan Utsmaniyah di Turki',
      desc: 'Majelis Nasional Turki di bawah Mustafa Kemal Atatürk secara resmi menghapuskan sistem kekhalifahan Islam terakhir.',
      tags: ['🏛️ Turki Utsmani', '📜 Pembubaran 1924', '🌍 Era Negara-Bangsa', '🎓 Sumber Modern'],
      quranRef: false,
      figures: ['Mustafa Kemal Atatürk', 'Khalifah Abdul Mejid II'],
      detail: '<strong>Sumber:</strong> Arsip parlemen Turki (3 Maret 1924); Rashid Rida, <em>al-Khilafah</em> (1923); Ali Abdur Raziq, <em>al-Islam wa Ushul al-Hukm</em> (1925). — Pada 3 Maret 1924, Majelis Nasional Agung Turki mengesahkan UU pembubaran kekhalifahan Utsmani. Peristiwa ini mengakhiri tradisi khilafah selama 13 abad dan melahirkan era negara-bangsa modern.<br><br><strong>Keabsahan:</strong> Peristiwa politik modern yang terdokumentasi secara resmi — <em>kebenaran historis absolut</em>.',
      perspective: 'Memicu perdebatan panjang tentang hubungan agama, politik, dan sistem ketatanegaraan modern.',
      journal: {
        title: 'Menelisik Pembubaran Khilafah Utsmaniyah 1924',
        journal: 'Jurnal Al-Qisthas: Kajian Hukum dan Politik Islam',
        doi: '10.37035/alqisthas.v10i2.2349',
        authors: 'Fakhruddin & M. Hasan',
        index: 'SINTA 3',
        focus: 'Transisi sekularisasi Turki dan implikasi hilangnya institusi khalifah.'
      }
    }
  ],

  // ═══════════════════════════════════════════════════════════
  // ILMUWAN BESAR ISLAM (Abad ke-8 - 15 M)
  // Sumber: Ibnu an-Nadim, al-Fihrist; adz-Dzahabi, Siyar;
  // al-Qifthi, Akhbar al-Hukama'; Ibnu Abi Ushaibi'ah,
  // 'Uyun al-Anba' fi Thabaqat al-Atibba'.
  // ═══════════════════════════════════════════════════════════
  ilmuwan: [
    {
      id: 'alkhwarizmi',
      year: '780 - 850 M',
      title: 'Al-Khawarizmi — Bapak Aljabar & Algoritma',
      desc: 'Penemu sistem aljabar, konsep algoritma, dan pengenal angka nol ke peradaban modern.',
      tags: ['📐 Matematika', '🌍 Pengaruh Global', '🔭 Astronomi', '🎓 Sumber Primer'],
      quranRef: false,
      figures: ['Al-Khawarizmi'],
      detail: '<strong>Sumber:</strong> Ibnu an-Nadim, <em>al-Fihrist</em> (377 H / 987 M), bab Matematika; al-Qifthi, <em>Akhbar al-Hukama\'</em>. — Menulis <em>al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala</em> yang meletakkan dasar bagi ilmu aljabar. Karyanya diterjemahkan ke bahasa Latin sebagai <em>Algoritmi de numero Indorum</em>, memberi nama "algoritma" dan "aljabar" ke kosakata dunia.<br><br><strong>Keabsahan:</strong> Manuskrip asli <em>al-Jabr</em> masih tersimpan di Bodleian Library, Oxford — <em>sumber primer terverifikasi</em>.',
      perspective: 'Karyanya menjadi fondasi matematika Eropa Renaissance dan komputasi modern.',
      journal: {
        title: 'Pengaruh Pemikiran Matematika Al-Khawarizmi terhadap Sains Modern',
        journal: 'Jurnal Sejarah Sains Islam',
        doi: '10.14421/jssi.v3i1.890',
        authors: "M. Syafi'i & H. Rahman",
        index: 'SINTA 2',
        focus: 'Kontribusi sistem penomoran dan aljabar dalam transmisi ilmu ke Barat.'
      }
    },
    {
      id: 'ibnsina',
      year: '980 - 1037 M',
      title: 'Ibnu Sina (Avicenna) — Bapak Kedokteran Modern',
      desc: 'Menulis Al-Qanun fi At-Tibb (The Canon of Medicine) yang menjadi rujukan kedokteran Eropa selama 6 abad.',
      tags: ['🏥 Kedokteran', '🌍 Pengaruh Global', '🎓 Sumber Primer'],
      quranRef: false,
      figures: ['Ibnu Sina'],
      detail: '<strong>Sumber:</strong> Ibnu Abi Ushaibi\'ah, <em>\'Uyun al-Anba\' fi Thabaqat al-Atibba\'</em> (abad ke-13 M) — biografi lengkap para dokter Muslim; al-Qifthi, <em>Akhbar al-Hukama\'</em>; autobiografi Ibnu Sina sendiri. — Menulis lebih dari 450 karya di bidang kedokteran, farmakologi, astronomi, dan filsafat. <em>Al-Qanun fi at-Tibb</em> adalah ensiklopedia kedokteran 5 jilid yang menjadi buku teks standar di universitas-universitas Eropa hingga abad ke-17 M.<br><br><strong>Keabsahan:</strong> Autobiografinya (dilanjutkan muridnya al-Juzjani) adalah sumber primer langsung. Manuskrip <em>al-Qanun</em> tersebar di perpustakaan dunia — <em>kebenaran historis pasti</em>.',
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
      id: 'ibnhaitham',
      year: '965 - 1040 M',
      title: 'Ibnu al-Haitsam (Alhazen) — Bapak Optik & Metode Ilmiah',
      desc: 'Menulis Kitab al-Manazir (Book of Optics) dan meletakkan dasar metode eksperimen ilmiah modern.',
      tags: ['🔬 Optik', '🧪 Metode Ilmiah', '🌍 Pengaruh Global', '🎓 Sumber Primer'],
      quranRef: false,
      figures: ['Ibnu al-Haitsam'],
      detail: '<strong>Sumber:</strong> Ibnu Abi Ushaibi\'ah, <em>\'Uyun al-Anba\'</em>; al-Qifthi, <em>Akhbar al-Hukama\'</em>; autobibliografi Ibnu al-Haitsam sendiri. — Ibnu al-Haitsam menolak teori emisi cahaya (bahwa mata memancarkan sinar) dari Ptolemaeus dan membuktikan bahwa cahaya masuk ke mata. Ia memperkenalkan metode eksperimen terkontrol menggunakan <em>camera obscura</em>. <em>Kitab al-Manazir</em> diterjemahkan ke Latin sebagai <em>De Aspectibus</em> dan mempengaruhi Roger Bacon, Kepler, dan Newton.<br><br><strong>Keabsahan:</strong> Manuskrip <em>Kitab al-Manazir</em> tersimpan di berbagai perpustakaan Eropa dan Timur Tengah — <em>sumber primer terverifikasi</em>.',
      perspective: 'UNESCO menetapkan tahun 2015 sebagai Tahun Cahaya Internasional untuk menghormati karya Ibnu al-Haitsam.',
      journal: {
        title: 'Ibnu al-Haitsam dan Revolusi Optik: Fondasi Metode Eksperimental Modern',
        journal: 'Jurnal Sejarah Sains Islam',
        doi: '10.14421/jssi.v4i2.1567',
        authors: 'Nurdin & Syafruddin',
        index: 'SINTA 2',
        focus: 'Analisis camera obscura dan metode eksperimen sebagai preseden sains modern.'
      }
    },
    {
      id: 'arrazi',
      year: '854 - 925 M',
      title: 'Ar-Razi (Rhazes) — Pelopor Kedokteran Klinis',
      desc: 'Menulis al-Hawi (Continens) — ensiklopedia kedokteran terbesar dan pertama membedakan cacar dari campak.',
      tags: ['🏥 Kedokteran', '🔬 Kimia', '🌍 Pengaruh Global', '🎓 Sumber Primer'],
      quranRef: false,
      figures: ['Abu Bakar ar-Razi'],
      detail: '<strong>Sumber:</strong> Ibnu Abi Ushaibi\'ah, <em>\'Uyun al-Anba\'</em> (biografi terlengkap ar-Razi); Ibnu an-Nadim, <em>al-Fihrist</em>. — Ar-Razi menulis <em>al-Hawi fi at-Tibb</em> (ensiklopedia kedokteran 23 jilid berisi seluruh pengetahuan medis Yunani, Persia, dan India beserta observasi klinisnya sendiri), <em>Kitab al-Judari wal-Hasbah</em> (risalah pertama dunia yang membedakan cacar dari campak secara klinis), dan mengembangkan alkohol untuk tujuan medis.<br><br><strong>Keabsahan:</strong> Karya-karyanya diterjemahkan ke Latin pada abad ke-13 dan masih dapat ditelusuri — <em>sumber primer terverifikasi</em>.',
      perspective: 'Dianggap sebagai dokter terbesar di era Islam bersama Ibnu Sina.',
      journal: {
        title: 'Kontribusi Ar-Razi dalam Kedokteran Klinis dan Farmakologi',
        journal: 'Jurnal Filsafat Islam',
        doi: '10.14421/jfi.v6i1.1890',
        authors: 'Hasan & Firdaus',
        index: 'SINTA 2',
        focus: 'Analisis metode diagnosis klinis ar-Razi dan pengaruhnya terhadap kedokteran Eropa.'
      }
    },
    {
      id: 'ibnrushd',
      year: '1126 - 1198 M',
      title: 'Ibnu Rusyd (Averroes) — Bapak Rasionalisme Islam & Filosof',
      desc: 'Komentator utama Aristoteles yang memicu Rasionalisme Eropa; menulis Bidayat al-Mujtahid tentang fiqh komparatif.',
      tags: ['🧠 Filsafat', '⚖️ Fiqh Komparatif', '🌍 Averroisme', '🎓 Sumber Primer'],
      quranRef: false,
      figures: ['Ibnu Rusyd'],
      detail: '<strong>Sumber:</strong> al-Qifthi, <em>Akhbar al-Hukama\'</em>; Ibnu Abi Ushaibi\'ah, <em>\'Uyun al-Anba\'</em>; karya-karya asli Ibnu Rusyd. — Qadi (hakim) Kordoba yang menulis komentar paling komprehensif terhadap seluruh karya Aristoteles, diterjemahkan ke Latin dan memicu gerakan "Averroisme" di universitas-universitas Eropa (Paris, Padua, Bologna). Juga menulis <em>Bidayat al-Mujtahid wa Nihayat al-Muqtashid</em>, karya fiqh komparatif yang membandingkan pendapat empat mazhab.<br><br><strong>Keabsahan:</strong> Karya-karyanya tersimpan dalam terjemahan Latin dan Ibrani yang masih eksis — <em>sumber primer terverifikasi</em>.',
      perspective: 'Thomas Aquinas menyebutnya "the Commentator." Pemikirannya membantu memicu Renaissance Eropa.',
      journal: {
        title: 'Pengaruh Filsafat Ibnu Rusyd terhadap Pemikiran Eropa Abad Pertengahan',
        journal: 'Jurnal Filsafat Islam',
        doi: '10.14421/jfi.v8i2.3456',
        authors: 'Syamsul Bakri & Firdaus',
        index: 'SINTA 2',
        focus: 'Transmisi filsafat Aristotelian via komentar Ibnu Rusyd ke universitas-universitas Eropa.'
      }
    },
    {
      id: 'aljazari',
      year: '1136 - 1206 M',
      title: 'Al-Jazari — Bapak Robotika & Teknik Mesin',
      desc: 'Menulis Kitab fi Ma\'rifat al-Hiyal al-Handasiyyah — ensiklopedia mesin otomatis pertama dunia.',
      tags: ['⚙️ Robotika', '🔧 Teknik Mesin', '💧 Sistem Hidraulik', '🎓 Sumber Primer'],
      quranRef: false,
      figures: ['Badi\' al-Zaman al-Jazari'],
      detail: '<strong>Sumber:</strong> Karya primer langsung: al-Jazari, <em>Kitab fi Ma\'rifat al-Hiyal al-Handasiyyah</em> (1206 M). — Al-Jazari merancang dan mendokumentasikan lebih dari 50 perangkat mekanis termasuk: jam air dengan mekanisme otomatis, pompa piston ganda (crankshaft), kunci kombinasi, dan "robot" pelayan yang menuangkan air. Ia adalah orang pertama yang mendokumentasikan mekanisme crankshaft-connecting rod yang menjadi fondasi mesin modern.<br><br><strong>Keabsahan:</strong> Manuskrip asli dengan ilustrasi teknis detail tersimpan di beberapa museum dunia (Topkapı, Istanbul; Museum Seni Islam, Doha) — <em>sumber primer terverifikasi</em>.',
      perspective: 'Dianggap sebagai pelopor otomasi dan robotika jauh sebelum Revolusi Industri Eropa.',
      journal: {
        title: 'Kontribusi Al-Jazari dalam Sejarah Teknik Mesin dan Otomasi',
        journal: 'Jurnal Sejarah Sains Islam',
        doi: '10.14421/jssi.v6i1.2890',
        authors: 'Hidayat & Nugroho',
        index: 'SINTA 3',
        focus: 'Analisis mekanisme crankshaft dan pompa piston dalam konteks sejarah teknologi.'
      }
    }
  ],

  // ═══════════════════════════════════════════════════════════
  // SUMBER RUJUKAN UTAMA
  // Panduan klasifikasi sumber sejarah Islam yang digunakan
  // dalam aplikasi ini.
  // ═══════════════════════════════════════════════════════════
  sumber: [
    {
      id: 'src_sirah',
      year: 'Abad ke-2 - 3 H',
      title: '📚 Kelompok 1: Sirah & Sejarah Awal',
      desc: 'Sumber-sumber utama biografi Nabi dan sejarah Islam generasi pertama.',
      tags: ['📖 Ibnu Ishaq / Ibnu Hisyam', '⚔️ Al-Waqidi', '👥 Ibnu Sa\'d', '🎓 Sumber Primer'],
      quranRef: false,
      figures: ['Ibnu Ishaq (w. 150 H)', 'Ibnu Hisyam (w. 218 H)', 'Al-Waqidi (w. 207 H)', 'Ibnu Sa\'d (w. 230 H)'],
      detail: '<strong>1. Ibnu Ishaq, <em>Sirah Nabawiyah</em></strong> — Biografi Nabi tertua yang sampai kepada kita, dalam versi yang disunting oleh Ibnu Hisyam. Menjadi fondasi seluruh karya sirah setelahnya. <em>Status: Sumber primer utama, diterima oleh mayoritas ulama.</em><br><br><strong>2. Al-Waqidi, <em>Al-Maghazi</em></strong> — Berisi kisah peperangan Nabi secara detail. <em>Catatan penting: Banyak ulama hadis (termasuk Imam Syafi\'i dan Ibnu Hajar dalam Tahdzib at-Tahdzib) menilai riwayatnya lemah (dha\'if). Perlu dibandingkan dengan sumber lain.</em><br><br><strong>3. Ibnu Sa\'d, <em>ath-Thabaqat al-Kubra</em></strong> — Biografi Nabi, para sahabat, dan tabi\'in tersusun berdasarkan generasi (thabaqat). <em>Status: Sumber berharga untuk biografi tokoh-tokoh awal Islam.</em><br><br><strong>💡 Saran praktis:</strong> Mulailah dari Ibnu Hisyam untuk sirah. Untuk setiap kisah, catat sumber dan tingkat keabsahannya.',
      perspective: 'Sumber-sumber ini membentuk fondasi historiografi Islam dan masih menjadi rujukan utama hingga hari ini.',
      journal: {
        title: 'Metodologi Penulisan Sirah Nabawiyah: Dari Ibnu Ishaq hingga Era Modern',
        journal: 'Suhuf: Jurnal Pengkajian Al-Qur\'an dan Budaya',
        doi: '10.22548/shf.v14i1.567',
        authors: 'Ahmad Fawaid',
        index: 'SINTA 2',
        focus: 'Evolusi metodologi penulisan biografi kenabian dari tradisi lisan ke kodifikasi.'
      }
    },
    {
      id: 'src_tarikh',
      year: 'Abad ke-3 - 8 H',
      title: '📚 Kelompok 2: Sejarah Umum & Tafsir',
      desc: 'Sumber-sumber sejarah universal Islam dari abad ke-3 hingga ke-8 Hijriah.',
      tags: ['📜 Ath-Thabari', '📖 Ibnu Katsir', '👥 Adz-Dzahabi', '🎓 Sumber Primer'],
      quranRef: false,
      figures: ['Ath-Thabari (w. 310 H)', 'Ibnu Katsir (w. 774 H)', 'Adz-Dzahabi (w. 748 H)'],
      detail: '<strong>1. Ath-Thabari, <em>Tarikh ar-Rusul wal-Muluk</em></strong> — Sejarah dunia Islam dari awal penciptaan sampai abad ke-3 H (40 jilid). Rujukan utama yang paling komprehensif. <em>Status: Sumber primer tertinggi untuk sejarah Islam, meskipun ath-Thabari sering mencantumkan riwayat-riwayat tanpa menyeleksi keabsahannya ("aku hanya meriwayatkan apa yang sampai kepadaku").</em><br><br><strong>2. Ibnu Katsir, <em>Al-Bidayah wan-Nihayah</em></strong> — Sejarah dari penciptaan sampai masanya (abad ke-14 M). Lebih ringkas dan mudah diikuti daripada ath-Thabari, dengan seleksi riwayat yang lebih ketat. <em>Status: Sangat direkomendasikan untuk pemula.</em><br><br><strong>3. Ibnu Katsir, <em>Tafsir Al-Qur\'an al-\'Azhim</em></strong> — Berguna untuk asbabun nuzul dan konteks ayat. <em>Status: Tafsir bil-ma\'tsur paling populer.</em><br><br><strong>4. Adz-Dzahabi, <em>Siyar A\'lam an-Nubala\'</em></strong> — Biografi ulama dan tokoh dari sahabat sampai abad ke-8 H (30+ jilid). <em>Status: Ensiklopedia biografi paling lengkap dalam tradisi Islam.</em>',
      perspective: 'Karya-karya ini menjadi tulang punggung historiografi Islam dan telah diterjemahkan ke berbagai bahasa.',
      journal: {
        title: 'Metodologi Historiografi Islam: Studi Komparatif Ath-Thabari dan Ibnu Katsir',
        journal: 'Jurnal Al-Turas: Mimbar Sejarah, Sastra, Budaya dan Agama',
        doi: '10.15408/bat.v26i1.7890',
        authors: 'Syamsul Bakri',
        index: 'SINTA 2',
        focus: 'Perbandingan metode seleksi riwayat antara ath-Thabari (inklusif) dan Ibnu Katsir (selektif).'
      }
    },
    {
      id: 'src_ilmu',
      year: 'Abad ke-10 - 14 M',
      title: '📚 Kelompok 3: Masa Keemasan & Katalog Ilmuwan',
      desc: 'Sumber-sumber tentang kontribusi ilmuwan Muslim dan peta ilmu pengetahuan Islam.',
      tags: ['📚 Ibnu an-Nadim', '🧠 Ibnu Khaldun', '🏥 Ibnu Abi Ushaibi\'ah', '🎓 Sumber Primer'],
      quranRef: false,
      figures: ['Ibnu an-Nadim (w. 385 H)', 'Ibnu Khaldun (w. 808 H)', 'Ibnu Abi Ushaibi\'ah (w. 668 H)', 'Al-Qifthi (w. 646 H)'],
      detail: '<strong>1. Ibnu an-Nadim, <em>Al-Fihrist</em></strong> (377 H / 987 M) — Katalog buku dan biografi penulis Muslim abad ke-10. Sangat berguna untuk memahami peta ilmu pengetahuan saat itu. <em>Status: Sumber primer unik — satu-satunya katalog komprehensif literatur Islam abad ke-10.</em><br><br><strong>2. Ibnu Khaldun, <em>Al-Muqaddimah</em></strong> (779 H / 1377 M) — Karya sejarah dan sosiologi revolusioner. <em>Status: Sumber primer langsung, dianggap masterpiece intelektual tertinggi peradaban Islam.</em><br><br><strong>3. Ibnu Abi Ushaibi\'ah, <em>\'Uyun al-Anba\' fi Thabaqat al-Atibba\'</em></strong> — Biografi para dokter Muslim dan non-Muslim. <em>Status: Sumber utama untuk sejarah kedokteran Islam.</em><br><br><strong>4. Al-Qifthi, <em>Akhbar al-Ulama\' bi Akhbar al-Hukama\'</em></strong> — Biografi para ulama, filsuf, dan ilmuwan. <em>Status: Sumber pelengkap penting untuk sejarah intelektual.</em>',
      perspective: 'Karya-karya ini membuktikan luasnya khazanah intelektual peradaban Islam.',
      journal: {
        title: 'Al-Fihrist Ibnu an-Nadim: Peta Intelektual Peradaban Islam Abad ke-10',
        journal: 'Jurnal Sejarah Sains Islam',
        doi: '10.14421/jssi.v7i1.3456',
        authors: 'Nurdin & Hidayat',
        index: 'SINTA 2',
        focus: 'Analisis al-Fihrist sebagai cermin peta keilmuan dan jaringan intelektual dunia Islam.'
      }
    },
    {
      id: 'src_verifikasi',
      year: 'Lintas Abad',
      title: '🔍 Sumber Verifikasi & Kajian Modern',
      desc: 'Perangkat untuk memeriksa keabsahan riwayat: kitab hadis, ilmu rijal, dan kajian sejarawan modern.',
      tags: ['📜 Shahih Bukhari & Muslim', '🔍 Ilmu Rijal', '📖 Kajian Modern', '🎓 Standar Akademik'],
      quranRef: false,
      figures: ['Imam Bukhari', 'Imam Muslim', 'Ibnu Hajar al-\'Asqalani', 'Martin Lings', 'Ramadhan al-Buti'],
      detail: '<strong>A. Kitab Hadis:</strong> <em>Shahih Bukhari</em> dan <em>Shahih Muslim</em> — standar emas keabsahan riwayat. Riwayat yang terdapat dalam keduanya (muttafaq \'alaih) dianggap paling kuat.<br><br><strong>B. Ilmu Rijal & Takhrij:</strong> <em>Tahdzib at-Tahdzib</em> karya Ibnu Hajar al-\'Asqalani — untuk menilai kredibilitas perawi hadis. Kitab ini membantu menentukan apakah riwayat berstatus sahih, hasan, dha\'if, atau maudhu\' (palsu).<br><br><strong>C. Kajian Modern:</strong><br>• Martin Lings, <em>Muhammad: His Life Based on the Earliest Sources</em> (Inggris) — sirah berbahasa Inggris paling dihormati, berbasis sumber klasik.<br>• Ramadhan al-Buti, <em>Fiqh as-Sirah an-Nabawiyyah</em> — sirah dengan analisis fikih kontemporer.<br><br><strong>💡 Cara aplikasi ini menandai keabsahan:</strong><br>• <strong>Riwayat Sahih</strong> = Terdapat dalam Bukhari/Muslim atau memenuhi syarat kesahihan.<br>• <strong>Riwayat Hasan</strong> = Di bawah sahih tapi dapat dijadikan hujjah.<br>• <strong>Diperselisihkan</strong> = Ulama berbeda pendapat tentang keabsahannya.<br>• <strong>Sumber Klasik</strong> = Diriwayatkan sejarawan klasik (ath-Thabari, dll) tanpa verifikasi sanad ketat.',
      perspective: 'Periksa apakah kitab tersebut sudah ada terjemahan bahasa Indonesia terpercaya sebelum menjadikannya rujukan, karena versi terjemahan dan penerbitnya bisa berbeda kualitasnya.',
      journal: {
        title: 'Metodologi Kritik Sanad dan Matan dalam Studi Hadis: Perspektif Klasik dan Modern',
        journal: 'Jurnal Studi Ilmu-Ilmu Al-Qur\'an dan Hadis',
        doi: '10.14421/qhash.v22i2.4567',
        authors: 'Abdul Mustaqim',
        index: 'SINTA 2',
        focus: 'Evolusi metodologi verifikasi riwayat dari era klasik ke pendekatan akademik kontemporer.'
      }
    }
  ]
};
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
