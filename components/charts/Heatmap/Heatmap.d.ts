import { default as React } from '../../../../node_modules/react';
export type HeatmapProps = {
    /**
     * Cells to display. Each entry maps an x/y category pair to a value.
     */
    data: {
        x: string;
        y: string;
        value: number;
    }[];
    /**
     * Ordered list of X axis category labels.
     */
    xAxisKey: string[];
    /**
     * Ordered list of Y axis category labels.
     */
    yAxisKey: string[];
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
     * Colors used for the lowest and highest values.
     * @default ["var(--wim-color-surface-variant)", "var(--wim-color-chart-primary)"]
     */
    colorRange?: [string, string];
    /**
     * Whether to animate the cells on mount.
     * @default false
     */
    animated?: boolean;
};
export declare const Heatmap: ({ data, xAxisKey, yAxisKey, height, width, title, colorRange, animated, }: HeatmapProps) => React.JSX.Element;
