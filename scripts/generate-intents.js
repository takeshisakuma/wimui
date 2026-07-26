#!/usr/bin/env node
/**
 * Generate src/types/generated-intents.ts and src/tokens/generated/_intents.scss
 * from tokens/intents.json.
 *
 * intents.json is the single source of truth for the semantic intent
 * vocabulary. This script derives both the TypeScript union types AND the SCSS
 * `$token-colors` map from it, so the *Intent types, the indicator-style SCSS
 * class names, and the color tokens can never drift apart. (Historically the
 * SCSS map keyed danger as "error", silently unstyling `intent="danger"` on
 * Badge/Chip/Tag — exactly the drift this generator eliminates.)
 *
 * Validations (fail the build):
 *   1. Every value in every `set` exists in `canonical`.
 *   2. Every canonical intent with a non-null `color` maps to a real
 *      `--wim-color-<color>` token (checked against generated-tokens.ts).
 *   3. Every `surface` base/on color token exists as a `--wim-color-<key>`.
 *
 * Usage:
 *   node scripts/generate-intents.js            # write both generated files
 *   node scripts/generate-intents.js --check    # fail if either committed file is stale
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const SOURCE = path.join(root, "tokens", "intents.json");
const TOKENS_TYPES = path.join(root, "src", "types", "generated-tokens.ts");
const OUTPUT = path.join(root, "src", "types", "generated-intents.ts");
const OUTPUT_SCSS = path.join(root, "src", "tokens", "generated", "_intents.scss");

const checkMode = process.argv.includes("--check");

/** Extract the WimColorKey union members from the generated token types file. */
function readColorKeys() {
  const src = fs.readFileSync(TOKENS_TYPES, "utf8");
  const m = src.match(/export type WimColorKey\s*=\s*([\s\S]*?);/);
  if (!m) {
    throw new Error(
      `Could not find WimColorKey in ${path.relative(root, TOKENS_TYPES)}. Run \`npm run tokens:build\` first.`
    );
  }
  return new Set([...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]));
}

/**
 * Resolve a canonical intent's indicator `surface` into the base/on/text color
 * token keys, or null when the intent renders no dedicated surface.
 *   surface === true              → base = color, on = `text-on-<color>`, text = `text-<color>`
 *   surface === { base, on, text } → explicit token keys (e.g. neutral)
 * `text` is the AA-readable foreground for outline/subtle variants; the base
 * fill color is not contrast-safe as text.
 */
function resolveSurface(def) {
  const surface = def && def.surface;
  if (!surface) return null;
  // `subtle` is optional: when absent the subtle variant derives base at 15%.
  if (surface === true) {
    if (!def.color) {
      throw new Error(`surface: true requires a non-null color`);
    }
    return { base: def.color, on: `text-on-${def.color}`, text: `text-${def.color}` };
  }
  return { base: surface.base, on: surface.on, text: surface.text, subtle: surface.subtle };
}

function loadAndValidate() {
  const source = JSON.parse(fs.readFileSync(SOURCE, "utf8"));
  const canonical = source.canonical ?? {};
  const sets = source.sets ?? {};
  const colorKeys = readColorKeys();
  const errors = [];

  // Validation 1: each canonical color must exist as a color token.
  for (const [name, def] of Object.entries(canonical)) {
    const color = def && def.color;
    if (color != null && !colorKeys.has(color)) {
      errors.push(
        `canonical intent "${name}" maps to color "${color}" but --wim-color-${color} does not exist.`
      );
    }
  }

  // Validation 2: each set value must be a canonical intent.
  for (const [setName, def] of Object.entries(sets)) {
    for (const v of def.values) {
      if (!(v in canonical)) {
        errors.push(`set "${setName}" includes "${v}" which is not a canonical intent.`);
      }
    }
  }

  // Validation 3: every surface base/on color token must exist.
  for (const [name, def] of Object.entries(canonical)) {
    let surface;
    try {
      surface = resolveSurface(def);
    } catch (e) {
      errors.push(`canonical intent "${name}": ${e.message}.`);
      continue;
    }
    if (!surface) continue;
    for (const role of ["base", "on", "text", "subtle"]) {
      const key = surface[role];
      if (key === undefined) continue; // `subtle` is optional
      if (!colorKeys.has(key)) {
        errors.push(
          `canonical intent "${name}" surface.${role} "${key}" but --wim-color-${key} does not exist.`
        );
      }
    }
  }

  if (errors.length) {
    console.error("✗ tokens/intents.json is invalid:");
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }

  return { canonical, sets };
}

function buildTs({ canonical, sets }) {
  const canonicalList = Object.keys(canonical);
  let out = `/**\n * Do not edit directly, this file was auto-generated from tokens/intents.json.\n * Run \`npm run intents:build\` (also part of \`npm run tokens:build\`).\n */\n\n`;

  // A frozen tuple of the canonical vocabulary, useful for runtime iteration.
  out += `/** Every semantic intent, in canonical order. */\n`;
  out += `export const WIM_INTENTS = [\n  ${canonicalList.map((k) => `"${k}"`).join(",\n  ")}\n] as const;\n\n`;

  for (const [setName, def] of Object.entries(sets)) {
    out += `/**\n * ${def.description}\n */\n`;
    out += `export type ${setName} =\n  | ${def.values.map((v) => `"${v}"`).join("\n  | ")};\n\n`;
  }

  return out;
}

function buildScss({ canonical }) {
  let out = `// Do not edit directly, this file was auto-generated from tokens/intents.json.\n// Run \`npm run intents:build\` (also part of \`npm run tokens:build\`).\n//\n// $token-colors maps each indicator-painting intent to its base surface color,\n// the readable "on" color used for solid fills, and the AA-readable "text"\n// color used by outline/subtle variants. Keys match the semantic intent\n// vocabulary exactly, so \`styles?.[intent]\` (IndicatorBase) always hits.\n//\n// An optional "subtle" key overrides the subtle variant's background. Without\n// it the variant uses base at 15% alpha, which is invisible for an intent whose\n// base is already a near-surface tint.\n\n`;
  out += `$token-colors: (\n`;
  for (const [name, def] of Object.entries(canonical)) {
    const surface = resolveSurface(def);
    if (!surface) continue;
    out += `  "${name}": (\n`;
    out += `    "base": var(--wim-color-${surface.base}),\n`;
    out += `    "on": var(--wim-color-${surface.on}),\n`;
    out += `    "text": var(--wim-color-${surface.text}),\n`;
    if (surface.subtle) out += `    "subtle": var(--wim-color-${surface.subtle}),\n`;
    out += `  ),\n`;
  }
  out += `);\n`;
  return out;
}

const data = loadAndValidate();
const generatedTs = buildTs(data);
const generatedScss = buildScss(data);

const outputs = [
  { file: OUTPUT, content: generatedTs },
  { file: OUTPUT_SCSS, content: generatedScss },
];

if (checkMode) {
  let stale = false;
  for (const { file, content } of outputs) {
    const current = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
    if (current !== content) {
      console.error(
        `✗ ${path.relative(root, file)} is out of date with tokens/intents.json.\n  Run \`npm run intents:build\` and commit the result.`
      );
      stale = true;
    }
  }
  if (stale) process.exit(1);
  console.log("✓ generated intent files match tokens/intents.json.");
} else {
  for (const { file, content } of outputs) {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, content, "utf8");
    console.log(`✓ Wrote ${path.relative(root, file)} from tokens/intents.json.`);
  }
}
