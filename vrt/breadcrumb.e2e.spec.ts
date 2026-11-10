import { test, expect, type Page } from "@playwright/test";

const URL = "/iframe.html?id=components-navigation-elements-breadcrumb--collapsed&viewMode=story&globals=locale:en";

const LEVELS = ["Home", "Women", "Shoes", "Running", "Trail running shoes"];

/** 見えている行（OverflowList の ol）の項目の文字と、畳んだ数 */
const readRow = (page: Page) =>
  page.evaluate(() => {
    const root = document.querySelector<HTMLElement>("nav .wim-overflow-list")!;
    const row = root.querySelector(":scope > ol")!;
    return {
      texts: Array.from(row.children).map((li) => (li.textContent ?? "").trim()),
      hidden: Number(root.dataset.hiddenCount),
      allLi: Array.from(row.children).every((el) => el.tagName === "LI"),
    };
  });

test.describe('Breadcrumb overflow="collapse"', () => {
  test("keeps the first level and the current page, and the hidden levels are reachable from the keyboard", async ({
    page,
  }) => {
    await page.goto(URL);
    await page.waitForLoadState("networkidle");

    const row = await readRow(page);
    expect(row.allLi).toBe(true);
    expect(row.hidden).toBeGreaterThan(0);
    expect(row.texts[0]).toBe("Home");
    expect(row.texts.at(-1)).toBe("Trail running shoes");
    // 「…」の li は文字を持たない。見えている階層 + 畳んだ数 = 全部
    expect(row.texts.filter((text) => text !== "").length + row.hidden).toBe(LEVELS.length);

    // Tab: 先頭のリンク → 「…」（測る層の写しでは止まらない）
    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: "Home" })).toBeFocused();
    await page.keyboard.press("Tab");
    const more = page.getByRole("button", { name: `Show hidden levels (${row.hidden})` });
    await expect(more).toBeFocused();
    await expect(more).toHaveAttribute("aria-expanded", "false");

    await page.keyboard.press("Enter");
    await expect(more).toHaveAttribute("aria-expanded", "true");
    const panel = page.locator(`#${(await more.getAttribute("aria-controls"))!.replace(/:/g, "\\:")}`);
    const links = panel.getByRole("link");
    await expect(links).toHaveCount(row.hidden);
    // 畳んだのは 2 つ目からの階層（順のまま）
    await expect(links.first()).toHaveText("Women");

    // 一覧の中へ Tab で入れる
    await page.keyboard.press("Tab");
    await expect(links.first()).toBeFocused();

    // Escape で閉じ、「…」へ戻る
    await page.keyboard.press("Escape");
    await expect(more).toHaveAttribute("aria-expanded", "false");
    await expect(more).toBeFocused();
  });

  test("moving focus out of the list closes it", async ({ page }) => {
    await page.goto(URL);
    await page.waitForLoadState("networkidle");
    const hidden = (await readRow(page)).hidden;
    const more = page.getByRole("button", { name: `Show hidden levels (${hidden})` });
    await more.click();
    await expect(more).toHaveAttribute("aria-expanded", "true");
    // 一覧のリンクを全部 Tab で通り過ぎ、その次（現在のページ）へ出ると閉じる
    for (let i = 0; i <= hidden; i++) await page.keyboard.press("Tab");
    await expect(page.locator('[aria-current="page"]').first()).toBeFocused();
    await expect(more).toHaveAttribute("aria-expanded", "false");
  });

  test("brings every level back when the container is wide enough", async ({ page }) => {
    await page.goto(URL);
    await page.waitForLoadState("networkidle");
    await page.locator("nav").locator("xpath=..").evaluate((el) => {
      (el as HTMLElement).style.width = "1000px";
    });
    await expect.poll(async () => (await readRow(page)).hidden).toBe(0);
    expect((await readRow(page)).texts).toEqual(LEVELS);
    await expect(page.getByRole("button", { name: /Show hidden levels/ })).toHaveCount(0);
  });
});
