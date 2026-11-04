import { default as React } from '../../../../node_modules/react';
/** Title sizes, smallest first. Markdown h1 starts at `baseLevel`; h2–h4 step down. */
declare const TITLE_SIZE_STEPS: readonly ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"];
export type MarkdownHeadingSize = (typeof TITLE_SIZE_STEPS)[number];
export interface MarkdownRendererProps {
    /** The markdown string to render */
    content: string;
    /**
     * Visual size of markdown `h1`. `h2`–`h4` step one Title size down from this,
     * clamped at `xs`. Does not change the HTML heading tag — that stays as
     * written in the markdown. Default `"2xl"` keeps the historical mapping
     * (`h1` 2xl / `h2` xl / `h3` lg / `h4` md).
     */
    baseLevel?: (typeof TITLE_SIZE_STEPS)[number];
    /** Additional CSS class for the root element */
    className?: string;
    /** Whether to render titles with anchor links (default: false) */
    withAnchors?: boolean;
}
/**
 * MarkdownRenderer converts a markdown string into WIM UI components.
 * It uses react-markdown under the hood and applies WIM's typography system.
 */
export declare const MarkdownRenderer: React.FC<MarkdownRendererProps>;
export {};
