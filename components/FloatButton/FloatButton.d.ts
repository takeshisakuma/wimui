import { default as React } from '../../../node_modules/react';
export interface FloatButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Icon name from the library */
    iconName?: "CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon" | "ArrowUpIcon" | string;
    /** Variant of the button */
    variant?: "default" | "primary";
    /** Shape of the button */
    shape?: "circle" | "square";
    /** Size of the button */
    size?: "small" | "medium" | "large";
    /** Label text for extended FAB */
    label?: string;
    /** Whether to shrink the extended FAB (hide label) */
    shrink?: boolean;
    /** Position of the button */
    position?: "bottom-right" | "bottom-left" | "bottom-center" | "top-right" | "top-left" | "static";
    /** Description for tooltip */
    description?: string;
    /** Badge content (number or dot) */
    badge?: number | boolean;
    /** If true, the button will scroll to the top of the page when clicked */
    backTop?: boolean;
    /** Visibility threshold for backTop (in pixels) */
    visibilityHeight?: number;
    /** Additional class names */
    className?: string;
    /** Style attribute */
    style?: React.CSSProperties;
    /** Aria label for accessibility */
    "aria-label"?: string;
}
export declare const FloatButton: ({ iconName, variant, shape, size, label, shrink, position, description, badge, backTop, visibilityHeight, className, style, onClick, "aria-label": ariaLabel, ...props }: FloatButtonProps) => import("react/jsx-runtime").JSX.Element | null;
export default FloatButton;
