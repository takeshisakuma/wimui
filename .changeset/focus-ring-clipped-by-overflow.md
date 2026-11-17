---
"wimui": patch
---

フォーカスの輪が、`overflow` で切り取る親に切られて見えなくなっていた部品を直した。既定の輪は外側に描くので、親の端に接した要素では 0〜1 辺しか見えていなかった。

- スクロールする領域（Tab の停止点）: `CodeBlock`・`CodeDiffViewer` / `JsonDiffViewer` の本文と左右の面・`Terminal` のログ・`AppShell` の本文・`Splitter` の面・`Tabs` の tablist は、輪を内側に描く。`TabNavigation` は tablist の代わりにスクロールする根の内側に、`DataGrid` は表の代わりに根の外側に描く（固定した列と見出しの下に隠れないように）
- 端に接した項目: `Table` / `DataGrid` の見出しとセル・`CodeDiffViewer` の表示切り替え・`Splitter` の取っ手・`SwipeAction` のボタン・`Tag` の閉じるボタン（`TagInput` の札）・`GanttChart` の棒は、輪を内側に描く。面が塗られている `SwipeAction` と `Tag` は文字の色の輪、`GanttChart` の棒は輪の色と地の色の 2 色の輪にした。`Carousel` は矢印と点を外に出す形（`controlsOutside`）で、根に輪のぶんの余白を取った
- `ToggleGroup` の 1 つ選ぶ形で、選択中の項目の輪がスライダーの色（primary）に溶けて見えなかったのを、白の輪にした（複数選ぶ形と同じ）

強制カラー（Windows のコントラスト テーマ）でも、輪は outline のまま描かれる。
