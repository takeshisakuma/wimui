---
"wimui": minor
---

`ChatUI` に、ツールの呼び出しとシステムメッセージを足した（T363）。

- `ChatToolCall`: アシスタントがツールを 1 回呼び出したことを、名前・状態（`waiting` / `running` / `done` / `error`。`AgentStatus` と同じ語）・要約で 1 行に示し、開くと引数（`input`）と結果（`output`）が出る。文字列を渡すと等幅の面で描く。状態は開閉ボタンの名前に含まれ、変わっても読み上げない。
- `ChatSystemMessage`: 誰の発言でもない通知（会話の開始・モデルの切り替え・答えの失敗）を、吹き出しを使わずに一覧の中央へ置く。`intent` は `default` / `warning` / `danger`、`action` に再試行などのボタンを置ける。
- `ChatMessage` の `metadata`: モデル名・トークン数・所要時間などを、`timestamp` と同じ行に並べる。
