---
"wimui": minor
---

`Button` は、アイコンだけ・名前なしのとき、アイコン名を名前として付けなくなりました（T345）。

これまで `<Button icon="CopyIcon" />` は `aria-label="CopyIcon"` で出て、スクリーンリーダーでは「CopyIcon、ボタン」と読まれていました。名前が付いている扱いになるので、検査（axe の `button-name`）は通り、書いた側は気づけませんでした。

- アイコンだけのボタンには、`aria-label`（または `aria-labelledby`）を渡してください
- 名前の無いアイコンだけのボタンは、開発時に `console.warn` で知らせます（本番では出ません）
- **既存のコードへの影響**: 名前を渡していないアイコンだけの `Button` は、名前なしのボタンになります。axe などの検査で、新しく `button-name` が出ることがあります ── それが、直す場所です

文字の子があるボタン、`aria-label` / `aria-labelledby` / `title` を渡しているボタンは、変わりません。
