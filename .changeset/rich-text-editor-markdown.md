---
"wimui": minor
---

`RichTextEditor`（`wimui/form/rich-text-editor`）に Markdown の入出力を足しました。

- `format="markdown"` を渡すと、`value` / `defaultValue` / `onChange` が HTML ではなく Markdown になります。既定は `"html"` で、今の使い方は変わりません。
- 出力に出るのはツールバーで作れるものだけです。Markdown に記法の無い下線は `<u>…</u>` で書きます。
- Markdown の入力も HTML と同じスキーマと URL の規則を通ります。`javascript:` のリンク、`data:` の画像、スキーマが許さない生の HTML は取り除かれます。ツールバーで作れない構造（コード・表・引用・h4 以下の見出し・タスクリスト）は本文を段落として残します。`++文字++` は下線として読みません（`C++` が壊れないように）。
- `format` はエディタを作るときに読みます。後から変えても中身は変換されません。
- 新しい optional peer: `@tiptap/markdown`（`^3`）。`wimui/form/rich-text-editor` を使っている場合は追加してください。`format="markdown"` を使わない場合も必要です。

```bash
npm install @tiptap/markdown
```
