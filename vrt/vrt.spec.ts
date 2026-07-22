import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { waitForStoryReady } from "./story-ready";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use storybook-static/index.json to get the list of all stories.
// Note: If you add new stories, you need to run 'npm run build-storybook' first.
const indexPath = path.resolve(__dirname, "../storybook-static/index.json");

if (!fs.existsSync(indexPath)) {
  console.error("Error: storybook-static/index.json not found.");
  console.error("Please run 'npm run build-storybook' before running VRT.");
  process.exit(1);
}

interface StoryEntry {
  id: string;
  title: string;
  name: string;
  type: "story" | "docs";
}

const index = JSON.parse(fs.readFileSync(indexPath, "utf-8"));

/**
 * JS 駆動アニメーション・埋め込み・キャンバス描画などにより、同一コミット・
 * 同一環境の連続ランでもピクセルが一致しない非決定的ストーリー。
 * `animations: "disabled"` は CSS アニメーションしか止められないため除外する
 * （2026-07-16 の再建時、update 直後の compare で 3 回リトライしても不一致だったもの）。
 * 追加するときは「同一コミットで update → compare が落ちる」ことを確認してから。
 */
const NONDETERMINISTIC_STORY_IDS = new Set([
  "components-basic-inputs-textarea--form-pattern",
  "components-data-indicators-avatargroup--default",
  "components-data-indicators-avatargroup--max-displayed",
  "components-layout-aspectratio--embed",
  "components-alerts-notifications-toast--error-status",
  "components-alerts-notifications-toast--warning",
  "components-data-structures-querybuilder--default",
  "components-data-structures-sortablelist--disabled",
  "components-loading-states-loadingoverlay--blur-effects",
  "components-media-image--motion-effects",
  "components-navigation-elements-tabnavigation--contained",
  // ChatMessage の isTyping アニメーションを含む
  "patterns-ai--artifacts-canvas",
]);

/**
 * コンポーネント丸ごと非決定的なもの（複数ストーリーが別ランで順繰りに
 * フレークした実績）。ChatUI=タイピング/ストリーミング表示、
 * PromptInput=キャレット・添付チップのアニメーション、
 * ScheduleView=FullCalendar の現在時刻インジケータ+行高 px 丸め
 * （default/month/day/interactive が順繰りにフレーク。個別除外を prefix に集約）、
 * NodeGraph=React Flow の `fitView` がノードを ResizeObserver で非同期計測してから
 * ビューポート transform を再計算するため、計測が確定するタイミング次第で
 * zoom/pan にサブピクセル差が乗り、キャンバス全体の AA ジッタが maxDiffPixels を
 * 超える（力学レイアウトではなくノード位置は固定。with-mini-map は minimap が
 * 全体を縮小再描画して増幅、read-only は #50 dark で自ベースラインに 1564px 差分＝
 * update→compare 不一致を確認。default は read-only と非可視フラグ違いのみの同一静的
 * 描画で同じ計測ジッタを共有＝個別除外を prefix に集約）。
 */
const NONDETERMINISTIC_STORY_PREFIXES = [
  "components-ai-chatui--",
  "components-ai-promptinput--",
  "components-visualization-scheduleview--",
  "components-visualization-nodegraph--",
];

/**
 * Audit/* は内部 QA 用の巨大合成ページで、個々のコンポーネントは各自の
 * ストーリーで VRT 済み（カバレッジが重複）。ページが大きいほど
 * ジッタの累積で不安定になるため VRT からは除外する。
 */
const isSkipped = (entry: StoryEntry) =>
  NONDETERMINISTIC_STORY_IDS.has(entry.id) ||
  NONDETERMINISTIC_STORY_PREFIXES.some((p) => entry.id.startsWith(p)) ||
  entry.id.startsWith("audit-");

const stories = Object.values(index.entries).filter(
  (entry: any): entry is StoryEntry => entry.type === "story" && !isSkipped(entry),
);

const themes = process.env.THEME ? [process.env.THEME] : ["light", "dark"];
const filter = process.env.FILTER || "";

test.describe("Visual Regression Testing", () => {
  for (const theme of themes) {
    test.describe(`${theme} theme`, () => {
      for (const story of stories) {
        // Skip if title doesn't match filter
        if (
          filter &&
          !story.title.toLowerCase().includes(filter.toLowerCase())
        ) {
          continue;
        }

        // Generate a separate test for each story and theme.
        test(`${story.title} - ${story.name}`, async ({ page }) => {
          // Fix system time to 2024-01-01 for consistent Calendar / RelativeTime / Countdown
          await page.clock.setFixedTime(new Date("2024-01-01T00:00:00Z"));

          // Set a global flag so components can detect VRT environment
          await page.addInitScript(() => {
            (window as any).__VRT__ = true;
          });

          // Navigate to the clean iframe view
          // We force the theme and English for consistency.
          const url = `/iframe.html?id=${story.id}&viewMode=story&globals=theme:${theme};locale:en`;

          await page.goto(url, {
            waitUntil: "domcontentloaded",
          });

          await waitForStoryReady(page);

          // Compare screenshot
          // Playwright will look for snapshots in vrt/vrt.spec.ts-snapshots/
          await expect(page).toHaveScreenshot(`${theme}/${story.id}.png`, {
            fullPage: true,
            animations: "disabled",
            threshold: 0.1, // Slight per-pixel color tolerance
            // フルページ数百万 px に対する ~0.01%。アンチエイリアスや
            // サブピクセルのジッタ（同一コミット連続ランで実測 ≤220px）を
            // 吸収しつつ、実レイアウト変化（数千 px 以上）は検知する。
            maxDiffPixels: 400,
          });
        });
      }
    });
  }
});
