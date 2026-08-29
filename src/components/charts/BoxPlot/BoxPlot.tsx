import React from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Title } from "../../typography/Title/Title";
import { CHART_THEME, CHART_HIDDEN_A11Y_PROPS } from "../../helpers";
import { ChartDataTable } from "../../_internal/ChartDataTable";
import { summaryTable } from "../../_internal/chartTableData";
import { type BarSpan, spanPixel, spanDomain } from "../../_internal/barSpan";
import styles from "./box-plot.module.scss";

export type BoxPlotItem = {
  /** Label for this group, shown on the X axis. */
  name: string;
  /** The smallest value that is not an outlier. */
  min: number;
  /** First quartile — a quarter of the values are below this. */
  q1: number;
  /** The middle value. */
  median: number;
  /** Third quartile — a quarter of the values are above this. */
  q3: number;
  /** The largest value that is not an outlier. */
  max: number;
};

export type BoxPlotProps = {
  /** One entry per group. Each is a five-number summary, already computed. */
  data: BoxPlotItem[];
  /**
   * The height of the chart in pixels.
   * @default 300
   */
  height?: number;
  /**
   * The width of the chart (e.g., "100%", 500).
   * @default "100%"
   */
  width?: string | number;
  /** Optional title displayed above the chart. */
  title?: string;
  /**
   * Accessible name for the chart. Defaults to `title` when omitted; pass this
   * when the chart has no visible title, or when the title is not descriptive
   * enough on its own.
   */
  "aria-label"?: string;
};

type Row = BoxPlotItem & {
  /** 昇順の [min, max]。recharts はこれを画素の矩形に写す。 */
  span: BarSpan;
};

/** 箱の幅は帯より細くする。帯いっぱいだと隣の群と接して 1 本に見える。 */
const BOX_WIDTH_RATIO = 0.62;
/** ヒゲの端の横棒の幅。箱より細い（端点だと分かる程度）。 */
const CAP_WIDTH_RATIO = 0.32;

type BoxShapeProps = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  payload?: Row;
};

/**
 * 1 群の箱ヒゲ。
 *
 * **名前を `Box` にしない。** docgen はコンポーネント名で引くので、`layout/Box` と
 * 衝突して `Stack` / `Center` / `Container` の props 表がこの形状の props に
 * 置き換わる（`check:prop-api` が「Stack の prop が 19 件消えた」と報告した）。
 *
 * 画素は recharts がくれた `[min, max]` の矩形から比で置く（`spanPixel`）──
 * **shape に `yAxis.scale` は渡ってこない**ので、軸から引き直すことはできない。
 */
const BoxAndWhisker = ({
  x = 0,
  y = 0,
  width = 0,
  height = 0,
  payload,
}: BoxShapeProps) => {
  if (!payload) return null;
  const rect = { y, height };
  const at = (value: number) => spanPixel(value, payload.span, rect);

  const center = x + width / 2;
  const boxWidth = width * BOX_WIDTH_RATIO;
  const capWidth = width * CAP_WIDTH_RATIO;

  const q3Y = at(payload.q3);
  const q1Y = at(payload.q1);
  // 四分位範囲が 0 の群（値が 1 つ / すべて同じ）でも線として残す。
  const boxHeight = Math.max(q1Y - q3Y, 1);

  return (
    <g>
      {/* ヒゲ: min から max までの 1 本。箱の下を通るが、箱が上に乗って隠れる。 */}
      <line
        className={styles.whisker}
        x1={center}
        x2={center}
        y1={at(payload.min)}
        y2={at(payload.max)}
      />
      <line
        className={styles.whisker}
        x1={center - capWidth / 2}
        x2={center + capWidth / 2}
        y1={at(payload.min)}
        y2={at(payload.min)}
      />
      <line
        className={styles.whisker}
        x1={center - capWidth / 2}
        x2={center + capWidth / 2}
        y1={at(payload.max)}
        y2={at(payload.max)}
      />
      {/* 箱: q1 から q3。中央値だけ濃い線で引く ── 箱の中の位置が歪みを表す。 */}
      <rect
        className={styles.box}
        x={center - boxWidth / 2}
        y={q3Y}
        width={boxWidth}
        height={boxHeight}
        rx={2}
      />
      <line
        className={styles.median}
        x1={center - boxWidth / 2}
        x2={center + boxWidth / 2}
        y1={at(payload.median)}
        y2={at(payload.median)}
      />
    </g>
  );
};

/**
 * Shows how values are spread within each group — response times per endpoint,
 * salaries per role, scores per class.
 *
 * **A box plot shows the shape of a distribution, not one number for it.** Two
 * groups with the same average can have completely different boxes, which is
 * exactly what a `BarChart` of averages hides.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const BoxPlot = ({
  data,
  height = 300,
  width = "100%",
  title,
  "aria-label": ariaLabel,
}: BoxPlotProps) => {
  const name = ariaLabel ?? title;
  const rows: Row[] = (data ?? []).map((item) => ({
    ...item,
    span: [item.min, item.max] as BarSpan,
  }));
  const table = summaryTable(data ?? []);
  // 分布は値域の中の位置を語るので、軸は 0 起点にしない（`spanDomain`）。
  const domain = spanDomain(rows.map((row) => row.span));

  return (
    <div
      className={`wim-box-plot ${styles.root}`}
      style={{ width }}
      role={name ? "figure" : undefined}
      aria-label={name}
    >
      {title && (
        <Title tag="h3" size="md" style={{ marginBottom: "var(--wim-spacing-md)" }}>
          {title}
        </Title>
      )}
      {/* 描画そのものは支援技術から隠し、同じ値を下の表で渡す（T230）。 */}
      <div className={styles.container} style={{ height }} aria-hidden="true">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart
            {...CHART_HIDDEN_A11Y_PROPS}
            data={rows}
            margin={{ top: 8, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid {...CHART_THEME.grid} vertical={false} />
            {/* 群の名前は凡例で代替できないので、間引かせず全部出す（T136）。 */}
            <XAxis
              dataKey="name"
              interval={0}
              {...CHART_THEME.axis}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              width={44}
              domain={domain}
              {...CHART_THEME.axis}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={CHART_THEME.tooltip.contentStyle}
              cursor={CHART_THEME.tooltip.cursor}
            />
            {/* 1 本の Bar + カスタム shape。2 本重ねると recharts が横に並べ、
                ヒゲと箱の中心が 12px ずれる（実測）。 */}
            <Bar dataKey="span" shape={<BoxAndWhisker />} isAnimationActive={false} />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
      <ChartDataTable caption={name} columns={table.columns} rows={table.rows} />
    </div>
  );
};
