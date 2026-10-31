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
    /** 配下の列が出ているか（グループでないセルは常に `false`）。 */
    expanded: boolean;
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
/**
 * 列の軸の木を、見出しの段（`colSpan` / `rowSpan` 付き）と値の列の並びにする。
 *
 * - 葉は、自分の段から最下段まで縦に伸びる（木の深さが揃っていなくても段がずれない）
 * - `subtotals` を付けると、グループごとに子の後ろへ小計の列を 1 本足す
 * - `total` を付けると、右端に総計の列を 1 本足す
 * - 折りたたまれたグループは、配下の列を出さず、自分の値（小計）の列を 1 本だけ出す。見出しの
 *   セルは葉と同じく最下段まで伸びる。段の数は、見えている木の深さになる
 */
export declare function layoutPivotColumns<T extends PivotAxisInput>(nodes: T[], options?: {
    subtotals?: boolean;
    total?: boolean;
    isExpanded?: (key: string) => boolean;
}): PivotColumnLayout<T>;
/**
 * 行の軸の木を、深さ優先で 1 行ずつに並べる（アウトライン形式: グループも 1 行を持つ）。
 * 折りたたまれたグループは自分の行だけを出し、配下の行は出さない。
 */
export declare function layoutPivotRows<T extends PivotAxisInput>(nodes: T[], isExpanded?: (key: string) => boolean): PivotRow<T>[];
/** 仮想化したときに描く行の並び。`gap` は、描かない行を 1 つの空の行でまとめた分。 */
export type PivotRowSegment = {
    kind: "rows";
    from: number;
    to: number;
} | {
    kind: "gap";
    count: number;
};
export type PivotRowWindowInput = {
    rowCount: number;
    /** 1 行の高さ（全行が同じ高さの前提）。0 以下なら全部描く。 */
    rowHeight: number;
    /** スクロールの器の `scrollTop`。 */
    scrollTop: number;
    /** スクロールの器の見えている高さ。 */
    viewportHeight: number;
    /** 器の中身の先頭から、最初の行までの距離（caption と見出しの高さ）。 */
    bodyOffset: number;
    /** 見えている範囲の上下に、余分に描いておく行の数。 */
    overscan: number;
    /** 範囲の外でも描いたままにする行（フォーカスを持つ行）。 */
    keep?: number | null;
};
/**
 * 見えている行（と上下の余分）だけを描くための並びを返す。描かない行は `gap` にまとめ、
 * 行の総数ぶんの高さが保たれるようにする。`keep` の行は、範囲の外にあっても 1 行だけ描く。
 */
export declare function pivotRowWindow(input: PivotRowWindowInput): PivotRowSegment[];
