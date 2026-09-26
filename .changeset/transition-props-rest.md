---
"wimui": patch
---

レイアウト・フィードバック・メディア・文字組みの部品で、`transition: all` をやめ、動かすプロパティを列挙しました（21 箇所）。

対象は Sidebar / Navbar / Header / Footer / Dashboard / BentoGrid / InteractiveArea / Toast / Snackbar / Notification / Banner / Alert / Lightbox / Spoiler / Blockquote と、リストの行の共通部品です。

- 色・背景・枠・影・outline の色・透明度に加えて、状態で変わるものも列挙しています。Sidebar の折りたたみの幅、Navbar / Header の固定表示の位置、Snackbar の出入りの `transform`、押したときの縮小です。
- これらの動きはこれまでどおりです。密度を切り替えたときに余白や幅がふわっと動くことは無くなります。
