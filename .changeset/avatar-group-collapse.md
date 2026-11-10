---
"wimui": minor
---

`AvatarGroup` に `overflow="collapse"` を足した（T361）。器の幅に入るだけのアバターを並べ、残りを「+N」のボタンにまとめる。

- 「+N」を押すと、隠れた人が名前（各 `Avatar` の `alt`。無ければ `initials`）で並ぶ（一覧のアバターは飾りにし、名前は文字で読む）。Escape・外側を押す・フォーカスが外へ出ると閉じる。
- ボタンの名前は、見えている「+N」に、内蔵の翻訳の「Show everyone」（ja / pt あり）を続けたもの。
- この形では `max` と `total` は使わない。既定は `overflow="count"`（これまでどおり `max` / `total` で切り、「+N」は文字）。

`OverflowList` は、項目の外側の余白（マージン）も足して幅を数えるようにした。負のマージンで重ねる並び（AvatarGroup）は、幅だけを足すと実際より広く見積もり、入る項目まで畳んでいた。
