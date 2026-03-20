/**
 * Component-level i18n translation key checker.
 * Scans src/components for t("key") usage, detects the namespace from
 * useTranslation("namespace") calls, then reports missing keys per component file.
 *
 * Usage: node scripts/check-i18n-components.js
 */

import fs from "fs";
import path from "path";
import { globSync } from "glob";

const localesDir = "./public/locales";
const srcDir = "./src/components";

// Load all locale data: locales[lang][namespace] = Set<key>
const locales = {};
const langs = fs
  .readdirSync(localesDir)
  .filter((f) => fs.statSync(path.join(localesDir, f)).isDirectory());

for (const lang of langs) {
  locales[lang] = {};
  const langDir = path.join(localesDir, lang);
  for (const file of fs.readdirSync(langDir).filter((f) => f.endsWith(".json"))) {
    const ns = file.replace(".json", "");
    const data = JSON.parse(fs.readFileSync(path.join(langDir, file), "utf8"));
    locales[lang][ns] = new Set(Object.keys(data));
  }
}

// Find all component TSX files (exclude tests and stories)
const files = globSync(`${srcDir}/**/*.tsx`, { posix: true }).filter(
  (f) => !f.includes(".test.") && !f.includes(".stories.")
);

// Extract namespaces from useTranslation("ns"), useTranslation(['ns1','ns2']), etc.
// Returns an array of namespaces. Defaults to ["common"] if not specified.
function detectNamespaces(source) {
  // Array form: useTranslation(["ns1", "ns2", ...])
  const arrayMatch = source.match(/useTranslation\(\s*\[([^\]]+)\]/);
  if (arrayMatch) {
    const ns = [...arrayMatch[1].matchAll(/["']([^"']+)["']/g)].map((m) => m[1]);
    if (ns.length > 0) return ns;
  }
  // String form: useTranslation("ns") or useTranslation('ns')
  const stringMatch = source.match(/useTranslation\(\s*["']([^"']+)["']\s*\)/);
  if (stringMatch) return [stringMatch[1]];
  return ["common"];
}

// Extract all t("key") / t('key') literal calls
function extractKeys(source) {
  const keys = new Set();
  // Match t("key") and t('key') — only string literals, not variables
  const re = /\bt\(\s*["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(source)) !== null) {
    keys.add(m[1]);
  }
  return keys;
}

let totalGaps = 0;
const report = [];

// Pre-build a merged key set per lang (union of all namespaces) for fallback-aware lookup
const allKeysByLang = {};
for (const lang of langs) {
  allKeysByLang[lang] = new Set();
  for (const nsKeys of Object.values(locales[lang] ?? {})) {
    nsKeys.forEach((k) => allKeysByLang[lang].add(k));
  }
}

for (const file of files.sort()) {
  const source = fs.readFileSync(file, "utf8");
  const namespaces = detectNamespaces(source);
  const usedKeys = extractKeys(source);

  if (usedKeys.size === 0) continue;

  // A key is truly missing only if it exists in NO namespace for that lang
  // (i18n config has fallbackNS covering all namespaces at runtime)
  const missingByLang = {};

  for (const lang of langs) {
    const missing = [...usedKeys].filter((k) => !allKeysByLang[lang].has(k));
    if (missing.length > 0) {
      missingByLang[lang] = missing;
    }
  }

  if (Object.keys(missingByLang).length > 0) {
    const relPath = path.relative(".", file).replace(/\\/g, "/");
    const nsLabel = namespaces.join(", ");
    report.push({ file: relPath, ns: nsLabel, missingByLang });
    for (const missing of Object.values(missingByLang)) {
      totalGaps += missing.length;
    }
  }
}

if (report.length === 0) {
  console.log("✓ All translation keys used in components exist in all locales.");
  process.exit(0);
}

console.error(
  `✗ Found ${totalGaps} missing key usage(s) across ${report.length} component file(s):\n`
);

for (const { file, ns, missingByLang } of report) {
  const fileName = path.basename(file);
  console.error(`  [${fileName}] (namespace: "${ns}")`);
  for (const [lang, missing] of Object.entries(missingByLang)) {
    console.error(`    ${lang} is missing ${missing.length} key(s):`);
    for (const k of missing) {
      console.error(`      - ${k}`);
    }
  }
}

console.error("\nRun `npm run i18n:sync` to fill in missing translations.");
process.exit(1);
