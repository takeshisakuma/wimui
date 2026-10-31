---
"wimui": patch
---

字間のトークンの定義を 1 か所にした。`--wim-letter-spacing-wide` はトークンの定義では 0.02em だったが、別のファイルが 0.05em で上書きしていて、実際に効いていたのは 0.05em だった。定義を 0.05em に揃え、上書きを消した。`--wim-letter-spacing-extra-wide`（0.1em）も同じファイルにしか無かったので、トークンの定義へ移した。どちらも効いている値は変わらない。型 `WimLetterSpacingKey` に `"extra-wide"` が加わる。
