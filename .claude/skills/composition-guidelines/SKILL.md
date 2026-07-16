---
name: composition-guidelines
description: Use BEFORE combining multiple WIM UI components into a screen, pattern, page, recipe, demo, story (stories/Patterns/**, MDX examples), or any composed layout. Loads the anti-generic composition rules that keep composed screens from looking AI-generated.
---

# コンポジションガイドラインの適用

複数コンポーネントを組み合わせるレイアウトを書く前に、`DESIGN.md` の「コンポジションガイドライン（AI 的な画面を避ける）」セクションを Read して従うこと。

手順:

1. `DESIGN.md` 末尾の「コンポジションガイドライン」セクションを読む（禁止パターン表・必須ルール・チェックリスト）。
2. レイアウトを書く前に、その画面の「視覚的主役」を 1 つ決める。
3. 実装中は禁止パターン（135deg グラデヒーロー、定型ヒーロー構成、絵文字アイコン、Skeleton の偽スクリーンショット、全部中央揃え、ハードコード値、既定値の style 上書き）を出さない。
4. 完成後、セクション末尾のセルフレビューチェックリストで自己検証してから完了とする。

ガイドラインの本文は DESIGN.md が唯一の情報源（このファイルに複製しない）。
