import { default as React } from '../../../../node_modules/react';
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
export declare const ScatterChart: ({ data, xAxisName, yAxisName, height, width, title, animated, }: ScatterChartProps) => React.JSX.Element;
