/**
 * stories/ 内の i18n-ignore マーカー数を ratchet する。
 * 意図的な英語（固有名詞・デモ）用の escape hatch は残しつつ、無視範囲の増加を防ぐ。
 *
 * Usage: node scripts/check-i18n-ignore.js
 */
import fs from "fs";
import { globSync } from "glob";

/** 2026-07 時点のマーカー総数。増やさないこと・減らしたら更新すること。 */
const IGNORE_BASELINE = 30; // 2026-07-26: ThreadList の VRT 固定データ（言語非依存が要件）を +2

const files = globSync("stories/**/*.{tsx,ts,mdx}", { posix: true });
const byFile = {};
let total = 0;

for (const file of files) {
  const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
  let count = 0;
  for (const line of lines) {
    if (line.includes("i18n-ignore")) count += 1;
  }
  if (count > 0) {
    byFile[file] = count;
    total += count;
  }
}

console.log(`i18n-ignore markers in stories/: ${total} (baseline: ${IGNORE_BASELINE})`);
for (const [file, count] of Object.entries(byFile).sort()) {
  console.log(`  ${file}: ${count}`);
}

if (total > IGNORE_BASELINE) {
  console.error(
    `\n[FAIL] i18n-ignore markers exceed baseline by ${total - IGNORE_BASELINE}.`,
  );
  console.error(
    "Prefer <T /> / t() over ignore. If intentional, raise IGNORE_BASELINE in scripts/check-i18n-ignore.js after review.",
  );
  process.exit(1);
}

if (total < IGNORE_BASELINE) {
  console.log(
    `Baseline can be lowered to ${total} (update IGNORE_BASELINE in scripts/check-i18n-ignore.js).`,
  );
}

console.log("✓ i18n-ignore ratchet passed.");
process.exit(0);
