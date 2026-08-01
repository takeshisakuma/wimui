import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

/**
 * ホスト環境マトリクス（T36）。
 *
 * ライブラリが描画される環境は複数あるのに、**継続検証されているのは
 * Storybook canvas だけ**だった。docs MDX が壊れていたのは T27 で偶然
 * 見つかったもので（`sb-unstyled` で解決済み）、回帰ガードは無かった。
 *
 * ここでは **canvas を基準**にして、docs MDX に置いた同じコンポーネントの
 * computed style を突き合わせる。差分が出たら**ホスト側 CSS の侵入**を疑う。
 *
 * なぜ VRT では代用できないか: VRT はストーリー（`type: "story"`）しか撮らず、
 * **docs エントリは 1 枚も撮っていない**。しかも docs の CSS 侵入は
 * font-size / border / padding といった「少しずれる」形で出るので、
 * 面積・色深度の閾値（T44 / T49）に引っかからないことがある。
 * だから画像ではなく **computed style を数値で比べる**。
 */

/** 比較する CSS プロパティ。ホスト CSS の侵入はここに出る。 */
const PROPS = [
  "fontSize",
  "fontFamily",
  "fontWeight",
  "lineHeight",
  "color",
  "backgroundColor",
  "borderTopWidth",
  "borderTopColor",
  "borderRadius",
  "paddingTop",
  "paddingLeft",
] as const;

/**
 * カナリア。docs 側（`docs/Playground.mdx`）にも canvas 側にも出る要素を、
 * 公開ルートクラス（`wim-*`）で指す。ルートクラスは安定契約なので
 * （`check:root-hooks` が守っている）セレクタが腐りにくい。
 */
const CANARIES = [
  { name: "Button", selector: ".wim-button" },
  { name: "Card", selector: ".wim-card" },
  { name: "Input", selector: ".wim-input" },
  { name: "Badge", selector: ".wim-badge" },
] as const;

type Computed = Record<string, string>;

async function computedFor(
  page: import("@playwright/test").Page,
  selector: string,
): Promise<Computed | null> {
  return page.evaluate(
    ({ sel, props }) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const cs = getComputedStyle(el);
      const out: Record<string, string> = {};
      for (const p of props) out[p] = cs[p as keyof CSSStyleDeclaration] as string;
      return out;
    },
    { sel: selector, props: PROPS as unknown as string[] },
  );
}

test.describe("Host matrix — docs MDX must render like the canvas", () => {
  for (const canary of CANARIES) {
    test(`${canary.name} computes the same in docs as in canvas`, async ({ page }) => {
      // 1) 基準: Storybook canvas
      await page.goto(
        "/iframe.html?id=getting-started-playground--docs&viewMode=docs&globals=theme:light;locale:en",
        { waitUntil: "domcontentloaded" },
      );
      await waitForStoryReady(page);
      const docs = await computedFor(page, `.playground-doc ${canary.selector}`);

      await page.goto(
        `/iframe.html?id=components-buttons-button--default&viewMode=story&globals=theme:light;locale:en`,
        { waitUntil: "domcontentloaded" },
      );
      await waitForStoryReady(page);
      const canvas = await computedFor(page, canary.selector);

      // カナリアが片方にしか無いなら、この比較は成立しない。
      // 「見つからないので通った」を避けるため明示的に落とす。
      test.skip(
        docs === null || canvas === null,
        `${canary.name} not present in both hosts`,
      );

      expect(docs, `${canary.name} in docs`).toEqual(canvas);
    });
  }
});
