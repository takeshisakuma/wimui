#!/usr/bin/env node
/**
 * prove:vrt-update-scope — `scripts/vrt-update-scope.js` の判定を、実際の変更の形で確かめる。
 *
 * 見ているのは 2 つ:
 *   - **all に倒すべき変更で all になるか**（倒し損ねると、閾値未満の変更が古いベースラインに残る ── T45）
 *   - **scoped のとき、owned が「その部品のストーリー」だけになるか**（広すぎれば揺れを書き換え、
 *     狭すぎれば PR の変更がベースラインに入らない）
 *
 * 索引は合成したもの（`storybook-static` に依存しない。ビルドが古くても結果が変わらない）。
 * CLI の経路（--files / --force-all / --ids-out）も 1 通りずつ通す。
 *
 * Usage: npm run prove:vrt-update-scope
 */
import fs from "fs";
import os from "os";
import path from "path";
import { execFileSync } from "node:child_process";
import { decideScope } from "./vrt-update-scope.js";

const story = (id, importPath) => ({ id, type: "story", importPath });
const ENTRIES = [
  story("components-alerts-notifications-snackbar--default", "./stories/feedback/Snackbar/Snackbar.stories.tsx"),
  story("components-alerts-notifications-snackbar--success", "./stories/feedback/Snackbar/Snackbar.stories.tsx"),
  story("components-overlays-tooltip--default", "./stories/overlay/Tooltip/Tooltip.stories.tsx"),
  story("components-data-structures-treeview--default", "./stories/data-display/TreeView/TreeView.stories.tsx"),
  story("components-advanced-inputs-treeselect--open", "./stories/form/TreeSelect/TreeSelect.stories.tsx"),
  story("patterns-hiring--default", "./stories/Patterns/Hiring/Hiring.stories.tsx"),
  story("patterns-hiring--review", "./stories/Patterns/Hiring/Review.stories.tsx"),
  story("token-density--comfortable", "./stories/Token/Density.stories.tsx"),
  { id: "components-overlays-tooltip--docs", type: "docs", importPath: "./stories/overlay/Tooltip/Tooltip.mdx" },
];

let failed = 0;
const check = (name, ok, detail) => {
  console.log(`${ok ? "ok  " : "NG  "} ${name}`);
  if (!ok) {
    failed += 1;
    console.log(`      ${detail}`);
  }
};
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// ── all に倒す変更 ──────────────────────────────────────────────
const GLOBAL_CASES = [
  ["トークン", ["tokens/color/semantic.json"]],
  ["生成済みのトークン", ["src/tokens/generated/_css-vars.scss"]],
  ["共通のスタイル（部品の変更と一緒でも）", ["src/components/feedback/Snackbar/snackbar.module.scss", "src/styles/_component-colors.scss"]],
  ["ベースのスタイル", ["src/base.scss"]],
  ["Storybook の設定", [".storybook/preview.ts"]],
  ["VRT のスペック", ["vrt/vrt.spec.ts"]],
  ["描画待ちのヘルパー", ["vrt/story-ready.ts"]],
  ["除外リスト", ["vrt/nondeterministic-stories.js"]],
  ["Playwright の設定", ["playwright.config.ts"]],
  ["lockfile", ["package-lock.json"]],
  ["VRT のワークフロー", [".github/workflows/vrt.yml"]],
  ["範囲の決め方そのもの", ["scripts/vrt-update-scope.js"]],
  ["Windows の区切り文字", ["src\\styles\\_focus-mixins.scss"]],
];
for (const [name, files] of GLOBAL_CASES) {
  const r = decideScope(files, ENTRIES);
  check(`all      ${name}`, r.mode === "all" && r.ids.length === 0, JSON.stringify(r));
}

// ── scoped: owned の中身 ────────────────────────────────────────
const SCOPED_CASES = [
  ["部品の SCSS → その部品のストーリーだけ", ["src/components/feedback/Snackbar/snackbar.module.scss"], ["components-alerts-notifications-snackbar--default", "components-alerts-notifications-snackbar--success"]],
  ["部品の TSX とテスト", ["src/components/overlay/Tooltip/Tooltip.tsx", "src/components/overlay/Tooltip/Tooltip.test.tsx"], ["components-overlays-tooltip--default"]],
  ["ストーリーだけの変更 → そのディレクトリ", ["stories/form/TreeSelect/TreeSelect.stories.tsx"], ["components-advanced-inputs-treeselect--open"]],
  ["Patterns のディレクトリ → 同じディレクトリの全ファイル", ["stories/Patterns/Hiring/Hiring.stories.tsx"], ["patterns-hiring--default", "patterns-hiring--review"]],
  ["2 つの部品", ["src/components/data-display/TreeView/TreeView.tsx", "src/components/form/TreeSelect/TreeSelect.tsx"], ["components-advanced-inputs-treeselect--open", "components-data-structures-treeview--default"]],
  ["[owned なし] docs と台帳だけ", ["docs/rules/css.md", "IMPROVEMENTS.md", ".changeset/x.md"], []],
  ["[owned なし] 共有コード（_internal）", ["src/components/_internal/OverlayBase.tsx"], []],
  ["[owned なし] 翻訳と検査スクリプト", ["public/locales/en/form.json", "scripts/check-src-hardcoded.js"], []],
  ["[owned なし] 変更なし（空の一覧）", [""], []],
  ["[owned なし] ストーリーを持たない部品", ["src/components/layout/Portal/Portal.tsx"], []],
  ["[owned なし] stories 直下の共有ファイル", ["stories/playOpen.ts"], []],
];
for (const [name, files, ids] of SCOPED_CASES) {
  const r = decideScope(files, ENTRIES);
  check(`scoped   ${name}`, r.mode === "scoped" && same(r.ids, [...ids].sort()), JSON.stringify(r));
}
// docs の entry（type: "docs"）は数えない
{
  const r = decideScope(["stories/overlay/Tooltip/Tooltip.mdx"], ENTRIES);
  check("scoped   MDX の変更でも docs の entry は入れず、同じディレクトリのストーリーを持つ", same(r.ids, ["components-overlays-tooltip--default"]), JSON.stringify(r));
}

// ── CLI の経路 ─────────────────────────────────────────────────
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "prove-vrt-scope-"));
const cli = (args) => {
  try {
    return { code: 0, out: execFileSync("node", ["scripts/vrt-update-scope.js", ...args], { encoding: "utf8" }) };
  } catch (e) {
    return { code: e.status ?? 1, out: (e.stdout ?? "") + (e.stderr ?? "") };
  }
};
try {
  const indexPath = path.join(tmp, "index.json");
  fs.writeFileSync(indexPath, JSON.stringify({ entries: Object.fromEntries(ENTRIES.map((e) => [e.id, e])) }));
  const filesPath = path.join(tmp, "files.txt");
  const idsPath = path.join(tmp, "ids.txt");

  fs.writeFileSync(filesPath, "src/components/feedback/Snackbar/Snackbar.tsx\r\n.changeset/x.md\r\n");
  let r = cli(["--files", filesPath, "--index", indexPath, "--ids-out", idsPath]);
  let json = r.code === 0 ? JSON.parse(r.out) : {};
  check("CLI      --files（CRLF の一覧）→ scoped・ids 2・ファイルに 2 行", json.mode === "scoped" && json.ids === 2 && fs.readFileSync(idsPath, "utf8").trim().split("\n").length === 2, r.out);

  fs.writeFileSync(filesPath, "docs/rules/css.md\n");
  r = cli(["--files", filesPath, "--index", indexPath, "--ids-out", idsPath]);
  json = r.code === 0 ? JSON.parse(r.out) : {};
  check("CLI      owned なし → scoped・ids 0・空のファイル", json.mode === "scoped" && json.ids === 0 && fs.readFileSync(idsPath, "utf8") === "", r.out);

  r = cli(["--force-all", "一覧が取れなかった", "--ids-out", idsPath]);
  json = r.code === 0 ? JSON.parse(r.out) : {};
  check("CLI      --force-all → all・理由がそのまま出る", json.mode === "all" && json.reason === "一覧が取れなかった", r.out);

  r = cli(["--index", indexPath]);
  check("CLI      --files が無ければ落ちる（黙って scoped にしない）", r.code === 1, r.out);

  fs.writeFileSync(filesPath, "docs/rules/css.md\n");
  r = cli(["--files", filesPath, "--index", path.join(tmp, "no-such-index.json")]);
  check("CLI      索引が無ければ落ちる", r.code === 1, r.out);
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}

if (failed > 0) {
  console.log(`\n✗ ${failed} 件が期待と違いました。`);
  process.exit(1);
}
console.log("\n✓ すべての経路で期待どおりでした。");
