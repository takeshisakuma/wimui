import { test, expect } from "@playwright/test";

/**
 * T402: 部品が描く削除ボタンを、使う側が項目ごと外したあと、フォーカスが文書（body）へ落ちないこと。
 *
 * Dashboard のウィジェット、ThreadList の会話、SwipeAction の行。直す前は、キーボードで押すと
 * フォーカスが body へ落ち、次の Tab がページの先頭から始まっていた。
 */
const story = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

const activeIsBody = (page: import("@playwright/test").Page) =>
  page.evaluate(() => document.activeElement === document.body || document.activeElement === null);

test.describe("Focus stays after the consumer removes the focused item", () => {
  test("Dashboard: removing a widget moves focus to the previous widget", async ({ page }) => {
    await page.goto(story("components-layout-dashboard--editable"));
    await page.waitForLoadState("networkidle");

    const removes = page.getByRole("button", { name: /^Remove / });
    await expect(removes).toHaveCount(5);
    await removes.nth(1).focus();
    await page.keyboard.press("Enter");

    expect(await activeIsBody(page)).toBe(false);
    await expect(page.locator(":focus")).toHaveAccessibleName("Remove Revenue");
    await expect(removes).toHaveCount(4);
  });

  test("ThreadList: deleting a conversation moves focus to the previous one", async ({ page }) => {
    await page.goto(story("components-ai-threadlist--with-actions"));
    await page.waitForLoadState("networkidle");

    const list = page.locator(".wim-thread-list");
    const deletes = list.getByRole("button", { name: "Delete conversation" });
    await expect(deletes).toHaveCount(4);
    await deletes.nth(1).focus();
    await page.keyboard.press("Enter");

    expect(await activeIsBody(page)).toBe(false);
    await expect(deletes).toHaveCount(3);
    expect(await list.locator("li").first().evaluate((el) => el.contains(document.activeElement))).toBe(true);
  });

  test("SwipeAction: deleting a row moves focus to the previous row", async ({ page }) => {
    await page.goto(story("components-utilities-swipeaction--full-swipe"));
    await page.waitForLoadState("networkidle");

    const rows = page.locator(".wim-swipe-action");
    await expect(rows).toHaveCount(4);
    const deletes = rows.getByRole("button", { name: "Delete" });
    await deletes.nth(1).focus();
    await page.keyboard.press("Enter");

    expect(await activeIsBody(page)).toBe(false);
    await expect(rows).toHaveCount(3);
    expect(await rows.first().evaluate((el) => el.contains(document.activeElement))).toBe(true);
  });
});
