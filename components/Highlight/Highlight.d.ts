import { default as React } from '../../../node_modules/react';
export type HighlightProps = React.ComponentPropsWithoutRef<"span"> & {
    /** The full text to highlight substrings in. */
    children: string;
    /** Substring(s) to highlight. */
    highlight: string | string[];
    /** Custom class name for the highlighted `<mark>` element. */
    highlightClassName?: string;
    /** Custom styles for the highlighted `<mark>` element. */
    highlightStyles?: React.CSSProperties;
    /** The HTML tag or component to use for the container. Default is "span". */
    component?: React.ElementType;
};
/**
 * Highlight component that emphasizes specific parts of a text.
 */
export declare const Highlight: ({ children, highlight, highlightClassName, highlightStyles, component: Component, className, ...props }: HighlightProps) => import("react/jsx-runtime").JSX.Element;
