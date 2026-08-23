import React from "react";
import {
  Radar,
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { Title } from "../../typography/Title/Title";
import { CHART_COLORS, CHART_THEME, type ChartDataPoint } from "../../helpers";
import { ChartDataTable } from "../../_internal/ChartDataTable";
import { seriesTable } from "../../_internal/chartTableData";
import styles from "./radar-chart.module.scss";

export type RadarChartProps = {
  /**
   * Data to display in the chart.
   */
  data: ChartDataPoint[];
  /**
   * Keys in the data objects to render as radar areas (series).
   */
  keys: string[];
  /**
   * The key in the data objects used for the axis (category) labels.
   */
  indexKey: string;
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

export const RadarChart = ({
  data,
  keys,
  indexKey,
  height = 300,
  width = "100%",
  title,
  animated = false,
  "aria-label": ariaLabel,
}: RadarChartProps) => {
  const name = ariaLabel ?? title;
  const table = seriesTable(data, indexKey, keys);
  return (
    <div
      className={`wim-radar-chart ${styles.root}`}
      style={{ width }}
      role={name ? "figure" : undefined}
      aria-label={name}
    >
      {title && (
        <Title tag="h3" size="md" style={{ marginBottom: "var(--wim-spacing-md)" }}>
          {title}
        </Title>
      )}
      {/* 描画そのものは支援技術から隠し、同じ値を下の表で渡す（T230）。 */}
      <div className={styles.container} style={{ height }} aria-hidden="true">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsRadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke={CHART_THEME.grid.stroke} />
            <PolarAngleAxis dataKey={indexKey} {...CHART_THEME.axis} />
            {/* T135: 半径の目盛りは中央付近で回転して重なり、読めなかった。
                レーダーは**軸ごとの形**を比べる図で、絶対値は Tooltip が出す。 */}
            <PolarRadiusAxis tick={false} axisLine={false} />
            <Tooltip 
              contentStyle={CHART_THEME.tooltip.contentStyle} 
              cursor={CHART_THEME.tooltip.cursor}
            />
            <Legend verticalAlign="top" height={36} {...CHART_THEME.legend} />
            {keys.map((key, index) => (
              <Radar
                key={key}
                name={key}
                dataKey={key}
                stroke={CHART_COLORS[index % CHART_COLORS.length]}
                fill={CHART_COLORS[index % CHART_COLORS.length]}
                strokeWidth={2}
                // T135: 0.6 だと 2 系列目が 1 系列目を覆って**後ろが読めない**。
                // 面は位置の当たりだけ付け、形は輪郭線で比べる。
                fillOpacity={0.18}
                isAnimationActive={animated}
              />
            ))}
          </RechartsRadarChart>
        </ResponsiveContainer>
      </div>
      <ChartDataTable caption={name} columns={table.columns} rows={table.rows} />
    </div>
  );
};
