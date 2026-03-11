import { ReactNode } from '../../../node_modules/react';
export type StatusContentProps = {
    /**
     * Status-based icon or custom icon
     */
    icon?: ReactNode;
    /**
     * Main title
     */
    title?: ReactNode;
    /**
     * Supporting description or subtitle
     */
    description?: ReactNode;
    /**
     * Action buttons or links
     */
    actions?: ReactNode;
    /**
     * Additional content children
     */
    children?: ReactNode;
    /**
     * Custom class name for wrapping div
     */
    className?: string;
    /**
     * Prefix for BEM classes
     */
    prefixCls?: string;
    /**
     * Size variation
     */
    size?: "default" | "small";
};
/**
 * Internal component to unify layout for Result and EmptyState
 */
export declare const StatusContent: ({ icon, title, description, actions, children, className, prefixCls, size, }: StatusContentProps) => import("react/jsx-runtime").JSX.Element;
