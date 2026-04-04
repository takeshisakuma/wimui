import { ChartDataPoint } from '../../helpers';
export type FunnelChartProps = {
    data: ChartDataPoint[];
    dataKey: string;
    nameKey: string;
    height?: number;
    width?: string | number;
    title?: string;
};
export declare const FunnelChart: ({ data, dataKey, nameKey, height, width, title, }: FunnelChartProps) => import("react/jsx-runtime").JSX.Element;
