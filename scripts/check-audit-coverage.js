#!/usr/bin/env node
/**
 * Audit の家族ページに一度も出てこないコンポーネントを、増やさないためのラチェット。
 *
 * `stories/Audit/**` は「同じ家族の部品を並べて、размер・variant・intent の
 * 一貫性を人が見る」ページである。**後から入ったコンポーネントは、誰かが
 * 思い出して足さない限り永久に載らない。** 2026-08-22 の初回計測では、
 * カタログ 223 件のうち **100 件**がどの家族ページにも出ていなかった。
 *
 * そのうち「家族ページは既にあるのに、後から入って畳み込まれていない」7 件
 * （`SplitButton` / `ProgressRing` / `Toolbar` / `Menubar` / `Spoiler` /
 * `RelativeTime` / `Countdown`）を畳み込み、**残りを baseline に凍結**した。
 * このガードは **baseline に無い名前が新しく落ちたとき**だけ落ちる。
 *
 * **見る名前は 2 つの出どころの和**（T419・2026-11-20）:
 *   ① `components.json` のカタログの名前
 *   ② package.json の exports の入口から公開している React の部品の名前
 *      （型検査器で export を辿り、関数・forwardRef・memo・`Component` を継ぐクラスを数える）
 * ① だけだった頃、カタログに 1 項目でまとめられた部品（`ChatToolCall` /
 * `ChatSystemMessage` は `ChatUI` の中）は検査の外にいて、足しても赤が出なかった。
 *
 * **判定は JSX タグ名の出現**である。したがって:
 *   - `ChatUI` / `Charts` のような**ファイル名・家族名のカタログ項目**は、
 *     タグとして書かれることが無いので永久に「未掲載」に出る（baseline 行き）
 *   - `DialogContent` は `<Dialog.Content>` とも書けるので、大文字の境目で親と部位に
 *     分けたドットの形も探す
 *   - カタログの名前とタグが違う部品（`Confirm` は `<ConfirmProvider>` と
 *     `useConfirm()` で使う）は、下の `AUDIT_TAGS` に置き換え先を書く。
 *     **baseline に入れて黙らせない**（T387 の #1210 は baseline に入れ、Audit に載らないまま緑だった）
 *
 * MAINTENANCE §7 の教訓に従い、**自己検証を先に置く** ── 走査が壊れると
 * 「全部未掲載」に、数え方が壊れると「全部載っている」に化けるので、
 * 確実に載っているもの・確実に公開しているものが拾えなければ止める。
 *
 * Usage:
 *   node scripts/check-audit-coverage.js
 *   node scripts/check-audit-coverage.js --update   # baseline を今の状態で上書き
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import ts from "typescript";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const AUDIT_DIR = path.join(root, "stories", "Audit");
const CATALOG = path.join(root, "src", "data", "components.json");
const BASELINE = path.join(__dirname, "audit-coverage-baseline.json");

/** 家族ページを持たないカテゴリ（そもそも並べて見る対象ではない）。 */
const SKIP_CATEGORIES = new Set(["docs-only", "internal"]);

/**
 * カタログの名前と、Audit に書くタグが違う部品。書くときは理由も添える。
 * `Confirm`: 部品としては置かず、`ConfirmProvider` の内側で `useConfirm()` を呼ぶ（T387）
 */
const AUDIT_TAGS = {
  Confirm: ["ConfirmProvider"],
};

function auditSource() {
  const out = [];
  const walk = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.(tsx|mdx)$/.test(e.name)) out.push(fs.readFileSync(p, "utf8"));
    }
  };
  walk(AUDIT_DIR);
  return out.join("\n");
}

const src = auditSource();
// `<` を許すのはジェネリクス付き JSX（`<DataGrid<Row> …>`）のため
const tagAppears = (name) =>
  new RegExp("<" + name.replace(/\./g, "\\.") + "[\\s/><]").test(src);
const appears = (name) => {
  for (const tag of AUDIT_TAGS[name] ?? [name]) {
    if (tagAppears(tag)) return true;
    for (let i = 1; i < tag.length; i++) {
      if (/[A-Z]/.test(tag[i]) && tagAppears(tag.slice(0, i) + "." + tag.slice(i))) return true;
    }
  }
  return false;
};

// 自己検証: 確実に載っているものが拾えないなら走査が壊れている
for (const known of ["Button", "IconButton", "Stack", "DialogContent"]) {
  if (!appears(known)) {
    console.error(`✗ 走査が成立していない: <${known}> が Audit に見つからない`);
    process.exit(1);
  }
}

/** package.json の exports の入口から、公開している React の部品の名前を集める。 */
function publicComponents() {
  const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
  const entries = [];
  for (const key of Object.keys(pkg.exports)) {
    const name = key === "." ? "index" : key.replace(/^\.\//, "");
    const file = path.join(root, "src", name + ".ts");
    if (fs.existsSync(file)) entries.push(file);
  }
  const config = ts.getParsedCommandLineOfConfigFile(path.join(root, "tsconfig.json"), {}, {
    ...ts.sys,
    onUnRecoverableConfigFileDiagnostic: () => {},
  });
  const program = ts.createProgram(entries, { ...config.options, noEmit: true });
  const checker = program.getTypeChecker();
  const names = new Set();
  for (const entry of entries) {
    const moduleSymbol = checker.getSymbolAtLocation(program.getSourceFile(entry));
    if (!moduleSymbol) continue;
    for (const sym of checker.getExportsOfModule(moduleSymbol)) {
      const name = sym.getName();
      if (!/^[A-Z]/.test(name)) continue;
      const target = sym.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(sym) : sym;
      const decl = target.valueDeclaration;
      if (!decl || !decl.getSourceFile().fileName.endsWith(".tsx")) continue;
      if (target.flags & ts.SymbolFlags.Class) {
        const bases = (decl.heritageClauses ?? []).flatMap((h) => h.types.map((t) => t.expression.getText()));
        if (bases.some((b) => /(^|\.)(Pure)?Component$/.test(b))) names.add(name);
        continue;
      }
      if (!(target.flags & (ts.SymbolFlags.Variable | ts.SymbolFlags.Function))) continue;
      const type = checker.getTypeOfSymbolAtLocation(target, decl);
      const exotic = /ExoticComponent|FC<|FunctionComponent/.test(checker.typeToString(type));
      const returnsJsx = type
        .getCallSignatures()
        .some((s) => /Element|ReactNode|ReactElement|ReactPortal/.test(checker.typeToString(s.getReturnType())));
      if (exotic || returnsJsx) names.add(name);
    }
  }
  return names;
}

const exported = publicComponents();
// 自己検証: 形の違う公開部品（forwardRef・部位・クラス・Portal を返す関数）が 1 つでも拾えないなら、数え方が壊れている
for (const known of ["Button", "DialogContent", "ErrorBoundary", "Portal"]) {
  if (!exported.has(known)) {
    console.error(`✗ 数え方が成立していない: 公開部品 ${known} が入口から拾えない`);
    process.exit(1);
  }
}

const catalog = JSON.parse(fs.readFileSync(CATALOG, "utf8"));
const names = new Set(exported);
let catalogCount = 0;
for (const cat of catalog) {
  if (SKIP_CATEGORIES.has(cat.id)) continue;
  for (const c of cat.components || []) {
    names.add(c.name);
    catalogCount++;
  }
}
const missing = [...names].filter((n) => !appears(n)).sort();

if (process.argv.includes("--update")) {
  fs.writeFileSync(
    BASELINE,
    JSON.stringify({ comment: "Audit の家族ページに出ていないコンポーネント（カタログの名前と、公開している部品の名前）。増やさないための凍結（scripts/check-audit-coverage.js）。", known: missing }, null, 2) + "\n",
  );
  console.log(`baseline を更新した（${missing.length} 件）。`);
  process.exit(0);
}

const baseline = new Set(JSON.parse(fs.readFileSync(BASELINE, "utf8")).known ?? []);
const added = missing.filter((n) => !baseline.has(n));
const fixed = [...baseline].filter((n) => !missing.includes(n));

if (fixed.length) {
  console.log(`baseline のうち ${fixed.length} 件は Audit に載った。刈り取れる（--update）:`);
  console.log("  " + fixed.sort().join(", "));
  console.log("");
}

if (added.length) {
  console.error(`✗ ${added.length} 件、Audit の家族ページに載っていないコンポーネントが増えた:`);
  for (const n of added) console.error(`  - ${n}`);
  console.error(
    "\nその家族のページ（stories/Audit/*FamilyAudit.stories.tsx）へ足すこと。" +
      "\nカタログの名前とタグが違うだけ（Provider で使うなど）なら、scripts/check-audit-coverage.js の AUDIT_TAGS に置き換え先を書く。" +
      "\nタグとして書かない項目（家族名・内側で描かれる部品）なら --update で baseline に入れる。",
  );
  process.exit(1);
}

console.log(
  `✓ Audit の掲載漏れは増えていない（カタログ ${catalogCount} 件・公開部品 ${exported.size} 件・重ねて ${names.size} 件中 未掲載 ${missing.length} 件・baseline ${baseline.size} 件）。`,
);
