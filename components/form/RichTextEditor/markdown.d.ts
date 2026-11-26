import { Extension, Editor } from '@tiptap/core';
/**
 * Markdown を、エディタのスキーマに通せる HTML にする。
 *
 * @tiptap/markdown は Markdown を直接文書（JSON）にするので、スキーマの parseHTML に書いた規則を通らない ──
 * `[x](javascript:…)` のリンクも `![](data:…)` の画像も残り、画像は段落の中に入る（実測）。そこで一度 HTML にして、
 * HTML の入力と同じ経路（スキーマ・リンクと画像の URL の許可リスト）で組み立て直す。無害化の規則を 1 か所に保つため。
 */
export declare const markdownToHtml: (editor: Editor, markdown: string) => string;
/**
 * Markdown の読み書きに要る拡張。`initialMarkdown` を渡すと、それを初期値として読む。
 *
 * marked はエディタごとに独立したインスタンスを渡す。@tiptap/markdown は既定では marked のモジュール共有の
 * インスタンスに記法を `use()` で足すので、同じページにある利用者自身の Tiptap エディタ（下線＋Markdown 拡張）が
 * `++` を登録すると、このエディタでも `C++ and C++` が下線として読まれる（単体テストで再現）。
 */
export declare const createMarkdownExtensions: (initialMarkdown: string | undefined) => (Extension<any, any> | Extension<{
    content: string | undefined;
}, any> | Extension<import('@tiptap/markdown').MarkdownExtensionOptions, import('@tiptap/markdown').MarkdownExtensionStorage>)[];
