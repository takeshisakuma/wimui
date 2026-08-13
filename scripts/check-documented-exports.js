/**
 * 「資料に載っている部品が、公開バレルから届くか」のガード。
 *
 * `check:api` は**変化**しか見ない ── スナップショットに最初から載っていない部品は
 * 「変わっていない」ので永久に緑になる。実際 `ArtifactsOverlay` は
 * `src/data/components.json` にも `docs/Hierarchy.mdx` にも MDX にもストーリーにも
 * ある公開部品でありながら、**どのバレルからも export されていなかった**
 * （0.22.0 の `dist/ai.d.ts` に名前が無い＝利用者は import できない）。
 * 資料は「ある」と言い、npm には無い、という状態が赤を出さずに出荷され続けていた。
 *
 * 判定は**名前ではなくファイルの到達性**で行う。`ChatUI` のように
 * 「1 ファイルが複数のシンボル（`ChatContainer` / `ChatMessage` …）を出していて
 * その名前自体は export されていない」部品があるため、シンボル名の一致では測れない。
 *
 *   ① package.json の exports から入口 `src/<name>.ts` を集める
 *   ② そこから `export … from "…"` の辺だけを再帰的にたどる（`import` は辿らない
 *      ── 内部で参照されているだけの部品を「公開」と数えないため）
 *   ③ `components.json` の各エントリ（`internal` / `docs-only` カテゴリを除く）の
 *      実装ファイルが、その到達集合に入っていること
 *   ④ 実装が `src/components/_internal/` 配下なら対象外（内部部品）
 *
 * Usage:
 *   node scripts/check-documented-exports.js
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

/** export を持たないことが設計上正しいカテゴリ。 */
const INTERNAL_CATEGORIES = new Set(["internal", "docs-only"]);

/**
 * 実装ファイルを持たない見出しエントリ。
 * ここに足すときは「なぜ実装が無いのか」を必ず書くこと。
 */
const ALLOW_NO_IMPL = new Map([
  [
    "Charts",
    "チャート群の総称（個々の実装は src/components/charts/<Name>/。単体の Charts コンポーネントは無い）",
  ],
]);

/* ── ① 入口 ── */

const pkg = JSON.parse(
  fs.readFileSync(path.join(root, "package.json"), "utf8"),
);
const entryFiles = [];
for (const value of Object.values(pkg.exports ?? {})) {
  const types = typeof value === "object" && value ? value.types : undefined;
  if (typeof types !== "string") continue;
  const m = types.match(/^\.\/dist\/(.+)\.d\.ts$/);
  if (!m) continue;
  const srcFile = path.join(root, "src", `${m[1]}.ts`);
  if (fs.existsSync(srcFile)) entryFiles.push(srcFile);
}

if (!entryFiles.length) {
  console.error(
    "❌ package.json の exports から入口ファイルを 1 つも解決できませんでした。",
  );
  process.exit(1);
}

/* ── ② re-export の辺だけを辿る ── */

const RE_EXPORT =
  /export\s+(?:\*(?:\s+as\s+\w+)?|\{[^}]*\})\s+from\s+["']([^"']+)["']/g;

/** 相対指定子を実ファイルへ解決（拡張子省略・index.ts の両対応）。 */
function resolveSpecifier(fromFile, specifier) {
  if (!specifier.startsWith(".")) return null;
  const base = path.resolve(path.dirname(fromFile), specifier);
  const candidates = [
    base,
    `${base}.ts`,
    `${base}.tsx`,
    path.join(base, "index.ts"),
    path.join(base, "index.tsx"),
  ];
  return (
    candidates.find((c) => fs.existsSync(c) && fs.statSync(c).isFile()) ?? null
  );
}

const reached = new Set();
const queue = [...entryFiles];
while (queue.length) {
  const file = queue.pop();
  if (reached.has(file)) continue;
  reached.add(file);
  const source = fs.readFileSync(file, "utf8");
  for (const match of source.matchAll(RE_EXPORT)) {
    const target = resolveSpecifier(file, match[1]);
    if (target && !reached.has(target)) queue.push(target);
  }
}

/* ── ③ components.json の実装ファイルを引く ── */

const components = JSON.parse(
  fs.readFileSync(path.join(root, "src/data/components.json"), "utf8"),
);

/** src/components 配下の `<Name>.tsx` を basename で索引する（`Calendar/RangeCalendar.tsx` のような同居も拾う）。 */
const implByName = new Map();
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (
      entry.name.endsWith(".tsx") &&
      !entry.name.endsWith(".test.tsx")
    ) {
      const name = entry.name.slice(0, -".tsx".length);
      if (!implByName.has(name)) implByName.set(name, full);
    }
  }
})(path.join(root, "src/components"));

const rel = (p) => path.relative(root, p).replace(/\\/g, "/");

const unreachable = [];
const noImpl = [];
let checked = 0;
let skippedInternal = 0;

for (const category of components) {
  if (INTERNAL_CATEGORIES.has(category.id)) continue;
  for (const component of category.components) {
    const { name } = component;
    const impl = implByName.get(name);

    if (!impl) {
      if (!ALLOW_NO_IMPL.has(name))
        noImpl.push({ name, category: category.id });
      continue;
    }
    if (rel(impl).startsWith("src/components/_internal/")) {
      skippedInternal += 1;
      continue;
    }

    checked += 1;
    if (!reached.has(impl))
      unreachable.push({ name, category: category.id, impl: rel(impl) });
  }
}

if (!unreachable.length && !noImpl.length) {
  console.log(
    `✅ documented exports: ${checked} 件すべて公開バレルから届きます（内部実装 ${skippedInternal} 件 / 見出しエントリ ${ALLOW_NO_IMPL.size} 件は対象外）。`,
  );
  process.exit(0);
}

if (unreachable.length) {
  console.error(
    `\n❌ 資料に載っているのに公開バレルから届かない部品が ${unreachable.length} 件あります。`,
  );
  console.error(
    "   利用者は import できません（dist の .d.ts に名前が出ません）。\n",
  );
  for (const u of unreachable) {
    console.error(
      `   - ${u.name}  [components.json: ${u.category}]  ${u.impl}`,
    );
  }
  console.error(
    "\n   直し方: 対応するバレル（src/<category>.ts、AI は optional peer の有無で",
  );
  console.error(
    "   src/ai-core.ts か src/ai/<name>.ts）に re-export を足し、`npm run check:api:update` を実行する。",
  );
  console.error(
    "   公開しない判断なら components.json の `internal` カテゴリへ移すこと。\n",
  );
}

if (noImpl.length) {
  console.error(
    `\n❌ components.json にあるのに実装ファイルが見つからないエントリが ${noImpl.length} 件あります。`,
  );
  console.error(
    "   リネーム/削除の取り残しか、実装を持たない見出しエントリです",
  );
  console.error("   （後者なら ALLOW_NO_IMPL に理由付きで追加）。\n");
  for (const n of noImpl) {
    console.error(`   - ${n.name}  [components.json: ${n.category}]`);
  }
  console.error("");
}

process.exit(1);
