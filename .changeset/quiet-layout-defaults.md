---
"wimui": minor
---

レイアウト部品の既定が「AI が置いたまま」に見えていた 3 点を、画面側ではなく既定と API の側で直しました。

- **`BentoGrid` に `columns`（`2 | 3 | 4`・既定 `3`）** — 列数が CSS に焼き付いていたため、中身が 3 つでない画面では「この部品を使わない」しか逃げ道がありませんでした。あわせて `BentoGridItem` の `span` が `4` まで取れるようになり、**`columns` を超える `span` は列数まで丸めます**（丸めないと grid が暗黙の列を作ってレイアウトが壊れます）。`span` の型が `1 | 2 | 3` から `1 | 2 | 3 | 4` へ**広がります** ── 値を渡す側は影響を受けませんが、`BentoGridItemProps["span"]` を自分の型として使っている場合は代入先を見直してください。
- **`InteractiveArea` に `align`（`"start" | "center"`・既定 `"center"`）** — 中央揃えに固定されていたので、カードや表の中に置いた領域だけが周りの文章から浮いていました。既定は変えていません（`Dropzone` / `Result` のように領域を丸ごと占める使い方が本来の用途のため）。`StatusContent` / `EmptyState` と同じ形です。
- **`Group` の `gap` / `Masonry` と `SimpleGrid` の `spacing` の既定を `16`（px 直書き）からトークン `"2xl"` へ** — `--wim-spacing-*` を差し替えたテーマでも、ここだけ 16px のまま残っていました。`2xl` = `1rem` なので、既定の root font-size では見た目は変わりません。
