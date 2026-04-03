import { default as React } from '../../../../node_modules/react';
import { ButtonVariant } from '../../../types/tokens';
type ButtonGroupProps = {
    children: React.ReactNode;
    gap?: string;
    className?: string;
    joined?: boolean;
    variant?: ButtonVariant;
};
export declare const ButtonGroup: ({ children, gap, className, joined, variant, }: ButtonGroupProps) => import("react/jsx-runtime").JSX.Element;
export {};
