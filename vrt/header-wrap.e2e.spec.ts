import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const url = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

// Header の左右の組が 1 行に入りきらないとき、以前は折り返さず、組の中の文字が詰まって
// 2 行に折れていた（390px の Newsroom で見出しも右の文も 2 行。ユーザーの報告・2026-11-22）。
// いまは後ろの組が次の段へ落ち、右に寄る。
const STORIES = ["patterns-newsroom--default", "patterns-alpinedesk--batch"];

test.describe("Header drops the end section to the next row when it does not fit (390px)", () => {
  test.use({ viewport: { width: 390, height: 700 } });

  for (const id of STORIES) {
    test(`${id}: no text in the header is squeezed onto two lines`, async ({ page }) => {
      await page.goto(url(id));
      await waitForStoryReady(page);

      const result = await page.locator(".wim-header").first().evaluate((header) => {
        const container = header.firstElementChild as HTMLElement;
        const sections = [...container.children] as HTMLElement[];
        const texts = [...header.querySelectorAll<HTMLElement>("*")].filter(
          (el) => el.children.length === 0 && (el.textContent ?? "").trim() && el.getBoundingClientRect().width > 0,
        );
        const wrapped = texts
          .filter((el) => {
            const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
            return lineHeight > 0 && el.getBoundingClientRect().height > lineHeight * 1.5;
          })
          .map((el) => (el.textContent ?? "").trim().slice(0, 24));
        const end = sections[sections.length - 1].getBoundingClientRect();
        const box = container.getBoundingClientRect();
        const paddingRight = parseFloat(getComputedStyle(container).paddingRight);
        return {
          checked: texts.length,
          wrapped,
          sections: sections.length,
          endRightGap: Math.round(box.right - paddingRight - end.right),
        };
      });

      // 対照: 文字を数え、組が 2 つ以上ある。そうでなければ何も確かめていない
      expect(result.checked).toBeGreaterThan(0);
      expect(result.sections).toBeGreaterThan(1);
      expect(result.wrapped, "texts squeezed onto two lines").toEqual([]);
      // 後ろの組は、次の段へ落ちても右端に寄る
      expect(Math.abs(result.endRightGap)).toBeLessThanOrEqual(1);
    });
  }
});
