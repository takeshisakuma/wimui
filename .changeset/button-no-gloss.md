---
"wimui": minor
---

## 既定値の変更（利用者の画面が黙って変わる）

`Button` の solid から光沢を外しました。静止時は上から白 8% のグラデーション（`--wim-glass-gradient`）と上辺 1px の白いハイライト（`--wim-inner-highlight`）を、ホバー時もハイライトを重ねていました。面の色に意味を足さない装飾だったためです。

- 面は `intent` の色だけになります。静止時の影（`--wim-shadow-sm`）とホバーで地色を暗くする合図は変わりません。
- 押したとき（`:active`）の見た目も変わりません。
- `--wim-glass-gradient` / `--wim-inner-highlight` のトークンは残しています。自分の部品で使っている場合も影響はありません。
