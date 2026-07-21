---
"wimui": minor
---

Navbar / Sidebar のレイアウト崩れを修正し、未定義だった `--wim-height-xl` トークンを追加

- `--wim-height-xl`（comfortable 64px / compact 56px）を新規定義。Navbar のバー高さ・Sidebar の折りたたみ幅がこの未定義トークンを参照しており、height/width が auto に潰れる不具合を修正（Navbar のボタンが天地に密着、Sidebar collapsed のラベルが縦潰れ）。
- Sidebar collapsed のアイコンを中央揃え＋ラベル非表示にし、ホバー領域の上下パディングを左右と揃えた。
