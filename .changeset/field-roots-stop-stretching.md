---
"wimui": minor
---

`SignaturePad` and `Rating` stop stretching to the width of the field they sit in.

**見た目が変わります**（API は変わりません。0.x のため minor）。この 2 つを幅の広い場所に置いている画面は、確実に動きます。

- **何が起きていたか。** どちらの根も `display: inline-flex` ＝ 内容幅に縮む意図で書かれていました。ところが `FieldTemplate` の `.content` は flex の縦並びなので、根は flex アイテムになります。**flex アイテムの `display: inline-*` は `flex` へ blockify されて黙って捨てられ**、既定の `align-items: stretch` で親いっぱいに引き伸ばされていました。書いてある宣言が効いていないので、`display` を書き直しても何も変わりません。
- **実測（1280px のビューポート・親 1260px）。** `SignaturePad` の根は **1152px**（`max-width: 90vw` だけが効いている状態）まで伸び、`width={400}` で描いた canvas の右端から **690px 離れたところに `Clear` ボタンが座って**いました。`Rating` の根は **1260px** で、星の右側に押しても何も起きない空白が広がっていました。
- **直し方は `width: fit-content`。** `align-self: flex-start` でも幅は直りますが、行方向の flex 親（`Group align="center"` など）に置いたときに**交差軸の揃えまで変えてしまう**ので採っていません。`fit-content` は `ToggleGroup` と `FieldTemplate` の色欄で既に使っている手で、`max-content` と違って**幅が足りなければ折り返します**（`Rating` は `children` を受け取れるので、この違いが効きます）。
- **直った後。** `SignaturePad` は `width` prop のとおり（400 なら 400、600 なら 600、800 なら 800）、`Rating` は星の実寸（sm 128 / md 176 / lg 236）に収まります。`Clear` は canvas の内側に戻ります。

利用者側にこの伸びを止める手段はありませんでした（field の根の幅を決める prop が無く、`width` は canvas 専用）。外側にラッパーを置いて幅を作っていた画面は、そのラッパーを外せます。

**この欠陥は単体ストーリーでは出ませんでした。** どちらも `layout: "centered"` で枠が 432px しかなく、canvas とほぼ同じ幅だったためです。VRT にも a11y にも映らなかったので、広い親に置いた `In Wide Field` ストーリーを両方に足しました。
