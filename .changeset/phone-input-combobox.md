---
"wimui": minor
---

PhoneInput の国の選択を、キーボードで操作できる `combobox` にしました。**引き金の役割が `button` から `combobox` に変わるので、テストで `getByRole("button", { name: "Select country" })` を使っている場合は `getByRole("combobox", …)` に直してください。**

- **以前**: 開いたリストの各項目が Tab の停止点で、矢印キーも Esc も効きませんでした（Tab で 1 つずつ進み、Enter / Space で選ぶだけ）。
- **今**: フォーカスは引き金に残り、キーは引き金で受けます。↑ / ↓ で開く・移動、Home / End で最初・最後、Enter / Space で選択、Esc で変更せずに閉じる、Tab で閉じて次へ。いまの項目は `aria-activedescendant` で伝えます。
- **名前**: `label` を渡したとき、国の引き金まで `label`（例:「電話番号」）で読まれていました。`label` は番号の入力欄の名前なので、国の選択は常に「Select country」（ja:「国を選択」/ pt:「Selecionar país」）になります。値は国番号（例: `+81`）です。
