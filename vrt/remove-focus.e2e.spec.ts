import { test, expect } from "@playwright/test";

/**
 * T392: 押すと自分の行ごと消える削除ボタンのあと、フォーカスが文書（body）へ落ちないこと。
 *
 * QueryBuilder のルール・グループの削除と、JsonViewer の項目の削除。以前は、フォーカスを置いたまま
 * ボタンが消えて、次の Tab がページの先頭から始まっていた。
 */
const story = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

const activeIsBody = (page: import("@playwright/test").Page) =>
  page.evaluate(() => document.activeElement === document.body || document.activeElement === null);

test.describe("Focus stays in the component after a button removes its own row", () => {
  test("QueryBuilder: removing everything, one press after another, never drops focus", async ({ page }) => {
    await page.goto(story("components-data-structures-querybuilder--predefined"));
    await page.waitForLoadState("networkidle");

    const root = page.locator(".wim-query-builder");
    const removes = root.getByRole("button", { name: /^Remove/ });
    expect(await removes.count()).toBeGreaterThan(1);

    // 最初の削除ボタンから、Enter を押し続ける。行き先は、隣の行（グループ）の削除ボタンか、
    // 隣が無ければ「ルールを追加」。削除ボタンが無くなるまで、フォーカスは部品の中に在る
    await removes.first().focus();
    for (let presses = 0; presses < 20 && (await removes.count()) > 0; presses++) {
      await expect(page.locator(":focus")).toHaveAccessibleName(/^Remove/);
      await page.keyboard.press("Enter");
      expect(await activeIsBody(page)).toBe(false);
      expect(await root.evaluate((el) => el.contains(document.activeElement))).toBe(true);
    }
    await expect(removes).toHaveCount(0);
    await expect(page.locator(":focus")).toHaveAccessibleName("Add rule");
  });

  test("QueryBuilder: removing a group moves focus to a button that is still there", async ({ page }) => {
    await page.goto(story("components-data-structures-querybuilder--predefined"));
    await page.waitForLoadState("networkidle");

    const root = page.locator(".wim-query-builder");
    const removeGroup = root.getByRole("button", { name: "Remove group" }).first();
    await removeGroup.focus();
    await page.keyboard.press("Enter");

    expect(await root.evaluate((el) => el.contains(document.activeElement))).toBe(true);
    await expect(page.locator(":focus")).toHaveRole("button");
  });

  test("JsonViewer: deleting items one after another keeps focus on a delete button", async ({ page }) => {
    await page.goto(story("components-data-structures-jsonviewer--editable"));
    await page.waitForLoadState("networkidle");

    const root = page.locator(".wim-json-viewer");
    const deletes = root.getByRole("button", { name: "Delete item" });
    const count = await deletes.count();
    expect(count).toBeGreaterThan(2);

    // 最後の行から消す（次の行が無い形）。直す前は、ここで body へ落ちた
    await deletes.last().focus();
    await page.keyboard.press("Enter");
    await expect(page.locator(":focus")).toHaveAccessibleName("Delete item");

    await page.keyboard.press("Enter");
    await expect(page.locator(":focus")).toHaveAccessibleName(/Delete item|Add item/);
    expect(await root.evaluate((el) => el.contains(document.activeElement))).toBe(true);
  });
});
