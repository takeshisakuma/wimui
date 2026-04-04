import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { Heading } from "../../typography/Heading/Heading";
import { CHART_THEME } from "../../helpers";

export type HeatmapProps = {
  data: { x: string; y: string; value: number }[];
  xAxisKey: string[];
  yAxisKey: string[];
  height?: number;
  width?: string | number;
  title?: string;
  colorRange?: [string, string];
};

export const Heatmap = ({
  data,
  xAxisKey,
  yAxisKey,
  height = 300,
  width = "100%",
  title,
  colorRange = ["var(--wim-color-bg-secondary)", "var(--wim-color-primary)"],
}: HeatmapProps) => {
  // Convert x/y labels to numeric indexes for ScatterChart
  const formattedData = data.map((d) => ({
    x: xAxisKey.indexOf(d.x),
    y: yAxisKey.indexOf(d.y),
    value: d.value,
    labelX: d.x,
    labelY: d.y,
  }));

  const maxValue = Math.max(...data.map((d) => d.value));

  const getColor = (value: number) => {
    const ratio = value / maxValue;
    // Simple interpolation for demo (could be more sophisticated)
    if (ratio < 0.1) return colorRange[0];
    // Note: color interpolations like this theoretically need hex, 
    // but we can fallback to standard colors or use CSS classes if possible.
    // For now we keep it as is but use tokens where possible.
    return colorRange[1]; 
  };

  return (
    <div className="wim-chart" style={{ width, height: "auto" }}>
      {title && (
        <Heading tag="h3" size="md" style={{ marginBottom: "var(--wim-spacing-md)" }}>
          {title}
        </Heading>
      )}
      <div className="wim-chart__container" style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
            <XAxis
              type="number"
              dataKey="x"
              ticks={Array.from({ length: xAxisKey.length }, (_, i) => i)}
              tickFormatter={(val) => xAxisKey[val]}
              {...CHART_THEME.axis}
            />
            <YAxis
              type="number"
              dataKey="y"
              ticks={Array.from({ length: yAxisKey.length }, (_, i) => i)}
              tickFormatter={(val) => yAxisKey[val]}
              {...CHART_THEME.axis}
            />
            <ZAxis type="number" dataKey="value" range={[400, 400]} />
            <Tooltip
              cursor={{ strokeDasharray: "3 3" }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const d = payload[0].payload;
                  return (
                    <div
                      style={{
                        ...CHART_THEME.tooltip.contentStyle,
                        padding: "8px",
                      }}
                    >
                      <div>
                        {d.labelX} / {d.labelY}
                      </div>
                      <div style={{ fontWeight: "bold" }}>Value: {d.value}</div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Scatter data={formattedData} shape="square">
              {formattedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getColor(entry.value)} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
