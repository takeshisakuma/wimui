#!/usr/bin/env node
/**
 * SCSS design-token reference integrity guard.
 *
 * Component SCSS references color tokens as `var(--wim-color-<key>)`. If a key
 * is renamed or was never defined, the reference resolves to nothing and the
 * property silently does nothing (the "typed/authored but no effect" class of
 * bug). This guard checks every un-fallbacked `var(--wim-color-<key>)` in
 * src/components against the generated WimColorKey surface — extending the
 * intent/token single-source-of-truth to SCSS usage as verification (we do NOT
 * generate the SCSS, because intent->property mapping is legitimately bespoke
 * per component).
 *
 * A ratchet: known pre-existing orphans live in scss-token-refs-baseline.json.
 * The guard fails on any NEW orphan and reports baseline entries that are now
 * fixed (so the baseline can be pruned).
 *
 * References written with a fallback — `var(--wim-color-x, ...)` — are skipped:
 * they resolve deterministically regardless.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const TOKENS_TYPES = path.join(root, "src", "types", "generated-tokens.ts");
const BASELINE = path.join(root, "scripts", "scss-token-refs-baseline.json");
const COMPONENTS = path.join(root, "src", "components");

function readColorKeys() {
  const src = fs.readFileSync(TOKENS_TYPES, "utf8");
  const m = src.match(/export type WimColorKey\s*=\s*([\s\S]*?);/);
  if (!m) throw new Error("Could not find WimColorKey; run `npm run tokens:build`.");
  return new Set([...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]));
}

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.name.endsWith(".scss")) acc.push(p);
  }
  return acc;
}

const colorKeys = readColorKeys();
const baseline = JSON.parse(fs.readFileSync(BASELINE, "utf8")).knownOrphans ?? {};

// Match `var(--wim-color-<key>)` closed directly — i.e. WITHOUT a `, fallback`.
// A fallback (`var(--wim-color-x, ...)`) resolves deterministically, so skip it.
const REF = /var\(\s*--wim-color-([a-z0-9-]+)\s*\)/g;

const found = {}; // relpath -> Set(keys)
for (const file of walk(COMPONENTS)) {
  const src = fs.readFileSync(file, "utf8");
  const rel = path.relative(root, file).split(path.sep).join("/");
  for (const m of src.matchAll(REF)) {
    const key = m[1];
    if (colorKeys.has(key)) continue;
    (found[rel] ??= new Set()).add(key);
  }
}

const newOrphans = [];
const stillBroken = [];
for (const [rel, keys] of Object.entries(found)) {
  const allowed = new Set(baseline[rel] ?? []);
  for (const key of keys) {
    if (allowed.has(key)) stillBroken.push([rel, key]);
    else newOrphans.push([rel, key]);
  }
}

// Baseline entries no longer present -> should be pruned.
const fixed = [];
for (const [rel, keys] of Object.entries(baseline)) {
  for (const key of keys) {
    if (!found[rel]?.has(key)) fixed.push([rel, key]);
  }
}

if (fixed.length) {
  console.log("The following baselined orphans are now fixed — prune them from scss-token-refs-baseline.json:");
  for (const [rel, key] of fixed) console.log(`  - --wim-color-${key}  (${rel})`);
  console.log("");
}

if (newOrphans.length) {
  console.error(`✗ ${newOrphans.length} new broken --wim-color-* reference(s) (no such token):`);
  for (const [rel, key] of newOrphans) console.error(`  - --wim-color-${key}  <-  ${rel}`);
  console.error("\nUse an existing color token, add the token to tokens/, or write a fallback: var(--wim-color-x, <fallback>).");
  process.exit(1);
}

console.log(
  `✓ SCSS color-token references resolve (${colorKeys.size} keys). ${stillBroken.length} known pre-existing orphan(s) baselined.`
);
