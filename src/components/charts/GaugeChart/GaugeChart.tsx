import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { CHART_COLORS } from "../../helpers";

export type GaugeChartProps = {
  value: number;
  min?: number;
  max?: number;
  height?: number;
  width?: string | number;
  title?: string;
  label?: string;
  color?: string;
};

import { Heading } from "../../typography/Heading/Heading";

export const GaugeChart = ({
  value,
  min = 0,
  max = 100,
  height = 200,
  width = "100%",
  title,
  label,
  color,
}: GaugeChartProps) => {
  // Ensure value is within bounds
  const normalizedValue = Math.max(min, Math.min(max, value));

  const data = [
    { value: normalizedValue - min },
    { value: max - normalizedValue },
  ];
  const fill = color || CHART_COLORS[0];

  return (
    <div className="wim-chart wim-chart--gauge" style={{ width, textAlign: "center" }}>
      {title && (
        <Heading tag="h3" size="md" style={{ marginBottom: "var(--wim-spacing-md)" }}>
          {title}
        </Heading>
      )}
      <div className="wim-chart__container" style={{ height, position: "relative" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="80%"
              startAngle={180}
              endAngle={0}
              innerRadius="60%"
              outerRadius="80%"
              paddingAngle={0}
              dataKey="value"
              stroke="none"
              isAnimationActive={true}
            >
              <Cell fill={fill} />
              <Cell fill="var(--wim-color-bg-secondary)" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div
          className="wim-chart__gauge-label"
          style={{
            position: "absolute",
            bottom: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "var(--wim-font-size-2xl)",
            fontWeight: "var(--wim-font-weight-bold)",
            color: "var(--wim-color-text-primary)",
          }}
        >
          {label || value}
        </div>
      </div>
    </div>
  );
};
