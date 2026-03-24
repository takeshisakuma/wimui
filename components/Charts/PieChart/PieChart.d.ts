export type PieChartProps = {
    data: {
        name: string;
        value: number;
    }[];
    height?: number;
    width?: string | number;
    title?: string;
    donut?: boolean;
};
export declare const PieChart: ({ data, height, width, title, donut, }: PieChartProps) => import("react/jsx-runtime").JSX.Element;
