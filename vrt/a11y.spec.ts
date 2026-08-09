import { test, expect, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import type { Result } from "axe-core";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { waitForStoryReady } from "./story-ready";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const indexPath = path.resolve(__dirname, "../storybook-static/index.json");

if (!fs.existsSync(indexPath)) {
  console.error("Error: storybook-static/index.json not found.");
  console.error("Please run 'npm run build-storybook' before running a11y tests.");
  process.exit(1);
}

interface StoryEntry {
  id: string;
  title: string;
  name: string;
  type: "story" | "docs";
}

const index = JSON.parse(fs.readFileSync(indexPath, "utf-8"));
const stories = Object.values(index.entries).filter(
  (entry: unknown): entry is StoryEntry =>
    (entry as StoryEntry).type === "story",
);

const filter = process.env.FILTER || "";
const themes = process.env.THEME ? [process.env.THEME] : ["light", "dark"];

// Rules that require page-level structure (<main>, <h1>, <title>, lang) which
// Storybook iframes intentionally omit — these are not component-level issues.
// document-title / html-has-lang are reported since axe-core 4.12.
// landmark-main-* / landmark-unique: Audit ページ等で AppShell（<main> を含む）を
// 1 キャンバスに複数並べる Storybook 合成起因であり、実アプリでは起きない構造。
const DISABLED_RULES = [
  "landmark-one-main",
  "landmark-no-duplicate-main",
  "landmark-main-is-top-level",
  "landmark-unique",
  "page-has-heading-one",
  "region",
  "document-title",
  "html-has-lang",
];

async function analyzeWithRetry(page: Page, builder: AxeBuilder, retries = 3): Promise<Awaited<ReturnType<AxeBuilder["analyze"]>>> {
  for (let i = 0; i < retries; i++) {
    try {
      return await builder.analyze();
    } catch (err) {
      if (i < retries - 1 && (err as Error).message?.includes("Axe is already running")) {
        await page.waitForTimeout(500 * (i + 1));
        continue;
      }
      throw err;
    }
  }
  throw new Error("axe analyze failed after retries");
}

/**
 * **axe は 1 文字（に近い）要素の色コントラストを測らない**（T108）。
 * `Element content is too short to determine if it is actual text content` として
 * `incomplete` に落とすので、`violations` だけを見ていると**存在する違反が素通りする**。
 *
 * 実際に起きた: `Calendar` の曜日ヘッダは無効時に 2.70〜4.50 しか無かったのに、
 * 曜日名が `日` `月` の 1 文字だったため 4 か月以上どの CI でも赤にならなかった。
 * ロケール由来の `Sun` `Mon` にした瞬間、**同じ要素・同じ色**で 7 件の violations に変わった（T107）。
 *
 * **自前でコントラストを計算しない。** 対象要素のテキストを一時的に伸ばして
 * **axe にもう一度測らせる** ── このセッションで色計算を再実装したら本物と食い違った
 * （最小コントラストが 4.62 のところ 1.01 と出た）ので、判定は axe に任せる。
 *
 * 短いテキストが無いストーリーでは 2 回目を走らせないので、追加コストはほぼゼロ。
 */
async function violationsHiddenByShortText(
  page: Page,
  results: Awaited<ReturnType<AxeBuilder["analyze"]>>,
  build: () => AxeBuilder,
): Promise<Result[]> {
  const tooShort = results.incomplete
    .filter((r) => r.id === "color-contrast")
    .flatMap((r) => r.nodes)
    .filter((n) => JSON.stringify(n).includes("too short"));
  if (tooShort.length === 0) return [];

  const targets = tooShort
    .map((n) => n.target[0])
    .filter((t): t is string => typeof t === "string");

  // 伸ばすだけ。元に戻さないのは、この直後にテストが終わるため。
  await page.evaluate((sels) => {
    for (const s of sels) {
      const el = document.querySelector(s);
      if (el) el.textContent = "XXXXXXXX";
    }
  }, targets);

  const after = await analyzeWithRetry(page, build());
  return after.violations
    .map((r) => ({
      ...r,
      nodes: r.nodes.filter((n) => targets.includes(n.target[0] as string)),
    }))
    .filter((r) => r.nodes.length > 0);
}

function formatViolations(violations: Result[]): string {
  if (violations.length === 0) return "";
  return violations
    .map(
      (v) =>
        `\n  [${(v.impact ?? "unknown").toUpperCase()}] ${v.id}: ${v.description}\n` +
        `  Help: ${v.helpUrl}\n` +
        v.nodes
          .slice(0, 3)
          .map((n) => `    - ${n.html.slice(0, 120)}`)
          .join("\n"),
    )
    .join("\n");
}

test.describe("Accessibility (axe-core / WCAG 2.1 AA)", () => {
  for (const theme of themes) {
    test.describe(`${theme} theme`, () => {
      for (const story of stories) {
        if (filter && !story.title.toLowerCase().includes(filter.toLowerCase())) {
          continue;
        }

        test(`${story.title} › ${story.name}`, async ({ page }) => {
          const url = `/iframe.html?id=${story.id}&viewMode=story&globals=theme:${theme};locale:en`;

          // goto+固定300ms だけではコード分割ストーリーのマウント前に axe が
          // 走り、空 root（旧サーバ構成ではマネージャ UI）を検査してしまう。
          // VRT と同じマウント待ちを使う。
          await page.emulateMedia({ reducedMotion: "reduce" });
          await page.goto(url, { waitUntil: "domcontentloaded" });
          await waitForStoryReady(page);

          // フェードイン途中の半透明テキストを axe が拾うと color-contrast が
          // 非決定的に落ちる（CI 実測: Snackbar の enter transition）。
          // トランジション/アニメーションを止めて最終状態で計測する。
          await page.addStyleTag({
            content:
              "*, *::before, *::after { transition: none !important; animation: none !important; }",
          });

          const build = () =>
            new AxeBuilder({ page })
              .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"])
              .disableRules(DISABLED_RULES);

          const results = await analyzeWithRetry(page, build());
          const hidden = await violationsHiddenByShortText(page, results, build);

          const all = [...results.violations, ...hidden];
          expect(all, formatViolations(all)).toEqual([]);
        });
      }
    });
  }
});
