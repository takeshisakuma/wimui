import React from "react";
import {
  Treemap as RechartsTreemap,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { CHART_COLORS, CHART_THEME } from "./helpers";

export type TreemapProps = {
  data: any[];
  dataKey: string;
  aspectRatio?: number;
  height?: number;
  width?: string | number;
  title?: string;
};

export const Treemap = ({
  data,
  dataKey,
  aspectRatio = 4 / 3,
  height = 300,
  width = "100%",
  title,
}: TreemapProps) => {
  return (
    <div style={{ width, height: "auto" }}>
      {title && (
        <h3 style={{ fontSize: "16px", marginBottom: "16px" }}>{title}</h3>
      )}
      <div style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsTreemap
            data={data}
            dataKey={dataKey}
            aspectRatio={aspectRatio}
            stroke="#fff"
            fill={CHART_COLORS[0]}
          >
            <Tooltip contentStyle={CHART_THEME.tooltip.contentStyle} />
          </RechartsTreemap>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
