// `evaluateAcrossNavigation` が「ナビゲーションでコンテキストが壊れた」ときだけ
// やり直すことを、故意にその状況を作って確かめる（T68）。
//
// **`waitForRenderSettled` 経由では実証できなかった。** 最初そう書いたところ、
// 再試行を 0 に落としても 3 件とも通ってしまった ── 中の評価が短すぎて、
// 仕掛けたナビゲーションと重ならないため。**通ることを見ただけでは、
// 再試行が効いたのか元から当たらなかったのか区別できない。** だからヘルパーを
// 直接叩き、評価時間（1.5 秒）とナビゲーションの時刻（200ms 後）を固定して、
// 必ず重なるようにしてある。
//
// 注意: このスペックは **CI では走らない**。CI が回すのは `a11y.spec.ts` /
// `host-matrix.spec.ts` / `vrt.spec.ts` の 3 本だけで、`*.e2e.spec.ts` は
// `npm run test:vrt`（ローカル全量）でのみ実行される。既存の e2e 群と同じ条件。
import { test, expect } from "@playwright/test";
import type { Page } from "@playwright/test";

import { evaluateAcrossNavigation } from "./story-ready";

const URL =
  "/iframe.html?id=components-media-audio--premium-features&viewMode=story&globals=theme:light;locale:en";

/** 評価中に必ずナビゲーションを起こす。評価は 1.5 秒、ナビは 200ms 後。 */
const raceNavigation = (page: Page) =>
  page.waitForTimeout(200).then(() => page.goto(URL, { waitUntil: "domcontentloaded" }));

const slowEval = () => new Promise<string>((r) => setTimeout(() => r("done"), 1500));

test("対照: 再試行を 0 にすると、評価中のナビゲーションで落ちる", async ({ page }) => {
  await page.goto(URL, { waitUntil: "domcontentloaded" });

  let message = "";
  await Promise.all([
    evaluateAcrossNavigation(page, slowEval, undefined, 0).catch((e: Error) => {
      message = e.message;
    }),
    raceNavigation(page),
  ]);

  expect(message).toContain("Execution context was destroyed");
});

test("修正: 再試行ありなら同じ状況でも値が返る", async ({ page }) => {
  await page.goto(URL, { waitUntil: "domcontentloaded" });

  let value = "";
  await Promise.all([
    evaluateAcrossNavigation(page, slowEval, undefined, 2).then((v) => {
      value = v;
    }),
    raceNavigation(page),
  ]);

  expect(value).toBe("done");
});

test("本物のエラーは握り潰されない", async ({ page }) => {
  await page.goto(URL, { waitUntil: "domcontentloaded" });

  await expect(
    evaluateAcrossNavigation(
      page,
      () => {
        throw new Error("wimui-intentional-failure");
      },
      undefined,
      2,
    ),
  ).rejects.toThrow("wimui-intentional-failure");
});
