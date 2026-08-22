import { default as React } from '../../../../node_modules/react';
import { ChartDataPoint } from '../../helpers';
/**
 * Props for the Treemap component.
 */
export type TreemapProps = {
    /**
     * Data to display in the treemap.
     */
    data: ChartDataPoint[];
    /**
     * The key in the data objects that represents the size of the rectangle.
     */
    dataKey: string;
    /**
     * The aspect ratio of the rectangles.
     * @default 4/3
     */
    aspectRatio?: number;
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
};
export declare const Treemap: ({ data, dataKey, aspectRatio, height, width, title, }: TreemapProps) => React.JSX.Element | null;
