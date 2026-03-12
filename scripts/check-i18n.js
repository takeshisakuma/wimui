/**
 * i18n translation key consistency checker.
 * Exits with code 1 if any locale is missing keys that exist in another locale.
 * Intended for use in CI to catch translation gaps before merging.
 *
 * Usage: node scripts/check-i18n.js
 */

import fs from "fs";
import path from "path";

const localesDir = "./public/locales";
const namespaces = [
  "common",
  "components",
  "docs",
  "docs_actions",
  "docs_display",
  "docs_guides",
  "docs_inputs",
  "docs_layout",
  "docs_navigation",
  "docs_overlay",
  "docs_stories",
];

// Derive available languages from the locales directory
const langs = fs
  .readdirSync(localesDir)
  .filter((f) => fs.statSync(path.join(localesDir, f)).isDirectory());

let totalGaps = 0;
const report = [];

for (const ns of namespaces) {
  // Load each locale file that exists
  const loaded = {};
  for (const lang of langs) {
    const filePath = path.join(localesDir, lang, `${ns}.json`);
    if (fs.existsSync(filePath)) {
      loaded[lang] = Object.keys(JSON.parse(fs.readFileSync(filePath, "utf8")));
    }
  }

  const loadedLangs = Object.keys(loaded);
  if (loadedLangs.length < 2) continue;

  // Collect the union of all keys across all locales
  const allKeys = new Set(loadedLangs.flatMap((lang) => loaded[lang]));

  for (const lang of loadedLangs) {
    const missing = [...allKeys].filter((k) => !loaded[lang].includes(k));
    if (missing.length > 0) {
      report.push({ ns, lang, missing });
      totalGaps += missing.length;
    }
  }
}

if (report.length === 0) {
  console.log("✓ All translation keys are consistent across all locales.");
  process.exit(0);
}

console.error(
  `✗ Found ${totalGaps} missing translation key(s) across ${report.length} locale/namespace combination(s):\n`,
);

for (const { ns, lang, missing } of report) {
  console.error(`  [${ns}] ${lang} is missing ${missing.length} key(s):`);
  missing.forEach((k) => console.error(`    - ${k}`));
}

console.error("\nRun `npm run i18n:sync` to fill in missing translations.");
process.exit(1);
