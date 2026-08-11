#!/usr/bin/env node
/**
 * Guard: 「選択の指針（choice matrix）」の節が**同語反復で埋まっていないか**（T131）。
 *
 * 126 コンポーネントに「どれを選ぶか」の節があるのに、その多くが
 *   "When <Component> functionality with standard options is required."
 *   "When a simpler alternative like <Other> better suits the use case."
 * という**選ぶ理由が 1 つも書かれていない文**だった。節の名前は指針なのに、
 * 実際の指針は `design_intent` や `docs/SelectionSelection.mdx` の側にある。
 *
 * きっかけはユーザーの「`ToggleGroup` は即時反映の UI では？」という問いで、
 * **docs がそれに答えられなかった**こと。答えを持つ資料はあったが導線が無く、
 * 節の中身は同語反復だった。
 *
 * このガードは**増やさないこと**だけを保証する（ラチェット）。全部を書き直すのは
 * 別の作業で、迷う組から順に埋める。
 *
 * 判定: 値からコンポーネント名・定型の枠を取り除いて、**残りが決まり文句だけ**なら
 * 同語反復とみなす。名前を変えただけの文もここで捕まる。
 *
 * Usage: node scripts/check-choice-matrix.js [--list]
 */
import fs from "fs";
import path from "path";

const LOCALE_DIR = "public/locales/en";
const BASELINE = 146; // 2026-08-11 実測（self 73 + alt 73）。減らすのは歓迎、増やすのは不可。

/**
 * 中身を持たない定型。`<Component>` の部分は名前なので取り除いてから比べる。
 *
 * **正規化は文頭の `When` / `Use` も大文字始まりとして落とす**ので、ここは
 * 動詞から先の形で書く。最初は `^when …` と書いていて、既知の 146 件が
 * **1 件も鳴らなかった**（実測して初めて分かった）。
 */
const TAUTOLOGIES = [
  /^functionality\s+with\s+standard\s+options\s+is\s+required\.?$/,
  /^a\s+simpler\s+alternative\s+like\s+better\s+suits\s+the\s+use\s+case\.?$/,
];

const normalize = (value) =>
  value
    // **小文字化より先に**コンポーネント名（大文字始まりの語）を落とす。
    // 逆順にすると名前が消えず、こちらも 1 件も鳴らなかった。
    .replace(/[A-Za-z]*[A-Z][A-Za-z.]*/g, " ")
    .toLowerCase()
    .replace(/[`*_/]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

function collect() {
  const found = [];
  for (const file of fs.readdirSync(LOCALE_DIR)) {
    if (!file.endsWith(".json")) continue;
    const json = JSON.parse(fs.readFileSync(path.join(LOCALE_DIR, file), "utf8"));
    const walk = (node, trail) => {
      for (const [key, value] of Object.entries(node ?? {})) {
        if (value && typeof value === "object") {
          walk(value, `${trail}${key}.`);
          continue;
        }
        if (typeof value !== "string") continue;
        if (!/_choice_(self|alt)_when$/.test(key)) continue;
        found.push({ file, key: `${trail}${key}`, value });
      }
    };
    walk(json, "");
  }
  return found;
}

function main() {
  const entries = collect();
  if (entries.length === 0) {
    console.error("✗ choice matrix のキーが 1 件も見つからない（走査が成立していない）。");
    process.exit(1);
  }

  const empty = entries.filter((e) => {
    const normalized = normalize(e.value);
    return TAUTOLOGIES.some((re) => re.test(normalized));
  });

  console.log("--- check:choice-matrix（選択の指針が同語反復になっていないか） ---\n");
  console.log(
    `選択の指針: ${entries.length} 件中 **${empty.length} 件が同語反復**（baseline: ${BASELINE}）\n`,
  );

  if (process.argv.includes("--list")) {
    for (const e of empty) console.log(`  ${e.file} :: ${e.key}`);
    console.log("");
  }

  if (empty.length > BASELINE) {
    console.error(
      `✗ 同語反復が ${empty.length - BASELINE} 件増えている。\n` +
        "  「その機能が必要なときに使う」は指針ではない。**選ばない理由**か、\n" +
        "  **相手と分かれる一点**を書くこと（例: `docs/SelectionSelection.mdx` の\n" +
        "  「SegmentedControl vs ToggleGroup」＝押したあとに何が起きるか）。",
    );
    process.exit(1);
  }

  if (empty.length < BASELINE) {
    console.log(
      `✓ ${BASELINE - empty.length} 件減っている。scripts/check-choice-matrix.js の BASELINE を ${empty.length} に下げること。`,
    );
    process.exit(0);
  }

  console.log("✓ 増えていません。");
}

main();
