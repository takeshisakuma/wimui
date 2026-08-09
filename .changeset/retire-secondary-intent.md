---
"wimui": minor
---

Remove the `secondary` intent — use `neutral` instead

**破壊的変更**（0.x のため minor）。`Badge` / `Chip` / `Tag` / `Progress` などの
`intent="secondary"` が使えなくなります。

```diff
- <Badge intent="secondary">Draft</Badge>
+ <Badge intent="neutral">Draft</Badge>
```

`WimIntent` と `IndicatorIntent` から `secondary` を削除しました（`ButtonIntent` /
`FeedbackIntent` / `FieldIntent` には元から含まれていません）。TypeScript を使っていれば
コンパイルエラーで検出できます。

**理由**: `secondary` と `neutral` はライトテーマで**まったく同じ色**でした（どちらも
`{pccs.gy7-5}` = `#b6b6b6`、文字も同じ `#000`）。`solid` と `outline` では**背景・文字・枠
すべてが一致**し、2 つの intent が同じものを描いていました。

加えて WIM の intent 語彙は `success` / `warning` / `danger` / `info` という**意味**の軸ですが、
`secondary` だけが**階層**の語で軸が異なります。バリアント（`solid` / `outline` / `subtle`）
という別軸が既にあるため、intent 側に階層語を置くと概念が二重になっていました。

**トークン `--wim-color-secondary` は残ります。** これは線・マーク用の灰色として
14 箇所で使われており（枠・スピナー・トラック・ドット）、`--wim-color-neutral-fill` とは
ダークテーマで値が分岐します。テーマをカスタマイズしている場合、このトークンは
これまでどおり有効です。
