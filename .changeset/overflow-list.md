---
"wimui": minor
---

`OverflowList` を足した（T361）。項目を 1 行に並べ、入らない分を「+N」にまとめる。

- 並べる行と各項目の幅を測り、入る分だけを描いて、残りを `renderOverflow(hiddenItems)` に渡す。行や項目の幅が変わるたびに数え直すので、広がれば畳んだ項目は戻る。
- `collapseFrom="end"`（既定。先頭の項目を残す）と `"start"`（最後の項目を残す。パスで今いる場所を残す形）。`minVisibleItems` / `alwaysRenderOverflow` / `onOverflow` / `gap`。
- 「+N」に何を出すか（件数・Popover・Menu）は使う側が決める。畳んだ項目は DOM から外れるので、「+N」を名前付きのボタンにして、開いた先に隠れた項目を並べる。
- 器の幅いっぱいに広がり、最小は 0（ほかの要素と横に並べたときは 120px）、望む幅は全項目を 1 行に並べた幅。表のセルや inline-block の中でも畳み、広がれば戻る。
