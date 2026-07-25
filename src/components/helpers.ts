/**
 * チャートコンポーネントの `data` prop に渡す1件分のデータ型。
 * 各キーの値は文字列・数値・null のいずれかです。
 */
export type ChartDataPoint = Record<string, string | number | null>;

// SVG presentation attribute として使用するため CSS カスタムプロパティは利用不可。
// とされていますが、現代のブラウザ（Recharts環境）では `fill` や `stroke` への `var()` 指定が有効なため、
// ダークモード対応とブランドカラー統一のためにトークンを適用します。
/** Soft-tone series palette — kept separate from Vivid UI semantics. */
export const CHART_COLORS = [
  "var(--wim-color-chart-primary)",
  "var(--wim-color-chart-info)",
  "var(--wim-color-chart-success)",
  "var(--wim-color-chart-warning)",
  "var(--wim-color-chart-danger)",
  "var(--wim-color-chart-secondary)",
  "var(--wim-color-text-tertiary)",
  "var(--wim-color-disabled)",
];

export const CHART_TEXT_COLORS = [
  "var(--wim-color-text-on-chart-primary)",
  "var(--wim-color-text-on-chart-info)",
  "var(--wim-color-text-on-chart-success)",
  "var(--wim-color-text-on-chart-warning)",
  "var(--wim-color-text-on-chart-danger)",
  "var(--wim-color-text-on-chart-secondary)",
  "var(--wim-color-text-primary)",
  "var(--wim-color-text-primary)",
];


export const CHART_THEME = {
  axis: {
    stroke: "var(--wim-color-text-disabled)",
    fontSize: 12,
  },
  grid: {
    stroke: "var(--wim-color-border-secondary)",
    strokeDasharray: "3 3",
  },
  // tooltip.contentStyle は div へのインラインスタイルのため CSS カスタムプロパティが使用可能。
    tooltip: {
      contentStyle: {
        backgroundColor: "var(--wim-color-glass-bg)",
        border: "1px solid var(--wim-color-glass-border)",
        borderRadius: "var(--wim-radius-md)",
        fontSize: "var(--wim-font-size-sm)",
        backdropFilter: "blur(8px)",
        color: "var(--wim-color-text-primary)",
      },
      cursor: {
        fill: "var(--wim-color-text-primary)",
        stroke: "var(--wim-color-border)",
        strokeWidth: 1,
        fillOpacity: 0.05,
        strokeOpacity: 0.5,
      },
    },
};
