import { default as React } from '../../../../node_modules/react';
export type PieChartProps = {
    /**
     * Slices to display. Each entry has a name (label) and a value.
     */
    data: {
        name: string;
        value: number;
    }[];
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
     * If true, renders as a donut chart with a hollow center.
     * @default false
     */
    donut?: boolean;
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
export declare const PieChart: ({ data, height, width, title, donut, animated, "aria-label": ariaLabel, }: PieChartProps) => React.JSX.Element;
