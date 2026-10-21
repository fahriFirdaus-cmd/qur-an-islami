const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'web', 'data.js');
let content = fs.readFileSync(targetFile, 'utf8');

const oldPart = "      desc: 'Menemukanconst JEJAK_DATA = [";
const newPart = `      desc: 'Penemu sistem aljabar, konsep algoritma, dan pengenal angka nol ke peradaban modern.',
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

const JEJAK_DATA = [`;

if (content.includes(oldPart)) {
  content = content.replace(oldPart, newPart);
  fs.writeFileSync(targetFile, content, 'utf8');
  console.log('SUCCESS: Fixed data.js');
} else {
  console.log('NOT FOUND: oldPart was not found in data.js');
}
