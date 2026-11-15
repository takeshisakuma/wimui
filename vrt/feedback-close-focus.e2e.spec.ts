import { test, expect } from "@playwright/test";

/**
 * T392: 閉じるボタンを押したあと、フォーカスが文書（body）へ落ちないこと（Alert・Notification）。
 *
 * 閉じるボタンは、押すと部品ごと消える。以前は、フォーカスを置いたまま消えて、次の Tab がページの
 * 先頭から始まっていた。消える直前に、部品の外の、文書の順で 1 つ前の停止点へ渡す。
 * ストーリーには部品しか無いので、前後に番兵のボタンを足して、行き先を確かめる。
 */
const story = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

const addSentinels = (page: import("@playwright/test").Page) =>
  page.evaluate(() => {
    const make = (id: string) => {
      const b = document.createElement("button");
      b.id = id;
      b.textContent = id;
      return b;
    };
    document.body.prepend(make("before"));
    document.body.append(make("after"));
  });

for (const [name, id, root] of [
  ["Alert", "components-alerts-notifications-alert--with-close-button", ".wim-alert"],
  ["Notification", "components-alerts-notifications-notification--default", ".wim-notification"],
] as const) {
  test.describe(`${name}: focus after the close button removes the component`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(story(id));
      await page.waitForLoadState("networkidle");
      await expect(page.locator(root).first()).toBeVisible();
    });

    test("moves to the stop just before the component", async ({ page }) => {
      await addSentinels(page);
      await page.locator(root).first().getByRole("button", { name: "Close" }).focus();
      await page.keyboard.press("Enter");

      await expect(page.locator(root)).toHaveCount(0);
      await expect(page.locator("#before")).toBeFocused();
    });

    test("does not move focus when the close button is clicked without having focus", async ({ page }) => {
      await addSentinels(page);
      await page.locator("#after").focus();
      // フォーカスを移さずに押す（Safari のボタンは、クリックではフォーカスを受けない）
      await page.locator(root).first().getByRole("button", { name: "Close" }).dispatchEvent("click");

      await expect(page.locator(root)).toHaveCount(0);
      await expect(page.locator("#after")).toBeFocused();
    });
  });
}
