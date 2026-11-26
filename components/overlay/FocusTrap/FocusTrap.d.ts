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
     * Whether to move focus into the trap when it becomes active. Focus goes to
     * the element marked with `data-autofocus` (e.g. the cancel button of a
     * destructive confirmation), or to the first focusable element when nothing
     * is marked.
     * @default true
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
