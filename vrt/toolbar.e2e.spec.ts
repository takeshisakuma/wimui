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

const COLLAPSED_URL =
  "/iframe.html?id=components-layout-toolbar--collapsed&viewMode=story&globals=locale:en";

// 直下の子の数（グループ 2・区切り 2・ボタン 2）。畳むのは直下の子の単位
const CHILDREN = 6;

// T361: 狭い器では 1 行に保ち、入らない子を「…」の面へ移す。畳んだ子は DOM から外れるので、
// キーボードで「…」に届き、開いた先の同じコントロールへ矢印で進めることまで見る
test.describe('Toolbar overflow="collapse"', () => {
  const readRow = (page: import("@playwright/test").Page) =>
    page.evaluate(() => {
      const toolbar = document.querySelector<HTMLElement>(".wim-toolbar")!;
      const list = toolbar.querySelector<HTMLElement>(".wim-overflow-list")!;
      const row = list.firstElementChild!;
      const box = toolbar.getBoundingClientRect();
      return {
        // 行の子のうち「…」の包み（aria-expanded のボタンを持つ）を除いた数
        visible: Array.from(row.children).filter((el) => !el.querySelector(":scope > button[aria-expanded]")).length,
        hidden: Number(list.dataset.hiddenCount),
        spills: Array.from(row.children).some((el) => el.getBoundingClientRect().right > box.right + 0.5),
        // 折り返していれば、ある子の上端が別の子の下端より下に来る（区切りは余白のぶん上端がずれるので、
        // 上端の種類では数えない）
        wraps: (() => {
          const rects = Array.from(row.children).map((el) => el.getBoundingClientRect());
          return Math.max(...rects.map((r) => r.top)) >= Math.min(...rects.map((r) => r.bottom));
        })(),
      };
    });

  test.beforeEach(async ({ page }) => {
    await page.goto(COLLAPSED_URL);
    await waitForStoryReady(page);
    await page.evaluate(() => {
      const button = document.createElement("button");
      button.id = "before-toolbar";
      button.textContent = "before-toolbar";
      document.body.prepend(button);
    });
  });

  test("keeps one line and moves the children that do not fit behind the … button", async ({ page }) => {
    const row = await readRow(page);
    expect(row.visible + row.hidden).toBe(CHILDREN);
    expect(row.hidden).toBeGreaterThan(0);
    expect(row.spills).toBe(false);
    expect(row.wraps).toBe(false);
  });

  test("the … button is reached with the arrow keys, and the opened controls follow it", async ({ page }) => {
    const toolbar = page.getByRole("toolbar");
    const { hidden } = await readRow(page);
    await page.locator("#before-toolbar").focus();
    await page.keyboard.press("Tab");
    await expect(toolbar.getByRole("button", { name: "Edit" })).toBeFocused();

    await page.keyboard.press("End");
    const more = toolbar.getByRole("button", { name: `Show hidden tools (${hidden})` });
    await expect(more).toBeFocused();

    await page.keyboard.press("Enter");
    await expect(more).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("ArrowRight");
    // 行き先は面の中（測る層の写しではない）
    expect(
      await page.evaluate(() => !!document.activeElement?.closest("[aria-expanded] + ul") && !document.activeElement?.closest("[aria-hidden]")),
    ).toBe(true);
    // 最後の子（Clear）は、いちばん後ろから畳むので必ず面にある
    await page.keyboard.press("End");
    await expect(toolbar.getByRole("button", { name: "Clear" })).toBeFocused();

    await page.keyboard.press("Escape");
    await expect(more).toHaveAttribute("aria-expanded", "false");
    await expect(more).toBeFocused();
  });

  test("brings every child back when the container is wide enough", async ({ page }) => {
    await page.locator(".wim-toolbar").locator("xpath=..").evaluate((el) => {
      (el as HTMLElement).style.width = "800px";
    });
    await expect.poll(async () => (await readRow(page)).hidden).toBe(0);
    expect((await readRow(page)).visible).toBe(CHILDREN);
    await expect(page.getByRole("button", { name: /Show hidden tools/ })).toHaveCount(0);
  });
});
