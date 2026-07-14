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

/** Flatten nested locale JSON to dotted keys (e.g. doc.token_density). */
function flattenKeys(obj, prefix = "", out = []) {
  if (obj == null || typeof obj !== "object" || Array.isArray(obj)) {
    if (prefix) out.push(prefix);
    return out;
  }
  for (const [key, value] of Object.entries(obj)) {
    const next = prefix ? `${prefix}.${key}` : key;
    if (value != null && typeof value === "object" && !Array.isArray(value)) {
      flattenKeys(value, next, out);
    } else {
      out.push(next);
    }
  }
  return out;
}

// Derive available languages from the locales directory
const langs = fs
  .readdirSync(localesDir)
  .filter((f) => fs.statSync(path.join(localesDir, f)).isDirectory());

// Derive namespaces from all JSON files found across any locale
const namespacesSet = new Set();
for (const lang of langs) {
  const langDir = path.join(localesDir, lang);
  fs.readdirSync(langDir)
    .filter((f) => f.endsWith(".json"))
    .forEach((f) => namespacesSet.add(f.replace(".json", "")));
}
const namespaces = [...namespacesSet].sort();

const MAX_LINES = 1000;
const WARN_LINES = 800;

let totalGaps = 0;
let totalLineErrors = 0;
const report = [];
const lineCountIssues = [];

for (const ns of namespaces) {
  // Load each locale file that exists
  const loaded = {};
  for (const lang of langs) {
    const filePath = path.join(localesDir, lang, `${ns}.json`);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf8");
      const lineCount = content.split("\n").length;
      
      if (lineCount > WARN_LINES) {
        lineCountIssues.push({ ns, lang, lineCount, isError: lineCount > MAX_LINES });
        if (lineCount > MAX_LINES) totalLineErrors++;
      }

      loaded[lang] = new Set(flattenKeys(JSON.parse(content)));
    }
  }

  const loadedLangs = Object.keys(loaded);
  if (loadedLangs.length < 2) continue;

  // Collect the union of all nested keys across all locales
  const allKeys = new Set(loadedLangs.flatMap((lang) => [...loaded[lang]]));

  for (const lang of loadedLangs) {
    const missing = [...allKeys].filter((k) => !loaded[lang].has(k)).sort();
    if (missing.length > 0) {
      report.push({ ns, lang, missing });
      totalGaps += missing.length;
    }
  }
}

if (report.length === 0 && lineCountIssues.length === 0) {
  console.log("✓ All translation keys are consistent across all locales and file sizes are within limits.");
  process.exit(0);
}

if (lineCountIssues.length > 0) {
  console.warn("\n--- I18n File Size Check ---");
  for (const { ns, lang, lineCount, isError } of lineCountIssues) {
    const icon = isError ? "✗" : "⚠";
    const status = isError ? "ERROR" : "WARNING";
    console.warn(`  ${icon} [${ns}] ${lang}: ${lineCount} lines (${status}: Limit is ${MAX_LINES} lines)`);
  }
}

if (report.length > 0) {
  console.error(
    `\n✗ Found ${totalGaps} missing translation key(s) across ${report.length} locale/namespace combination(s):\n`,
  );

  for (const { ns, lang, missing } of report) {
    console.error(`  [${ns}] ${lang} is missing ${missing.length} key(s):`);
    missing.forEach((k) => console.error(`    - ${k}`));
  }
  console.error("\nRun `npm run i18n:sync` to fill in missing translations.");
}

const shouldExitWithError = totalGaps > 0 || totalLineErrors > 0;
process.exit(shouldExitWithError ? 1 : 0);
