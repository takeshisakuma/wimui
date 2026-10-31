import { default as React } from '../../../node_modules/react';
import { ComponentSize } from '../../types/tokens';
/**
 * Props for the FeedbackCloseButton component.
 */
export interface FeedbackCloseButtonProps {
    /**
     * Callback fired when the close button is clicked.
     * If not provided, the button will not be rendered (returns null).
     */
    onClose?: (id?: string) => void;
    /**
     * Optional identifier for the target being closed (e.g., Toast ID).
     */
    id?: string;
    /**
     * Additional CSS class name.
     */
    className?: string;
    /**
     * ARIA label for accessibility. Defaults to translated "Close" label.
     */
    ariaLabel?: string;
    /**
     * Size of the close icon.
     * @default "sm"
     */
    size?: ComponentSize;
}
/**
 * FeedbackCloseButton is an internal component providing a standardized close button
 * for feedback components like Toast, Notification, and Alert.
 *
 * Composition Contract:
 * - Automatically handles click propagation stoppage.
 * - Integrates with i18next for localized accessibility labels.
 * - Returns null if onClose is not provided.
 */
export declare const FeedbackCloseButton: ({ onClose, id, className, ariaLabel, size, }: FeedbackCloseButtonProps) => React.JSX.Element | null;
