import {
  Extension,
  getHTMLFromFragment,
  type Editor,
  type JSONContent,
} from "@tiptap/core";
import { Node as PMNode, type Schema } from "@tiptap/pm/model";
// 名前付きで読む（extension-image と同じ理由: CJS の出力では default の相互運用が崩れる）
import { Markdown } from "@tiptap/markdown";

// ---- スキーマに無い Markdown の構造 ----
// ツールバーで作れない構造（コード・表）はスキーマに無い。@tiptap/markdown は受け皿の無いトークンを
// 本文ごと捨てる（コードブロックとインラインコードの中身が消えた。実測）ので、本文を段落として残す。
// 引用は既定の受け皿が中の段落を残し、区切り線は本文を持たないので足さない。

type MarkdownCell = { tokens?: unknown[] };

const text = (value: string): JSONContent => ({ type: "text", text: value });

/** コードブロック → 段落（行は改行で残す）。 */
const CodeBlockAsParagraph = Extension.create({
  name: "wimMarkdownCode",
  markdownTokenName: "code",
  parseMarkdown: (token) => {
    const lines = (token.text ?? "").split("\n");
    const content = lines.flatMap((line, i) => [
      ...(i > 0 ? [{ type: "hardBreak" }] : []),
      ...(line ? [text(line)] : []),
    ]);
    return { type: "paragraph", content };
  },
});

/** インラインコード → 地の文。 */
const CodeSpanAsText = Extension.create({
  name: "wimMarkdownCodespan",
  markdownTokenName: "codespan",
  parseMarkdown: (token) => text(token.text ?? ""),
});

/** 表 → 行ごとの段落（セルは ` | ` でつなぐ）。 */
const TableAsParagraphs = Extension.create({
  name: "wimMarkdownTable",
  markdownTokenName: "table",
  parseMarkdown: (token, helpers) => {
    const rows = [token.header as MarkdownCell[], ...((token.rows ?? []) as MarkdownCell[][])];
    return rows.map((cells) => ({
      type: "paragraph",
      content: cells.flatMap((cell, i) => [
        ...(i > 0 ? [text(" | ")] : []),
        ...helpers.parseInline((cell.tokens ?? []) as Parameters<typeof helpers.parseInline>[0]),
      ]),
    }));
  },
});

// ---- 読み込み ----

/**
 * スキーマに無い型（タスクリストなど）は中身だけ残し、無い装飾（format="markdown" の下線など）は外す。ツールバーに無い見出しの段（h4〜h6）は段落にする
 * （HTML の `<h4>` が段落になるのと同じ。そのまま渡すと Tiptap は h1 として描く）。
 */
const fitToSchema = (node: JSONContent, schema: Schema): JSONContent[] => {
  if (node.type === "text") {
    return [{ ...node, marks: node.marks?.filter((mark) => !!schema.marks[mark.type]) }];
  }
  const content = (node.content ?? []).flatMap((child) => fitToSchema(child, schema));
  if (!node.type || !schema.nodes[node.type]) return content;
  if (node.type === "heading" && ![1, 2, 3].includes(Number(node.attrs?.level))) {
    return [{ type: "paragraph", content }];
  }
  return [{ ...node, content }];
};

/**
 * Markdown を、エディタのスキーマに通せる HTML にする。
 *
 * @tiptap/markdown は Markdown を直接文書（JSON）にするので、スキーマの parseHTML に書いた規則を通らない ──
 * `[x](javascript:…)` のリンクも `![](data:…)` の画像も残り、画像は段落の中に入る（実測）。そこで一度 HTML にして、
 * HTML の入力と同じ経路（スキーマ・リンクと画像の URL の許可リスト）で組み立て直す。無害化の規則を 1 か所に保つため。
 */
export const markdownToHtml = (editor: Editor, markdown: string): string => {
  if (!editor.markdown) throw new Error("[wimui] RichTextEditor: the Markdown extension is not registered.");
  const { schema } = editor;
  const [doc] = fitToSchema(editor.markdown.parse(markdown), schema);
  return getHTMLFromFragment(PMNode.fromJSON(schema, doc).content, schema);
};

/**
 * エディタの作成時に Markdown の初期値を読む。作成後に setContent すると、初期値が元に戻す（undo）の履歴に乗るため。
 * Markdown 拡張（editor.markdown を作る）より後ろに置く。
 */
const InitialMarkdown = Extension.create<{ content: string | undefined }>({
  name: "wimInitialMarkdown",
  addOptions: () => ({ content: undefined }),
  onBeforeCreate() {
    if (this.options.content === undefined) return;
    this.editor.options.content = markdownToHtml(this.editor, this.options.content);
  },
});

/** Markdown の読み書きに要る拡張。`initialMarkdown` を渡すと、それを初期値として読む。 */
export const createMarkdownExtensions = (initialMarkdown: string | undefined) => [
  Markdown,
  CodeBlockAsParagraph,
  CodeSpanAsText,
  TableAsParagraphs,
  InitialMarkdown.configure({ content: initialMarkdown }),
];
