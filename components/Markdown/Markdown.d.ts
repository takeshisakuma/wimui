export type MarkdownProps = {
    /**
     * レンダリングするMarkdown文字列。
     */
    children: string;
    /**
     * クラス名。
     */
    className?: string;
    /**
     * remarkGfm などのプラグインを使用するかどうか。デフォルトは `true`。
     */
    gfm?: boolean;
};
/**
 * Markdown形式のテキストを安全にレンダリングするためのコンポーネント。
 */
export declare const Markdown: ({ children, className, gfm, ...props }: MarkdownProps) => import("react/jsx-runtime").JSX.Element;
