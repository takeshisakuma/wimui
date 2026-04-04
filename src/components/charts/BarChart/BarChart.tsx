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
import { Heading } from "../../typography/Heading/Heading";
import { CHART_COLORS, CHART_THEME, type ChartDataPoint } from "../../helpers";

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
    <div className="wim-chart" style={{ width, height: "auto" }}>
      {title && (
        <Heading tag="h3" size="md" style={{ marginBottom: "var(--wim-spacing-md)" }}>
          {title}
        </Heading>
      )}
      <div className="wim-chart__container" style={{ height }}>
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
              cursor={{ fill: "rgba(0,0,0,0.05)" }}
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
