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

console.log('--- Checking hardcoded values (see docs/TOKENIZATION_EXCEPTIONS.md) ---');

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
