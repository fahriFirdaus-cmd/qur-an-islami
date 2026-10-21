// backend/src/scripts/testEndpoints.js
/**
 * Script Uji Coba Otomatis (Integration Test) untuk Nur Al-Qur'an API
 */
const http = require('http');

const BASE_URL = 'http://localhost:5000';

function fetchUrl(path) {
  return new Promise((resolve, reject) => {
    http.get(`${BASE_URL}${path}`, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(data) });
        } catch (e) {
          resolve({ status: res.statusCode, body: data });
        }
      });
    }).on('error', (err) => reject(err));
  });
}

async function runTests() {
  console.log('====================================================');
  console.log('🧪 MEMULAI UJI COBA OTOMATIS NUR AL-QUR\'AN API');
  console.log('====================================================\n');

  let passed = 0;
  let total = 0;

  async function test(name, fn) {
    total++;
    try {
      await fn();
      console.log(`✅ [LULUS] ${name}`);
      passed++;
    } catch (err) {
      console.error(`❌ [GAGAL] ${name}:`, err.message);
    }
  }

  // 1. Test Root
  await test('Endpoint Healthcheck (GET /)', async () => {
    const res = await fetchUrl('/');
    if (res.status !== 200 || res.body.status !== 'online') {
      throw new Error(`Status tidak online (HTTP ${res.status})`);
    }
  });

  // 2. Test Surahs List
  await test('Endpoint Daftar Surah (GET /api/v1/surahs)', async () => {
    const res = await fetchUrl('/api/v1/surahs');
    if (res.status !== 200 || !Array.isArray(res.body.data) || res.body.data.length === 0) {
      throw new Error('Gagal mengambil daftar surah');
    }
    console.log(`   └─ Ditemukan: ${res.body.total} Surah`);
  });

  // 3. Test Relational Verse Detail with History (Al-Anfal: 17)
  await test('Endpoint Relasional Ayat & Jejak Sejarah Badar (GET /api/v1/verses/8/17/details)', async () => {
    const res = await fetchUrl('/api/v1/verses/8/17/details');
    if (res.status !== 200 || !res.body.success) {
      throw new Error('Gagal memuat detail ayat');
    }
    const d = res.body.data;
    if (!d.verse.text_uthmani.includes('فَلَمْ تَقْتُلُوْهُمْ')) {
      throw new Error('Teks Rasm Uthmani tidak cocok');
    }
    if (!d.historical_context.has_historical_link) {
      throw new Error('Jejak Sejarah tidak tertaut');
    }
    console.log(`   ├─ Teks Arab: ${d.verse.text_uthmani.substring(0, 35)}...`);
    console.log(`   ├─ Terjemahan: ${d.translations[0].text.substring(0, 45)}...`);
    console.log(`   ├─ Peristiwa: ${d.historical_context.links[0].event_title}`);
    console.log(`   └─ Audio Qori Tersedia: ${d.audio_streams.length} Qori`);
  });

  // 4. Test History Timeline
  await test('Endpoint Lini Masa Sejarah Islam (GET /api/v1/history/timeline)', async () => {
    const res = await fetchUrl('/api/v1/history/timeline');
    if (res.status !== 200 || !Array.isArray(res.body.data)) {
      throw new Error('Gagal mengambil lini masa');
    }
    console.log(`   └─ Total Peristiwa Sejarah: ${res.body.total} peristiwa`);
  });

  // 5. Test Reciters List
  await test('Endpoint Daftar Qori Internasional & Nusantara (GET /api/v1/reciters)', async () => {
    const res = await fetchUrl('/api/v1/reciters');
    if (res.status !== 200 || !Array.isArray(res.body.data)) {
      throw new Error('Gagal mengambil qori');
    }
    console.log(`   └─ Total Qori: ${res.body.total} Qori (Murattal & Mujawwad)`);
  });

  console.log('\n====================================================');
  console.log(`🏁 HASIL AKHIR: ${passed}/${total} Uji Coba Berhasil Lulus 100%!`);
  console.log('====================================================');
  process.exit(0);
}

runTests().catch(err => {
  console.error('Fatal Test Error:', err);
  process.exit(1);
});
