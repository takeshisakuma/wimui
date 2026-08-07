/**
 * ハードコード値の監査スクリプト（docs/TOKENIZATION_EXCEPTIONS.md の運用ルールを機械化）。
 *
 * 1. カラーコード（#hex / rgb() / rgba()）: 例外なくエラー（§3 禁止事項）。
 * 2. px 直書き: 同一行に `Exception:` または `TODO: tokenization` コメントがない
 *    ものを「未注記ハードコード」としてカウントし、ベースラインを超えたらエラー
 *    （ラチェット方式 — 増加を防ぎつつ、既存分は段階的に注記・トークン化する）。
 *
 * ベースラインを下回ったら、このファイルの PX_BASELINE を実測値まで下げてコミットしてください。
 */
import fs from 'fs';
import { globSync } from 'glob';

// 2026-07 時点の未注記 px 直書き数。増やさないこと・減らしたら更新すること。
const PX_BASELINE = 0;

const files = globSync('src/components/**/*.scss', { posix: true });

const hexViolations = [];
const pxViolations = [];

const stripBlockComments = (src) => src.replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '));

for (const file of files) {
  const raw = fs.readFileSync(file, 'utf8');
  const rawLines = raw.split('\n');
  const lines = stripBlockComments(raw).split('\n');
  lines.forEach((line, i) => {
    const code = line.split('//')[0];
    // 注記はコメント除去前の行で判定する（/* Exception: */ 形式に対応）
    const annotated = /Exception:|TODO: tokenization/.test(rawLines[i]);

    // カラーコード: url(#...) や SCSS 変数参照 ($wim-...) ではない生の色指定。
    // 唯一の許容は mask 用アルファ色停止など、Exception 注記のある行（§4 参照）
    if (!annotated) {
      if (/#[0-9a-fA-F]{3,8}\b/.test(code) && !/url\(/.test(code)) {
        hexViolations.push(`${file}:${i + 1}: ${line.trim()}`);
      }
      if (/\brgba?\(\s*\d/.test(code)) {
        hexViolations.push(`${file}:${i + 1}: ${line.trim()}`);
      }
    }

    // px 直書き（宣言行のみ。0px と var() のフォールバック値は除外 —
    // var(--x, 4px) はトークン/変数参照が主体であり防御的既定値のため対象外）
    let noVar = code;
    let prev;
    do {
      prev = noVar;
      noVar = noVar.replace(/var\([^()]*\)/g, 'var()');
    } while (noVar !== prev);
    if (!annotated && /:[^;{]*\b(?!0px)\d+(\.\d+)?px\b/.test(noVar)) {
      pxViolations.push(`${file}:${i + 1}: ${line.trim()}`);
    }
  });
}

// --- TSX 側（T89）---------------------------------------------------------
// SCSS だけを見ていたため、`bg="rgba(0, 0, 0, 0.05)"` のように **prop へ生の色を
// 渡す**書き方が素通りしていた（`ErrorBoundary` の既定フォールバックが 2026-08 まで
// そうなっていて、しかもその分岐は `showDetails` を開くストーリーが無いので VRT にも
// 写っていなかった）。SCSS と同じ「生の色は例外なくエラー」を TSX にも適用する。
//
// 対象は **色そのものである文字列リテラル**に限る。`href="#top"` や `url(#id)`、
// クラス名に混ざる `#` を拾わないため、値の全体が色であることを要求する。
const COLOR_LITERAL = String.raw`#[0-9a-fA-F]{3,8}|rgba?\([^)]*\)|hsla?\([^)]*\)`;
const TSX_COLOR_PATTERNS = [
  // JSX 属性: bg="#fff" / color={"rgb(0,0,0)"}
  new RegExp(String.raw`\w+\s*=\s*\{?\s*["'\`](${COLOR_LITERAL})["'\`]`, 'g'),
  // オブジェクトのプロパティ: style={{ color: "#fff" }} / { background: 'rgba(...)' }
  new RegExp(String.raw`[\w-]+\s*:\s*["'\`](${COLOR_LITERAL})["'\`]`, 'g'),
];

const tsxFiles = globSync('src/components/**/*.tsx', { posix: true }).filter(
  (f) => !f.endsWith('.test.tsx') && !f.endsWith('.stories.tsx'),
);

for (const file of tsxFiles) {
  const rawLines = fs.readFileSync(file, 'utf8').split('\n');
  rawLines.forEach((line, i) => {
    // 行コメントは除外しつつ、注記の判定には生の行を使う（SCSS 側と同じ運用）
    const code = line.split('//')[0];
    if (/Exception:|TODO: tokenization/.test(line)) return;
    for (const re of TSX_COLOR_PATTERNS) {
      re.lastIndex = 0;
      const m = re.exec(code);
      if (m) {
        hexViolations.push(`${file}:${i + 1}: ${line.trim()}`);
        break;
      }
    }
  });
}

console.log('--- Checking hardcoded values (see docs/TOKENIZATION_EXCEPTIONS.md) ---');
// 母数を出す。「0 件」がガードの緑なのか走査対象が空なのかを、出力だけで見分けられる
// ようにする（T84 で同じ穴を塞いだ）。
console.log(
  `\n走査: SCSS ${files.length} ファイル / TSX ${tsxFiles.length} ファイル（テスト・ストーリーを除く）`,
);
if (files.length === 0 || tsxFiles.length === 0) {
  console.log('[FAIL] 走査対象が空です。glob のパターンが実態とずれています。');
  process.exit(1);
}

let failed = false;

if (hexViolations.length > 0) {
  console.log(`\n[FAIL] Raw color codes are prohibited without exception (§3):`);
  for (const v of hexViolations) console.log(`  ${v}`);
  failed = true;
}

console.log(`\nUnannotated px hardcodes: ${pxViolations.length} (baseline: ${PX_BASELINE})`);
if (pxViolations.length > PX_BASELINE) {
  console.log(`[FAIL] Count exceeds baseline. 新規のハードコードにはトークンを使うか、`);
  console.log(`       意図的な場合は同一行に \`/* Exception: <カテゴリ> — 理由 */\` または \`// TODO: tokenization\` を記載してください。`);
  const diff = pxViolations.length - PX_BASELINE;
  console.log(`\n直近の違反候補（全 ${pxViolations.length} 件中、超過 ${diff} 件）:`);
  for (const v of pxViolations.slice(-Math.max(diff, 10))) console.log(`  ${v}`);
  failed = true;
} else if (pxViolations.length < PX_BASELINE) {
  console.log(`ベースラインを ${pxViolations.length} に更新できます（scripts/check-hardcoded-values.js の PX_BASELINE）。`);
}

if (failed) {
  console.log('\n✗ Hardcoded value check failed.');
  process.exit(1);
}
console.log('\n✓ No prohibited hardcoded values.');
