/**
 * Public API surface guardrail.
 *
 * Freezes two layers of the publish contract:
 * 1. `package.json` "exports" map (entry barrels, CSS, locales — no per-component deep paths)
 * 2. Named symbols re-exported from each barrel entry (via TypeScript checker)
 *
 * Component deep paths (`wimui/form/Button`) are intentionally not exported so
 * folder renames under `src/components/` stay non-breaking for consumers.
 *
 * Why symbols: category barrels use `export *`, so a new `export` in any component
 * file silently becomes public API. After npm publish, removing a leaked export is
 * a breaking change.
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

const SNAPSHOT_VERSION = 2;

/**
 * Normalize package.json "exports" into sorted contract lines.
 * String targets and conditional objects are both covered.
 */
function collectPackageExports() {
  const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
  const lines = [];
  for (const [subpath, value] of Object.entries(pkg.exports ?? {})) {
    if (typeof value === "string") {
      lines.push(`${subpath} => ${value}`);
      continue;
    }
    if (!value || typeof value !== "object") {
      lines.push(`${subpath} => ${JSON.stringify(value)}`);
      continue;
    }
    const parts = ["types", "import", "require", "default"]
      .filter((k) => typeof value[k] === "string")
      .map((k) => `${k}:${value[k]}`);
    const extra = Object.keys(value)
      .filter((k) => !["types", "import", "require", "default"].includes(k))
      .sort();
    for (const k of extra) parts.push(`${k}:${JSON.stringify(value[k])}`);
    lines.push(`${subpath} => ${parts.join("; ")}`);
  }
  return lines.sort((a, b) => a.localeCompare(b));
}

/**
 * Derive source entry points from package.json "exports".
 * Each subpath whose `types` points at ./dist/<name>.d.ts maps back to the
 * source file src/<name>.ts. CSS/locale string targets and any leftover wildcards
 * without a matching src/<name>.ts are skipped here (covered by collectPackageExports).
 */
function resolveEntryPoints() {
  const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
  const entries = {};
  for (const [subpath, value] of Object.entries(pkg.exports ?? {})) {
    const types = typeof value === "object" && value ? value.types : undefined;
    if (typeof types !== "string") continue;
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

function collectEntryExports() {
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

function collectSnapshot() {
  return {
    version: SNAPSHOT_VERSION,
    packageExports: collectPackageExports(),
    entryExports: collectEntryExports(),
  };
}

function normalizePrevious(raw) {
  // v1: top-level keys were entry subpaths with symbol arrays
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    throw new Error("api-snapshot.json has an unexpected shape.");
  }
  if (raw.version === SNAPSHOT_VERSION && Array.isArray(raw.packageExports) && raw.entryExports) {
    return raw;
  }
  if (raw.version == null && Object.values(raw).every((v) => Array.isArray(v))) {
    return { version: 1, packageExports: null, entryExports: raw };
  }
  throw new Error(
    "api-snapshot.json is not a recognized format. Run: node scripts/check-public-api.js --update",
  );
}

function diffLists(label, before, after) {
  const b = new Set(before ?? []);
  const a = new Set(after ?? []);
  const added = [...a].filter((x) => !b.has(x)).sort();
  const removed = [...b].filter((x) => !a.has(x)).sort();
  if (!added.length && !removed.length) return null;
  return { label, added, removed };
}

function diffEntryMaps(prev, next) {
  const changes = [];
  const subpaths = new Set([...Object.keys(prev ?? {}), ...Object.keys(next ?? {})]);
  for (const sp of [...subpaths].sort()) {
    const d = diffLists(sp, prev?.[sp], next?.[sp]);
    if (d) changes.push(d);
  }
  return changes;
}

const snapshot = collectSnapshot();
const serialized = JSON.stringify(snapshot, null, 2) + "\n";

if (update) {
  fs.writeFileSync(snapshotPath, serialized);
  const total = Object.values(snapshot.entryExports).reduce((n, a) => n + a.length, 0);
  console.log(
    `Updated api-snapshot.json (v${SNAPSHOT_VERSION}: ${snapshot.packageExports.length} export paths, ${Object.keys(snapshot.entryExports).length} entries, ${total} symbols).`,
  );
  process.exit(0);
}

if (!fs.existsSync(snapshotPath)) {
  console.error("api-snapshot.json is missing. Run: node scripts/check-public-api.js --update");
  process.exit(1);
}

const previous = normalizePrevious(JSON.parse(fs.readFileSync(snapshotPath, "utf8")));
const failures = [];

if (previous.version !== SNAPSHOT_VERSION || previous.packageExports == null) {
  failures.push({
    label: "snapshot format",
    added: [`v${SNAPSHOT_VERSION} (includes package.json exports map)`],
    removed: [`v${previous.version ?? 1} (entry symbols only)`],
  });
} else {
  const exportDiff = diffLists("package.json exports", previous.packageExports, snapshot.packageExports);
  if (exportDiff) failures.push(exportDiff);
}

failures.push(...diffEntryMaps(previous.entryExports, snapshot.entryExports));

if (failures.length === 0) {
  console.log(
    `Public API surface matches api-snapshot.json (v${SNAPSHOT_VERSION}: exports map + entry symbols).`,
  );
  process.exit(0);
}

console.error("Public API surface changed. Review the diff below.\n");
for (const { label, added, removed } of failures) {
  console.error(`  ${label}`);
  for (const a of added) console.error(`    + ${a}`);
  for (const r of removed) console.error(`    - ${r}`);
}
console.error(
  "\nIf these changes are intentional (and semver-appropriate), run:\n" +
    "  npm run check:api:update\n" +
    "and commit the updated api-snapshot.json.\n" +
    "Note: do not re-add per-component deep paths (e.g. ./form/*); barrels only.",
);
process.exit(1);
