import { default as React } from '../../../../node_modules/react';
export type BoxPlotItem = {
    /** Label for this group, shown on the X axis. */
    name: string;
    /** The smallest value that is not an outlier. */
    min: number;
    /** First quartile — a quarter of the values are below this. */
    q1: number;
    /** The middle value. */
    median: number;
    /** Third quartile — a quarter of the values are above this. */
    q3: number;
    /** The largest value that is not an outlier. */
    max: number;
};
export type BoxPlotProps = {
    /** One entry per group. Each is a five-number summary, already computed. */
    data: BoxPlotItem[];
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
    /** Optional title displayed above the chart. */
    title?: string;
    /**
     * Accessible name for the chart. Defaults to `title` when omitted; pass this
     * when the chart has no visible title, or when the title is not descriptive
     * enough on its own.
     */
    "aria-label"?: string;
};
/**
 * Shows how values are spread within each group — response times per endpoint,
 * salaries per role, scores per class.
 *
 * **A box plot shows the shape of a distribution, not one number for it.** Two
 * groups with the same average can have completely different boxes, which is
 * exactly what a `BarChart` of averages hides.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export declare const BoxPlot: ({ data, height, width, title, "aria-label": ariaLabel, }: BoxPlotProps) => React.JSX.Element;
