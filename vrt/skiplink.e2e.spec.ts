import { test, expect, type Page } from "@playwright/test";

// 本文へ飛ぶリンク（T418）。以前は無く、キーボードの人は毎ページ、ヘッダーと横の帯を Tab で通り抜けていた
const STORY_URL = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

const SKIPLINK_STORY = "components-navigation-utilities-skiplink--default";
const APPSHELL_STORY = "components-application-shell-appshell--with-sidebar";

const open = async (page: Page, id: string) => {
  await page.goto(STORY_URL(id));
  await page.waitForLoadState("networkidle");
  // 開いた直後の Tab で始める。クリックすると、Tab を始める位置がクリックした場所に移り、
  // スキップリンクを通り越す（実際の利用者は、ページに着いてそのまま Tab を押す）
};

const isShown = async (page: Page) => {
  const box = await page.locator(".wim-skip-link").boundingBox();
  return !!box && box.width > 1 && box.height > 1;
};

test.describe("SkipLink", () => {
  test("is hidden until focused, then the first Tab reveals it", async ({ page }) => {
    await open(page, SKIPLINK_STORY);
    expect(await isShown(page)).toBe(false);

    await page.keyboard.press("Tab");
    const link = page.getByRole("link", { name: "Skip to main content" });
    await expect(link).toBeFocused();
    expect(await isShown(page)).toBe(true);
  });

  test("Enter moves focus to the main content, skipping the navigation", async ({ page }) => {
    await open(page, SKIPLINK_STORY);
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await expect(page.locator("#skiplink-main")).toBeFocused();
    // URL の # は書き換えない
    expect(new URL(page.url()).hash).toBe("");
  });

  test("Tab past it without pressing Enter hides it and reaches the navigation", async ({ page }) => {
    await open(page, SKIPLINK_STORY);
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: "Home" })).toBeFocused();
    expect(await isShown(page)).toBe(false);
  });
});

test.describe("AppShell skip link", () => {
  test("the first Tab lands on the skip link and Enter moves focus to main", async ({ page }) => {
    await open(page, APPSHELL_STORY);
    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: "Skip to main content" })).toBeFocused();
    expect(await isShown(page)).toBe(true);

    await page.keyboard.press("Enter");
    await expect(page.getByRole("main")).toBeFocused();
  });
});
