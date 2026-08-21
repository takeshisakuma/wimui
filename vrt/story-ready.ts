import type { Page } from "@playwright/test";

const STORY_READY_TIMEOUT_MS = 30_000;
/** 画像・インジケータの落ち着き待ち。超えても撮る（撮れないより撮って落ちる方が読める）。 */
const SETTLE_TIMEOUT_MS = 5_000;

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

  await waitForRenderSettled(page);
}

/**
 * 「マウントは済んでいる」あとの落ち着き待ち — フォント・画像・スライダー。
 *
 * `waitForStoryReady` から切り出してある。マウント判定は `#storybook-root` に
 * 子が付いたかを見る**ストーリー専用**の条件で、docs ページ（`viewMode=docs`）には
 * そのまま使えない。一方でここから下はホストに依らないので、docs ホストを見る
 * `host-matrix.spec.ts` はマウント判定だけ自前でやってこれを呼ぶ。
 */
/**
 * Storybook は起動直後に**もう 1 度ナビゲートする**（`globals` をパーセント
 * エンコードした形に URL を書き換える）。実測（2026-08-09、`framenavigated` を
 * 記録）では**毎回 2 回**発火し、あらかじめエンコードして渡しても回数は減らない
 * （同じ URL への置換になるだけ）。**つまり原因は取り除けない。**
 *
 * この 2 回目に `page.evaluate` が重なると
 * `Execution context was destroyed, most likely because of a navigation` で落ちる。
 * マウント判定（`#storybook-root` に子が付いたか）は書き換えより先に真になり得るので、
 * その直後の評価が窓に入る。**ストーリー全体に潜在する競合**で、マウントが遅いもの
 * （`Audio / Premium Features` は `demoDelay={2000}` + 遅延ロード）で顕在化しやすい。
 *
 * T68 の「同一コミットで違う赤が出る」の実体がこれ。#312 で**同じコードのまま
 * 緑と赤の両方**が出た（差分はベースライン PNG だけ）。
 *
 * 一過性なので、この文言のときだけ 1 度やり直す。**他の失敗はそのまま投げる**
 * ── ここで握り潰すと、本物の失敗まで見えなくなる。
 */
const CONTEXT_DESTROYED = "Execution context was destroyed";

export async function evaluateAcrossNavigation<T, A>(
  page: Page,
  fn: (arg: A) => Promise<T> | T,
  arg: A,
  retries = 2,
): Promise<T> {
  for (let i = 0; ; i += 1) {
    try {
      return await page.evaluate(fn, arg);
    } catch (err) {
      const message = (err as Error).message ?? "";
      if (i >= retries || !message.includes(CONTEXT_DESTROYED)) throw err;
      // 書き換えは 1 度きりなので、落ち着いてからやり直せば通る。
      await page.waitForLoadState("domcontentloaded").catch(() => undefined);
    }
  }
}

export async function waitForRenderSettled(page: Page) {
  await evaluateAcrossNavigation(
    page,
    async (timeoutMs: number) => {
      await document.fonts.ready;

      // フォントは `font-display: swap`＝到着前はフォールバック字形で描かれるので、
      // 到着前に撮ると全テキストがずれる。`fonts.ready` は「保留中の読み込みが無い」
      // までしか保証せず、**未要求のフォントには反応しない**。実測（2026-07-30、
      // 公開 Storybook を CDP 込みで計測）ではストーリーがマウントした時点の
      // `check()` が 10/10 で false、`load()` のマッチは 1 面＝**宣言はあるが
      // バイナリが未着なのが常態**だった。だから能動的に読ませる load() が要る。
      // ※ポーリング（check() が true になるまで待つ）は、常に false のままの
      // ストーリーで毎回 5 秒を使い切る（実測: 6 テスト 14 秒 → 6.4 分、CI も
      // 8 分 → 18 分超）。load() なら待ち時間が実費だけになる。
      //
      // フォント自体は `@fontsource`（node_modules）から同一オリジンで配信される
      // ＝この待ちがネットワークの機嫌に左右されない（Google Fonts から読んでいた
      // 頃は、2 ラン比較で片方だけ 25 ケースがフォールバック字形で撮れていた）。
      // 取れない環境でも進めるよう catch は残す。
      await Promise.all(
        [
          '400 16px "Noto Sans"',
          '500 16px "Noto Sans"',
          '700 16px "Noto Sans"',
          '400 16px "Noto Sans Mono"',
        ].map((f) => document.fonts.load(f).catch(() => undefined)),
      );

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
  // **CI で実際に落ちていたのはここ**（`story-ready.ts:118`）。
  await evaluateAcrossNavigation(
    page,
    () =>
      new Promise<void>((resolve) => {
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
      }),
    undefined,
  );
}
