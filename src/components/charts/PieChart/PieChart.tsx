import React from "react";
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Title } from "../../typography/Title/Title";
import { CHART_COLORS, CHART_THEME } from "../../helpers";

import styles from "./pie-chart.module.scss";

export type PieChartProps = {
  /**
   * Slices to display. Each entry has a name (label) and a value.
   */
  data: { name: string; value: number }[];
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
   * If true, renders as a donut chart with a hollow center.
   * @default false
   */
  donut?: boolean;
  /**
   * If true, animates the chart on mount.
   * @default false
   */
  animated?: boolean;
};

export const PieChart = ({
  data,
  height = 300,
  width = "100%",
  title,
  donut = false,
  animated = false,
}: PieChartProps) => {
  return (
    <div className={`wim-pie-chart ${styles.root}`} style={{ width }}>
      {title && (
        <Title tag="h3" size="md" style={{ marginBottom: "var(--wim-spacing-md)" }}>
          {title}
        </Title>
      )}
      <div className={styles.container} style={{ height }}>
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
              isAnimationActive={animated}
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
            <Legend verticalAlign="top" height={36} />
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
