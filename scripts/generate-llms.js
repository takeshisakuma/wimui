#!/usr/bin/env node
// Generate llms.txt / llms-full.txt — a machine-readable map of WIM UI for
// LLM coding agents (Cursor / Claude Code / etc.) so they compose real screens
// with the correct imports, CSS contract, and (crucially) WIM's anti-generic
// composition rules — instead of guessing.
//
// Sources of truth (all generated/authored elsewhere; this script only aggregates):
//   - package.json                       … name / version / peer deps
//   - src/data/components.json           … documented catalog + descriptions (by doc-category)
//   - src/data/docgen_index.json         … component name -> export category (import subpath)
//   - src/data/docgen_<category>.json    … props / tokens / anatomy per component
//   - public/locales/en/**.json          … English descriptions (descKey resolution)
//   - DESIGN.md (composition section)     … anti-generic rules (condensed inline below)

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const readJSON = (p) => JSON.parse(readFileSync(join(ROOT, p), 'utf8'));

const pkg = readJSON('package.json');
const catalog = readJSON('src/data/components.json');
const nameToExportCat = readJSON('src/data/docgen_index.json');

// export category -> import subpath. Root barrel ("wimui") always works too.
const EXPORT_CATS = new Set([
  'layout', 'form', 'feedback', 'navigation', 'data-display',
  'overlay', 'typography', 'media', 'charts', 'ai',
]);

// Load per-category docgen (props/tokens/anatomy), keyed by component name.
const docgen = {};
for (const cat of EXPORT_CATS) {
  try {
    Object.assign(docgen, readJSON(`src/data/docgen_${cat}.json`));
  } catch {
    /* category docgen not generated yet — skip */
  }
}

// Flatten every en locale file into one dotted-key lookup for descKey resolution.
const i18n = {};
const localesDir = join(ROOT, 'public/locales/en');
const flatten = (obj, prefix = '') => {
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) flatten(v, key);
    else if (typeof v === 'string') i18n[key] = v;
  }
};
for (const file of readdirSync(localesDir)) {
  if (file.endsWith('.json')) flatten(readJSON(`public/locales/en/${file}`));
}
const resolve = (key) => i18n[key] || '';

// --- helpers --------------------------------------------------------------

// Render a docgen tsType into a compact one-line type string.
const typeStr = (t) => {
  if (!t) return 'unknown';
  const raw = t.raw ? t.raw.replace(/\s+/g, ' ').replace(/^\|\s*/, '').trim() : '';
  if (raw && raw.length <= 80) return raw;
  if (t.name === 'union' && Array.isArray(t.elements)) {
    const parts = t.elements
      .map((e) => (e.name === 'signature' ? 'object' : (e.value ?? e.name ?? '?')))
      .filter((v, i, a) => a.indexOf(v) === i);
    return parts.join(' | ');
  }
  return raw || t.name || 'unknown';
};

const importPathFor = (name) => {
  const cat = nameToExportCat[name];
  return EXPORT_CATS.has(cat) ? `wimui/${cat}` : 'wimui';
};

// Top-level components only: skip dotted sub-parts (Card.Header) and internals.
const isTopLevel = (name) =>
  !name.includes('.') && nameToExportCat[name] !== '_internal';

// --- component grouping (needed for the header count too) -----------------

// Group the documented catalog by export category (for import correctness),
// carrying each component's English description.
const byExportCat = new Map([...EXPORT_CATS].map((c) => [c, []]));
const rootOnly = [];
const seen = new Set();
for (const group of catalog) {
  for (const comp of group.components) {
    if (!isTopLevel(comp.name) || seen.has(comp.name)) continue;
    seen.add(comp.name);
    const entry = { name: comp.name, desc: resolve(comp.descKey) };
    const cat = nameToExportCat[comp.name];
    if (byExportCat.has(cat)) byExportCat.get(cat).push(entry);
    else rootOnly.push(entry);
  }
}

// --- shared header --------------------------------------------------------

const setup = `## What this is

**${pkg.name}** v${pkg.version} — a React 19 component library: ${seen.size} documented components across ${EXPORT_CATS.size} categories, with design tokens, dark mode, i18n (en/ja/pt-BR) and WAI-ARIA compliant a11y. Peer deps: react ^19, react-dom ^19 (plus optional peers for specific components — see package.json).

## Install & required setup

\`\`\`bash
npm i ${pkg.name}
\`\`\`

\`\`\`ts
// 1. CSS contract — styles.css is REQUIRED (design tokens + component styles).
import "${pkg.name}/styles.css";
import "${pkg.name}/reset.css"; // optional base reset

// 2. Components — import from the root barrel or a category subpath (tree-shakeable).
import { Button, Card } from "${pkg.name}";
import { Stack, Grid } from "${pkg.name}/layout";
\`\`\`

- **Theme**: wrap the app in \`WimProvider\` (recommended) or set \`data-theme="light|dark"\` on \`<html>\` (omit to follow OS).
- **Density**: \`data-density="comfortable|compact"\`, or \`WimProvider\` / \`setWimDensity()\`.
- **Never hardcode** colors / spacing / sizes in consumer code — use the \`--wim-*\` CSS custom properties (tokens) that styles.css defines.
- **Form + RHF** helpers live in \`${pkg.name}/rhf\` (react-hook-form + zod), not the root barrel.

## Import paths

Every component works from the root barrel \`"${pkg.name}"\`. For smaller bundles, import from its category subpath instead:

${[...EXPORT_CATS].map((c) => `- \`${pkg.name}/${c}\``).join('\n')}
`;

// Condensed, agent-actionable version of DESIGN.md's composition guidelines.
// The full authored source is DESIGN.md → "コンポジションガイドライン".
const composition = `## Composition rules — build screens that don't look AI-generated

Single components are judged by state/a11y/token compliance. **Composed screens** are judged by hierarchy, rhythm, asymmetry and real-feeling content. Apply these whenever combining components into a screen, page, pattern or demo.

**Before laying out**: pick exactly ONE visual protagonist for the screen. If every element has the same volume, it reads as AI-generated.

**Banned patterns (the "AI signature" — do not emit):**
- \`linear-gradient(135deg, …)\` hero backgrounds → use surface-hierarchy tokens (\`surface\` / \`surface-raised\`) to separate planes.
- The stock hero (badge → big heading → subtext → two solid/outline buttons) → asymmetric composition led by one protagonist.
- "Rule of three" equal feature cards (icon + short heading + one line, ×3) → let the count follow content (2 or 5 is fine); vary card size and copy length.
- Emoji used as UI icons (☰ ★ ✓) → use \`src/icon/\` components. (Emoji as functional markers in docs/README is fine; as UI icons it is not.)
- Skeleton used as anything but loading (fake screenshots) → real-looking content or an actual mini UI.
- Every section center-aligned → default to left-aligned; at most one centered section per page.
- Round numbers ("1000+", "99%") + generic copy ("Get started", "seamless/powerful/effortless") → jagged realistic numbers (4,281) and product-specific voice.
- Sequential/alphabetical dummy names (Alice/Bob/Charlie, User 1/2) → culturally diverse, unordered, real-feeling names.
- Rainbow color-per-category → color carries state only (success/warning/danger); everything else neutral.
- Perfectly even grids (2×2, 3×3 all same size) → break the grid (span the protagonist cell, size differences, hero+sidebar asymmetry).
- Filling every slot / uniform gaps everywhere → leave whitespace; group by proximity (tight within a group, loose between groups).

**Must rules:**
1. One visual protagonist per screen (jump in size/weight/color creates the entry point).
2. Contrast density: hero/showcase sparse, data regions (tables/lists) dense. Uniform "medium density" reads as AI.
3. Never override a component's defaults via inline \`style\` (\`padding:0\`, \`borderRadius:0\`). Add a prop/token instead.
4. Never hardcode gap/padding/size — use \`--wim-spacing-*\` tokens.
5. Keep one radius stance per screen (\`radius.component\` / \`radius.container\` / \`radius.overlay\`); don't mix 0 and lg arbitrarily.
6. Limit accent color: primary surfaces (solid buttons, emphasis backgrounds) 1–2 per view.
7. Give demo content real substance (product-context copy, internally consistent numbers/dates/names — active ≤ total, dates not evenly spaced).
8. Add intentional "wobble": mix in 1–2 incomplete rows (a truncated long name, a missing optional field, an extreme value, an error/unread state) and show non-happy-path states (hover/focus/disabled/error/empty/loading).
`;

// --- component sections ---------------------------------------------------

const catalogSection = (withProps) => {
  const lines = ['## Components'];
  for (const [cat, comps] of byExportCat) {
    if (!comps.length) continue;
    comps.sort((a, b) => a.name.localeCompare(b.name));
    lines.push(`\n### ${cat} — \`import { … } from "${pkg.name}/${cat}"\`\n`);
    for (const { name, desc } of comps) {
      lines.push(`- **${name}**${desc ? ` — ${desc}` : ''}`);
      if (!withProps) continue;
      const dg = docgen[name];
      if (!dg?.props) continue;
      const props = Object.entries(dg.props)
        .filter(([, p]) => p.description || p.required)
        .slice(0, 40)
        .map(([pn, p]) => {
          const req = p.required ? ' (required)' : '';
          const def = p.defaultValue ? ` = ${p.defaultValue.value}` : '';
          const d = p.description ? ` — ${p.description}` : '';
          return `    - \`${pn}: ${typeStr(p.tsType)}\`${req}${def}${d}`;
        });
      if (props.length) lines.push(props.join('\n'));
    }
  }
  return lines.join('\n');
};

// --- assemble & write -----------------------------------------------------

const banner = `# WIM UI — LLM guide (llms.txt)\n\n> Machine-readable map of the ${pkg.name} React component library for coding agents. Read this before generating any UI with ${pkg.name}: it defines the required CSS/setup, the correct import paths, the full component list, and the composition rules that keep screens from looking AI-generated.\n`;

const concise = [
  banner,
  setup,
  composition,
  catalogSection(false),
  `\n---\nFor per-component props, types and defaults, see \`llms-full.txt\`.`,
].join('\n');

const full = [
  banner.replace('llms.txt', 'llms-full.txt'),
  setup,
  composition,
  catalogSection(true),
].join('\n');

writeFileSync(join(ROOT, 'public/llms.txt'), concise);
writeFileSync(join(ROOT, 'public/llms-full.txt'), full);

const unresolved = catalog
  .flatMap((g) => g.components)
  .filter((c) => isTopLevel(c.name) && c.descKey && !resolve(c.descKey)).length;

console.log(`✓ public/llms.txt          (${(concise.length / 1024).toFixed(1)} KB)`);
console.log(`✓ public/llms-full.txt     (${(full.length / 1024).toFixed(1)} KB)`);
console.log(`  ${seen.size} components, ${unresolved} descriptions unresolved`);
