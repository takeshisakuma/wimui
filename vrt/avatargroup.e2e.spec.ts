import { test, expect, type Page } from "@playwright/test";

const URL = "/iframe.html?id=components-data-indicators-avatargroup--collapsed&viewMode=story&globals=locale:en";

const PEOPLE = 8;

/** 見えている行のアバターの数と、畳んだ数 */
const readRow = (page: Page) =>
  page.evaluate(() => {
    const root = document.querySelector<HTMLElement>(".wim-avatar-group")!;
    const row = root.firstElementChild!;
    const rootRect = root.getBoundingClientRect();
    return {
      avatars: row.querySelectorAll(":scope > .wim-avatar").length,
      hidden: Number(root.dataset.hiddenCount),
      spills: Array.from(row.children).some((el) => el.getBoundingClientRect().right > rootRect.right + 0.5),
    };
  });

test.describe('AvatarGroup overflow="collapse"', () => {
  test("shows as many as fit, and the hidden people are reachable from the keyboard by name", async ({ page }) => {
    await page.goto(URL);
    await page.waitForLoadState("networkidle");

    const row = await readRow(page);
    expect(row.avatars + row.hidden).toBe(PEOPLE);
    expect(row.hidden).toBeGreaterThan(0);
    expect(row.spills).toBe(false);

    // Tab の最初の停止点は「+N」（アバターは止まらない・測る層の写しでも止まらない）
    await page.keyboard.press("Tab");
    const more = page.getByRole("button", { name: `+${row.hidden} Show everyone` });
    await expect(more).toBeFocused();

    await page.keyboard.press("Enter");
    await expect(more).toHaveAttribute("aria-expanded", "true");
    const items = page.locator(".wim-avatar-group [aria-expanded] + ul > li");
    await expect(items).toHaveCount(row.hidden);
    // 並ぶのは、行の後ろから畳んだ人（順のまま）。最後は Haruto Sato
    await expect(items.last()).toHaveText(/Haruto Sato$/);

    await page.keyboard.press("Escape");
    await expect(more).toHaveAttribute("aria-expanded", "false");
    await expect(more).toBeFocused();
  });

  test("overlapping avatars are measured with their negative margin (no early folding)", async ({ page }) => {
    await page.goto(URL);
    await page.waitForLoadState("networkidle");
    // 行の右端と器の右端の間に、もう 1 人分（重なりを引いた幅）が入る余地を残していない
    const room = await page.evaluate(() => {
      const root = document.querySelector<HTMLElement>(".wim-avatar-group")!;
      const row = root.firstElementChild!;
      const last = row.lastElementChild!.getBoundingClientRect();
      const avatars = row.querySelectorAll<HTMLElement>(":scope > .wim-avatar");
      const step = avatars[1].getBoundingClientRect().left - avatars[0].getBoundingClientRect().left;
      return { free: root.getBoundingClientRect().right - last.right, step };
    });
    expect(room.free).toBeLessThan(room.step);
  });

  test("brings everyone back when the container is wide enough", async ({ page }) => {
    await page.goto(URL);
    await page.waitForLoadState("networkidle");
    await page.locator(".wim-avatar-group").locator("xpath=..").evaluate((el) => {
      (el as HTMLElement).style.width = "600px";
    });
    await expect.poll(async () => (await readRow(page)).hidden).toBe(0);
    expect((await readRow(page)).avatars).toBe(PEOPLE);
    await expect(page.getByRole("button")).toHaveCount(0);
  });
});
