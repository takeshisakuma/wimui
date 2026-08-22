/**
 * チャートコンポーネントの `data` prop に渡す1件分のデータ型。
 * 各キーの値は文字列・数値・null のいずれかです。
 */
export type ChartDataPoint = Record<string, string | number | null>;
/** Soft-tone series palette — kept separate from Vivid UI semantics. */
export declare const CHART_COLORS: string[];
export declare const CHART_TEXT_COLORS: string[];
export declare const CHART_THEME: {
    axis: {
        stroke: string;
        fontSize: number;
        tick: {
            fill: string;
        };
    };
    legend: {
        labelStyle: {
            color: string;
        };
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
            backdropFilter: string;
            color: string;
        };
        cursor: {
            fill: string;
            stroke: string;
            strokeWidth: number;
            fillOpacity: number;
            strokeOpacity: number;
        };
    };
};
/**
 * 軸の範囲（recharts の domain と同じ書き方）。T134 で追加。
 * 0 起点が要るのは面積で比べる図（棒）だけで、折れ線や散布図は
 * データに合わせたほうが差が読める。
 */
export type ChartAxisDomain = [
    number | "auto" | "dataMin" | (string & {}),
    number | "auto" | "dataMax" | (string & {})
];
