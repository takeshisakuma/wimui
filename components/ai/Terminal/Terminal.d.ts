import { default as React } from '../../../../node_modules/react';
export interface TerminalLine {
    /** Unique key for React rendering */
    id?: string;
    /** Controls prefix and color treatment */
    type?: "input" | "output" | "error" | "info";
    /** Raw text content; may contain ANSI SGR escape codes */
    content: string;
}
export interface TerminalProps extends React.ComponentPropsWithoutRef<"div"> {
    /** Lines to display */
    lines?: TerminalLine[];
    /** Window title shown in header bar */
    title?: string;
    /** Explicit height; omit to let the terminal grow with content */
    height?: string | number;
    /** Scroll to bottom when lines change */
    autoScroll?: boolean;
    /** Prompt prefix for input lines */
    prompt?: string;
    /** Whether to show the copy button */
    showCopy?: boolean;
    /** Whether to show the clear button; fires onClear when clicked */
    onClear?: () => void;
    /** Additional CSS class */
    className?: string;
}
/**
 * Terminal renders command output in a dark monospace window, with optional
 * ANSI color support, auto-scroll, copy, and clear actions.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export declare const Terminal: React.ForwardRefExoticComponent<TerminalProps & React.RefAttributes<HTMLDivElement>>;
