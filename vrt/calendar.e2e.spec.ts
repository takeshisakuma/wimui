import { test, expect, type Page } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const url = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

/** 行き先を名指しするための番兵。body に着いただけでは、フォーカスを失ったのと区別できない。 */
const addSentinels = (page: Page) =>
  page.evaluate(() => {
    const make = (id: string) => {
      const b = document.createElement("button");
      b.id = id;
      b.textContent = id;
      return b;
    };
    document.body.prepend(make("before-calendar"));
    document.body.append(make("after-calendar"));
  });

const focusedDate = (page: Page) =>
  page.evaluate(() => document.activeElement?.getAttribute("data-date") ?? null);

/** "2024-1-15" の形を Date にして、日数の差を出す（月をまたいでも数えられる）。 */
const dayDiff = (from: string, to: string) => {
  const parse = (key: string) => {
    const [y, m, d] = key.split("-").map(Number);
    return Date.UTC(y, m - 1, d);
  };
  return Math.round((parse(to) - parse(from)) / 86_400_000);
};

// T304: 日は 42 個とも Tab の停止点で、矢印は効かなかった。
for (const id of [
  "components-data-indicators-calendar--default",
  "components-pickers-sliders-rangecalendar--default",
]) {
  test.describe(id, () => {
    test("the grid is one tab stop", async ({ page }) => {
      await page.goto(url(id));
      await waitForStoryReady(page);
      await addSentinels(page);

      await page.locator("#before-calendar").focus();
      await page.keyboard.press("Tab");
      await expect(page.getByRole("button", { name: "Previous month" })).toBeFocused();
      await page.keyboard.press("Tab");
      await expect(page.getByRole("button", { name: "Next month" })).toBeFocused();
      await page.keyboard.press("Tab");
      expect(await focusedDate(page)).not.toBeNull();
      await page.keyboard.press("Tab");
      await expect(page.locator("#after-calendar")).toBeFocused();
    });

    test("arrow keys move the focused day", async ({ page }) => {
      await page.goto(url(id));
      await waitForStoryReady(page);

      await page.locator('[data-calendar-day][tabindex="0"]').focus();
      const start = (await focusedDate(page))!;
      expect(start).not.toBeNull();

      const steps: Array<[string, number]> = [
        ["ArrowRight", 1],
        ["ArrowDown", 7],
        ["ArrowLeft", -1],
        ["ArrowUp", -7],
      ];
      let previous = start;
      for (const [key, days] of steps) {
        await page.keyboard.press(key);
        await expect.poll(async () => dayDiff(previous, (await focusedDate(page)) ?? previous)).toBe(days);
        previous = (await focusedDate(page))!;
      }
      expect(previous).toBe(start);

      // 5 週ぶん下へ進むと、必ず月をまたぐ。フォーカスは日の上に残る
      for (let i = 0; i < 5; i++) await page.keyboard.press("ArrowDown");
      await expect.poll(async () => dayDiff(start, (await focusedDate(page)) ?? start)).toBe(35);
      await expect(page.locator('[data-calendar-day][tabindex="0"]')).toHaveCount(1);
    });
  });
}

test.describe("DatePicker", () => {
  const STORY = "components-pickers-sliders-datepicker--default";

  test("opens onto a day, arrows move it, and Tab stays inside the panel", async ({ page }) => {
    await page.goto(url(STORY));
    await waitForStoryReady(page);
    const field = page.getByRole("combobox");
    await field.focus();
    await page.keyboard.press("Enter");
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();

    await expect.poll(() => focusedDate(page)).not.toBeNull();
    const start = (await focusedDate(page))!;
    await page.keyboard.press("ArrowRight");
    await expect.poll(async () => dayDiff(start, (await focusedDate(page)) ?? start)).toBe(1);

    // パネルの中の停止点は、月送りの 2 つと日の 1 つ。3 回の Tab で元の日へ戻る（外へ出ない）
    const day = await focusedDate(page);
    await page.keyboard.press("Tab");
    await expect(dialog.getByRole("button", { name: "Previous month" })).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(dialog.getByRole("button", { name: "Next month" })).toBeFocused();
    await page.keyboard.press("Tab");
    expect(await focusedDate(page)).toBe(day);

    await page.keyboard.press("Escape");
    await expect(dialog).not.toBeVisible();
    await expect(field).toBeFocused();
  });
});
