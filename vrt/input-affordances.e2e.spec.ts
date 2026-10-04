import { test, expect, type Page } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const url = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

/** 行き先を名指しするための番兵。body に着いただけでは、フォーカスを失ったのと区別できない。 */
const addSentinels = (page: Page) =>
  page.evaluate(() => {
    const make = (id: string) => {
      const b = document.createElement("button");
      b.id = id;
      b.textContent = id;
      return b;
    };
    document.body.prepend(make("before-field"));
    document.body.append(make("after-field"));
  });

// T311: 無効の入力欄の中に、押せて Tab で届くボタン（山形・時計）が残っていた。
test.describe("disabled fields keep no reachable button", () => {
  for (const id of [
    "components-selection-controls-combobox--disabled",
    "components-advanced-inputs-treeselect--disabled",
    "components-pickers-sliders-datepicker--disabled",
    "components-pickers-sliders-timepicker--disabled",
  ]) {
    test(id, async ({ page }) => {
      await page.goto(url(id));
      await waitForStoryReady(page);
      await addSentinels(page);

      // 対照: 入力欄の中にボタンが実在する（0 個なら、下の検査は何も見ていない）
      const buttons = page.locator("#storybook-root button");
      expect(await buttons.count()).toBeGreaterThan(0);
      for (const button of await buttons.all()) await expect(button).toBeDisabled();

      await page.locator("#before-field").focus();
      await page.keyboard.press("Tab");
      await expect(page.locator("#after-field")).toBeFocused();
    });
  }
});

// 有効のとき: 入力欄そのものが開閉のキーを持つ部品の山形は、押せるまま Tab の停止点から外す
// （入力欄 1 つに停止点が 2 つあり、2 つ目は「Perform action」としか読まれなかった）。
test.describe("the chevron is a pointer-only affordance", () => {
  for (const id of [
    "components-selection-controls-combobox--default",
    "components-advanced-inputs-treeselect--default",
    "components-pickers-sliders-datepicker--default",
  ]) {
    test(id, async ({ page }) => {
      await page.goto(url(id));
      await waitForStoryReady(page);
      await addSentinels(page);

      const field = page.locator("#storybook-root").getByRole("combobox").first();
      await field.focus();
      await page.keyboard.press("Tab");
      await expect(page.locator("#after-field")).toBeFocused();

      // 押せば開く
      await expect(field).toHaveAttribute("aria-expanded", "false");
      await page.locator("#storybook-root button[aria-hidden=true]").first().click();
      await expect(field).toHaveAttribute("aria-expanded", "true");
    });
  }
});
