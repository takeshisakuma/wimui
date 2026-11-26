/**
 * T443: 開く部品の引き金を、全ストーリーでキーボードで開け閉めできるか（MAINTENANCE 7-4 の観点を CI へ）。
 *
 * 2026-11-23 の 7-4 で、全 1,225 ストーリーの `aria-expanded` を持つ引き金（216 個）を手で測り、
 * ContextMenu の領域が中のキーを奪う・TagInput の削除ボタンがキーで押せない、などを見つけた。
 * 一度測っただけでは同じ欠陥が戻るのを防げないので、同じ測り方を CI に置く。部品やストーリーを
 * 足しても、引き金があれば自動で対象に入る（手で並べた一覧を持たない）。
 *
 * 見るもの（引き金ごと。1 ストーリーにつき先頭の 3 つまで）:
 * - Enter と Space で開く（`aria-expanded` が true になる）
 * - ポップアップ（`aria-haspopup` を持つ）は、Escape で閉じ、フォーカスが引き金へ戻る
 *
 * 対象外: `role="treeitem"`。Enter は選ぶ・開閉は → ← という APG の tree の作法なので、Enter で開かないのが正しい。
 *
 * 待ち方: 決まった時間だけ待って測ると、閉じたあとフォーカスを戻すのが遅い部品を外れと読む
 * （11-23 に 180ms 待ちで Popover 系 27 件の誤検出が出た。実際は 250ms 以内に戻っていた）。
 * `expect.poll` で、状態が変わるまで待つ。
 *
 * 走らせ方: 名前に `e2e.spec.ts` を含めないので、必須の E2E のジョブには入らない。e2e.yml の
 * 別のジョブ（open-keys）が、この spec を名指しで流す（2026-11-24 のユーザー判断。必須にするのは、
 * しばらく流してフレークが無いと分かってから）。
 */
import { test, expect, type Page } from "@playwright/test";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const index = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../storybook-static/index.json"), "utf-8"));
const stories: { id: string; title: string; name: string; tags?: string[] }[] = Object.values(
  index.entries as Record<string, { id: string; title: string; name: string; type: string; tags?: string[] }>,
).filter((e) => e.type === "story");

const filter = process.env.FILTER || "";

/** 既知の外れ。キーは `ストーリー ID|引き金の名前`、値は外してよい項目と、起票した番号 */
const KNOWN: Record<string, { skip: "escape"; why: string }> = {
};

const MAX_TRIGGERS = 3;
const MARK = "data-open-keys";

/** 見えていて押せる、閉じた引き金に番号を振る。数を返す */
const markTriggers = (page: Page) =>
  page.evaluate(
    ({ mark, max }) => {
      const list = [...document.querySelectorAll<HTMLElement>('#storybook-root [aria-expanded="false"]')].filter((e) => {
        const r = e.getBoundingClientRect();
        const s = getComputedStyle(e);
        return (
          r.width > 0 &&
          r.height > 0 &&
          s.visibility !== "hidden" &&
          !(e as HTMLButtonElement).disabled &&
          e.getAttribute("aria-disabled") !== "true" &&
          e.getAttribute("role") !== "treeitem"
        );
      });
      list.slice(0, max).forEach((e, i) => e.setAttribute(mark, String(i)));
      return Math.min(list.length, max);
    },
    { mark: MARK, max: MAX_TRIGGERS },
  );

/**
 * play を持つストーリーは、play が終わるまで待つ（2026-11-26）。play は描画のあとで動き、ボタンを押して
 * フォーカスを動かす。待たずに引き金へフォーカスを置くと、play のクリックがあとからフォーカスを奪い、
 * 押したキーが別の要素に届く。QueryBuilder の Default（play が「Add rule」「Add group」を押す）で、
 * CI では Space が「Add group」に届いてグループが増え、CPU を 6 倍遅くした手元では 40 回中 21 回、
 * Escape のあとのフォーカスが引き金に戻らなかった。待ち方は play-functions.e2e.spec.ts と同じ
 * （storyRenderPhaseChanged の finished）。
 */
const watchPlay = (page: Page) =>
  page.addInitScript(() => {
    const w = window as unknown as {
      __openKeysPlay: string[];
      __STORYBOOK_ADDONS_CHANNEL__?: { on: (ev: string, cb: (p: { newPhase: string }) => void) => void };
    };
    w.__openKeysPlay = [];
    const hook = () => {
      const ch = w.__STORYBOOK_ADDONS_CHANNEL__;
      if (!ch) {
        setTimeout(hook, 10);
        return;
      }
      ch.on("storyRenderPhaseChanged", (p) => w.__openKeysPlay.push(p.newPhase));
    };
    hook();
  });

const open = async (page: Page, id: string, hasPlay: boolean) => {
  await page.goto(`/iframe.html?id=${id}&viewMode=story&globals=locale:en`);
  await page.waitForSelector("#storybook-root > *", { state: "attached" });
  if (hasPlay) {
    await page.waitForFunction(
      () => {
        const phases = (window as unknown as { __openKeysPlay: string[] }).__openKeysPlay;
        return phases.includes("finished") || phases.includes("errored");
      },
      undefined,
      { timeout: 30_000 },
    );
  }
  return markTriggers(page);
};

test.describe("Open triggers work from the keyboard", () => {
  // 動きは CSS で 0 秒に上書きせず、利用者の設定（視差効果を減らす）で止める。0 秒に上書きすると、閉じ終わりを
  // 待つ部品（Popover の系統）で閉じる途中の面が DOM に残り、フォーカスが面の中に置き去りになる ── 部品の欠陥ではなく
  // 上書きが作る姿で、2026-11-24 に Popover / Popconfirm / AILabel など 21 本の誤検出になった。reduce なら正しく戻る
  test.use({ reducedMotion: "reduce" });

  for (const story of stories) {
    if (filter && !story.id.includes(filter)) continue;

    test(`${story.title} › ${story.name}`, async ({ page }) => {
      const hasPlay = (story.tags ?? []).includes("play-fn");
      if (hasPlay) await watchPlay(page);
      const count = await open(page, story.id, hasPlay);
      test.skip(count === 0, "no closed trigger");

      for (let i = 0; i < count; i++) {
        for (const key of ["Enter", "Space"] as const) {
          await open(page, story.id, hasPlay);
          const trigger = page.locator(`[${MARK}="${i}"]`);
          // 番号を振った要素が開き直しで消えた（ストーリーの作り直し）ときは、その回は測らない
          if ((await trigger.count()) === 0) continue;
          const info = await trigger.evaluate((e) => ({
            name: (e.getAttribute("aria-label") || e.textContent || "").trim().replace(/\s+/g, " ").slice(0, 40),
            popup: !!e.getAttribute("aria-haspopup") && e.getAttribute("aria-haspopup") !== "false",
          }));
          const where = `trigger #${i} "${info.name}" (${key})`;
          const known = KNOWN[`${story.id}|${info.name}`];

          await trigger.focus();
          await page.keyboard.press(key);
          await expect.poll(() => trigger.getAttribute("aria-expanded"), { message: `${where} opens`, timeout: 2000 }).toBe("true");

          if (key !== "Enter" || !info.popup || known?.skip === "escape") continue;
          await page.keyboard.press("Escape");
          await expect.poll(() => trigger.getAttribute("aria-expanded"), { message: `${where} closes on Escape`, timeout: 2000 }).toBe("false");
          await expect
            .poll(() => trigger.evaluate((e) => e === document.activeElement || e.contains(document.activeElement)), {
              message: `${where} gets focus back after Escape`,
              timeout: 2000,
            })
            .toBe(true);
        }
      }
    });
  }
});
