import { default as React } from '../../../../node_modules/react';
import { ButtonVariant } from '../../../types/tokens';
type ButtonGroupProps = {
    /** Buttons to group */
    children: React.ReactNode;
    /** Gap between buttons (ignored when joined) */
    gap?: string;
    /** Additional class names */
    className?: string;
    /** Whether to join the buttons into a single connected unit */
    joined?: boolean;
    /** Variant applied to all child buttons */
    variant?: ButtonVariant;
    /** Whether to render as a child element. */
    asChild?: boolean;
};
export declare const ButtonGroup: ({ children, gap, className, joined, variant, asChild, }: ButtonGroupProps) => React.JSX.Element;
export {};
