const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src/lib/keywords-data.ts');

if (!fs.existsSync(filePath)) {
  console.error(`File not found: ${filePath}`);
  process.exit(1);
}

let content = fs.readFileSync(filePath, 'utf8');

// First, revert any previous runs of this script to avoid double-appending.
content = content.replace(/\s*especially in Jabodetabek/g, '');
content = content.replace(/\s*khususnya di Jabodetabek/g, '');

const citiesEn = 'Raffles Hills|Citra Grand|Canadian|Sentral Eropa|Legenda Wisata|Cibubur|Gunung Putri|Kota Wisata|East Jakarta|Jakarta|Bekasi|Bogor|Depok';
const citiesId = 'Raffles Hills|Citra Grand|Canadian|Sentral Eropa|Legenda Wisata|Cibubur|Gunung Putri|Kota Wisata|Jakarta Timur|Jakarta|Bekasi|Bogor|Depok';

// Replace English patterns: (in/across/around/for residents of/serving/for) (City)
const regexEn = new RegExp(`\\b(in|across|around|for residents of|serving|for)\\s+(${citiesEn})\\b`, 'gi');
content = content.replace(regexEn, (match) => {
  return `${match} especially in Jabodetabek`;
});

// Replace Indonesian patterns: (di/di seluruh/di sekitar/untuk warga/bagi warga/untuk) (City)
const regexId = new RegExp(`\\b(di|di seluruh|di sekitar|untuk warga|bagi warga|untuk)\\s+(${citiesId})\\b`, 'gi');
content = content.replace(regexId, (match) => {
  return `${match} khususnya di Jabodetabek`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated all city mentions in keywords-data.ts with Jabodetabek descriptions.');
