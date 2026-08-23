import React from "react";
import {
  ScatterChart as RechartsScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Title } from "../../typography/Title/Title";
import { CHART_COLORS, CHART_THEME } from "../../helpers";
import { type ChartAxisDomain } from "../../helpers";
import { ChartDataTable } from "../../_internal/ChartDataTable";
import { pointTable } from "../../_internal/chartTableData";

import styles from "./scatter-chart.module.scss";

export type ScatterChartProps = {
  /**
   * Points to plot. `z` optionally controls the point size.
   */
  data: { x: number; y: number; z?: number; name: string }[];
  /**
   * Name of the X axis, shown in the tooltip.
   * @default "X"
   */
  xAxisName?: string;
  /**
   * Name of the Y axis, shown in the tooltip.
   * @default "Y"
   */
  yAxisName?: string;
  /**
   * Range of the X axis.
   * @default ["auto", "auto"]
   */
  xDomain?: ChartAxisDomain;
  /**
   * Range of the Y axis.
   * @default ["auto", "auto"]
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

export const ScatterChart = ({
  data,
  xAxisName = "X",
  yAxisName = "Y",
  /* T134: 既定は 0 起点ではなくデータ依存。2 つの実測値の関係を見る図なので
     0 に意味は無く、0 起点にするとデータが隅へ寄る（実測: x 2.1〜3.8 の点が
     0〜3.8 の軸で右半分に固まっていた）。 */
  xDomain = ["auto", "auto"],
  yDomain = ["auto", "auto"],
  height = 300,
  width = "100%",
  title,
  animated = false,
  "aria-label": ariaLabel,
}: ScatterChartProps) => {
  const name = ariaLabel ?? title;
  const table = pointTable(data, xAxisName, yAxisName, "Z");
  return (
    <div
      className={`wim-scatter-chart ${styles.root}`}
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
          <RechartsScatterChart
            /* 左の余白は軸が自分で持つ（AreaChart / BarChart / LineChart と同じ）。 */
            margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
          >
            <CartesianGrid {...CHART_THEME.grid} />
            <XAxis
              type="number"
              dataKey="x"
              name={xAxisName}
              unit=""
              domain={xDomain}
              {...CHART_THEME.axis}
            />
            {/* 既定の軸幅 60px は目盛りの文字に対して広く、描画域が右へ寄る
                （AreaChart / BarChart / LineChart と同じ手当て）。 */}
            <YAxis
              type="number"
              dataKey="y"
              name={yAxisName}
              unit=""
              domain={yDomain}
              width={44}
              {...CHART_THEME.axis}
            />
            <ZAxis type="number" dataKey="z" range={[60, 400]} />
            <Tooltip
              cursor={CHART_THEME.tooltip.cursor}
              contentStyle={CHART_THEME.tooltip.contentStyle}
            />
            <Legend verticalAlign="top" height={36} {...CHART_THEME.legend} />
            <Scatter name="Data Points" data={data} fill={CHART_COLORS[0]} isAnimationActive={animated} />
          </RechartsScatterChart>
        </ResponsiveContainer>
      </div>
      <ChartDataTable caption={name} columns={table.columns} rows={table.rows} />
    </div>
  );
};
