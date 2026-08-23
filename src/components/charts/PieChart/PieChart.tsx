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
import {
  CHART_COLORS,
  CHART_THEME,
  CHART_HIDDEN_A11Y_PROPS,
} from "../../helpers";
import { ChartDataTable } from "../../_internal/ChartDataTable";
import { pairTable } from "../../_internal/chartTableData";

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
  /**
   * Accessible name for the chart. Defaults to `title` when omitted; pass this
   * when the chart has no visible title, or when the title is not descriptive
   * enough on its own.
   */
  "aria-label"?: string;
};

export const PieChart = ({
  data,
  height = 300,
  width = "100%",
  title,
  donut = false,
  animated = false,
  "aria-label": ariaLabel,
}: PieChartProps) => {
  const name = ariaLabel ?? title;
  const table = pairTable(data, "name", "value");
  return (
    <div
      className={`wim-pie-chart ${styles.root}`}
      style={{ width }}
      role={name ? "figure" : undefined}
      aria-label={name}
    >
      {title && (
        <Title
          tag="h3"
          size="md"
          style={{ marginBottom: "var(--wim-spacing-md)" }}
        >
          {title}
        </Title>
      )}
      {/* 描画そのものは支援技術から隠し、同じ値を下の表で渡す（T230）。 */}
      <div className={styles.container} style={{ height }} aria-hidden="true">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart {...CHART_HIDDEN_A11Y_PROPS}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              innerRadius={donut ? "60%" : 0}
              outerRadius="80%"
              // T148: 隙間は**角度ではなく太さ**で作る。`paddingAngle` は半径に
              // 比例するので、ドーナツと円で開き方が変わり、内周と外周でも
              // 食い違う。2px の縁取りなら、どの扇でも隣との間が 2px になる。
              paddingAngle={0}
              dataKey="value"
              isAnimationActive={animated}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={CHART_COLORS[index % CHART_COLORS.length]}
                  // 大きな面どうしが直に接すると境界で色が振動する。
                  // サーフェス色で縁取り、面を触れさせない。
                  stroke="var(--wim-color-surface)"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip contentStyle={CHART_THEME.tooltip.contentStyle} />
            <Legend verticalAlign="top" height={36} {...CHART_THEME.legend} />
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
      <ChartDataTable
        caption={name}
        columns={table.columns}
        rows={table.rows}
      />
    </div>
  );
};
