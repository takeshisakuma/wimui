import { default as React } from '../../../../node_modules/react';
import { FeedbackIntent } from '../../../types/tokens';
export type SnackbarPosition = "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
export interface SnackbarProps {
    /** Message displayed in the snackbar */
    message: string;
    /**
     * Whether the snackbar is shown
     * @default false
     */
    open?: boolean;
    /**
     * Intent (semantic state)
     * @default "default"
     */
    intent?: FeedbackIntent;
    /**
     * Position on the screen
     * @default "bottom-center"
     */
    position?: SnackbarPosition;
    /**
     * Time in milliseconds before the snackbar closes automatically. Set 0 to disable auto-close.
     * @default 5000
     */
    autoHideDuration?: number;
    /**
     * Whether to show a close button
     * @default false
     */
    showCloseButton?: boolean;
    /** Label of the action button */
    actionLabel?: string;
    /** Called when the action button is clicked */
    onAction?: () => void;
    /** Called when the snackbar is closed */
    onClose?: () => void;
    /** Additional CSS class name */
    className?: string;
}
/**
 * Snackbar for notifying the user with a short message.
 */
export declare const Snackbar: ({ message, open, intent, position, autoHideDuration, showCloseButton, actionLabel, onAction, onClose, className, }: SnackbarProps) => React.JSX.Element | null;
type SnackbarContextType = {
    showMessage: (props: string | Omit<SnackbarProps, "open" | "onClose">) => void;
    hideMessage: () => void;
};
export declare const SnackbarProvider: ({ children, }: {
    children: React.ReactNode;
}) => React.JSX.Element;
export declare const useSnackbar: () => SnackbarContextType;
export {};
