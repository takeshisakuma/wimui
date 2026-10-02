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
// CI では `e2e.yml` が回す（CI-13・2026-10-02 から。それまでは、どのワークフローからも
// 呼ばれていなかった）。
import { test, expect } from "@playwright/test";
import type { Page } from "@playwright/test";

import { evaluateAcrossNavigation } from "./story-ready";

const URL =
  "/iframe.html?id=components-media-audio--premium-features&viewMode=story&globals=theme:light;locale:en";

/**
 * **競合を仕掛ける 2 本は、自分ではナビゲートしないページでやる**（スクリプトを持たない静的ファイル）。
 *
 * もとはストーリーのページでやっていた。Storybook は読み込みのあとに自分でもう 1 度ナビゲート
 * するので、評価に重なるナビゲーションが最大 3 回になる（最初の読み込みの書き換え・仕掛けた
 * `goto`・その書き換え。実測: 12 / 210 / 400 / 520ms の 4 回のうち後ろの 3 回）。再試行 2 回では
 * 3 回目を越えられず、「修正」のテストは時間の当たり方しだいで落ちる ── CI で初めて流した回に
 * 実際に落ちた。「2 回目が済むまで待ってから仕掛ける」も試したが、**2 回目が来ない読み込みが
 * あった**（10 回中 1 回）ので、回数を当てにする作りにはできない。
 *
 * 静的ファイルなら、ナビゲーションは仕掛けた 1 回だけになる。
 */
const PLAIN_URL = "/locales/en/common.json";

/** 評価中に必ずナビゲーションを起こす。評価は 1.5 秒、ナビは 200ms 後。 */
const raceNavigation = (page: Page) =>
  page.waitForTimeout(200).then(() => page.goto(PLAIN_URL, { waitUntil: "domcontentloaded" }));

const slowEval = () => new Promise<string>((r) => setTimeout(() => r("done"), 1500));

test("対照: 再試行を 0 にすると、評価中のナビゲーションで落ちる", async ({ page }) => {
  await page.goto(PLAIN_URL, { waitUntil: "domcontentloaded" });

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
  await page.goto(PLAIN_URL, { waitUntil: "domcontentloaded" });

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
