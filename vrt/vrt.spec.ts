import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { waitForStoryReady } from "./story-ready";
import {
  NONDETERMINISTIC_STORY_IDS,
  NONDETERMINISTIC_STORY_PREFIXES,
} from "./nondeterministic-stories.js";

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

// 除外リストは vrt/nondeterministic-stories.js に置く（SSOT）。
// check:vrt-orphans が同じ物を読んで「除外されたストーリーのベースライン」を見張る（T204）。
const NONDETERMINISTIC_IDS_SET = new Set(NONDETERMINISTIC_STORY_IDS);


/**
 * Audit/* は内部 QA 用の巨大合成ページで、個々のコンポーネントは各自の
 * ストーリーで VRT 済み（カバレッジが重複）。ページが大きいほど
 * ジッタの累積で不安定になるため VRT からは除外する。
 */
const isSkipped = (entry: StoryEntry) =>
  NONDETERMINISTIC_IDS_SET.has(entry.id) ||
  NONDETERMINISTIC_STORY_PREFIXES.some((p) => entry.id.startsWith(p)) ||
  // T217: **意図的な除外**（59dae5e8a）。理由がコミットメッセージにしか無く、
  // 2026-08-22 に「Audit が 1 枚も撮られていない」を欠陥として起票しかけたので、
  // ここへ書き写す:
  //   ① 家族ページは**内部 QA 用の巨大合成ページ**で、個別ストーリーと
  //      カバレッジが重複する
  //   ② **ページサイズに比例して AA ジッタが累積する** ── 当時「毎回別の
  //      数ストーリーが数〜数百 px の差で落ちる」回転フレークを 2 回の compare で
  //      確認し、`maxDiffPixels: 400` と併せて入れた対処。除外時に
  //      ベースライン 46 枚を削除している
  // **a11y は Audit を見ている**（`vrt/a11y-incomplete.json` に `audit-*` の行が
  // ある）ので、抜けているのは視覚だけ。撮ることにするなら、`RelativeTime` /
  // `Countdown` のような**時刻に依存する部品**の凍結が要る。
  entry.id.startsWith("audit-") ||
  // T179: プローブ＝捨てる画面。書くあいだはこの行が要る
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
          // **`transition` も止める**（2026-08-21）。`animation` だけ止めていたため、
          // 入場遷移を持つコンポーネントは**遷移の途中で撮られていた**。実測
          // （`snackbar--warning`）: `waitForStoryReady` とこの注入の直後の時点で
          // `transform: matrix(0.985, 0, 0, 0.985, 0, 5.89)` / `opacity: 0.705`
          // ＝ 333ms の transition の途中。300ms 後には静止する。
          //
          // 途中で撮ると**その回ごとに違う絵**になる。実際に #474 で
          // `dark/snackbar--warning` が **350px 差（文字が 1px 縦にずれる）** で
          // 落ちた ── ベースライン側が遷移の途中、compare 側が静止だった
          // （compare は 3 回とも同じ 350px なので、ぶれていたのはベースライン側）。
          // `transition: none` を当てると**その場で目標値になる**ので、待たずに
          // 静止状態を撮れる。Playwright の `animations: "disabled"` は
          // これを取りこぼしていた。
          await page.addStyleTag({
            content:
              "*, *::before, *::after { animation: none !important; transition: none !important; }",
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
