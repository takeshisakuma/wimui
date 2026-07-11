/**
 * Public API surface guardrail.
 *
 * Enumerates every symbol exported from each published entry point (derived from
 * package.json "exports") using the TypeScript type checker, then compares the
 * result against the committed snapshot in `api-snapshot.json`.
 *
 * Why: the category barrels use `export *`, so a new `export` in any component
 * file silently becomes public API. Once wimui is published to npm, removing a
 * leaked export is a breaking change. This check fails CI when the public surface
 * changes without the snapshot being updated on purpose.
 *
 * Usage:
 *   node scripts/check-public-api.js            # verify against snapshot (CI)
 *   node scripts/check-public-api.js --update    # rewrite the snapshot
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import ts from "typescript";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const snapshotPath = path.join(root, "api-snapshot.json");
const update = process.argv.includes("--update");

/**
 * Derive source entry points from package.json "exports".
 * Each subpath whose `types` points at ./dist/<name>.d.ts maps back to the
 * source file src/<name>.ts, so new subpaths are picked up automatically.
 * Per-component wildcard subpaths (the "./form/[star]" style, whose types glob
 * points under ./dist/components/) derive a non-existent star source path and
 * are skipped — the category barrels they belong to already cover their symbols.
 */
function resolveEntryPoints() {
  const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
  const entries = {};
  for (const [subpath, value] of Object.entries(pkg.exports ?? {})) {
    const types = typeof value === "object" && value ? value.types : undefined;
    if (typeof types !== "string") continue; // e.g. "./styles.css", "./locales/*"
    const m = types.match(/^\.\/dist\/(.+)\.d\.ts$/);
    if (!m) continue;
    const srcFile = path.join(root, "src", `${m[1]}.ts`);
    if (fs.existsSync(srcFile)) entries[subpath] = srcFile;
  }
  return entries;
}

function loadCompilerOptions() {
  const configPath = path.join(root, "tsconfig.json");
  const { config, error } = ts.readConfigFile(configPath, ts.sys.readFile);
  if (error) throw new Error(ts.flattenDiagnosticMessageText(error.messageText, "\n"));
  const parsed = ts.parseJsonConfigFileContent(config, ts.sys, root);
  return { ...parsed.options, noEmit: true, skipLibCheck: true };
}

/** Classify a symbol as "value", "type", or "namespace" for change detection. */
function classify(symbol, checker) {
  let sym = symbol;
  if (sym.flags & ts.SymbolFlags.Alias) {
    try {
      sym = checker.getAliasedSymbol(sym);
    } catch {
      /* keep original on resolution failure */
    }
  }
  const f = sym.flags;
  const isValue =
    f &
    (ts.SymbolFlags.Variable |
      ts.SymbolFlags.Function |
      ts.SymbolFlags.Class |
      ts.SymbolFlags.Enum |
      ts.SymbolFlags.EnumMember |
      ts.SymbolFlags.ValueModule |
      ts.SymbolFlags.Method |
      ts.SymbolFlags.Property);
  const isType =
    f &
    (ts.SymbolFlags.Interface |
      ts.SymbolFlags.TypeAlias |
      ts.SymbolFlags.TypeParameter |
      ts.SymbolFlags.Enum);
  if (isValue && isType) return "value+type";
  if (isValue) return "value";
  if (isType) return "type";
  if (f & ts.SymbolFlags.Namespace) return "namespace";
  return "unknown";
}

function collectSurface() {
  const entries = resolveEntryPoints();
  const options = loadCompilerOptions();
  const program = ts.createProgram(Object.values(entries), options);
  const checker = program.getTypeChecker();

  const surface = {};
  for (const [subpath, file] of Object.entries(entries)) {
    const sf = program.getSourceFile(file);
    if (!sf) throw new Error(`Could not load source file for ${subpath}: ${file}`);
    const moduleSymbol = checker.getSymbolAtLocation(sf);
    if (!moduleSymbol) {
      // A file with no exports has no module symbol; record empty.
      surface[subpath] = [];
      continue;
    }
    const exports = checker.getExportsOfModule(moduleSymbol);
    surface[subpath] = exports
      .map((s) => `${s.getName()} (${classify(s, checker)})`)
      .sort((a, b) => a.localeCompare(b));
  }
  return surface;
}

function diff(prev, next) {
  const changes = [];
  const subpaths = new Set([...Object.keys(prev), ...Object.keys(next)]);
  for (const sp of [...subpaths].sort()) {
    const before = new Set(prev[sp] ?? []);
    const after = new Set(next[sp] ?? []);
    const added = [...after].filter((x) => !before.has(x));
    const removed = [...before].filter((x) => !after.has(x));
    if (added.length || removed.length) changes.push({ sp, added, removed });
  }
  return changes;
}

const surface = collectSurface();
const serialized = JSON.stringify(surface, null, 2) + "\n";

if (update) {
  fs.writeFileSync(snapshotPath, serialized);
  const total = Object.values(surface).reduce((n, a) => n + a.length, 0);
  console.log(`Updated api-snapshot.json (${Object.keys(surface).length} entry points, ${total} exports).`);
  process.exit(0);
}

if (!fs.existsSync(snapshotPath)) {
  console.error("api-snapshot.json is missing. Run: node scripts/check-public-api.js --update");
  process.exit(1);
}

const previous = JSON.parse(fs.readFileSync(snapshotPath, "utf8"));
const changes = diff(previous, surface);

if (changes.length === 0) {
  console.log("Public API surface matches api-snapshot.json.");
  process.exit(0);
}

console.error("Public API surface changed. Review the diff below.\n");
for (const { sp, added, removed } of changes) {
  console.error(`  ${sp}`);
  for (const a of added) console.error(`    + ${a}`);
  for (const r of removed) console.error(`    - ${r}`);
}
console.error(
  "\nIf these changes are intentional (and semver-appropriate), run:\n" +
    "  node scripts/check-public-api.js --update\n" +
    "and commit the updated api-snapshot.json.",
);
process.exit(1);
