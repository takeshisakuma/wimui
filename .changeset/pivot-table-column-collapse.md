---
"wimui": minor
---

PivotTable で列のグループを折りたためるようにしました。あわせて、行の開閉の prop を改名しました（破壊的変更）。

- 列のグループの見出しに開閉ボタンが付きます。折りたたんだグループは列を 1 本だけ残し、その列では `getValue` にグループのキーが渡されます。`columnSubtotals` を付けていなくても同じです。列のグループを持つ表では、`getValue` が列のグループのキーに答えるようにしてください（答えが無いと、折りたたんだ列は空になります）。
- 列の開閉は `expandedColumnValues` / `defaultExpandedColumnValues` / `onExpandedColumnChange` で扱います。行とは別々に、制御・非制御を選べます。
- **改名**: 行の開閉の prop は `expandedValues` → `expandedRowValues`、`defaultExpandedValues` → `defaultExpandedRowValues`、`onExpandedChange` → `onExpandedRowChange` になりました。古い名前は残していません。
- 列のグループの見出しはボタンの中に描かれます。行と同じく、リンクなどの操作できる要素は入れないでください。
- 配下のグループをすべて折りたたむと、見出しの段が減ります（空の段は残しません）。
- `columnSubtotals` の小計の列は、開いているグループにだけ付きます。
- `virtualized` の列幅は、列の位置ではなく列ごとに覚えます。列のグループを折りたたんでも隣の列に幅が移らず、開き直すと元の幅に戻ります。
