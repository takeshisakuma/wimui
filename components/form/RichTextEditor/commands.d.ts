/**
 * RichTextEditor のコマンド層（純 DOM、React 非依存）。
 *
 * 旧実装は非推奨の document.execCommand / queryCommandState に依存していた
 * （IMPROVEMENTS.md T15）。ここでは Selection / Range API で同等のコマンドを
 * 実装する。部分選択時の書式分割は Range.extractContents() の仕様
 * （partial containment chain を複製してフラグメント側に書式ラッパーを残す）
 * を利用する。
 *
 * 注意: execCommand と違いブラウザのネイティブ undo スタックには乗らないため、
 * undo/redo はコンポーネント側の履歴（beforeinput の historyUndo/Redo 横取り）
 * で一元管理する。
 */
export type InlineFormat = "bold" | "italic" | "underline" | "strikethrough";
export type BlockFormat = "h1" | "h2" | "h3";
export type ListFormat = "ul" | "ol";
/** root 内に完全に収まっている選択 Range を返す（無ければ null） */
export declare function getEditorRange(root: HTMLElement): Range | null;
/** 選択位置のアクティブ書式（bold / italic / h1 / ul など）を返す */
export declare function getActiveFormats(root: HTMLElement): Set<string>;
/**
 * インライン書式のトグル。
 * - 選択あり: extractContents で切り出し、アクティブなら該当タグを除去、
 *   非アクティブなら正規タグでラップして挿入し直す
 * - 選択なし（キャレットのみ）: ZWSP 入りの書式要素を挿入してキャレットを
 *   中に置き、以降の入力に書式が乗るようにする
 */
export declare function toggleInline(root: HTMLElement, format: InlineFormat): void;
/**
 * ブロック書式（h1/h2/h3）のトグル。既に同じ見出しなら p に戻す。
 * 選択がブロックに属さない（root 直下の裸テキスト）場合はラップする。
 */
export declare function setBlock(root: HTMLElement, tag: BlockFormat | "p"): void;
/**
 * リストのトグル。
 * - 同種リスト内 → リスト全体を p の並びに展開
 * - 異種リスト内 → リストのタグを付け替え
 * - リスト外 → 選択ブロック（無ければ全内容）を li 化して包む
 */
export declare function toggleList(root: HTMLElement, listTag: ListFormat): void;
/** 選択範囲をリンク化する。キャレットのみの場合は URL テキストを挿入してリンク化 */
export declare function createLink(root: HTMLElement, url: string): void;
/** 選択位置を含むリンク（または選択範囲内のリンク）を解除する */
export declare function removeLink(root: HTMLElement): void;
/**
 * 書式を除去する。選択があれば選択範囲のみ、キャレットのみなら editor 全体。
 * execCommand("removeFormat") と同様、リンクは残す。
 */
export declare function removeAllFormatting(root: HTMLElement): void;
