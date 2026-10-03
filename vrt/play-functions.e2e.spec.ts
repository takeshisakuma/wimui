// **ストーリーの `play` が例外を投げていないか。**
//
// `play` は Storybook を開いたときに走るだけで、どの CI も結果を見ていなかった（VRT と a11y は
// 描画を撮るだけ、単体テストはストーリーを読まない）。2026-10-03 に数えたところ、`play` を持つ
// 3 本のうち 2 本が例外で止まっていた:
//
//   - Transfer / Controlled   `pointer-events: none` の span を押そうとしていた
//   - QueryBuilder / Default  `getByRole("combobox")` が複数に当たっていた
//
// 例外で止まった `play` は、**止まった時点の姿のまま VRT に撮られる**。QueryBuilder はルールを 1 行
// 足したところで止まり、その姿がベースラインになっていた（グループの追加まで進んでいなかった）。
//
// 対象は `index.json` の `play-fn` タグで拾う（ファイル名や grep では数えない ──
// `play:` を grep すると `display:` まで当たり、329 個あるように見える）。
import { test, expect } from "@playwright/test";
import * as fs from "node:fs";
import * as path from "node:path";

type Entry = { id: string; type: string; tags?: string[] };
const indexPath = path.join(process.cwd(), "storybook-static", "index.json");
const stories: Entry[] = fs.existsSync(indexPath)
  ? (Object.values(JSON.parse(fs.readFileSync(indexPath, "utf8")).entries) as Entry[]).filter(
      (e) => e.type === "story" && (e.tags ?? []).includes("play-fn"),
    )
  : [];

test("play を持つストーリーが 1 本以上見つかる（走査の故障を緑にしない）", () => {
  expect(stories.length).toBeGreaterThan(0);
});

for (const story of stories) {
  test(`play が例外を投げない: ${story.id}`, async ({ page }) => {
    await page.addInitScript(() => {
      const w = window as unknown as {
        __play: { threw: string | null; phases: string[] };
        __STORYBOOK_ADDONS_CHANNEL__?: { on: (ev: string, cb: (p: never) => void) => void };
      };
      w.__play = { threw: null, phases: [] };
      const hook = () => {
        const ch = w.__STORYBOOK_ADDONS_CHANNEL__;
        if (!ch) {
          setTimeout(hook, 10);
          return;
        }
        ch.on("playFunctionThrewException", (e: { message?: string }) => {
          w.__play.threw = String(e?.message ?? e).slice(0, 400);
        });
        ch.on("unhandledErrorsWhilePlaying", (e: unknown) => {
          w.__play.threw = `unhandled: ${JSON.stringify(e).slice(0, 400)}`;
        });
        ch.on("storyRenderPhaseChanged", (p: { newPhase: string }) => {
          w.__play.phases.push(p.newPhase);
        });
      };
      hook();
    });

    await page.goto(`/iframe.html?id=${story.id}&viewMode=story&globals=locale:en`);
    // 例外が出るか、最後の段階（finished）まで進むかのどちらかを待つ
    await page.waitForFunction(
      () => {
        const p = (window as unknown as { __play: { threw: string | null; phases: string[] } }).__play;
        return p.threw !== null || p.phases.includes("finished");
      },
      undefined,
      { timeout: 30_000 },
    );
    const result = await page.evaluate(
      () => (window as unknown as { __play: { threw: string | null; phases: string[] } }).__play,
    );

    // 「play を通っていない」を緑にしない（イベント名が変わると、何も拾えずに通ってしまう）
    expect(result.phases).toContain("playing");
    expect(result.threw).toBeNull();
  });
}
