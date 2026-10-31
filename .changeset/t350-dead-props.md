---
"wimui": minor
---

**0.64.14 は npm に出していない。** その版の変更（字間のトークンの定義・`Spinner` / `Image` の飾りの svg・`TabBar` の `badge={0}`・`CodeDiffViewer` のファイル名）も、この版で初めて届く（下の 0.64.14 の節）。

受け取るだけで何もしていなかった prop を整理した。

- **破壊的変更**（0.x のため minor）: `PopoverContent` から `side` と `align` を外した。位置は以前から親の `Popover` の `placement`（例: `"top-start"`）で決まっていて、この 2 つは受け取っても無視されていた。渡している場合は消し、位置は `<Popover placement="…">` で指定する。
- `HoverCardContent` の `sideOffset` が効くようにした（引き金との間隔・px）。渡さなければ、これまでどおり `--wim-spacing-md`。
- `Video` の `width` が効くようにした（数は px、文字列はそのまま。親の幅を超えない）。渡さなければ、これまでどおり 100%。**これまで `width` を渡していた場合、幅いっぱいだった表示が、その幅までに変わる**（広い画面で狭くなる）。
- `PaginationPage` の `page` を非推奨にした。表示される番号は子の文字で決まり、この prop は使われていない。今後の版で外す（`renderPage` が受け取る `page` は、リンクを作るために残る）。
