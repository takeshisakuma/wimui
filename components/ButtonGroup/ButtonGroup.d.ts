import { default as React } from '../../../node_modules/react';
type ButtonGroupProps = {
    children: React.ReactNode;
    gap?: string;
    className?: string;
    joined?: boolean;
    priority?: "primary" | "secondary" | "tertiary";
};
export declare const ButtonGroup: ({ children, gap, className, joined, priority, }: ButtonGroupProps) => import("react/jsx-runtime").JSX.Element;
export {};
