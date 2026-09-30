---
"wimui": minor
---

**破壊的変更: `RichTextEditor` の import 元が `wimui/form/rich-text-editor` に変わりました。** 中身を自前の contentEditable から Tiptap（ProseMirror）に置き換えたためです。Tiptap は optional peer なので、`wimui` / `wimui/form` からは外しています（peer を入れていない利用者でも、ルートや `wimui/form` の import が壊れないようにするため）。

移行は import の書き換えと、Tiptap のパッケージの追加だけです。props は変わりません。

```diff
- import { RichTextEditor } from "wimui";
+ import { RichTextEditor } from "wimui/form/rich-text-editor";
```

```bash
npm install @tiptap/core @tiptap/pm @tiptap/react @tiptap/starter-kit @tiptap/extensions
```

変わったこと:

- **日本語の変換（IME）・元に戻す / やり直す・貼り付けを Tiptap が担います。** 変換を確定する Enter で段落が増えることはなく、Ctrl+Z / Ctrl+Y は書式の操作も入力も 1 つの履歴で戻せます。
- **入力はすべてスキーマに通して組み立て直します。** `defaultValue` / `value` / 貼り付けた HTML から、`script` / `style` / `iframe` / `img`・`on*` 属性・許可していないタグや属性は取り除かれます。リンクの URL は `http:` / `https:` / `mailto:` と相対 URL に限り、リンクのダイアログはそれ以外の URL をエラーにします（ラベルは `labels.linkInvalid` で変えられます）。
- **空のエディタは `""` を返します**（Tiptap の既定の `<p></p>` ではなく）。
- **ツールバーがキーボードで届くようになりました。** これまでボタンはすべて `tabIndex={-1}` で、キーボードではツールバーに入れませんでした。Tab で 1 回だけ止まり、矢印キーと Home / End でボタンを移ります（WAI-ARIA の toolbar）。
- 出力の HTML は、これまでと同じタグ（`<p>` / `<h1>`〜`<h3>` / `<strong>` / `<em>` / `<u>` / `<s>` / `<ul>` / `<ol>` / `<a href>`）です。
