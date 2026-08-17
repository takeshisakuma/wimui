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
// `bypass`（繰り返しブロックを飛ばす手立て＝スキップリンク）も同じ理由で外す。
// **`pageLevel: true` かつ `reviewOnFail: true`** なので violations には一度も
// 出ておらず、incomplete を数え始めて初めて見えた ── 実測で**ストーリーの
// 9 割以上**（見出しもランドマークも無いキャンバスすべて）に付く。1 コンポーネント
// だけを載せた iframe に「飛ばす手立て」を求めるのは意味が無い（T205）。
const DISABLED_RULES = [
  "bypass",
  "landmark-one-main",
  "landmark-no-duplicate-main",
  "landmark-main-is-top-level",
  "landmark-unique",
  "page-has-heading-one",
  "region",
  "document-title",
  "html-has-lang",
];

/**
 * **`incomplete`（＝ axe が「人が確かめろ」と言った指摘）のラチェット。**
 *
 * このスペックは長いあいだ `violations` だけを見ていた。Storybook の a11y
 * アドオンは既定で `incomplete` もパネルに出すので、**画面には見えているのに
 * CI は黙っている**指摘が構造的に残る（T205）。全量スキャンの実測では
 * 9 ルール / 224 ストーリーあり、その中に実在の欠陥が混じっていた
 * （ロールを持たない `div` の `aria-label`、開くまで無い ID を指す
 * `aria-controls`、字幕トラックの無い `<video>` など）。
 *
 * 直せるものを直したうえで、**残りは「見たうえで許す」形にしないと毎回
 * 同じ目視が発生する**ので、rule × story × theme をベースラインに固定して
 * **増えても減っても落ちる**ようにした。減ったら落ちるのは、直したのに
 * 許可が残り続ける状態（＝次に同じ指摘が出ても気づけない）を防ぐため。
 *
 * 更新は `A11Y_INCOMPLETE_UPDATE=1` を付けた**全量**の実行 →
 * `npm run a11y:incomplete:update`（手順は `MAINTENANCE.md`）。
 */
const BASELINE_PATH = path.resolve(__dirname, "a11y-incomplete.json");
const UPDATE_BASELINE = process.env.A11Y_INCOMPLETE_UPDATE === "1";
const FRAGMENT_DIR = path.resolve(__dirname, ".a11y-incomplete");

interface IncompleteBaseline {
  reasons: Record<string, string>;
  /**
   * **出たり出なかったりするルール。** 許可として載っていても「今回は出なかった」
   * を赤にしない（新しく出たほうは赤のまま）。
   *
   * 全量 2130 通りを 2 回測って分かった実測（2026-08-17）: `frame-tested` は
   * 外部 iframe（Google Maps）が読み込めた回にしか出ない ── 1 回目は出て、
   * 2 回目は light / dark とも消え、リトライ 3 回でも戻らなかった。同じ理由で
   * VRT もこのストーリーを除外している（`vrt/nondeterministic-stories.js`）。
   */
  unstable: Record<string, string>;
  /**
   * **測るたびに結果が変わるストーリー。** 許可に載っているルールが出なくても
   * 赤にしない（新しく出たほうは赤のまま）。ルール単位（`unstable`）と違い、
   * 原因がストーリー側の作り（時間で中身が変わる等）にある場合はこちら。
   */
  unstableStories: Record<string, string>;
  stories: Record<string, Record<string, string[]>>;
}

const baseline: IncompleteBaseline = JSON.parse(
  fs.readFileSync(BASELINE_PATH, "utf-8"),
);

if (UPDATE_BASELINE) {
  // **ここで消さないこと。** このファイルはワーカーの数だけ import されるので、
  // 遅れて起動したワーカーが先に書かれた断片を消しうる（リトライで新しい
  // ワーカーが立つ経路もある）。片付けは畳む側（`a11y:incomplete:update`）が、
  // 全量そろっていることを確かめてから 1 回だけやる。
  fs.mkdirSync(FRAGMENT_DIR, { recursive: true });
}

function formatIncompleteDiff(
  added: string[],
  removed: string[],
  results: Awaited<ReturnType<AxeBuilder["analyze"]>>,
): string {
  const lines: string[] = [];
  if (added.length > 0) {
    lines.push(
      `\n  **新しい incomplete**（axe が「人が確かめろ」と言っている）: ${added.join(", ")}`,
    );
    for (const id of added) {
      const r = results.incomplete.find((x) => x.id === id);
      if (!r) continue;
      const n = r.nodes[0];
      lines.push(
        `    [${(r.impact ?? "unknown").toUpperCase()}] ${id}: ${r.description}`,
        `    ${r.helpUrl}`,
        `    - ${n?.html.slice(0, 160) ?? ""}`,
        `    - なぜ判定できないか: ${n?.any?.[0]?.message ?? n?.all?.[0]?.message ?? n?.none?.[0]?.message ?? "(理由なし)"}`,
      );
    }
    lines.push(
      "    直せるなら直す。機械の限界なら vrt/a11y-incomplete.json に理由つきで足す（npm run a11y:incomplete:update）。",
    );
  }
  if (removed.length > 0) {
    lines.push(
      `\n  **消えた incomplete**: ${removed.join(", ")}`,
      "    直ったなら vrt/a11y-incomplete.json から消す（npm run a11y:incomplete:update）。",
      "    許可を残したままにすると、次に同じ指摘が出ても誰も気づけない。",
    );
  }
  return lines.join("\n");
}

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

          // `incomplete` は DOM をいじる前の 1 回目から取る
          // （下の short-text 再測定は要素の中身を書き換えるため）。
          const observed = [...new Set(results.incomplete.map((r) => r.id))].sort();

          const hidden = await violationsHiddenByShortText(page, results, build);

          const all = [...results.violations, ...hidden];
          expect(all, formatViolations(all)).toEqual([]);

          if (UPDATE_BASELINE) {
            fs.writeFileSync(
              path.join(FRAGMENT_DIR, `${story.id}__${theme}.json`),
              JSON.stringify({ story: story.id, theme, rules: observed }),
            );
            return;
          }

          const byTheme = baseline.stories[story.id] ?? {};
          const allowed = [...(byTheme[theme] ?? [])].sort();

          /*
           * **揺れるものは両方向に揺れる。** 「今回は出なかった」だけを容赦すると、
           * 反対に振れた回（light に出るはずが dark に出た）で赤になる ──
           * `Audio/PremiumFeatures` は実際に CI の 2 ラン間で light ⇄ 消滅を
           * 往復した。そこで揺れると分かっているものは、**そのストーリーで
           * どちらかのテーマに載っているルールに限って**、出る / 出ないの
           * どちらも許す。**どのテーマにも載っていないルールが出たら赤**なので、
           * 「新しい指摘」を見落とす範囲は広がらない。
           */
          const storyIsUnstable = Boolean(baseline.unstableStories[story.id]);
          const known = new Set(Object.values(byTheme).flat());
          const forgiving = (id: string) =>
            Boolean(baseline.unstable[id]) || storyIsUnstable;

          const expected = [
            ...allowed.filter((id) => observed.includes(id) || !forgiving(id)),
            ...observed.filter(
              (id) => !allowed.includes(id) && known.has(id) && forgiving(id),
            ),
          ].sort();
          const added = observed.filter((id) => !allowed.includes(id));
          const removed = expected.filter((id) => !observed.includes(id));
          expect(
            observed,
            formatIncompleteDiff(added, removed, results),
          ).toEqual(expected);
        });
      }
    });
  }
});
