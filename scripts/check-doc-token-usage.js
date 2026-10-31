#!/usr/bin/env node
/**
 * check:doc-token-usage — 文書が「このトークンはこの部品で使う」と書いているのに、
 * その部品が使っていない箇所を、増やさない（ラチェット）。
 *
 * 2026-10-31。#1047 で Title が段ごとの行高を持つようになったあと、
 * `docs/design/typography.md` の行高の表は「`tight` は Title `xl`〜」のまま残った。
 * `check:doc-drift` が見るのは prop 名、`check:doc-token-values` が見るのはトークンの値で、
 * **トークンの用途**（どの部品が使うか）はどの検査も見ていなかった。同じ日に全文書を
 * 突き合わせたら、ほかに 10 件ずれていた（Table の角丸・Terminal の影・Rating の星の大きさなど。#1061）。
 *
 * 数え方: 文書の 1 行に `--wim-*` と部品名（`src/components/<category>/<Name>/` の名前）が
 * 一緒に出たら、その部品の `.scss` / `.tsx` がそのトークンを含むかを見る。含まなければ候補。
 *
 * **行単位なので、正しい文も候補に出る。** 「Title は使わない」と書いた否定の行、
 * 1 行に複数のトークンが並ぶ行、別名（`--wim-radius-component` → `--wim-radius-md`）を
 * 経由する行。これは読まないと分けられないので、読み終えた候補を
 * `doc-token-usage-baseline.json` に凍結し、
 *   - 一覧に無い候補が出たら失敗（**新しいずれか、新しく書いた行を読む**）
 *   - 一覧にあるのに出なくなったら失敗（**一覧から外す**。片方向だと一覧が現実から離れる）
 * の 2 方向で締める。読んで正しい文だったら `--update` で一覧へ入れる。
 *
 * 鍵は「ファイル | トークン | 部品」。行番号は入れない（上に行を足すたびに鳴るため）。
 * 同じ鍵の 2 行目は数えない ── 既に一覧にある組を別の行で書き足しても鳴らない。
 *
 * 入口は `audit:docs`（ローカルの全量と CI の Lint ジョブ）。**lint-staged には入れない** ──
 * 文書と部品の両側を突き合わせるので、ステージした一部だけを見ると、部品の側の変更で
 * 生じたずれ（実証の 7）を素通りする。Version PR（`changeset version`）が書き換える
 * CHANGELOG.md と `public/llms*.txt` は走査の対象外なので、版が上がっても鳴らない。
 *
 * Usage:
 *   node scripts/check-doc-token-usage.js           # 検査
 *   node scripts/check-doc-token-usage.js --update  # 今の候補で一覧を作り直す（読み終えてから）
 * 実証: npm run prove:doc-token-usage
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const BASELINE = path.join(__dirname, "doc-token-usage-baseline.json");

const walk = (dir, out = []) => {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === "history" || e.name === "node_modules") continue;
      walk(p, out);
    } else out.push(p);
  }
  return out;
};
const rel = (p) => path.relative(ROOT, p).split(path.sep).join("/");

/** 部品名 → その部品のディレクトリの .scss / .tsx（テストを除く）をつないだ文字列 */
function loadComponents() {
  const comps = {};
  for (const f of walk(path.join(ROOT, "src/components"))) {
    if (!/\.(scss|tsx)$/.test(f) || /\.test\./.test(f)) continue;
    const parts = rel(f).split("/"); // src/components/<category>/<Name>/...
    const name = parts[3];
    if (!name || parts.length < 5 || !/^[A-Z]/.test(name)) continue;
    comps[name] = (comps[name] || "") + fs.readFileSync(f, "utf8");
  }
  return comps;
}

function docFiles() {
  const docs = walk(path.join(ROOT, "docs")).filter((f) => /\.(md|mdx)$/.test(f));
  for (const f of ["DESIGN.md", "README.md"]) if (fs.existsSync(path.join(ROOT, f))) docs.push(path.join(ROOT, f));
  const locales = walk(path.join(ROOT, "public/locales/en")).filter((f) => /[\\/]docs_[^\\/]*\.json$/.test(f));
  return [...docs, ...locales];
}

/** 候補の鍵（ファイル | トークン | 部品）と、最初に出た行 */
export function findCandidates(comps = loadComponents(), files = docFiles()) {
  const found = new Map();
  for (const file of files) {
    const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
    lines.forEach((line, i) => {
      const tokens = [...new Set([...line.matchAll(/--wim-[a-z0-9-]*[a-z0-9]/g)].map((m) => m[0]))];
      if (!tokens.length) return;
      const names = [...new Set([...line.matchAll(/\b([A-Z][a-zA-Z]+)\b/g)].map((m) => m[1]))].filter((n) => comps[n]);
      for (const t of tokens) for (const n of names) {
        if (comps[n].includes(t)) continue;
        const key = `${rel(file)} | ${t} | ${n}`;
        if (!found.has(key)) found.set(key, { line: i + 1, text: line.trim().slice(0, 140) });
      }
    });
  }
  return found;
}

function main() {
  const found = findCandidates();
  if (process.argv.includes("--update")) {
    const data = {
      comment:
        "文書の 1 行にトークンと部品名が一緒に出るのに、その部品が使っていない組のうち、読んで正しい文だと確かめたもの（否定の行・複数トークンの行・別名経由の行）。scripts/check-doc-token-usage.js が、ここに無い組が出るか、ここにある組が出なくなったら落とす。--update で作り直すのは、新しい候補を全部読んでから。",
      known: [...found.keys()].sort(),
    };
    fs.writeFileSync(BASELINE, JSON.stringify(data, null, 2) + "\n");
    console.log(`doc-token-usage-baseline.json を ${data.known.length} 件で書き直した。`);
    return;
  }
  const known = new Set(JSON.parse(fs.readFileSync(BASELINE, "utf8")).known);
  const added = [...found.keys()].filter((k) => !known.has(k));
  const gone = [...known].filter((k) => !found.has(k));
  if (!added.length && !gone.length) {
    console.log(`✓ doc-token-usage OK（候補 ${found.size} 件はどれも読み終えた一覧にある）。`);
    return;
  }
  if (added.length) {
    console.log(`\n[FAIL] 文書が部品とトークンを結びつけているのに、その部品が使っていない（新しい組 ${added.length} 件）:`);
    for (const k of added) {
      const { line, text } = found.get(k);
      const [file, token, comp] = k.split(" | ");
      console.log(`  ${file}:${line}  ${token} × ${comp}\n      ${text}`);
    }
    console.log(
      "\n  文書が古いなら文書を直す。実装が誤りなら実装を直す。\n" +
        "  読んで正しい文だったら（「○○は使わない」の否定・別名のトークン経由など）、\n" +
        "  `node scripts/check-doc-token-usage.js --update` で一覧に入れる。",
    );
  }
  if (gone.length) {
    console.log(`\n[FAIL] 一覧にあるのに、もう候補に出ない組 ${gone.length} 件（文書か実装が変わった。一覧から外す）:`);
    for (const k of gone) console.log(`  ${k}`);
    console.log("\n  `node scripts/check-doc-token-usage.js --update` で一覧を作り直す。");
  }
  process.exit(1);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
