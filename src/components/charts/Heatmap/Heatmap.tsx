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
import { Title } from "../../typography/Title/Title";
import { CHART_THEME } from "../../helpers";
import { ChartDataTable } from "../../_internal/ChartDataTable";
import { matrixTable } from "../../_internal/chartTableData";

import styles from "./heatmap.module.scss";

export type HeatmapProps = {
  /**
   * Cells to display. Each entry maps an x/y category pair to a value.
   */
  data: { x: string; y: string; value: number }[];
  /**
   * Ordered list of X axis category labels.
   */
  xAxisKey: string[];
  /**
   * Ordered list of Y axis category labels.
   */
  yAxisKey: string[];
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
   * Colors used for the lowest and highest values.
   * @default ["var(--wim-color-surface-variant)", "var(--wim-color-chart-primary)"]
   */
  colorRange?: [string, string];
  /**
   * Whether to animate the cells on mount.
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

export const Heatmap = ({
  data,
  xAxisKey,
  yAxisKey,
  height = 300,
  width = "100%",
  title,
  colorRange = ["var(--wim-color-surface-variant)", "var(--wim-color-chart-primary)"],
  animated = false,
  "aria-label": ariaLabel,
}: HeatmapProps) => {
  const name = ariaLabel ?? title;
  // 行が y、列が x。交点に値が無いセルは空欄のままにする（0 と混ぜない）。
  const table = matrixTable(data, xAxisKey, yAxisKey);
  // Convert x/y labels to numeric indexes for ScatterChart
  const formattedData = data.map((d) => ({
    x: xAxisKey.indexOf(d.x),
    y: yAxisKey.indexOf(d.y),
    value: d.value,
    labelX: d.x,
    labelY: d.y,
  }));

  const values = data.map((d) => d.value);
  const maxValue = Math.max(...values);
  const minValue = Math.min(...values);

  /**
   * 値を色に写す。**以前は 2 値しか返していなかった**（`ratio < 0.1` なら薄い色、
   * それ以外は一律に濃い色）ので、12 と 63 が同じ色で描かれ、ヒートマップが
   * 大小を伝えていなかった（T133）。
   *
   * トークン（`var(--wim-color-…)`）のまま混ぜられるよう `color-mix` を使う。
   * 最小値を 0%、最大値を 100% として 2 色の間を線形に取る。
   */
  const getColor = (value: number) => {
    const span = maxValue - minValue;
    const ratio = span === 0 ? 1 : (value - minValue) / span;
    const percent = Math.round(ratio * 100);
    return `color-mix(in oklch, ${colorRange[1]} ${percent}%, ${colorRange[0]})`;
  };

  return (
    <div
      className={`wim-heatmap ${styles.root}`}
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
          {/* 実測（410px 幅のカード）: 左端のセルが Y 軸のラベルに接し（508 と 510）、
              右には 34px が空いて**左に寄って見えた**。軸の内側に余白を取り、
              右の余白は詰めて左右を揃える。 */}
          <ScatterChart margin={{ top: 20, right: 4, left: 8, bottom: 20 }}>
            <XAxis
              type="number"
              dataKey="x"
              ticks={Array.from({ length: xAxisKey.length }, (_, i) => i)}
              tickFormatter={(val) => xAxisKey[val]}
              padding={{ left: 20, right: 20 }}
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
              cursor={CHART_THEME.tooltip.cursor}
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
            {/* 既定でアニメーション無効（他チャートの animated 規約と統一。
                有効のままだと VRT update がセル描画前の空フレームを掴み得る） */}
            <Scatter data={formattedData} shape="square" isAnimationActive={animated}>
              {formattedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getColor(entry.value)} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      <ChartDataTable caption={name} columns={table.columns} rows={table.rows} />
    </div>
  );
};
