import { test, expect, type Page } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const url = (id: string, density: string) =>
  `/iframe.html?id=${id}&viewMode=story&globals=locale:en;density:${density}`;

// 入力系の部品。既定のストーリーで、枠を持ついちばん外の箱（InputBase の殻）の高さを読む。
// PhoneInput は InputBase を使わず、自分の箱を持つ。
const SHELL: Record<string, string> = {
  "components-basic-inputs-phoneinput--default": ".wim-phone-input",
};
const INPUT_STORIES = [
  "components-basic-inputs-input--default",
  "components-basic-inputs-numberinput--default",
  "components-basic-inputs-passwordinput--default",
  "components-basic-inputs-searchinput--default",
  "components-basic-inputs-creditcardinput--default",
  "components-basic-inputs-phoneinput--default",
  "components-selection-controls-select--default",
  "components-selection-controls-multiselect--default",
  "components-selection-controls-combobox--default",
  "components-advanced-inputs-cascader--default",
  "components-advanced-inputs-treeselect--default",
  "components-pickers-sliders-datepicker--default",
  "components-pickers-sliders-daterangepicker--default",
  "components-pickers-sliders-timepicker--default",
  "components-pickers-sliders-colorinput--default",
  "components-pickers-sliders-colorpicker--default",
];

const heights = (page: Page, selector: string) =>
  page.evaluate(
    (sel) =>
      Array.from(document.querySelectorAll(`#storybook-root ${sel}`))
        .map((el) => Math.round(el.getBoundingClientRect().height * 10) / 10)
        .filter((h) => h > 0),
    selector,
  );

/** ボタンの sm / md / lg の高さ（高さの段）。 */
const ladder = async (page: Page, density: string) => {
  await page.goto(url("components-buttons-iconbutton--sizes", density));
  await waitForStoryReady(page);
  const found = await heights(page, ".wim-icon-button");
  expect(found).toHaveLength(3);
  return found;
};

// T313: 入力系は 44px（中身の下限 42px の外に、殻の枠 1px × 2 が足されていた）で、ボタンの md（42px）と
// 並べると 2px ずれた。ModelSelector は余白と行の高さだけで決まり、31.8 / 35 / 40.4px だった。
for (const density of ["comfortable", "compact"]) {
  test.describe(`control heights (${density})`, () => {
    test("every input shell is as tall as a medium button", async ({ page }) => {
      const [, md] = await ladder(page, density);
      const measured: Record<string, number | null> = {};
      for (const id of INPUT_STORIES) {
        await page.goto(url(id, density));
        await waitForStoryReady(page);
        // 殻が見つからなければ null（＝測れていない）。0 件を「揃っている」と数えない
        measured[id] = (await heights(page, SHELL[id] ?? ".wim-input-base"))[0] ?? null;
      }
      expect(measured).toEqual(Object.fromEntries(INPUT_STORIES.map((id) => [id, md])));
    });

    // 殻だけ 42px にして中身が縮むと、殻の上下は押しても入力欄に届かない。`input[type="color"]` は
    // 内容の高さが無いので 0px に潰れ、色の見本が消える（殻の高さだけ見ていた 1 回目は、これを通した）。
    test("the control inside fills the shell, minus its border", async ({ page }) => {
      const gaps: Record<string, number | null> = {};
      for (const id of INPUT_STORIES.filter((story) => !SHELL[story])) {
        await page.goto(url(id, density));
        await waitForStoryReady(page);
        gaps[id] = await page.evaluate(() => {
          const shell = document.querySelector("#storybook-root .wim-input-base");
          if (!shell || shell.children.length === 0) return null;
          // 殻の子には、左右のアイコンも並ぶ。いちばん高い子が、入力欄（か引き金）
          const inner = Math.max(...Array.from(shell.children).map((child) => child.getBoundingClientRect().height));
          return Math.round((shell.getBoundingClientRect().height - inner) * 10) / 10;
        });
      }
      // 枠 1px × 2
      expect(gaps).toEqual(Object.fromEntries(Object.keys(gaps).map((id) => [id, 2])));
    });

    test("ModelSelector sm / md / lg sit on the button height ladder", async ({ page }) => {
      const expected = await ladder(page, density);
      await page.goto(url("components-ai-modelselector--sizes", density));
      await waitForStoryReady(page);
      expect(await heights(page, ".wim-model-selector [aria-haspopup='listbox']")).toEqual(expected);
    });
  });
}

test("the ladder itself is 32 / 42 / 48 in comfortable and smaller in compact", async ({ page }) => {
  expect(await ladder(page, "comfortable")).toEqual([32, 42, 48]);
  const compact = await ladder(page, "compact");
  expect(compact[1]).toBeLessThan(42);
});
