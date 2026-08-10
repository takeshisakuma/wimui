import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { waitForStoryReady } from "./story-ready";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const indexPath = path.resolve(__dirname, "../storybook-static/index.json");

if (!fs.existsSync(indexPath)) {
  console.error("Error: storybook-static/index.json not found.");
  console.error("Please run 'npm run build-storybook' before running tap-target tests.");
  process.exit(1);
}

interface StoryEntry {
  id: string;
  title: string;
  name: string;
  type: "story" | "docs";
}

const index = JSON.parse(fs.readFileSync(indexPath, "utf-8"));
const stories = Object.values(index.entries).filter(
  (entry: unknown): entry is StoryEntry => (entry as StoryEntry).type === "story",
);

const filter = process.env.FILTER || "";
// 既定は両方の密度を見る。片方だけでは足りない ── compact は `--wim-height-xs` が
// 20px まで縮むので compact でしか出ない不足があり（SegmentedControl・JsonViewer）、
// 逆に密度に依らない固定寸法は comfortable でも同じだけ出る（Popover の呼び出し口）。
// シャードは 4 本のままで、1 本あたりの本数が倍になる。
const densities = process.env.DENSITY ? process.env.DENSITY.split(",") : ["comfortable", "compact"];

// WCAG 2.5.8 Target Size (Minimum), Level AA。24×24 CSS ピクセル。
const MIN = 24;

/**
 * 操作対象の実寸をブラウザで測る。
 *
 * **CSS から静的に判定しようとして失敗している。** クラス名を TSX へ辿る方式では
 * `Rating`（親に置いた `--wim-rating-star-size` が子の星を決める）と
 * `Slider`（`role` が子のつまみに付く）を両方取りこぼした ── **このチケットを
 * 起こした当の 2 件**。実際に描かれた箱を測るしかない。
 */
const measure = async (page: import("@playwright/test").Page) =>
  page.evaluate((min) => {
    const SELECTOR = [
      "button",
      "input:not([type=hidden])",
      "select",
      "textarea",
      "summary",
      // `a[href]` は初版では対象外にしている。WCAG 2.5.8 のインライン例外
      // （高さが本文の line-height に縛られるテキストリンク）を自動で割り切れない。
      // `display` で判定しようとしたが、`Link` はアイコンを並べるために inline-flex を
      // 使っており、文中にあっても `inline` にはならなかった。緩く入れると 19.2px の
      // リンクが大量に出て、本当のコントロールの不足が埋もれる。
      // まずボタン・入力・role 付きに絞る。
      "[role=button]",
      "[role=slider]",
      "[role=checkbox]",
      "[role=radio]",
      "[role=switch]",
      "[role=tab]",
      "[role=option]",
      "[role=menuitem]",
      "[role=spinbutton]",
    ].join(",");

    // **文字を打ち込む欄は対象外。** 測っているのは要素の箱だが、この系統は
    // 内側の `<input>` / `<textarea>` が 22px で、実際に押される面は padding を
    // 持つ外側のラッパー（`md` なら 42px）。要素の箱を測ると必ず割れて見える。
    // 実測では 1165×22 や 1246×22 が大量に出て、本当の不足（16px のチェックボックス、
    // 4.8px のドット）が埋もれた。`range` も同様で、判定すべきはつまみ（`role=slider`）。
    const TEXT_ENTRY = ["text", "email", "password", "search", "tel", "url", "number", "range", "date", "time"];
    const isTextEntry = (el: HTMLElement) =>
      el.tagName === "TEXTAREA" ||
      (el.tagName === "INPUT" && TEXT_ENTRY.includes((el as HTMLInputElement).type));

    const out: { label: string; w: number; h: number }[] = [];
    // **除外した数は必ず出す。** 例外はどれも「小さいまま通す」ための穴なので、
    // 黙って効くと 0 件が正しさの証拠にならなくなる。理由ごとに数えて表に出す。
    const excused: Record<string, number> = {};
    const describe = (el: HTMLElement) => {
      const cls = (el.className || "").toString().split(/\s+/).filter(Boolean).slice(0, 2).join(".");
      return `<${el.tagName.toLowerCase()}${el.getAttribute("role") ? ` role=${el.getAttribute("role")}` : ""}${cls ? ` class="${cls}"` : ""}>`;
    };
    const excuse = (reason: string, el: HTMLElement) => {
      const key = `${reason}  ${describe(el)}`;
      excused[key] = (excused[key] || 0) + 1;
    };
    for (const el of Array.from(document.querySelectorAll<HTMLElement>(SELECTOR))) {
      if (el.hasAttribute("disabled") || el.getAttribute("aria-hidden") === "true") continue;
      if (isTextEntry(el)) continue;
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) continue; // 非表示は測れない
      if (r.width >= min && r.height >= min) continue;

      // 押せない状態のものは当たり判定を持たない。SpeedDial の閉じたアクションが
      // `opacity: 0; pointer-events: none; transform: scale(0.6)` のまま数えられ、
      // 22.4 の箱が 13.4 として 12 件鳴っていた ── あれは欠陥ではなく測り間違い。
      // 実測した箱そのものを見る（`transform` は getBoundingClientRect に乗る）ので、
      // 開いた状態のサイズを別に確かめる必要はない。
      let unclickable = false;
      for (let n: HTMLElement | null = el; n && n !== document.body; n = n.parentElement) {
        const cs = getComputedStyle(n);
        if (cs.pointerEvents === "none" || cs.opacity === "0" || cs.visibility === "hidden") {
          unclickable = true;
          break;
        }
      }
      if (unclickable) {
        excuse("押せない状態", el);
        continue;
      }

      // WCAG 2.5.8 の Inline 例外 ──「対象が文の中にある、または非対象の文字の
      // line-height によって大きさが決まっている」場合。`display: inline` は
      // まさにそれで、高さは行の line-height に従い、要素側では動かせない。
      // JsonViewer の値（`<span role="button">`）が該当する。鍵・括弧・カンマと
      // 同じ行に並ぶので、ここを 24 にすると JSON の行がすべて広がる。
      // inline-flex / inline-block は自分で高さを持てるので例外にならない。
      if (getComputedStyle(el).display === "inline") {
        excuse("Inline 例外", el);
        continue;
      }

      // **外側により大きな操作対象があるなら、押される面はそちら。**
      // 入れ子（`<label>` の中のマーク、ボタンの中のアイコン）で二重に鳴らない。
      let ancestor = el.parentElement;
      let coveredByAncestor = false;
      while (ancestor && ancestor !== document.body) {
        if (ancestor.matches(SELECTOR) || ancestor.tagName === "LABEL") {
          // **その祖先が抱える操作対象がこの要素 1 つだけのときに限る。**
          // 素朴に「大きい祖先があれば除外」にしたら、`Rating` の星が全部消えた ──
          // 星は role=radio の集まりで、包んでいるグループは 24px を超えるが、
          // **グループは押す対象ではない**（星は 1 つずつ正確に押す）。
          // このチケットを起こした当の事例を、絞り込みで葬るところだった。
          const own = ancestor.querySelectorAll(SELECTOR).length;
          const ar = ancestor.getBoundingClientRect();
          if (own === 1 && ar.width >= min && ar.height >= min) {
            coveredByAncestor = true;
            break;
          }
        }
        ancestor = ancestor.parentElement;
      }
      if (coveredByAncestor) {
        excuse("外側が押される面", el);
        continue;
      }


      out.push({
        label: describe(el),
        w: Math.round(r.width * 10) / 10,
        h: Math.round(r.height * 10) / 10,
      });
    }
    return { out, excused };
  }, MIN);

test.describe("Tap target size (WCAG 2.5.8, 24x24)", () => {
  for (const density of densities) {
    test.describe(`density=${density}`, () => {
      for (const story of stories) {
        if (filter && !story.title.toLowerCase().includes(filter.toLowerCase())) continue;

        test(`${story.title} › ${story.name}`, async ({ page }) => {
          const url = `/iframe.html?id=${story.id}&viewMode=story&globals=theme:light;locale:en;density:${density}`;
          await page.emulateMedia({ reducedMotion: "reduce" });
          await page.goto(url, { waitUntil: "domcontentloaded" });
          await waitForStoryReady(page);

          const { out: undersized, excused } = await measure(page);

          // 除外は CI のログに残す。あとから「何を通したか」を数え直せるようにする。
          for (const [what, n] of Object.entries(excused)) {
            console.log(`TAP_TARGET_EXCUSED	${density}	${story.title} › ${story.name}	${n}	${what}`);
          }

          expect(
            undersized,
            `density=${density} で **${MIN}×${MIN} を下回る操作対象** が ${undersized.length} 件。\n` +
              `WCAG 2.5.8（Target Size Minimum・AA）の下限。**axe はこの基準を検査しない**ので、\n` +
              `ここで落とさないと誰も見ていない。\n\n` +
              undersized.map((t) => `  ${t.w}×${t.h}  ${t.label}`).join("\n"),
          ).toEqual([]);
        });
      }
    });
  }
});
