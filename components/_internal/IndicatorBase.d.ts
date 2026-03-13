import { default as React } from '../../../node_modules/react';
export type IndicatorBaseProps = {
    children?: React.ReactNode;
    icon?: React.ReactNode;
    status?: "primary" | "secondary" | "success" | "warning" | "error" | "neutral" | "info";
    variant?: "solid" | "outline" | "subtle";
    size?: "small" | "medium";
    prefixClass: string;
    as?: React.ElementType;
    className?: string;
} & React.ComponentPropsWithoutRef<React.ElementType>;
export declare const IndicatorBase: ({ children, icon, status, variant, size, prefixClass, as: Component, className, ...props }: IndicatorBaseProps) => import("react/jsx-runtime").JSX.Element;
