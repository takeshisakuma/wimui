import { default as React, ReactNode } from '../../../node_modules/react';
import { ComponentSize } from '../../types/tokens';
/**
 * Props for the StatusContent component.
 */
export type StatusContentProps = {
    /**
     * Main icon representing the status or state.
     */
    icon?: ReactNode;
    /**
     * Primary title or heading.
     */
    title?: ReactNode;
    /**
     * Supporting description or subtitle text.
     */
    description?: ReactNode;
    /**
     * Action elements (e.g., buttons, links) typically rendered at the bottom.
     */
    actions?: ReactNode;
    /**
     * Additional content children.
     */
    children?: ReactNode;
    /**
     * Additional CSS class name for the root element.
     */
    className?: string;
    /**
     * Size variation of the content and icons.
     * @default "md"
     */
    size?: ComponentSize;
    /**
     * Custom class name prefix for the root element.
     */
    prefixCls?: string;
};
/**
 * StatusContent is an internal component that unifies the layout and presentation
 * for status-driven components like `Result`, `EmptyState`, and `ErrorBoundary`.
 *
 * Composition Contract:
 * - Provides standardized layout slots for `icon`, `title`, `description`, and `actions`.
 * - Ensures consistent spacing and typography across different status displays.
 * - Supports responsive sizing via the `size` prop.
 */
export declare const StatusContent: ({ icon, title, description, actions, children, className, size, prefixCls, }: StatusContentProps) => React.JSX.Element;
