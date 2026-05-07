import React from "react";
import {
  FunnelChart as RechartsFunnelChart,
  Funnel,
  LabelList,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Title } from "../../typography/Title/Title";
import { CHART_COLORS, CHART_THEME, type ChartDataPoint } from "../../helpers";
import styles from "./funnel-chart.module.scss";

export type FunnelChartProps = {
  data: ChartDataPoint[];
  dataKey: string;
  nameKey: string;
  height?: number;
  width?: string | number;
  title?: string;
  animated?: boolean;
};

export const FunnelChart = ({
  data,
  dataKey,
  nameKey,
  height = 300,
  width = "100%",
  title,
  animated = false,
}: FunnelChartProps) => {
  return (
    <div className={styles.root} style={{ width }}>
      {title && (
        <Title tag="h3" size="md" style={{ marginBottom: "var(--wim-spacing-md)" }}>
          {title}
        </Title>
      )}
      <div className={styles.container} style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsFunnelChart>
            <Tooltip 
              contentStyle={CHART_THEME.tooltip.contentStyle} 
              cursor={CHART_THEME.tooltip.cursor}
            />
            <Funnel dataKey={dataKey} data={data} isAnimationActive={animated}>
              <LabelList
                position="right"
                fill="var(--wim-color-text-secondary)"
                dataKey={nameKey}
                stroke="none"
              />
              {data.map((_entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={CHART_COLORS[index % CHART_COLORS.length]}
                />
              ))}
            </Funnel>
          </RechartsFunnelChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
