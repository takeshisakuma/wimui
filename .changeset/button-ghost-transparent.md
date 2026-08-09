---
"wimui": patch
---

Make `Button` の `variant="ghost"` fully transparent at rest

`ghost` は「静止時は透明、ホバーで背景」という変種ですが、`Button` だけが静止時から
薄い塗り（黒 3%）と枠（黒 8%）を持っていました。同じ `ghost` でも `FieldVariant` の側は
背景・枠とも `transparent` で、**同じ名前が 2 つの別物を指していた**状態です。

`Field` と一般的な定義に揃えました。ホバー時の背景は従来どおりです。

**ツールバーやリスト行など、静止時のボタンが薄く見えていた箇所の見た目が変わります。**
