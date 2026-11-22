import { test, expect, type Page } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const url = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

// T432 の 7・8 部品目: DatePicker と TreeSelect の面を body の影の箱に描く。どちらの面も role="dialog" で、
// 開くと FocusTrap がフォーカスを面の中に閉じ込めるので、DOM の位置が変わっても Tab の順は壊れない。
// ここでは「切れない」ことと、「Dialog の中で FocusTrap が入れ子になっても、フォーカスが面から漏れない」
// ことを確かめる。

const itemsCovered = (page: Page, triggerSelector: string) =>
  page.evaluate((sel) => {
    const t = document.querySelector(sel);
    const panel = t && document.getElementById(t.getAttribute("aria-controls") ?? "");
    if (!panel) return { checked: 0, covered: ["no panel"] };
    const covered: string[] = [];
    let checked = 0;
    // 木の項目・暦の日付（暦の日付は、DatePicker のコードが使う data-calendar-day の印で引く）
    for (const el of panel.querySelectorAll<HTMLElement>('[role="treeitem"], [data-calendar-day]')) {
      const r = el.getBoundingClientRect();
      if (r.height < 2 || r.bottom <= 0 || r.top >= window.innerHeight) continue;
      // 面の中のスクロールで隠れている項目は数えない
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      let hidden = false;
      for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
        const s = getComputedStyle(p);
        if (/(auto|scroll|hidden)/.test(s.overflowY + s.overflowX)) {
          const b = p.getBoundingClientRect();
          if (cx < b.left || cx >= b.right || cy < b.top || cy >= b.bottom) hidden = true;
        }
        if (p === panel) break;
      }
      if (hidden) continue;
      checked += 1;
      const hit = document.elementFromPoint(cx, cy);
      if (!hit || !(el === hit || el.contains(hit))) covered.push((el.textContent ?? "").trim().slice(0, 20));
    }
    return { checked, covered };
  }, triggerSelector);

const CASES = [
  { name: "DatePicker", id: "components-pickers-sliders-datepicker--default", trigger: '#storybook-root [aria-controls], #storybook-root [aria-haspopup="dialog"]' },
  { name: "TreeSelect", id: "components-advanced-inputs-treeselect--default", trigger: '#storybook-root [aria-haspopup]' },
];

test.describe("Focus-trapping panels are drawn outside an overflow: hidden box (1280px)", () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  for (const { name, id, trigger } of CASES) {
    test(`${name}: every item can be clicked when the story sits in a clipping box`, async ({ page }) => {
      await page.goto(url(id));
      await waitForStoryReady(page);
      await page.evaluate(() => {
        const root = document.getElementById("storybook-root")!;
        const box = document.createElement("div");
        box.style.cssText = "position:relative;overflow:hidden;padding:16px";
        root.parentElement!.insertBefore(box, root);
        box.appendChild(root);
      });
      const handle = (await page.locator(trigger).first().elementHandle())!;
      await handle.click();
      await expect.poll(() => handle.getAttribute("aria-expanded")).toBe("true");

      const result = await itemsCovered(page, '[aria-expanded="true"][aria-controls]');
      // 対照: 項目を数えた
      expect(result.checked).toBeGreaterThan(0);
      expect(result.covered, "items clipped or covered").toEqual([]);
    });
  }
});

test.describe("DatePicker in a Dialog keeps focus inside the calendar (1280px)", () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  // 暦は body の影の箱にあり、Dialog の FocusTrap の外。暦の FocusTrap がフォーカスを暦の中に閉じ込め、
  // Escape は暦だけを閉じて入力欄へ戻す（外側の Dialog は開いたまま）
  test("Tab stays in the calendar, Escape closes only the calendar", async ({ page }) => {
    await page.goto(url("components-overlays-dialog--with-popups-inside"));
    await waitForStoryReady(page);
    await page.locator("button:visible").first().click();
    const dialog = page.locator('[role="dialog"]').filter({ hasText: "Design review" }).first();
    await expect(dialog).toBeVisible();

    const trigger = (await dialog.locator("[aria-controls], [aria-haspopup]").first().elementHandle())!;
    await trigger.click();
    await expect.poll(() => trigger.getAttribute("aria-expanded")).toBe("true");
    const panelId = (await trigger.getAttribute("aria-controls"))!;
    const panel = page.locator(`[id="${panelId}"]`);
    // 対照: 暦は Dialog の中ではなく body の側にある
    expect(await dialog.evaluate((d, id) => d.contains(document.getElementById(id)), panelId)).toBe(false);

    // 暦の中へフォーカスを入れてから、Tab を繰り返しても暦の外へ出ない
    await page.keyboard.press("Tab");
    await expect.poll(() => panel.evaluate((el) => el.contains(document.activeElement))).toBe(true);
    for (let i = 0; i < 12; i++) {
      await page.keyboard.press("Tab");
      const inside = await panel.evaluate((el) => el.contains(document.activeElement));
      expect(inside, `focus left the calendar after ${i + 2} Tab presses`).toBe(true);
    }

    await page.keyboard.press("Escape");
    await expect.poll(() => trigger.getAttribute("aria-expanded")).toBe("false");
    await expect(dialog).toBeVisible();
    expect(await trigger.evaluate((el) => document.activeElement === el)).toBe(true);
  });
});
