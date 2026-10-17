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
/** 見出しの段。`Dashboard` の `titleLevel` と同じ語彙に揃えてある（T333）。 */
export type ThoughtProcessTitleLevel = 2 | 3 | 4 | 5 | 6;
export interface ThoughtProcessProps {
    /** Reasoning steps to display (typically ThoughtStep elements) */
    children: React.ReactNode;
    /** Header title */
    title?: string;
    /**
     * Heading level of the title when `isCollapsible` is false. Match it to the
     * page: under an `h1` use `2`, under an `h3` use `4`. Has no effect when
     * `isCollapsible` is true, where the title is a toggle button, not a heading.
     * @default 3
     */
    titleLevel?: ThoughtProcessTitleLevel;
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
export declare const ThoughtProcess: ({ children, title, titleLevel, className, isCollapsible, defaultExpanded, isThinking, }: ThoughtProcessProps) => React.JSX.Element;
