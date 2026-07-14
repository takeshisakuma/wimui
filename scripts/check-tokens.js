/**
 * Design token surface guardrail（テーマ設定の公開 API 凍結ガード）。
 *
 * `--wim-*` CSS カスタムプロパティは利用者がテーマ設定に使う公開 API そのもの。
 * npm 公開後にトークンを rename / 削除すると、その値を設定していた全利用者が壊れる。
 * このスクリプトは公開トークン（styles.css 先頭に同梱される `--wim-*` の宣言）を列挙し、
 * `token-snapshot.json` と比較する。意図しない drift を CI で検知する。
 *
 * Usage:
 *   node scripts/check-tokens.js           # スナップショットと照合（CI）
 *   node scripts/check-tokens.js --update   # スナップショットを更新
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const snapshotPath = path.join(root, "token-snapshot.json");
const update = process.argv.includes("--update");

// 公開トークン（wimui/styles.css に同梱）を構成する宣言元ファイル。
// tokens.entry.scss が @use するものに対応（generated css-vars 群 + 手書き :root）。
const SOURCES = [
  "src/tokens/generated/_css-vars.scss",
  "src/tokens/generated/_css-vars-rgb.scss",
  "src/tokens/generated/_css-vars-dark.scss",
  "src/tokens/generated/_css-vars-rgb-dark.scss",
  "src/tokens/_semantic-colors.scss",
  "src/tokens/_spacings.scss",
  "src/tokens/_effects.scss",
  "src/tokens/_typography.scss",
  "src/styles/_ui-patterns.scss",
];

// 宣言（`--wim-name:` 形式）のみを対象にする（`var(--wim-name)` の使用は除外）。
const DECL_RE = /(--wim-[a-z0-9-]+)\s*:/g;

function collect() {
  const set = new Set();
  for (const rel of SOURCES) {
    const file = path.join(root, rel);
    if (!fs.existsSync(file)) continue;
    const src = fs.readFileSync(file, "utf8");
    let m;
    while ((m = DECL_RE.exec(src))) set.add(m[1]);
  }
  return [...set].sort();
}

const tokens = collect();
const serialized = JSON.stringify(tokens, null, 2) + "\n";

if (update) {
  fs.writeFileSync(snapshotPath, serialized);
  console.log(`Updated token-snapshot.json (${tokens.length} tokens).`);
  process.exit(0);
}

if (!fs.existsSync(snapshotPath)) {
  console.error("token-snapshot.json is missing. Run: node scripts/check-tokens.js --update");
  process.exit(1);
}

const previous = JSON.parse(fs.readFileSync(snapshotPath, "utf8"));
const prevSet = new Set(previous);
const nextSet = new Set(tokens);
const added = tokens.filter((t) => !prevSet.has(t));
const removed = previous.filter((t) => !nextSet.has(t));

if (added.length === 0 && removed.length === 0) {
  console.log(`Design token surface matches token-snapshot.json (${tokens.length} tokens).`);
  process.exit(0);
}

console.error("Design token surface changed. Review the diff below.\n");
for (const t of removed) console.error(`  - ${t}`);
for (const t of added) console.error(`  + ${t}`);
console.error(
  "\nRemoving or renaming a token is a BREAKING change for consumers' theming.\n" +
    "If intentional (and semver-appropriate), run:\n" +
    "  node scripts/check-tokens.js --update\n" +
    "and commit the updated token-snapshot.json.",
);
process.exit(1);
