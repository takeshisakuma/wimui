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
import { stepTable } from "../../_internal/chartTableData";
import { type BarSpan, isFiniteNumber } from "../../_internal/barSpan";
import styles from "./waterfall-chart.module.scss";

export type WaterfallItem = {
  /** Label for this step, shown on the X axis. */
  name: string;
  /**
   * How much this step adds (positive) or removes (negative) from the running
   * total. On a `total` step this is ignored — the bar is drawn to the running
   * total instead.
   */
  value: number;
  /**
   * Draw this step as a total: a bar from the baseline up to the running total,
   * rather than a floating change. Use it for the opening and closing columns.
   * @default false
   */
  total?: boolean;
};

export type WaterfallChartProps = {
  /** The steps, in the order they are applied. */
  data: WaterfallItem[];
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

/** 段の種類。色と符号の両方がこれで決まる。 */
type StepKind = "increase" | "decrease" | "total";

type Row = {
  name: string;
  /** 昇順の [下端, 上端]。recharts はこれを画素の矩形に写す。 */
  span: BarSpan;
  kind: StepKind;
  /** 値ラベルに出す数。`total` は running total、それ以外は増減。 */
  amount: number;
  /** その段を終えた時点の running total。表の 3 列目。 */
  running: number;
};

const KIND_FILL: Record<StepKind, string> = {
  // 「良い / 悪い」ではなく「足された / 引かれた」。増減の向きは値ラベルの符号が
  // 運ぶので、色を読まなくても分かる（`Stats.Trend` が up を成功色に固定して
  // 事故ったのと同じ轍を踏まないための線引き）。
  increase: "var(--wim-color-chart-success)",
  decrease: "var(--wim-color-chart-danger)",
  total: "var(--wim-color-chart-primary)",
};

/** running total を積みながら、段ごとの [下端, 上端] を出す。 */
const toRows = (data: WaterfallItem[]): Row[] => {
  let running = 0;
  return (data ?? []).map((item) => {
    const value = isFiniteNumber(item?.value) ? item.value : 0;
    if (item?.total) {
      // **running total を作り直さない。** ここで足し直すと、開始の総額を
      // `total` として渡した図で最初の 1 段ぶん二重に足される。
      const span: BarSpan = running < 0 ? [running, 0] : [0, running];
      return {
        name: item.name,
        span,
        kind: "total",
        amount: running,
        running,
      };
    }
    const start = running;
    running += value;
    const span: BarSpan = start < running ? [start, running] : [running, start];
    return {
      name: item.name,
      span,
      kind: value < 0 ? "decrease" : "increase",
      amount: value,
      running,
    };
  });
};

/** 値ラベルの文字。増減には符号を付ける ── 色を読まなくても向きが分かる。 */
const signed = (row: Row): string =>
  row.kind === "total" || row.amount < 0
    ? String(row.amount)
    : `+${row.amount}`;

type StepShapeProps = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  payload?: Row;
};

/**
 * 1 段の矩形と値ラベル。
 *
 * 高さ 0（増減が 0 の段）でも**線として描く** ── 何も描かないと「その段が無い」
 * ように見えるが、実際には「動かなかった」であって別の話。
 */
const WaterfallStep = ({
  x = 0,
  y = 0,
  width = 0,
  height = 0,
  payload,
}: StepShapeProps) => {
  if (!payload) return null;
  const drawnHeight = Math.max(height, 1);
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={drawnHeight}
        fill={KIND_FILL[payload.kind]}
        rx={2}
      />
      <text
        className={styles.value}
        x={x + width / 2}
        y={y - 6}
        textAnchor="middle"
      >
        {signed(payload)}
      </text>
    </g>
  );
};

/**
 * Shows how a starting number becomes an ending number, one contribution at a
 * time — revenue to profit, last month's headcount to this month's, a budget
 * to what is left of it.
 *
 * **Each bar floats between the running total before and after that step**,
 * which is what a stacked `BarChart` cannot express: stacking shows the parts
 * of one total, not the arithmetic that produced it.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const WaterfallChart = ({
  data,
  height = 300,
  width = "100%",
  title,
  "aria-label": ariaLabel,
}: WaterfallChartProps) => {
  const name = ariaLabel ?? title;
  const rows = toRows(data);
  const table = stepTable(
    rows.map((row) => ({
      name: row.name,
      change: signed(row),
      running: row.running,
    })),
  );

  return (
    <div
      className={`wim-waterfall-chart ${styles.root}`}
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
            // 上は値ラベルのぶんを空ける（棒の上に出るので、詰めると切れる）。
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid {...CHART_THEME.grid} vertical={false} />
            {/* 段の名前は凡例で代替できないので、間引かせず全部出す（T136）。 */}
            <XAxis
              dataKey="name"
              interval={0}
              {...CHART_THEME.axis}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              width={44}
              {...CHART_THEME.axis}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={CHART_THEME.tooltip.contentStyle}
              cursor={CHART_THEME.tooltip.cursor}
            />
            {/* 1 本の Bar + カスタム shape。2 本重ねると recharts が横に並べる。 */}
            <Bar dataKey="span" shape={<WaterfallStep />} isAnimationActive={false} />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
      <ChartDataTable caption={name} columns={table.columns} rows={table.rows} />
    </div>
  );
};
