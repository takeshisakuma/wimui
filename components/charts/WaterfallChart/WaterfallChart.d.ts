import { default as React } from '../../../../node_modules/react';
export type WaterfallItem = {
    /** Label for this step, shown on the X axis. */
    name: string;
    /**
     * How much this step adds (positive) or removes (negative) from the running
     * total. On a `total` step this is ignored — the bar is drawn to the running
     * total instead.
     */
    value: number;
    /**
     * Draw this step as a total: a bar from the baseline up to the running total,
     * rather than a floating change. Use it for the opening and closing columns.
     * @default false
     */
    total?: boolean;
};
export type WaterfallChartProps = {
    /** The steps, in the order they are applied. */
    data: WaterfallItem[];
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
 * Shows how a starting number becomes an ending number, one contribution at a
 * time — revenue to profit, last month's headcount to this month's, a budget
 * to what is left of it.
 *
 * **Each bar floats between the running total before and after that step**,
 * which is what a stacked `BarChart` cannot express: stacking shows the parts
 * of one total, not the arithmetic that produced it.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export declare const WaterfallChart: ({ data, height, width, title, "aria-label": ariaLabel, }: WaterfallChartProps) => React.JSX.Element;
