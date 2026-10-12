---
"wimui": patch
---

`CodeDiffViewer` / `JsonDiffViewer` の表示切替（分割・統合）で、選択中のボタンの地を 1 段濃くしました（`--wim-color-ghost-bg-active`）。

これまでは、選択中のボタンと、選択中でないボタンをホバーした姿が同じ地（`--wim-color-ghost-bg-hover`）で、ホバーしているあいだ、どちらが選ばれているかが見分けられませんでした。
