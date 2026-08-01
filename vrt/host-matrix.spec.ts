import { test, expect } from "@playwright/test";
import { waitForRenderSettled } from "./story-ready";

/**
 * ホスト環境マトリクス（T36）。
 *
 * ライブラリが描画される面は 1 つではない。Storybook の canvas、docs ページの
 * **本文**（MDX のプロース）、docs ページの **Canvas ブロック**、そして利用者の
 * アプリ。このうち継続的に検証されていたのは **canvas だけ**だった。VRT は
 * `entry.type === "story"` だけを撮るので、281 件ある docs ページは 1 枚も
 * 撮られていない。
 *
 * docs 側が壊れていたことは T27 で**偶然**見つかった（`sb-unstyled` で直したが
 * 回帰ガードは無い）。ここはその回帰ガードで、同じコンポーネントを 2 つのホストで
 * 描画し、computed style を突き合わせる。**canvas を正**とする — 出荷される CSS が
 * 素で当たるのは canvas だからで、docs 側の差は例外なく Storybook 用スタイルシート
 * （`.storybook/docs-common.scss` / `docs-dark-mode.scss`）の侵入を意味する。
 *
 * スクリーンショットではなく computed style を見る理由:
 *   - 落ちたときに「どの要素のどのプロパティが、どちらのホストでいくつになったか」が
 *     そのまま出る。ピクセル差分は「どこかが違う」までしか言わない。
 *   - docs 本文は canvas より横幅が狭いなど**正当な差**があるので、絵は元から一致しない。
 *
 * 起票時に実測した内容（このガードが無ければ気づけなかったもの）:
 *   - light: `pre.wim-code` 5 件が canvas 2px / docs 4px。`.sbdocs-content pre` に
 *     `sb-unstyled` の除外が付いていなかった（**すぐ下の table 規則には付いている**）。
 *   - dark: 19 件。`Text` の `secondary` が `.sbdocs-content p { color: … !important }` で
 *     白に潰れ、`Code` の中身が `.sbdocs-content code` にフォントサイズごと乗っ取られていた。
 *   - dark の Canvas ブロック: `Code - Inline` が canvas と 9 プロパティ食い違い。
 *     こちらは `sb-unstyled` の外なので、**docs 本文を直しても残る**別のホスト。
 */

/**
 * 突き合わせる宣言。**レイアウト系（width / height / flex）は入れない**: docs 本文は
 * canvas より狭い measure を持つのが正しいので、そこは差が出て当然の軸になる。
 * 見たいのは「ホスト側 CSS がタイポグラフィ・色・枠・内側の余白を書き換えていないか」。
 */
const PROPS = [
  "font-family",
  "font-size",
  "font-weight",
  "line-height",
  "letter-spacing",
  "text-transform",
  "color",
  "background-color",
  "border-top-width",
  "border-top-style",
  "border-top-color",
  "border-radius",
  "padding-top",
  "padding-right",
  "padding-bottom",
  "padding-left",
  "margin-top",
  "margin-bottom",
] as const;

interface Sample {
  tag: string;
  cls: string;
  style: Record<string, string>;
}

interface HostView {
  /** 人が読む名前。失敗メッセージにそのまま出る。 */
  label: string;
  /** テーマを受け取って iframe の URL を返す。 */
  url: (theme: string) => string;
  /** 比較する部分木の根。**両ホストで同じ意味**でなければならない。 */
  root: string;
}

interface Canary {
  name: string;
  /** 正となる canvas ホスト。 */
  reference: HostView;
  /** canvas と一致していてほしい他ホスト。 */
  others: HostView[];
}

const iframe = (id: string, viewMode: "story" | "docs", theme: string) =>
  `/iframe.html?id=${id}&viewMode=${viewMode}&globals=theme:${theme};locale:en`;

const CANARIES: Canary[] = [
  {
    // ホスト: docs ページの**本文**。MDX のプロース用スタイルが直接当たる面で、
    // `sb-unstyled` が守っているのはここ。T27 で壊れていたのもここ。
    name: "Playground gallery (docs prose)",
    reference: {
      label: "canvas (Patterns/Playground)",
      url: (theme) => iframe("patterns-playground--default", "story", theme),
      root: "[data-host-canary]",
    },
    others: [
      {
        label: "docs 本文 (Getting Started/Playground)",
        url: (theme) => iframe("getting-started-playground--docs", "docs", theme),
        root: "[data-host-canary]",
      },
    ],
  },
  {
    // ホスト: docs ページの **Canvas ブロック**。`sb-unstyled` の外側にあるので
    // 本文とは別に壊れる。`Code` を選ぶのは、docs のスタイルシートが
    // `pre` / `code` を名指しで `!important` 上書きしているため＝最も当たりやすい面。
    name: "Code (docs Canvas block)",
    reference: {
      label: "canvas (Code - Inline)",
      url: (theme) => iframe("components-typography-icons-code--inline", "story", theme),
      root: "#storybook-root",
    },
    others: [
      {
        label: "docs Canvas (Code - Inline)",
        url: (theme) => iframe("components-typography-icons-code--docs", "docs", theme),
        // docs は `#story--<id>` の中にもう 1 枚 `-inner` を挟む。canvas 側の
        // `#storybook-root` に対応するのは内側の方（外側を根にすると要素が 1 つ多くなる）。
        root: "#story--components-typography-icons-code--inline-inner",
      },
    ],
  },
  {
    name: "Code block (docs Canvas block)",
    reference: {
      label: "canvas (Code - Block)",
      url: (theme) => iframe("components-typography-icons-code--block", "story", theme),
      root: "#storybook-root",
    },
    others: [
      {
        label: "docs Canvas (Code - Block)",
        url: (theme) => iframe("components-typography-icons-code--docs", "docs", theme),
        root: "#story--components-typography-icons-code--block-inner",
      },
    ],
  },
];

async function sample(
  page: import("@playwright/test").Page,
  view: HostView,
  theme: string,
): Promise<Sample[]> {
  await page.clock.setFixedTime(new Date("2024-01-01T00:00:00Z"));
  await page.goto(view.url(theme), { waitUntil: "domcontentloaded" });
  // マウント判定は canary の根そのもので行う。`waitForStoryReady` の
  // `#storybook-root` 条件は docs ページでは永久に満たされない（docs は別の
  // コンテナへ描く）ため、ここでは根が現れて中身を持つまでを待つ。
  await page.waitForSelector(view.root, { state: "attached", timeout: 30_000 });
  await page.waitForFunction(
    (sel) => (document.querySelector(sel)?.childElementCount ?? 0) > 0,
    view.root,
    { timeout: 30_000 },
  );
  await waitForRenderSettled(page);

  // アニメーション途中の値を拾わないよう、VRT と同じ手当てをしてから読む。
  await page.addStyleTag({
    content: "*, *::before, *::after { animation: none !important; transition: none !important; }",
  });

  return page.evaluate(
    ([rootSel, props]) => {
      const root = document.querySelector(rootSel as string);
      if (!root) throw new Error(`root not found: ${rootSel}`);
      return Array.from(root.querySelectorAll("*")).map((el) => {
        const cs = getComputedStyle(el);
        const style: Record<string, string> = {};
        for (const p of props as readonly string[]) style[p] = cs.getPropertyValue(p);
        return {
          tag: el.tagName.toLowerCase(),
          cls: String(el.getAttribute("class") ?? ""),
          style,
        };
      });
    },
    [view.root, PROPS] as const,
  );
}

/** 失敗時に「どの要素か」を人が特定できる形にする。CSS Modules のハッシュは落とす。 */
const describe = (s: Sample, i: number) => {
  const readable = s.cls
    .split(/\s+/)
    .filter((c) => c && !/^_.*_[a-z0-9]{5}_\d+$/.test(c))
    .join(" ");
  return `#${i} <${s.tag}${readable ? ` class="${readable}"` : ""}>`;
};

for (const theme of ["light", "dark"]) {
  test.describe(`${theme} theme`, () => {
    for (const canary of CANARIES) {
      test(`${canary.name} renders the same in every host`, async ({ page }) => {
        const reference = await sample(page, canary.reference, theme);
        expect(
          reference.length,
          `${canary.reference.label} で 1 要素も取れていない。` +
            `セレクタ \`${canary.reference.root}\` が空振りしているとガードは` +
            `**何も見ずに緑**になるので、ここで落とす。`,
        ).toBeGreaterThan(0);

        for (const other of canary.others) {
          const actual = await sample(page, other, theme);

          expect(
            actual.length,
            `${other.label} と ${canary.reference.label} で要素数が違う` +
              `（${actual.length} vs ${reference.length}）。ホスト側が DOM を包み直したか、` +
              `canary の根がずれている。数が合わないと以降の対応が取れないので先に直すこと。`,
          ).toBe(reference.length);

          const problems: string[] = [];
          for (let i = 0; i < reference.length; i++) {
            if (reference[i].tag !== actual[i].tag) {
              problems.push(
                `${describe(reference[i], i)}: タグが違う（canvas=${reference[i].tag} / ` +
                  `${other.label}=${actual[i].tag}）`,
              );
              break;
            }
            for (const prop of PROPS) {
              const ref = reference[i].style[prop];
              const got = actual[i].style[prop];
              if (ref !== got) {
                problems.push(
                  `${describe(reference[i], i)} ${prop}: canvas=${ref} / ${other.label}=${got}`,
                );
              }
            }
          }

          expect(
            problems,
            `**${other.label}** が canvas と違う描画になっている（${problems.length} 件）。\n` +
              `出荷される CSS が素で当たるのは canvas なので、差はホスト側スタイルシートの\n` +
              `侵入とみなす。まず \`.storybook/docs-common.scss\` と \`.storybook/docs-dark-mode.scss\` の\n` +
              `\`!important\` 規則を疑い、ライブラリのコンポーネントに当たらないよう\n` +
              `\`:not(.sb-unstyled *)\` / \`:not(.sb-story *)\` で除外すること。\n\n` +
              problems.slice(0, 40).join("\n") +
              (problems.length > 40 ? `\n… 他 ${problems.length - 40} 件` : ""),
          ).toEqual([]);
        }
      });
    }
  });
}
