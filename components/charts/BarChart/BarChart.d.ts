import { default as React } from '../../../../node_modules/react';
import { ChartDataPoint, ChartAxisDomain } from '../../helpers';
export type BarChartProps = {
    /**
     * Data to display in the chart.
     */
    data: ChartDataPoint[];
    /**
     * Keys in the data objects to render as bars (series).
     */
    keys: string[];
    /**
     * The key in the data objects used for the X axis labels.
     */
    xAxisKey: string;
    /**
     * If true, series are stacked on top of each other.
     * @default false
     */
    stacked?: boolean;
    /**
     * Range of the Y axis. Pass ["auto", "auto"] when the change matters more
     * than the distance from zero. Bars keep zero by default: their length is
     * the value, so cutting the axis lies about the ratio between them.
     * @default [0, "auto"]
     */
    yDomain?: ChartAxisDomain;
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
    /**
     * Accessible name for the chart. Defaults to `title` when omitted; pass this
     * when the chart has no visible title, or when the title is not descriptive
     * enough on its own.
     */
    "aria-label"?: string;
};
export declare const BarChart: ({ data, keys, xAxisKey, stacked, yDomain, height, width, title, animated, "aria-label": ariaLabel, }: BarChartProps) => React.JSX.Element;
