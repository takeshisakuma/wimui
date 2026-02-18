export type GaugeChartProps = {
    value: number;
    min?: number;
    max?: number;
    height?: number;
    width?: string | number;
    title?: string;
    label?: string;
    color?: string;
};
export declare const GaugeChart: ({ value, min, max, height, width, title, label, color, }: GaugeChartProps) => import("react/jsx-runtime").JSX.Element;
