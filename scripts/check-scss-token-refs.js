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

/* ────────────────────────────────────────────────────────────────────────────
 * 2 つめの検査: **生成トークンの族に属する名前の誤記**（2026-08-21）。
 *
 * 上の検査は `--wim-color-*` だけを見て、**フォールバック付きの参照は素通り**させる
 * （「フォールバックがあるなら決定的に解決するから」）。その隙間に実害が 3 件落ちていた:
 *
 *   `--wim-font-family-sans`  … 存在しない。`AgentStatus` / `CodeDiffViewer` は
 *     フォールバックの `sans-serif` で描かれていた ＝ **デザインシステムの
 *     フォントで描かれていない**（CI-8 の走査で偶然見つかった）
 *   `--wim-font-family-base`  … 存在しない。`NodeGraph` / `InteractiveGraph` は
 *     フォールバックも無いので **`font-family` の指定ごと無効**（継承任せ）
 *   `--wim-easing-decelerate` … 存在しない。`Gallery` の
 *     `animation: toolbar-in <duration> var(...)` は**まるごと無効**＝アニメーション
 *     が動いていなかった
 *
 * **判定**: 参照名が生成トークン（`src/tokens/generated/`）に無く、かつ
 * **同じ族（最後の 1 語を落とした接頭辞）に生成トークンが実在する**なら誤記。
 *
 * 族で絞るのが要点。単に「兄弟が居るか」で見ると**コンポーネント固有のフックまで
 * 拾う** ── 実測では 15 件中 12 件が誤検出だった（`--wim-field-bg` /
 * `--wim-snackbar-blur` / `--wim-glass-blur` など、意図的な拡張点）。生成トークンの
 * 族に限ると **3 件ちょうど**＝上の実害だけが残る。
 *
 * **フォールバックの有無は問わない。** フォールバックは「意図的な拡張点」の印にも
 * 「誤記に気づかないための蓋」にもなるので、それ自体は免罪符にならない。
 * ────────────────────────────────────────────────────────────────────────── */

const GENERATED = path.join(root, "src", "tokens", "generated");
const STORIES = path.join(root, "stories");

function readGeneratedTokens() {
  const names = new Set();
  for (const f of fs.readdirSync(GENERATED)) {
    if (!/\.(scss|css)$/.test(f)) continue;
    const src = fs.readFileSync(path.join(GENERATED, f), "utf8");
    for (const m of src.matchAll(/(--wim-[a-z0-9-]+)\s*:/g)) names.add(m[1]);
  }
  if (!names.size) {
    throw new Error(
      "生成トークンが 1 つも読めなかった。`npm run tokens:build` を先に走らせること。",
    );
  }
  return names;
}

const generated = readGeneratedTokens();
const families = new Set(
  [...generated].map((n) => n.slice(0, n.lastIndexOf("-") + 1)),
);

// `var(--wim-x)` / `var(--wim-x, fallback)` の両方。**SCSS 補間は除く** ──
// `var(--wim-font-size-#{$size})` は名前が実行時に決まるので静的には判定できない
// （`)` か `,` が続くものだけを名前として認める）。
const ANY_REF = /var\(\s*(--wim-[a-z0-9-]+)\s*(?=[,)])/g;

const typos = [];
for (const file of [...walk(COMPONENTS), ...walk(STORIES)]) {
  const src = fs.readFileSync(file, "utf8");
  const rel = path.relative(root, file).split(path.sep).join("/");
  src.split("\n").forEach((line, i) => {
    for (const m of line.matchAll(ANY_REF)) {
      const name = m[1];
      if (generated.has(name)) continue;
      const family = name.slice(0, name.lastIndexOf("-") + 1);
      if (!families.has(family)) continue; // コンポーネント固有のフック
      typos.push({ name, rel, line: i + 1, family });
    }
  });
}

if (typos.length) {
  console.error(
    `✗ ${typos.length} 件、生成トークンの族に無い名前を参照している（誤記の疑い）:`,
  );
  for (const t of typos) {
    const siblings = [...generated]
      .filter((n) => n.startsWith(t.family))
      .slice(0, 4);
    console.error(`  - ${t.name}  <-  ${t.rel}:${t.line}`);
    console.error(`      実在する同族: ${siblings.join(", ")}`);
  }
  console.error(
    "\n実在するトークンに直すか、族の外の名前（コンポーネント固有のフック）にすること。",
  );
  process.exit(1);
}

console.log(
  `✓ 生成トークンの族に属する参照はすべて実在する（${generated.size} トークン / ${families.size} 族）。`,
);
