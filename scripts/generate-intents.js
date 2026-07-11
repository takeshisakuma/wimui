#!/usr/bin/env node
/**
 * Generate src/types/generated-intents.ts from tokens/intents.json.
 *
 * intents.json is the single source of truth for the semantic intent
 * vocabulary. This script derives the TypeScript union types from it so the
 * five *Intent types never drift apart or from the color tokens.
 *
 * Validations (fail the build):
 *   1. Every value in every `set` exists in `canonical`.
 *   2. Every canonical intent with a non-null `color` maps to a real
 *      `--wim-color-<color>` token (checked against generated-tokens.ts).
 *
 * Usage:
 *   node scripts/generate-intents.js            # write generated-intents.ts
 *   node scripts/generate-intents.js --check    # fail if committed file is stale
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const SOURCE = path.join(root, "tokens", "intents.json");
const TOKENS_TYPES = path.join(root, "src", "types", "generated-tokens.ts");
const OUTPUT = path.join(root, "src", "types", "generated-intents.ts");

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

function build() {
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

  if (errors.length) {
    console.error("✗ tokens/intents.json is invalid:");
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }

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

const generated = build();

if (checkMode) {
  const current = fs.existsSync(OUTPUT) ? fs.readFileSync(OUTPUT, "utf8") : "";
  if (current !== generated) {
    console.error(
      `✗ ${path.relative(root, OUTPUT)} is out of date with tokens/intents.json.\n  Run \`npm run intents:build\` and commit the result.`
    );
    process.exit(1);
  }
  console.log("✓ generated-intents.ts matches tokens/intents.json.");
} else {
  fs.writeFileSync(OUTPUT, generated, "utf8");
  console.log(`✓ Wrote ${path.relative(root, OUTPUT)} from tokens/intents.json.`);
}
