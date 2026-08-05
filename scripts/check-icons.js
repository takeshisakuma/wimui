#!/usr/bin/env node
/**
 * Guard: 出荷アイコンが 1 つの線画ファミリーから外れていないか（T77）。
 *
 * `src/icon/` の 74 個は Feather 系で、**69 個は完全に揃っている**。揃っていないのは
 * 別の出所から来た数個だけで、問題は寸法ではなく**見た目の重さ**にある。実測
 * （24px 相当で描画し不透明ピクセルの平均濃度＝インク量。中央値 23.84%）:
 *
 *   square      100%   （中央値の 4.19 倍）  200×200 の単色ベタ塗り矩形
 *   circle       54%   （2.27 倍）           塗りの丸
 *   pause        37%   （1.56 倍）           fill と stroke の混在
 *
 * **線幅の宣言が揃っていても、塗りが混ざれば重さは揃わない。** 逆に、外接箱が
 * 8.5〜24px とばらつくのは**欠陥ではない**（chevron が小さいのは Feather の流儀）。
 * だからこのガードは寸法の均一性を測らず、「線画ファミリーの契約」だけを見る。
 *
 * 見るもの（契約は RULES.md「SVG の描き方」に数値で書いてある）:
 *   1. viewBox が `0 0 24 24`
 *   2. `stroke-width` が単一値で `2`
 *   3. `stroke-linecap` / `stroke-linejoin` が `round`
 *   4. ルートに `fill="none"`（線画である）
 *   5. `currentColor` を持ち、色の直書きが無い
 *   6. `width` / `height` 属性を持たない（`Icon` が `1em` を当てるので無意味）
 *
 * **件数のラチェットにしない。** 「1 件消して 1 件足す」変異を検出できないことは
 * 2026-08-03 に記録済み。既知の逸脱は**ファイル名で理由つきに列挙**し、
 * 直したらここから消す。新しいファイルは 1 つも逸脱できない。
 *
 * Usage: node scripts/check-icons.js
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const ICON_DIR = path.join(root, "src", "icon");

/**
 * **決着した例外。** 線画にすると意味か慣用が壊れるもので、直す対象ではない。
 * 理由は SVG ファイルの冒頭にもコメントで書いてある（RULES.md の指示）。
 */
const INTENTIONAL = {
  "circle.svg":
    "「丸」ではなく**点**。状態の印・プレースホルダとして使う（Result のフォールバック / FeedbackIcon の既定 / FloatButton の既定 iconName / SegmentedControl の選択肢）。線画にすると「空の丸」という別の意味になる。2026-08-05 に決着",
  "play.svg":
    "再生コントロールは塗りが慣用で、線画の再生ボタンは実質使われない。用途は Video / Audio のトランスポート限定。2026-08-05 に決着",
  "pause.svg": "play.svg と対。同じ理由で塗り。2026-08-05 に決着",
  "pdf.svg":
    "輪郭と折り返しは 2、中の P/D/F だけ 1.2。**24px の中に 3 文字を描くので、本文と同じ 2 では潰れて黒帯になる**（実測: 16px で判読不能な塊）。使用箇所は List / Dropzone で実測 16px。2026-08-05 に決着",
};

/**
 * **まだ直っていない逸脱。** 直したら行ごと消すこと。
 * ここに足すのは「直すつもりだが今はやらない」と決めたときだけで、
 * 恒久的に許すなら INTENTIONAL へ移して理由を書く。
 *
 * 2026-08-05 に空になった（`square` と `loading` を線画へ描き直し、`close-small` は
 * `close` へ統合、`pdf` は例外として確定）。**空であることに意味がある** ──
 * 次に契約から外れたものが入れば、許可リストに載っていない以上そのまま鳴る。
 */
const PENDING = {};

const KNOWN = { ...INTENTIONAL, ...PENDING };

const attr = (s, name) => {
  // `width` が `stroke-width` に一致しないよう、直前がハイフン/英数でないことを要求する。
  const m = s.match(new RegExp(`(?<![-\\w])${name}\\s*=\\s*"([^"]*)"`));
  return m ? m[1] : null;
};

const violationsOf = (src) => {
  const svgTag = src.slice(src.indexOf("<svg"), src.indexOf(">", src.indexOf("<svg")) + 1);
  const out = [];

  const viewBox = attr(svgTag, "viewBox");
  if (viewBox !== "0 0 24 24") out.push(`viewBox=${viewBox ?? "無し"}（0 0 24 24 であること）`);

  const widths = [...new Set([...src.matchAll(/stroke-width\s*=\s*"([^"]*)"/g)].map((m) => m[1]))];
  if (widths.length === 0) out.push("stroke-width が無い（線画ではない）");
  else if (widths.length > 1) out.push(`stroke-width が ${widths.join(" と ")} の複数`);
  else if (widths[0] !== "2") out.push(`stroke-width=${widths[0]}（2 であること）`);

  for (const [prop, label] of [
    ["stroke-linecap", "linecap"],
    ["stroke-linejoin", "linejoin"],
  ]) {
    const vals = [...new Set([...src.matchAll(new RegExp(`${prop}\\s*=\\s*"([^"]*)"`, "g"))].map((m) => m[1]))];
    if (vals.length === 0) out.push(`${label} が無い（round であること）`);
    else if (vals.some((v) => v !== "round")) out.push(`${label}=${vals.join(",")}（round であること）`);
  }

  if (attr(svgTag, "fill") !== "none") out.push("ルートに fill=\"none\" が無い（線画であること）");

  // **ルートだけ見ても足りない。** `pip.svg` はルートに fill="none" を持ちながら
  // 中の図形が塗られている（fill と stroke の混在）。KNOWN が「混在」と書いている
  // のにガードが素通りさせていたので、子要素の塗りも見る。
  const body = src.slice(svgTag.length);
  const filled = [...body.matchAll(/\bfill\s*=\s*"([^"]*)"/g)]
    .map((m) => m[1])
    .filter((v) => v !== "none");
  if (filled.length) out.push(`塗られている図形がある（fill=${[...new Set(filled)].join(",")}）`);
  if (!src.includes("currentColor")) out.push("currentColor を持たない");
  if (/#[0-9a-fA-F]{3,8}\b|rgba?\(|\b(black|white)\b/.test(src)) out.push("色を直書きしている");
  if (attr(svgTag, "width") || attr(svgTag, "height")) out.push("width / height 属性を持つ（Icon が 1em を当てるので不要）");

  return out;
};

const files = fs.readdirSync(ICON_DIR).filter((f) => f.endsWith(".svg")).sort();
const unexpected = [];
const stillKnown = [];
const fixed = [];

for (const file of files) {
  const src = fs.readFileSync(path.join(ICON_DIR, file), "utf8");
  const v = violationsOf(src);
  if (v.length && KNOWN[file]) stillKnown.push({ file, v });
  else if (v.length) unexpected.push({ file, v });
  else if (KNOWN[file]) fixed.push(file);
}

console.log("--- check:icons（線画ファミリーの契約。RULES.md「SVG の描き方」）---\n");
console.log(`アイコン ${files.length} 個 / 契約どおり ${files.length - stillKnown.length - unexpected.length} 個`);
console.log(`既知の逸脱 ${stillKnown.length} 件（許可リストに理由つきで記載）`);

let failed = false;

if (unexpected.length) {
  failed = true;
  console.error(`\n✗ 契約から外れたアイコンが ${unexpected.length} 件あります:`);
  for (const { file, v } of unexpected) {
    console.error(`  - src/icon/${file}`);
    for (const reason of v) console.error(`      ${reason}`);
  }
  console.error(
    "\n  形を直すか、逸脱させる判断をしたなら scripts/check-icons.js の KNOWN に\n" +
      "  **理由つきで**足してください。理由の無い登録は、次に見た人が直せません。",
  );
}

if (fixed.length) {
  failed = true;
  console.error(`\n✗ 直っているのに許可リストに残っている ${fixed.length} 件:`);
  for (const f of fixed) console.error(`  - ${f}`);
  console.error("\n  KNOWN から消してください（残すと、次に壊れても鳴りません）。");
}

/**
 * **どこからも使われていないアイコンを出す（T79 ③）。** 失敗にはしない ──
 * export の削除は破壊的変更で、「使っていない」ことは消す理由にならない。
 * 出す理由は別で、**使われないアイコンは人の目にも触れないので、壊れていても
 * 誰も気付かない**という構造がある。実際 `skip-forward` は右向きの矢印を
 * 持たないまま出荷され、ギャラリーにしか出ていなかったので誰も見ていなかった。
 */
const componentSrc = [];
const collect = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) collect(p);
    // `src/icon/` は自分自身、`src/i18n/generated/` は**アイコン名を並べただけの
    // 翻訳キー**なので数えない。最初これを除外し忘れ、`skip-forward` のように
    // 実際には誰も使っていないものが「使用あり」に化けていた。
    else if (
      /\.tsx?$/.test(e.name) &&
      !e.name.includes(".test.") &&
      !p.includes(`${path.sep}icon${path.sep}`) &&
      !p.includes(`${path.sep}i18n${path.sep}generated${path.sep}`)
    ) {
      componentSrc.push(fs.readFileSync(p, "utf8"));
    }
  }
};
collect(path.join(root, "src"));
const haystack = componentSrc.join("\n");

const unused = files
  .map((f) => f.replace(/\.svg$/, ""))
  .map((n) => ({
    name: n,
    component: `${n.split("-").map((s) => s[0].toUpperCase() + s.slice(1)).join("")}Icon`,
  }))
  .filter(({ component }) => !haystack.includes(component));

if (unused.length) {
  console.log(`\n参照ゼロ（src/ から使われていない）: ${unused.length} 個`);
  console.log(`  ${unused.map((u) => u.name).join(" ")}`);
  console.log("  消す必要はありません（export の削除は破壊的変更）。**誰も見ていない**ので、");
  console.log("  形が壊れていても気付けない、ということだけ承知しておいてください（T79）。");
}

if (failed) process.exit(1);

console.log("\n✓ 新しい逸脱はありません。");
