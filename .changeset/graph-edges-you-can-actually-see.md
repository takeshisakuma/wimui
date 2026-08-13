---
"wimui": patch
---

`NodeGraph` と `InteractiveGraph` の辺が、地に対して読める濃さになりました。

WCAG 1.4.11 は「内容の理解に必要な図形」に 3:1 を要求します。ノードグラフの辺はまさにそれで、辺が読めなければグラフは絵でしかありません。**4 通り測って 3 通りが未達**でした。

```
                            theme  before            after
NodeGraph / Default         light  2.13:1  ✗         4.54:1  ✓
NodeGraph / Default         dark   5.41:1  ✓         3.71:1  ✓
InteractiveGraph / Default  light  1.25:1  ✗         3.61:1  ✓
InteractiveGraph / Default  dark   2.25:1  ✗         5.92:1  ✓
```

原因は 2 系統ありました。`InteractiveGraph` は面を仕切る線用のトークン（不透明度 10%）を辺に当てていました。`NodeGraph` は**辺を一切スタイルしておらず**、React Flow 既定の `#b1b1b7` がそのまま出ていました（白地の前提で選ばれた色なので、dark では偶然通っていただけです）。

**見た目が変わります** — どちらのコンポーネントも辺がはっきり見えるようになります。ノード・背景・コントロールは変わりません。

辺の色をテーマから変えたい場合は `--wim-comp-graph-edge` を上書きしてください（コンポーネント専用トークンなので公開トークン契約の外です）。上書きする場合も、グラフを載せる面に対して 3:1 を保ってください。
