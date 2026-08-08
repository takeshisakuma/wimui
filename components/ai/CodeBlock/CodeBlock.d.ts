import { default as React } from '../../../../node_modules/react';
export interface CodeBlockProps extends React.ComponentPropsWithoutRef<"div"> {
    /** The code string to display */
    code: string;
    /** Programming language label shown in the header (e.g. "tsx", "bash") */
    language?: string;
    /** Optional filename shown in the header instead of the language label */
    filename?: string;
    /** Whether to show the copy-to-clipboard button (default: true) */
    showCopy?: boolean;
    /** Whether to show line numbers (default: false) */
    showLineNumbers?: boolean;
    /**
     * Maximum visible height before the block becomes scrollable.
     * Pass a CSS value (e.g. "300px") or a number of lines (e.g. 20).
     * When set, an expand/collapse toggle is shown.
     */
    maxLines?: number;
    /** Additional CSS class */
    className?: string;
}
/**
 * CodeBlock renders a styled code snippet with a language/filename header,
 * optional copy button, line numbers, and overflow collapse.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export declare const CodeBlock: React.ForwardRefExoticComponent<CodeBlockProps & React.RefAttributes<HTMLDivElement>>;
