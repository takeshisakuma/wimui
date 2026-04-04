import { ChartDataPoint } from '../../helpers';
export type TreemapProps = {
    data: ChartDataPoint[];
    dataKey: string;
    aspectRatio?: number;
    height?: number;
    width?: string | number;
    title?: string;
};
export declare const Treemap: ({ data, dataKey, aspectRatio, height, width, title, }: TreemapProps) => import("react/jsx-runtime").JSX.Element;
