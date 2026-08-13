---
"wimui": patch
---

`NodeGraph` がダークテーマに追随するようになりました。**それまでダークではノードのラベルが 1 文字も見えていませんでした。**

ノードの見た目を一切指定しておらず、React Flow 既定の白背景がそのまま出ていました。文字色だけはテーマの `--wim-color-text-primary`（ダークでは白）を継ぐため、**白の上に白＝コントラスト 1:1** になっていました。

```
                  canvas     node       ラベルのコントラスト
before  light     #fff       #fff       21:1
before  dark      #393939    #fff        1:1   ← 見えない
after   light     #e5e5e5    #fff       21:1
after   dark      #262626    #393939    11.55:1
```

キャンバスを `--wim-color-surface-app`、ノードを `--wim-color-surface` に変えています（`InteractiveGraph` と同じ組み合わせで、DESIGN.md の「灰のキャンバス＋白のカード」にあたります）。**ライトテーマでもキャンバスの色が変わります** — 以前はキャンバスもノードも白で、既定の枠だけが両者を分けていました。

辺のラベル（`.react-flow__edge-text`）も両テーマとも黒文字・白背景で固定されていたので、テーマに追随させました。`NodeGraph` と `InteractiveGraph` の両方に入れています。
