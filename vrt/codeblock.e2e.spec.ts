import { test, expect } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const url = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

// T324: 畳んだ高さを `maxLines * 1.6em` で出していて、この `em` が外側の箱（16px）で解決されていた。
// コードの行は 22.76px なので、`maxLines={10}` が 11 行と 12 行目の上 4 割を見せ、最後の行が途中で切れていた。
const STORIES: Array<{ id: string; maxLines: number }> = [
  { id: "components-ai-codeblock--collapsible", maxLines: 5 },
  { id: "components-ai-codeblock--custom-max-lines", maxLines: 10 },
];

// 390px では、コードが折り返す（`white-space: pre-wrap`）。折り返しても、切れるのは行の境目
const WIDTHS = [1280, 390];

for (const width of WIDTHS) {
  test.describe(`CodeBlock maxLines (${width}px)`, () => {
    test.use({ viewport: { width, height: 720 } });

    for (const { id, maxLines } of STORIES) {
      test(`${id} ends at the bottom of line ${maxLines} when collapsed`, async ({ page }) => {
        await page.goto(url(id));
        await waitForStoryReady(page);

        const measured = await page.evaluate(() => {
          const pre = document.querySelector("#storybook-root pre");
          const body = pre?.parentElement;
          if (!pre || !body) return null;
          const preStyle = getComputedStyle(pre);
          return {
            // 見えている高さ（横のスクロールバーが出ていれば、そのぶんは含まない）
            visible: body.clientHeight,
            paddingTop: parseFloat(preStyle.paddingTop),
            lineHeight: parseFloat(preStyle.lineHeight),
            contentHeight: pre.scrollHeight,
          };
        });

        expect(measured).not.toBeNull();
        if (!measured) return;
        // 対照: 畳まれている（中身のほうが高い）。畳まれていなければ、下の割り算は何も確かめない
        expect(measured.contentHeight).toBeGreaterThan(measured.visible);
        expect(measured.lineHeight).toBeGreaterThan(0);

        // 箱の下端は、行の境目の 1px 内側（最後の行の下の空きの中）。次の行は 1px も見せない
        const lines = (measured.visible - measured.paddingTop) / measured.lineHeight;
        expect(lines).toBeLessThanOrEqual(maxLines);
        expect(lines).toBeGreaterThan(maxLines - 0.1);
      });
    }
  });
}
