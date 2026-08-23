import React from "react";
import {
  LineChart as RechartsLineChart,
  Line,
  AreaChart as RechartsAreaChart,
  Area,
  BarChart as RechartsBarChart,
  Bar,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import classNames from "classnames";
import { CHART_HIDDEN_A11Y_PROPS } from "../../helpers";
import styles from "./sparkline.module.scss";

/** Visual form of the sparkline. */
export type SparklineType = "line" | "area" | "bar";

export interface SparklineProps {
  /** Sequence of values to plot, in order */
  data: number[];
  /** Visual form of the sparkline */
  type?: SparklineType;
  /** Width of the sparkline (number in px, or a CSS value such as "100%") */
  width?: number | string;
  /** Height of the sparkline in px */
  height?: number;
  /** Stroke/fill color (defaults to the primary chart color) */
  color?: string;
  /** Stroke width for line and area types */
  strokeWidth?: number;
  /** Whether to emphasize the last data point with a dot (line and area only) */
  showLastDot?: boolean;
  /** Lower bound of the y-axis domain (defaults to the data minimum) */
  min?: number;
  /** Upper bound of the y-axis domain (defaults to the data maximum) */
  max?: number;
  /** Accessible label describing the trend; when omitted the sparkline is hidden from assistive tech */
  ariaLabel?: string;
  /** Additional class names */
  className?: string;
}

const DEFAULT_COLOR = "var(--wim-color-chart-primary)";

/**
 * Sparkline is a tiny, axis-free chart for embedding a trend inline — inside a
 * table cell, a Stats tile, or a Leaderboard row — where the shape matters more
 * than exact values.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const Sparkline = ({
  data,
  type = "line",
  /* T143: 既定の 100px はタイルの左 3 分の 1 しか使わない（実測: 279px の
     カードに 100px）。置き場所は器なので、幅は器に合わせるのが既定。 */
  width = "100%",
  height = 24,
  color = DEFAULT_COLOR,
  strokeWidth = 2,
  showLastDot = false,
  min,
  max,
  ariaLabel,
  className,
}: SparklineProps) => {
  const chartData = data.map((value, index) => ({ index, value }));
  const domain: [number | "auto", number | "auto"] = [
    min ?? "auto",
    max ?? "auto",
  ];
  const lastIndex = data.length - 1;
  // VRT: skip ResponsiveContainer — its ResizeObserver first paint is often an
  // empty SVG on CI. Fixed pixel size matches the outer wrapper dimensions.
  const isVrt =
    typeof window !== "undefined" &&
    Boolean((window as Window & { __VRT__?: boolean }).__VRT__);
  /* 撮影用の固定サイズは**数値で渡されたときだけ**。以前は文字列でも 100px に
     落としていたので、`width="100%"` が VRT でだけ 100px で撮られていた
     （実物と撮影像が食い違う）。文字列のときは撮影でも器に合わせる。 */
  const chartWidth = typeof width === "number" ? width : null;
  const chartHeight = height ?? 24;

  const renderLastDot = (props: {
    cx?: number;
    cy?: number;
    index?: number;
  }) => {
    const { cx, cy, index } = props;
    if (!showLastDot || index !== lastIndex || cx == null || cy == null) {
      return <g key={index} />;
    }
    return (
      <circle key={index} cx={cx} cy={cy} r={strokeWidth + 1} fill={color} />
    );
  };

  const sizeProps =
    isVrt && chartWidth !== null
      ? { width: chartWidth, height: chartHeight }
      : {};
  // ラベルはルート要素の role="img" / aria-hidden が担うため、Recharts 側の
  // アクセシビリティレイヤー（ラッパーの tabindex=0）は常に無効化する。
  // aria-hidden 内にフォーカス可能要素が残ると axe: aria-hidden-focus 違反になる。

  const renderChart = () => {
    if (type === "bar") {
      return (
        <RechartsBarChart
          {...sizeProps}
          {...CHART_HIDDEN_A11Y_PROPS}
          data={chartData}
          margin={{ top: 2, right: 2, bottom: 2, left: 2 }}
        >
          <YAxis hide domain={domain} />
          <Bar
            dataKey="value"
            fill={color}
            radius={[2, 2, 0, 0]}
            isAnimationActive={false}
          />
        </RechartsBarChart>
      );
    }
    if (type === "area") {
      return (
        <RechartsAreaChart
          {...sizeProps}
          {...CHART_HIDDEN_A11Y_PROPS}
          data={chartData}
          margin={{ top: 2, right: 2, bottom: 2, left: 2 }}
        >
          <YAxis hide domain={domain} />
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={strokeWidth}
            /* T147: フェードは値と無関係な濃淡を持ち込む。塗りは 1 段階。 */
            fill={color}
            fillOpacity={0.15}
            dot={showLastDot ? renderLastDot : false}
            isAnimationActive={false}
          />
        </RechartsAreaChart>
      );
    }
    return (
      <RechartsLineChart
        {...sizeProps}
        {...CHART_HIDDEN_A11Y_PROPS}
        data={chartData}
        margin={{ top: 2, right: 2, bottom: 2, left: 2 }}
      >
        <YAxis hide domain={domain} />
        <Line
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={strokeWidth}
          dot={showLastDot ? renderLastDot : false}
          isAnimationActive={false}
        />
      </RechartsLineChart>
    );
  };

  return (
    <div
      className={classNames("wim-sparkline", styles.root, className)}
      style={{ width, height }}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
    >
      {isVrt && chartWidth !== null ? (
        renderChart()
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          {renderChart()}
        </ResponsiveContainer>
      )}
    </div>
  );
};

Sparkline.displayName = "Sparkline";
