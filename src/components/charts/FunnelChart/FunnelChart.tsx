import React from "react";
import {
  FunnelChart as RechartsFunnelChart,
  Funnel,
  LabelList,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { CHART_COLORS, CHART_THEME, type ChartDataPoint } from "../../helpers";

export type FunnelChartProps = {
  data: ChartDataPoint[];
  dataKey: string;
  nameKey: string;
  height?: number;
  width?: string | number;
  title?: string;
};

export const FunnelChart = ({
  data,
  dataKey,
  nameKey,
  height = 300,
  width = "100%",
  title,
}: FunnelChartProps) => {
  return (
    <div style={{ width, height: "auto" }}>
      {title && (
        <h3 style={{ fontSize: "var(--wim-spacing-xl)", marginBottom: "var(--wim-spacing-xl)" }}>{title}</h3>
      )}
      <div style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsFunnelChart>
            <Tooltip contentStyle={CHART_THEME.tooltip.contentStyle} />
            <Funnel dataKey={dataKey} data={data} isAnimationActive>
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
