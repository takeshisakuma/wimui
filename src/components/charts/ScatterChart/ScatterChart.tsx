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

import styles from "./scatter-chart.module.scss";

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
    <div className={styles.root} style={{ width }}>
      {title && (
        <Title tag="h3" size="md" style={{ marginBottom: "var(--wim-spacing-md)" }}>
          {title}
        </Title>
      )}
      <div className={styles.container} style={{ height }}>
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
