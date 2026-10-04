import { default as React, ReactNode } from '../../../node_modules/react';
import { Transition } from '../layout/Transition/Transition';
/**
 * Props for the OverlayBase component.
 * Extends the standard HTML div attributes.
 */
export type OverlayBaseProps = {
    /**
     * Whether the overlay is currently visible.
     */
    open: boolean;
    /**
     * Callback fired when the overlay state changes (e.g., closing via Escape key or backdrop click).
     */
    onOpenChange: (open: boolean) => void;
    /**
     * Content to be rendered inside the overlay.
     * Usually wrapped in a focus trap.
     */
    children: ReactNode;
    /**
     * Custom class name for the root backdrop element.
     */
    overlayClassName?: string;
    /**
     * Custom class name for the content wrapper element.
     */
    contentClassName?: string;
    /**
     * Configuration for the content transition.
     * @see Transition
     */
    transitionProps?: Partial<React.ComponentProps<typeof Transition>>;
    /**
     * Configuration for the backdrop transition.
     * @see Transition
     */
    overlayTransitionProps?: Partial<React.ComponentProps<typeof Transition>>;
    /**
     * ARIA role for the content wrapper.
     * @default "dialog"
     */
    role?: string;
    /**
     * Whether the overlay should be treated as a modal for assistive technologies.
     * @default true
     */
    ariaModal?: boolean;
    /**
     * Whether to trigger onOpenChange(false) when clicking the backdrop.
     * @default true
     */
    closeOnOverlayClick?: boolean;
    /**
     * Whether to trigger onOpenChange(false) when pressing the Escape key.
     * @default true
     */
    closeOnEscape?: boolean;
} & React.ComponentPropsWithoutRef<"div">;
/**
 * OverlayBase is a foundational internal component used to build high-level overlays
 * like Dialog, Drawer, and Modal.
 *
 * Composition Contract:
 * - Renders children within a `Portal` to ensure they are at the top level of the DOM.
 * - Manages focus trapping via `FocusTrap`.
 * - Manages body scroll locking when `open` is true.
 * - Provides two layers of transitions: one for the background overlay and one for the content.
 *
 * This component is not intended for direct use in applications.
 */
export declare const OverlayBase: ({ open, onOpenChange, children, overlayClassName, contentClassName, transitionProps, overlayTransitionProps, role, ariaModal, closeOnOverlayClick, closeOnEscape, ...rest }: OverlayBaseProps) => React.JSX.Element;
