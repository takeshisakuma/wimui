#!/usr/bin/env node
/**
 * Guard: **prop の既定値が「裸の数値」のまま CSS の長さになる**のを止める（T266）。
 *
 * 起票の経緯（2026-09-23）。`Group` の `gap`、`Masonry` / `SimpleGrid` の `spacing` は
 * 既定が `16` の直書きで、`--wim-spacing-*` を差し替えたテーマでもそこだけ 16px の
 * まま残っていた（必須ルール 4「gap / padding / サイズのハードコード禁止」）。
 * **3 件とも、どのガードにも映っていなかった。**
 *
 * `check-hardcoded-values.js` は SCSS と TSX の両方を走査しているが、TSX 側で見て
 * いるのは**生の色**（`#fff` / `rgba(...)`）だけで、px は SCSS 側でしか見ていない。
 * しかもその px 検出は `\d+px` という**綴り**を探す作りなので、`gap = 16` のように
 * **単位が後から付く**書き方（`${gap}px` / `getSpacingValue(gap)`）には届かない。
 * 結果、「Unannotated px hardcodes: 0」と報告され続けていた ── 0 件という結果は、
 * 測っていないことの表示でもある。
 *
 * ## 何を見るか
 *
 * 分解代入の既定値（`gap = 16,`）のうち、**その変数が同じ file の中で CSS の長さに
 * なる証拠があるもの**だけを挙げる。証拠は次の 3 つ:
 *
 *   1. `` `${gap}px` `` のようにテンプレートで単位が付く
 *   2. `getSpacingValue(gap)` / `getSizeValue(gap)` を通る
 *   3. `{ gap: gap }` のように CSS の長さプロパティへ素で渡す（React が px を足す）
 *
 * **file 単位の推測にしない**のが要点。「この file のどこかに `${x}px` がある」で
 * 判定すると、`barCount` / `overscan` / `aspectRatio` のような**長さではない数値**まで
 * 巻き込む（実測で 15 件 → 変数名まで見ると 6 件）。
 *
 * ## 逃がし方（ベースラインを持たない理由）
 *
 * 件数のベースラインではなく、**1 件ずつ同一行に注記**させる（`Exception:` または
 * `TODO: tokenization`。`check-hardcoded-values.js` / `docs/TOKENIZATION_EXCEPTIONS.md`
 * と同じ書式）。件数で凍結すると、**lint-staged が部分集合しか渡さない経路で判定が
 * ぶれる** ── `check:slop` のラチェットが「部分集合の件数を全体のベースラインと
 * 比べる」ために常に素通りしていたのと同じ穴（2026-07-26）。注記方式なら、1 file
 * だけ走査しても答えは変わらない。
 *
 * ## 鳴ることの実証
 *
 *   node scripts/check-numeric-length-defaults.js --probe <file>
 *
 * で任意の file を走査できる。`#689` より前の `src/components/layout/Group/Group.tsx`
 * （`gap = 16`）で鳴ることを確認済み。
 */
import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';

const args = process.argv.slice(2);
const probeIndex = args.indexOf('--probe');
const probeFiles = probeIndex >= 0 ? args.slice(probeIndex + 1) : [];
const stagedFiles = args.filter((a) => !a.startsWith('--') && !probeFiles.includes(a));

// 分解代入の既定値だけを見る（`{ gap = 16, ... }`）。`const gap = 16` のような
// ローカル変数は prop ではないので対象外。
//
// **1 行 1 つに限定しない。** 最初の版は行末の `,` に錨を打っていたので、
// `{ columns = 3, spacing = 16, className, ... }` のように**1 行へまとめて書いた
// 分解代入**を丸ごと取りこぼした（`Masonry` がこの形で、検出したかった当の 1 件）。
// 既定値の直後が `,` か `}` であることだけを見て、行のどこにあってもよくする。
const DEFAULT_RE = /([A-Za-z_$][\w$]*)\s*=\s*(-?\d+(?:\.\d+)?)\s*(?=[,}])/g;

// 宣言・比較・ループは分解代入ではない。`const x = 16,` の連鎖や `for (let i = 0…)`、
// `a === 16` を拾わないための除外。
const NOT_DESTRUCTURING = /^\s*(const|let|var|for|while|if|return|case)\b/;

// React が数値へ自動で px を足す CSS プロパティのうち、**長さ**であるもの。
// `opacity` / `zIndex` / `flexGrow` のような単位なしの数値は入れない。
const LENGTH_PROPS = [
  'gap', 'rowGap', 'columnGap',
  'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',
  'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft',
  'width', 'height', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight',
  'top', 'right', 'bottom', 'left', 'inset',
  'fontSize', 'borderRadius', 'borderWidth',
].join('|');

// 転送先の prop 名から「これは CSS の長さになる」と**推測する**ための表。推測なので
// **間隔を表す名前だけ**に絞る。`width` / `height` を入れると、SVG の座標を子へ渡して
// いるだけの箇所まで巻き込む ── 実測で `SankeyChart` の `width = 0` など 5 件が
// 偽陽性になった（SVG のユーザー単位はトークンの対象ではない）。寸法が本当に CSS へ
// 出る場合は、`${…}px` か style の長さプロパティのほうで捕まる。
const FORWARDED_LENGTH_PROPS = [
  'gap', 'spacing', 'verticalSpacing', 'rowGap', 'columnGap', 'padding', 'margin',
].join('|');

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** その変数が CSS の長さになる証拠を集める。空なら対象外。 */
const lengthEvidence = (src, name) => {
  const n = escape(name);
  const hits = [];
  if (new RegExp(String.raw`\$\{[^}]*\b${n}\b[^}]*\}(px|rem|em)\b`).test(src)) {
    hits.push('`${…}px`');
  }
  if (new RegExp(String.raw`get(Spacing|Size)Value\(\s*${n}\b`).test(src)) {
    hits.push('getSpacingValue()');
  }
  if (new RegExp(String.raw`\b(${LENGTH_PROPS})\s*:\s*${n}\s*[,}]`).test(src)) {
    hits.push('style の長さプロパティ');
  }
  // 4. 長さを取る**別の部品の prop**へそのまま渡す（`<Flex gap={gap}>`）。
  //    最初の版はこれを見ておらず、**`Group` の `gap = 16`（起票の当事者）を
  //    取りこぼしていた** ── px を付けるのは `Flex` の中なので、`Group.tsx` の
  //    中だけを見ているかぎり単位が現れない。部品をまたぐ流れは追えないので、
  //    「長さを運ぶ名前の prop へ、同名の変数を渡している」ところで切る。
  if (new RegExp(String.raw`\b(${FORWARDED_LENGTH_PROPS})\s*=\s*\{\s*${n}\s*\}`).test(src)) {
    hits.push('長さを取る prop へ転送');
  }
  return hits;
};

const ANNOTATION = /Exception:|TODO: tokenization/;

const scan = (files) => {
  const violations = [];
  for (const file of files) {
    if (!fs.existsSync(file)) continue;
    const src = fs.readFileSync(file, 'utf8');
    const lines = src.split('\n');
    lines.forEach((line, i) => {
      if (ANNOTATION.test(line)) return;
      if (NOT_DESTRUCTURING.test(line)) return;
      const code = line.split('//')[0];
      DEFAULT_RE.lastIndex = 0;
      let m;
      while ((m = DEFAULT_RE.exec(code)) !== null) {
        const evidence = lengthEvidence(src, m[1]);
        if (evidence.length === 0) continue;
        violations.push({
          file,
          line: i + 1,
          name: m[1],
          value: m[2],
          evidence,
          text: line.trim(),
        });
      }
    });
  }
  return violations;
};

const normalise = (f) => f.split(path.sep).join('/');

const targets = (probeFiles.length > 0 ? probeFiles : stagedFiles.length > 0 ? stagedFiles : null);

const files = (
  targets
    ? targets.map(normalise)
    : globSync('src/components/**/*.tsx', { posix: true })
).filter((f) => probeFiles.length > 0 || (!f.endsWith('.test.tsx') && !f.endsWith('.stories.tsx')));

console.log('--- check:numeric-length-defaults (裸の数値が CSS の長さになる prop 既定値) ---');
console.log(`\n走査: TSX ${files.length} ファイル${probeFiles.length > 0 ? '（--probe）' : ''}`);

// 母数 0 は「緑」ではなく「測っていない」。全量走査のときだけ落とす
// （lint-staged は該当ファイルが無ければ、そもそもこのコマンドを呼ばない）。
if (files.length === 0 && !targets) {
  console.log('[FAIL] 走査対象が空です。glob のパターンが実態とずれています。');
  process.exit(1);
}

const violations = scan(files);

if (violations.length > 0) {
  console.log(`\n[FAIL] ${violations.length} 件:`);
  for (const v of violations) {
    console.log(`  ${v.file}:${v.line}  ${v.name} = ${v.value}  → ${v.evidence.join(' / ')}`);
    console.log(`      ${v.text}`);
  }
  console.log('\n  既定値にはトークンを使ってください（`gap = "2xl"` / SCSS 側の');
  console.log('  `var(--wim-…-x, var(--wim-token))` フォールバック）。部品固有の寸法で');
  console.log('  トークンに寄せられないものは、同一行に `/* Exception: <カテゴリ> — 理由 */`');
  console.log('  を書いてください（docs/TOKENIZATION_EXCEPTIONS.md）。');
  process.exit(1);
}

console.log('\n✓ 裸の数値のまま CSS の長さになる prop 既定値はありません。');
