import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const URL = 'https://raw.githubusercontent.com/aukspot/dles/main/src/lib/data/dles.json';
const OUT = join(__dirname, '../src/data/dles.json');

console.log('Fetching dles.json from upstream...');
const res = await fetch(URL);
if (!res.ok) throw new Error(`HTTP ${res.status}`);
const text = await res.text();
writeFileSync(OUT, text, 'utf8');
const count = JSON.parse(text).length;
console.log(`Done — ${count} games written to src/data/dles.json`);
