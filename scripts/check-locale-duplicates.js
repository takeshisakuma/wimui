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
 *   node scripts/check-locale-duplicates.js --classify [ns] # 参照の有無で「消してよいか」を仕分ける
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
/** locale -> キー -> [{ns, value}]（--classify が値を読むのに使う）。 */
const byLocale = {};
let duplicateTotal = 0;
for (const locale of LOCALES) {
  const seen = collect(locale);
  byLocale[locale] = seen;
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

/**
 * `--classify [ns]`: 食い違っている複製を、**消してよいかで仕分ける**。
 *
 * 判定に要るのは「どちらが新しいか」ではなく **どちらが実際に引かれているか**。
 * 5 回目（2026-08-26）で「`ns:key` の明示参照があるから消せない」と読んだ 21 件は、
 * **33 か所すべてが負け側を名指し**していた ── 生きているのは負け側で、死んでいるのは
 * 勝者だった。**「参照がある」は、どちらが生きているかを教えてくれない。**
 *
 * 数える参照は 3 種類:
 *   - **明示** `"<ns>:<key>"` ── その名前空間の値がその場に出る（並び順で負けていても）
 *   - **素** `t("<key>")` / `<T k="<key>" />` ── `ALL_NAMESPACES` の先勝ち＝勝者の値が出る
 *   - **動的** `` t(`doc.${name}_prop_${prop}`) `` ── 実行時にしか決まらないので、
 *     組み立ての形（`${}` を任意文字に開いた正規表現）に**当たるキーを候補として出す**
 *
 * **素の参照は「文字列が在るか」ではなく「その場で引いているか」で数えられない** ──
 * `["primary", "story.tag_primary"]` は素に見えて 10 行下で
 * `` t(`docs_stories_display:${key}`) `` と組まれていた（5 回目に踏んだ）。だから
 * ここは **行をそのまま出して人が読む**。件数だけで消す判断をしないこと。
 *
 * **走査範囲はリポジトリ全体**。ただし**引いていないもの**は外す ── `node_modules` /
 * ビルド生成物 / `public/locales` 自身 / `src/i18n/generated`（キーの型ユニオン）/
 * ガードの凍結一覧・スナップショット JSON / `.md`（台帳の散文）/ 注釈行。
 * どれも「キーの名前が書いてあるだけで、その場で引いてはいない」。実際これを外す前は
 * `otp.digit` が**このガード自身の JSDoc のせいで「素の参照あり」**に落ちていた。
 *
 * **逆に、網を狭めると消してはいけないものを消せると読む。** 4 回目は `stories/` しか
 * 見ておらず「消費者 0 件」が 33 → 25 → 19 と減り続けた。6 回目に `<T k="…" />` まで
 * 拾う網で数え直すと、**19 のうち 6 件は素の消費者があった**（`doc.label_best_practice_1`
 * は `Label.mdx` が引いている）── **この数字は網の広さに依存する。確定値ではない。**
 */
const classifyAt = process.argv.indexOf("--classify");
if (classifyAt !== -1) {
  const only = process.argv[classifyAt + 1];
  const SKIP_DIR = new Set([
    "node_modules",
    ".git",
    "dist",
    "storybook-static",
    "coverage",
    "playwright-report",
    "test-results",
    "generated",
    "__snapshots__",
    "font-diagnosis",
    "sandbox-dist",
  ]);
  /** 走査する側。**素のプロセや台帳（.md）は消費者ではない**ので見ない（.mdx は描画される）。 */
  const EXT = /\.(tsx?|jsx?|mdx|json|html)$/;
  /** ガードの凍結一覧・スナップショットはキーを列挙するが、**引いてはいない**。 */
  const NOT_A_CONSUMER = /(baseline|snapshot|package-lock)[^\\/]*\.json$/;
  const LOCALES_DIR = path.join(root, "public", "locales");

  const files = [];
  (function walk(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) {
        if (SKIP_DIR.has(e.name) || e.name.startsWith("tmp") || p === LOCALES_DIR) continue;
        walk(p);
      } else if (EXT.test(e.name) && !NOT_A_CONSUMER.test(e.name)) files.push(p);
    }
  })(root);

  /** `ns:key` -> [{file, line, text}] / `key` -> 同（素）。 */
  const explicit = new Map();
  const bare = new Map();
  /** 動的に組まれるキーの形（`${}` を開いた正規表現）。 */
  const dynamic = [];
  const LITERAL = /"([^"\\\n]*)"|'([^'\\\n]*)'|`([^`\\\n]*)`/g;
  const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const push = (map, k, v) => {
    if (!map.has(k)) map.set(k, []);
    map.get(k).push(v);
  };

  for (const file of files) {
    const src = fs.readFileSync(file, "utf8");
    if (!/[a-z]\.[a-z_]/i.test(src)) continue;
    const rel = path.relative(root, file).replace(/\\/g, "/");
    const lines = src.split(/\r?\n/);
    lines.forEach((line, i) => {
      // **注釈は消費者ではない。** ガードの JSDoc が  を説明しているだけの行を
      // 素の参照として数えると、消せないものを消せると読み違える（実際に一度そう出た）。
      if (/^([*]|[/][/]|[/][*])/.test(line.trim())) return;
      for (const m of line.matchAll(LITERAL)) {
        const lit = m[1] ?? m[2] ?? m[3];
        if (!lit) continue;
        const where = { file: rel, line: i + 1, text: line.trim().slice(0, 160) };
        if (lit.includes("${")) {
          const shape = lit.replace(/\$\{[^}]*\}/g, " ");
          if (!/^[a-z][a-z0-9_-]*[:.]/.test(shape)) continue;
          dynamic.push({
            re: new RegExp(`^${shape.split(" ").map(escapeRe).join("[A-Za-z0-9_.-]+")}$`),
            ns: shape.includes(":") ? shape.slice(0, shape.indexOf(":")) : null,
            where,
          });
          continue;
        }
        if (/^[a-z][a-z0-9_-]*:[A-Za-z][A-Za-z0-9_.]*$/.test(lit)) push(explicit, lit, where);
        else if (/^[A-Za-z][A-Za-z0-9_]*\.[A-Za-z0-9_.]+$/.test(lit)) push(bare, lit, where);
      }
    });
  }

  const targets = only
    ? current.filter((k) => {
        const any = Object.values(drifted[k])[0];
        return any.winner === only || any.losers.includes(only);
      })
    : current;

  const buckets = new Map();
  const out = [];
  for (const key of targets) {
    const any = Object.values(drifted[key])[0];
    const { winner, losers } = any;
    const refWinner = explicit.get(`${winner}:${key}`) ?? [];
    const refLosers = losers.flatMap((ns) => explicit.get(`${ns}:${key}`) ?? []);
    const refBare = bare.get(key) ?? [];
    const refDyn = dynamic.filter((d) => d.re.test(key) && (!d.ns || d.ns === winner || losers.includes(d.ns)));

    let bucket;
    if (refWinner.length) bucket = "A 勝者を名指し（勝者は消せない）";
    else if (refDyn.length) bucket = "D 動的に届きうる（要目視）";
    else if (refBare.length) bucket = "C 素の参照あり（勝者を消すと表示が変わる＝編集判断）";
    else if (refLosers.length) bucket = "B 負け側だけを名指し（勝者が死んでいる）";
    else bucket = "E 消費者が見つからない";
    buckets.set(bucket, (buckets.get(bucket) ?? 0) + 1);
    out.push({ key, winner, losers, refWinner, refLosers, refBare, refDyn, bucket });
  }

  console.log(`--classify: ${targets.length} キー${only ? `（${only} が絡むもの）` : ""}\n`);
  for (const [b, n] of [...buckets].sort()) console.log(`  ${String(n).padStart(4)}  ${b}`);
  console.log("\n--- 内訳 ---");
  for (const r of out.sort((a, b) => a.bucket.localeCompare(b.bucket) || a.key.localeCompare(b.key))) {
    console.log(`\n${r.key}`);
    console.log(`  [${r.bucket}]  勝ち: ${r.winner} / 負け: ${r.losers.join(", ")}`);
    for (const locale of LOCALES) {
      for (const ns of [r.winner, ...r.losers]) {
        const v = (byLocale[locale][r.key] ?? []).find((c) => c.ns === ns);
        if (v) console.log(`  ${locale} ${ns.padEnd(28)} ${JSON.stringify(v.value).slice(0, 150)}`);
      }
    }
    const show = (label, list) => {
      for (const w of list.slice(0, 6)) console.log(`  ${label} ${w.file}:${w.line}  ${w.text}`);
      if (list.length > 6) console.log(`  ${label} … 他 ${list.length - 6} 件`);
    };
    show("明示(勝)", r.refWinner);
    show("明示(負)", r.refLosers);
    show("素    ", r.refBare);
    show("動的  ", r.refDyn.map((d) => d.where));
  }
  console.log(
    "\n**件数だけで消さないこと。** 素の参照は「文字列が在るか」ではなく「その場で引いているか」で決まる（行を読む）。\n" +
      "**「消費者が見つからない」は網の広さに依存する数字**で、確定値ではない。",
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
