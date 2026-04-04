/**
 * チャートコンポーネントの `data` prop に渡す1件分のデータ型。
 * 各キーの値は文字列・数値・null のいずれかです。
 */
export type ChartDataPoint = Record<string, string | number | null>;

// SVG presentation attribute として使用するため CSS カスタムプロパティは利用不可。
// とされていますが、現代のブラウザ（Recharts環境）では `fill` や `stroke` への `var()` 指定が有効なため、
// ダークモード対応とブランドカラー統一のためにトークンを適用します。
export const CHART_COLORS = [
  "var(--wim-color-primary)",
  "var(--wim-color-informative)",
  "var(--wim-color-positive)",
  "var(--wim-color-caution)",
  "var(--wim-color-destructive)",
  "var(--wim-color-secondary)",
  "var(--wim-color-text-primary)",
  "var(--wim-color-text-secondary)",
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
  },
};
