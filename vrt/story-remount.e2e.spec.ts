// **ストーリーは、描いたあとに作り直されない**（遅い環境でも）。
//
// 2026-10-03、CI の E2E が pivottable の「Tab のあとフォーカスが無い」「scrollHeight が 0」で
// 落ちた（main でも PR でも。1 回目だけ落ちて再試行で通る＝`--fail-on-flaky-tests` で赤）。
// 失敗時のトレースでは、表の caption の `useId` が `_r_0_` から `_r_1_` に変わっていた
// ＝描いたストーリーが外されて作り直されている。作り直しでフォーカスは外れ、テストが掴んでいた
// 要素は切り離される。
//
// 引き金は `storybook-react-i18next` のデコレーターで、i18n の `languageChanged` を受けると
// `key` を変えて丸ごと作り直す。i18next は初期化の最後に必ず 1 回これを出すので、初回描画より
// 後に届くと作り直しになる。**届く順は速さで決まる** ── 速い環境では起きない（手元の E2E は
// 再試行なしで 3 周 435 件通った）ので、ここでは CPU を遅くして必ず踏む形にしてある。
// 直したのは `.storybook/preview.ts` の `loaders`（翻訳の読み込みが終わるまで描画を始めない）。
//
// **鳴ることの実証**: `loaders` を外したビルドでは `locale:en` が落ちる（先頭の要素が 2 回現れる）。
// `locale:ja` は直す前も通った ── 切替の経路が違っても作り直しが増えないことを見るために置いてある。
import { test, expect } from "@playwright/test";

/** CI の遅い runner の代わり。手元で 6 倍にすると、直す前は 4 回中 4 回作り直しになった。 */
const CPU_THROTTLE = 6;
/** 直す前の作り直しは、初回描画の約 0.5 秒後（6 倍のとき）。余裕を見て待つ。 */
const WATCH_MS = 3000;

for (const locale of ["en", "ja"]) {
  test(`描いたストーリーは作り直されない（locale:${locale}・CPU ${CPU_THROTTLE} 倍遅い）`, async ({ page }) => {
    test.slow();
    const cdp = await page.context().newCDPSession(page);
    await cdp.send("Emulation.setCPUThrottlingRate", { rate: CPU_THROTTLE });

    // `#storybook-root` の先頭の要素が**別の要素に替わった回数**を数える。
    // 部品に依らない（`useId` や特定のクラスを当てにしない）。
    await page.addInitScript(() => {
      const w = window as unknown as { __mounts: number };
      w.__mounts = 0;
      let last: Element | null = null;
      const tick = () => {
        const first = document.getElementById("storybook-root")?.firstElementChild ?? null;
        if (first && first !== last) {
          w.__mounts += 1;
          last = first;
        }
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });

    await page.goto(
      `/iframe.html?id=components-data-structures-pivottable--default&viewMode=story&globals=locale:${locale}`,
    );
    await page.waitForFunction(() => (window as unknown as { __mounts: number }).__mounts > 0, undefined, {
      timeout: 60_000,
    });
    await page.waitForTimeout(WATCH_MS);

    // 0 回＝描けていない（数え方の故障）と、2 回以上＝作り直し、の両方を落とす
    expect(await page.evaluate(() => (window as unknown as { __mounts: number }).__mounts)).toBe(1);
  });
}
