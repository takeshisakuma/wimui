import { default as React } from '../../../../node_modules/react';
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
/**
 * Sparkline is a tiny, axis-free chart for embedding a trend inline — inside a
 * table cell, a Stats tile, or a Leaderboard row — where the shape matters more
 * than exact values.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export declare const Sparkline: {
    ({ data, type, width, height, color, strokeWidth, showLastDot, min, max, ariaLabel, className, }: SparklineProps): React.JSX.Element;
    displayName: string;
};
