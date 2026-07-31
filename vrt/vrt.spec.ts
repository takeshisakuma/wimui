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
  // demoDelay(2000ms) + fadeIn で、スクショが 2 秒のフェード/ロード周期の
  // どの時点で撮られるかにより poster/動画の描画状態が変わる（時間依存）。
  // baseline が update のたびに churn するため除外（image--motion-effects と同類）。
  "components-media-video--premium-features",
  // --premium-features と同じ動画の読み込み/フェード依存。2026-07-31 に dark で
  // 65 / 72 / 67 / 60px と**毎回ばらつく**ことを確認（値が動くのがジッタの定義で、
  // 通るか落ちるかは運）。前日 1 度 retry で通ったのを見て「除外基準を満たさない」
  // と判断したのは誤りだった＝「2 ラン目で通った」は安定の証拠にならない。
  "components-media-video--rounded",
  "components-navigation-elements-tabnavigation--contained",
  // --contained と同型。2026-07-31（T45 のベースライン撮り直し）に dark で顕在化:
  // 同一コミットで update → compare を **2 ラン × 3 試行、6 回すべて 137px** で落ちた
  // （ジッタなら値がばらつく。ばらつかないので状態差）。実画像を測ると差分は
  // x106-131 y16-57 の 26×42 に集中し、内訳は `#262626 -> #055d87` が 135px ＝
  // **ページ背景の上にアクティブ/フォーカスのインジケータが出るか出ないか**の差で、
  // 色ではなく描画状態が揺れている。T44 が「アニメーション注入 + 6 秒待ちで安定した」
  // と記録した 4 件の 1 つだが、その対処では止まっていなかった（→ T43）。
  // **light 側の被覆も同時に失う**点は承知のうえ（この Set はストーリー単位で、
  // テーマ別に外す機構が無い）。根治して外すのが本筋。
  "components-navigation-elements-tabnavigation--pills",
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

          // Playwright の `animations: "disabled"` は無限アニメーションを初期状態へ
          // キャンセルする建付けだが、実測では**時間依存が残る**。`VoiceVisualizer` の
          // SVG バー（`voice-bar-idle` 無限アニメーション + バーごとの `animation-delay`）は、
          // 撮影前に 6 秒待つと 80〜456px 変わった（2026-07-30 実測。CI で観測された
          // 452⇄344px と同じ規模）。そこでアニメーションを撮影対象から構造的に外す。
          // 同じ注入で T44 の残り 4 件（`Tabs - Default` / `Tabs - Scrolling` /
          // `TabNavigation - Pills` / `Cascader - Hover Expand`）も 6 秒待ち + 2 ラン
          // 連続で安定した。VRT はレイアウトと色の回帰を見る仕組みなので、アニメーションの
          // 途中のフレームは元から撮る対象ではない（`animations: "disabled"` の意図の徹底）。
          await page.addStyleTag({
            content: "*, *::before, *::after { animation: none !important; }",
          });

          // Compare screenshot
          // Playwright will look for snapshots in vrt/vrt.spec.ts-snapshots/
          await expect(page).toHaveScreenshot(`${theme}/${story.id}.png`, {
            fullPage: true,
            animations: "disabled",
            threshold: 0.1, // Slight per-pixel color tolerance
            // **400 → 50**（T44、2026-07-30）。旧コメントの「連続ランで実測 ≤220px の
            // ジッタ」は**ジッタとドリフトの合計**を見た誤りだった。閾値 0 / retries 0 の
            // 2 ラン突き合わせでの実測: 1986 ケースのうち 1615（81.3%）は差分ゼロ、
            // 差分ありの 371 のうち 349 は**2 ランで同じピクセル数＝ベースラインが古いだけ**、
            // 真に非決定なのは 28（1.4%）だけだった。その 28 はフォントの供給元をローカルへ
            // 移し（#171）、撮影時にアニメーションを外して（#175）解消済みで、
            // 残る既知のジッタは `Tabs - Scrolling` の 11px。
            //
            // 一方**検知したい信号は小さい**: 16px グリフの入れ替えは実測 139〜176px
            // （`FeedbackIcon` を #142 以前へ戻して計測: Alert 141/143/139・Banner 141・
            // Notification 176・Snackbar 147・Toast 145）。400 ではこれを数学的に超えられず、
            // 実際に #142 は 6 コンポーネント中 5 つで緑のまま通過していた。50 なら捕まる。
            maxDiffPixels: 50,
          });
        });
      }
    });
  }
});
