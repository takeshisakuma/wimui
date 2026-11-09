---
"wimui": minor
---

カードで選ぶ・カード全体を押す形を足した（T365）。

- `RadioGroup` / `CheckboxGroup` に `variant="card"` を足した。選択肢を 1 枚ずつのカードで描き、カードのどこを押しても選べる（カードが選択肢の `<label>`）。矢印キーとグループの意味はこれまでどおり。
- 選択肢に `description` を足した（両方の variant で使える）。名前の下に 2 行目として出し、入力の名前は名前の文字だけ（`aria-labelledby`）、説明文は `aria-describedby` で読む。
- `Card.Link`（`CardLink`）を足した。カードの主のリンクをカード全体に広げ、カードの中のほかのボタンやリンクは、その上で別に押せる（リンクの中に操作要素を入れ子にしない）。フォーカスの輪はカードの形に出る。`asChild` で router の Link などを渡せる。
