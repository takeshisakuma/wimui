import { default as React } from '../../../../node_modules/react';
export type Candle = {
    /** Label for this period, shown on the X axis. */
    name: string;
    /** Value at the start of the period. */
    open: number;
    /** Highest value reached during the period. */
    high: number;
    /** Lowest value reached during the period. */
    low: number;
    /** Value at the end of the period. */
    close: number;
};
export type CandlestickChartProps = {
    /** One entry per period, oldest first. */
    data: Candle[];
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
 * Shows how a value opened, ranged, and closed within each period — a price
 * series, a daily temperature range, a load metric per hour.
 *
 * **Each mark carries four numbers, not one**, which is what a `LineChart` of
 * closing values drops: the line says where the period ended and nothing about
 * how far it travelled to get there.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export declare const CandlestickChart: ({ data, height, width, title, "aria-label": ariaLabel, }: CandlestickChartProps) => React.JSX.Element;
