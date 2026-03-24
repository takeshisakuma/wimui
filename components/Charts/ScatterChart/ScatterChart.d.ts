export type ScatterChartProps = {
    data: {
        x: number;
        y: number;
        z?: number;
        name: string;
    }[];
    xAxisName?: string;
    yAxisName?: string;
    height?: number;
    width?: string | number;
    title?: string;
};
export declare const ScatterChart: ({ data, xAxisName, yAxisName, height, width, title, }: ScatterChartProps) => import("react/jsx-runtime").JSX.Element;
