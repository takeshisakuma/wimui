/**
 * チャートコンポーネントの `data` prop に渡す1件分のデータ型。
 * 各キーの値は文字列・数値・null のいずれかです。
 */
export type ChartDataPoint = Record<string, string | number | null>;

// SVG presentation attribute として使用するため CSS カスタムプロパティは利用不可。
// 対応するデザイントークン（src/tokens/_pccs-colors.scss）は以下のとおり。
export const CHART_COLORS = [
  "#d40045", // $pccs-v1
  "#0f218b", // $pccs-v18
  "#ffcc00", // $pccs-v7
  "#008f62", // $pccs-v13
  "#56007d", // $pccs-v22
  "#ff590b", // $pccs-v5
  "#007a87", // $pccs-v15
  "#99cf15", // $pccs-v10
];

export const CHART_THEME = {
  axis: {
    stroke: "#8a8a8a", // $pccs-gy6-5
    fontSize: 12,
  },
  grid: {
    stroke: "#e5e5e5", // $pccs-gy8-5
    strokeDasharray: "3 3",
  },
  // tooltip.contentStyle は div へのインラインスタイルのため CSS カスタムプロパティが使用可能。
  tooltip: {
    contentStyle: {
      backgroundColor: "var(--wim-color-surface)",
      border: "1px solid var(--wim-color-border-secondary)",
      borderRadius: "4px",
      fontSize: "12px",
    },
  },
};
