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
  // 兄弟 2 件と同じ動画の読み込み/フェード依存。**除外を保留していた経緯がある**:
  // 2026-08-01 の朝、update のコミットバックを 3 回分測ったところ、非意図的に
  // `maxDiffPixels` を超えるのはこれだけだった（#189 で 98 画素・#192 で 96 画素、
  // maxYIQ 32,600 ＝ 動画フレームがまるごと違う）。しかし**落ちるところを一度も
  // 見ていなかった**ため（ローカルで update → compare を 2 回とも緑、main の
  // compare も 4 ラン連続緑）、この Set の追加基準「同一コミットで update →
  // compare が落ちる」を満たしていないと判断して見送った。
  // **同日夕方に基準を満たした**: #204 のブランチで update（run 30698540931）と
  // compare（run 30698542269）が**同じ head `01f4ed23a`** で走り、compare が
  // これ 1 件だけで落ちた。`--rounded` のコメントが記録している
  // 「1 度 retry で通ったのを見て除外基準を満たさないと判断したのは誤りだった」の
  // 逆側（落ちるのを見ずに除外する）を避けた結果、判断に半日かかった形。
  "components-media-video--default",
  // ChatMessage の isTyping アニメーションを含む
  "patterns-ai--artifacts-canvas",
]);

/*
 * 2026-08-01（T43）に `tabnavigation--pills` と `--contained` をここから外した。
 * 揺れの正体は撮影側ではなく **`useIndicator` の実装バグ**だった: スライダーの寸法は
 * active item の `offsetWidth` から取るのに、ResizeObserver はコンテナしか見ていない。
 * 横並びのタブはコンテナが `width: 100%` なので、**Web フォントが差し替わって item が
 * 伸びてもコンテナは動かず、再計測が走らない**＝フォールバック字形で測った寸法のまま
 * 固定される。`--pills` はフォント到着がマウントに間に合うかどうかの境界にあり
 * 113px ⇄ 117px の二状態になっていた（「6 回すべて 137px」＝値がばらつかない＝
 * ジッタではなく状態差、という読みは当たっていた）。
 *
 * 重要なのは、この穴が **VRT に緑と報告させていた**こと: `Tabs - Default`（8.03px）
 * `Tabs - Scrolling`（6.78px）`TabNavigation - Default`（4.36px）`- Contained`（1.94px）
 * `- With Icons`（1.73px）は「ズレたまま安定」なので毎回同じ絵が撮れていた。
 * つまり除外を外す作業ではなく、出荷され続けていた描画バグを 1 つ直す作業だった。
 */

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
  entry.id.startsWith("audit-") ||
  // T179: プローブは捨てる画面。破棄するときにこの行を戻す。
  entry.id.startsWith("probes-");

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
            // **0.1 → 0.05**（T49、2026-07-31）。これは**ピクセル単位の色許容量**で、
            // `maxDiffPixels`（面積）とは独立した第 2 の盲点だった。pixelmatch は
            // YIQ 距離が `35215 * threshold^2` を超えた画素だけを差分と数えるため、
            // **面積がいくら大きくても 1 画素あたりの色差がこれ未満なら差分は 0**。
            //
            // T45 でページを `#f5f5f5` → `#e5e5e5` に変えたとき、YIQ 距離 129.4 が
            // 旧基準 352.2 を下回り、**全画面の背景が変わったのに 1 枚も落ちなかった**。
            // 実ベースライン 137 件で確認: 旧 0.1 では **0/137**、0.06 以下で
            // **136/137**（差分の中央値 910,200px）。PCCS グレーの隣接する段は
            // 16/255 差なので、**サーフェス階層の変更がまるごと盲点に入っていた**。
            //
            // 0.06 が検知の下限だが基準 126.8 に対し信号 129.4 ＝ 余裕 2% しかないため
            // 0.05（基準 88.0・余裕 47%）を採る。**下げてもジッタが増えないことは実測済み**:
            // Playwright は pixelmatch を `includeAA: false` の既定で使う＝**アンチエイリアス
            // 画素は検出して除外する**ので、閾値を下げてもエッジの揺れは数えられない。
            // 連続する 2 ランのベースライン 52 組（バイト差が実在するものだけ＝最悪ケース）で
            // 0.1 と 0.04 の分布は同一（50/52 が差分ゼロ）。
            //
            // **注意**: `--update-snapshots=all` 導入前の古いベースラインと比べると、
            // 同じ計測で 603 組中 77 件が 50px を超える。これは**蓄積したドリフト**であって
            // ラン間ジッタではない（`changed` モードが書き戻しをサボり続けた結果）。
            // 標本を取り違えるとこの値は選べなくなるので、比較する 2 端がどちらも
            // `=all` 後であることを確かめること。
            //
            // 受け入れ条件の実証（CI で実施）: `surface-app` を 1 段戻した
            // （`gy8-5` → `gy9-5`）使い捨てブランチで **light 942 件が落ちた**
            // （旧 0.1 なら 1 件も落ちない）。この改変は `check:contrast` を通る
            // （126 組緑）ので、**捕まえられるのは VRT だけ**。
            // **鳴ってはいけない経路で鳴らないこと**も同時に確認済み: テストは
            // テーマ順に並ぶためシャード 1・2 が light / 3・4 が dark になり、
            // **dark の 2 シャードは全緑のまま**（light の値しか変えていないため）。
            // 素の状態では同一コミットで compare を **2 回連続緑**（T11 / T43 の基準）。
            threshold: 0.05,
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
