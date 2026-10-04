import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic } from '../../../types/tokens';
type CopyButtonProps = {
    /** Text copied to the clipboard */
    value: string;
    /** Size of the button */
    size?: ComponentSizeBasic;
    /** Additional class names */
    className?: string;
    /** Accessible label for the button */
    "aria-label"?: string;
    /** Tooltip label before copying */
    copyLabel?: string;
    /** Tooltip label after copying */
    copiedLabel?: string;
    /** Whether to render as a child element. */
    asChild?: boolean;
    /** Trigger content when `asChild` is true */
    children?: React.ReactNode;
};
export declare const CopyButton: ({ value, size, className, "aria-label": ariaLabel, copyLabel, copiedLabel, asChild, children, }: CopyButtonProps) => React.JSX.Element;
export {};
