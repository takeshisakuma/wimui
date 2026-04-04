import { ChartDataPoint } from '../../helpers';
export type RadarChartProps = {
    data: ChartDataPoint[];
    keys: string[];
    indexKey: string;
    height?: number;
    width?: string | number;
    title?: string;
};
export declare const RadarChart: ({ data, keys, indexKey, height, width, title, }: RadarChartProps) => import("react/jsx-runtime").JSX.Element;
