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
import { CHART_COLORS, CHART_THEME, type ChartDataPoint } from "../../helpers";

import styles from "./bar-chart.module.scss";

export type BarChartProps = {
  data: ChartDataPoint[];
  keys: string[];
  xAxisKey: string;
  stacked?: boolean;
  height?: number;
  width?: string | number;
  title?: string;
};

export const BarChart = ({
  data,
  keys,
  xAxisKey,
  stacked = false,
  height = 300,
  width = "100%",
  title,
}: BarChartProps) => {
  return (
    <div className={styles.root} style={{ width }}>
      {title && (
        <Title tag="h3" size="md" style={{ marginBottom: "var(--wim-spacing-md)" }}>
          {title}
        </Title>
      )}
      <div className={styles.container} style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart
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
              <Bar
                key={key}
                dataKey={key}
                fill={CHART_COLORS[index % CHART_COLORS.length]}
                stackId={stacked ? "stack" : undefined}
                radius={stacked ? 0 : [4, 4, 0, 0]}
              />
            ))}
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
