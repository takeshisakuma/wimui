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
    // 軸線と目盛り線は**非テキスト**（WCAG 1.4.11 の 3:1）。`text-disabled` は
    // サーフェス上で 3.45 / 3.35 なのでここは足りている。
    stroke: "var(--wim-color-text-disabled)",
    fontSize: 12,
    // 目盛りの**文字**は本文と同じ 4.5 が要る（T212）。recharts は目盛りラベルを
    // `fill: stroke` で描くので（`CartesianAxis.js` / `PolarAngleAxis.js`）、
    // 明示しないと**無効状態のための色が文字色になる** ── 実測 light 3.45 / dark 3.34。
    // `tick` は `fill: stroke` の**後に** spread されるため、これで上書きできる。
    tick: { fill: "var(--wim-color-text-secondary)" },
  },
  // recharts の `<Legend>` は既定でラベルの文字色に**系列色**を使う。系列パレットは
  // `check-chart-palette.js` が `contrastMin: 3` ＝**非テキスト前提**で設計しているので、
  // 文字に使うと構造的に 4.5 に届かない（実測: light の secondary で 2.02）。
  // **色による識別は凡例のスウォッチが担う**ので、文字はテキスト用トークンに寄せる（T212）。
  // `labelStyle.color` は `entry.color` に勝つ（`DefaultLegendContent.js`）。
  legend: {
    labelStyle: { color: "var(--wim-color-text-secondary)" },
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

/**
 * 軸の範囲（recharts の domain と同じ書き方）。T134 で追加。
 * 0 起点が要るのは面積で比べる図（棒）だけで、折れ線や散布図は
 * データに合わせたほうが差が読める。
 */
export type ChartAxisDomain = [
  number | "auto" | "dataMin" | (string & {}),
  number | "auto" | "dataMax" | (string & {}),
];
