export type HeatmapProps = {
    data: {
        x: string;
        y: string;
        value: number;
    }[];
    xAxisKey: string[];
    yAxisKey: string[];
    height?: number;
    width?: string | number;
    title?: string;
    colorRange?: [string, string];
};
export declare const Heatmap: ({ data, xAxisKey, yAxisKey, height, width, title, colorRange, }: HeatmapProps) => import("react/jsx-runtime").JSX.Element;
