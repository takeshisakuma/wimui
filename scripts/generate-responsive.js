#!/usr/bin/env node
/**
 * Registry（docs/componentList.mdx）の「幅の基準」列の元データを、実装から作る。
 *
 *   node scripts/generate-responsive.js          # src/data/component-responsive.json を書く
 *   node scripts/generate-responsive.js --check  # コミット済みの JSON が実装とずれていたら落ちる
 *
 * 部品ごとに、幅で形が変わる仕組みを次の 3 種で数える（複数持つ部品もある）。
 *   media      ビューポート幅で切り替わる（`up()` / `down()` / `@media (width ...)`）
 *   container  部品が置かれた器の幅で切り替わる（`container-up()` / `container-down()` / `@container`）
 *   js         部品自身の幅を JS で測って形を変える（下の JS_LAYOUT と、OverflowList を使う部品）
 *
 * components.json に手で書かないのは、SCSS を直したときに必ずずれるため（写しは腐る）。
 *
 * `ResizeObserver` は位置合わせやスクロールの検出にも使われるので、見つけただけでは
 * 「幅で形が変わる」とは言えない。`new ResizeObserver` を持つ部品は、JS_LAYOUT か
 * JS_OTHER のどちらかに理由付きで載っていなければ落ちる（新しい部品を足したとき、
 * どちらなのかを決めさせるため）。載っているのにもう使っていない行も落ちる。
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const COMPONENTS_DIR = path.join(root, "src", "components");
const REGISTRY = path.join(root, "src", "data", "components.json");
const OUTPUT = path.join(root, "src", "data", "component-responsive.json");

const checkMode = process.argv.includes("--check");

/** 自身の幅を測って、形（列数・表示の型・項目の出し方）を変える部品。 */
const JS_LAYOUT = {
  CodeDiffViewer: "狭い器では split から unified の表示に切り替わる",
  Gallery: "器の幅で列数を 1 / 2 / columns に変える",
  OverflowList: "入りきらない項目を「…」へ移す",
  PivotTable: "行見出しの列が器の半分を超えると固定をやめる",
};

/** `ResizeObserver` を持つが、幅で形は変わらない部品。 */
const JS_OTHER = {
  Anchor: "マーカーの位置合わせ",
  Barcode: "はみ出したときだけスクロール領域をタブ位置にする",
  ScheduleView: "はみ出した領域をタブ位置にする",
  ScrollProgress: "スクロール量の再計算",
  Spoiler: "中身の高さを測って畳むかを決める",
  Transfer: "本体の高さの追跡",
  VoiceVisualizer: "描画の大きさを器に合わせる",
};

/** 台帳に載っているが、src/components に実装を持たない項目（docs 専用・カテゴリの総称）。 */
const NO_SOURCE_CATEGORIES = new Set(["docs-only"]);
const NO_SOURCE = new Set(["Charts"]);

const KINDS = ["media", "container", "js"];

function stripScssComments(text) {
  return text.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/[^\n]*/g, "");
}

function stripTsComments(text) {
  return text
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/(^|[^:"'`])\/\/[^\n]*/g, "$1");
}

const MEDIA_RE = [
  /@include\s+(?:[\w-]+\.)?(?:up|down)\(/,
  /@media[^{;]*\(\s*(?:min-|max-)?width\b/,
];
const CONTAINER_RE = [
  /@include\s+(?:[\w-]+\.)?container-(?:up|down)\(/,
  /@container[^{;]*\(/,
];

function listFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(full));
    else out.push(full);
  }
  return out;
}

function isSourceFile(file) {
  if (/\.(test|stories|spec)\.[jt]sx?$/.test(file) || file.endsWith(".d.ts"))
    return false;
  return /\.(scss|tsx?)$/.test(file);
}

/** 部品の実体のディレクトリ（名前どおりの dir）か、単体のファイルとその SCSS を返す。 */
function buildResolver() {
  const dirs = new Map();
  const files = new Map();
  for (const category of fs.readdirSync(COMPONENTS_DIR, {
    withFileTypes: true,
  })) {
    if (!category.isDirectory()) continue;
    const categoryDir = path.join(COMPONENTS_DIR, category.name);
    for (const entry of fs.readdirSync(categoryDir, { withFileTypes: true })) {
      if (entry.isDirectory())
        dirs.set(entry.name, path.join(categoryDir, entry.name));
    }
    for (const file of listFiles(categoryDir)) {
      const m = /([A-Za-z0-9]+)\.tsx$/.exec(path.basename(file));
      if (m && isSourceFile(file) && !files.has(m[1])) files.set(m[1], file);
    }
  }
  return (name) => {
    if (dirs.has(name)) return listFiles(dirs.get(name)).filter(isSourceFile);
    const file = files.get(name);
    if (!file) return null;
    const tsx = fs.readFileSync(file, "utf8");
    const styles = [
      ...tsx.matchAll(/import\s+(?:\w+\s+from\s+)?["'](\.[^"']+\.scss)["']/g),
    ].map((m) => path.resolve(path.dirname(file), m[1]));
    return [file, ...styles.filter((s) => fs.existsSync(s))];
  };
}

function classify(name, files, problems) {
  const kinds = new Set();
  let observes = false;
  for (const file of files) {
    const raw = fs.readFileSync(file, "utf8");
    if (file.endsWith(".scss")) {
      const text = stripScssComments(raw);
      if (MEDIA_RE.some((re) => re.test(text))) kinds.add("media");
      if (CONTAINER_RE.some((re) => re.test(text))) kinds.add("container");
    } else {
      const text = stripTsComments(raw);
      if (/new\s+ResizeObserver\b/.test(text)) observes = true;
      if (/from\s+["'][^"']*\/OverflowList(?:\/OverflowList)?["']/.test(text))
        kinds.add("js");
    }
  }
  if (observes) {
    if (JS_LAYOUT[name]) kinds.add("js");
    else if (!JS_OTHER[name]) {
      problems.push(
        `${name}: new ResizeObserver を持つが、JS_LAYOUT（幅で形が変わる）と JS_OTHER（変わらない）のどちらにも載っていない`,
      );
    }
  } else if (JS_LAYOUT[name] || JS_OTHER[name]) {
    problems.push(
      `${name}: ${JS_LAYOUT[name] ? "JS_LAYOUT" : "JS_OTHER"} に載っているが new ResizeObserver を持たない`,
    );
  }
  return KINDS.filter((k) => kinds.has(k));
}

function generate() {
  const registry = JSON.parse(fs.readFileSync(REGISTRY, "utf8"));
  const resolve = buildResolver();
  const problems = [];
  const result = {};
  const seen = new Set();
  for (const category of registry) {
    for (const component of category.components) {
      seen.add(component.name);
      if (
        NO_SOURCE_CATEGORIES.has(category.id) ||
        NO_SOURCE.has(component.name)
      )
        continue;
      const files = resolve(component.name);
      if (!files) {
        problems.push(
          `${component.name}: src/components に実装が見つからない（docs 専用なら NO_SOURCE へ）`,
        );
        continue;
      }
      result[component.name] = classify(component.name, files, problems);
    }
  }
  for (const name of [
    ...Object.keys(JS_LAYOUT),
    ...Object.keys(JS_OTHER),
    ...NO_SOURCE,
  ]) {
    if (!seen.has(name))
      problems.push(
        `${name}: 台帳（components.json）に無い名前がリストに残っている`,
      );
  }
  const sorted = Object.fromEntries(
    Object.keys(result)
      .sort()
      .map((k) => [k, result[k]]),
  );
  return { data: sorted, problems };
}

const { data, problems } = generate();
if (problems.length > 0) {
  console.error("component-responsive: 分類できない部品があります");
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}

const serialized = `${JSON.stringify(data, null, 2)}\n`;
const counts = Object.fromEntries(
  KINDS.map((k) => [
    k,
    Object.values(data).filter((v) => v.includes(k)).length,
  ]),
);
const none = Object.values(data).filter((v) => v.length === 0).length;

if (checkMode) {
  // 改行の差（Windows の CRLF）で落ちないよう、文字列ではなく中身で比べる。
  const committed = fs.existsSync(OUTPUT)
    ? JSON.parse(fs.readFileSync(OUTPUT, "utf8"))
    : null;
  if (JSON.stringify(committed) !== JSON.stringify(data)) {
    console.error(
      "src/data/component-responsive.json が実装とずれています。`npm run generate:responsive` で作り直してください。",
    );
    const names = new Set([
      ...Object.keys(committed ?? {}),
      ...Object.keys(data),
    ]);
    for (const name of [...names].sort()) {
      const before = JSON.stringify(committed?.[name] ?? null);
      const after = JSON.stringify(data[name] ?? null);
      if (before !== after) console.error(`  ${name}: ${before} -> ${after}`);
    }
    process.exit(1);
  }
  console.log(
    `component-responsive: OK（media ${counts.media} / container ${counts.container} / js ${counts.js} / なし ${none}）`,
  );
} else {
  fs.writeFileSync(OUTPUT, serialized);
  console.log(
    `wrote ${path.relative(root, OUTPUT)}（media ${counts.media} / container ${counts.container} / js ${counts.js} / なし ${none}）`,
  );
}
