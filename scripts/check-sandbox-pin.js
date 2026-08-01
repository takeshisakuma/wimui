#!/usr/bin/env node
/**
 * Guard: 「Open in StackBlitz」が install する wimui が、いま公開されている
 * バージョンと一致しているか。
 *
 * StackBlitz は T36 が数えた 4 つのホストのうち、**唯一まったく検証されていない**面。
 * `sandbox/Playground.tsx` はレシピのコードをライブプレビューと sandbox の両方へ
 * 同じファイルから配るので「乖離しない」と書いてあるが、**バージョンだけは手書き**
 * だった。実際 `^0.3.0` のまま 7 リリース分放置され、プレビューで見えているものと
 * 押した先で動くものが別のライブラリになっていた（2026-08-01 に発見）。
 *
 * 直し方は「上げ忘れを検出する」ではなく「上げる場所を無くす」＝ package.json から
 * 導出する形にした。このガードはその形が**リテラルに戻っていないこと**だけを見る。
 * 検出ではなく固定が目的なので、判定は 2 つだけ:
 *
 *   1. スキャフォールドの `wimui` がテンプレートリテラル経由で書かれていること
 *      （＝どこかに数字が直書きされていない）
 *   2. 実際に組み立てた文字列が `^<package.json の version>` になること
 *
 * 2 を素通りさせないため、**組み立て結果を必ず出力する**。読めなかった場合は
 * 「見ていないので通った」になるので落とす。
 *
 * Usage: node scripts/check-sandbox-pin.js
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const sandboxPath = path.join(root, "sandbox", "Playground.tsx");
const source = fs.readFileSync(sandboxPath, "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));

const problems = [];

// スキャフォールドの dependencies にある wimui の指定を 1 件だけ取り出す。
const pin = source.match(/^\s*wimui:\s*(.+?),\s*$/m);
if (!pin) {
  console.error(
    "✗ sandbox/Playground.tsx の StackBlitz スキャフォールドに `wimui:` の行が見つからない。\n" +
      "  読めていないガードは常に緑になるので、ここで落とす。",
  );
  process.exit(1);
}

const expression = pin[1].trim();

// 1: リテラルに戻っていないか。
const literal = expression.match(/^["']\^?~?([0-9][^"']*)["']$/);
if (literal) {
  problems.push(
    `wimui のバージョンが直書きに戻っている（\`${expression}\`）。` +
      `直書きは上げ忘れる — 実際 \`^0.3.0\` のまま 7 リリース放置された。` +
      `package.json から導出する形（\`\\\`^\${publishedVersion}\\\`\`）に戻すこと。`,
  );
}

// 2: 導出結果が公開バージョンと一致するか。テンプレートリテラルを実際に評価する
//    のではなく、期待する形と突き合わせる（スクリプトが sandbox を import すると
//    ?raw や wimui の解決が要るため）。
const derived = `^${pkg.version}`;
if (!literal && !/\$\{\s*publishedVersion\s*\}/.test(expression)) {
  problems.push(
    `wimui の指定が package.json 由来に見えない（\`${expression}\`）。` +
      `\`publishedVersion\` を経由していないと、この照合は意味を持たない。`,
  );
}

if (problems.length) {
  console.error("✗ StackBlitz スキャフォールドの wimui 指定に問題がある:");
  for (const p of problems) console.error(`  - ${p}`);
  console.error(
    "\n  ここがずれると、Playground のプレビューと「Open in StackBlitz」の先で\n" +
      "  別バージョンのライブラリが動く。押した人にはどちらが正しいか分からない。",
  );
  process.exit(1);
}

console.log(
  `✓ StackBlitz スキャフォールドは公開バージョンから導出している` +
    `（\`${expression}\` → \`${derived}\`）。`,
);
