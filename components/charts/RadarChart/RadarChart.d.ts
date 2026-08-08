import { default as React } from '../../../../node_modules/react';
import { ChartDataPoint } from '../../helpers';
export type RadarChartProps = {
    /**
     * Data to display in the chart.
     */
    data: ChartDataPoint[];
    /**
     * Keys in the data objects to render as radar areas (series).
     */
    keys: string[];
    /**
     * The key in the data objects used for the axis (category) labels.
     */
    indexKey: string;
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
export declare const RadarChart: ({ data, keys, indexKey, height, width, title, animated, }: RadarChartProps) => React.JSX.Element;
