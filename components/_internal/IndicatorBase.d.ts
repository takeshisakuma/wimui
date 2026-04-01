import { default as React } from '../../../node_modules/react';
import { ComponentSize, WimIntent } from '../../types/tokens';
export type IndicatorBaseProps<C extends React.ElementType = "span"> = {
    children?: React.ReactNode;
    icon?: React.ReactNode;
    intent?: WimIntent;
    variant?: "solid" | "outline" | "subtle";
    size?: ComponentSize;
    prefixClass: string;
    as?: C;
    className?: string;
} & React.ComponentPropsWithoutRef<C>;
export declare const IndicatorBase: <C extends React.ElementType = "span">({ children, icon, intent, variant, size, prefixClass, as, className, ...props }: IndicatorBaseProps<C>) => import("react/jsx-runtime").JSX.Element;
