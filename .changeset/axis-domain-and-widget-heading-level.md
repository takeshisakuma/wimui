---
"wimui": minor
---

Charts let you set the axis range, and `Dashboard` lets you set the widget heading level.

**追加のみ**（既定は変わりません）。

- **`yDomain` / `xDomain`** — `AreaChart` / `BarChart` / `LineChart` / `ScatterChart`。既定は据え置きです（棒は長さが値そのものなので、軸を切ると棒どうしの比が嘘になります。折れ線と面も 0 起点を期待する使い方があります）。値の幅が狭くて動きが潰れる図では `["auto", "auto"]` を渡してください。散布図だけは既定を data 依存にしてあります — 2 つの実測値の関係を見る図で 0 に意味はないためです。

  ```tsx
  <LineChart data={rows} keys={["yield"]} indexKey="week" yDomain={["auto", "auto"]} />
  ```

- **`Dashboard` の `titleLevel`（2〜6、既定 3）** — ウィジェットの見出しは `h3` 固定でした。`h1` の直後に置くと段が飛び、axe の `heading-order` が鳴ります。ページ側の構造に合わせてください。見た目はクラスが持っているので、段を変えても描画は変わりません。

  ```tsx
  <h1>Roastery floor</h1>
  <Dashboard titleLevel={2} widgets={widgets} />
  ```
