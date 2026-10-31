#!/usr/bin/env node
/**
 * prove:doc-token-usage — `check:doc-token-usage` を故意に壊して実証する。
 *
 * AGENTS.md の約束「未実証のガード、および『0 件』という結果は信用しない」。
 * 行単位で拾うガードなので、「鳴る」だけでなく「鳴ってはいけないところで鳴らない」も見る。
 *
 *   1. 揃っているときは鳴らない
 *   2. 文書に、部品が使っていないトークンを書いたら鳴る（設計文書）
 *   3. 部品が実際に使っているトークンを書いても鳴らない
 *   4. 翻訳の文書（`public/locales/en/docs_*.json`）に書いても鳴る
 *   5. README に書いても鳴る
 *   6. `docs/history/` に書いても鳴らない（履歴は当時の記述のまま）
 *   7. **実装の側が変わっても鳴る**: 文書が正しく書いている組（tokens.md の Card と
 *      `--wim-radius-container`）で、部品からトークンを外したら鳴る
 *   8. 一覧にある組が出なくなったら鳴る（一覧を現実に合わせさせる）
 *   9. 文書が CRLF でも、揃っていれば鳴らない（Windows の作業ツリー）
 *  10. 後始末で元どおり・緑
 *
 * Usage: npm run prove:doc-token-usage
 */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const abs = (rel) => path.join(ROOT, rel);
const FILES = [
  "docs/design/typography.md",
  "docs/rules/tokens.md",
  "README.md",
  "public/locales/en/docs_guide_sizes.json",
  "src/components/data-display/Card/card.module.scss",
];
const HISTORY = "docs/history/__prove_doc_token_usage__.md";

const backup = Object.fromEntries(FILES.map((f) => [f, fs.readFileSync(abs(f), "utf8")]));
const restore = () => {
  for (const f of FILES) fs.writeFileSync(abs(f), backup[f], "utf8");
  if (fs.existsSync(abs(HISTORY))) fs.unlinkSync(abs(HISTORY));
};
/** 1 か所だけ置き換える。置き換わらなければ実証にならないので落とす。 */
const patch = (rel, from, to) => {
  const before = fs.readFileSync(abs(rel), "utf8");
  if (!before.includes(from)) throw new Error(`実証用の置換対象が無い: ${rel} / ${from}`);
  fs.writeFileSync(abs(rel), before.replace(from, to), "utf8");
};
const append = (rel, text) => fs.appendFileSync(abs(rel), text, "utf8");

const run = () => {
  try {
    execFileSync("node", ["scripts/check-doc-token-usage.js"], { cwd: ROOT, encoding: "utf8" });
    return 0;
  } catch (e) {
    return e.status ?? 1;
  }
};

const results = [];
const check = (name, ok) => {
  results.push(ok);
  console.log(`${ok ? "OK " : "NG "} ${name}`);
};

try {
  check("1. 揃っているときは鳴らない", run() === 0);

  restore();
  append("docs/design/typography.md", "\n| `--wim-shadow-lg` | Badge の浮き |\n");
  check("2. 部品が使っていないトークンを書いたら鳴る（設計文書）", run() !== 0);

  restore();
  append("docs/design/typography.md", "\n| `--wim-radius-container` | Card の外枠 |\n");
  check("3. 部品が実際に使っているトークンなら鳴らない", run() === 0);

  restore();
  patch(
    "public/locales/en/docs_guide_sizes.json",
    '"tap_3_desc": "',
    '"tap_3_desc": "Badge uses `--wim-shadow-lg`. ',
  );
  check("4. 翻訳の文書に書いても鳴る", run() !== 0);

  restore();
  append("README.md", "\nBadge uses `--wim-shadow-lg`.\n");
  check("5. README に書いても鳴る", run() !== 0);

  restore();
  fs.writeFileSync(abs(HISTORY), "Badge uses `--wim-shadow-lg`.\n", "utf8");
  check("6. docs/history/ に書いても鳴らない", run() === 0);

  restore();
  patch("src/components/data-display/Card/card.module.scss", "var(--wim-radius-container)", "var(--wim-radius-component)");
  // card.module.scss には `--wim-radius-container` が複数あるので、全部外す
  {
    const p = abs("src/components/data-display/Card/card.module.scss");
    fs.writeFileSync(p, fs.readFileSync(p, "utf8").split("--wim-radius-container").join("--wim-radius-component"), "utf8");
  }
  check("7. 実装の側でトークンを外しても鳴る（tokens.md の Card）", run() !== 0);

  restore();
  // 一覧にある組（README の Code × --wim-font-family-mono）を消す
  patch("README.md", "| `--wim-font-family-mono` |", "| `font-family-mono` |");
  check("8. 一覧にある組が出なくなったら鳴る", run() !== 0);

  restore();
  for (const f of ["docs/design/typography.md", "docs/rules/tokens.md", "README.md"]) {
    fs.writeFileSync(abs(f), backup[f].replace(/\r?\n/g, "\r\n"), "utf8");
  }
  check("9. 文書が CRLF でも、揃っていれば鳴らない", run() === 0);
} finally {
  restore();
}

check(
  "10. 後始末で元どおり・緑",
  FILES.every((f) => fs.readFileSync(abs(f), "utf8") === backup[f]) && !fs.existsSync(abs(HISTORY)) && run() === 0,
);

process.exit(results.every(Boolean) ? 0 : 1);
