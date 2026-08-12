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
 * 軸 2・3 を足した理由（T153・2026-08-12）
 *
 * 上の同語反復ラチェットは **1 件も動かないまま**、資料の「選択の指針」を
 * 10 本直せてしまった。このガードが見ていたのは翻訳 JSON の文面だけで、
 * **資料の側にそもそも答えの表が無い**ことも、**1 つのセルに複数の
 * コンポーネントを相乗りさせて分岐を消している**ことも見ていなかった。
 *
 * 軸 2（答えの表があるか）は機械的に決まる ── `docs/*Standardization.mdx` の
 * うち**コンポーネントへのリンクを 2 つ以上持つもの**は「どれを選ぶか」の
 * 資料なので、「使用場面 → コンポーネント」の表を持たなければならない。
 * リンクが 0〜1 本の資料（`NumericInputStandardization` は
 * `<input type="number">` と `type="text"` の実装規則、`StylingStandardization`
 * は SCSS と CSS カスタムプロパティの使い分け）は**選ぶ相手がいない**ので
 * この条件から自動的に外れる。手で除外表を書く必要は無い。
 *
 * 軸 3（相乗り行）は**そのままでは使えなかった**。実測 5 件のうち 4 件は
 * 欠陥ではない ── `IndicatorBase` / `OverlayBase` / `StatusContent` の 3 件は
 * 「内部ベースではなく完成品の Badge / Chip / Tag を使いたいとき」で 3 つとも
 * **同じ側**、`QueryBuilder` の `SearchInput / MultiSelect` は
 * **and（組み合わせて使う）であって or ではない**。5 件中 4 件が偽陽性の
 * ラチェットは baseline に嘘を固定するだけなので、**理由付きの許可リスト**を
 * 持たせて「許可した 4 件以外は 0 件」を保つ形にした。
 */
const SCENARIO_TABLE_KEY = "doc.usage_scenario";
const STANDARDIZATION_DIR = "docs";

/**
 * 相乗りに見えるが欠陥ではない行。**理由を書けないものは足さないこと。**
 * 「or の分岐が消えている」のが欠陥で、「and」や「同じ側の例示」は違う。
 */
const RIDER_ALLOWLIST = new Map([
  [
    "stories/internal/IndicatorBase/IndicatorBase.mdx::Badge / Chip / Tag",
    "3 つとも「内部ベースではなく完成品を使う」側の例示で、互いの分岐ではない",
  ],
  [
    "stories/internal/OverlayBase/OverlayBase.mdx::Dialog / Drawer / BottomSheet",
    "同上（完成品の例示）",
  ],
  [
    "stories/internal/StatusContent/StatusContent.mdx::EmptyState / Result",
    "同上（完成品の例示）",
  ],
  [
    "stories/form/QueryBuilder/QueryBuilder.mdx::SearchInput / MultiSelect",
    "「検索ボックス＋いくつかの select で足りる」＝ and。どちらかを選ぶ話ではない",
  ],
]);

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

/** 軸 2: 選択の資料なのに「使用場面 → コンポーネント」の表が無いもの。 */
function collectDocsWithoutAnswer() {
  const missing = [];
  for (const file of fs.readdirSync(STANDARDIZATION_DIR)) {
    if (!file.endsWith("Standardization.mdx")) continue;
    const source = fs.readFileSync(path.join(STANDARDIZATION_DIR, file), "utf8");
    const links = new Set(
      [...source.matchAll(/\?path=\/docs\/(components-[a-z0-9-]+--docs)/g)].map((m) => m[1]),
    );
    if (links.size < 2) continue; // 選ぶ相手がいない資料
    if (!source.includes(SCENARIO_TABLE_KEY)) missing.push({ file, links: links.size });
  }
  return missing;
}

/** 軸 3: 1 つのセルに複数のコンポーネント名が相乗りしている行。 */
function collectRiderRows() {
  const found = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const target = path.join(dir, entry.name).replace(/\\/g, "/");
      if (entry.isDirectory()) walk(target);
      else if (entry.name.endsWith(".mdx")) inspect(target);
    }
  };

  const inspect = (file) => {
    const source = fs.readFileSync(file, "utf8");
    for (const row of source.matchAll(/<tr>([\s\S]*?)<\/tr>/g)) {
      const body = row[1];
      if (!/_choice_/.test(body)) continue;
      const cells = [...body.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((m) => m[1]);
      if (cells.length === 0) continue;
      const first = cells[0];
      if (/<T\s+k=/.test(first)) continue; // 1 列目が翻訳キー = 名前の列ではない
      const text = first.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
      const names = text
        .split(/\s*[/,]\s*|\s+or\s+/i)
        .map((part) => part.trim())
        .filter((part) => /^[A-Z][A-Za-z.]*$/.test(part));
      if (names.length < 2) continue;
      const line = source.slice(0, row.index).split("\n").length;
      found.push({ file, line, text, key: `${file}::${text}` });
    }
  };

  walk("stories");
  walk("docs");
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

  // --- 軸 2: 資料に答えの表があるか ---
  const missingAnswer = collectDocsWithoutAnswer();
  console.log(
    `答えの表が無い選択資料: ${missingAnswer.length} 件（`
      + `コンポーネントを 2 つ以上挙げている *Standardization.mdx が対象）`,
  );
  for (const doc of missingAnswer) {
    console.log(`  ✗ docs/${doc.file}（${doc.links} 件のコンポーネントを挙げているのに使用場面の表が無い）`);
  }

  // --- 軸 3: 相乗り行 ---
  const riders = collectRiderRows();
  const unlisted = riders.filter((row) => !RIDER_ALLOWLIST.has(row.key));
  console.log(
    `相乗り行: ${unlisted.length} 件（許可済み ${riders.length - unlisted.length} 件を除く）\n`,
  );
  for (const row of unlisted) {
    console.log(`  ✗ ${row.file}:${row.line} — "${row.text}" が 1 セルに同居していて、分岐の条件が消えている`);
  }

  if (missingAnswer.length > 0 || unlisted.length > 0) {
    console.error(
      "\n✗ 「選択の指針」が答えを持っていない箇所があります。\n" +
        "  ・使用場面の表: `doc.usage_scenario` と `doc.std_column_component` を見出しにして、\n" +
        "    **使用場面 → 1 つのコンポーネント**を並べること（例: docs/TableStandardization.mdx）。\n" +
        "  ・相乗り行: 相手ごとに行を分け、**分かれる一点**を書くこと。\n" +
        "    and（組み合わせて使う）や同じ側の例示なら、理由を添えて\n" +
        "    scripts/check-choice-matrix.js の RIDER_ALLOWLIST に足すこと。",
    );
    process.exit(1);
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
