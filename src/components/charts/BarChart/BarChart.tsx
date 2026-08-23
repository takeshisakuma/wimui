import React from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Title } from "../../typography/Title/Title";
import {
  CHART_COLORS,
  CHART_THEME,
  type ChartDataPoint,
  CHART_HIDDEN_A11Y_PROPS,
} from "../../helpers";
import { type ChartAxisDomain } from "../../helpers";
import { ChartDataTable } from "../../_internal/ChartDataTable";
import { seriesTable } from "../../_internal/chartTableData";

import styles from "./bar-chart.module.scss";

export type BarChartProps = {
  /**
   * Data to display in the chart.
   */
  data: ChartDataPoint[];
  /**
   * Keys in the data objects to render as bars (series).
   */
  keys: string[];
  /**
   * The key in the data objects used for the X axis labels.
   */
  xAxisKey: string;
  /**
   * If true, series are stacked on top of each other.
   * @default false
   */
  stacked?: boolean;
  /**
   * Range of the Y axis. Pass ["auto", "auto"] when the change matters more
   * than the distance from zero. Bars keep zero by default: their length is
   * the value, so cutting the axis lies about the ratio between them.
   * @default [0, "auto"]
   */
  yDomain?: ChartAxisDomain;
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
  /**
   * Optional title displayed above the chart.
   */
  title?: string;
  /**
   * If true, animates the chart on mount.
   * @default false
   */
  animated?: boolean;
  /**
   * Accessible name for the chart. Defaults to `title` when omitted; pass this
   * when the chart has no visible title, or when the title is not descriptive
   * enough on its own.
   */
  "aria-label"?: string;
};

export const BarChart = ({
  data,
  keys,
  xAxisKey,
  stacked = false,
  yDomain = [0, "auto"],
  height = 300,
  width = "100%",
  title,
  animated = false,
  "aria-label": ariaLabel,
}: BarChartProps) => {
  const name = ariaLabel ?? title;
  const table = seriesTable(data, xAxisKey, keys);
  return (
    <div
      className={`wim-bar-chart ${styles.root}`}
      style={{ width }}
      role={name ? "figure" : undefined}
      aria-label={name}
    >
      {title && (
        <Title
          tag="h3"
          size="md"
          style={{ marginBottom: "var(--wim-spacing-md)" }}
        >
          {title}
        </Title>
      )}
      {/* 描画そのものは支援技術から隠し、同じ値を下の表で渡す（T230）。 */}
      <div className={styles.container} style={{ height }} aria-hidden="true">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart
            {...CHART_HIDDEN_A11Y_PROPS}
            data={data}
            /* 左の余白は `YAxis` が自分の幅で確保する。ここに 20px を足すと
               目盛りのぶんだけ図が右へ寄る（実測: 描画域の左端がカードから
               93px 内側になっていた）。 */
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid {...CHART_THEME.grid} vertical={false} />
            {/* T136: 既定では recharts が重なるラベルを黙って間引く。実測では
                幅 279px の枠で 4 本中 2 本が無名になった。棒の名前は凡例で代替
                できないので、必ず全部出す。 */}
            <XAxis
              dataKey={xAxisKey}
              interval={0}
              {...CHART_THEME.axis}
              tickLine={false}
              axisLine={false}
            />
            {/* 既定の軸幅 60px は目盛りの文字（実測 27px）に対して広く、描画域が
                右へ寄る。文字＋余白ぶんに詰める。 */}
            <YAxis
              width={44}
              domain={yDomain}
              {...CHART_THEME.axis}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={CHART_THEME.tooltip.contentStyle}
              cursor={CHART_THEME.tooltip.cursor}
            />
            <Legend verticalAlign="top" height={36} {...CHART_THEME.legend} />
            {keys.map((key, index) => (
              <Bar
                key={key}
                dataKey={key}
                fill={CHART_COLORS[index % CHART_COLORS.length]}
                stackId={stacked ? "stack" : undefined}
                radius={stacked ? 0 : [4, 4, 0, 0]}
                /* T148: 積み上げは段どうしが直に接するので、境界で色が振動する。
                   サーフェス色で 2px 縁取って触れさせない。並べる場合は軸が段を
                   分けているので縁取らない。 */
                stroke={stacked ? "var(--wim-color-surface)" : undefined}
                strokeWidth={stacked ? 2 : undefined}
                isAnimationActive={animated}
              />
            ))}
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
      <ChartDataTable
        caption={name}
        columns={table.columns}
        rows={table.rows}
      />
    </div>
  );
};
