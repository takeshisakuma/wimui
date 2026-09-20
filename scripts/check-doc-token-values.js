#!/usr/bin/env node
/**
 * 設計文書のトークン表に書かれた**値**が、生成物と一致しているか（T260）。
 *
 * `check-doc-token-refs.js` は**名前が実在するか**しか見ない。値は誰も見ていなかった。
 * 2026-09-20 に T252 でカラー / タイポグラフィ節を切り出したとき、初めて突き合わせて
 * **16 行がずれていた**:
 *
 *   `--wim-shadow-md`      文書 `0 4px 12px rgba(0,0,0,0.12)`
 *                          実装 `0 4px 12px oklch(0 0 0 / 0.08), 0 2px 4px oklch(0 0 0 / 0.12)`
 *   `--wim-easing-standard` 文書 `cubic-bezier(0.55, 0, 0.1, 1)`（曲線そのものが違う）
 *                          実装 `cubic-bezier(0.4, 0, 0.2, 1)`
 *   `--wim-color-overlay`   文書 `rgba(0,0,0, 0.5)`
 *                          実装 `oklch(from var(--wim-color-surface-void) l c h / 0.5)`
 *
 * **どれも読み手がそのままコピーする値**なので、名前が合っていても実害は同じ。
 *
 * 見る対象は「表のヘッダーが値の列を持つ表」だけ。ヘッダーを読むのは、同じ文書に
 * **2 列目が説明の表**（`| トークン | いつ使うか |`）が混ざっているため。素朴に
 * 2 列目を値とみなすと、そこが全部「ずれている」に化ける（実測 24 件の誤検出）。
 *
 * 比べ方（この 3 つを許す。許さないと鳴りっぱなしになる）:
 *   1. 併記     `0.0625rem (1px)` は `0.0625rem` として比べる
 *   2. 参照     `--wim-radius-md` / `var(--wim-radius-md)` は解決してから比べる
 *   3. 空白     `rgba(0, 0, 0, 0.5)` と `rgba(0,0,0,0.5)` は同じ
 *
 * Usage: node scripts/check-doc-token-values.js
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

/** `$wim-x: 値;` を `--wim-x` → 値 の表に読み替える。 */
function readTokens(file) {
  const map = new Map();
  const full = path.join(root, file);
  if (!fs.existsSync(full)) return map;
  for (const m of fs.readFileSync(full, "utf8").matchAll(/^\$(wim-[a-zA-Z0-9-]+):\s*([^;]+);/gm)) {
    map.set(`--${m[1]}`, m[2].trim());
  }
  return map;
}

const light = readTokens("src/tokens/generated/_tokens.scss");
const dark = readTokens("src/tokens/generated/_tokens-dark.scss");

// 自己検証: 走査が壊れると「全部ずれている」に化ける。先に既知の値で確かめる。
if (light.get("--wim-spacing-md") !== "0.5rem" || light.size < 100) {
  console.error("走査が成立していない（`npm run tokens:build` を先に）。");
  process.exit(1);
}

/**
 * 参照を 1 段ずつ解決する（`var(--x)` / 素の `--x`）。循環は 3 段で打ち切る。
 *
 * ダーク列の解決は**ライトへ落ちる** ── `_tokens-dark.scss` は上書きだけを持つので、
 * `--wim-shadow-md` のように上書きの無い名前はダーク表に存在しない。
 * 落とさないと「参照が解決できない」だけの理由で赤くなる。
 */
function resolve(value, table) {
  let current = value;
  for (let i = 0; i < 3; i += 1) {
    const m = current.match(/^var\((--wim-[a-zA-Z0-9-]+)\)$|^(--wim-[a-zA-Z0-9-]+)$/);
    if (!m) break;
    const name = m[1] ?? m[2];
    const next = table.get(name) ?? light.get(name);
    if (next === undefined) break;
    current = next.trim();
  }
  return current;
}

/** 値として比べられる形か（#hex / 数値+単位 / 関数 / 参照）。 */
const LITERAL = /^(#[0-9a-fA-F]{3,8}|-?[\d.]+[a-z%]*|[a-z-]+\(.*\)|var\(--wim-[a-zA-Z0-9-]+\)|--wim-[a-zA-Z0-9-]+|none|inherit|auto|transparent|underline|line-through|overline|uppercase|lowercase|capitalize|nowrap|ellipsis|hidden|visible)$/i;
const isLiteral = (v) => LITERAL.test(v.trim()) || /^(inset\s|0 |-?\d)/.test(v.trim());

/** 秒とミリ秒を同じ土俵に乗せる（`83ms` と `0.083s`）。 */
function normalizeTime(v) {
  const ms = v.match(/^(-?[\d.]+)ms$/);
  if (ms) return `${Number(ms[1]) / 1000}s`;
  const s = v.match(/^(-?[\d.]+)s$/);
  if (s) return `${Number(s[1])}s`;
  return v;
}

/**
 * 文書のセルから「比べられる値」を取り出す。取り出せなければ `null`（＝対象外）。
 *
 * 文書には 3 つの書き方が混ざっている:
 *   1. 値そのもの          `0.5rem` / `#fff` / `cubic-bezier(0.4, 0, 0.2, 1)`
 *   2. 値 + 併記           `0.0625rem (1px)` / `` `gy3-5` (#393939) ``（PCCS 記号が先）
 *   3. 別トークンへの参照    `= primary` / `= text-tertiary` / `overlay-soft`
 *   4. 説明                `primary 8%` / `独自の深い影`
 *
 * **3 は 2026-09-20（T262ⓑ）から比べている。** 同じ族（`--wim-color-` 等）にその名前の
 * トークンが実在すれば `var(--wim-<族>-<名前>)` と読み替える。広げた初日に**実在の 1 件**を
 * 拾った ── `--wim-color-text-accent` の説明が `= primary` のままだったが、実装は T45 で
 * `dp16`（#04436e）へ移っている（primary をそのまま使うと subtle 塗りの上で 4.38 と AA を割るため）。
 * **文書だけが T45 以前の状態で残っていた。**
 *
 * **4 のうちアルファ派生は 2026-09-20（T262ⓒ）から比べている。** `primary 8%` は
 * `oklch(from var(--wim-color-primary) l c h / 0.08)` の人間向けの書き方で、
 * **式が 1 つに決まる**（この repo のアルファ派生はすべてこの形）。残る死角は
 * `独自の深い影` のような自然文だけで、そこは原理的に値として比べられない。
 */
function docValueOf(cell, name, table) {
  const raw = cell.replace(/`/g, "").trim();

  // **別トークンへの参照**（`= primary` / `overlay-soft`）。行のトークンと同じ族の中に
  // その名前が実在するときだけ読み替える。族を跨がせない（`--wim-color-` の行で
  // `--wim-spacing-md` を指す書き方は実際に無く、広げると誤検出の面が増える）。
  const reference = raw.match(/^=?\s*([a-z][a-z0-9-]*)$/i);
  if (reference) {
    const family = name.match(/^(--wim-[a-z]+)-/);
    if (family) {
      const target = `${family[1]}-${reference[1]}`;
      if (table.has(target)) return `var(${target})`;
    }
  }
  // **アルファ派生**（`primary 8%` / `surface 60%`）。この repo の派生は
  // `oklch(from var(--wim-color-<名前>) l c h / <比率>)` の 1 形しか無いので、
  // 文書の書き方から式を組み立てて比べられる。`8%` → `0.08`、`60%` → `0.6`
  // （`0.60` にすると文字列比較で外れる。数値に通してから文字列へ戻す）。
  const alpha = raw.match(/^([a-z][a-z0-9-]*)\s+([\d.]+)%$/i);
  if (alpha) {
    const family = name.match(/^(--wim-[a-z]+)-/);
    const target = family ? `${family[1]}-${alpha[1]}` : null;
    if (target && table.has(target)) {
      return `oklch(from var(${target}) l c h / ${Number(alpha[2]) / 100})`;
    }
  }

  // 併記は**括弧の前に空白がある**形だけを見る。空白を要求しないと
  // `rgba(255,255,255, 0.4)` や 2 層の `box-shadow` を「値 + 併記」と読み違え、
  // 関数名だけを値として比べてしまう（最初の版がこれで 9 件を誤検出した）。
  const annotation = raw.match(/^(.*\S)\s+\(([^()]*)\)$/);
  if (annotation) {
    const [, outside, inside] = annotation;
    if (isLiteral(outside)) return outside.trim();
    if (isLiteral(inside)) return inside.trim();
    return null;
  }
  return isLiteral(raw) ? raw : null;
}

/** 比較用に整える。 */
function normalize(value, table) {
  const v = resolve(value.replace(/`/g, "").trim(), table);
  return normalizeTime(v.replace(/\s+/g, " ").replace(/\s*,\s*/g, ",").trim());
}

/** 値の列かどうかをヘッダー文字列から決める。戻り値は比較先のテーブル。 */
function columnTable(header) {
  const h = header.replace(/`/g, "").trim();
  if (/^(値|Value)$/.test(h)) return light;
  if (/^(ライト|Light)$/.test(h)) return light;
  if (/^(ダーク|Dark)$/.test(h)) return dark;
  return null;
}

const files = ["DESIGN.md", ...(fs.existsSync(path.join(root, "docs/design"))
  ? fs.readdirSync(path.join(root, "docs/design")).filter((f) => f.endsWith(".md")).map((f) => `docs/design/${f}`)
  : [])];

const cells = (line) => line.split("|").slice(1, -1).map((c) => c.trim());

const bad = [];
let checked = 0;
let skippedTables = 0;
let prose = 0;
const proseCells = [];

for (const rel of files) {
  const full = path.join(root, rel);
  if (!fs.existsSync(full)) continue;
  const lines = fs.readFileSync(full, "utf8").split("\n");

  /** いま読んでいる表のヘッダー（`null` なら表の外）。 */
  let head = null;
  lines.forEach((line, i) => {
    if (!line.trim().startsWith("|")) {
      head = null;
      return;
    }
    if (/^\|[\s:-]+\|/.test(line)) return; // 区切り行
    const row = cells(line);
    if (head === null) {
      const tokenCol = row.findIndex((c) => /^(トークン|Token|変数)$/.test(c.replace(/`/g, "").trim()));
      const valueCols = row.map((c, idx) => ({ idx, table: columnTable(c) })).filter((c) => c.table !== null);
      if (tokenCol === -1 || valueCols.length === 0) {
        head = { skip: true };
        if (tokenCol !== -1) skippedTables += 1;
        return;
      }
      head = { tokenCol, valueCols, skip: false };
      return;
    }
    if (head.skip) return;

    const name = (row[head.tokenCol] ?? "").replace(/`/g, "").trim();
    if (!/^--wim-[a-zA-Z0-9-]+$/.test(name)) return;

    for (const { idx, table } of head.valueCols) {
      const cell = row[idx];
      if (cell === undefined || cell === "" || cell === "-") continue;
      // ダークに上書きが無いトークンは、ダークでもライトの値がそのまま効く。
      // 飛ばさずライトと比べる（飛ばすと、その行は永久に検査されない）。
      const impl = table.get(name) ?? (table === dark ? light.get(name) : undefined);
      if (impl === undefined) continue; // 上書きの無いダーク値・未知の名前は対象外
      const docValue = docValueOf(cell, name, table);
      if (docValue === null) {
        // 残る死角は**自然文だけ**（T262ⓒ のあと 1 件）。件数だけ出すと誰も中身を見ないので、
        // **どのトークンのどのセルか**を必ず名前で出す。新しい散文セルが増えたらここに現れる。
        prose += 1;
        proseCells.push(`${name}  <${cell.replace(/`/g, "").trim()}>  ${rel}`);
        continue;
      }
      checked += 1;
      if (normalize(impl, table) !== normalize(docValue, table)) {
        bad.push({ rel, line: i + 1, name, docValue: cell, impl });
      }
    }
  });
}

if (bad.length) {
  console.error(`✗ ${bad.length} 件、設計文書のトークンの値が実装とずれている:`);
  for (const b of bad) {
    console.error(`  - ${b.name}  <-  ${b.rel}:${b.line}`);
    console.error(`      文書: ${b.docValue}`);
    console.error(`      実装: ${b.impl}`);
  }
  console.error("\n実装の値に直すこと（表の値は読み手がそのままコピーする）。");
  console.error("併記（`0.5rem (8px)`）と参照（`--wim-radius-md`）は許されるので、そのままでよい。");
  process.exit(1);
}

console.log(
  `✓ 設計文書のトークンの値は実装と一致（${checked} セルを照合 / 説明文のセル ${prose} 件と、値の列を持たない表 ${skippedTables} 個は対象外）。`,
);

// 死角の中身を必ず出す。T262 の前は 11 件あり、**中身を見るまで N の意味が分からなかった**
// （実際、11 件のうち 2 件は「説明」ではなく値そのもので、語彙が足りないだけだった）。
if (proseCells.length > 0) {
  console.log("  値として比べていないセル（自然文。人が読むしかない）:");
  for (const p of proseCells) console.log(`    ${p}`);
}
