import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const url = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

// T432 で面を body の影の箱に描くようにした部品は、引き金の位置を読んで影の箱を fixed で置く。
// 開いたまま引き金の上の中身が伸びると（スクロールせずに引き金が動くと）、以前は面が元の位置に残り、
// 引き金に重なった（Select で 44px 重なった）。T344（Affix・Tour）と同じ形。observeMove で引き金の
// 動きを見張り、測り直す。
const CASES = [
  { name: "Select", id: "components-selection-controls-select--with-label" },
  { name: "MultiSelect", id: "components-selection-controls-multiselect--default" },
  { name: "Combobox", id: "components-selection-controls-combobox--default" },
  { name: "PhoneInput", id: "components-basic-inputs-phoneinput--default" },
  { name: "ModelSelector", id: "components-ai-modelselector--default" },
  { name: "Cascader", id: "components-advanced-inputs-cascader--default" },
  { name: "DatePicker", id: "components-pickers-sliders-datepicker--default" },
  { name: "TreeSelect", id: "components-advanced-inputs-treeselect--default" },
  { name: "Menubar", id: "components-navigation-elements-menubar--default" },
];

const OPENER = '#storybook-root [role="combobox"], #storybook-root [aria-haspopup]';

test.describe("Panels in the body follow the trigger when content above grows (1280px)", () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  for (const { name, id } of CASES) {
    test(`${name}: the gap between the trigger and the panel stays the same`, async ({ page }) => {
      await page.goto(url(id));
      await waitForStoryReady(page);

      // 引き金は押す前に要素そのものを掴む（状態で引く locator は、開いた瞬間に別の要素を指す）
      const trigger = (await page.locator(OPENER).first().elementHandle())!;
      await trigger.click();
      await expect.poll(() => trigger.getAttribute("aria-expanded")).toBe("true");

      const gap = () =>
        trigger.evaluate((t) => {
          const panel = document.getElementById(t.getAttribute("aria-controls") ?? "");
          if (!panel) return null;
          // 面の外枠（影の箱の直下）で測る。aria-controls の先が面の中の一覧のときもある
          const box = panel.closest('[class*="_anchor_"] > *') ?? panel;
          // 引き金が動いて余白が変わると、面は上下の向きを変えることがある（DatePicker は上へ開き直す）。
          // 向きごとに、引き金と面の向かい合う辺の間隔を測る
          const r = box.getBoundingClientRect();
          const tr = t.getBoundingClientRect();
          return box.getAttribute("data-side") === "top" ? Math.round(tr.top - r.bottom) : Math.round(r.top - tr.bottom);
        });

      // 開くアニメーションが終わって止まるまで待ってから、間隔を測る
      let before: number | null = null;
      await expect
        .poll(async () => {
          const a = await gap();
          await page.waitForTimeout(100);
          const b = await gap();
          before = b;
          return a !== null && a === b;
        })
        .toBe(true);

      // スクロールせずに、引き金の上へ 100px の中身を差し込む
      const moved = await trigger.evaluate((t) => {
        const top = t.getBoundingClientRect().top;
        const spacer = document.createElement("div");
        spacer.style.height = "100px";
        document.getElementById("storybook-root")!.prepend(spacer);
        return Math.round(t.getBoundingClientRect().top - top);
      });
      // 対照: 引き金が下へ動いた
      expect(moved).toBeGreaterThan(0);
      // 面は引き金についてくる（間隔が変わらない）
      await expect.poll(gap).toBe(before);
    });
  }
});
