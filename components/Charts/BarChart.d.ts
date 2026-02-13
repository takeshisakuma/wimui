export type BarChartProps = {
    data: any[];
    keys: string[];
    xAxisKey: string;
    stacked?: boolean;
    height?: number;
    width?: string | number;
    title?: string;
};
export declare const BarChart: ({ data, keys, xAxisKey, stacked, height, width, title, }: BarChartProps) => import("react/jsx-runtime").JSX.Element;
