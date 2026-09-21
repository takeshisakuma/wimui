---
"wimui": minor
---

`EmptyState` の既定の揃えを左へ変え、`Stats.Trend` / `Carousel` / `Dropdown` に prop を足した。**`EmptyState` は素で置いたときの見た目が変わるため、0.x の慣例に従って minor に載せる。**

## 既定値の変更（利用者の画面が黙って変わる）

- **`EmptyState` の既定の揃えが中央 → 左（`align="start"`）**（T250 ③・#674）。以前は md / lg で中央揃えに固定されていて、カードや表の中に置いた空状態だけが中央に寄った塊になっていた。**以前の見た目に戻すには `align="center"` を渡す**。中央揃えは、ページ全体の検索結果のように、その領域に空状態しか無いときに使う

## 追加（既定は変わらない）

- **`Stats.Trend` に `intent`（`"success"` | `"danger"` | `"neutral"`）**（T250 ④・#674）。色を矢印の向き（`direction`）から切り離す。コストやエラー率のように上昇が悪い知らせになる指標は `direction="up" intent="danger"` と書く。**`intent` を省くと従来どおり `direction` から色が決まる**（up = success / down = danger）
- **`Carousel` に `controlsPlacement`（`"overlay"` | `"outside"`）**（T263・#657）。`outside` は矢印を表示領域の外へ、ドットを下へ出し、文字だけのスライドの上に操作が乗らないようにする。**既定は `overlay` のまま**
- **`Dropdown` に `defaultOpen` / `open` / `onOpenChange`**（T264・#659）。開いた状態で始める・外から開閉する、ができるようになった。形は `Popover` / `HoverCard` と同じ

## 修正

- **`EmptyState` に渡した `id` / `role` / `aria-*` などの div 属性がルート要素に届くようになった**（#674）。型では受け付けていたのに、内部で捨てられていた
