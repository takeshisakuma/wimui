import React from "react";
import {
  Treemap as RechartsTreemap,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Title } from "../../typography/Title/Title";
import { CHART_COLORS, CHART_THEME, type ChartDataPoint } from "../../helpers";
import styles from "./treemap.module.scss";

export type TreemapProps = {
  data: ChartDataPoint[];
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
    <div className={styles.root} style={{ width }}>
      {title && (
        <Title tag="h3" size="md" style={{ marginBottom: "var(--wim-spacing-md)" }}>
          {title}
        </Title>
      )}
      <div className={styles.container} style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsTreemap
            data={data}
            dataKey={dataKey}
            aspectRatio={aspectRatio}
            stroke="var(--wim-color-bg-primary)"
            fill={CHART_COLORS[0]}
          >
            <Tooltip contentStyle={CHART_THEME.tooltip.contentStyle} />
          </RechartsTreemap>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
