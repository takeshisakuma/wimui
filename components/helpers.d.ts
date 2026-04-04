/**
 * チャートコンポーネントの `data` prop に渡す1件分のデータ型。
 * 各キーの値は文字列・数値・null のいずれかです。
 */
export type ChartDataPoint = Record<string, string | number | null>;
export declare const CHART_COLORS: string[];
export declare const CHART_THEME: {
    axis: {
        stroke: string;
        fontSize: number;
    };
    grid: {
        stroke: string;
        strokeDasharray: string;
    };
    tooltip: {
        contentStyle: {
            backgroundColor: string;
            border: string;
            borderRadius: string;
            fontSize: string;
        };
    };
};
