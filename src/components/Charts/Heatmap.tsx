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
import { CHART_THEME } from "./helpers";

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
  colorRange = ["#f5f5f5", "#d40045"], // v1 as max color
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
    return (
      colorRange[1] +
      Math.floor(ratio * 255)
        .toString(16)
        .padStart(2, "0")
    );
  };

  return (
    <div style={{ width, height: "auto" }}>
      {title && (
        <h3 style={{ fontSize: "16px", marginBottom: "16px" }}>{title}</h3>
      )}
      <div style={{ height }}>
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
