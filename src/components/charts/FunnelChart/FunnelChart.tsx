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
import { CHART_THEME, type ChartDataPoint } from "../../helpers";
import styles from "./funnel-chart.module.scss";

export type FunnelChartProps = {
  /**
   * Data to display in the chart. Each entry represents one funnel stage.
   */
  data: ChartDataPoint[];
  /**
   * The key in the data objects that represents the value of each stage.
   */
  dataKey: string;
  /**
   * The key in the data objects used for the stage labels.
   */
  nameKey: string;
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
    <div className={`wim-funnel-chart ${styles.root}`} style={{ width }}>
      {title && (
        <Title tag="h3" size="md" style={{ marginBottom: "var(--wim-spacing-md)" }}>
          {title}
        </Title>
      )}
      <div className={styles.container} style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          {/* T137: ラベルは図の右外に出るのに**その幅を誰も確保していなかった**ため、
              狭い枠では切れていた（実測: カード右端 1251 に対しラベル右端 1282）。
              いちばん長いラベル（実測 61px）が収まる余白を右に取る。**左にも同じだけ**
              取るのは、右だけ空けると図が左へ寄って見えるため（ユーザー報告）。 */}
          <RechartsFunnelChart margin={{ top: 8, right: 88, bottom: 8, left: 88 }}>
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
              {/* T137: 段ごとに色相を変える（CHART_COLORS の順）と、1 つの量が
                  減っていく図なのに**別のもの**に見える。1 色相の濃淡にする。 */}
              {data.map((_entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`color-mix(in oklch, var(--wim-color-chart-primary) ${
                    100 - Math.round((index / Math.max(data.length - 1, 1)) * 55)
                  }%, var(--wim-color-surface))`}
                />
              ))}
            </Funnel>
          </RechartsFunnelChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
