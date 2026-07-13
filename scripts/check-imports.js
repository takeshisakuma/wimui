/**
 * Fail if peer-heavy components are imported from the root "wimui" barrel.
 * They must come from wimui/charts, wimui/data-display, or wimui/ai.
 *
 * Scans stories and src (excluding category barrels).
 *
 * Run: node scripts/check-imports.js
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import { globSync } from "glob";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const { PEER_COMPONENT_NAMES, resolveImportInfo } = require("./peer-imports.cjs");

const ROOT = path.join(__dirname, "..");

/** Named imports from "wimui" (root only). */
const ROOT_IMPORT_RE =
  /import\s+(?:type\s+)?\{([^}]+)\}\s+from\s+["']wimui["']/g;

const files = [
  ...globSync("stories/**/*.{tsx,ts,mdx}", { cwd: ROOT, absolute: true }),
  ...globSync("src/**/*.{tsx,ts}", {
    cwd: ROOT,
    absolute: true,
    ignore: [
      "**/index.ts",
      "**/*-core.ts",
      "**/ai.ts",
      "**/data-display.ts",
      "**/charts.ts",
      "**/form.ts",
      "**/layout.ts",
      "**/feedback.ts",
      "**/navigation.ts",
      "**/overlay.ts",
      "**/typography.ts",
      "**/media.ts",
    ],
  }),
];

/** @type {{ file: string, name: string, expected: string }[]} */
const violations = [];

for (const file of files) {
  const src = fs.readFileSync(file, "utf8");
  ROOT_IMPORT_RE.lastIndex = 0;
  let m;
  while ((m = ROOT_IMPORT_RE.exec(src)) !== null) {
    const names = m[1]
      .split(",")
      .map((s) => s.trim().replace(/\n/g, "").replace(/\s+/g, " "))
      .filter(Boolean)
      // strip `as Alias`
      .map((s) => s.split(/\s+as\s+/)[0].trim());

    for (const name of names) {
      // Skip type-only suffixes already handled; skip non-component tokens
      if (!PEER_COMPONENT_NAMES.has(name) && !isChartName(name)) continue;
      const category = isChartName(name) ? "charts" : undefined;
      const { packagePath } = resolveImportInfo(name, category);
      if (packagePath === "wimui") continue;
      violations.push({
        file: path.relative(ROOT, file).replace(/\\/g, "/"),
        name,
        expected: packagePath,
      });
    }
  }
}

/** Chart component names from the charts barrel (recharts peers). */
function isChartName(name) {
  return (
    /Chart$/.test(name) ||
    name === "Sparkline" ||
    name === "Heatmap" ||
    name === "Treemap" ||
    name === "GanttChart"
  );
}

if (violations.length > 0) {
  console.error("check:imports failed — peer-heavy components must use subpath imports:\n");
  for (const v of violations) {
    console.error(`  ${v.file}: import { ${v.name} } from "wimui" → use "${v.expected}"`);
  }
  console.error(`\n${violations.length} violation(s).`);
  process.exit(1);
}

console.log("check:imports: OK");
