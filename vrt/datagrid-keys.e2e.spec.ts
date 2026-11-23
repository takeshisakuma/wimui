import { test, expect } from "@playwright/test";

/**
 * T423: 行が多い表を、キーボードだけでページ単位に移り、まとめて選べること。
 * 動く量は実際の描画の高さで決まるので、単体テスト（高さが 0）では確かめられない。
 */
const story = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

test.describe("DataGrid: page and selection keys", () => {
  test("PageDown moves more than one row and keeps the cell in view", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 420 });
    await page.goto(story("components-data-structures-datagrid--sticky-header"));
    await page.waitForLoadState("networkidle");
    const first = page.locator('[data-row="0"][data-col="0"]');
    await first.focus();
    await page.keyboard.press("PageDown");
    const row = await page.evaluate(() => Number((document.activeElement as HTMLElement).dataset.row));
    expect(row).toBeGreaterThan(1);
    await expect(page.locator(`[data-row="${row}"][data-col="0"]`)).toBeInViewport();
    await page.keyboard.press("PageUp");
    await expect(first).toBeFocused();
  });

  test("Shift+Space and Ctrl+A select rows without moving focus", async ({ page }) => {
    await page.goto(story("components-data-structures-datagrid--with-selection"));
    await page.waitForLoadState("networkidle");
    const cell = page.locator('[data-row="1"][data-col="0"]');
    await cell.focus();

    await page.keyboard.press("Shift+Space");
    await expect(page.locator('[data-row="1"][data-col="-1"] input')).toBeChecked();
    await expect(cell).toBeFocused();

    await page.keyboard.press("Control+a");
    await expect(page.locator('[data-row="-1"][data-col="-1"] input')).toBeChecked();
    await expect(cell).toBeFocused();
    expect(await page.evaluate(() => getSelection()?.toString() ?? "")).toBe("");
  });

  test("a rowHeader column exposes each row's name as a rowheader (T422)", async ({ page }) => {
    await page.goto(story("components-data-structures-datagrid--with-selection"));
    await page.waitForLoadState("networkidle");
    const headers = page.getByRole("rowheader");
    await expect(headers).toHaveCount(5);
    await expect(headers.first()).toHaveText("Priya Nair");
    await expect(page.getByRole("row").nth(1).getByRole("rowheader")).toHaveCount(1);
  });

  test('type="radio": one row at a time, and arrow keys move cells without changing it', async ({ page }) => {
    await page.goto(story("components-data-structures-datagrid--with-radio-selection"));
    await page.waitForLoadState("networkidle");
    const radios = page.getByRole("radio");
    await expect(radios).toHaveCount(5);

    await radios.nth(4).click();
    await radios.nth(1).click();
    await expect(radios.nth(1)).toBeChecked();
    await expect(page.locator("input[type=radio]:checked")).toHaveCount(1);

    // ネイティブのラジオは矢印で選択が動くが、表の中では矢印はセルの移動
    await radios.nth(1).focus();
    await page.keyboard.press("ArrowDown");
    await expect(page.locator('[data-row="2"][data-col="-1"]')).toBeFocused();
    await expect(radios.nth(1)).toBeChecked();

    await radios.nth(4).click();
    await radios.nth(4).focus();
    await page.keyboard.press("ArrowDown");
    await expect(radios.nth(4)).toBeChecked();
    await expect(page.locator("input[type=radio]:checked")).toHaveCount(1);
  });
});
