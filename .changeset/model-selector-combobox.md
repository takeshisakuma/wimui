---
"wimui": minor
---

ModelSelector の引き金を `role="combobox"` にしました（読み上げで、選択中のモデルと、いま指している項目が伝わるようにするため）。**役割が変わるので、テストで `getByRole("button")` を使っている場合は `getByRole("combobox")` に直してください。**

- **以前**: 引き金はボタンで、`aria-label` が中の文字を上書きしていたので、選択中のモデル名が読まれませんでした。いまの項目を示す `aria-activedescendant` は、フォーカスの無いリスト側に付いていました。
- **今**: 引き金が combobox（名前は `labels.triggerAriaLabel`、値は選択中のモデル名）で、`aria-activedescendant` も引き金に付きます。フォーカスは引き金に残ります。
- **キー操作は引き金で全部受けます**: ↑ / ↓ で開く・移動（無効な項目は飛ばす）、Home / End で最初・最後、Enter / Space で選択、Esc で閉じる、Tab で閉じて次へ。以前は、クリックで開いたあと矢印キーが効かず、Tab でリストに入る必要がありました。
- 開いたリストは Tab の停止点ではなくなりました。
