import { describe, it, expect } from "vitest";
import {
  layoutPivotColumns,
  layoutPivotRows,
  pivotRowWindow,
  type PivotAxisInput,
  type PivotColumnLayout,
  type PivotRowSegment,
} from "./layoutPivot";

const leaf = (key: string): PivotAxisInput => ({ key });
const group = (key: string, ...children: PivotAxisInput[]): PivotAxisInput => ({ key, children });

// 決まった乱数（線形合同法）。テストの木を毎回同じにする
const rng = (seed: number) => () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
};

const randomAxis = (rand: () => number, depth: number, id = { n: 0 }): PivotAxisInput[] =>
  Array.from({ length: 1 + Math.floor(rand() * 3) }, () => {
    const key = `n${id.n++}`;
    if (depth === 0 || rand() < 0.3) return { key };
    return { key, children: randomAxis(rand, depth - 1, id) };
  });

/**
 * 見出しのセルを格子に置いてみる。HTML の表と同じ規則（上の段から伸びてきたセルが
 * 塞いでいる位置は飛ばす）で並べ、各マスを覆ったセルの id を返す。
 */
const toGrid = (layout: PivotColumnLayout): number[][] => {
  const grid: number[][] = Array.from({ length: layout.depth }, () => []);
  layout.headerRows.forEach((cells, level) => {
    let x = 0;
    for (const cell of cells) {
      while (grid[level][x] !== undefined) x++;
      for (let dy = 0; dy < cell.rowSpan; dy++) {
        for (let dx = 0; dx < cell.colSpan; dx++) {
          if (grid[level + dy][x + dx] !== undefined) throw new Error(`overlap at ${level + dy},${x + dx}`);
          grid[level + dy][x + dx] = cell.id;
        }
      }
      x += cell.colSpan;
    }
  });
  return grid;
};

describe("layoutPivotColumns", () => {
  it("spans a group over its leaves and puts the leaves on the next level", () => {
    const layout = layoutPivotColumns([group("q1", leaf("jan"), leaf("feb")), group("q2", leaf("apr"))]);
    expect(layout.depth).toBe(2);
    expect(layout.headerRows[0].map((c) => [c.key, c.colSpan, c.rowSpan])).toEqual([
      ["q1", 2, 1],
      ["q2", 1, 1],
    ]);
    expect(layout.headerRows[1].map((c) => c.key)).toEqual(["jan", "feb", "apr"]);
    expect(layout.columns.map((c) => c.key)).toEqual(["jan", "feb", "apr"]);
    expect(layout.groupSpans).toEqual([2, 1]);
  });

  it("stretches a shallow leaf down to the last header level", () => {
    const layout = layoutPivotColumns([group("q1", leaf("jan")), leaf("other")]);
    const other = layout.headerRows[0].find((c) => c.key === "other")!;
    expect(other.rowSpan).toBe(2);
    expect(other.reachesBottom).toBe(true);
    expect(layout.headerRows[0].find((c) => c.key === "q1")!.reachesBottom).toBe(false);
  });

  it("lists the headers above each column from the top level down", () => {
    const layout = layoutPivotColumns([group("y", group("q1", leaf("jan")))]);
    const idOf = (key: string) => layout.headerRows.flat().find((c) => c.key === key)!.id;
    expect(layout.columns[0].headerIds).toEqual([idOf("y"), idOf("q1"), idOf("jan")]);
  });

  it("adds a subtotal column after the children of every group", () => {
    const layout = layoutPivotColumns([group("y", group("q1", leaf("jan"), leaf("feb")), leaf("extra"))], {
      subtotals: true,
    });
    expect(layout.columns.map((c) => [c.key, c.kind])).toEqual([
      ["jan", "leaf"],
      ["feb", "leaf"],
      ["q1", "subtotal"],
      ["extra", "leaf"],
      ["y", "subtotal"],
    ]);
    // グループの見出しは小計の列まで覆う
    expect(layout.headerRows[0][0].colSpan).toBe(5);
    expect(layout.headerRows[1].find((c) => c.kind === "group")!.colSpan).toBe(3);
    // 小計の列の見出しは、まとめているグループの下に入る
    const q1 = layout.headerRows[1].find((c) => c.kind === "group")!;
    expect(layout.columns[2].headerIds).toContain(q1.id);
  });

  it("adds no subtotal column when the option is off", () => {
    const layout = layoutPivotColumns([group("q1", leaf("jan"))]);
    expect(layout.columns.some((c) => c.kind === "subtotal")).toBe(false);
  });

  it("adds a grand total column at the right edge with a null key", () => {
    const layout = layoutPivotColumns([group("q1", leaf("jan"))], { total: true });
    const last = layout.columns[layout.columns.length - 1];
    expect(last).toMatchObject({ key: null, kind: "total", startsGroup: true });
    const cell = layout.headerRows[0][layout.headerRows[0].length - 1];
    expect(cell).toMatchObject({ kind: "total", rowSpan: 2, reachesBottom: true });
    expect(layout.groupSpans).toEqual([1, 1]);
  });

  it("marks only the first column of each top-level node as a group boundary", () => {
    const layout = layoutPivotColumns([group("q1", leaf("jan"), leaf("feb")), group("q2", leaf("apr"), leaf("may"))]);
    expect(layout.columns.map((c) => c.startsGroup)).toEqual([true, false, true, false]);
  });

  it("keeps one header level for an empty or flat axis", () => {
    expect(layoutPivotColumns([]).depth).toBe(1);
    expect(layoutPivotColumns([]).columns).toEqual([]);
    const flat = layoutPivotColumns([leaf("a"), leaf("b")]);
    expect(flat.depth).toBe(1);
    expect(flat.headerRows[0].every((c) => c.rowSpan === 1 && c.reachesBottom)).toBe(true);
  });

  it("treats a node with an empty children array as a leaf", () => {
    const layout = layoutPivotColumns([{ key: "a", children: [] }]);
    expect(layout.columns).toHaveLength(1);
    expect(layout.headerRows[0][0].kind).toBe("leaf");
  });

  it("replaces a collapsed group by one subtotal column under a heading that reaches the bottom", () => {
    const axis = [group("q1", leaf("jan"), leaf("feb")), group("q2", leaf("apr"))];
    const layout = layoutPivotColumns(axis, { isExpanded: (key) => key !== "q1" });
    expect(layout.depth).toBe(2);
    expect(layout.columns.map((c) => [c.key, c.kind])).toEqual([
      ["q1", "subtotal"],
      ["apr", "leaf"],
    ]);
    const q1 = layout.headerRows[0][0];
    expect(q1).toMatchObject({ key: "q1", kind: "group", expanded: false, colSpan: 1, rowSpan: 2, reachesBottom: true });
    expect(layout.headerRows[0][1]).toMatchObject({ key: "q2", kind: "group", expanded: true, colSpan: 1, rowSpan: 1 });
    expect(layout.columns[0].headerIds).toEqual([q1.id]);
    expect(layout.groupSpans).toEqual([1, 1]);
  });

  it("adds no second subtotal column to a collapsed group", () => {
    const layout = layoutPivotColumns([group("q1", leaf("jan"), leaf("feb"))], {
      subtotals: true,
      isExpanded: () => false,
    });
    expect(layout.columns.map((c) => [c.key, c.kind])).toEqual([["q1", "subtotal"]]);
  });

  it("counts only the visible levels: collapsing the deepest groups removes a heading level", () => {
    const axis = [group("y", group("q1", leaf("jan")), leaf("extra"))];
    expect(layoutPivotColumns(axis).depth).toBe(3);
    const inner = layoutPivotColumns(axis, { isExpanded: (key) => key !== "q1" });
    expect(inner.depth).toBe(2);
    expect(inner.headerRows).toHaveLength(2);
    expect(inner.headerRows[1].every((c) => c.rowSpan === 1 && c.reachesBottom)).toBe(true);
    const outer = layoutPivotColumns(axis, { isExpanded: (key) => key !== "y" });
    expect(outer.depth).toBe(1);
    expect(outer.columns.map((c) => c.key)).toEqual(["y"]);
  });

  it("keeps the group boundary on the column a collapsed top-level group leaves", () => {
    const axis = [group("q1", leaf("jan"), leaf("feb")), group("q2", leaf("apr"), leaf("may"))];
    const layout = layoutPivotColumns(axis, { isExpanded: (key) => key !== "q2" });
    expect(layout.columns.map((c) => c.startsGroup)).toEqual([true, false, true]);
  });

  it("fills the header grid exactly, with no gap and no overlap, for random trees", () => {
    let collapsedSomething = 0;
    for (let seed = 1; seed <= 200; seed++) {
      const rand = rng(seed);
      const axis = randomAxis(rand, 3);
      // 半分の木では、グループをでたらめに畳む
      const collapsed = new Set<string>();
      if (seed % 2 === 0) {
        const visit = (nodes: PivotAxisInput[]) =>
          nodes.forEach((n) => {
            if (!n.children?.length) return;
            if (rand() < 0.4) collapsed.add(n.key);
            visit(n.children);
          });
        visit(axis);
      }
      if (collapsed.size) collapsedSomething++;
      const options = { subtotals: rand() < 0.5, total: rand() < 0.5, isExpanded: (key: string) => !collapsed.has(key) };
      const layout = layoutPivotColumns(axis, options);
      // 畳んだグループの見出しは 1 列で、最下段に届く
      for (const cell of layout.headerRows.flat()) {
        if (cell.kind === "group" && !cell.expanded) expect([cell.colSpan, cell.reachesBottom]).toEqual([1, true]);
      }
      const grid = toGrid(layout);
      const width = layout.columns.length;
      for (const line of grid) {
        expect(line).toHaveLength(width);
        expect(line.includes(undefined as unknown as number)).toBe(false);
      }
      // 列ごとに、縦に見て現れる見出しがその列の `headerIds` と一致する
      layout.columns.forEach((column, x) => {
        const seen = grid.map((line) => line[x]).filter((id, i, all) => i === 0 || all[i - 1] !== id);
        expect(seen).toEqual(column.headerIds);
      });
      expect(layout.groupSpans.reduce((a, b) => a + b, 0)).toBe(width);
      const ids = layout.headerRows.flat().map((c) => c.id);
      expect(new Set(ids).size).toBe(ids.length);
      // 空の段を残さない
      layout.headerRows.forEach((cells) => expect(cells.length).toBeGreaterThan(0));
    }
    // 畳んだ木を 1 つも試さずに緑になるのを防ぐ
    expect(collapsedSomething).toBeGreaterThan(50);
  });
});

describe("layoutPivotRows", () => {
  it("lists every node depth-first with its depth and ancestors", () => {
    const rows = layoutPivotRows([group("drinks", leaf("latte"), group("tea", leaf("matcha"))), leaf("gift")]);
    expect(rows.map((r) => [r.key, r.depth, r.hasChildren, r.ancestors])).toEqual([
      ["drinks", 0, true, []],
      ["latte", 1, false, [0]],
      ["tea", 1, true, [0]],
      ["matcha", 2, false, [0, 2]],
      ["gift", 0, false, []],
    ]);
  });

  it("hides the rows under a collapsed group but keeps the group row", () => {
    const axis = [group("drinks", leaf("latte"), group("tea", leaf("matcha"))), leaf("gift")];
    const rows = layoutPivotRows(axis, (key) => key !== "drinks");
    expect(rows.map((r) => [r.key, r.expanded])).toEqual([
      ["drinks", false],
      ["gift", false],
    ]);
  });

  it("collapses a nested group on its own and renumbers the ancestors of the rows after it", () => {
    const axis = [group("drinks", group("tea", leaf("matcha")), leaf("latte"))];
    const rows = layoutPivotRows(axis, (key) => key !== "tea");
    expect(rows.map((r) => [r.key, r.expanded, r.ancestors])).toEqual([
      ["drinks", true, []],
      ["tea", false, [0]],
      ["latte", false, [0]],
    ]);
  });

  it("never reports a leaf as expanded", () => {
    expect(layoutPivotRows([leaf("gift")], () => true)[0].expanded).toBe(false);
  });

  it("returns no rows for an empty axis", () => {
    expect(layoutPivotRows([])).toEqual([]);
  });
});

describe("pivotRowWindow", () => {
  const base = { rowCount: 1000, rowHeight: 40, scrollTop: 0, viewportHeight: 320, bodyOffset: 0, overscan: 2 };
  /** 描く行の番号を並べる。 */
  const rendered = (segments: PivotRowSegment[]) =>
    segments.flatMap((s) => (s.kind === "rows" ? Array.from({ length: s.to - s.from }, (_, i) => s.from + i) : []));
  /** gap も含めて、全部で何行ぶんの高さになるか。 */
  const total = (segments: PivotRowSegment[]) =>
    segments.reduce((sum, s) => sum + (s.kind === "rows" ? s.to - s.from : s.count), 0);

  it("renders the rows in view plus the overscan and one gap for the rest", () => {
    expect(pivotRowWindow(base)).toEqual([
      { kind: "rows", from: 0, to: 10 },
      { kind: "gap", count: 990 },
    ]);
  });

  it("moves the window with the scroll position", () => {
    expect(pivotRowWindow({ ...base, scrollTop: 4000 })).toEqual([
      { kind: "gap", count: 98 },
      { kind: "rows", from: 98, to: 110 },
      { kind: "gap", count: 890 },
    ]);
  });

  it("subtracts what sits above the first row (caption and headings)", () => {
    const segments = pivotRowWindow({ ...base, scrollTop: 4000, bodyOffset: 120 });
    expect(rendered(segments)[0]).toBe(95);
  });

  it("stops at the last row", () => {
    const segments = pivotRowWindow({ ...base, scrollTop: 39_800 });
    expect(segments[segments.length - 1]).toEqual({ kind: "rows", from: 993, to: 1000 });
  });

  it("always accounts for every row, whatever the scroll position", () => {
    for (const scrollTop of [0, 1, 39, 40, 41, 12_345, 39_680, 40_000, 99_999, -500]) {
      for (const keep of [null, 0, 500, 999]) {
        const segments = pivotRowWindow({ ...base, scrollTop, keep });
        expect(total(segments)).toBe(1000);
        const rows = rendered(segments);
        expect(new Set(rows).size).toBe(rows.length);
        expect([...rows].sort((a, b) => a - b)).toEqual(rows);
        expect(rows.length).toBeGreaterThan(0);
      }
    }
  });

  it("keeps one row rendered above the window", () => {
    expect(pivotRowWindow({ ...base, scrollTop: 4000, keep: 3 })).toEqual([
      { kind: "gap", count: 3 },
      { kind: "rows", from: 3, to: 4 },
      { kind: "gap", count: 94 },
      { kind: "rows", from: 98, to: 110 },
      { kind: "gap", count: 890 },
    ]);
  });

  it("keeps one row rendered below the window", () => {
    expect(pivotRowWindow({ ...base, keep: 500 })).toEqual([
      { kind: "rows", from: 0, to: 10 },
      { kind: "gap", count: 490 },
      { kind: "rows", from: 500, to: 501 },
      { kind: "gap", count: 499 },
    ]);
  });

  it("adds nothing for a kept row that is already in the window or next to it", () => {
    expect(rendered(pivotRowWindow({ ...base, keep: 4 }))).toEqual(rendered(pivotRowWindow(base)));
    // 窓のすぐ下の行: 間の gap は 0 行なので出さない
    expect(pivotRowWindow({ ...base, keep: 10 })).toEqual([
      { kind: "rows", from: 0, to: 10 },
      { kind: "rows", from: 10, to: 11 },
      { kind: "gap", count: 989 },
    ]);
  });

  it("ignores a kept row that does not exist", () => {
    expect(pivotRowWindow({ ...base, keep: 5000 })).toEqual(pivotRowWindow(base));
    expect(pivotRowWindow({ ...base, keep: -1 })).toEqual(pivotRowWindow(base));
  });

  it("renders everything while the row height is unknown", () => {
    expect(pivotRowWindow({ ...base, rowHeight: 0 })).toEqual([{ kind: "rows", from: 0, to: 1000 }]);
  });

  it("returns nothing for an empty axis", () => {
    expect(pivotRowWindow({ ...base, rowCount: 0 })).toEqual([]);
  });

  it("renders all rows when they fit in the window", () => {
    expect(pivotRowWindow({ ...base, rowCount: 5 })).toEqual([{ kind: "rows", from: 0, to: 5 }]);
  });
});
