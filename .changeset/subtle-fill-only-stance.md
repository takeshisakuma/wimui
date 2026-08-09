---
"wimui": patch
---

Redraw `subtle` as a fill without a ring, so it stops colliding with `outline`

`Badge` / `Tag` / `Chip` の `variant="subtle"` を **面のみ**（塗り＋透明枠）に戻し、
`outline` を **輪郭のみ**（透明背景＋枠）のままにして、2 つを補集合にしました。

直前の実装（濃い色の 2px 枠＋太字）は `outline` とほぼ同じ見た目になっていたうえ、
**枠 2px・太字で 3 変種のうち最も目立つ**という逆転を起こしていました
（`outline` は枠 1px）。`subtle` を名乗る変種が一番強く出るのは意味が破綻しています。

その前の実装（塗り＋同色の薄いリング）に単純に戻したわけではありません。**リングは
落としました** — 塗りと同色の枠を添える形は Tailwind の `bg-x-100 text-x-800
border-x-200` と同じ定型で、`outline` へ先祖返りする原因そのものだったためです。

塗りのアルファは `check:contrast`（189 組 × light/dark）の実測で **13%** に決めました。
通る範囲は 0.12〜0.15 しかありません: これより薄いと塗りが面と見分けられなくなり
（0.10 で 0.0133 < 基準 0.015）、濃いと文字が AA を割ります（0.16 で 4.46 < 4.5）。

外寸は変わりません（枠は 1px のまま透明にしただけ）。`font-weight` の上書きも外したので、
`Tag` / `Chip` は `medium`、`Badge` は `normal` という各コンポーネントの既定に戻ります。
