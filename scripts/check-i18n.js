/**
 * i18n translation key consistency checker.
 * Exits with code 1 if any locale is missing a file, or missing keys that exist
 * in another locale. Intended for use in CI to catch translation gaps before merging.
 *
 * The file-set check is not redundant with the key check: the key comparison can
 * only see locales that actually have the file, so a namespace present in some
 * locales but absent from others used to pass silently — either by being skipped
 * outright (present in one locale only) or by never being compared against the
 * locale that lacks it (present in two of three). `pt/docs_inputs.json` and
 * `pt/docs_inputs2.json` survived that way from 2026-02 to 2026-08 (see T84).
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
// Denominator: what was actually compared. Reported on success as well as
// failure, so that a check that silently stopped looking at anything cannot
// present itself as a pass.
let comparedNamespaces = 0;
let comparedKeys = 0;
const fileSetIssues = [];

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

  // A namespace must exist in every locale. Checked before the key comparison,
  // which by construction can only speak for the locales that have the file.
  if (loadedLangs.length < langs.length) {
    fileSetIssues.push({
      ns,
      present: loadedLangs,
      absent: langs.filter((lang) => !loadedLangs.includes(lang)),
    });
  }

  if (loadedLangs.length < 2) continue;

  // Collect the union of all nested keys across all locales
  const allKeys = new Set(loadedLangs.flatMap((lang) => [...loaded[lang]]));
  comparedNamespaces++;
  comparedKeys += allKeys.size;

  for (const lang of loadedLangs) {
    const missing = [...allKeys].filter((k) => !loaded[lang].has(k)).sort();
    if (missing.length > 0) {
      report.push({ ns, lang, missing });
      totalGaps += missing.length;
    }
  }
}

const scope = `${comparedNamespaces} namespace(s) / ${comparedKeys} key(s) across ${langs.length} locale(s) (${langs.join(", ")})`;

// Comparing nothing is a failure, not a pass. Every locale file could be
// deleted and the key comparison alone would still report success.
if (comparedNamespaces === 0) {
  console.error(`\n✗ Nothing was compared: ${scope}. Expected locale files under ${localesDir}.`);
  process.exit(1);
}

if (report.length === 0 && lineCountIssues.length === 0 && fileSetIssues.length === 0) {
  console.log(`✓ Compared ${scope}: keys are consistent, no locale is missing a file, and file sizes are within limits.`);
  process.exit(0);
}

if (fileSetIssues.length > 0) {
  console.error(`\n✗ Found ${fileSetIssues.length} namespace(s) that do not exist in every locale:\n`);
  for (const { ns, present, absent } of fileSetIssues) {
    console.error(`  ✗ [${ns}] present in ${present.join(", ")} — absent from ${absent.join(", ")}`);
  }
  console.error(
    "\nEither add the file to every locale (`npm run i18n:sync`) or delete the leftover copies.",
  );
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

console.error(`\nCompared ${scope}.`);

const shouldExitWithError = totalGaps > 0 || totalLineErrors > 0 || fileSetIssues.length > 0;
process.exit(shouldExitWithError ? 1 : 0);
