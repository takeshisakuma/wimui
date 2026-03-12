export type LineChartProps = {
    data: Record<string, unknown>[];
    keys: string[];
    xAxisKey: string;
    height?: number;
    width?: string | number;
    title?: string;
    smooth?: boolean;
};
export declare const LineChart: ({ data, keys, xAxisKey, height, width, title, smooth, }: LineChartProps) => import("react/jsx-runtime").JSX.Element;
