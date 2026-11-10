import { test, expect, type Page } from "@playwright/test";

const STORY_URL = (id: string) =>
  `/iframe.html?id=components-layout-overflowlist--${id}&viewMode=story&globals=locale:en`;

const TOTAL_AMENITIES = 8;

/**
 * 1 つの並びについて、見えている項目の数・「+N」の N・項目が器からはみ出していないかを読む。
 * 見えている項目は「見えている行の直下で、『+N』でない要素」。「+N」は
 * ボタンそのものか、ボタンを包む要素（Popover は引き金を 1 枚包む）。項目はボタンを持たない。
 */
const readRow = (page: Page, rootSelector: string) =>
  page.evaluate((selector) => {
    const root = document.querySelector<HTMLElement>(selector)!;
    // 根の最初の子が見えている行、2 つ目が測る層（aria-hidden）
    const children = Array.from(root.firstElementChild!.children) as HTMLElement[];
    const isTrigger = (el: HTMLElement) => el.matches("button") || el.querySelector("button") !== null;
    const visible = children.filter((el) => !isTrigger(el));
    const trigger = children.find(isTrigger);
    const rootRect = root.getBoundingClientRect();
    const overflowsRow = children.some((el) => el.getBoundingClientRect().right > rootRect.right + 0.5);
    return {
      visible: visible.length,
      // 「+3」のあとに、画面に出さない文が続く。数を返さない「+N」（アイコンだけ）は NaN
      plus: trigger ? Number(/\+(\d+)/.exec(trigger.textContent ?? "")?.[1]) : 0,
      hiddenAttr: Number(root.dataset.hiddenCount),
      overflowsRow,
    };
  }, rootSelector);

test.describe("OverflowList", () => {
  test("in every container width, visible items plus the +N count add up to all items, and nothing spills out", async ({
    page,
  }) => {
    await page.goto(STORY_URL("container-widths"));
    await page.waitForLoadState("networkidle");

    const counts: number[] = [];
    for (const width of ["640px", "320px", "180px"]) {
      const row = await readRow(page, `[data-testid="overflow-list-${width}"] .wim-overflow-list`);
      expect(row.visible + row.plus, width).toBe(TOTAL_AMENITIES);
      expect(row.plus, width).toBe(row.hiddenAttr);
      expect(row.overflowsRow, width).toBe(false);
      counts.push(row.visible);
    }
    // 狭いほど、見える数は増えない
    expect(counts[0]).toBeGreaterThanOrEqual(counts[1]);
    expect(counts[1]).toBeGreaterThanOrEqual(counts[2]);
    expect(counts[2]).toBeLessThan(TOTAL_AMENITIES);

    // 幅を測るための写し（全項目を並べた幅）で、ページが横に伸びない
    const pageOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(pageOverflow).toBeLessThanOrEqual(0);
  });

  test("recomputes when the container is resized, and brings items back when it grows", async ({ page }) => {
    await page.goto(STORY_URL("default"));
    await page.waitForLoadState("networkidle");
    const container = page.locator(".wim-overflow-list").first().locator("xpath=..");

    const seen: number[] = [];
    for (const width of [600, 240, 150, 420, 1000]) {
      await container.evaluate((el, w) => {
        (el as HTMLElement).style.width = `${w}px`;
      }, width);
      // ResizeObserver の通知と再描画を待つ。幅を変えた直後の古い姿も「見えている数 + N = 全部」を
      // 満たすので、それだけを待つと数え直す前に抜ける（10 回中 4 回、1000px で 1 個のまま読んだ）。
      // 2 フレームを挟んで読んだ値が変わらなくなるまで待つ
      const settled = async () => {
        const before = await readRow(page, ".wim-overflow-list");
        await page.evaluate(
          () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))),
        );
        const after = await readRow(page, ".wim-overflow-list");
        return after.visible === before.visible && after.plus === before.plus ? after : null;
      };
      let row: Awaited<ReturnType<typeof readRow>> | null = null;
      await expect
        .poll(async () => {
          row = await settled();
          return row !== null && row.visible + row.plus === TOTAL_AMENITIES && !row.overflowsRow;
        }, { message: `${width}px` })
        .toBe(true);
      seen.push(row!.visible);
    }
    // 150px では畳まれ、1000px では全部戻って「+N」が消える
    expect(seen[2]).toBeLessThan(TOTAL_AMENITIES);
    expect(seen[4]).toBe(TOTAL_AMENITIES);
    await expect(page.getByRole("button", { name: /Show all amenities/ })).toHaveCount(0);
  });

  test("the folded items are reachable from the keyboard through the +N button", async ({ page }) => {
    await page.goto(STORY_URL("default"));
    await page.waitForLoadState("networkidle");

    const row = await readRow(page, ".wim-overflow-list");
    expect(row.plus).toBeGreaterThan(0);

    // 測る層の写しは Tab で止まらない。最初の停止点は「+N」
    await page.keyboard.press("Tab");
    const trigger = page.getByRole("button", { name: `+${row.plus} Show all amenities` });
    await expect(trigger).toBeFocused();

    await page.keyboard.press("Enter");
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    // 開いた先に並ぶのは、畳んだ項目そのもの（数も一致する）
    const hiddenNames = await page.evaluate(() => {
      const layer = document.querySelector(".wim-overflow-list [aria-hidden='true'] > div")!;
      const all = Array.from(layer.children).slice(0, -1).map((el) => el.textContent!.trim());
      const shown = Array.from(document.querySelector(".wim-overflow-list")!.firstElementChild!.children)
        .filter((el) => !el.querySelector("button") && !el.matches("button"))
        .map((el) => el.textContent!.trim());
      return all.filter((name) => !shown.includes(name));
    });
    expect(hiddenNames).toHaveLength(row.plus);
    for (const name of hiddenNames) {
      await expect(dialog.getByText(name, { exact: true })).toBeVisible();
    }
  });

  test("collapsing from the start keeps the current folder, and the hidden folders are links the keyboard reaches", async ({
    page,
  }) => {
    await page.goto(STORY_URL("collapse-from-start"));
    await page.waitForLoadState("networkidle");

    const row = await readRow(page, ".wim-overflow-list");
    // 「…」は数を出さないので、畳んだ数は data-hidden-count から読む
    const hidden = row.hiddenAttr;
    expect(row.visible + hidden).toBe(5);
    expect(hidden).toBeGreaterThan(0);
    // 残るのは最後（今いるフォルダ）
    await expect(page.locator('.wim-overflow-list > :not([aria-hidden="true"]) [aria-current="page"]')).toHaveText(
      "Medical receipts",
    );

    await page.keyboard.press("Tab");
    const trigger = page.getByRole("button", { name: `Hidden folders (${hidden})` });
    await expect(trigger).toBeFocused();
    await page.keyboard.press("Enter");
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();

    const links = dialog.getByRole("link");
    await expect(links).toHaveCount(hidden);
    // 先頭から畳むので、開いた先の最初は一番上の階層
    await expect(links.first()).toHaveText("Shared drive");
    // フォーカスを、開いた先のリンクまで Tab で運べる
    for (let i = 0; i < 4; i++) {
      if (await links.first().evaluate((el) => el === document.activeElement)) break;
      await page.keyboard.press("Tab");
    }
    await expect(links.first()).toBeFocused();
  });
});
