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
import { CHART_COLORS, CHART_THEME } from "./helpers";

export type ScatterChartProps = {
  data: { x: number; y: number; z?: number; name: string }[];
  xAxisName?: string;
  yAxisName?: string;
  height?: number;
  width?: string | number;
  title?: string;
};

export const ScatterChart = ({
  data,
  xAxisName = "X",
  yAxisName = "Y",
  height = 300,
  width = "100%",
  title,
}: ScatterChartProps) => {
  return (
    <div style={{ width, height: "auto" }}>
      {title && (
        <h3 style={{ fontSize: "16px", marginBottom: "16px" }}>{title}</h3>
      )}
      <div style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsScatterChart
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid {...CHART_THEME.grid} />
            <XAxis
              type="number"
              dataKey="x"
              name={xAxisName}
              unit=""
              {...CHART_THEME.axis}
            />
            <YAxis
              type="number"
              dataKey="y"
              name={yAxisName}
              unit=""
              {...CHART_THEME.axis}
            />
            <ZAxis type="number" dataKey="z" range={[60, 400]} />
            <Tooltip
              cursor={{ strokeDasharray: "3 3" }}
              contentStyle={CHART_THEME.tooltip.contentStyle}
            />
            <Legend verticalAlign="top" height={36} />
            <Scatter name="Data Points" data={data} fill={CHART_COLORS[0]} />
          </RechartsScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
