---
"wimui": minor
---

利用者が渡した `aria-label` / `aria-labelledby` / `aria-describedby` が、読まれる要素に届くようにした（入力系以外の 11 部品。0.57.0 の続き）。名前は、部品のラベルが無いときだけ通す。説明は、エラーがあれば、利用者の説明とエラーの両方が並ぶ。

**包みに落ちていた部品**（ロールの無い `div` に付いていて、読まれなかった）

- `PromptInput`: 入力欄に付く
- `ImageCompare`: つまみ（slider）に付く
- `ThemeToggle`（アイコンの形）: ボタンに付く。いまのモードは、名前の後ろに残る（例: `aria-label="Appearance"` → "Appearance (Light)"）
- `Terminal`: ログ（`role="log"`）に付く。`aria-label` を渡せば、`title` の代わりに名前になる
- `ImageCropper`: 名前を渡すと、根が `role="group"` になり、そこに付く（中の操作は、内蔵の名前のまま）

**渡しても捨てられていた属性**（受ける口が無かった）

- `CopyButton` / `BackTop`: `aria-labelledby` と `aria-describedby` を受けるようになった
- `VirtualList`: `aria-describedby` を受けるようになった
- `Dropzone` / `FileUpload` / `QueryBuilder`: 3 つとも受けるようになった。`QueryBuilder` は、`aria-label` が `labels.regionAriaLabel` より優先される

包みの要素を `[aria-label]` などで引いている CSS やテストは、当たらなくなる。
