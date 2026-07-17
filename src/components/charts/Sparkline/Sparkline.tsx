import React, { useId } from "react";
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

const DEFAULT_COLOR = "var(--wim-color-primary)";

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
  width = 100,
  height = 24,
  color = DEFAULT_COLOR,
  strokeWidth = 2,
  showLastDot = false,
  min,
  max,
  ariaLabel,
  className,
}: SparklineProps) => {
  const gradientId = useId().replace(/:/g, "");
  const chartData = data.map((value, index) => ({ index, value }));
  const domain: [number | "auto", number | "auto"] = [min ?? "auto", max ?? "auto"];
  const lastIndex = data.length - 1;
  // VRT: skip ResponsiveContainer — its ResizeObserver first paint is often an
  // empty SVG on CI. Fixed pixel size matches the outer wrapper dimensions.
  const isVrt =
    typeof window !== "undefined" &&
    Boolean((window as Window & { __VRT__?: boolean }).__VRT__);
  const chartWidth = typeof width === "number" ? width : 100;
  const chartHeight = height ?? 24;

  const renderLastDot = (props: { cx?: number; cy?: number; index?: number }) => {
    const { cx, cy, index } = props;
    if (!showLastDot || index !== lastIndex || cx == null || cy == null) {
      return <g key={index} />;
    }
    return <circle key={index} cx={cx} cy={cy} r={strokeWidth + 1} fill={color} />;
  };

  const sizeProps = isVrt ? { width: chartWidth, height: chartHeight } : {};
  // ラベルはルート要素の role="img" / aria-hidden が担うため、Recharts 側の
  // アクセシビリティレイヤー（ラッパーの tabindex=0）は常に無効化する。
  // aria-hidden 内にフォーカス可能要素が残ると axe: aria-hidden-focus 違反になる。
  const a11yProps = { accessibilityLayer: false, tabIndex: -1 };

  const renderChart = () => {
    if (type === "bar") {
      return (
        <RechartsBarChart
          {...sizeProps}
          {...a11yProps}
          data={chartData}
          margin={{ top: 2, right: 2, bottom: 2, left: 2 }}
        >
          <YAxis hide domain={domain} />
          <Bar dataKey="value" fill={color} radius={[2, 2, 0, 0]} isAnimationActive={false} />
        </RechartsBarChart>
      );
    }
    if (type === "area") {
      return (
        <RechartsAreaChart
          {...sizeProps}
          {...a11yProps}
          data={chartData}
          margin={{ top: 2, right: 2, bottom: 2, left: 2 }}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.35} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <YAxis hide domain={domain} />
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={strokeWidth}
            fill={`url(#${gradientId})`}
            dot={showLastDot ? renderLastDot : false}
            isAnimationActive={false}
          />
        </RechartsAreaChart>
      );
    }
    return (
      <RechartsLineChart
        {...sizeProps}
        {...a11yProps}
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
      {isVrt ? (
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
