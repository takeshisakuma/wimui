import { default as React } from '../../../../node_modules/react';
import { ChartDataPoint } from '../../helpers';
export type AreaChartProps = {
    /**
     * Data to display in the chart.
     */
    data: ChartDataPoint[];
    /**
     * Keys in the data objects to render as areas (series).
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
     * If true, draws smooth (monotone) curves instead of straight lines.
     * @default true
     */
    smooth?: boolean;
    /**
     * If true, animates the chart on mount.
     * @default false
     */
    animated?: boolean;
};
export declare const AreaChart: ({ data, keys, xAxisKey, stacked, height, width, title, smooth, animated, }: AreaChartProps) => React.JSX.Element;
