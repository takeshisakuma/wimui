#!/usr/bin/env node
/**
 * Guard: 文字色に**塗り用の intent 色**を直接使わない（T41）。
 *
 * トークンには 2 系統ある:
 *   - `--wim-color-<intent>`       … **塗り用**。面に敷く色
 *   - `--wim-color-text-<intent>`  … **文字用**。塗り色より 1 段暗く、
 *                                     通常サーフェス + subtle 塗りの上で AA を満たす
 *
 * `color:` に前者を使うと、**塗りとしては正しいのに文字としては AA を割る**。
 * 実際 `Button` の outline は dark で **danger 4.36:1 / success 2.48:1** のまま
 * 出荷されていた（2026-07-27 に T41 として起票、その後修正済み）。
 *
 * **なぜ既存のガードで捕まらなかったか**:
 *   - `check:contrast`（T34）は **`text-{intent}` ロールで解決する前提**で
 *     組み合わせを検査するので、SCSS が SSOT を迂回している事実が見えない。
 *     126 組すべて緑のまま出荷された
 *   - axe は「そのストーリーに存在する組み合わせ」しか見ない。`Button` の
 *     ストーリーに `outline` × `danger` が 1 つも無かったので鳴らなかった
 *
 * つまり**トークンは正しく、組み合わせも宣言上は正しく、実装だけが違った**。
 * ここを見るガードが無かった。
 *
 * これは**ヒューリスティック**である点に注意: アイコンの色など、文字でない
 * 用途に intent 色を使うのは正当なことがある。だから 0 のハードゲートにはせず、
 * **ラチェット**で増加だけを止め、`intent-color-ok` で個別に逃がす。
 *
 * Usage:
 *   node scripts/check-intent-text-color.js
 *   node scripts/check-intent-text-color.js --probe path/to/file.scss
 */
import fs from "fs";
import path from "path";
import { globSync } from "glob";

const argv = process.argv.slice(2);
const probeIdx = argv.indexOf("--probe");
const probeFiles = probeIdx >= 0 ? argv.slice(probeIdx + 1) : [];

const files =
  probeFiles.length > 0
    ? probeFiles
    : globSync("src/**/*.scss", { posix: true }).filter(
        (f) => !f.includes("/generated/"),
      );

/** 塗り用の intent 色。`text-*` / `on-*` / `*-subtle` などは対象外。 */
const FILL_INTENT =
  /(^|[^-\w])color:\s*var\(\s*--wim-color-(primary|secondary|success|warning|danger|info)\s*[,)]/;

/**
 * ラチェット。減らしたらこの値を下げてコミットする。**増やすことは許さない。**
 * 2026-08-01 の実測値。`text-{intent}` へ寄せるか、文字でない用途なら
 * `intent-color-ok` を添えて理由を書く。
 */
// 43 → 39: 2026-08-02。T58 の死んだ参照の削除で、塗り用 intent 色を `color:` に
// 使っていた箇所が 4 件減った。
const BASELINE = 39;

const hits = [];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
  lines.forEach((line, i) => {
    if (line.includes("intent-color-ok")) return;
    if (i > 0 && lines[i - 1].includes("intent-color-ok")) return;
    if (FILL_INTENT.test(line)) {
      hits.push({ file, line: i + 1, text: line.trim().slice(0, 72) });
    }
  });
}

console.log(
  `--- 文字色に塗り用 intent 色を使っている箇所 (${
    probeFiles.length > 0 ? `${probeFiles.length} probe file(s)` : `${files.length} files`
  }) ---\n`,
);

for (const h of hits) {
  console.log(`  ${path.relative(".", h.file).replace(/\\/g, "/")}:${h.line}  ${h.text}`);
}

// probe（過去のコミットを流し込む受け入れ条件の検証）は 1 件でも鳴らす。
if (probeFiles.length > 0) {
  console.log(`\n${hits.length} 件検出。`);
  process.exit(hits.length > 0 ? 1 : 0);
}

console.log(`\n合計: ${hits.length} 件（baseline: ${BASELINE}）`);

if (hits.length > BASELINE) {
  console.error(
    "\n✗ 増えている。`color:` には **`--wim-color-text-<intent>`** を使うこと。" +
      "\n  塗り用の `--wim-color-<intent>` は文字としては AA を割る" +
      "（実測: dark outline danger 4.36:1 / success 2.48:1）。" +
      "\n  アイコン等 文字でない用途なら `intent-color-ok` を添えて理由を書く。",
  );
  process.exit(1);
}

if (hits.length < BASELINE) {
  console.log(
    `  減ったので scripts/check-intent-text-color.js の BASELINE を ${hits.length} に下げてコミットしてください。`,
  );
}

console.log("✓ baseline を超えていません。");
