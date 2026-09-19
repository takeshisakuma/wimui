import { ChartDataPoint } from '../helpers';
import { ChartTableCell } from './ChartDataTable';
/**
 * チャートの `data` を、`ChartDataTable` が描ける形（列見出し + 行）へ写す（T230）。
 *
 * **チャートごとに `data` の形が違う**ので、ここに形ごとの写し方を集めている。
 * 各チャートに散らすと、片方だけ直して片方が腐る ── 実際 T229 で、同じ内容が
 * 2 か所にあると**負けたほうが黙って腐る**のを見たばかり。
 *
 * 値の見出しは**呼び出し側が渡したキー名をそのまま使う**（`xAxisKey` / `keys` /
 * `dataKey` など）。こちらで訳語を用意すると、呼び出し側のデータと表の言葉が
 * 食い違う。キーが無い形（`PieChart` の `{ name, value }` など）だけ既定の
 * 英語を持つ ── `GanttChart` が既に同じやり方をしている。
 */
export type ChartTable = {
    columns: string[];
    rows: ChartTableCell[][];
};
/**
 * 系列型: 1 行が 1 目盛りで、系列ぶんの列が並ぶ。
 * `AreaChart` / `BarChart` / `LineChart` / `RadarChart` がこれ。
 */
export declare const seriesTable: (data: ChartDataPoint[], indexKey: string, keys: string[]) => ChartTable;
/**
 * 対型: 名前と値の 2 列。`FunnelChart` / `PieChart` / `Treemap` がこれ。
 * `Treemap` は入れ子（`{ name, children: [...] }`）で渡されることがあるので、
 * 葉だけを取り出してから渡すこと（`flattenLeaves`）。
 */
export declare const pairTable: (data: ChartDataPoint[], nameKey: string, valueKey: string) => ChartTable;
/**
 * 入れ子のデータから葉だけを取り出す。`Treemap` は `children` を持つ形も受ける。
 * 描かれているのは葉のタイルだけなので、表も葉だけを並べる。
 */
export declare const flattenLeaves: (nodes: ChartDataPoint[]) => ChartDataPoint[];
/**
 * 行列型: 行が y、列が x で、交点に値が入る。`Heatmap` がこれ。
 * 1 列目は行見出し（y のラベル）なので、列見出しの先頭は空にする。
 */
export declare const matrixTable: (data: {
    x: string;
    y: string;
    value: number;
}[], xLabels: string[], yLabels: string[]) => ChartTable;
/**
 * 点型: 1 行が 1 点。`ScatterChart` がこれ。
 * `z` は任意なので、**1 点でも持っていれば**列に出す（持たない点は空欄）。
 */
export declare const pointTable: (data: {
    x: number;
    y: number;
    z?: number;
    name: string;
}[], xLabel: string, yLabel: string, zLabel: string) => ChartTable;
/**
 * 流れ型: 1 行が 1 本の流れ（どこから・どこへ・いくつ）。`SankeyChart` がこれ。
 *
 * **ノードの一覧は出さない。** 描かれているのは流れで、ノードはその端点だから
 * ── 端点は from / to の列にすべて現れる。両方を出すと同じ名前が 2 か所に並び、
 * 読み上げが長くなるだけで情報は増えない。
 *
 * 見出しは既定の英語を持つ（`PieChart` / `GanttChart` と同じ扱い）。呼び出し側が
 * キー名を決める形ではないため。
 */
export declare const linkTable: (links: {
    source: string;
    target: string;
    value: number;
}[]) => ChartTable;
/**
 * 増減型: 1 行が 1 段（何が・いくつ動いて・合計がいくつになったか）。
 * `WaterfallChart` がこれ。
 *
 * **running total の列を落とさない。** 図では棒の高さと位置の両方が意味を持つが、
 * 表に増減だけを並べると「その時点の合計」が消え、読み手が足し算をやり直す
 * ことになる ── 図が見えている人だけが答えを持っている状態になる。
 */
export declare const stepTable: (steps: {
    name: string;
    change: string;
    running: number;
}[]) => ChartTable;
/**
 * 五数要約型: 1 行が 1 群。`BoxPlot` がこれ。
 *
 * 図は箱とヒゲの**位置**でしか分布を語らないので、表には 5 つの数をそのまま出す
 * ── 「中央値がどこか」は箱を見れば分かるが、見えない人には数が要る。
 */
export declare const summaryTable: (groups: {
    name: string;
    min: number;
    q1: number;
    median: number;
    q3: number;
    max: number;
}[]) => ChartTable;
/**
 * 四本値型: 1 行が 1 期間。`CandlestickChart` がこれ。
 *
 * 列の順は始値 → 高値 → 安値 → 終値（OHLC）── 相場の慣習の順で、
 * 「上げか下げか」は始値と終値を並べれば読める。色の説明を表に足さない。
 */
export declare const ohlcTable: (candles: {
    name: string;
    open: number;
    high: number;
    low: number;
    close: number;
}[]) => ChartTable;
