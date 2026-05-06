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
  data: ChartDataPoint[];
  keys: string[];
  indexKey: string;
  height?: number;
  width?: string | number;
  title?: string;
};

export const RadarChart = ({
  data,
  keys,
  indexKey,
  height = 300,
  width = "100%",
  title,
}: RadarChartProps) => {
  return (
    <div className={styles.root} style={{ width }}>
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
            <PolarRadiusAxis />
            <Tooltip 
              contentStyle={CHART_THEME.tooltip.contentStyle} 
              cursor={CHART_THEME.tooltip.cursor}
            />
            <Legend verticalAlign="top" height={36} />
            {keys.map((key, index) => (
              <Radar
                key={key}
                name={key}
                dataKey={key}
                stroke={CHART_COLORS[index % CHART_COLORS.length]}
                fill={CHART_COLORS[index % CHART_COLORS.length]}
                fillOpacity={0.6}
              />
            ))}
          </RechartsRadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
