import { default as React } from '../../../../node_modules/react';
import { ChartAxisDomain } from '../../helpers';
export type ScatterChartProps = {
    /**
     * Points to plot. `z` optionally controls the point size.
     */
    data: {
        x: number;
        y: number;
        z?: number;
        name: string;
    }[];
    /**
     * Name of the X axis, shown in the tooltip.
     * @default "X"
     */
    xAxisName?: string;
    /**
     * Name of the Y axis, shown in the tooltip.
     * @default "Y"
     */
    yAxisName?: string;
    /**
     * Range of the X axis.
     * @default ["auto", "auto"]
     */
    xDomain?: ChartAxisDomain;
    /**
     * Range of the Y axis.
     * @default ["auto", "auto"]
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
export declare const ScatterChart: ({ data, xAxisName, yAxisName, xDomain, yDomain, height, width, title, animated, "aria-label": ariaLabel, }: ScatterChartProps) => React.JSX.Element;
