/**
 * 木の自動配置（tidy tree）。
 *
 * 描画から切り離した純粋な関数で、座標は「幅方向（breadth）× 深さ方向（depth）」で
 * 計算してから、`orientation` に合わせて x / y に写す。縦（上から下）なら幅方向が x、
 * 横（左から右）なら幅方向が y になる。
 *
 * 約束（`layoutTree.test.ts` が見る）:
 * 1. 兄弟の部分木は、どの深さでも `siblingGap` 以上離れて重ならない
 * 2. 親は、見えている子の列の中央（最初の子と最後の子の中点）に置く
 * 3. 同じ深さのノードは、深さ方向の同じ位置に並ぶ
 * 4. 折りたたんだノードの子孫は配置しない
 *
 * 手法は Reingold–Tilford の考え方そのまま ── 部分木ごとに「深さごとの左端・右端」
 * （輪郭）を持ち、次の兄弟を、左の兄弟たちの右の輪郭にぶつからない所まで右へずらす。
 * 輪郭の比較は深さの数だけかかるので O(ノード数 × 深さ)。組織図の規模（数百）では
 * 十分速く、Buchheim の線形時間版の複雑さ（スレッド・ancestor の付け替え）を持たない。
 * 兄弟の間の余りを均す処理（Walker の apportion）はしない ── 狭い部分木どうしの間に
 * 広い部分木があるときに間隔が左右で不揃いになりうるが、重なりは起きない。
 */

export type TreeLayoutInput = {
  value: string;
  children?: TreeLayoutInput[];
};

export type TreeLayoutNode = {
  value: string;
  /** 描画座標（ノードの左上）。 */
  x: number;
  y: number;
  depth: number;
  parent: string | null;
  /** 子を持つか（折りたたみ中でも true）。 */
  hasChildren: boolean;
  /** 折りたたんで隠している子孫の数。開いていれば 0。 */
  hiddenCount: number;
  /** 兄弟の中での位置（1 始まり）と兄弟の数。`aria-posinset` / `aria-setsize` に使う。 */
  posInSet: number;
  setSize: number;
};

export type TreeLayoutEdge = { from: string; to: string };

export type TreeLayoutOptions = {
  nodeWidth: number;
  nodeHeight: number;
  /** 兄弟（幅方向）の間隔。 */
  siblingGap: number;
  /** 親子（深さ方向）の間隔。 */
  levelGap: number;
  orientation: "vertical" | "horizontal";
  /** 開いているか。false のノードは子孫を配置しない。 */
  isExpanded: (value: string) => boolean;
};

export type TreeLayoutResult = {
  /** 前順（親 → 子、兄弟は左から）。キーボードの「次に見えているノード」の順と同じ。 */
  nodes: TreeLayoutNode[];
  edges: TreeLayoutEdge[];
  width: number;
  height: number;
};

type Placed = {
  source: TreeLayoutInput;
  /** 親の中心からの相対位置（幅方向）。 */
  offset: number;
  children: Placed[];
  /** 深さ（この部分木の根 = 0）ごとの左端・右端の中心座標（根の中心 = 0）。 */
  left: number[];
  right: number[];
};

type Row = { items: Placed[]; left: number[]; right: number[] };

const countDescendants = (n: TreeLayoutInput): number =>
  (n.children ?? []).reduce((sum, c) => sum + 1 + countDescendants(c), 0);

export function layoutTree(roots: TreeLayoutInput[], options: TreeLayoutOptions): TreeLayoutResult {
  const { nodeWidth, nodeHeight, siblingGap, levelGap, orientation, isExpanded } = options;
  const breadthSize = orientation === "vertical" ? nodeWidth : nodeHeight;
  const depthSize = orientation === "vertical" ? nodeHeight : nodeWidth;
  const step = breadthSize + siblingGap; // 隣り合う中心どうしの最小距離

  // 兄弟の列を左から並べ、列全体の中央が 0 になるように各 offset を決める。
  const arrange = (items: Placed[]): Row => {
    const left: number[] = [];
    const right: number[] = [];
    items.forEach((item, i) => {
      let shift = 0;
      if (i > 0) {
        shift = -Infinity;
        const depth = Math.min(right.length, item.left.length);
        for (let d = 0; d < depth; d++) shift = Math.max(shift, right[d] - item.left[d] + step);
      }
      item.offset = shift;
      item.left.forEach((v, d) => {
        if (left[d] === undefined || v + shift < left[d]) left[d] = v + shift;
      });
      item.right.forEach((v, d) => {
        if (right[d] === undefined || v + shift > right[d]) right[d] = v + shift;
      });
    });
    const mid = items.length ? (items[0].offset + items[items.length - 1].offset) / 2 : 0;
    items.forEach((c) => (c.offset -= mid));
    return { items, left: left.map((v) => v - mid), right: right.map((v) => v - mid) };
  };

  const place = (node: TreeLayoutInput): Placed => {
    const kids = isExpanded(node.value) ? (node.children ?? []) : [];
    const row = arrange(kids.map(place));
    return { source: node, offset: 0, children: row.items, left: [0, ...row.left], right: [0, ...row.right] };
  };

  // 複数の根は、兄弟と同じ規則で左から並べる
  const top = arrange(roots.map(place));

  const nodes: TreeLayoutNode[] = [];
  const centers: number[] = [];
  const edges: TreeLayoutEdge[] = [];
  let maxDepth = 0;

  const walk = (p: Placed, center: number, depth: number, parent: string | null, pos: number, size: number) => {
    const hasChildren = (p.source.children?.length ?? 0) > 0;
    nodes.push({
      value: p.source.value,
      x: 0,
      y: 0,
      depth,
      parent,
      hasChildren,
      hiddenCount: hasChildren && p.children.length === 0 ? countDescendants(p.source) : 0,
      posInSet: pos,
      setSize: size,
    });
    centers.push(center);
    maxDepth = Math.max(maxDepth, depth);
    p.children.forEach((c, i) => {
      edges.push({ from: p.source.value, to: c.source.value });
      walk(c, center + c.offset, depth + 1, p.source.value, i + 1, p.children.length);
    });
  };
  top.items.forEach((r, i) => walk(r, r.offset, 0, null, i + 1, top.items.length));

  if (nodes.length === 0) return { nodes, edges, width: 0, height: 0 };

  // いちばん左のノードの左端を 0 にする
  const minCenter = Math.min(...centers);
  const maxCenter = Math.max(...centers);
  nodes.forEach((n, i) => {
    const breadth = centers[i] - minCenter;
    const depth = n.depth * (depthSize + levelGap);
    if (orientation === "vertical") {
      n.x = breadth;
      n.y = depth;
    } else {
      n.x = depth;
      n.y = breadth;
    }
  });

  const breadthExtent = maxCenter - minCenter + breadthSize;
  const depthExtent = (maxDepth + 1) * depthSize + maxDepth * levelGap;
  return orientation === "vertical"
    ? { nodes, edges, width: breadthExtent, height: depthExtent }
    : { nodes, edges, width: depthExtent, height: breadthExtent };
}
