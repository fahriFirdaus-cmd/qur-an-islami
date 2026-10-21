const fs = require('fs');
const path = require('path');

const surahs = [
  { id: 1, name: "Al-Faatiha", arTitle: "سُوْرَةُ الفَاتِحَةِ", ar: "الفَاتِحَة", type: "MECCAN", ayat: 7 },
  { id: 2, name: "Al-Baqara", arTitle: "سُوْرَةُ البَقَرَةِ", ar: "البَقَرَة", type: "MEDINAN", ayat: 286 },
  { id: 3, name: "Aal-i-Imraan", arTitle: "سُوْرَةُ آلِ عِمْرَانَ", ar: "آلِ عِمْرَان", type: "MEDINAN", ayat: 200 },
  { id: 4, name: "An-Nisaa", arTitle: "سُوْرَةُ النِّسَاءِ", ar: "النِّسَاء", type: "MEDINAN", ayat: 176 },
  { id: 5, name: "Al-Maaida", arTitle: "سُوْرَةُ المَائِدَةِ", ar: "المَائِدَة", type: "MEDINAN", ayat: 120 },
  { id: 6, name: "Al-An'aam", arTitle: "سُوْرَةُ الأَنْعَامِ", ar: "الأَنْعَام", type: "MECCAN", ayat: 165 },
  { id: 7, name: "Al-A'raaf", arTitle: "سُوْرَةُ الأَعْرَافِ", ar: "الأَعْرَاف", type: "MECCAN", ayat: 206 },
  { id: 8, name: "Al-Anfaal", arTitle: "سُوْرَةُ الأَنْفَالِ", ar: "الأَنْفَال", type: "MEDINAN", ayat: 75 },
  { id: 9, name: "At-Tawba", arTitle: "سُوْرَةُ التَّوْبَةِ", ar: "التَّوْبَة", type: "MEDINAN", ayat: 129 },
  { id: 10, name: "Yunus", arTitle: "سُوْرَةُ يُوْنُسَ", ar: "يُوْنُس", type: "MECCAN", ayat: 109 },
  { id: 11, name: "Hud", arTitle: "سُوْرَةُ هُوْدٍ", ar: "هُوْد", type: "MECCAN", ayat: 123 },
  { id: 12, name: "Yusuf", arTitle: "سُوْرَةُ يُوْسُفَ", ar: "يُوْسُف", type: "MECCAN", ayat: 111 },
  { id: 13, name: "Ar-Ra'd", arTitle: "سُوْرَةُ الرَّعْدِ", ar: "الرَّعْد", type: "MEDINAN", ayat: 43 },
  { id: 14, name: "Ibrahim", arTitle: "سُوْرَةُ إِبْرَاهِيمَ", ar: "إِبْرَاهِيم", type: "MECCAN", ayat: 52 },
  { id: 15, name: "Al-Hijr", arTitle: "سُوْرَةُ الحِجْرِ", ar: "الحِجْر", type: "MECCAN", ayat: 99 },
  { id: 16, name: "An-Nahl", arTitle: "سُوْرَةُ النَّحْلِ", ar: "النَّحْل", type: "MECCAN", ayat: 128 },
  { id: 17, name: "Al-Israa", arTitle: "سُوْرَةُ الإِسْرَاءِ", ar: "الإِسْرَاء", type: "MECCAN", ayat: 111 },
  { id: 18, name: "Al-Kahf", arTitle: "سُوْرَةُ الكَهْفِ", ar: "الكَهْف", type: "MECCAN", ayat: 110 },
  { id: 19, name: "Maryam", arTitle: "سُوْرَةُ مَرْيَمَ", ar: "مَرْيَم", type: "MECCAN", ayat: 98 },
  { id: 20, name: "Taa-Haa", arTitle: "سُوْرَةُ طٰهٰ", ar: "طٰهٰ", type: "MECCAN", ayat: 135 },
  { id: 21, name: "Al-Anbiyaa", arTitle: "سُوْرَةُ الأَنْبِيَاءِ", ar: "الأَنْبِيَاء", type: "MECCAN", ayat: 112 },
  { id: 22, name: "Al-Hajj", arTitle: "سُوْرَةُ الحَجِّ", ar: "الحَجّ", type: "MEDINAN", ayat: 78 },
  { id: 23, name: "Al-Mu'minoon", arTitle: "سُوْرَةُ المُؤْمِنُونَ", ar: "المُؤْمِنُون", type: "MECCAN", ayat: 118 },
  { id: 24, name: "An-Noor", arTitle: "سُوْرَةُ النُّورِ", ar: "النُّور", type: "MEDINAN", ayat: 64 },
  { id: 25, name: "Al-Furqaan", arTitle: "سُوْرَةُ الفُرْقَانِ", ar: "الفُرْقَان", type: "MECCAN", ayat: 77 },
  { id: 26, name: "Ash-Shu'araa", arTitle: "سُوْرَةُ الشُّعَرَاءِ", ar: "الشُّعَرَاء", type: "MECCAN", ayat: 227 },
  { id: 27, name: "An-Naml", arTitle: "سُوْرَةُ النَّمْلِ", ar: "النَّمْل", type: "MECCAN", ayat: 93 },
  { id: 28, name: "Al-Qasas", arTitle: "سُوْرَةُ القَصَصِ", ar: "القَصَص", type: "MECCAN", ayat: 88 },
  { id: 29, name: "Al-Ankaboot", arTitle: "سُوْرَةُ العَنْكَبُوتِ", ar: "العَنْكَبُوت", type: "MECCAN", ayat: 69 },
  { id: 30, name: "Ar-Room", arTitle: "سُوْرَةُ الرُّومِ", ar: "الرُّوم", type: "MECCAN", ayat: 60 },
  { id: 31, name: "Luqman", arTitle: "سُوْرَةُ لُقْمَانَ", ar: "لُقْمَان", type: "MECCAN", ayat: 34 },
  { id: 32, name: "As-Sajda", arTitle: "سُوْرَةُ السَّجْدَةِ", ar: "السَّجْدَة", type: "MECCAN", ayat: 30 },
  { id: 33, name: "Al-Ahzaab", arTitle: "سُوْرَةُ الأَحْزَابِ", ar: "الأَحْزَاب", type: "MEDINAN", ayat: 73 },
  { id: 34, name: "Saba", arTitle: "سُوْرَةُ سَبَإٍ", ar: "سَبَأ", type: "MECCAN", ayat: 54 },
  { id: 35, name: "Faatir", arTitle: "سُوْرَةُ فَاطِرٍ", ar: "فَاطِر", type: "MECCAN", ayat: 45 },
  { id: 36, name: "Yaa-Seen", arTitle: "سُوْرَةُ يٰسٓ", ar: "يسٓ", type: "MECCAN", ayat: 83 },
  { id: 37, name: "As-Saaffaat", arTitle: "سُوْرَةُ الصَّافَّاتِ", ar: "الصَّافَّات", type: "MECCAN", ayat: 182 },
  { id: 38, name: "Saad", arTitle: "سُوْرَةُ صٓ", ar: "صٓ", type: "MECCAN", ayat: 88 },
  { id: 39, name: "Az-Zumar", arTitle: "سُوْرَةُ الزُّمَرِ", ar: "الزُّمَر", type: "MECCAN", ayat: 75 },
  { id: 40, name: "Ghafir", arTitle: "سُوْرَةُ غَافِرٍ", ar: "غَافِر", type: "MECCAN", ayat: 85 },
  { id: 41, name: "Fussilat", arTitle: "سُوْرَةُ فُصِّلَتْ", ar: "فُصِّلَت", type: "MECCAN", ayat: 54 },
  { id: 42, name: "Ash-Shoora", arTitle: "سُوْرَةُ الشُّورَىٰ", ar: "الشُّورَى", type: "MECCAN", ayat: 53 },
  { id: 43, name: "Az-Zukhruf", arTitle: "سُوْرَةُ الزُّخْرُفِ", ar: "الزُّخْرُف", type: "MECCAN", ayat: 89 },
  { id: 44, name: "Ad-Dukhaan", arTitle: "سُوْرَةُ الدُّخَانِ", ar: "الدُّخَان", type: "MECCAN", ayat: 59 },
  { id: 45, name: "Al-Jaathiya", arTitle: "سُوْرَةُ الجَاثِيَةِ", ar: "الجَاثِيَة", type: "MECCAN", ayat: 37 },
  { id: 46, name: "Al-Ahqaf", arTitle: "سُوْرَةُ الأَحْقَافِ", ar: "الأَحْقَاف", type: "MECCAN", ayat: 35 },
  { id: 47, name: "Muhammad", arTitle: "سُوْرَةُ مُحَمَّدٍ", ar: "مُحَمَّد", type: "MEDINAN", ayat: 38 },
  { id: 48, name: "Al-Fat-h", arTitle: "سُوْرَةُ الفَتْحِ", ar: "الفَتْح", type: "MEDINAN", ayat: 29 },
  { id: 49, name: "Al-Hujuraat", arTitle: "سُوْرَةُ الحُجُرَاتِ", ar: "الحُجُرَات", type: "MEDINAN", ayat: 18 },
  { id: 50, name: "Qaaf", arTitle: "سُوْرَةُ قٓ", ar: "قٓ", type: "MECCAN", ayat: 45 },
  { id: 51, name: "Adh-Dhaariyaat", arTitle: "سُوْرَةُ الذَّارِيَاتِ", ar: "الذَّارِيَات", type: "MECCAN", ayat: 60 },
  { id: 52, name: "At-Toor", arTitle: "سُوْرَةُ الطُّورِ", ar: "الطُّور", type: "MECCAN", ayat: 49 },
  { id: 53, name: "An-Najm", arTitle: "سُوْرَةُ النَّجْمِ", ar: "النَّجْم", type: "MECCAN", ayat: 62 },
  { id: 54, name: "Al-Qamar", arTitle: "سُوْرَةُ القَمَرِ", ar: "القَمَر", type: "MECCAN", ayat: 55 },
  { id: 55, name: "Ar-Rahmaan", arTitle: "سُوْرَةُ الرَّحْمَٰنِ", ar: "الرَّحْمٰن", type: "MEDINAN", ayat: 78 },
  { id: 56, name: "Al-Waaqia", arTitle: "سُوْرَةُ الوَاقِعَةِ", ar: "الوَاقِعَة", type: "MECCAN", ayat: 96 },
  { id: 57, name: "Al-Hadeed", arTitle: "سُوْرَةُ الحَدِيدِ", ar: "الحَدِيد", type: "MEDINAN", ayat: 29 },
  { id: 58, name: "Al-Mujaadila", arTitle: "سُوْرَةُ المُجَادَلَةِ", ar: "المُجَادَلَة", type: "MEDINAN", ayat: 22 },
  { id: 59, name: "Al-Hashr", arTitle: "سُوْرَةُ الحَشْرِ", ar: "الحَشْر", type: "MEDINAN", ayat: 24 },
  { id: 60, name: "Al-Mumtahana", arTitle: "سُوْرَةُ المُمْتَحَنَةِ", ar: "المُمْتَحَنَة", type: "MEDINAN", ayat: 13 },
  { id: 61, name: "As-Saff", arTitle: "سُوْرَةُ الصَّفِّ", ar: "الصَّفّ", type: "MEDINAN", ayat: 14 },
  { id: 62, name: "Al-Jumu'a", arTitle: "سُوْرَةُ الجُمُعَةِ", ar: "الجُمُعَة", type: "MEDINAN", ayat: 11 },
  { id: 63, name: "Al-Munaafiqoon", arTitle: "سُوْرَةُ المُنَافِقُونَ", ar: "المُنَافِقُون", type: "MEDINAN", ayat: 11 },
  { id: 64, name: "At-Taghaabun", arTitle: "سُوْرَةُ التَّغَابُنِ", ar: "التَّغَابُن", type: "MEDINAN", ayat: 18 },
  { id: 65, name: "At-Talaaq", arTitle: "سُوْرَةُ الطَّلَاقِ", ar: "الطَّلَاق", type: "MEDINAN", ayat: 12 },
  { id: 66, name: "At-Tahreem", arTitle: "سُوْرَةُ التَّحْرِيمِ", ar: "التَّحْرِيم", type: "MEDINAN", ayat: 12 },
  { id: 67, name: "Al-Mulk", arTitle: "سُوْرَةُ المُلْكِ", ar: "المُلْك", type: "MECCAN", ayat: 30 },
  { id: 68, name: "Al-Qalam", arTitle: "سُوْرَةُ القَلَمِ", ar: "القَلَم", type: "MECCAN", ayat: 52 },
  { id: 69, name: "Al-Haaqqa", arTitle: "سُوْرَةُ الحَاقَّةِ", ar: "الحَاقَّة", type: "MECCAN", ayat: 52 },
  { id: 70, name: "Al-Ma'aarij", arTitle: "سُوْرَةُ المَعَارِجِ", ar: "المَعَارِج", type: "MECCAN", ayat: 44 },
  { id: 71, name: "Nooh", arTitle: "سُوْرَةُ نُوحٍ", ar: "نُوح", type: "MECCAN", ayat: 28 },
  { id: 72, name: "Al-Jinn", arTitle: "سُوْرَةُ الجِنِّ", ar: "الجِنّ", type: "MECCAN", ayat: 28 },
  { id: 73, name: "Al-Muzzammil", arTitle: "سُوْرَةُ المُزَّمِّلِ", ar: "المُزَّمِّل", type: "MECCAN", ayat: 20 },
  { id: 74, name: "Al-Muddath-thir", arTitle: "سُوْرَةُ المُدَّثِّرِ", ar: "المُدَّثِّر", type: "MECCAN", ayat: 56 },
  { id: 75, name: "Al-Qiyaama", arTitle: "سُوْرَةُ القِيَامَةِ", ar: "القِيَامَة", type: "MECCAN", ayat: 40 },
  { id: 76, name: "Al-Insaan", arTitle: "سُوْرَةُ الإِنْسَانِ", ar: "الإِنْسَان", type: "MEDINAN", ayat: 31 },
  { id: 77, name: "Al-Mursalaat", arTitle: "سُوْرَةُ المُرْسَلَاتِ", ar: "المُرْسَلَات", type: "MECCAN", ayat: 50 },
  { id: 78, name: "An-Naba", arTitle: "سُوْرَةُ النَّبَإِ", ar: "النَّبَأ", type: "MECCAN", ayat: 40 },
  { id: 79, name: "An-Naazi'aat", arTitle: "سُوْرَةُ النَّازِعَاتِ", ar: "النَّازِعَات", type: "MECCAN", ayat: 46 },
  { id: 80, name: "Abasa", arTitle: "سُوْرَةُ عَبَسَ", ar: "عَبَس", type: "MECCAN", ayat: 42 },
  { id: 81, name: "At-Takweer", arTitle: "سُوْرَةُ التَّكْوِيرِ", ar: "التَّكْوِير", type: "MECCAN", ayat: 29 },
  { id: 82, name: "Al-Infitaar", arTitle: "سُوْرَةُ الإِنْفِطَارِ", ar: "الإِنْفِطَار", type: "MECCAN", ayat: 19 },
  { id: 83, name: "Al-Mutaffifeen", arTitle: "سُوْرَةُ المُطَفِّفِينَ", ar: "المُطَفِّفِين", type: "MECCAN", ayat: 36 },
  { id: 84, name: "Al-Inshiqaaq", arTitle: "سُوْرَةُ الإِنْشِقَاقِ", ar: "الإِنْشِقَاق", type: "MECCAN", ayat: 25 },
  { id: 85, name: "Al-Burooj", arTitle: "سُوْرَةُ البُرُوجِ", ar: "البُرُوج", type: "MECCAN", ayat: 22 },
  { id: 86, name: "At-Taariq", arTitle: "سُوْرَةُ الطَّارِقِ", ar: "الطَّارِق", type: "MECCAN", ayat: 17 },
  { id: 87, name: "Al-A'laa", arTitle: "سُوْرَةُ الأَعْلَىٰ", ar: "الأَعْلَى", type: "MECCAN", ayat: 19 },
  { id: 88, name: "Al-Ghaashiya", arTitle: "سُوْرَةُ الغَاشِيَةِ", ar: "الغَاشِيَة", type: "MECCAN", ayat: 26 },
  { id: 89, name: "Al-Fajr", arTitle: "سُوْرَةُ الفَجْرِ", ar: "الفَجْر", type: "MECCAN", ayat: 30 },
  { id: 90, name: "Al-Balad", arTitle: "سُوْرَةُ البَلَدِ", ar: "البَلَد", type: "MECCAN", ayat: 20 },
  { id: 91, name: "Ash-Shams", arTitle: "سُوْرَةُ الشَّمْسِ", ar: "الشَّمْس", type: "MECCAN", ayat: 15 },
  { id: 92, name: "Al-Lail", arTitle: "سُوْرَةُ اللَّيْلِ", ar: "اللَّيْل", type: "MECCAN", ayat: 21 },
  { id: 93, name: "Ad-Dhuhaa", arTitle: "سُوْرَةُ الضُّحَىٰ", ar: "الضُّحَى", type: "MECCAN", ayat: 11 },
  { id: 94, name: "Ash-Sharh", arTitle: "سُوْرَةُ الشَّرْحِ", ar: "الشَّرْح", type: "MECCAN", ayat: 8 },
  { id: 95, name: "At-Teen", arTitle: "سُوْرَةُ التِّينِ", ar: "التِّين", type: "MECCAN", ayat: 8 },
  { id: 96, name: "Al-Alaq", arTitle: "سُوْرَةُ العَلَقِ", ar: "العَلَق", type: "MECCAN", ayat: 19 },
  { id: 97, name: "Al-Qadr", arTitle: "سُوْرَةُ القَدْرِ", ar: "القَدْر", type: "MECCAN", ayat: 5 },
  { id: 98, name: "Al-Bayyina", arTitle: "سُوْرَةُ البَيِّنَةِ", ar: "البَيِّنَة", type: "MEDINAN", ayat: 8 },
  { id: 99, name: "Az-Zalzala", arTitle: "سُوْرَةُ الزَّلْزَلَةِ", ar: "الزَّلْزَلَة", type: "MEDINAN", ayat: 8 },
  { id: 100, name: "Al-Aadiyaat", arTitle: "سُوْرَةُ العَادِيَاتِ", ar: "العَادِيَات", type: "MECCAN", ayat: 11 },
  { id: 101, name: "Al-Qaari'a", arTitle: "سُوْرَةُ القَارِعَةِ", ar: "القَارِعَة", type: "MECCAN", ayat: 11 },
  { id: 102, name: "At-Takaathur", arTitle: "سُوْرَةُ التَّكَاثُرِ", ar: "التَّكَاثُر", type: "MECCAN", ayat: 8 },
  { id: 103, name: "Al-Asr", arTitle: "سُوْرَةُ العَصْرِ", ar: "العَصْر", type: "MECCAN", ayat: 3 },
  { id: 104, name: "Al-Humaza", arTitle: "سُوْرَةُ الهُمَزَةِ", ar: "الهُمَزَة", type: "MECCAN", ayat: 9 },
  { id: 105, name: "Al-Feel", arTitle: "سُوْرَةُ الفِيلِ", ar: "الفِيل", type: "MECCAN", ayat: 5 },
  { id: 106, name: "Quraish", arTitle: "سُوْرَةُ قُرَيْشٍ", ar: "قُرَيْش", type: "MECCAN", ayat: 4 },
  { id: 107, name: "Al-Maa'oon", arTitle: "سُوْرَةُ المَاعُونِ", ar: "المَاعُون", type: "MECCAN", ayat: 7 },
  { id: 108, name: "Al-Kawthar", arTitle: "سُوْرَةُ الكَوْثَرِ", ar: "الكَوْثَر", type: "MECCAN", ayat: 3 },
  { id: 109, name: "Al-Kaafiroon", arTitle: "سُوْرَةُ الكَافِرُونَ", ar: "الكَاَفِرُون", type: "MECCAN", ayat: 6 },
  { id: 110, name: "An-Nasr", arTitle: "سُوْرَةُ النَّصْرِ", ar: "النَّصْر", type: "MEDINAN", ayat: 3 },
  { id: 111, name: "Al-Masad", arTitle: "سُوْرَةُ المَسَدِ", ar: "المَسَد", type: "MECCAN", ayat: 5 },
  { id: 112, name: "Al-Ikhlaas", arTitle: "سُوْرَةُ الإِخْلَاصِ", ar: "الإِخْلَاص", type: "MECCAN", ayat: 4 },
  { id: 113, name: "Al-Falaq", arTitle: "سُوْرَةُ الفَلَقِ", ar: "الفَلَق", type: "MECCAN", ayat: 5 },
  { id: 114, name: "An-Naas", arTitle: "سُوْرَةُ النَّاسِ", ar: "النَّاس", type: "MECCAN", ayat: 6 }
];

const dataPath = path.join(__dirname, 'web', 'data.js');
const current = fs.readFileSync(dataPath, 'utf8');

// Find where VERSES starts
const versesIndex = current.indexOf('// ─── Verses (Rasm Uthmani) ───');
if (versesIndex === -1) {
  console.error("Could not find VERSES marker");
  process.exit(1);
}

const rest = current.slice(versesIndex);

const header = `// ═══════════════════════════════════════════════════════════
// DATA.JS — Dataset Lengkap Al-Qur'an Harmony, Sejarah, Qori
// Quran Harmony — Spiritual Journey
// ═══════════════════════════════════════════════════════════

const ALL_SURAHS = ${JSON.stringify(surahs, null, 2)};

`;

fs.writeFileSync(dataPath, header + rest, 'utf8');
console.log('Successfully updated web/data.js with complete 114 surahs');
