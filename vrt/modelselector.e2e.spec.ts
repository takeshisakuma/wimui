import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const STORY_URL =
  "/iframe.html?id=components-ai-modelselector--default&viewMode=story&globals=locale:en";

// 引き金は select-only の combobox。フォーカスを引き金に残したまま、キーを引き金で受ける。
// 単体テスト（fireEvent）では見えないものだけをここで見る: Space の click が keyup で起きること・
// 項目を押したときにフォーカスが動くこと。
test.describe("ModelSelector", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(STORY_URL);
    await waitForStoryReady(page);
  });

  test("keeps focus on the combobox and points at the active option", async ({ page }) => {
    const trigger = page.getByRole("combobox");
    await trigger.focus();
    await page.keyboard.press("ArrowDown");
    const listbox = page.getByRole("listbox");
    await expect(listbox).toBeVisible();
    await expect(trigger).toBeFocused();

    const before = await trigger.getAttribute("aria-activedescendant");
    expect(before).toBeTruthy();
    await page.keyboard.press("ArrowDown");
    const after = await trigger.getAttribute("aria-activedescendant");
    expect(after).toBeTruthy();
    expect(after).not.toBe(before);
    await expect(page.locator(`[id="${after}"]`)).toHaveAttribute("role", "option");
    await expect(trigger).toBeFocused();
  });

  test("Space selects the active option and does not reopen the list", async ({ page }) => {
    const trigger = page.getByRole("combobox");
    await trigger.focus();
    await page.keyboard.press("Space");
    await expect(page.getByRole("listbox")).toBeVisible();
    const before = (await trigger.textContent()) ?? "";

    await page.keyboard.press("ArrowDown");
    const active = await trigger.getAttribute("aria-activedescendant");
    const picked = (await page.locator(`[id="${active}"] span span span`).first().textContent()) ?? "";
    await page.keyboard.press("Space");

    await expect(page.getByRole("listbox")).toHaveCount(0);
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await expect(trigger).toContainText(picked);
    expect(picked).not.toBe("");
    expect(before).not.toContain(picked);
    await expect(trigger).toBeFocused();
  });

  test("clicking an option leaves focus on the combobox", async ({ page }) => {
    const trigger = page.getByRole("combobox");
    await trigger.click();
    await page.getByRole("option").nth(1).click();
    await expect(page.getByRole("listbox")).toHaveCount(0);
    await expect(trigger).toBeFocused();
  });

  // 「引き金からフォーカスが外れた」だけでは足りない。スクロールするリストは Chrome で Tab の停止点に
  // なるので、Tab がリストへ入り、リストが消えてフォーカスが body へ落ちても通ってしまう
  // （最初の版がそうだった。PhoneInput の同じテストが落ちて気づいた）。次の停止点まで見る。
  test("Tab closes the list and moves to the next control", async ({ page }) => {
    await page.goto(STORY_URL.replace("--default", "--sizes"));
    await waitForStoryReady(page);
    const triggers = page.getByRole("combobox");
    await triggers.nth(0).focus();
    await page.keyboard.press("ArrowDown");
    await expect(page.getByRole("listbox")).toBeVisible();
    await page.keyboard.press("Tab");
    await expect(page.getByRole("listbox")).toHaveCount(0);
    await expect(triggers.nth(1)).toBeFocused();
  });
});
