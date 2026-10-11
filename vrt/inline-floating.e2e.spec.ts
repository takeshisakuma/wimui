import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

/**
 * 引き金の隣に描く面が、画面の端で外へ出ないこと（T342）。
 *
 * 2026-10-11 の定期点検で、8 部品の面が「下に余地が無くても下へ開く」と分かった（Select で 199px、
 * PhoneInput で 318px、画面の外へ出る）。PhoneInput と DatePicker は、右端でも右へ出ていた（140px・11px）。
 * 位置を計算する部品（Tooltip / Popover / Dropdown）と同じ `flip()` で向きを決め、横は面の実際の位置から
 * 測って寄せる形にした（`_internal/useFloatingElement.ts` の `useInlineFloating`）。
 *
 * 見るのは 3 点:
 * - 画面の右下の隅へ寄せて開くと、面が画面に収まり、上へ開いている
 * - 寄せずに開くと、これまでどおり下へ開いている（**対照**。向きの属性が常に "top" でも上の検査は通るため）
 * - 画面に収まっている面は、横へ動かさない（余白なしで端まで置いた入力欄の面を、引き金からずらさない）
 */

type Case = { name: string; id: string; surface: string; opener: string };

const DEFAULT_OPENER = "#storybook-root [role=combobox], #storybook-root [aria-haspopup], #storybook-root input, #storybook-root button";

const cases: Case[] = [
  { name: "Select", id: "components-selection-controls-select--default", surface: '#storybook-root [class*="_dropdown_"]', opener: DEFAULT_OPENER },
  { name: "MultiSelect", id: "components-selection-controls-multiselect--default", surface: '#storybook-root ul[role="listbox"]', opener: DEFAULT_OPENER },
  { name: "Combobox", id: "components-selection-controls-combobox--default", surface: '#storybook-root [class*="_dropdown_"]', opener: DEFAULT_OPENER },
  { name: "Cascader", id: "components-advanced-inputs-cascader--default", surface: '#storybook-root [class*="_dropdown_"]', opener: DEFAULT_OPENER },
  { name: "TreeSelect", id: "components-advanced-inputs-treeselect--default", surface: '#storybook-root [class*="_dropdown_"]', opener: DEFAULT_OPENER },
  { name: "DatePicker", id: "components-pickers-sliders-datepicker--default", surface: '#storybook-root [class*="_dropdown_"]', opener: DEFAULT_OPENER },
  { name: "ModelSelector", id: "components-ai-modelselector--default", surface: '#storybook-root [class*="_dropdownWrapper_"]', opener: DEFAULT_OPENER },
  { name: "PhoneInput", id: "components-basic-inputs-phoneinput--default", surface: '#storybook-root [class*="_dropdown_"]', opener: "#storybook-root [role=combobox]" },
  // 入力ではないが、面を引き金の隣に CSS で置くのは同じ（T342 の対象外だったもの）
  { name: "Menubar", id: "components-navigation-elements-menubar--default", surface: '#storybook-root [role="menu"]', opener: '#storybook-root [role="menuitem"]' },
];

/** ストーリーの根を、画面の隅へ寄せる（余白を消し、根を中身の幅にする ── 引き金が端に来る）。 */
const pinTo = (corner: string) =>
  `body{padding:0!important;margin:0!important}` +
  `#storybook-root{position:fixed!important;${corner}width:max-content!important;max-width:100vw;padding:0!important;margin:0!important}` +
  `#storybook-root>*{padding:0!important;margin:0!important}`;

const measure = (selector: string) => {
  const el = document.querySelector<HTMLElement>(selector);
  if (!el) return null;
  const rect = el.getBoundingClientRect();
  return {
    side: el.dataset.side ?? null,
    left: Math.round(rect.left),
    right: Math.round(rect.right),
    top: Math.round(rect.top),
    bottom: Math.round(rect.bottom),
    viewportWidth: document.documentElement.clientWidth,
    viewportHeight: window.innerHeight,
    shift: el.style.getPropertyValue("--wim-floating-shift-x"),
  };
};

test.describe("引き金の隣に描く面が、画面の端で外へ出ない（T342）", () => {
  for (const { name, id, surface, opener } of cases) {
    const url = `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

    test(`${name}: 寄せずに開くと、下へ開く（対照）。面は横へ動かない`, async ({ page }) => {
      await page.goto(url, { waitUntil: "domcontentloaded" });
      await waitForStoryReady(page);
      await page.locator(opener).first().click();
      await expect(page.locator(surface).first()).toBeVisible();
      // 向きは、開いた直後の 1 回の計算のあとで付く
      await expect(page.locator(surface).first()).toHaveAttribute("data-side", "bottom");
      const m = await page.evaluate(measure, surface);
      expect(m).not.toBeNull();
      expect(m!.shift).toBe("");
    });

    test(`${name}: 画面の右下の隅では、上へ開いて、画面に収まる`, async ({ page }) => {
      await page.goto(url, { waitUntil: "domcontentloaded" });
      await waitForStoryReady(page);
      await page.addStyleTag({ content: pinTo("bottom:0;right:0;") });
      await page.locator(opener).first().click();
      await expect(page.locator(surface).first()).toBeVisible();
      await expect(page.locator(surface).first()).toHaveAttribute("data-side", "top");
      // 横のずれは、向きと同じ計算の回で入る。入り終わるのを待ってから測る
      await expect
        .poll(async () => {
          const m = await page.evaluate(measure, surface);
          return m ? m.right <= m.viewportWidth : false;
        })
        .toBe(true);
      const m = (await page.evaluate(measure, surface))!;
      expect({ left: m.left >= 0, top: m.top >= 0, right: m.right <= m.viewportWidth, bottom: m.bottom <= m.viewportHeight }).toEqual({
        left: true,
        top: true,
        right: true,
        bottom: true,
      });
    });
  }
});

// HoverCard は、向きを利用者が `side` で決める。変えるのは横のずれだけなので、上の表には入れない。
test.describe("HoverCard のカードが、画面の左右の端で外へ出ない（T342）", () => {
  const url = "/iframe.html?id=components-overlays-hovercard--default&viewMode=story&globals=locale:en";
  const surface = '#storybook-root [class*="_content_"]';
  const trigger = "#storybook-root .wim-hover-card > *";

  test("寄せずに開くと、カードは横へ動かない（対照）", async ({ page }) => {
    await page.goto(url, { waitUntil: "domcontentloaded" });
    await waitForStoryReady(page);
    await page.locator(trigger).first().hover();
    await expect(page.locator(surface).first()).toBeVisible();
    const m = await page.evaluate(measure, surface);
    expect(m).not.toBeNull();
    expect(m!.shift).toBe("");
  });

  for (const [label, corner] of [
    ["左", "top:0;left:0;"],
    ["右", "top:0;right:0;"],
  ] as const) {
    test(`画面の${label}端では、内側へ寄って、画面に収まる`, async ({ page }) => {
      await page.goto(url, { waitUntil: "domcontentloaded" });
      await waitForStoryReady(page);
      await page.addStyleTag({ content: pinTo(corner) });
      await page.locator(trigger).first().hover({ force: true });
      await expect(page.locator(surface).first()).toBeVisible();
      await expect
        .poll(async () => {
          const m = await page.evaluate(measure, surface);
          return m ? m.left >= 0 && m.right <= m.viewportWidth : false;
        })
        .toBe(true);
      // 対照: 寄せる仕組みが無ければ、カードは引き金の中央に置かれて 129px はみ出す（2026-10-11 に実測）
      const m = (await page.evaluate(measure, surface))!;
      expect(m.shift).not.toBe("");
    });
  }
});
