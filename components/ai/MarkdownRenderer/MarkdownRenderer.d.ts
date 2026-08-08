import { default as React } from '../../../../node_modules/react';
export interface MarkdownRendererProps {
    /** The markdown string to render */
    content: string;
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
