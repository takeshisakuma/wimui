---
"wimui": patch
---

Align the icon with the first line of text in `Banner`, `Notification` and `Snackbar`

アイコンが**テキストの 1 行目ではなく、テキスト塊の中央**に置かれていました。内容が
1 行に収まるうちは 1 行目とほぼ一致するので気付きにくく、**折り返すほどアイコンが
下へ落ちます**。`Alert` は既に修正済みで（0.16.x）、今回は残りへの横展開です。

実測（アイコンの top − 1 行目の top）:

- `Banner` の長文: 1280px で 13.2px、390px で **45.2px** → **-1.0px**
- `Notification`: title + description が常に 2 段のため**短文でも 20.7px** → **0.0px**
- `Snackbar` の長文: 1280px で 12.8px、390px で 22.8px → **0.0px**

短い内容でも悪化しません。

**アイコンの位置が変わるため、これらを含む画面の見た目が変わります。**
`Banner` / `Notification` / `Snackbar` を独自にレイアウトしている場合は確認してください。
