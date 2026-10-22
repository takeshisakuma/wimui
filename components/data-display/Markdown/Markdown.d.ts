import { default as React } from '../../../../node_modules/react';
export interface MarkdownProps {
    /** Markdown string to render. Provide either `content` or `children`. */
    content?: string;
    /** Markdown string to render (when passed as children). */
    children?: string;
    /** Whether to enable GitHub Flavored Markdown (default: true). */
    gfm?: boolean;
    /** Additional class names. */
    className?: string;
}
/**
 * Renders a Markdown string as HTML styled according to wim UI.
 */
export declare const Markdown: ({ content, children, gfm, className }: MarkdownProps) => React.JSX.Element;
