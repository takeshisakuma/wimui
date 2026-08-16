---
"wimui": patch
---

`Video` の根要素（`figure`）から `role="region"` を外した。`figure` に許されるロールは `figure` / `group` / `none` / `presentation` だけで、`region` は ARIA in HTML 違反にあたる（axe-core 4.13 の `aria-allowed-role` が検出）。`aria-label` はそのまま figure ロールの名前として残るので、読み上げの手がかりは失われない。`Audio` / `Image` も `figure` だが、どちらも元からロールを付けていない。
