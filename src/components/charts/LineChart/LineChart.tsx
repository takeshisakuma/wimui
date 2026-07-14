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
   * If true, animates the chart on mount.
   * @default false
   */
  animated?: boolean;
};

export const LineChart = ({
  data,
  keys,
  xAxisKey,
  height = 300,
  width = "100%",
  title,
  smooth = false,
  animated = false,
}: LineChartProps) => {
  return (
    <div className={`wim-line-chart ${styles.root}`} style={{ width }}>
      {title && (
        <Title tag="h3" size="md" style={{ marginBottom: "var(--wim-spacing-md)" }}>
          {title}
        </Title>
      )}
      <div className={styles.container} style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid {...CHART_THEME.grid} vertical={false} />
            <XAxis
              dataKey={xAxisKey}
              {...CHART_THEME.axis}
              tickLine={false}
              axisLine={false}
            />
            <YAxis {...CHART_THEME.axis} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={CHART_THEME.tooltip.contentStyle}
              cursor={CHART_THEME.tooltip.cursor}
            />
            <Legend verticalAlign="top" height={36} />
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
    </div>
  );
};
