---
"wimui": patch
---

Chakra UI と Ark UI の部品の名前で探しても見つかるよう、15 部品に 15 語の別名を足した（`llms.txt` / `llms-full.txt` の索引に載る）。`CopyButton` に Clipboard、`CommandPalette` に Command、`DescriptionList` に Data List、`InlineEdit` に Editable、`Title` に Heading、`Stepper` に Steps、`TagInput` に Tags Input など。Ark UI の Presence（出入りのアニメーション）と、Radix・shadcn/ui・Ark UI の Toggle（押したままになるボタン）は WIM の同じ名前の部品と中身が違うので、`Presence` と `Switch` に取り違えの注意書きを付けた。部品の振る舞いは変わらない。
