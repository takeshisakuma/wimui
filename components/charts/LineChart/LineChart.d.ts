import { default as React } from '../../../../node_modules/react';
import { ChartDataPoint } from '../../helpers';
export type LineChartProps = {
    /**
     * Data to display in the chart.
     */
    data: ChartDataPoint[];
    /**
     * Keys in the data objects to render as lines (series).
     */
    keys: string[];
    /**
     * The key in the data objects used for the X axis labels.
     */
    xAxisKey: string;
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
     * @default false
     */
    smooth?: boolean;
    /**
     * If true, animates the chart on mount.
     * @default false
     */
    animated?: boolean;
};
export declare const LineChart: ({ data, keys, xAxisKey, height, width, title, smooth, animated, }: LineChartProps) => React.JSX.Element;
