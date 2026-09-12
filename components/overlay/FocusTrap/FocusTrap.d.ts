import { default as React } from '../../../../node_modules/react';
export type FocusTrapProps = {
    /**
     * Content to trap focus within.
     */
    children: React.ReactNode;
    /**
     * Whether the trap is active.
     * @default true
     */
    active?: boolean;
    /**
     * Whether to focus the first focusable element on mount.
     */
    initialFocus?: boolean;
    /**
     * Additional CSS class name.
     */
    className?: string;
};
/**
 * Utility component that keeps focus inside a region.
 * Used by dialogs, modals, and similar overlays.
 */
export declare const FocusTrap: ({ children, active, initialFocus, className, }: FocusTrapProps) => React.JSX.Element;
