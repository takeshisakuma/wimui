#!/usr/bin/env node
/**
 * check:a11y-screen-reader — 実機の読み上げの記録（`src/data/a11y-screen-reader.json`）が、
 * 実在する部品と、たどれる出典を指しているか（T400）。
 *
 * 記録は人が書く（ユーザーが読み上げソフトで聞いた結果）。部品の文書ページの「確かめたこと」の表と
 * 一覧ページは、このファイルから作る。ここが正本で、`MAINTENANCE.md` の 7-4 は列挙を持たない
 * （写しを持つと片方だけ直して食い違う）。
 *
 * 1 件ごとに見るもの:
 *   1. 欄が揃っている（部品・日付・読み上げソフト・ブラウザ・結果・出典）。日付は YYYY-MM-DD、結果は決めた値
 *   2. 部品名が `src/data/components.json` に在る（`Dialg` のような打ち間違いで、表に出なくなるのを防ぐ）
 *   3. 出典をたどれる。git の履歴は見ない（CI の checkout は浅い）:
 *      - `T123`: 台帳（IMPROVEMENTS.md か退避先）にその行が在り、行に部品名が出てくる
 *      - `MAINTENANCE 7-4 YYYY-MM-DD`: 7-4 の表にその日付の行が在り、行に部品名が出てくる
 *      - `#123`: 台帳か `MAINTENANCE.md` に、その PR 番号が書かれている
 *
 * 実証は `npm run prove:a11y-screen-reader`。
 *
 * Usage: node scripts/check-a11y-screen-reader.js
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA = 'src/data/a11y-screen-reader.json';
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');

export const RESULTS = ['ok', 'fixed', 'fixed-unheard'];
export const READERS = ['narrator', 'nvda', 'jaws', 'voiceover', 'talkback'];
export const BROWSERS = ['chrome', 'edge', 'firefox', 'safari'];

const components = new Set();
JSON.stringify(JSON.parse(read('src/data/components.json')), (k, v) => {
  if (k === 'name' && typeof v === 'string') components.add(v);
  return v;
});

const ledgerRows = new Map();
for (const f of ['IMPROVEMENTS.md', 'docs/history/improvements-ledger.md']) {
  for (const line of read(f).split('\n')) {
    const m = line.match(/^\| (T\d+) \|/);
    if (m) ledgerRows.set(m[1], line);
  }
}
const maintenance = read('MAINTENANCE.md');
const section74 = maintenance.split('\n### 7-4.')[1]?.split('\n### ')[0] ?? '';
const prText = [...ledgerRows.values()].join('\n') + read('IMPROVEMENTS.md') + maintenance;

const { records } = JSON.parse(read(DATA));
const problems = [];
records.forEach((r, i) => {
  const where = `${DATA} の ${i + 1} 件目（${r.component ?? '部品名なし'}）`;
  for (const key of ['component', 'date', 'reader', 'browser', 'result', 'sources']) {
    if (r[key] === undefined || r[key] === '') problems.push(`${where}: ${key} が無い`);
  }
  if (r.date && !/^\d{4}-\d{2}-\d{2}$/.test(r.date)) problems.push(`${where}: date は YYYY-MM-DD で書く（${r.date}）`);
  if (r.result && !RESULTS.includes(r.result)) problems.push(`${where}: result は ${RESULTS.join(' / ')} のどれか（${r.result}）`);
  if (r.reader && !READERS.includes(r.reader)) problems.push(`${where}: reader は ${READERS.join(' / ')} のどれか（${r.reader}）`);
  if (r.browser && !BROWSERS.includes(r.browser)) problems.push(`${where}: browser は ${BROWSERS.join(' / ')} のどれか（${r.browser}）`);
  if (r.component && !components.has(r.component)) problems.push(`${where}: ${r.component} は src/data/components.json に無い`);
  if (r.sources && (!Array.isArray(r.sources) || r.sources.length === 0)) problems.push(`${where}: sources は 1 つ以上の配列`);
  for (const s of Array.isArray(r.sources) ? r.sources : []) {
    let m;
    if ((m = s.match(/^(T\d+)$/))) {
      const row = ledgerRows.get(m[1]);
      if (!row) problems.push(`${where}: 出典 ${s} の行が台帳に無い`);
      else if (!row.includes(r.component)) problems.push(`${where}: 出典 ${s} の行に ${r.component} が出てこない`);
    } else if ((m = s.match(/^MAINTENANCE 7-4 (\d{4}-\d{2}-\d{2})$/))) {
      const rows = section74.split('\n').filter((l) => l.startsWith(`| ${m[1]} |`));
      if (rows.length === 0) problems.push(`${where}: 出典 ${s} の行が MAINTENANCE.md の 7-4 の表に無い`);
      else if (!rows.some((l) => l.includes(r.component))) problems.push(`${where}: 出典 ${s} の行に ${r.component} が出てこない`);
    } else if ((m = s.match(/^#(\d+)$/))) {
      if (!new RegExp(`#${m[1]}(?!\\d)`).test(prText)) problems.push(`${where}: 出典 ${s} が台帳にも MAINTENANCE.md にも書かれていない`);
    } else {
      problems.push(`${where}: 出典は T123 / MAINTENANCE 7-4 YYYY-MM-DD / #123 のどれかの形（${s}）`);
    }
  }
});

console.log('--- check:a11y-screen-reader (実機の読み上げの記録) ---');
console.log(`記録 ${records.length} 件・部品 ${new Set(records.map((r) => r.component)).size} 個`);
if (problems.length) {
  console.error(`\n✗ ${problems.length} 件:`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
console.log('✓ 部品名はすべて実在し、出典はすべてたどれる');
