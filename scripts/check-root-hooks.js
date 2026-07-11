/**
 * 安定した override フックの存在チェック（公開表面の暗黙契約）。
 *
 * すべての公開コンポーネントは、ルート要素に `wim-<kebab名>` のグローバルクラスを
 * 付与して安定したスタイル上書きポイントを提供する（CSS Modules のクラス名は
 * ハッシュ化されるため、これが唯一の安定した class フック）。このスクリプトは
 * 各コンポーネントの主 tsx に対応するフック文字列が含まれることを検証する。
 *
 * Usage: node scripts/check-root-hooks.js
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const componentsDir = path.join(root, "src/components");

// PascalCase -> kebab（頭字語ラン対応: QRCode->qr-code, AIResponseFeedback->ai-response-feedback）
export function toKebab(name) {
  return name
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .replace(/([a-z\d])([A-Z])/g, "$1-$2")
    .toLowerCase();
}

// DOM ルートを持たない振る舞い専用コンポーネント（フック付与対象外）。
const EXEMPT = new Set(["Portal", "Transition"]);

const missing = [];
for (const cat of fs.readdirSync(componentsDir)) {
  const catDir = path.join(componentsDir, cat);
  if (!fs.statSync(catDir).isDirectory() || cat.startsWith("_")) continue;
  for (const comp of fs.readdirSync(catDir)) {
    const compDir = path.join(catDir, comp);
    if (!fs.statSync(compDir).isDirectory() || !/^[A-Z]/.test(comp)) continue;
    if (EXEMPT.has(comp)) continue;
    const main = path.join(compDir, `${comp}.tsx`);
    if (!fs.existsSync(main)) continue;
    const src = fs.readFileSync(main, "utf8");
    const hook = `wim-${toKebab(comp)}`;
    if (!new RegExp(`["'\`]${hook}["'\`\\s]`).test(src)) {
      missing.push({ comp, hook, file: path.relative(root, main) });
    }
  }
}

if (missing.length === 0) {
  console.log("✓ All components expose a stable wim-<name> root hook.");
  process.exit(0);
}
console.error(`✗ ${missing.length} component(s) missing a wim-<name> root hook:`);
for (const m of missing) console.error(`  ${m.comp} — expected "${m.hook}" in ${m.file}`);
console.error(
  "\nAdd the hook to the root element, e.g. classNames(\"wim-foo\", styles.root, className).\n" +
    "If the component renders no DOM root of its own, add it to EXEMPT in this script.",
);
process.exit(1);
