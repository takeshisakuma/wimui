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
import { Heading } from "../../typography/Heading/Heading";
import { CHART_COLORS, CHART_THEME, type ChartDataPoint } from "../../helpers";

export type LineChartProps = {
  data: ChartDataPoint[];
  keys: string[];
  xAxisKey: string;
  height?: number;
  width?: string | number;
  title?: string;
  smooth?: boolean;
};

export const LineChart = ({
  data,
  keys,
  xAxisKey,
  height = 300,
  width = "100%",
  title,
  smooth = false,
}: LineChartProps) => {
  return (
    <div className="wim-chart" style={{ width, height: "auto" }}>
      {title && (
        <Heading tag="h3" size="md" style={{ marginBottom: "var(--wim-spacing-md)" }}>
          {title}
        </Heading>
      )}
      <div className="wim-chart__container" style={{ height }}>
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
            <Tooltip contentStyle={CHART_THEME.tooltip.contentStyle} />
            <Legend verticalAlign="top" height={36} />
            {keys.map((key, index) => (
              <Line
                key={key}
                type={smooth ? "monotone" : "linear"}
                dataKey={key}
                stroke={CHART_COLORS[index % CHART_COLORS.length]}
                strokeWidth={2}
                dot={{ r: 4, strokeWidth: 2, fill: "#fff" }}
                activeDot={{ r: 6 }}
              />
            ))}
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
