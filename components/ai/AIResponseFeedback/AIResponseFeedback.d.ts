import { default as React } from '../../../../node_modules/react';
export type AIFeedbackValue = "positive" | "negative";
export interface AIResponseFeedbackProps extends React.ComponentPropsWithoutRef<"div"> {
    /** Currently selected feedback value (controlled) */
    feedback?: AIFeedbackValue | null;
    /** Default feedback value (uncontrolled) */
    defaultFeedback?: AIFeedbackValue | null;
    /** Called when user clicks a feedback button. Passes null when deselected. */
    onFeedback?: (value: AIFeedbackValue | null) => void;
    /** Whether to show the regenerate button */
    showRegenerate?: boolean;
    /** Called when the regenerate button is clicked */
    onRegenerate?: () => void;
    /** Whether all buttons are disabled */
    disabled?: boolean;
}
/**
 * AIResponseFeedback renders thumbs-up/down and optional regenerate controls
 * for rating an AI-generated response.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export declare const AIResponseFeedback: React.ForwardRefExoticComponent<AIResponseFeedbackProps & React.RefAttributes<HTMLDivElement>>;
