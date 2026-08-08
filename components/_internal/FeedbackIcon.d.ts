import { default as React } from '../../../node_modules/react';
import { ComponentSize, WimIntent } from '../../types/tokens';
/**
 * Props for the FeedbackIcon component.
 */
export interface FeedbackIconProps {
    /**
     * Semantic intent of the feedback.
     * @default "info"
     */
    intent?: WimIntent;
    /**
     * Custom icon node. If false, no icon will be rendered.
     */
    icon?: React.ReactNode;
    /**
     * Size of the icon.
     * @default "sm"
     */
    size?: ComponentSize;
    /**
     * Additional CSS class name.
     */
    className?: string;
    /**
     * Explicit color for the icon.
     */
    color?: "danger" | "success" | "warning" | "info";
}
/**
 * FeedbackIcon is an internal component that resolves and displays the appropriate
 * icon based on component intent or a custom icon prop.
 *
 * Composition Contract:
 * - Prioritizes the `icon` prop if it is a valid React element.
 * - Returns null if `icon` is explicitly `false`.
 * - Maps `intent` to default system icons (e.g., success -> CheckIcon).
 */
export declare const FeedbackIcon: ({ intent, icon, size, className, color, }: FeedbackIconProps) => React.JSX.Element | null;
