---
"wimui": minor
---

チャート 10 件（`AreaChart` / `BarChart` / `FunnelChart` / `GaugeChart` / `Heatmap` / `LineChart` / `PieChart` / `RadarChart` / `ScatterChart` / `Treemap`）に、アクセシブル名と値のテキスト代替を入れた（T230）。

これまでこの 10 件は `role` も `aria-*` も持たず、支援技術からは名前の無い図形にしか見えなかった。`aria-label` を渡しても props 型に無いため実装が受け取らず、**型検査は通るのに DOM へ届かない**状態だった（TypeScript はハイフンを含む JSX 属性を props 型と突き合わせないため、エラーにもならない）。

- 根の要素が `role="figure"` になり、`title` から名前を取る。`aria-label` prop を新設したので、可視の見出しが無い場合や見出しだけでは足りない場合はそちらで渡せる。
- recharts の描画は `aria-hidden` で隠し、**同じ値を目に見えない表**として併記する。列はチャートごとの `data` の形に対応する（系列型は `xAxisKey` + `keys`、対型は名前と値、`Heatmap` は行列、`ScatterChart` は点ごと）。
- `GaugeChart` だけは表を足さない。値が既に可視のテキストとして描かれており、同じ数字を 2 つ置くと 2 回読み上げられるため。足りていなかった名前だけを足した。

表は `aria-label` で名前を付けており `<caption>` は使わないので、**DOM のテキストは増えない**（`getByText(title)` は従来どおり 1 件）。
