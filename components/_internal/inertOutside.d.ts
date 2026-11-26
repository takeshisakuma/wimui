/**
 * `keep` とその祖先以外の、文書の要素を `inert` にする。戻す関数を返す。
 * `aria-modal` は、モーダルの外にある引き金（ヘッダーの ×）まで支援技術から隠すので、
 * 外に操作を残す面はこちらを使う。元から `inert` だった要素は戻さない。
 */
export declare function inertOutside(keep: Array<Element | null>): () => void;
