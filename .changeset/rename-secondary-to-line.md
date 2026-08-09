---
"wimui": patch
---

Add `--wim-color-line` as the name for the border/mark grey (`--wim-color-secondary` stays as an alias)

`--wim-color-secondary` は枠・区切り線・トラック・ドットに使う灰色ですが、
`secondary` intent の廃止によって**語彙の中に参照先を失った名前**になっていました。
実態に合わせて `--wim-color-line` を追加し、ライブラリ内部の参照 36 箇所を移しました。

**旧名 `--wim-color-secondary` はそのまま残ります。** `--wim-color-line` を指すエイリアスで、
値は従来と同一です。独自にテーマを組んでいる場合、これまでどおり `--wim-color-secondary` を
上書きすれば同じように効きます。

**`--wim-color-neutral-fill` とは統合していません。** dark で値が分岐しており
（line は `#b6b6b6` のまま / neutral-fill は `#575757`）、`surface-variant` 上の知覚距離は
0.3487 対 0.0292 です。1px の枠やスピナーの線を後者で描くとダークでほぼ消えます。

あわせて、`secondary` intent の廃止時に残っていた到達不能な CSS（`Avatar` / `Progress` /
`ProgressRing` の `.secondary`）を削除しました。型から消えているためクラスは生成されず、
見た目に影響はありません。
