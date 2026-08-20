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
};

export const RadarChart = ({
  data,
  keys,
  indexKey,
  height = 300,
  width = "100%",
  title,
  animated = false,
}: RadarChartProps) => {
  return (
    <div className={`wim-radar-chart ${styles.root}`} style={{ width }}>
      {title && (
        <Title tag="h3" size="md" style={{ marginBottom: "var(--wim-spacing-md)" }}>
          {title}
        </Title>
      )}
      <div className={styles.container} style={{ height }}>
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
    </div>
  );
};
