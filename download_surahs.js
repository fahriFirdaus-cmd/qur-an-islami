const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'web', 'data', 'surah');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function fetchWithRetry(url, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return await res.json();
      console.warn(`Fetch ${url} failed with status ${res.status}, retrying (${i + 1}/${retries})...`);
    } catch (err) {
      console.warn(`Fetch ${url} error: ${err.message}, retrying (${i + 1}/${retries})...`);
    }
    await new Promise(r => setTimeout(r, delay));
  }
  return null;
}

async function main() {
  console.log('🚀 Memulai pengunduhan dan penyusunan dataset 114 Surah...');
  console.log(`📁 Direktori tujuan: ${outDir}`);

  console.log('⏳ Mengunduh teks Rasm Utsmani Madinah (api.alquran.cloud)...');
  const uthmaniRes = await fetchWithRetry('https://api.alquran.cloud/v1/quran/quran-uthmani');
  const uthmaniSurahs = uthmaniRes?.data?.surahs || [];

  console.log('⏳ Mengunduh terjemahan bahasa Inggris Sahih International...');
  const enRes = await fetchWithRetry('https://api.alquran.cloud/v1/quran/en.sahih');
  const enSurahs = enRes?.data?.surahs || [];

  console.log(`✅ Berhasil memuat ${uthmaniSurahs.length} surah Rasm Utsmani & ${enSurahs.length} surah terjemahan EN.`);
  console.log('⏳ Menyusun dan mengunduh data ayat Kemenag per surat (1 - 114)...');

  // Process in batches of 5 to respect rate limits
  const BATCH_SIZE = 5;
  for (let i = 1; i <= 114; i += BATCH_SIZE) {
    const batch = [];
    for (let id = i; id < i + BATCH_SIZE && id <= 114; id++) {
      batch.push((async () => {
        const filePath = path.join(outDir, `${id}.json`);
        // If file exists and has ayahs, skip
        if (fs.existsSync(filePath)) {
          try {
            const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            if (existing && existing.ayahs && existing.ayahs.length > 0) {
              console.log(`⏩ Surah ${id} (${existing.name}) sudah ada, lewati.`);
              return;
            }
          } catch (e) {}
        }

        const equranData = await fetchWithRetry(`https://equran.id/api/v2/surat/${id}`);
        const s = equranData?.data;

        const uthSurah = uthmaniSurahs.find(item => item.number === id);
        const enSurah = enSurahs.find(item => item.number === id);

        const uthAyahs = uthSurah?.ayahs || [];
        const enAyahs = enSurah?.ayahs || [];

        let ayahs = [];
        if (s && s.ayat) {
          ayahs = s.ayat.map((a, idx) => ({
            number: a.nomorAyat,
            arab: uthAyahs[idx]?.text || a.teksArab,
            arab_kemenag: a.teksArab,
            latin: a.teksLatin,
            translation_id: a.teksIndonesia,
            translation_en: enAyahs[idx]?.text || a.teksIndonesia,
            audio: a.audio
          }));
        } else if (uthAyahs.length > 0) {
          // Fallback if equran.id is unavailable
          ayahs = uthAyahs.map((a, idx) => ({
            number: a.numberInSurah,
            arab: a.text,
            arab_kemenag: a.text,
            latin: `Verse ${a.numberInSurah}`,
            translation_id: `Ayat ${a.numberInSurah}`,
            translation_en: enAyahs[idx]?.text || '',
            audio: {}
          }));
        }

        const surahDoc = {
          number: id,
          name: s?.namaLatin || uthSurah?.englishName || `Surah ${id}`,
          name_arabic: s?.nama || uthSurah?.name || '',
          name_translation: s?.arti || uthSurah?.englishNameTranslation || '',
          revelation: s?.tempatTurun || (uthSurah?.revelationType === 'Meccan' ? 'Makkiyyah' : 'Madaniyyah'),
          numberOfAyahs: s?.jumlahAyat || uthSurah?.numberOfAyahs || ayahs.length,
          audio_full: s?.audioFull || {},
          ayahs: ayahs
        };

        fs.writeFileSync(filePath, JSON.stringify(surahDoc, null, 2), 'utf8');
        console.log(`✅ [${id}/114] Disimpan: ${surahDoc.name} (${surahDoc.ayahs.length} ayat) -> ${id}.json`);
      })());
    }

    await Promise.all(batch);
    // Polite delay between batches
    await new Promise(r => setTimeout(r, 200));
  }

  console.log('\n🎉 Selesai! Seluruh 114 berkas surah berhasil disimpan di web/data/surah/');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
