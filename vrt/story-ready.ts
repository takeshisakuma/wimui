import type { Page } from "@playwright/test";

const STORY_READY_TIMEOUT_MS = 30_000;
/** 画像・インジケータの落ち着き待ち。超えても撮る（撮れないより撮って落ちる方が読める）。 */
const SETTLE_TIMEOUT_MS = 5_000;

/**
 * ストーリーが参照する外部画像（Unsplash / picsum のホットリンク）を固定の
 * プレースホルダに差し替える。
 *
 * 実測（2026-07-29、閾値 0 で 2 ラン）: 非決定的だった 28 ケースのうち
 * `Avatar - Sizes` と `SourceCitation - Default` は、外部画像が間に合ったり
 * 間に合わなかったりで数百〜1500px 揺れていた。ネットワークの機嫌に依存する
 * 限りベースラインは安定しないので、VRT/a11y ではネットワークに出ない。
 *
 * SVG を返すのは固有サイズ（800x600）を持たせるため。1x1 を伸ばすと
 * intrinsic size が変わってレイアウトが崩れる。
 */
const PLACEHOLDER_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">' +
  '<rect width="800" height="600" fill="#c9c9c9"/></svg>';

export async function stubExternalImages(page: Page) {
  await page.route(
    (url) => url.hostname !== "localhost" && url.hostname !== "127.0.0.1",
    async (route) => {
      if (route.request().resourceType() !== "image") {
        await route.continue();
        return;
      }
      await route.fulfill({
        status: 200,
        contentType: "image/svg+xml",
        body: PLACEHOLDER_SVG,
      });
    },
  );
}

/**
 * Wait until the Storybook iframe has actually mounted the story.
 * `networkidle` alone races code-split story chunks on CI (empty #storybook-root).
 * Under heavy local parallelism the Vite Storybook preview can stick on the
 * preparing spinner with an empty root — reload once before failing.
 */
export async function waitForStoryReady(page: Page) {
  const waitForMountedStory = async () => {
    await page.locator("#storybook-root").waitFor({
      state: "attached",
      timeout: STORY_READY_TIMEOUT_MS,
    });
    await page.waitForFunction(
      () => {
        const root = document.getElementById("storybook-root");
        return !!root && root.childElementCount > 0;
      },
      undefined,
      { timeout: STORY_READY_TIMEOUT_MS },
    );
  };

  try {
    await waitForMountedStory();
  } catch {
    await page.reload({ waitUntil: "domcontentloaded" });
    await waitForMountedStory();
  }

  await page.evaluate(
    async (timeoutMs) => {
      await document.fonts.ready;

      // `.storybook/preview-head.html` は Noto Sans / Noto Sans JP を Google Fonts から
      // **display=swap** で読む。swap はフォント到着前にフォールバック字形で描くので、
      // 到着前に撮ると全テキストがずれる（実測 2026-07-29: 非決定的な 28 ケースの多くが
      // FieldError や InputGroup のような、アニメーションも画像も無いテキスト主体の
      // ストーリーだった）。`fonts.ready` は「保留中の読み込みが無い」までしか保証せず、
      // 未要求のフォントには反応しないので、実際に使えるかを check() で確かめる。
      const deadline = Date.now() + timeoutMs;
      const wanted = ['400 16px "Noto Sans"', '700 16px "Noto Sans"'];
      while (Date.now() < deadline && !wanted.every((f) => document.fonts.check(f))) {
        await new Promise((r) => setTimeout(r, 50));
        await document.fonts.ready;
      }

      const settled = (img: HTMLImageElement) =>
        img.complete
          ? Promise.resolve()
          : new Promise<void>((resolve) => {
              img.addEventListener("load", () => resolve(), { once: true });
              img.addEventListener("error", () => resolve(), { once: true });
            });

      // `document.images` をその場で 1 回スナップショットするだけだと、
      // IntersectionObserver 等で**あとから挿入される** <img> を取りこぼす
      // （Image.tsx はビューポートに入るまで <img> を描かない）。
      // 「待つ → もう一度数える」を、増えなくなるまで繰り返す。
      const imageDeadline = Date.now() + timeoutMs;
      let seen = -1;
      while (document.images.length !== seen && Date.now() < imageDeadline) {
        seen = document.images.length;
        await Promise.all(Array.from(document.images).map(settled));
        await new Promise<void>((r) => requestAnimationFrame(() => r()));
      }
    },
    SETTLE_TIMEOUT_MS,
  );

  // スライドするインジケータ（Tabs / SegmentedControl / TabNavigation /
  // IndicatorSlider）は ResizeObserver で測ってから opacity 0 → 1 に上げる。
  // 測り終える前に撮ると、位置も不透明度も途中の絵になる。実測では
  // `IndicatorBase - Variants` が 127px ⇄ 6727px で振れていた。
  await page
    .waitForFunction(
      () => {
        const sliders = document.querySelectorAll('[class*="slider" i]');
        return Array.from(sliders).every(
          (el) => getComputedStyle(el as HTMLElement).opacity === "1",
        );
      },
      undefined,
      { timeout: SETTLE_TIMEOUT_MS },
    )
    // 常に opacity 0 が正しいストーリー（選択なしなど）もあるので、
    // 待ち切れなくても撮る。ここで落とすと本題と無関係な赤が増える。
    .catch(() => undefined);

  // One frame for layout (ResizeObserver / Recharts measure) after paint.
  await page.evaluate(
    () =>
      new Promise<void>((resolve) => {
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
      }),
  );
}
