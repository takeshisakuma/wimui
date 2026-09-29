import { describe, it, expect } from "vitest";
import { layoutTree, type TreeLayoutInput, type TreeLayoutOptions } from "./layoutTree";

const OPTS: TreeLayoutOptions = {
  nodeWidth: 100,
  nodeHeight: 40,
  siblingGap: 20,
  levelGap: 30,
  orientation: "vertical",
  isExpanded: () => true,
};

const leaf = (value: string): TreeLayoutInput => ({ value });
const node = (value: string, ...children: TreeLayoutInput[]): TreeLayoutInput => ({ value, children });

// 決まった乱数（線形合同法）。テストの木を毎回同じにする
const rng = (seed: number) => () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
};

const randomTree = (rand: () => number, depth: number, id = { n: 0 }): TreeLayoutInput => {
  const value = `n${id.n++}`;
  if (depth === 0) return { value };
  const count = Math.floor(rand() * 4); // 0〜3 人の子
  return { value, children: Array.from({ length: count }, () => randomTree(rand, depth - 1, id)) };
};

type Laid = ReturnType<typeof layoutTree>["nodes"];

/** 約束 1〜3 を確かめる。破れていたら理由を返す。 */
const check = (nodes: Laid, opts: TreeLayoutOptions): string[] => {
  const out: string[] = [];
  const vertical = opts.orientation === "vertical";
  const breadth = (n: { x: number; y: number }) => (vertical ? n.x : n.y);
  const depthPos = (n: { x: number; y: number }) => (vertical ? n.y : n.x);
  const breadthSize = vertical ? opts.nodeWidth : opts.nodeHeight;
  const byDepth = new Map<number, typeof nodes>();
  for (const n of nodes) byDepth.set(n.depth, [...(byDepth.get(n.depth) ?? []), n]);
  for (const [d, row] of byDepth) {
    // 1. 同じ深さのノードは siblingGap 以上離れる（別の部分木どうしも含む）
    const sorted = [...row].sort((a, b) => breadth(a) - breadth(b));
    for (let i = 1; i < sorted.length; i++) {
      const gap = breadth(sorted[i]) - breadth(sorted[i - 1]) - breadthSize;
      if (gap < opts.siblingGap - 1e-9) out.push(`depth ${d}: ${sorted[i - 1].value} と ${sorted[i].value} の間隔 ${gap}`);
    }
    // 3. 同じ深さは同じ位置
    if (new Set(row.map(depthPos)).size !== 1) out.push(`depth ${d}: 深さ方向の位置が揃っていない`);
  }
  // 2. 親は最初の子と最後の子の中点
  for (const p of nodes) {
    const kids = nodes.filter((n) => n.parent === p.value);
    if (!kids.length) continue;
    const mid = (breadth(kids[0]) + breadth(kids[kids.length - 1])) / 2;
    if (Math.abs(breadth(p) - mid) > 1e-9) out.push(`${p.value} が子の中央にない（${breadth(p)} / ${mid}）`);
  }
  // 左端は 0 から始まり、はみ出さない
  if (nodes.length && Math.min(...nodes.map(breadth)) !== 0) out.push("左端が 0 でない");
  return out;
};

const violations = (roots: TreeLayoutInput[], opts: TreeLayoutOptions) => check(layoutTree(roots, opts).nodes, opts);

describe("layoutTree", () => {
  it("places a parent centred over its children, one level apart", () => {
    const { nodes, edges, width, height } = layoutTree([node("a", leaf("b"), leaf("c"))], OPTS);
    const at = (v: string) => nodes.find((n) => n.value === v)!;
    expect(at("b")).toMatchObject({ x: 0, y: 70, depth: 1, parent: "a", posInSet: 1, setSize: 2 });
    expect(at("c")).toMatchObject({ x: 120, y: 70, depth: 1, posInSet: 2, setSize: 2 });
    expect(at("a")).toMatchObject({ x: 60, y: 0, depth: 0, parent: null, hasChildren: true });
    expect(edges).toEqual([
      { from: "a", to: "b" },
      { from: "a", to: "c" },
    ]);
    expect(width).toBe(220);
    expect(height).toBe(110);
  });

  it("returns nodes in pre-order (the keyboard's visible order)", () => {
    const tree = node("a", node("b", leaf("d"), leaf("e")), leaf("c"));
    expect(layoutTree([tree], OPTS).nodes.map((n) => n.value)).toEqual(["a", "b", "d", "e", "c"]);
  });

  it("pushes a sibling past the widest level of its left neighbours, not just their roots", () => {
    // b の部分木は深さ 2 で 3 人に広がる。c の子 f が b の孫 g〜i に食い込んではいけない
    const tree = node("a", node("b", node("x", leaf("g"), leaf("h"), leaf("i"))), node("c", node("y", leaf("f"))));
    expect(violations([tree], OPTS)).toEqual([]);
  });

  it("does not lay out the descendants of a collapsed node, and counts them", () => {
    const tree = node("a", node("b", node("c", leaf("d"))), leaf("e"));
    const { nodes } = layoutTree([tree], { ...OPTS, isExpanded: (v) => v !== "b" });
    expect(nodes.map((n) => n.value)).toEqual(["a", "b", "e"]);
    expect(nodes.find((n) => n.value === "b")).toMatchObject({ hasChildren: true, hiddenCount: 2 });
    expect(nodes.find((n) => n.value === "e")).toMatchObject({ hasChildren: false, hiddenCount: 0 });
  });

  it("lays out several roots side by side", () => {
    const roots = [node("a", leaf("b"), leaf("c")), leaf("d")];
    const { nodes } = layoutTree(roots, OPTS);
    expect(nodes.filter((n) => n.parent === null).map((n) => [n.value, n.posInSet, n.setSize])).toEqual([
      ["a", 1, 2],
      ["d", 2, 2],
    ]);
    expect(violations(roots, OPTS)).toEqual([]);
  });

  it("maps breadth to y and depth to x when horizontal", () => {
    const opts = { ...OPTS, orientation: "horizontal" as const };
    const { nodes, width, height } = layoutTree([node("a", leaf("b"), leaf("c"))], opts);
    const at = (v: string) => nodes.find((n) => n.value === v)!;
    // 幅方向は nodeHeight（40）+ siblingGap（20）刻み、深さ方向は nodeWidth（100）+ levelGap（30）
    expect(at("b")).toMatchObject({ x: 130, y: 0 });
    expect(at("c")).toMatchObject({ x: 130, y: 60 });
    expect(at("a")).toMatchObject({ x: 0, y: 30 });
    expect(width).toBe(230);
    expect(height).toBe(100);
  });

  it("returns an empty layout for no roots", () => {
    expect(layoutTree([], OPTS)).toEqual({ nodes: [], edges: [], width: 0, height: 0 });
  });

  it("keeps every promise on 300 random trees, both orientations", () => {
    const rand = rng(42);
    const failures: string[] = [];
    let laidOut = 0;
    let total = 0;
    for (let i = 0; i < 300; i++) {
      // 値は木をまたいで一意にする（部品の前提。根ごとに n0 から振ると、別の木の子が混ざる）
      const ids = { n: 0 };
      const roots = Array.from({ length: 1 + Math.floor(rand() * 2) }, () => randomTree(rand, 5, ids));
      // 1 割ほどを折りたたむ。根（n0）も含めて同じ確率にする ── 以前は n0 が必ず 0 になって
      // 根ごと畳まれ、767 ノード中 29 しか配置されず、このテストは何も見ていなかった
      const collapsed = new Set<string>();
      const mark = (t: TreeLayoutInput) => {
        if (rand() < 0.1) collapsed.add(t.value);
        t.children?.forEach(mark);
      };
      roots.forEach(mark);
      const isExpanded = (v: string) => !collapsed.has(v);
      for (const orientation of ["vertical", "horizontal"] as const) {
        const opts = { ...OPTS, orientation, isExpanded };
        const v = violations(roots, opts);
        if (v.length) failures.push(`#${i} ${orientation}: ${v[0]}`);
        laidOut += layoutTree(roots, opts).nodes.length;
      }
      total += 2 * roots.reduce(function size(s: number, t: TreeLayoutInput): number {
        return (t.children ?? []).reduce(size, s + 1);
      }, 0);
    }
    expect(failures).toEqual([]);
    // 見ている量の下限: 配置されたノードが全体の半分を切るなら、折りたたみ過ぎで検査が空振りしている
    expect(laidOut / total).toBeGreaterThan(0.5);
  });

  it("the checks themselves fire on a broken layout (control)", () => {
    // 対照: 正しい配置を 1 か所ずつ壊し、検査が鳴ることを確かめる。鳴らない検査の「0 件」は信用しない
    const tree = node("a", leaf("b"), leaf("c"));
    const good = layoutTree([tree], OPTS).nodes;
    expect(check(good, OPTS)).toEqual([]);
    const move = (v: string, patch: Partial<Laid[number]>) => good.map((n) => (n.value === v ? { ...n, ...patch } : n));
    expect(check(move("c", { x: 110 }), OPTS).join()).toMatch(/間隔/); // 兄弟が近すぎる
    expect(check(move("c", { y: 71 }), OPTS).join()).toMatch(/揃っていない/); // 深さがずれる
    expect(check(move("a", { x: 50 }), OPTS).join()).toMatch(/中央にない/); // 親が中央にない
  });
});
