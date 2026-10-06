import fs from "fs";
import { test, expect, type Page } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

// 既定は light・comfortable・部品ごとに 1 本。測り残しを見るときは環境変数で広げる（CI では流さない）:
//   PRESSED_GLOBALS="theme:dark;locale:en"                    dark
//   PRESSED_GLOBALS="theme:light;locale:en;density:compact"   compact
//   PRESSED_ALL=1                                             全ストーリー（既定のストーリーに出ない操作要素）
const GLOBALS = process.env.PRESSED_GLOBALS ?? "theme:light;locale:en";
const ALL_STORIES = !!process.env.PRESSED_ALL;
const url = (id: string) => `/iframe.html?id=${id}&viewMode=story&globals=${GLOBALS}`;

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
// - react-flow__      xyflow が描くボタン
// - wim-box           レイアウトの素の箱を、ストーリーが button として描いたもの（Box は見た目を持たない）
// - appshell-modern-  ストーリーが自前の CSS で描いたボタン
const EXEMPT_CLASS = /react-flow__|\.wim-box(\.|$)|appshell-modern-/;

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
      // クラスを 1 つも持たない要素は、ストーリーが直に置いた素のボタン（部品の要素ではない）
      const scaffold = !String(el.className && el.className.baseVal !== undefined ? el.className.baseVal : el.className).trim();
      out.push({ index, key, label, link, scaffold });
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
  // 押して縮む要素（scale が付いた要素）のうち、縮みがトランジションに乗っていないものを数える。
  // 乗っていないと、大きさが瞬時に変わる（Carousel の前へ・次へで目立った。2026-10-06 ユーザーの指摘）。
  // 計測のためにトランジションを切っているので、その style を一時的に外して読む。
  window.__pressedSnaps = (selector, index) => {
    const el = document.querySelectorAll("#storybook-root " + selector)[index];
    if (!el) return 0;
    const nodes = [el, ...Array.from(el.querySelectorAll("*")).slice(0, 40)];
    const shrunk = nodes.filter((n) => getComputedStyle(n).scale !== "none");
    if (shrunk.length === 0) return 0;
    const off = document.querySelector("style[data-pressed-probe]");
    if (off) off.disabled = true;
    const bad = shrunk.filter((n) => {
      const cs = getComputedStyle(n);
      const props = cs.transitionProperty.split(",").map((p) => p.trim());
      const durations = cs.transitionDuration.split(",").map((d) => parseFloat(d));
      const i = props.findIndex((p) => p === "scale" || p === "all");
      return i < 0 || !(durations[i % durations.length] > 0);
    }).length;
    if (off) off.disabled = false;
    return bad;
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
  await page.evaluate(SETUP);
  await page.evaluate(() => {
    const off = document.createElement("style");
    off.setAttribute("data-pressed-probe", "");
    off.textContent = "*,*::before,*::after{transition:none!important;animation:none!important}";
    document.head.appendChild(off);
  });
};

type Finding = {
  story: string;
  key: string;
  label: string;
  state: "changes" | "same" | "covered" | "exempt";
  /** ほかの要素に覆われていてマウスで押せず、開発者ツールの「状態を強制」で測った */
  forced?: boolean;
  /** 押して縮むのに、縮みがトランジションに乗っていない */
  snaps?: boolean;
};

// 覆われていてマウスで押せない要素（SwipeAction の奥のボタン・ImageCompare のつまみ）は、
// :hover と :hover:active を強制して比べる。押下で親に付く :active は再現できない。
const measureForced = async (page: Page, index: number): Promise<"changes" | "same" | "covered"> => {
  const client = await page.context().newCDPSession(page);
  try {
    await page.evaluate(
      ([sel, i]) => {
        document.querySelectorAll("#storybook-root " + sel)[i as number]?.setAttribute("data-pressed-forced", "");
      },
      [INTERACTIVE, index] as const,
    );
    await client.send("DOM.enable");
    await client.send("CSS.enable");
    const { root } = await client.send("DOM.getDocument", { depth: 0 });
    const { nodeId } = await client.send("DOM.querySelector", { nodeId: root.nodeId, selector: "[data-pressed-forced]" });
    if (!nodeId) return "covered";
    const snapshot = () =>
      page.evaluate(
        ([sel, i]) =>
          (window as unknown as { __pressedSnapshot: (s: string, n: number) => string | null }).__pressedSnapshot(
            sel as string,
            i as number,
          ),
        [INTERACTIVE, index] as const,
      );
    await client.send("CSS.forcePseudoState", { nodeId, forcedPseudoClasses: ["hover"] });
    const hovered = await snapshot();
    await client.send("CSS.forcePseudoState", { nodeId, forcedPseudoClasses: ["hover", "active"] });
    const pressed = await snapshot();
    return pressed !== null && pressed !== hovered ? "changes" : "same";
  } catch {
    return "covered";
  } finally {
    await client.detach().catch(() => undefined);
  }
};

const measureStory = async (page: Page, id: string, seen?: Set<string>): Promise<Finding[]> => {
  await prepare(page, id);
  const targets = (await page.evaluate(
    (sel) => (window as unknown as { __pressedTargets: (s: string) => (Target & { link: boolean; scaffold: boolean })[] }).__pressedTargets(sel),
    INTERACTIVE,
  )) as (Target & { link: boolean; scaffold: boolean })[];
  const findings: Finding[] = [];
  for (const [n, target] of targets.entries()) {
    // 全ストーリーを開くときは、同じ部品の別のストーリーで測った要素を測り直さない
    if (seen) {
      if (seen.has(target.key)) continue;
      seen.add(target.key);
    }
    const base = { story: id, key: target.key, label: target.label };
    if (target.link || target.scaffold || EXEMPT_CLASS.test(target.key)) {
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
      findings.push({ ...base, state: await measureForced(page, target.index), forced: true });
      continue;
    }
    await page.mouse.move(point.x, point.y);
    await page.mouse.down();
    // 押した点に、もうその要素が居ないことがある（xyflow は表示のあとでノードの位置を合わせ直す）。
    // :active が付いていなければ、押せていなかった可能性がある。
    const landed = await page.evaluate(
      ([sel, index]) => !!document.querySelectorAll("#storybook-root " + sel)[index as number]?.matches(":active"),
      [INTERACTIVE, target.index] as const,
    );
    const pressed = await snapshot();
    const snaps =
      (await page.evaluate(
        ([sel, index]) =>
          (window as unknown as { __pressedSnaps: (s: string, i: number) => number }).__pressedSnaps(
            sel as string,
            index as number,
          ),
        [INTERACTIVE, target.index] as const,
      )) > 0;
    // 要素の外で離す（click を起こさない）。そのあと載せ直して、押していない姿を読む
    await page.mouse.move(1, 1);
    await page.mouse.up();
    await page.mouse.move(point.x, point.y);
    const released = await snapshot();
    if (pressed !== null && pressed !== released) {
      findings.push({ ...base, state: "changes", snaps });
    } else if (!landed) {
      // 変わらず、しかも :active が付いていなかった ＝ 押せていなかった可能性。状態を強制して測り直す。
      // （:active が付いていなくても変わる部品はある ── TreeView は pointerdown で行を描き直し、
      //   押下の見た目は行の側に付く。だから、変わったかどうかを先に見る）
      findings.push({ ...base, state: await measureForced(page, target.index), forced: true });
    } else {
      findings.push({ ...base, state: "same", snaps });
    }
  }
  return findings;
};

const SHARDS = 6;

for (let shard = 0; shard < SHARDS; shard++) {
  test(`pressed look on every in-place control (${shard + 1}/${SHARDS})`, async ({ page, request }) => {
    test.setTimeout(ALL_STORIES ? 3_600_000 : 900_000);
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
    const stories = ALL_STORIES
      ? Object.values(index.entries)
          .filter((e) => e.type === "story" && e.id.startsWith("components-"))
          .map((e) => e.id)
          .sort()
      : [...byComponent.values()].sort();
    const components = [...new Set(stories.map((id) => id.split("--")[0]))];
    const seenByComponent = new Map<string, Set<string>>();
    // 一覧が読めていること（0 本だと、何も測らずに通る）
    expect(stories.length).toBeGreaterThan(150);

    const findings: Finding[] = [];
    for (const id of stories) {
      // 部品で割り振る（全ストーリーを開くとき、同じ部品のストーリーを同じ組で順に見る）
      const component = id.split("--")[0];
      if (components.indexOf(component) % SHARDS !== shard) continue;
      if (ALL_STORIES && !seenByComponent.has(component)) seenByComponent.set(component, new Set());
      findings.push(...(await measureStory(page, id, seenByComponent.get(component))));
    }
    if (process.env.PRESSED_REPORT) {
      fs.writeFileSync(`${process.env.PRESSED_REPORT}.${shard}.json`, JSON.stringify(findings, null, 1));
    }
    const same = findings.filter((f) => f.state === "same").map((f) => `${f.story} ${f.key} "${f.label}"`);
    expect(same).toEqual([]);
    const snapping = findings.filter((f) => f.snaps).map((f) => `${f.story} ${f.key} "${f.label}"`);
    expect(snapping).toEqual([]);
  });
}
