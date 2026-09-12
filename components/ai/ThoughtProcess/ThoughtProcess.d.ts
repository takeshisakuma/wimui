import { default as React } from '../../../../node_modules/react';
export interface ThoughtStepProps {
    /** Content of this reasoning step */
    children: React.ReactNode;
    /** Current state of the step */
    status?: "pending" | "completed" | "error";
    /** Optional label shown above the content */
    label?: string;
    /** Hides the connector line below this step — use on the last step */
    isLast?: boolean;
    /** Whether the text is currently streaming (shows a typing cursor) */
    isStreaming?: boolean;
}
export declare const ThoughtStep: ({ children, status, label, isLast, isStreaming, }: ThoughtStepProps) => React.JSX.Element;
export interface ThoughtProcessProps {
    /** Reasoning steps to display (typically ThoughtStep elements) */
    children: React.ReactNode;
    /** Header title */
    title?: string;
    /** Additional CSS class */
    className?: string;
    /** Whether the body can be collapsed */
    isCollapsible?: boolean;
    /** Initial expanded state (only relevant when isCollapsible is true) */
    defaultExpanded?: boolean;
    /** Whether the AI is currently thinking (shows a pulsating background) */
    isThinking?: boolean;
}
/**
 * ThoughtProcess visualizes AI reasoning steps using the Timeline design language.
 * Supports collapsible panels with accessible aria-expanded/aria-controls.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export declare const ThoughtProcess: ({ children, title, className, isCollapsible, defaultExpanded, isThinking, }: ThoughtProcessProps) => React.JSX.Element;
