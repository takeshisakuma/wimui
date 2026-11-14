import { default as React } from '../../../../node_modules/react';
export type GaugeChartProps = {
    /**
     * Current value displayed by the gauge. Clamped between min and max.
     */
    value: number;
    /**
     * Minimum value of the gauge.
     * @default 0
     */
    min?: number;
    /**
     * Maximum value of the gauge.
     * @default 100
     */
    max?: number;
    /**
     * The height of the chart in pixels.
     * @default 200
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
     * Text label displayed with the value inside the gauge.
     */
    label?: string;
    /**
     * Color of the gauge arc. Defaults to the first chart color.
     */
    color?: string;
    /**
     * If true, animates the chart on mount.
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
export declare const GaugeChart: ({ value, min, max, height, width, title, label, color, animated, "aria-label": ariaLabel, }: GaugeChartProps) => React.JSX.Element;
