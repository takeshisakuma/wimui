---
"wimui": patch
---

`DataGrid` の loading 状態の a11y を改善

`loading` 中はグリッド内容全体を半透明（`opacity`）にしていたが、a11y ツリーには残っていたため、フェードした内容（例: セル内の `Badge`）を支援技術/axe が過渡的に評価し、合成後の低コントラストが color-contrast 違反として検出されていた。root に `aria-busy` を付けて読み込み中を告知し、フェードする内容（テーブル本体・フッター）を `inert` にしてタブ順と a11y ツリーから外す。表示上の変更はない。
