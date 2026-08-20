---
"wimui": minor
---

`Footer.Section` と `KeyboardShortcuts` に `titleLevel` を足した。**渡したときだけ** `title` が見出し（`h2`〜`h6`）として描かれる。

見た目は見出しなのに素の `p` だと、スクリーンリーダーの見出しジャンプから辿れない。axe には「見た目が見出しなのに見出しでない」を咎める規則が無いので、この穴は赤にならないまま残っていた。

**既定は変えていない**（`p` のまま）。ライブラリ側が段を決め打つと、ページに `h1` / `h2` がある場合に段が飛んで `heading-order` の違反を作るため ── かつて `Footer.Section` が `h4` 固定だった頃に実際に踏んでいる。段を決めるのは**ページの構造を知っている呼び出し元**の仕事なので、`Alert` の `titleTag`（既定 `div`）と同じオプトインの形にした。

```tsx
<Footer.Section title="Product" titleLevel={3}>…</Footer.Section>
<KeyboardShortcuts title="Editing" titleLevel={3} shortcuts={…} />
```

既定のままなら描画も見た目も一切変わらない。
