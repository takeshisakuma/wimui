import React from "react";
import {
  Treemap as RechartsTreemap,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Title } from "../../typography/Title/Title";
import {
  CHART_COLORS,
  CHART_TEXT_COLORS,
  CHART_THEME,
  type ChartDataPoint,
} from "../../helpers";
import styles from "./treemap.module.scss";

/**
 * Props for the Treemap component.
 */
export type TreemapProps = {
  /**
   * Data to display in the treemap.
   */
  data: ChartDataPoint[];
  /**
   * The key in the data objects that represents the size of the rectangle.
   */
  dataKey: string;
  /**
   * The aspect ratio of the rectangles.
   * @default 4/3
   */
  aspectRatio?: number;
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
};

/**
 * A custom renderer for Treemap content to show labels and varied colors.
 */
const CustomizedContent = (props: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
  const { x, y, width, height, index = 0, name } = props;


  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: CHART_COLORS[index % CHART_COLORS.length],
          stroke: "none",
        }}
      />
      {width > 30 && height > 20 && (
        <text
          x={x + width / 2}
          y={y + height / 2}
          textAnchor="middle"
          dominantBaseline="central"
          style={{
            fill: CHART_TEXT_COLORS[index % CHART_TEXT_COLORS.length],
            fontSize: "var(--wim-font-size-lg)",
            fontWeight: "var(--wim-font-weight-bold)",
            stroke: "none",
            strokeWidth: 0,
            pointerEvents: "none",
            userSelect: "none",

          }}
        >
          {name}
        </text>

      )}
    </g>
  );
};


export const Treemap = ({
  data,
  dataKey,
  aspectRatio = 4 / 3,
  height = 300,
  width = "100%",
  title,
}: TreemapProps) => {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className={`${styles.root} wim-treemap__root`} style={{ width }}>
      {title && (
        <Title tag="h3" size="md" style={{ marginBottom: "var(--wim-spacing-md)" }}>
          {title}
        </Title>
      )}
      <div
        className={`${styles.container} wim-treemap__container`}
        style={{ height, minWidth: 0, minHeight: 0 }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <RechartsTreemap
            data={data}
            dataKey={dataKey}
            aspectRatio={aspectRatio}
            stroke="none"
            content={<CustomizedContent />}
            isAnimationActive={false}
          >
            <Tooltip
              contentStyle={CHART_THEME.tooltip.contentStyle}
              formatter={(value: any, name: any) => [value, name]} // eslint-disable-line @typescript-eslint/no-explicit-any
            />
          </RechartsTreemap>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
