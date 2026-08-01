/**
 * Comprehensive Audit Script for WIM UI.
 *
 * Checks are tagged `lib` or `docs`:
 *   - lib  : structural guards on the shipped library surface (public API,
 *            tokens, intent vocabulary, SCSS integrity, asChild, root hooks).
 *            These gate library work and must stay green to add components.
 *   - docs : the Storybook/MDX site and its 3-language documentation copy
 *            (MDX structure, doc-key i18n consistency, hardcoded-text linting).
 *            These police the documentation, not the library's behaviour.
 *
 * Usage:
 *   node scripts/audit-all.js            # everything (audit:all)
 *   node scripts/audit-all.js --lib      # library structural guards only (audit:lib)
 *   node scripts/audit-all.js --docs     # documentation/i18n checks only (audit:docs)
 */

import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const checks = [
  // --- docs: Storybook/MDX site + 3-language documentation copy ---
  {
    category: "docs",
    name: "MDX Structure and Placeholders",
    command: "node scripts/audit-mdx.js",
  },
  {
    category: "docs",
    name: "I18n Consistency and File Size",
    command: "node scripts/check-i18n.js",
  },
  {
    category: "docs",
    name: "MDX Hardcoded Text Detection",
    command: "node scripts/check-mdx-hardcoded.js",
  },
  {
    category: "docs",
    name: "Storybook Hierarchy Depth",
    command: "node scripts/check_hierarchy.js",
  },
  {
    category: "docs",
    name: "Hardcoded UI Text in Stories (i18n)",
    command: "node scripts/check-stories-hardcoded.js --all",
  },
  {
    category: "docs",
    name: "i18n-ignore ratchet (stories escape hatch)",
    command: "node scripts/check-i18n-ignore.js",
  },
  {
    category: "docs",
    name: "Story/docs translation key references",
    command: "node scripts/check_stories_keys.js",
  },
  {
    category: "docs",
    name: "Peer import paths (root barrel must not pull optional peers)",
    command: "node scripts/check-imports.js",
  },
  {
    category: "docs",
    name: "Story/sandbox/docs token references resolve",
    command: "node scripts/check-story-tokens.js",
  },
  {
    category: "docs",
    name: "AI-slop composition guard (Patterns anti-pattern gates)",
    command: "node scripts/check-slop.js",
  },
  {
    category: "docs",
    // public/ のコミット済みコピーが GitHub Pages で配信され、docs が AI エージェントに
    // 案内している URL の中身になる。ビルド結果をコミットし忘れると版落ちしたまま残る。
    name: "llms.txt freshness (committed copy matches source)",
    command: "node scripts/generate-llms.js --check",
  },
  {
    category: "docs",
    // 別名は「他所の語彙で探した人を実装名へ導く」ためのものなので、
    // 間違えると**別のコンポーネントへ誘導する**（T46）。既存名との衝突・
    // 全体での重複を禁じる。全量を見る必要があるため引数は取らない。
    name: "External vocabulary aliases (no collisions or duplicates)",
    command: "node scripts/check-aliases.js",
  },
  {
    category: "lib",
    // 単体では正しいトークンが、組み合わせたときだけ不可視になる事故を防ぐ。
    // axe も VRT も捕まえられない種類（T34）。
    name: "Contrast / fill visibility (intent × variant × surface)",
    command: "node scripts/check-contrast.js",
  },
  {
    category: "lib",
    // 型が受け付けるのに CSS が無い prop 値＝「書いても効かない prop」。
    // 呼び出し側が style へ逃げる原因になる（T33）。
    name: "Prop values without a CSS class",
    command: "node scripts/check-prop-classes.js",
  },
  // --- lib: structural guards on the shipped library surface ---
  {
    category: "lib",
    name: "Polymorphic asChild Compliance",
    command: "node scripts/check-aschild.js",
  },
  {
    category: "lib",
    name: "Hardcoded Values (colors / px ratchet)",
    command: "node scripts/check-hardcoded-values.js",
  },
  {
    category: "lib",
    name: "Public API Surface (npm freeze guard)",
    command: "node scripts/check-public-api.js",
  },
  {
    category: "lib",
    name: "Root override hooks (wim-<name> stability)",
    command: "node scripts/check-root-hooks.js",
  },
  {
    category: "lib",
    name: "Design token surface (theming freeze guard)",
    command: "node scripts/check-tokens.js",
  },
  {
    category: "lib",
    name: "Token TS types vs SCSS :root",
    command: "node scripts/check-token-types.js",
  },
  {
    category: "lib",
    name: "Intent vocabulary (generated intent .ts/.scss up to date)",
    command: "node scripts/generate-intents.js --check",
  },
  {
    category: "lib",
    name: "SCSS color-token reference integrity",
    command: "node scripts/check-scss-token-refs.js",
  },
  {
    category: "lib",
    name: "Intent → SCSS class coverage (no silently-unstyled intents)",
    command: "node scripts/check-intents-scss.js",
  },
  {
    category: "lib",
    name: "Monospace contract (token + descendant inheritance, always paired)",
    command: "node scripts/check-mono-family.js",
  },
];

const wantLib = process.argv.includes("--lib");
const wantDocs = process.argv.includes("--docs");
// No filter flag → run everything.
const filter = wantLib === wantDocs ? null : wantLib ? "lib" : "docs";
const selected = filter ? checks.filter((c) => c.category === filter) : checks;

const scope = filter ? filter.toUpperCase() : "FULL";
let failed = false;

console.log(`=== WIM UI Audit (${scope}) ===\n`);

for (const check of selected) {
  console.log(`Running: ${check.name}...`);
  try {
    execSync(check.command, { stdio: "inherit", cwd: path.join(__dirname, "..") });
    console.log(`✓ ${check.name} passed.\n`);
  } catch (error) {
    console.error(`✗ ${check.name} failed.\n`);
    failed = true;
  }
}

if (failed) {
  console.error(`=== Audit FAILED (${scope}) ===`);
  console.error("Please resolve the issues above before proceeding.");
  process.exit(1);
} else {
  console.log(`=== Audit PASSED (${scope}) ===`);
  if (filter === "lib") console.log("Library structural guards are green.");
  else if (filter === "docs") console.log("Documentation and i18n checks are green.");
  else console.log("All systems go! You are ready to add new components.");
}
