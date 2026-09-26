import { default as React } from '../../../../node_modules/react';
export interface HighlightProps extends React.HTMLAttributes<HTMLElement> {
    /** The full text to highlight substrings in. */
    children: React.ReactNode;
    /** Substring(s) to highlight. */
    highlight: string | string[];
    /** Custom class name for the highlighted `<mark>` element. */
    highlightClassName?: string;
    /** Custom styles for the highlighted `<mark>` element. */
    highlightStyles?: React.CSSProperties;
    /** The HTML tag or component to use for the container. Default is "span". */
    as?: React.ElementType;
    /** If true, the component will be rendered as its child. */
    asChild?: boolean;
}
/**
 * Highlight component that emphasizes specific parts of a text.
 */
export declare const Highlight: React.ForwardRefExoticComponent<HighlightProps & React.RefAttributes<HTMLElement>>;
