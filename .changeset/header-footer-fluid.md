---
"wimui": minor
---

`Header` / `Footer` に `fluid` prop を追加

- `fluid` を指定すると、内部コンテンツの中央寄せ `max-width`（1200px）コンテナを無効化し、コンテンツを全幅に広げる（`Container` の `fluid` と同じ意味）。
- 用途: AppShell のサイドバー付きレイアウト等で、ヘッダー/フッターの内容幅を full-bleed な main と揃える。既定は従来どおり 1200px 中央寄せのため、既存の見た目に影響はない（非破壊）。
