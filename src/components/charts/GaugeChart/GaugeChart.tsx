import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { CHART_COLORS } from "../../helpers";

export type GaugeChartProps = {
  /**
   * Current value displayed by the gauge. Clamped between min and max.
   */
  value: number;
  /**
   * Minimum value of the gauge.
   * @default 0
   */
  min?: number;
  /**
   * Maximum value of the gauge.
   * @default 100
   */
  max?: number;
  /**
   * The height of the chart in pixels.
   * @default 200
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
   * Text label displayed with the value inside the gauge.
   */
  label?: string;
  /**
   * Color of the gauge arc. Defaults to the first chart color.
   */
  color?: string;
  /**
   * If true, animates the chart on mount.
   * @default false
   */
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
    <div className={classNames("wim-gauge-chart", styles.root, styles.gauge)} style={{ width }}>
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
              <Cell fill="var(--wim-color-surface-variant)" />
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
