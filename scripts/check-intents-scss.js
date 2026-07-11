#!/usr/bin/env node
/**
 * Guard: every intent a component can receive must have a matching SCSS class.
 *
 * Components that apply their intent dynamically — `styles[intent]`,
 * `styles?.[intent]`, `buttonStyles[intent]` … — turn the intent value straight
 * into a CSS-module class name. If the stylesheet has no class for a member of
 * the component's intent set, that intent renders silently unstyled. This is
 * exactly the `error`-vs-`danger` drift that unstyled `intent="danger"` on
 * Badge/Chip/Tag before tokens/intents.json became the single source of truth.
 *
 * This guard closes the loop the generator cannot: the SCSS *class selectors*
 * are hand-authored (variant×intent styling is bespoke design, not mechanically
 * generatable), so we verify — not generate — that they cover the set.
 *
 * Scope: components whose .tsx applies the intent value as a dynamic style
 * index. For each, the required members are the set's intents that paint a
 * surface (a non-null `color`, or an explicit `surface`); `default` (the
 * component's own base look, no dedicated class) is not required. An
 * `@include module-token-variants` counts as providing every surface intent.
 * Intent prop types that are not declared as a `set` in intents.json (a
 * component-local vocabulary) are skipped.
 *
 * Usage: node scripts/check-intents-scss.js
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const INTENTS = path.join(root, "tokens", "intents.json");
const COMPONENTS = path.join(root, "src", "components");

const CANONICAL_NAMES = new Set();
const SURFACE_INTENTS = new Set(); // canonical intents that must be painted
const SETS = {};

function loadIntents() {
  const src = JSON.parse(fs.readFileSync(INTENTS, "utf8"));
  for (const [name, def] of Object.entries(src.canonical ?? {})) {
    CANONICAL_NAMES.add(name);
    if ((def && def.color != null) || (def && def.surface)) SURFACE_INTENTS.add(name);
  }
  for (const [setName, def] of Object.entries(src.sets ?? {})) SETS[setName] = def.values;
}

/** All *.tsx under src/components except tests. */
function walkTsx(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walkTsx(p, out);
    else if (entry.name.endsWith(".tsx") && !entry.name.endsWith(".test.tsx")) out.push(p);
  }
  return out;
}

/** Coverage a stylesheet provides: literal intent selectors + mixin expansion. */
function scssCoverage(scssPath) {
  const covered = new Set();
  if (!fs.existsSync(scssPath)) return covered;
  const css = fs.readFileSync(scssPath, "utf8");
  if (/@include\s+module-token-variants/.test(css)) {
    for (const name of SURFACE_INTENTS) covered.add(name);
  }
  for (const name of CANONICAL_NAMES) {
    // `.name` or `&.name` as a class selector (word-bounded).
    const re = new RegExp(`(?:^|[^\\w-])&?\\.${name}(?![\\w-])`, "m");
    if (re.test(css)) covered.add(name);
  }
  return covered;
}

function resolveScssImport(tsxSrc, ident, tsxPath) {
  const re = new RegExp(`import\\s+${ident}\\s+from\\s+["']([^"']+\\.scss)["']`);
  const m = tsxSrc.match(re);
  if (!m) return null;
  return path.resolve(path.dirname(tsxPath), m[1]);
}

function main() {
  loadIntents();
  const failures = [];
  const checked = [];

  for (const tsxPath of walkTsx(COMPONENTS)) {
    const src = fs.readFileSync(tsxPath, "utf8");

    // Dynamic index identifiers: `foo[intent]` / `foo?.[intent]`.
    const idents = new Set(
      [...src.matchAll(/(\w+)\s*\??\.?\[\s*intent\s*\]/g)].map((m) => m[1])
    );
    if (idents.size === 0) continue;

    // The intent prop's declared set type.
    const typeMatch = src.match(/intent\s*\??:\s*(\w+Intent)\b/);
    if (!typeMatch) continue;
    const setName = typeMatch[1];
    if (!(setName in SETS)) continue; // component-local vocabulary, not in SSOT

    const required = SETS[setName].filter((v) => SURFACE_INTENTS.has(v));
    if (required.length === 0) continue;

    // Union coverage across every stylesheet the component indexes. When none
    // of the indexed identifiers resolve to a local stylesheet, the `styles`
    // come from a prop — this is a style-injected base (e.g. IndicatorBase)
    // whose coverage is the consumer's stylesheet, so there is nothing to check.
    const covered = new Set();
    let resolvedAny = false;
    for (const ident of idents) {
      const scssPath = resolveScssImport(src, ident, tsxPath);
      if (!scssPath) continue;
      resolvedAny = true;
      for (const c of scssCoverage(scssPath)) covered.add(c);
    }
    if (!resolvedAny) continue;

    const missing = required.filter((v) => !covered.has(v));
    const rel = path.relative(root, tsxPath).replace(/\\/g, "/");
    checked.push(rel);
    if (missing.length) {
      failures.push({ rel, setName, missing });
    }
  }

  if (failures.length) {
    console.error("✗ intent → SCSS class coverage gaps (intents that render unstyled):");
    for (const f of failures) {
      console.error(`  - ${f.rel} (${f.setName}): missing class for ${f.missing.join(", ")}`);
    }
    console.error(
      "\n  Each listed intent is applied as a dynamic style class but has no matching\n" +
        "  SCSS selector, so it renders with no color. Add the selector (or\n" +
        "  `@include module-token-variants`), or narrow the component's intent set in\n" +
        "  tokens/intents.json."
    );
    process.exit(1);
  }

  console.log(`✓ intent → SCSS class coverage OK (${checked.length} dynamic-intent components).`);
}

main();
