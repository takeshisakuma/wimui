/** 軸の木の 1 節。ラベルなど、配置の計算に関係しない項目は型引数の側が持つ。 */
export type PivotAxisInput = {
  key: string;
  children?: PivotAxisInput[];
};

export type PivotHeaderKind = "group" | "leaf" | "subtotal" | "total";

/** 列見出しの 1 セル。`id` は軸の中で一意な連番で、`headers` 属性の組み立てに使う。 */
export type PivotHeaderCell<T extends PivotAxisInput = PivotAxisInput> = {
  id: number;
  /** 軸のキー。総計の列は `null`。小計の列は、まとめているグループのキー。 */
  key: string | null;
  /** 元の節。総計の列は `null`。小計の列は、まとめているグループの節。 */
  node: T | null;
  kind: PivotHeaderKind;
  colSpan: number;
  rowSpan: number;
  /** 見出しの最下段に届いているか（本文との境界の帯を描くセル）。 */
  reachesBottom: boolean;
  /** 最上位の節の先頭の列から始まるか（グループの境目）。 */
  startsGroup: boolean;
  /** 最上位の節か。`colgroup` と 1 対 1 に対応するのはこの段だけ。 */
  topLevel: boolean;
};

/** 値を持つ 1 列。 */
export type PivotColumn = {
  /** `getValue` に渡す列のキー。総計の列は `null`。 */
  key: string | null;
  kind: Exclude<PivotHeaderKind, "group">;
  /** この列に掛かる見出しのセルの `id`（上の段から順）。 */
  headerIds: number[];
  startsGroup: boolean;
};

export type PivotColumnLayout<T extends PivotAxisInput = PivotAxisInput> = {
  /** 見出しの段ごとのセル（上の段から順・各段は左から順）。 */
  headerRows: PivotHeaderCell<T>[][];
  columns: PivotColumn[];
  /** 見出しの段の数（列の軸が空でも 1）。 */
  depth: number;
  /** 最上位の節ごとの列の数。`colgroup` の `span` に使う。 */
  groupSpans: number[];
};

export type PivotRow<T extends PivotAxisInput = PivotAxisInput> = {
  key: string;
  node: T;
  depth: number;
  hasChildren: boolean;
  /** 子の行が出ているか（グループでない行は常に `false`）。 */
  expanded: boolean;
  /** 祖先の行の番号（返り値の配列の中の位置。根から順）。 */
  ancestors: number[];
};

const isGroup = (node: PivotAxisInput) => !!node.children?.length;

const depthOf = (nodes: PivotAxisInput[]): number =>
  nodes.reduce((max, n) => Math.max(max, 1 + (isGroup(n) ? depthOf(n.children!) : 0)), 0);

/**
 * 列の軸の木を、見出しの段（`colSpan` / `rowSpan` 付き）と値の列の並びにする。
 *
 * - 葉は、自分の段から最下段まで縦に伸びる（木の深さが揃っていなくても段がずれない）
 * - `subtotals` を付けると、グループごとに子の後ろへ小計の列を 1 本足す
 * - `total` を付けると、右端に総計の列を 1 本足す
 */
export function layoutPivotColumns<T extends PivotAxisInput>(
  nodes: T[],
  options: { subtotals?: boolean; total?: boolean } = {},
): PivotColumnLayout<T> {
  const depth = Math.max(1, depthOf(nodes));
  const headerRows: PivotHeaderCell<T>[][] = Array.from({ length: depth }, () => []);
  const columns: PivotColumn[] = [];
  const groupSpans: number[] = [];
  let nextId = 0;

  const addColumn = (
    node: T | null,
    kind: PivotColumn["kind"],
    level: number,
    path: number[],
    topLevel: boolean,
    startsGroup: boolean,
  ) => {
    const id = nextId++;
    const key = node?.key ?? null;
    headerRows[level].push({
      id,
      key,
      node,
      kind,
      colSpan: 1,
      rowSpan: depth - level,
      reachesBottom: true,
      startsGroup,
      topLevel,
    });
    columns.push({ key, kind, headerIds: [...path, id], startsGroup });
  };

  // 戻り値は、その節が占める列の数
  const walk = (node: T, level: number, path: number[], startsGroup: boolean): number => {
    const topLevel = level === 0;
    if (!isGroup(node)) {
      addColumn(node, "leaf", level, path, topLevel, startsGroup);
      return 1;
    }
    const cell: PivotHeaderCell<T> = {
      id: nextId++,
      key: node.key,
      node,
      kind: "group",
      colSpan: 0,
      rowSpan: 1,
      reachesBottom: false,
      startsGroup,
      topLevel,
    };
    headerRows[level].push(cell);
    const childPath = [...path, cell.id];
    let span = 0;
    (node.children as T[]).forEach((child, i) => {
      span += walk(child, level + 1, childPath, startsGroup && i === 0);
    });
    if (options.subtotals) {
      addColumn(node, "subtotal", level + 1, childPath, false, false);
      span += 1;
    }
    cell.colSpan = span;
    return span;
  };

  for (const node of nodes) groupSpans.push(walk(node, 0, [], true));
  if (options.total) {
    addColumn(null, "total", 0, [], true, true);
    groupSpans.push(1);
  }

  return { headerRows, columns, depth, groupSpans };
}

/**
 * 行の軸の木を、深さ優先で 1 行ずつに並べる（アウトライン形式: グループも 1 行を持つ）。
 * 折りたたまれたグループは自分の行だけを出し、配下の行は出さない。
 */
export function layoutPivotRows<T extends PivotAxisInput>(
  nodes: T[],
  isExpanded: (key: string) => boolean = () => true,
): PivotRow<T>[] {
  const rows: PivotRow<T>[] = [];
  const walk = (list: T[], depth: number, ancestors: number[]) => {
    for (const node of list) {
      const index = rows.length;
      const hasChildren = isGroup(node);
      const expanded = hasChildren && isExpanded(node.key);
      rows.push({ key: node.key, node, depth, hasChildren, expanded, ancestors });
      if (expanded) walk(node.children as T[], depth + 1, [...ancestors, index]);
    }
  };
  walk(nodes, 0, []);
  return rows;
}
