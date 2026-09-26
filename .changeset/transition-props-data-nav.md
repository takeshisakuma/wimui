---
"wimui": patch
---

データ表示とナビゲーションの部品で、`transition: all` をやめ、動かすプロパティを列挙しました（24 箇所）。

対象は Accordion / Badge / Card / Chip / JsonViewer / List / Reaction / Tag / TreeView / BackTop / CommandPalette / Link / Pagination / SpeedDial / Stepper / TabBar / Tabs です。

- 色・背景・枠・影・outline の色・透明度に加えて、状態で変わるものも列挙しています。押したときの縮小、開閉（Accordion の高さ・SpeedDial の展開・TreeView の矢印の回転）、無効時の `filter` です。
- 開閉などの動きはこれまでどおりです。密度を切り替えたときに余白や幅がふわっと動くことは無くなります。
