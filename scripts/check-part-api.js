#!/usr/bin/env node
/**
 * check:part-api — 部品の内側の部位名（`data-part`）を凍らせる（T384）。
 *
 * 部位名は利用者が CSS で狙う公開の約束（`.my-calendar [data-part="day"]`）。WIM の部品の
 * CSS は `@layer component` の中なので、層の外に書いた利用者の CSS が詳細度に関係なく勝つ。
 * 名前を消す・変えると、利用者の CSS は**エラーも出さずに当たらなくなる** ── 型の検査にも
 * `check:prop-api` にも出ない破壊なので、ここで捕まえる。
 *
 * 判定は `check:prop-api` と同じ:
 *   破壊: 部位名が消えた（改名は「消えた + 増えた」として出る）
 *   遅れ: スナップショットに無い部位名が増えた（--update で取り込む）
 *   書き方: data-part を式で渡した / 小文字の kebab-case でない
 * どれも exit 1。加算を黙って通すと、スナップショットが遅れたまま気づかれない
 * （`check:prop-api` で 18 prop が 3 週間遅れた。2026-09-21）。
 *
 * 使い方:
 *   node scripts/check-part-api.js            # スナップショットと突き合わせる
 *   node scripts/check-part-api.js --update   # スナップショットを書き直す
 *
 * 部位名を意図して消すときは `--update` し、changeset に破壊的変更として書く。
 * 名前の決め方は docs/rules/implementation.md の「部位名（data-part）」。
 */
import fs from 'node:fs';
import { collectParts } from './lib/parts.js';

const SNAPSHOT = 'part-api-snapshot.json';
const SNAPSHOT_VERSION = 1;
const update = process.argv.includes('--update');

const { parts, problems, files } = collectParts(process.cwd());

if (problems.length > 0) {
  console.error('✗ data-part の書き方:');
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}

const count = Object.values(parts).reduce((n, list) => n + list.length, 0);

if (update) {
  fs.writeFileSync(SNAPSHOT, JSON.stringify({ version: SNAPSHOT_VERSION, parts }, null, 2) + '\n');
  console.log(`✓ ${SNAPSHOT} を書き直した（${Object.keys(parts).length} 部品・部位 ${count} 個）`);
  process.exit(0);
}

if (!fs.existsSync(SNAPSHOT)) {
  console.error(`✗ ${SNAPSHOT} が無い。node scripts/check-part-api.js --update で作る`);
  process.exit(1);
}
const snapshot = JSON.parse(fs.readFileSync(SNAPSHOT, 'utf8'));
if (snapshot.version !== SNAPSHOT_VERSION) {
  console.error(`✗ ${SNAPSHOT} の version が ${snapshot.version}（期待 ${SNAPSHOT_VERSION}）。--update で作り直す`);
  process.exit(1);
}

const removed = [];
const added = [];
const names = new Set([...Object.keys(snapshot.parts), ...Object.keys(parts)]);
for (const name of [...names].sort()) {
  const before = new Set(snapshot.parts[name] ?? []);
  const after = new Set(parts[name] ?? []);
  for (const p of before) if (!after.has(p)) removed.push(`${name} [data-part="${p}"]`);
  for (const p of after) if (!before.has(p)) added.push(`${name} [data-part="${p}"]`);
}

console.log(`--- check:part-api（部位名 data-part）---`);
console.log(`部品のファイル ${files} 本を走査 / 部位を持つ部品 ${Object.keys(parts).length}・部位 ${count} 個`);

if (removed.length > 0) {
  console.error(`\n✗ 部位名が無くなりました（破壊的変更・${removed.length} 件）:`);
  for (const r of removed) console.error(`  - ${r}`);
  console.error('\n  利用者の CSS が黙って当たらなくなる。意図した変更なら --update し、changeset に破壊的変更として書く。');
}
if (added.length > 0) {
  console.error(`\n✗ スナップショットに無い部位名（${added.length} 件）:`);
  for (const a of added) console.error(`  - ${a}`);
  console.error('\n  npm run check:part-api:update で取り込み、スナップショットの差分をコミットに含める。');
}
if (removed.length > 0 || added.length > 0) process.exit(1);
console.log('✓ 部位名はスナップショットと一致');
