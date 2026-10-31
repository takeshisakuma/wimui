import { test, expect, type Page } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

/**
 * T348: 和文の出し分けは、祖先のどこかではなく**一番近い `lang`** で決まること。
 *
 * `[lang="ja"] &` で書くと、`<body lang="ja">` の中の `<section lang="en">` に置いた部品も
 * 和文の値になる（2026-10-30 に Title で実測: 欧文の列が 1.50 / 1.40）。`:lang(ja)` は
 * 一番近い `lang` を見る。VRT は `lang` が 1 つのページしか撮らないので、ここで測る。
 *
 * 1 つの対象を 4 つの姿で測る:
 *   en       ロケール en（欧文の値の基準）
 *   ja       ロケール ja（和文の値の基準。en と違うことを対照として確かめる）
 *   nested   ロケール ja のまま、部品の外側（#storybook-root）に `lang="en"` → en と同じ
 *   jaJP     ロケール en のまま、html と body を `lang="ja-JP"` に → ja と同じ
 */

const url = (id: string, locale: string) =>
  `/iframe.html?id=${id}&viewMode=story&globals=theme:light;locale:${locale}`;

const PROPS = [
  "font-family",
  "line-height",
  "letter-spacing",
  "padding-top",
  "hyphens",
  "line-break",
  "word-break",
] as const;

type Probe = { name: string; story: string; selector: string };

// 和文の出し分けを持つ部品（`src/**/*.module.scss` で `:lang(ja)` を使うもの）と、
// 素の要素（`lang.scss` / `base.scss`）。素の要素は、どのストーリーでも同じなので Title の上に足す。
const PROBES: Probe[] = [
  { name: "Title h1", story: "components-typography-icons-title--h-1-title", selector: ".wim-title" },
  { name: "Title h6", story: "components-typography-icons-title--h-6-title", selector: ".wim-title" },
  { name: "Alert title", story: "components-alerts-notifications-alert--default", selector: '.wim-alert [class*="_title_"]' },
  { name: "Alert icon", story: "components-alerts-notifications-alert--info", selector: '.wim-alert [class*="_icon_"]' },
  { name: "Toast title", story: "components-alerts-notifications-toast--default", selector: '.wim-toast [class*="_title_"]' },
  { name: "Toast icon", story: "components-alerts-notifications-toast--info", selector: '.wim-toast [class*="_icon_"]' },
  { name: "ThoughtProcess header", story: "components-ai-thoughtprocess--static", selector: '.wim-thought-process [class*="_header_"]' },
  { name: "bare h2", story: "components-typography-icons-title--h-1-title", selector: "#lang-probe h2" },
  { name: "bare p", story: "components-typography-icons-title--h-1-title", selector: "#lang-probe p" },
];

type Mode = "en" | "ja" | "nested" | "jaJP";

async function measure(page: Page, probe: Probe, mode: Mode) {
  await page.addInitScript(() => {
    // Toast を自動で閉じない（ストーリーの `isVrt()`）
    (window as unknown as { __VRT__: boolean }).__VRT__ = true;
  });
  await page.goto(url(probe.story, mode === "en" || mode === "jaJP" ? "en" : "ja"));
  await waitForStoryReady(page);
  return page.evaluate(
    ({ selector, mode, props }) => {
      const root = document.getElementById("storybook-root")!;
      // 素の要素は部品の外側（#storybook-root）の中に置く。`nested` では root ごと en になる。
      const host = document.createElement("div");
      host.id = "lang-probe";
      host.innerHTML = "<h2>Heading</h2><p>Paragraph</p>";
      root.appendChild(host);
      if (mode === "nested") root.setAttribute("lang", "en");
      if (mode === "jaJP") {
        document.documentElement.lang = "ja-JP";
        document.body.lang = "ja-JP";
      }
      const el = document.querySelector(selector);
      if (!el) return null;
      const cs = getComputedStyle(el);
      return Object.fromEntries(props.map((p) => [p, cs.getPropertyValue(p)]));
    },
    { selector: probe.selector, mode, props: [...PROPS] },
  );
}

for (const probe of PROBES) {
  test(`${probe.name}: 一番近い lang で和文と欧文が決まる`, async ({ page }) => {
    const en = await measure(page, probe, "en");
    const ja = await measure(page, probe, "ja");
    const nested = await measure(page, probe, "nested");
    const jaJP = await measure(page, probe, "jaJP");
    expect(en, `${probe.selector} が見つからない`).not.toBeNull();

    // 対照: この対象は lang で値が変わる（変わらないなら、下の比較は何も測っていない）
    expect(ja).not.toEqual(en);
    expect(nested, "ja のページの中の lang=\"en\" の区画は欧文の値").toEqual(en);
    expect(jaJP, "lang=\"ja-JP\" は和文の値").toEqual(ja);
  });
}
