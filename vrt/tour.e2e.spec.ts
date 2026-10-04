import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const STORY_URL =
  "/iframe.html?id=components-overlays-tour--default&viewMode=story&globals=locale:en";

// T310: ツアーを始めても、フォーカスは開始のボタンに残り、Escape も効かなかった。
test.describe("Tour", () => {
  test("opens as a dialog with focus on Next, and Escape returns to the opener", async ({ page }) => {
    await page.goto(STORY_URL);
    await waitForStoryReady(page);

    const opener = page.locator('#storybook-root button:not([id^="tour-step"] button)').first();
    await opener.focus();
    await page.keyboard.press("Enter");

    const dialog = page.getByRole("dialog");
    // 入れ物は箱を持たない（中身は全部 fixed）ので、見えているかは吹き出しで確かめる
    await expect(dialog).toHaveCount(1);
    await expect(page.locator(".wim-tour")).toBeVisible();
    await expect(dialog.getByRole("button", { name: "Next" })).toBeFocused();

    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog")).toHaveCount(0);
    await expect(opener).toBeFocused();
  });

  test("Tab stays inside the tour, and the steps can be walked from the keyboard", async ({ page }) => {
    await page.goto(STORY_URL);
    await waitForStoryReady(page);

    const opener = page.locator('#storybook-root button:not([id^="tour-step"] button)').first();
    await opener.focus();
    await page.keyboard.press("Enter");
    const dialog = page.getByRole("dialog");
    const next = dialog.getByRole("button", { name: "Next" });
    await expect(next).toBeFocused();

    // 停止点は「進む」と「閉じる（マスク）」の 2 つ。2 回の Tab で戻ってくる（外へ出ない）
    await page.keyboard.press("Tab");
    await expect(dialog.getByRole("button", { name: "Dismiss tour" })).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(next).toBeFocused();

    // 次のステップへ。フォーカスは進むボタンに残り、戻るが現れる
    await page.keyboard.press("Enter");
    await expect(dialog.getByRole("button", { name: "Back" })).toBeVisible();
    await expect(dialog.getByRole("button", { name: /Next|Finish/ })).toBeFocused();

    // 戻ると「戻る」が消える。フォーカスは吹き出しの中に残る
    await page.keyboard.press("Shift+Tab");
    await expect(dialog.getByRole("button", { name: "Back" })).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(dialog.getByRole("button", { name: "Back" })).toHaveCount(0);
    await expect(next).toBeFocused();
  });
});
