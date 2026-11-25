---
"wimui": minor
---

Combobox・ToggleGroup: `name` を受けるようにした。素の `<form>` の送信（React 19 のフォームの action・サーバーアクションを含む）に値が入る。

- Combobox: 入力欄の文字を送る。これまでも残りの props として入力欄へ渡っていたが、型に無かった
- ToggleGroup: 選んだ値を送る（`selectionMode="multiple"` では選んだ値ごとに 1 つ。`FormData.getAll` で読む）。これまでは `name` を受けず、フォームへ値を送らなかった。囲んでいるフォームの `reset` で、制御していないときは `defaultValue` へ戻る。`disabled` のときは送らない
