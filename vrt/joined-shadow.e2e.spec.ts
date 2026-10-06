import fs from "fs";
import { test, expect, type Page } from "@playwright/test";
import { waitForStoryReady } from "./story-ready";

// 並んだ面の境目に、隣の要素の影が落ちる（2026-10-06・ユーザーの報告から）。
// SplitButton の solid は、トグルの影が主ボタンの面に落ちて、dark で境目に上下いっぱいの暗い線が出ていた。
// 全ストーリーを同じ手順で測ると、同じ形が ButtonGroup の joined（solid）と、InputGroup の中のボタンにもあった。
// どれも、左へはみ出す影を clip-path で切ってある。
//
// 既定では、影を持つ面が並ぶストーリーだけを見る。全量（1,166 本・約 16 分）は SHADOW_SWEEP=1 で流す:
//   SHADOW_SWEEP=1 SHADOW_REPORT=<書き出し先の接頭辞> npx playwright test joined-shadow.e2e.spec.ts
// 並ぶ面を持つ部品を足したら、JOINED_STORIES に足す。
const JOINED_STORIES = [
  "components-buttons-splitbutton--variants",
  "components-buttons-splitbutton--intents",
  "components-buttons-buttongroup--joined-group-primary",
  "components-form-layout-inputgroup--with-button",
  "components-form-layout-inputgroup--full-width",
];

// 影を持つ要素 b の、各辺のすぐ外側（2px）の点に何があるかを見る。そこに「b の祖先でも子孫でもない、
// 地を持つ要素 a」があり、a が b の下へ潜っていない（= b は a の上に浮いているのではなく、a と並んで
// いる）なら、b の影は a の面に落ちている。兄弟だけを見ると、ラッパーを 1 段挟む SplitButton を拾えない。
const FIND = `(() => {
  const alphaOf = (c) => {
    if (c.startsWith("rgba(")) return parseFloat(c.slice(5).split(",")[3]);
    if (c.includes("/")) return parseFloat(c.split("/")[1]);
    if (c === "transparent") return 0;
    return 1;
  };
  const splitTop = (v) => { const out = []; let depth = 0, cur = ""; for (const ch of v) { if (ch === "(") depth++; if (ch === ")") depth--; if (ch === "," && depth === 0) { out.push(cur.trim()); cur = ""; } else cur += ch; } if (cur.trim()) out.push(cur.trim()); return out; };
  const dropShadow = (v) => {
    if (!v || v === "none") return null;
    let best = null;
    for (const part of splitTop(v)) {
      if (part.includes("inset")) continue;
      const color = part.match(/^(rgba?\\([^)]*\\)|oklch\\([^)]*\\)|oklab\\([^)]*\\)|color\\([^)]*\\)|#[0-9a-f]+|[a-z]+)/i);
      const rest = color ? part.slice(color[0].length) : part;
      const nums = (rest.match(/-?[\\d.]+px/g) || []).map(parseFloat);
      const blur = nums[2] || 0;
      const alpha = color ? alphaOf(color[0]) : 1;
      if (blur <= 0 || alpha <= 0.02) continue;
      if (!best || alpha > best.alpha) best = { alpha, blur };
    }
    return best;
  };
  const keyOf = (el) => el.tagName.toLowerCase() + "." + String(el.className && el.className.baseVal !== undefined ? el.className.baseVal : el.className).trim().split(/\\s+/).filter(Boolean).map((c) => c.replace(/^_/, "").replace(/_[a-z0-9]{4,6}_\\d+$/, "")).sort().join(".");
  const painted = (el) => { const cs = getComputedStyle(el); return alphaOf(cs.backgroundColor) > 0.05 || cs.backgroundImage !== "none"; };
  const vw = innerWidth, vh = innerHeight;
  const at = (x, y) => (x < 0 || y < 0 || x >= vw || y >= vh ? [] : document.elementsFromPoint(x, y));
  const out = [];
  let examined = 0;
  for (const b of document.querySelectorAll("body *")) {
    const cb = getComputedStyle(b);
    const shadow = dropShadow(cb.boxShadow);
    if (!shadow) continue;
    if (cb.visibility === "hidden" || cb.opacity === "0") continue;
    const r = b.getBoundingClientRect();
    if (r.width < 8 || r.height < 8) continue;
    examined++;
    const clipped = cb.clipPath !== "none";
    const mx = r.left + r.width / 2, my = r.top + r.height / 2;
    const probes = [
      ["left", r.left - 2, my, r.left + 8, my],
      ["right", r.right + 2, my, r.right - 8, my],
      ["top", mx, r.top - 2, mx, r.top + 8],
      ["bottom", mx, r.bottom + 2, mx, r.bottom - 8],
    ];
    for (const [side, ox, oy, ix, iy] of probes) {
      const outside = at(ox, oy);
      // いちばん手前の、地を持つ要素
      const a = outside.find((el) => el !== document.documentElement && el !== document.body && painted(el));
      if (!a || a === b || a.contains(b) || b.contains(a)) continue;
      // a が b の下にも広がっているなら、b は a の上に浮いている（メニューやカードの影。意図どおり）
      const inside = at(ix, iy);
      if (inside.includes(a)) continue;
      // b の祖先が a と同じ点に居る（a が b の入れ物の上に重なっている）場合も、並びではない
      const ra = a.getBoundingClientRect();
      // a が b より後に描かれるなら、影は a の下に隠れる
      const bAfter = !!(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING);
      out.push({ shadowEl: keyOf(b), onto: keyOf(a), side, alpha: Math.round(shadow.alpha * 100) / 100, blur: shadow.blur, bAfter, clipped, za: getComputedStyle(a).zIndex, zb: cb.zIndex, aSize: Math.round(ra.width) + "x" + Math.round(ra.height), bSize: Math.round(r.width) + "x" + Math.round(r.height) });
    }
  }
  const seen = new Set();
  return { examined, findings: out.filter((f) => { const k = f.shadowEl + ">" + f.onto + ">" + f.side; if (seen.has(k)) return false; seen.add(k); return true; }) };
})()`;

type Finding = { story: string; shadowEl: string; onto: string; side: string; bAfter: boolean; clipped: boolean };

const measure = async (page: Page, id: string) => {
  await page.goto(`/iframe.html?id=${id}&viewMode=story&globals=theme:dark;locale:en`);
  await waitForStoryReady(page);
  const result = (await page.evaluate(FIND)) as { examined: number; findings: Omit<Finding, "story">[] };
  // 影が隣の面の上に見えるのは、影の要素が後から描かれ、切られていないとき
  const visible = result.findings.filter((f) => f.bAfter && !f.clipped).map((f) => ({ ...f, story: id }));
  return { examined: result.examined, visible };
};

const describeFinding = (f: Finding) => `${f.story} ${f.shadowEl} -> ${f.onto} [${f.side}]`;

if (!process.env.SHADOW_SWEEP) {
  test("no shadow falls on the face of a joined neighbour", async ({ page }) => {
    test.setTimeout(120_000);
    // 縦に長いストーリーでも、画面の外の点は読めない
    await page.setViewportSize({ width: 1280, height: 2000 });
    const visible: Finding[] = [];
    for (const id of JOINED_STORIES) {
      const result = await measure(page, id);
      // 影を持つ要素を 1 つも見ていないなら、測れていない（ストーリーが変わった・影のトークンが変わった）
      expect(result.examined, `${id}: elements with a drop shadow`).toBeGreaterThan(0);
      visible.push(...result.visible);
    }
    expect(visible.map(describeFinding)).toEqual([]);
  });
} else {
  const SHARDS = 6;
  for (let shard = 0; shard < SHARDS; shard++) {
    test(`sweep every story for shadows on a joined neighbour (${shard + 1}/${SHARDS})`, async ({ page, request }) => {
      test.setTimeout(1_800_000);
      await page.setViewportSize({ width: 1280, height: 6000 });
      const index = (await (await request.get("/index.json")).json()) as {
        entries: Record<string, { id: string; type: string }>;
      };
      const stories = Object.values(index.entries)
        .filter((e) => e.type === "story" && /^(components|patterns|audit)-/.test(e.id))
        .map((e) => e.id)
        .sort();
      expect(stories.length).toBeGreaterThan(500);
      const visible: Finding[] = [];
      const unopened: string[] = [];
      let opened = 0;
      for (const [i, id] of stories.entries()) {
        if (i % SHARDS !== shard) continue;
        try {
          visible.push(...(await measure(page, id)).visible);
          opened++;
        } catch {
          unopened.push(id);
        }
      }
      if (process.env.SHADOW_REPORT) {
        fs.writeFileSync(
          `${process.env.SHADOW_REPORT}.${shard}.json`,
          JSON.stringify({ total: stories.length, opened, unopened, visible }, null, 1),
        );
      }
      expect(unopened).toEqual([]);
      expect(visible.map(describeFinding)).toEqual([]);
    });
  }
}
