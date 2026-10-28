---
"wimui": patch
---

`wimui/form/rich-text-editor` の optional peer `@tiptap/*`（7 つ）の下限を `^3.7.0` に上げた。RichTextEditor は `@tiptap/markdown` を必ず読み込み、`@tiptap/markdown` の最初の stable 版は 3.7.0 で、どの版も `@tiptap/core` / `@tiptap/pm` の 3.7.0 以上を要求する。これまでの `^3.0.0` のうち 3.0〜3.6 は実際には組み合わせて入れられなかったので、動いていた組み合わせは外れない。
