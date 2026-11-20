---
"wimui": minor
---

**`NodeGraph`（`wimui/data-display/node-graph`）と `InteractiveGraph`（`wimui/ai/interactive-graph`）は、`@xyflow/react` 13 が要るようになった（12 は受けない）。** optional peer の範囲を `^12.0.0` から `^13.0.0` に変えた。この 2 部品を使っているなら、`@xyflow/react` を 13 に上げること。React Flow 13 の変更のうち、利用者の手元に出るもの:

- `onNodesChange` / `onEdgesChange` は、変更の配列ではなく `NodeChangeset` / `EdgeChangeset` を受ける。`useNodesState` / `useEdgesState` の handler をそのまま渡しているなら、書き換えは要らない。NodeGraph の追加・削除のボタンも、この形で渡す
- `fitViewOptions.padding` の数は px として読まれる（12 までは独自の単位）。割合で指定するなら `"10%"` のように渡す。`fitView` の既定の余白は 5% になった
- グラフの色は、WIM の `data-theme` を React Flow が自分で読んで合わせる（InteractiveGraph は `colorMode` を渡すのをやめた）

あわせて、2 部品とも背景の点の模様と地の色が上の 150px にしか出ていなかった欠陥を直した。
