export type AreaChartProps = {
    data: any[];
    keys: string[];
    xAxisKey: string;
    stacked?: boolean;
    height?: number;
    width?: string | number;
    title?: string;
    smooth?: boolean;
};
export declare const AreaChart: ({ data, keys, xAxisKey, stacked, height, width, title, smooth, }: AreaChartProps) => import("react/jsx-runtime").JSX.Element;
