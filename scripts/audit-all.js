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
    name: "Peer import paths (root barrel must not pull optional peers)",
    command: "node scripts/check-imports.js",
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
