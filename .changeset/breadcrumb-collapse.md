---
"wimui": minor
---

`Breadcrumb` に `overflow="collapse"` を足した（T361）。1 行に入らないパスは、先頭の階層と現在のページを残し、間の階層を「…」のボタンにまとめる。

- 「…」を押すと、畳んだ階層がリンクとして並ぶ（disclosure。面は引き金の隣に開き、画面の端では上へ返す・内側へ寄せる）。Escape・外側を押す・フォーカスが外へ出ると閉じ、Escape ではボタンへ戻る。矢印キーの移動先にも「…」が入る。
- ボタンの読み上げの名前は、内蔵の翻訳の「Show hidden levels (n)」（ja / pt あり）。`moreLabel(count)` で差し替えられる。
- 既定は `overflow="wrap"`（これまでどおり折り返す）。

`OverflowList` に 2 つ足した。

- `collapseFrom="middle"`: 先頭の 1 つを残し、2 つ目から畳む。「+N」は先頭のすぐ後ろに置く。
- `listElement="ul" | "ol"`: 行をリストとして描く（`renderItem` / `renderOverflow` は `<li>` を返す）。これまでは行が `div` で、リストの中に置けなかった。
