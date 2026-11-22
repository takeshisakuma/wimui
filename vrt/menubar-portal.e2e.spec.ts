import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const url = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;
const STORY = "components-navigation-elements-menubar--default";

// T432 の 9 部品目: Menubar のメニューを body の影の箱に描く。面の位置の基準（Menubar.Menu）は context で
// 受け、外側の押下の判定では各メニューの影の箱を内側に数える。

test.describe("Menubar menus are drawn outside an overflow: hidden box (1280px)", () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  test("every item can be clicked, and choosing one closes the menu", async ({ page }) => {
    await page.goto(url(STORY));
    await waitForStoryReady(page);
    await page.evaluate(() => {
      const root = document.getElementById("storybook-root")!;
      const box = document.createElement("div");
      box.style.cssText = "position:relative;overflow:hidden;padding:16px";
      root.parentElement!.insertBefore(box, root);
      box.appendChild(root);
    });

    const trigger = page.getByRole("menuitem", { name: "File" });
    await trigger.click();
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    const menu = page.locator(`[id="${await trigger.getAttribute("aria-controls")}"]`);

    const result = await menu.evaluate((panel) => {
      const covered: string[] = [];
      let checked = 0;
      for (const el of panel.querySelectorAll<HTMLElement>('[role="menuitem"]')) {
        const r = el.getBoundingClientRect();
        if (r.height < 2 || r.bottom <= 0 || r.top >= window.innerHeight) continue;
        checked += 1;
        const hit = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
        if (!hit || !(el === hit || el.contains(hit))) covered.push((el.textContent ?? "").trim().slice(0, 20));
      }
      return { checked, covered, inBody: !document.getElementById("storybook-root")!.contains(panel) };
    });
    // 対照: 項目を数え、面は body の側にある
    expect(result.checked).toBeGreaterThan(0);
    expect(result.inBody).toBe(true);
    expect(result.covered, "items clipped or covered").toEqual([]);

    // 影の箱の中の押下を「外側」と取り違えて、選ぶ前に閉じない
    await menu.getByRole("menuitem").first().click();
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await expect(trigger).toBeFocused();
  });
});

test.describe("Menubar menus keep their alignment (1280px)", () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  test('align="end" lines the menu up with the right edge of its menu', async ({ page }) => {
    await page.goto(url(STORY));
    await waitForStoryReady(page);

    // align="end" の面を持つメニューを探す（ストーリーの右端のメニュー）
    const triggers = page.locator('#storybook-root [aria-haspopup="menu"]');
    const count = await triggers.count();
    let checked = 0;
    for (let i = 0; i < count; i++) {
      const trigger = triggers.nth(i);
      if (await trigger.isDisabled()) continue;
      await trigger.click();
      const id = await trigger.getAttribute("aria-controls");
      const edges = await page.evaluate(
        ({ id, triggerIndex }) => {
          const panel = document.getElementById(id!)!;
          const menuEl = document.querySelectorAll('#storybook-root [aria-haspopup="menu"]')[triggerIndex].closest('[role="none"]')!;
          const p = panel.getBoundingClientRect();
          const m = menuEl.getBoundingClientRect();
          return { alignEnd: /_alignEnd_/.test(panel.className), panelLeft: p.left, panelRight: p.right, menuLeft: m.left, menuRight: m.right };
        },
        { id, triggerIndex: i },
      );
      // 面は Menubar.Menu の箱を基準に、始まり（左端）か終わり（右端）を揃える
      if (edges.alignEnd) expect(Math.abs(edges.panelRight - edges.menuRight)).toBeLessThanOrEqual(1);
      else expect(Math.abs(edges.panelLeft - edges.menuLeft)).toBeLessThanOrEqual(1);
      checked += edges.alignEnd ? 1 : 0;
      await page.keyboard.press("Escape");
    }
    // 対照: align="end" の面を 1 つ以上確かめた
    expect(checked).toBeGreaterThan(0);
  });
});
