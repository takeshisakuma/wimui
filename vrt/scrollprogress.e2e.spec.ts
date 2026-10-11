import { test, expect, type Page } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

// ScrollProgress は、scroll のイベントでしか値を計算し直していなかった。スクロールせずに進み具合が
// 変わる 2 つの場面 ── 中身の高さが変わったとき・窓の大きさが変わったとき ── で、値が古いまま残った
// （半分まで送ったあとに中身を 2 倍に伸ばすと、50% のまま。実際は 18%。2026-10-11 に実測）。
//
// jsdom は scrollHeight を持たず、ResizeObserver も無いので、この検査は実ブラウザで行う。

const url = "/iframe.html?id=components-utilities-scrollprogress--default&viewMode=story&globals=locale:en";

const read = (page: Page) =>
  page.evaluate(() => {
    const bar = document.querySelector('[role="progressbar"]');
    const total = document.documentElement.scrollHeight - window.innerHeight;
    return {
      shown: Number(bar?.getAttribute("aria-valuenow")),
      actual: total > 0 ? Math.round((window.scrollY / total) * 100) : 0,
    };
  });

const scrollHalf = async (page: Page) => {
  await page.evaluate(() => window.scrollTo(0, (document.documentElement.scrollHeight - window.innerHeight) / 2));
  await expect.poll(async () => (await read(page)).shown).toBe(50);
};

test.describe("ScrollProgress は、スクロールしなくても進み具合を計算し直す", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto(url, { waitUntil: "domcontentloaded" });
    await waitForStoryReady(page);
  });

  test("中身が伸びたら、値が下がる", async ({ page }) => {
    await scrollHalf(page);
    // スクロールせずに、中身を伸ばす
    await page.evaluate(() => {
      const filler = document.createElement("div");
      filler.style.height = `${document.documentElement.scrollHeight}px`;
      document.body.appendChild(filler);
    });
    await expect
      .poll(async () => {
        const { shown, actual } = await read(page);
        return shown === actual && shown < 50;
      })
      .toBe(true);
  });

  test("いまある中身の高さが変わっても、値が変わる", async ({ page }) => {
    await scrollHalf(page);
    // 子を足さずに、既にある要素を伸ばす（開いたアコーディオン・遅れて読み込まれる画像と同じ形）
    await page.evaluate(() => {
      const root = document.getElementById("storybook-root")!;
      root.style.paddingBottom = `${document.documentElement.scrollHeight}px`;
    });
    await expect
      .poll(async () => {
        const { shown, actual } = await read(page);
        return shown === actual && shown < 50;
      })
      .toBe(true);
  });

  // この 1 本は、直す前のコードでも通る（このストーリーでは、窓の高さを変えると scroll のイベントも
  // 出るため）。欠陥を再現するのは上の 2 本で、ここは「窓を変えたあとの値が合っている」ことだけを見る。
  test("窓の高さを変えたら、値が変わる", async ({ page }) => {
    await scrollHalf(page);
    await page.setViewportSize({ width: 1280, height: 300 });
    await expect
      .poll(async () => {
        const { shown, actual } = await read(page);
        return shown === actual && shown !== 50;
      })
      .toBe(true);
  });
});
