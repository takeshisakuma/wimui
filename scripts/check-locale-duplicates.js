#!/usr/bin/env node
/**
 * Guard: **同じキーが複数のロケールファイルに在り、値が食い違っているもの**（T229）。
 *
 * i18next は `ALL_NAMESPACES` の順で**先に見つけた名前空間**の値を返す。後ろの
 * 名前空間にある複製は**一度も表示されない**ので、片方だけ直しても画面は変わらず、
 * ドリフトに誰も気づかない。
 *
 * **由来は 2026-04-15 の「devide i18b json」**（`common.json` をカテゴリ別ファイルへ
 * 分割したコミット）。分割はしたが **`common.json` の旧コピーを消していない**。
 * `common` は並びの先頭付近なので常に勝ち、**分割後に手を入れた新しい文のほうが
 * 死んだ**。実測（2026-08-23）:
 *
 *   - en 15195 キー中 **375 キーが複数ファイルに存在**し、**229 キーは値が違う**
 *   - 集中している組は `common ← docs_guide_common`（51）/ `common ← docs_form_basic`
 *     （42）/ `common ← docs_guide_standardization`（23）/ `common ← docs_data_display`
 *     （19）── 上位 6 組で 169 件
 *   - `doc.fieldTemplate_best_practice_1` は `common` が「Use horizontal layout for
 *     dense desktop forms.」、`docs_form_basic` が「Always pass an id to the input
 *     child that matches…」。**具体的な後者が出ていない。**
 *
 * **`check-i18n-quality` の重複検出は 1 ファイルの中しか見ない**（生の出現数と
 * パース後の数の比較）ので、ファイルを跨いだ重複は構造的に見えなかった。
 *
 * **値が同じ複製は落とさない。** 無害だし、まとめて赤にすると直せない量になる。
 * 見るのは「食い違っている＝どちらかが嘘になっている」ものだけ。
 *
 * **消す前に必ず確かめること**: 名前空間を明示した参照（`docs_ai:doc.x` の形）が
 * `stories/**` に実在する。その形で負けている側を直接引いている箇所があれば、
 * 消すと表示が壊れる。
 *
 * **直し方の方針（2026-08-23・ユーザー判断）: キーごとに最終更新を見て、
 * 手入れされているほうを残す。** クラスタで束ねると外す ── `docs_form_basic` は
 * カテゴリ側が新しかったが `docs_guide_common` は逆で、58 件のうち 2 件だけ
 * カテゴリ側が新しかった。束で消していたらその 2 件を壊していた。
 *
 * **ただし最終更新は万能ではない。** `--plan` はそれを隠さずに出す ──
 * `common ← docs_guide_standardization` の 31 件は **27 件が「両側とも同じ日」**で、
 * 秒差で勝敗を付けても根拠にならない（実際、値の差は表記ゆれではなく
 * **別々の主張**だった。片方は「Intl.NumberFormat を使え」、もう片方は
 * 「区切り文字を扱う」）。**決められないものは「決められない」と出す。**
 *
 * Usage:
 *   node scripts/check-locale-duplicates.js               # ラチェット（CI で走る）
 *   node scripts/check-locale-duplicates.js --list        # 食い違っている組を出す
 *   node scripts/check-locale-duplicates.js --plan <ns>   # common ← <ns> をキーごとに判定
 */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { readNamespaceOrder } from "./lib/locale-keys.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const BASELINE = path.join(__dirname, "locale-duplicates-baseline.json");
const LOCALES = ["en", "ja", "pt"];

const order = readNamespaceOrder(root);
const rank = new Map(order.map((ns, i) => [ns, i]));
const rankOf = (ns) => rank.get(ns) ?? Number.MAX_SAFE_INTEGER;

/** 1 言語ぶんの「キー → [{ns, value}]」。 */
function collect(locale) {
  const dir = path.join(root, "public", "locales", locale);
  const seen = {};
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".json")) continue;
    const ns = path.basename(file, ".json");
    const json = JSON.parse(fs.readFileSync(path.join(dir, file), "utf8"));
    const flatten = (obj, prefix = "") => {
      for (const [k, v] of Object.entries(obj)) {
        if (typeof v === "string") (seen[prefix + k] ??= []).push({ ns, value: v });
        else if (v && typeof v === "object") flatten(v, `${prefix}${k}.`);
      }
    };
    flatten(json);
  }
  return seen;
}

const drifted = {};
let duplicateTotal = 0;
for (const locale of LOCALES) {
  const seen = collect(locale);
  for (const [key, copies] of Object.entries(seen)) {
    if (copies.length < 2) continue;
    duplicateTotal += 1;
    if (new Set(copies.map((c) => c.value)).size < 2) continue;
    const sorted = [...copies].sort((a, b) => rankOf(a.ns) - rankOf(b.ns));
    (drifted[key] ??= {});
    drifted[key][locale] = { winner: sorted[0].ns, losers: sorted.slice(1).map((c) => c.ns) };
  }
}

const current = Object.keys(drifted).sort();

if (process.argv.includes("--list")) {
  console.log(`値が食い違う複製: ${current.length} キー\n`);
  const byPair = {};
  for (const key of current) {
    const any = Object.values(drifted[key])[0];
    const pair = `${any.winner} ← ${any.losers.join(", ")}`;
    (byPair[pair] ??= []).push(key);
  }
  for (const [pair, keys] of Object.entries(byPair).sort((a, b) => b[1].length - a[1].length)) {
    console.log(`${String(keys.length).padStart(4)}  ${pair}`);
    for (const k of keys.slice(0, 4)) console.log(`        ${k}`);
    if (keys.length > 4) console.log(`        … 他 ${keys.length - 4} 件`);
  }
  process.exit(0);
}

/**
 * `--plan <ns>`: `common ← <ns>` の食い違いを**キーごとに**判定する。
 *
 * **判定できるのは「最終更新がはっきり離れている」ときだけ。** 両側が同じ日に
 * 触られている場合、秒差で勝敗を付けても意味がないので `判定できない` に倒す。
 * ここを黙って勝者にすると、**根拠の無い削除**になる。
 */
const planAt = process.argv.indexOf("--plan");
if (planAt !== -1) {
  const pair = process.argv[planAt + 1];
  if (!pair) {
    console.error("✗ 対象の名前空間を指定してください: --plan docs_guide_standardization");
    process.exit(1);
  }
  /** これ以上離れていれば「後から手が入った」と見なす。同日内の差は根拠にしない。 */
  const CLEAR_GAP_SECONDS = 24 * 60 * 60;
  const lastTouched = (file, key) => {
    try {
      const out = execFileSync("git", ["log", "-1", "--format=%at", "-S", key, "--", file], {
        cwd: root,
        encoding: "utf8",
      }).trim();
      return out ? Number(out) : 0;
    } catch {
      return 0;
    }
  };
  const targets = current.filter((key) => {
    const any = Object.values(drifted[key])[0];
    return any.winner === "common" ? any.losers.includes(pair) : any.losers.includes("common") || any.winner === pair;
  });
  const rows = [];
  for (const key of targets) {
    const leaf = key.slice(key.lastIndexOf(".") + 1);
    const a = lastTouched(`public/locales/en/common.json`, leaf);
    const b = lastTouched(`public/locales/en/${pair}.json`, leaf);
    const gap = Math.abs(a - b);
    rows.push({ key, a, b, verdict: gap >= CLEAR_GAP_SECONDS ? (a > b ? "common" : pair) : "判定できない" });
  }
  const d = (t) => (t ? new Date(t * 1000).toISOString().slice(0, 10) : "不明");
  const tally = {};
  for (const r of rows) tally[r.verdict] = (tally[r.verdict] || 0) + 1;
  console.log(`common ← ${pair} で値が食い違うキー: ${rows.length} 件\n`);
  for (const [k, v] of Object.entries(tally)) console.log(`  ${k}: ${v} 件`);
  console.log("\n--- 内訳 ---");
  for (const r of rows) {
    console.log(`  ${r.key.padEnd(44)} common=${d(r.a)} ${pair}=${d(r.b)}  → ${r.verdict}`);
  }
  console.log(
    "\n**「判定できない」は最終更新が同じ日のもの。** 秒差で決めず、値を読んで人が選ぶこと。",
  );
  process.exit(0);
}

const baseline = JSON.parse(fs.readFileSync(BASELINE, "utf8"));
const known = new Set(baseline.known);
const added = current.filter((k) => !known.has(k));
const fixed = [...known].filter((k) => !current.includes(k));

console.log("--- check:locale-duplicates（複数ファイルに在って値が食い違うキー）---\n");
console.log(`複数ファイルに在るキー ${duplicateTotal}（3 言語の延べ）/ 値が食い違うもの ${current.length}（凍結 ${known.size}）`);

let failed = false;
if (added.length) {
  failed = true;
  console.error(`\n✗ 食い違う複製が増えています（${added.length} 件）:`);
  for (const k of added.slice(0, 20)) {
    const any = Object.values(drifted[k])[0];
    console.error(`  - ${k}  （${any.winner} が勝ち / ${any.losers.join(", ")} が死ぬ）`);
  }
  if (added.length > 20) console.error(`  … 他 ${added.length - 20} 件`);
  console.error(
    "\n  **同じキーを 2 か所に置かないこと。** どちらか一方に寄せてください。\n" +
      "  勝つのは `stories/i18nConstants.ts` の並びで先に来る名前空間です。",
  );
}
if (fixed.length) {
  failed = true;
  console.error(`\n✗ 直っているのに凍結一覧に残っています（${fixed.length} 件）:`);
  for (const k of fixed.slice(0, 20)) console.error(`  - ${k}`);
  if (fixed.length > 20) console.error(`  … 他 ${fixed.length - 20} 件`);
  console.error(
    `\n  \`${path.relative(root, BASELINE).replace(/\\/g, "/")}\` の \`known\` から外してください。`,
  );
}

if (failed) process.exit(1);
console.log(`\n✓ 食い違う複製は増えていません（残り ${current.length} キー）。`);
