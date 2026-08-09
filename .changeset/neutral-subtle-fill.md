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
0.0038、基準 0.015）。既存トークンにも条件を満たすものは無く、`surface-void` の 15%
ヴェールに落ち着きました。白ではなく黒なのは、dark の `text-secondary` が明色のため
白ヴェールだと文字コントラストが 4.69〜5.22 まで落ちるのに対し、黒なら 7.84 に上がるためです。

**見た目が変わるのは `neutral` の `subtle` だけ**で、他の intent と他の variant は変わりません。
