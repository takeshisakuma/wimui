import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const STORY_URL =
  "/iframe.html?id=components-basic-inputs-phoneinput--default&viewMode=story&globals=locale:en";

// 国の選択は select-only の combobox。フォーカスを引き金に残したまま、キーを引き金で受ける。
// 単体テスト（fireEvent）では見えないものだけをここで見る: Space の click が keyup で起きること・
// 項目を押したときにフォーカスが動くこと・Tab の行き先。
test.describe("PhoneInput", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(STORY_URL);
    await waitForStoryReady(page);
  });

  test("keeps focus on the combobox and points at the active country", async ({ page }) => {
    const trigger = page.getByRole("combobox", { name: "Select country" });
    await trigger.focus();
    await page.keyboard.press("ArrowDown");
    await expect(page.getByRole("listbox")).toBeVisible();
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

  test("Space selects the active country and does not reopen the list", async ({ page }) => {
    const trigger = page.getByRole("combobox", { name: "Select country" });
    await trigger.focus();
    await page.keyboard.press("Space");
    await expect(page.getByRole("listbox")).toBeVisible();
    const before = ((await trigger.textContent()) ?? "").trim();

    await page.keyboard.press("End");
    const active = await trigger.getAttribute("aria-activedescendant");
    const pickedCode = ((await page.locator(`[id="${active}"] span`).last().textContent()) ?? "").trim();
    await page.keyboard.press("Space");

    await expect(page.getByRole("listbox")).toHaveCount(0);
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(pickedCode).not.toBe("");
    expect(pickedCode).not.toBe(before);
    await expect(trigger).toContainText(pickedCode);
    await expect(trigger).toBeFocused();
  });

  test("clicking a country leaves focus on the combobox", async ({ page }) => {
    const trigger = page.getByRole("combobox", { name: "Select country" });
    await trigger.click();
    await page.getByRole("option").nth(1).click();
    await expect(page.getByRole("listbox")).toHaveCount(0);
    await expect(trigger).toBeFocused();
  });

  test("Tab closes the list and moves to the number input", async ({ page }) => {
    const trigger = page.getByRole("combobox", { name: "Select country" });
    await trigger.focus();
    await page.keyboard.press("ArrowDown");
    await expect(page.getByRole("listbox")).toBeVisible();
    await page.keyboard.press("Tab");
    await expect(page.getByRole("listbox")).toHaveCount(0);
    await expect(page.getByRole("textbox")).toBeFocused();
  });
});
