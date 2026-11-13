#!/usr/bin/env node
/**
 * prove:breakpoints — `check:breakpoints` が「鳴るべき経路で鳴り、鳴ってはいけない
 * 形で鳴らない」ことを実証する（AGENTS.md 委任時の約束 1）。
 *
 * 通す入口は 2 つ:
 *   - **全量**（audit:lib / CI）: 実ファイルに故意のずれを差し込み、終わったら必ず戻す。
 *   - **lint-staged**: 同じ差し込みで、変えたファイル 1 つだけを**絶対パスで**渡す
 *     （検査は引数を使わず 2 つのファイルを丸ごと比べるので、渡し方で判定が変わらないこと）。
 * リリース PR の経路は無い（package.json の version も生成物も読まない）。
 *
 * Usage: npm run prove:breakpoints
 */
import fs from "fs";
import path from "path";
import { execFileSync } from "node:child_process";

const TOKENS = path.resolve("tokens/breakpoints.json");
const HOOK = path.resolve("src/hooks/useBreakpoint.ts");

const run = (args = []) => {
  try {
    return { code: 0, out: execFileSync("node", ["scripts/check-breakpoints.js", ...args], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }) };
  } catch (e) {
    return { code: e.status ?? 1, out: (e.stdout ?? "") + (e.stderr ?? "") };
  }
};

let failed = 0;
const check = (name, ok, out) => {
  console.log(`${ok ? "ok  " : "NG  "} ${name}`);
  if (!ok) {
    failed++;
    console.log(out.split("\n").map((l) => `     ${l}`).join("\n"));
  }
};

/** file の from を to に 1 回だけ置き換えて fn を走らせ、必ず元に戻す。 */
const withEdit = (file, from, to, fn) => {
  const original = fs.readFileSync(file, "utf8");
  if (!original.includes(from)) throw new Error(`${file} に ${JSON.stringify(from)} が無い（差し込みが当たらない）`);
  try {
    fs.writeFileSync(file, original.replace(from, to));
    fn();
  } finally {
    fs.writeFileSync(file, original);
  }
};

// 鳴ってはいけない: 今の実物
{
  const r = run();
  check("今の実物では通る（全量）", r.code === 0, r.out);
  const s = run([HOOK]);
  check("今の実物では通る（lint-staged・useBreakpoint.ts だけを渡す）", s.code === 0, s.out);
}

// 鳴る: トークンの値だけ変える
withEdit(TOKENS, '"md": { "value": "768px" }', '"md": { "value": "800px" }', () => {
  const r = run();
  check("トークンの md を 800px にすると落ちる（全量）", r.code !== 0 && /md: BREAKPOINTS は 768/.test(r.out), r.out);
  const s = run([TOKENS]);
  check("同じずれで落ちる（lint-staged・tokens/breakpoints.json だけを渡す）", s.code !== 0, s.out);
});

// 鳴る: JS の写しの値だけ変える
withEdit(HOOK, "sm: 576,", "sm: 575,", () => {
  const r = run([HOOK]);
  check("BREAKPOINTS の sm を 575 にすると落ちる（lint-staged）", r.code !== 0 && /sm: BREAKPOINTS は 575/.test(r.out), r.out);
});

// 鳴る: トークンを足したのに写しへ足していない
withEdit(TOKENS, '"xl": { "value": "1200px" }', '"xl": { "value": "1200px" },\n      "xxl": { "value": "1400px" }', () => {
  const r = run();
  check("トークンに xxl を足して写しに無いと落ちる", r.code !== 0 && /xxl: .* BREAKPOINTS に無い/.test(r.out), r.out);
});

// 鳴る: 写しの形が読めない（「0 件で緑」にならない）
withEdit(HOOK, "export const BREAKPOINTS", "export const BREAKPOINT_VALUES", () => {
  const r = run();
  check("BREAKPOINTS が見つからないと落ちる（読めなかったのに緑を返さない）", r.code !== 0 && /見つからない/.test(r.out), r.out);
});

// 鳴ってはいけない: 書き方だけ変えた（値は同じ）
withEdit(HOOK, "  xs: 480,\n", "  // 最小\n  xs:480,\n", () => {
  const r = run();
  check("コメントと空白の違いでは鳴らない", r.code === 0, r.out);
});

// 戻ったこと
{
  const r = run();
  check("差し込みを戻したあと、通る", r.code === 0, r.out);
}

if (failed > 0) {
  console.error(`\n✗ prove:breakpoints: ${failed} 件が期待どおりでない`);
  process.exit(1);
}
console.log("\n✓ prove:breakpoints: すべて期待どおり");
