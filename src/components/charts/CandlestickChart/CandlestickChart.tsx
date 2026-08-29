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
import { ohlcTable } from "../../_internal/chartTableData";
import { type BarSpan, spanPixel, spanDomain } from "../../_internal/barSpan";
import styles from "./candlestick-chart.module.scss";

export type Candle = {
  /** Label for this period, shown on the X axis. */
  name: string;
  /** Value at the start of the period. */
  open: number;
  /** Highest value reached during the period. */
  high: number;
  /** Lowest value reached during the period. */
  low: number;
  /** Value at the end of the period. */
  close: number;
};

export type CandlestickChartProps = {
  /** One entry per period, oldest first. */
  data: Candle[];
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

type Row = Candle & {
  /** 昇順の [low, high]。recharts はこれを画素の矩形に写す。 */
  span: BarSpan;
  /** 終値が始値以上か。塗りつぶしの有無と色の両方がこれで決まる。 */
  rising: boolean;
};

/** 実体の幅は帯より細くする。帯いっぱいだと隣の足と接して 1 本に見える。 */
const BODY_WIDTH_RATIO = 0.62;

type CandleShapeProps = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  payload?: Row;
};

/**
 * 1 本の足。
 *
 * **上げと下げを色だけで分けない** ── 上げは中を抜いた枠、下げは塗りつぶし、
 * というのがローソク足の元からの区別で、色を読まなくても形で分かる。色は
 * その上に乗せる。
 */
const CandleMark = ({
  x = 0,
  y = 0,
  width = 0,
  height = 0,
  payload,
}: CandleShapeProps) => {
  if (!payload) return null;
  const rect = { y, height };
  const at = (value: number) => spanPixel(value, payload.span, rect);

  const center = x + width / 2;
  const bodyWidth = width * BODY_WIDTH_RATIO;
  const top = at(Math.max(payload.open, payload.close));
  const bottom = at(Math.min(payload.open, payload.close));
  // 始値と終値が同じ足（動かなかった）も線として残す。
  const bodyHeight = Math.max(bottom - top, 1);
  const tone = payload.rising ? styles.rising : styles.falling;

  return (
    <g className={tone}>
      {/* ヒゲは実体の上下に**分けて**引く。1 本で通して実体で隠す形だと、
          中を抜いた足の内側にヒゲが横切る ── それを避けるために実体を
          サーフェス色で塗ると、今度は**チャートが自分の背景を持っている前提**に
          なる（チャートは地を塗らないので、ページ地の上では白い箱に見える）。 */}
      <line
        className={styles.wick}
        x1={center}
        x2={center}
        y1={at(payload.low)}
        y2={top + bodyHeight}
      />
      <line
        className={styles.wick}
        x1={center}
        x2={center}
        y1={top}
        y2={at(payload.high)}
      />
      <rect
        className={payload.rising ? styles.hollowBody : styles.filledBody}
        x={center - bodyWidth / 2}
        y={top}
        width={bodyWidth}
        height={bodyHeight}
      />
    </g>
  );
};

/**
 * Shows how a value opened, ranged, and closed within each period — a price
 * series, a daily temperature range, a load metric per hour.
 *
 * **Each mark carries four numbers, not one**, which is what a `LineChart` of
 * closing values drops: the line says where the period ended and nothing about
 * how far it travelled to get there.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const CandlestickChart = ({
  data,
  height = 300,
  width = "100%",
  title,
  "aria-label": ariaLabel,
}: CandlestickChartProps) => {
  const name = ariaLabel ?? title;
  const rows: Row[] = (data ?? []).map((item) => ({
    ...item,
    span: [item.low, item.high] as BarSpan,
    rising: item.close >= item.open,
  }));
  const table = ohlcTable(data ?? []);
  // 四本値は値域の中の位置を語るので、軸は 0 起点にしない（`spanDomain`）。
  const domain = spanDomain(rows.map((row) => row.span));

  return (
    <div
      className={`wim-candlestick-chart ${styles.root}`}
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
            {/* 期間の名前は凡例で代替できないので、間引かせず全部出す（T136）。 */}
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
                ヒゲと実体の中心が 12px ずれる（実測）。 */}
            <Bar dataKey="span" shape={<CandleMark />} isAnimationActive={false} />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
      <ChartDataTable caption={name} columns={table.columns} rows={table.rows} />
    </div>
  );
};
