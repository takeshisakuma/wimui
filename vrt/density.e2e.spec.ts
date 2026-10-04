import { test, expect, type Page } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const url = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=locale:en`;

/** 密度で変わるはずの寸法（px）。要素が無ければ null（＝測れていない）を返す。 */
const measure = (page: Page) =>
  page.evaluate(() => {
    const height = (el: Element | null | undefined) => (el ? Math.round(el.getBoundingClientRect().height * 10) / 10 : null);
    const root = document.getElementById("storybook-root")!;
    return {
      tab: height(root.querySelector('.wim-tabs [role="tab"]')),
      accordionTrigger: height(root.querySelector(".wim-accordion button")),
      otpCell: height(root.querySelector(".wim-otp-input input")),
      rangeSliderRoot: height(root.querySelector(".wim-range-slider")),
      // 見出しの行（題と件数を持つ箱）。クラス名はハッシュ付きなので、題から 1 つ外の「件数も持つ」箱を取る
      transferHeader: height(root.querySelector(".wim-transfer [title]")?.parentElement?.parentElement),
    };
  });

// T314: 密度（compact）に追従していなかった操作系の部品。comfortable の寸法は変えず、compact で小さくなる。
test("density followers shrink in compact and keep their comfortable size", async ({ page }) => {
  await page.goto(url("token-density--comfortable"));
  await waitForStoryReady(page);
  const comfortable = await measure(page);

  await page.goto(url("token-density--compact"));
  await waitForStoryReady(page);
  const compact = await measure(page);

  // 対照: 全部の要素が測れていること（null なら、下の比較は何も見ていない）
  for (const [name, value] of Object.entries(comfortable)) expect(value, `comfortable ${name}`).not.toBeNull();
  for (const [name, value] of Object.entries(compact)) expect(value, `compact ${name}`).not.toBeNull();

  // comfortable の寸法は、段に乗っていること
  // OtpInput の既定の姿（狭いコンテナ）は md の段。入力・ボタンと同じ 42px（T313）
  expect(comfortable.otpCell).toBe(42);
  expect(comfortable.rangeSliderRoot).toBe(24);

  for (const name of Object.keys(comfortable) as Array<keyof typeof comfortable>) {
    expect(compact[name]!, `${name}: compact ${compact[name]} < comfortable ${comfortable[name]}`).toBeLessThan(
      comfortable[name]!,
    );
  }

  // 当たり判定の下限（24px）は割らない。RangeSlider の根は 20px になるが、つまみは 24px を保つ
  expect(compact.tab!).toBeGreaterThanOrEqual(24);
  expect(compact.accordionTrigger!).toBeGreaterThanOrEqual(24);
  expect(compact.otpCell!).toBeGreaterThanOrEqual(24);
  const thumb = await page.evaluate(() => {
    const el = document.querySelector('.wim-range-slider [role="slider"]')!;
    const r = el.getBoundingClientRect();
    return Math.min(r.width, r.height);
  });
  expect(thumb).toBeGreaterThanOrEqual(24);
});
