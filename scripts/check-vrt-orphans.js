#!/usr/bin/env node
/**
 * ストーリーが消えたのに残っているベースライン（孤児）を検出する。
 *
 * **update も compare も孤児を見ない。** update は撮り直して上書きするだけで
 * 消えたストーリーのファイルに触れず、compare は index にあるストーリーを回すので
 * index に無いベースラインは照合対象にすらならない。どちらの経路でも永久に検出されず、
 * 実測では 26 枚（13 ストーリー × 2 テーマ）が 15 日間残っていた（T106）。
 *
 * **害は容量ではなく「嘘の資産」**: 孤児は「そのストーリーの正しい見た目」として
 * 残り続けるが、もう誰も検証していない。将来同じ ID のストーリーが復活すると、
 * 腐ったベースラインと比較される。VRT は「前回と同じか」を見る道具なので、
 * 比較相手が腐っていても緑を返す。
 *
 * **見るのは片方向だけ**（ベースライン → ストーリー）。逆方向（ベースラインが無い
 * ストーリー）を見ると、VRT の除外リスト（`audit-` / 非決定ストーリー）を
 * `vrt.spec.ts` と二重管理することになる。そちらは compare 側が撮って落ちるので
 * 既に検出されている。
 */

import fs from 'node:fs';
import path from 'node:path';

const INDEX = 'storybook-static/index.json';
const SNAPSHOT_DIR = 'vrt/vrt.spec.ts-snapshots';
const FILE_RE = /^(light|dark)-(.+)-chromium-linux\.png$/;

if (!fs.existsSync(INDEX)) {
  console.error(`✗ ${INDEX} が無い。先に \`npm run build-storybook\` を実行すること。`);
  console.error('  （index を読めないまま「孤児 0 件」と報告すると、検査していないのに緑になる）');
  process.exit(1);
}
if (!fs.existsSync(SNAPSHOT_DIR)) {
  console.error(`✗ ${SNAPSHOT_DIR} が無い。`);
  process.exit(1);
}

const index = JSON.parse(fs.readFileSync(INDEX, 'utf8'));
const storyIds = new Set(
  Object.values(index.entries ?? {})
    .filter((e) => e.type === 'story')
    .map((e) => e.id),
);

if (storyIds.size === 0) {
  console.error('✗ index にストーリーが 1 件も無い。ビルドが壊れている可能性がある。');
  process.exit(1);
}

const files = fs.readdirSync(SNAPSHOT_DIR).filter((f) => f.endsWith('.png'));
const orphans = [];
const malformed = [];

for (const file of files) {
  const m = file.match(FILE_RE);
  if (!m) {
    malformed.push(file);
    continue;
  }
  if (!storyIds.has(m[2])) orphans.push({ file, storyId: m[2] });
}

// `--list` のときは **stdout をパスだけにする**。人間向けの行まで stdout に出すと
// `--list | xargs rm` が見出し行をパスとして受け取って落ちる（実際に踏んだ）。
const listMode = process.argv.includes('--list');
const say = listMode ? (...a) => console.error(...a) : (...a) => console.log(...a);

say('--- check:vrt-orphans（消えたストーリーのベースライン） ---\n');
say(`ベースライン ${files.length} 枚 / index のストーリー ${storyIds.size} 件を照合。\n`);

if (malformed.length > 0) {
  console.error(`✗ 命名が想定外のファイル ${malformed.length} 件:`);
  for (const f of malformed.slice(0, 10)) console.error(`  - ${f}`);
  console.error(`\n  期待する形: <light|dark>-<storyId>-chromium-linux.png`);
}

if (orphans.length > 0) {
  const byStory = new Map();
  for (const { storyId } of orphans) byStory.set(storyId, (byStory.get(storyId) ?? 0) + 1);
  console.error(`✗ 対応するストーリーが無いベースライン ${orphans.length} 枚（${byStory.size} ストーリー）:`);
  for (const [id, n] of [...byStory].sort()) console.error(`  - ${id}（${n} 枚）`);
  console.error(
    '\n  ストーリーを消したら、そのベースラインも消すこと。' +
      '\n  残すと「もう誰も検証していない見た目」が正解として居座り、' +
      '\n  同じ ID が復活したときに腐った相手と比較される。' +
      `\n\n  まとめて消す:\n    node scripts/check-vrt-orphans.js --list | xargs -r rm --`,
  );
}

if (listMode) {
  // 削除に使うための素の一覧。ここだけが stdout。
  for (const { file } of orphans) console.log(path.posix.join(SNAPSHOT_DIR, file));
}

if (orphans.length > 0 || malformed.length > 0) process.exit(1);

say('✓ 孤児はありません。');
