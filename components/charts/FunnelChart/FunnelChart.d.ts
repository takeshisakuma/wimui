import { default as React } from '../../../../node_modules/react';
import { ChartDataPoint } from '../../helpers';
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
export declare const FunnelChart: ({ data, dataKey, nameKey, height, width, title, animated, }: FunnelChartProps) => React.JSX.Element;
