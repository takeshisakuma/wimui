#!/usr/bin/env node
/**
 * check:shrinkable — `width: 100%` と `min-width: 0` を同居させない（T59）。
 *
 * flex アイテムの自動最小サイズ（`min-width: auto`）は「内容より小さくならない」
 * 保護だが、**指定サイズと内容サイズの小さいほう**という定義なので、
 * `width: 100%` を書くと親が細いときに指定サイズ側が小さくなり、保護が消える。
 * そこへ `min-width: 0` を足すと、下限が無くなって**1 文字幅まで潰れる**。
 *
 * 実測（T32 の 3 枚目、コンテナ 610px）: `UsageMeter` が **幅 12px・高さ 272px**
 * になり `C o n t e x t` と 1 文字ずつ縦に折り返った。`ModelSelector` も 12px の
 * 空箱。**`wrap="wrap"` では直らない** — ゼロまで縮められる要素は折り返しを
 * 起こさず、ただ細くなるだけ。
 *
 * **どのガードも見ていなかった**: tsc / lint / check:slop / axe / 横スクロール測定
 * （`scrollWidth === clientWidth`）すべて緑のまま出荷されていた。DESIGN.md の
 * チェックリストは「1 文字ずつ折り返る」を名指ししているのに、検出する仕組みが無い。
 *
 * **0 のハードゲートにはしない。** 長い内容を縮めて内部スクロールさせたい場面
 * （`MarkdownRenderer` 等）では `min-width: 0` が正当なので、ラチェットで増加を止め、
 * `shrinkable-ok` を添えて理由を書けば逃がせる。
 *
 * 使い方: node scripts/check-shrinkable-roots.js
 * 引数は取らない（lint-staged から部分集合を渡されても全量を見る）。
 */
import fs from 'node:fs';
import { globSync } from 'glob';

/**
 * 実測後のラチェット。減らしたらこの値を下げること。**増やすことは許さない。**
 * 残っているものは「意図的に縮ませる」もの。
 */
// 2026-08-03 実測 15 件。**実害が出た 3 件は直済み**（`UsageMeter` / `ModelSelector` /
// `PromptInput`。T32 の 3 枚目で 12px まで潰れたもの）。残る 15 件は同じ形だが
// 実害を確認していないので、まず増加を止める。1 件ずつ「横並びに置かれうるか」を
// 見て、読める下限を与えるか `shrinkable-ok` で逃がすこと。
const BASELINE = 15;
const EXCUSE = 'shrinkable-ok';

const hits = [];

for (const file of globSync('src/**/*.module.scss', { posix: true })) {
  const src = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const lines = src.split('\n');

  // **同じ規則の中**だけを見る。`min-width: 0` を見つけたら、`{` / `}` を越えない
  // 範囲で `width: 100%` を探す。ブロックを入れ子ごと数えると `@layer component { … }`
  // がファイル全体を 1 ブロックにしてしまい、無関係な 2 宣言を同居と誤判定する
  // （最初の実装がそれで 38 件の偽陽性を出した）。
  lines.forEach((raw, i) => {
    const line = raw.replace(/\/\/.*$/, '');
    if (!/(^|\s)min-width:\s*0(px)?\s*;/.test(line)) return;

    const sameRule = (from, to, step) => {
      for (let k = from; k !== to; k += step) {
        const l = lines[k]?.replace(/\/\/.*$/, '') ?? '';
        if (/[{}]/.test(l)) return false;
        if (/(^|\s)width:\s*100%\s*;/.test(l)) return true;
      }
      return false;
    };
    // 同じ規則の前後どちらにあってもよい
    if (!sameRule(i - 1, Math.max(-1, i - 30), -1) && !sameRule(i + 1, Math.min(lines.length, i + 30), 1)) return;

    const excused =
      line.includes(EXCUSE) ||
      lines.slice(Math.max(0, i - 6), i).some((l) => l.includes(EXCUSE));
    if (!excused) hits.push(`${file.replace('src/components/', '')}:${i + 1}`);
  });
}

console.log('--- check:shrinkable (width:100% と min-width:0 の同居) ---');
console.log(`\n同居している箇所: ${hits.length} 件（baseline: ${BASELINE}）`);
if (hits.length > BASELINE) {
  for (const h of hits) console.log(`  ${h}`);
  console.log(`\n[FAIL] 横並びに置くと 1 文字幅まで潰れます（T59）。`);
  console.log(`       \`width: 100%\` は flex の自動最小サイズを指定サイズ側で決めるため、`);
  console.log(`       \`min-width: auto\` の「内容より小さくならない」保護が効きません。`);
  console.log(`       読める下限（例: \`var(--wim-width-sm)\`）を与えるか、`);
  console.log(`       意図的に縮ませるなら \`${EXCUSE}\` を添えて理由を書いてください。`);
  process.exit(1);
}
if (hits.length < BASELINE) {
  console.log(`ベースラインを ${hits.length} に更新できます（scripts/check-shrinkable-roots.js）。`);
}
console.log('\n✓ 増えていません。');
