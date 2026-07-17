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
          await page.goto(url, { waitUntil: "domcontentloaded" });
          await waitForStoryReady(page);

          const results = await analyzeWithRetry(
            page,
            new AxeBuilder({ page })
              .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"])
              .disableRules(DISABLED_RULES),
          );

          expect(results.violations, formatViolations(results.violations)).toEqual([]);
        });
      }
    });
  }
});
