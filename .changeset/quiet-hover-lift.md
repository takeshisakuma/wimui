---
"wimui": minor
---

## 既定値の変更（利用者の画面が黙って変わる）

押せる面がホバーで上へ浮く・拡大する動きをやめ、ホバーの合図を 1 つに絞りました。合図が重なると、画面のどこにカーソルを置いても何かが跳ねます。

- **`Card`（`interactive`）** — どの variant でも浮き上がりを外しました。`elevated` の合図は影で、ホバー時の影を `--wim-shadow-lg` から `--wim-shadow-md` に弱めています。`outline` は枠の色、`flat` / `glass` は面の色が合図です。
- **`Badge` / `Tag`（`interactive`）・`Chip`（クリックできるもの）・`InteractiveArea`（`clickable`）** — 浮き上がりを外しました。面の色（`InteractiveArea` は枠の色も）が合図です。
- **`Lightbox`** — 上部の操作ボタンの浮き上がりと、前後ボタンの拡大を外しました（面の色が合図）。画像が入ってくる動きは、行き過ぎて戻る曲線から `--wim-easing-emphasized-decelerate` へ替えています。
- **`FloatButton`** — 浮いている部品なので、ホバーで浮く動きは残しています。変えたのは、行き過ぎて戻る曲線（`--wim-transition-spring`）を `--wim-transition-base` へ替えた点だけです（長さは同じ 0.25 秒）。

押したとき（`:active`）の縮みは残しています。props と CSS 変数の名前は変わりません。
