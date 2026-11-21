import { default as React } from '../../../../node_modules/react';
export type SankeyLink = {
    /** Name of the node the flow leaves. */
    source: string;
    /** Name of the node the flow arrives at. */
    target: string;
    /** Size of the flow. The band's thickness is this value. */
    value: number;
};
export type SankeyChartProps = {
    /**
     * Every node in the diagram, in the order their colors are assigned. Names
     * are what `links` refers to, so they have to be unique.
     */
    nodes: string[];
    /**
     * Flows between nodes, by node name. A link naming a node that is not in
     * `nodes` is dropped (and reported in the console during development).
     */
    links: SankeyLink[];
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
     * Accessible name for the chart. Defaults to `title` when omitted; pass this
     * when the chart has no visible title, or when the title is not descriptive
     * enough on its own.
     */
    "aria-label"?: string;
};
/**
 * Shows how a quantity splits and recombines as it moves through stages —
 * where traffic goes, where a budget ends up, where applicants drop out.
 *
 * **The width of a band is the amount that flows through it**, which is what
 * `NodeGraph` cannot express: its edges show that two things are connected, not
 * how much moves between them.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export declare const SankeyChart: ({ nodes, links, height, width, title, "aria-label": ariaLabel, }: SankeyChartProps) => React.JSX.Element;
