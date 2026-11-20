import { test, expect, type Page } from "@playwright/test";

/**
 * T420: DataGrid を Tab で通り抜けるとき、止まるのは「いまのセル」とその中身だけ。
 *
 * 以前は表の本体（`<table>`）も止まり先で、セルの中のチェックボックス・ボタン・リンクも全部 Tab に
 * 残っていた（IntakeQueue の 8 行を通り抜けるのに Tab 35 回）。axe は検出しない（止まり先が多いことは
 * 違反ではない）ので、表の前後に番兵のボタンを置き、Tab の行き先で数える。
 */
const story = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

/** 表の前後に番兵を置き、前の番兵から Tab で後ろの番兵に着くまでの回数を数える */
async function tabsThroughGrid(page: Page): Promise<number> {
  await page.evaluate(() => {
    const grid = document.querySelector('[role="grid"]')!;
    const before = Object.assign(document.createElement("button"), { id: "sentinel-before", textContent: "before" });
    const after = Object.assign(document.createElement("button"), { id: "sentinel-after", textContent: "after" });
    grid.parentElement!.insertBefore(before, grid);
    grid.after(after);
  });
  await page.locator("#sentinel-before").focus();
  for (let i = 1; i <= 60; i++) {
    await page.keyboard.press("Tab");
    if (await page.locator("#sentinel-after").evaluate((el) => el === document.activeElement)) return i - 1;
  }
  throw new Error("Tab never reached the sentinel after the grid");
}

test.describe("DataGrid: one tab stop per grid", () => {
  for (const [id, expected] of [
    ["components-data-structures-datagrid--default", 1],
    ["components-data-structures-datagrid--with-actions", 1],
    // 見出しのいまのセル（全選択）と、その中の全選択のチェックボックス
    ["components-data-structures-datagrid--with-selection", 2],
    ["patterns-admin--intake-queue-default", 2],
  ] as const) {
    test(`${id.split("--")[1]}: ${expected} stop(s) between the sentinels`, async ({ page }) => {
      await page.goto(story(id));
      await page.waitForLoadState("networkidle");
      await expect(page.getByRole("grid")).toBeVisible();
      expect(await tabsThroughGrid(page)).toBe(expected);
    });
  }

  test("End reaches the action column, and Tab enters the current cell", async ({ page }) => {
    await page.goto(story("components-data-structures-datagrid--with-actions"));
    await page.waitForLoadState("networkidle");
    const grid = page.getByRole("grid");
    await grid.locator('[tabindex="0"]').first().focus();
    // 1 行目の最後の列（操作のボタンがあるセル）へ
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("End");
    const current = grid.locator('[data-row="0"][tabindex="0"]');
    await expect(current).toBeFocused();
    // そのセルの中のボタンには Tab で入れる。ほかの行のボタンには入らない
    await page.keyboard.press("Tab");
    const focusedInside = await current.evaluate((cell) => cell.contains(document.activeElement) && cell !== document.activeElement);
    expect(focusedInside).toBe(true);
  });

  test("with a selection column, ArrowRight moves off the checkbox column in one press and End reaches the last column", async ({ page }) => {
    await page.goto(story("components-data-structures-datagrid--with-selection"));
    await page.waitForLoadState("networkidle");
    const grid = page.getByRole("grid");
    const headers = await grid.locator('thead [role="columnheader"]').count();
    await grid.locator('[tabindex="0"]').first().focus();
    await page.keyboard.press("ArrowRight");
    await expect(grid.locator('[data-row="-1"][data-col="0"]')).toBeFocused();
    await page.keyboard.press("End");
    // 選択の列（-1）を除いた最後の列は headers - 2
    await expect(grid.locator(`[data-row="-1"][data-col="${headers - 2}"]`)).toBeFocused();
  });
});
