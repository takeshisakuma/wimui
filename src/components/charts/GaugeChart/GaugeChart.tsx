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
  animated?: boolean;
};

import { Title } from "../../typography/Title/Title";

import classNames from "classnames";
import styles from "./gauge-chart.module.scss";

export const GaugeChart = ({
  value,
  min = 0,
  max = 100,
  height = 200,
  width = "100%",
  title,
  label,
  color,
  animated = false,
}: GaugeChartProps) => {
  // Ensure value is within bounds
  const normalizedValue = Math.max(min, Math.min(max, value));

  const data = [
    { value: normalizedValue - min },
    { value: max - normalizedValue },
  ];
  const fill = color || CHART_COLORS[0];

  return (
    <div className={classNames(styles.root, styles.gauge)} style={{ width }}>
      {title && (
        <Title tag="h3" size="md" style={{ marginBottom: "var(--wim-spacing-md)" }}>
          {title}
        </Title>
      )}
      <div className={styles.container} style={{ height }}>
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
              isAnimationActive={animated}
            >
              <Cell fill={fill} />
              <Cell fill="var(--wim-color-bg-secondary)" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className={styles.gaugeLabel}>
          {label || value}
        </div>
      </div>
    </div>
  );
};
