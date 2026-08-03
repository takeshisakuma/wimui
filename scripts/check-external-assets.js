#!/usr/bin/env node
/**
 * check:external-assets — ストーリーが外部ホストの画像を読まない（T55）。
 *
 * ストーリーが `https://images.unsplash.com/…` などを直接読むと、**画像が間に合うか
 * どうかで撮れる絵が変わる**ので、VRT のベースラインがネットワークの機嫌に依存する。
 *
 * 実測（2026-08-03、対策前）: `AvatarGroup` の 4 枚は **1.2 秒時点で `complete=false`**、
 * 3 秒までに到着していた。`story-ready.ts` の落ち着き待ちは 5 秒で打ち切って撮るので、
 * **速い日は写り、遅い日は写らない**。同じストーリーを「画像あり」と「画像を止めた
 * 状態」で描画すると、`AvatarGroup` / `LoadingOverlay` / `HoverCard` はレイアウトまで
 * 変わっていた（`HoverCard` は要素数が 5 と 8 で違った ── 失敗時にフォールバックが
 * 増えるため）。curl では 50〜100ms で返るのに、ブラウザ経由では 1.2〜3 秒かかる。
 *
 * 権利面でも取り込みには判断が要ったので、記録を残す（詳細は ASSETS.md）:
 * Unsplash License はダウンロード・改変・再配布を無償かつ商用可で認めるが、
 * **モデルリリースは付与しない**。人物のポートレートを架空ユーザーのアバターとして
 * 使うのはグレーで、しかも取り込むと git 履歴に恒久的に残る。そこで**実在人物の
 * 写真は取り込まず**、抽象図形の SVG を自作した（`src/media/avatar_*.svg`）。
 *
 * 使い方: node scripts/check-external-assets.js
 */
import fs from 'node:fs';
import { globSync } from 'glob';

/** 0 のハードゲート。ストーリーに外部画像を足さないこと。 */
const BASELINE = 0;
const EXCUSE = 'external-asset-ok';

/** 画像を配っている既知のホスト。増えたらここに足す。 */
const HOSTS = [
  'images.unsplash.com',
  'source.unsplash.com',
  'picsum.photos',
  'placehold.co',
  'placekitten.com',
  'via.placeholder.com',
  'loremflickr.com',
  'dummyimage.com',
];

const hits = [];

for (const file of globSync('{stories,sandbox,docs}/**/*.{tsx,ts,mdx}', { posix: true })) {
  const lines = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n').split('\n');
  lines.forEach((raw, i) => {
    if (!HOSTS.some((h) => raw.includes(h))) return;
    const excused =
      raw.includes(EXCUSE) ||
      lines.slice(Math.max(0, i - 3), i).some((l) => l.includes(EXCUSE));
    if (!excused) hits.push(`${file}:${i + 1}`);
  });
}

console.log('--- check:external-assets (ストーリーが外部ホストの画像を読まない) ---');
console.log(`\n外部ホストの画像: ${hits.length} 件（baseline: ${BASELINE}）`);
if (hits.length > BASELINE) {
  for (const h of hits) console.log(`  ${h}`);
  console.log(`\n[FAIL] ストーリーが外部ホストの画像を読んでいます（T55）。`);
  console.log(`       画像の到着でベースラインが変わるため、VRT がネットワークに依存します。`);
  console.log(`       \`src/media/\` に置いた自前の素材を \`import\` してください`);
  console.log(`       （例: \`import scene from "@/media/scene_landscape.svg"\`）。`);
  console.log(`       **実在人物の写真は取り込まないこと** — ライセンスがモデルリリースを`);
  console.log(`       含まないため。抽象図形の SVG を使うこと（ASSETS.md）。`);
  console.log(`       どうしても外部が要るなら \`${EXCUSE}\` を添えて理由を書いてください。`);
  process.exit(1);
}
console.log('\n✓ 増えていません。');
