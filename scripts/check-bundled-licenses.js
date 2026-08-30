/**
 * check:licenses — 出荷物に同梱している第三者コードが NOTICE に載っているか。
 *
 * **同梱していない依存（peer / external）には表記の義務がない。** 義務が生じるのは
 * **こちらがコードを再配布したとき**だけで、その境目は `dist/node_modules/` に
 * 実体が出るかどうかで機械的に決まる。2026-08-30 の実測では 3 パッケージが
 * そこに出ていて、NOTICE にはアイコンとフォントしか書かれていなかった。
 *
 * **`dist` が無いときに「合格」を返さないこと。** このリポジトリは同じ形の穴を
 * 何度も踏んでいる（`check:consistency` が exit 0 で終わる／`check:slop` の
 * ラチェットが lint-staged で素通りする）。ここでは **`dist` が無ければ即エラー**に
 * して、素通りを構造的に不可能にしてある。呼ぶ側は必ずビルドの後に置くこと。
 *
 * 両方向を見る:
 *   ①`dist/node_modules/` にあるのに NOTICE に無い  → 表記漏れ
 *   ②NOTICE にあるのに `dist/node_modules/` に無い  → 古い記載（依存を外したあと）
 *
 * 使い方: node scripts/check-bundled-licenses.js
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST_NM = path.join(ROOT, "dist", "node_modules");
const NOTICE = path.join(ROOT, "NOTICE");

/** NOTICE の中で同梱コードを列挙している節。ここだけを突き合わせる。 */
const SECTION_START = "Bundled third-party code";
const SECTION_END = "Peer dependencies with conditions beyond attribution";

const fail = (lines) => {
  console.error(`\n--- check:licenses（同梱コードの表記） ---\n`);
  for (const l of lines) console.error(l);
  console.error("");
  process.exit(1);
};

if (!fs.existsSync(path.join(ROOT, "dist"))) {
  fail([
    "✗ dist/ が無いので検査できない。",
    "",
    "  これは**合格ではない**。この検査は出荷物そのものを見るので、",
    "  必ず `npm run build` の後に走らせること（CI では Bundle Size Check の",
    "  ビルド直後に置いてある）。",
  ]);
}

/** `dist/node_modules/` にあるパッケージ名を集める（scope 付きに対応）。 */
const bundled = [];
if (fs.existsSync(DIST_NM)) {
  for (const entry of fs.readdirSync(DIST_NM, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith("@")) {
      for (const sub of fs.readdirSync(path.join(DIST_NM, entry.name), { withFileTypes: true })) {
        if (sub.isDirectory()) bundled.push(`${entry.name}/${sub.name}`);
      }
    } else {
      bundled.push(entry.name);
    }
  }
}
bundled.sort();

const noticeText = fs.readFileSync(NOTICE, "utf8");
const startIdx = noticeText.indexOf(SECTION_START);
if (startIdx < 0) {
  fail([
    `✗ NOTICE に「${SECTION_START}」の節が無い。`,
    "",
    "  同梱コードの表記はこの節にまとめること（この検査はそこだけを見る）。",
  ]);
}
const endIdx = noticeText.indexOf(SECTION_END, startIdx);
const section = noticeText.slice(startIdx, endIdx < 0 ? undefined : endIdx);

/**
 * 節に書かれているパッケージ名。**箇条書きの行だけ**を拾う。
 *
 * **最初は節の全文に対する `includes` で見ていて、対照が鳴らなかった。** 一覧から
 * `@radix-ui/react-slot` の行を消しても、下のライセンス本文にある
 * 「(applies to @radix-ui/react-slot …)」が引っかかって合格していた。
 * **名前がどこかに出ていることと、一覧に載っていることは別。**
 */
const declared = Array.from(section.matchAll(/^\s*-\s+(@[\w.-]+\/[\w.-]+|[\w.-]+)\s/gm)).map(
  (m) => m[1],
);

const missing = bundled.filter((n) => !declared.includes(n));
const stale = declared.filter((n) => !bundled.includes(n));

if (missing.length || stale.length) {
  const lines = [];
  if (missing.length) {
    lines.push("✗ 出荷物に同梱しているのに NOTICE に載っていない:");
    for (const n of missing) lines.push(`  - ${n}`);
    lines.push("");
    lines.push("  これらは `dist/node_modules/` にソースごと入っている＝再配布している。");
    lines.push("  MIT / BSD などは複製物に著作権表示を含めることを条件にしている。");
  }
  if (stale.length) {
    if (missing.length) lines.push("");
    lines.push("✗ NOTICE にあるのに、もう同梱していない:");
    for (const n of stale) lines.push(`  - ${n}`);
    lines.push("");
    lines.push("  依存を外したか external にした場合は、NOTICE からも消すこと。");
  }
  fail(lines);
}

console.log(
  `✓ 同梱している第三者コード ${bundled.length} 件はすべて NOTICE に載っている` +
    `（${bundled.join(", ") || "なし"}）。`,
);
