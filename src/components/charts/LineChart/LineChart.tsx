import React from "react";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Title } from "../../typography/Title/Title";
import { CHART_COLORS, CHART_THEME, type ChartDataPoint } from "../../helpers";
import { type ChartAxisDomain } from "../../helpers";
import { ChartDataTable } from "../../_internal/ChartDataTable";
import { seriesTable } from "../../_internal/chartTableData";

import styles from "./line-chart.module.scss";

export type LineChartProps = {
  /**
   * Data to display in the chart.
   */
  data: ChartDataPoint[];
  /**
   * Keys in the data objects to render as lines (series).
   */
  keys: string[];
  /**
   * The key in the data objects used for the X axis labels.
   */
  xAxisKey: string;
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
   * If true, draws smooth (monotone) curves instead of straight lines.
   * @default false
   */
  smooth?: boolean;
  /**
   * Range of the Y axis. Pass ["auto", "auto"] when the change matters more
   * than the distance from zero (a yield moving between 84% and 85% is a flat
   * line on a 0–100 axis).
   * @default [0, "auto"]
   */
  yDomain?: ChartAxisDomain;
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

export const LineChart = ({
  data,
  keys,
  xAxisKey,
  height = 300,
  width = "100%",
  title,
  smooth = false,
  yDomain = [0, "auto"],
  animated = false,
  "aria-label": ariaLabel,
}: LineChartProps) => {
  const name = ariaLabel ?? title;
  const table = seriesTable(data, xAxisKey, keys);
  return (
    <div
      className={`wim-line-chart ${styles.root}`}
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
          <RechartsLineChart
            data={data}
            /* 左の余白は `YAxis` が自分の幅で確保する。ここに 20px を足すと
               目盛りのぶんだけ図が右へ寄る（実測: 描画域の左端がカードから
               93px 内側になっていた）。 */
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid {...CHART_THEME.grid} vertical={false} />
            <XAxis
              dataKey={xAxisKey}
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
              <Line
                key={key}
                type={smooth ? "monotone" : "linear"}
                dataKey={key}
                stroke={CHART_COLORS[index % CHART_COLORS.length]}
                strokeWidth={2}
                dot={{ r: 4, strokeWidth: 2, fill: "var(--wim-color-primary-fill)" }}
                activeDot={{ r: 6 }}
                isAnimationActive={animated}
              />
            ))}
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
      <ChartDataTable caption={name} columns={table.columns} rows={table.rows} />
    </div>
  );
};
