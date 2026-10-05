import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const STORY_URL =
  "/iframe.html?id=components-layout-toolbar--default&viewMode=story&globals=locale:en";

// Toolbar は、中のボタンが全部 Tab の停止点で、矢印でも動いた（T315）。停止点は 1 つにまとめる。
// Tab の行き先は「ツールバーから外れた」では見分けられないので、前後に番兵のボタンを足して名指しする。
test.describe("Toolbar", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(STORY_URL);
    await waitForStoryReady(page);
    await page.evaluate(() => {
      const make = (id: string) => {
        const button = document.createElement("button");
        button.id = id;
        button.textContent = id;
        return button;
      };
      document.body.prepend(make("before-toolbar"));
      document.body.append(make("after-toolbar"));
    });
  });

  test("is a single Tab stop in both directions", async ({ page }) => {
    const toolbar = page.getByRole("toolbar");
    await page.locator("#before-toolbar").focus();
    await page.keyboard.press("Tab");
    await expect(toolbar.getByRole("button", { name: "Edit" })).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(page.locator("#after-toolbar")).toBeFocused();
    await page.keyboard.press("Shift+Tab");
    await expect(toolbar.getByRole("button", { name: "Edit" })).toBeFocused();
    await page.keyboard.press("Shift+Tab");
    await expect(page.locator("#before-toolbar")).toBeFocused();
  });

  test("arrows walk every control, Home and End reach the ends, and Tab returns to the last one used", async ({ page }) => {
    const toolbar = page.getByRole("toolbar");
    await page.locator("#before-toolbar").focus();
    await page.keyboard.press("Tab");
    await page.keyboard.press("ArrowRight");
    await expect(toolbar.getByRole("button", { name: "Copy" })).toBeFocused();
    await page.keyboard.press("End");
    await expect(toolbar.getByRole("button", { name: "Clear" })).toBeFocused();
    await page.keyboard.press("ArrowRight");
    await expect(toolbar.getByRole("button", { name: "Edit" })).toBeFocused();
    await page.keyboard.press("End");
    await page.keyboard.press("Tab");
    await expect(page.locator("#after-toolbar")).toBeFocused();
    await page.keyboard.press("Shift+Tab");
    await expect(toolbar.getByRole("button", { name: "Clear" })).toBeFocused();
    await page.keyboard.press("Home");
    await expect(toolbar.getByRole("button", { name: "Edit" })).toBeFocused();
  });

  // ToggleGroup は自分でも矢印を処理して、端で折り返す。主軸の矢印をそちらへ渡すと、Tab の停止点が
  // 1 つのとき、後ろの Clear へキーボードで届かなくなる。
  test("a nested ToggleGroup is one control: the main axis passes through it, the cross axis moves inside", async ({ page }) => {
    const toolbar = page.getByRole("toolbar");
    const inGroup = () =>
      page.evaluate(() => !!document.activeElement?.closest(".wim-toggle-group, [role='radiogroup']"));
    await toolbar.getByRole("button", { name: "Delete" }).focus();
    await page.keyboard.press("ArrowRight");
    expect(await inGroup()).toBe(true);
    const first = await page.evaluate(() => document.activeElement?.textContent ?? document.activeElement?.getAttribute("aria-label"));

    await page.keyboard.press("ArrowDown");
    expect(await inGroup()).toBe(true);
    const second = await page.evaluate(() => document.activeElement?.textContent ?? document.activeElement?.getAttribute("aria-label"));
    expect(second).not.toBe(first);

    await page.keyboard.press("ArrowRight");
    await expect(toolbar.getByRole("button", { name: "Clear" })).toBeFocused();
    await page.keyboard.press("ArrowLeft");
    expect(await inGroup()).toBe(true);
    // 戻った先は、さっき中で移った項目（停止点が 2 つに増えていない）
    await page.keyboard.press("Tab");
    await expect(page.locator("#after-toolbar")).toBeFocused();
    await page.keyboard.press("Shift+Tab");
    expect(await inGroup()).toBe(true);
    await page.keyboard.press("Shift+Tab");
    await expect(page.locator("#before-toolbar")).toBeFocused();
  });
});
