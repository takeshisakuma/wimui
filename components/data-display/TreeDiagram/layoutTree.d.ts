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
export type TreeLayoutEdge = {
    from: string;
    to: string;
};
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
export declare function layoutTree(roots: TreeLayoutInput[], options: TreeLayoutOptions): TreeLayoutResult;
