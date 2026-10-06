import fs from "fs";
import { test, expect, type Page } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

const url = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=theme:light;locale:en`;

// T321: 押しても見た目が変わらない操作要素が、測った 143 個のうち 62 個あった。押下が変わるのは Button を
// 土台にするものと数部品だけで、隣のタブや閉じるボタンは沈まなかった。線は役割で引く（`docs/rules/css.md`）:
//   - 付ける   押すとその場で何かが起きる要素（ボタン・タブ・ラジオ・項目・開閉・閉じる）
//   - 付けない 押すと移動するリンク（役割を持たない `a[href]`）と、外部ライブラリ（xyflow）が描くボタン
//
// 測り方: 部品ごとに既定のストーリーを開き、選択中でない操作要素（種類とクラスが同じものは 1 つ）に
// マウスを載せて押す。**押したまま**の姿と、**押したあとで離して載せ直した**姿を比べる（離すときは要素の
// 外で離すので、click は起きない）。こうすると、押下でフォーカスが移ったことや、pointerdown で開いたことに
// よる変化は両方に入り、差に残るのは `:active` の分だけになる。
const INTERACTIVE = [
  "button",
  "a[href]",
  "summary",
  '[role="button"]',
  '[role="tab"]',
  '[role="radio"]',
  '[role="option"]',
  '[role="menuitem"]',
  '[role="treeitem"]',
].join(",");

/** 押下の見た目を付けない要素。理由は `docs/rules/css.md` の「押下の見た目を付ける要素」。 */
const EXEMPT_CLASS = /react-flow__/;

type Target = { index: number; key: string; label: string; exempt: boolean };

const SETUP = `
  window.__pressedTargets = (selector) => {
    const seen = new Set();
    const out = [];
    const all = Array.from(document.querySelectorAll("#storybook-root " + selector));
    all.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      if (el.matches(":disabled,[aria-disabled='true'],[inert]") || el.closest("[inert],[aria-hidden='true']")) return;
      const shown = getComputedStyle(el);
      if (shown.opacity === "0" || shown.visibility === "hidden" || shown.pointerEvents === "none") return;
      if (el.matches("[aria-selected='true'],[aria-checked='true'],[aria-pressed='true'],[aria-current]")) return;
      const role = el.getAttribute("role") || "";
      // 選べない木の項目は、矢印で移動するための停止点で、押しても何も起きない（TreeDiagram は
      // onSelect を渡したときだけ aria-selected と押下の見た目を持つ）
      if (role === "treeitem" && !el.hasAttribute("aria-selected")) return;
      const key = el.tagName.toLowerCase() + (role ? "[" + role + "]" : "") + "." + String(el.className && el.className.baseVal !== undefined ? el.className.baseVal : el.className).trim().split(/\\s+/).sort().join(".");
      if (seen.has(key)) return;
      seen.add(key);
      const label = (el.getAttribute("aria-label") || el.textContent || "").trim().slice(0, 30);
      const link = el.tagName === "A" && !role;
      out.push({ index, key, label, link });
    });
    return out;
  };
  window.__pressedSnapshot = (selector, index) => {
    const el = document.querySelectorAll("#storybook-root " + selector)[index];
    if (!el) return null;
    const PROPS = ["backgroundColor", "backgroundImage", "color", "borderTopColor", "borderBottomColor", "borderLeftColor", "boxShadow", "transform", "scale", "translate", "opacity", "filter", "outlineColor", "outlineWidth", "fill", "stroke", "textDecorationLine"];
    const read = (node, pseudo) => { const cs = getComputedStyle(node, pseudo); return PROPS.map((p) => cs[p]).join("|"); };
    const nodes = [el, ...Array.from(el.querySelectorAll("*")).slice(0, 40)];
    let up = el.parentElement;
    for (let i = 0; i < 3 && up && up.id !== "storybook-root"; i++, up = up.parentElement) nodes.push(up);
    if (el.previousElementSibling) nodes.push(el.previousElementSibling);
    if (el.nextElementSibling) nodes.push(el.nextElementSibling);
    return nodes.map((n) => read(n) + "~" + read(n, "::before") + "~" + read(n, "::after")).join("\\n");
  };
  window.__pressedPoint = (selector, index) => {
    const el = document.querySelectorAll("#storybook-root " + selector)[index];
    if (!el) return null;
    el.scrollIntoView({ block: "center", inline: "center" });
    const r = el.getBoundingClientRect();
    const x = r.left + r.width / 2, y = r.top + r.height / 2;
    const top = document.elementFromPoint(x, y);
    return { x, y, covered: !(top && (top === el || el.contains(top) || top.contains(el))) };
  };
`;

const prepare = async (page: Page, id: string) => {
  await page.goto(url(id));
  await waitForStoryReady(page);
  await page.addStyleTag({ content: "*,*::before,*::after{transition:none!important;animation:none!important}" });
  await page.evaluate(SETUP);
};

type Finding = { story: string; key: string; label: string; state: "changes" | "same" | "covered" | "exempt" };

const measureStory = async (page: Page, id: string): Promise<Finding[]> => {
  await prepare(page, id);
  const targets = (await page.evaluate(
    (sel) => (window as unknown as { __pressedTargets: (s: string) => (Target & { link: boolean })[] }).__pressedTargets(sel),
    INTERACTIVE,
  )) as (Target & { link: boolean })[];
  const findings: Finding[] = [];
  for (const [n, target] of targets.entries()) {
    const base = { story: id, key: target.key, label: target.label };
    if (target.link || EXEMPT_CLASS.test(target.key)) {
      findings.push({ ...base, state: "exempt" });
      continue;
    }
    // 前の要素の操作（pointerdown で開く・フォーカスが移る）を持ち越さない
    if (n > 0) await prepare(page, id);
    const snapshot = () =>
      page.evaluate(
        ([sel, index]) =>
          (window as unknown as { __pressedSnapshot: (s: string, i: number) => string | null }).__pressedSnapshot(
            sel as string,
            index as number,
          ),
        [INTERACTIVE, target.index] as const,
      );
    const point = await page.evaluate(
      ([sel, index]) =>
        (
          window as unknown as {
            __pressedPoint: (s: string, i: number) => { x: number; y: number; covered: boolean } | null;
          }
        ).__pressedPoint(sel as string, index as number),
      [INTERACTIVE, target.index] as const,
    );
    if (!point || point.covered) {
      findings.push({ ...base, state: "covered" });
      continue;
    }
    await page.mouse.move(point.x, point.y);
    await page.mouse.down();
    const pressed = await snapshot();
    // 要素の外で離す（click を起こさない）。そのあと載せ直して、押していない姿を読む
    await page.mouse.move(1, 1);
    await page.mouse.up();
    await page.mouse.move(point.x, point.y);
    const released = await snapshot();
    findings.push({ ...base, state: pressed !== null && pressed !== released ? "changes" : "same" });
  }
  return findings;
};

const SHARDS = 6;

for (let shard = 0; shard < SHARDS; shard++) {
  test(`pressed look on every in-place control (${shard + 1}/${SHARDS})`, async ({ page, request }) => {
    test.setTimeout(900_000);
    const index = (await (await request.get("/index.json")).json()) as {
      entries: Record<string, { id: string; type: string }>;
    };
    // 部品ごとに 1 本: 既定のストーリー。無ければ最初のストーリー（Carousel・Tabs などは Default を持たない）
    const byComponent = new Map<string, string>();
    for (const e of Object.values(index.entries)) {
      if (e.type !== "story" || !e.id.startsWith("components-")) continue;
      const component = e.id.split("--")[0];
      if (!byComponent.has(component) || e.id.endsWith("--default")) byComponent.set(component, e.id);
    }
    const stories = [...byComponent.values()].sort();
    // 一覧が読めていること（0 本だと、何も測らずに通る）
    expect(stories.length).toBeGreaterThan(150);

    const findings: Finding[] = [];
    for (const [i, id] of stories.entries()) {
      if (i % SHARDS !== shard) continue;
      findings.push(...(await measureStory(page, id)));
    }
    if (process.env.PRESSED_REPORT) {
      fs.writeFileSync(`${process.env.PRESSED_REPORT}.${shard}.json`, JSON.stringify(findings, null, 1));
    }
    const same = findings.filter((f) => f.state === "same").map((f) => `${f.story} ${f.key} "${f.label}"`);
    expect(same).toEqual([]);
  });
}
