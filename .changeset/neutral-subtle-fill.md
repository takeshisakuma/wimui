---
"wimui": patch
---

Give `intent="neutral"` a real `subtle` surface instead of reusing its solid fill

`Badge` / `Tag` / `Chip` で `variant="subtle"` と `intent="neutral"` を組み合わせると、
**`variant="solid"` とまったく同じ面**が塗られていました（文字色だけが違う状態）。
`subtle` の役割は「`solid` より淡い面」なので、これでは変種として機能していません。

原因は intents SSOT で `neutral` の `subtle` が `neutral-fill`（＝ `solid` と同じ値）を
指していたことです。専用トークン `--wim-color-neutral-fill-subtle` を追加して、そちらを
指すようにしました。

値は総当たりの実測で選んでいます。`neutral` は base 自体がサーフェス寄りの灰色なので、
他 intent と同じ「base の 13%」では **dark の `surface-variant` 上で消えます**（知覚距離
0.0038、基準 0.015）。既存トークンにも条件を満たすものは無く、`surface-void` の
ヴェールに落ち着きました。

**アルファはテーマで逆向きに効く**ため、light 0.06 / dark 0.30 と分けています。light は
面が白いので薄いほど `solid` から離れ、dark は面が暗いので濃いほど離れます。結果、素の面の上で
`solid` との知覚距離は light 0.1780 / dark 0.1803 と両テーマで揃います。

**見た目が変わるのは `neutral` の `subtle` だけ**で、他の intent と他の variant は変わりません。
