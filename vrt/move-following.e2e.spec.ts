import { test, expect, type Page } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

// T344: 相手の位置を読んで `position: fixed` の要素を置く部品（Affix・Tour）は、scroll と resize でしか
// 測り直していなかった。スクロールせずに相手が動く場面 ── 上にある中身の高さが変わったとき ── で、
// 固定された要素が元の場所に残った。
//
// 手順は 2 つとも同じ: スクロールの位置を保ったまま（scroll anchoring を切って）、相手の上に中身を足す。
// 相手の大きさは変わらないので、`ResizeObserver` では拾えない（`_internal/observeMove.ts` が見ている）。
// jsdom には `IntersectionObserver` が無いので、この検査は実ブラウザで行う。

const url = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

const disableScrollAnchoring = (page: Page) => page.addStyleTag({ content: "*{overflow-anchor:none!important}" });

test.describe("位置を測って置く部品が、スクロールせずに動いた相手に付いていく（T344）", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
  });

  test("Affix: 上に中身が足されて、置き場が画面の中へ戻ったら、固定が解ける", async ({ page }) => {
    await page.goto(url("components-navigation-utilities-affix--basic"), { waitUntil: "domcontentloaded" });
    await waitForStoryReady(page);
    const affix = page.locator(".wim-affix").first();
    const isFixed = () => affix.evaluate((el) => getComputedStyle(el).position === "fixed");

    // 送って、固定させる
    await page.evaluate(() => {
      const scroller = [...document.querySelectorAll<HTMLElement>("#storybook-root *")].find(
        (el) => /(auto|scroll)/.test(getComputedStyle(el).overflowY) && el.scrollHeight > el.clientHeight + 4,
      );
      if (scroller) scroller.scrollTop = 400;
      else window.scrollTo(0, 400);
    });
    await expect.poll(isFixed).toBe(true);

    // スクロールせずに、置き場の上に中身を足す（置き場は、固定の上端より下へ戻る）
    await disableScrollAnchoring(page);
    await affix.evaluate((el) => {
      const placeholder = el.parentElement!;
      const filler = document.createElement("div");
      filler.style.height = "600px";
      placeholder.parentElement!.insertBefore(filler, placeholder);
    });

    // 対照: 以前は、次に scroll か resize が起きるまで、固定されたままだった
    await expect.poll(isFixed).toBe(false);
  });

  test("Tour: 上に中身が足されて、対象が下がったら、ハイライトも付いていく", async ({ page }) => {
    await page.goto(url("components-overlays-tour--open"), { waitUntil: "domcontentloaded" });
    await waitForStoryReady(page);
    const highlight = page.locator('[class*="_highlight_"]').first();
    await expect(highlight).toBeVisible();
    const top = async () => Math.round((await highlight.boundingBox())!.y);
    // 開いた直後は、測り直しで位置が動くことがある。落ち着くのを待つ
    let before = await top();
    await expect
      .poll(async () => {
        const now = await top();
        const settled = now === before;
        before = now;
        return settled;
      })
      .toBe(true);

    await disableScrollAnchoring(page);
    await page.evaluate(() => {
      const root = document.getElementById("storybook-root")!;
      const filler = document.createElement("div");
      filler.style.height = "120px";
      root.insertBefore(filler, root.firstChild);
    });

    // 対照: 以前は、ハイライトは元の場所に残った（対象だけが 120px 下がる）
    await expect.poll(top).toBe(before + 120);
  });
});
