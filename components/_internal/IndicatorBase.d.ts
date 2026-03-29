import { default as React } from '../../../node_modules/react';
import { ComponentSize } from '../../types/tokens';
export type IndicatorBaseProps<C extends React.ElementType = "span"> = {
    children?: React.ReactNode;
    icon?: React.ReactNode;
    status?: "primary" | "secondary" | "success" | "warning" | "error" | "neutral" | "info";
    variant?: "solid" | "outline" | "subtle";
    size?: ComponentSize;
    prefixClass: string;
    as?: C;
    className?: string;
} & React.ComponentPropsWithoutRef<C>;
export declare const IndicatorBase: <C extends React.ElementType = "span">({ children, icon, status, variant, size, prefixClass, as, className, ...props }: IndicatorBaseProps<C>) => import("react/jsx-runtime").JSX.Element;
