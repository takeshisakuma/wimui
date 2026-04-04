import React from "react";
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Heading } from "../../typography/Heading/Heading";
import { CHART_COLORS, CHART_THEME } from "../../helpers";

export type PieChartProps = {
  data: { name: string; value: number }[];
  height?: number;
  width?: string | number;
  title?: string;
  donut?: boolean;
};

export const PieChart = ({
  data,
  height = 300,
  width = "100%",
  title,
  donut = false,
}: PieChartProps) => {
  return (
    <div className="wim-chart" style={{ width, height: "auto" }}>
      {title && (
        <Heading tag="h3" size="md" style={{ marginBottom: "var(--wim-spacing-md)" }}>
          {title}
        </Heading>
      )}
      <div className="wim-chart__container" style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              innerRadius={donut ? "60%" : 0}
              outerRadius="80%"
              paddingAngle={donut ? 5 : 0}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={CHART_COLORS[index % CHART_COLORS.length]}
                  stroke="none"
                />
              ))}
            </Pie>
            <Tooltip contentStyle={CHART_THEME.tooltip.contentStyle} />
            <Legend verticalAlign="bottom" height={36} />
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
