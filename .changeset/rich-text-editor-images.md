---
"wimui": minor
---

`RichTextEditor`（`wimui/form/rich-text-editor`）に画像の埋め込みを足しました。

- ツールバーに `"image"` を足すと、URL と代替テキストで画像を挿入できます。画像のボタンは既定のツールバーには入れていないので、今の画面の見た目は変わりません。
- `onImageUpload?: (file: File) => Promise<string>` を渡すと、画像のダイアログに「ファイルを選ぶ」が出て、エディタに貼り付け・ドロップした画像ファイルもアップロードして挿入します。エディタはアップロード先を持たず、返ってきた URL だけを入れます。
- 画像の URL は `http:` / `https:` と相対 URL に限ります。`data:` / `blob:` / `javascript:` などの `src` を持つ画像は、読み込み時（`defaultValue` / `value` / 貼り付け）に取り除かれ、ダイアログとアップロードではエラーになります。
- 新しい optional peer: `@tiptap/extension-image`（`^3`）。`wimui/form/rich-text-editor` を使っている場合は追加してください。

```bash
npm install @tiptap/extension-image
```
