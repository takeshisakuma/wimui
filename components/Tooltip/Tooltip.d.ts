import { default as React, ReactNode } from '../../../node_modules/react';
export type TooltipProps = {
    children: ReactNode;
    className?: string;
    /**
     * Delay before showing the tooltip in ms.
     */
    delay?: number;
    /**
     * If provided, controls the open state.
     */
    isOpen?: boolean;
    /**
     * Callback when open state changes.
     */
    onOpenChange?: (open: boolean) => void;
};
export declare const Tooltip: ({ children, className, delay, isOpen: controlledOpen, onOpenChange, }: TooltipProps) => import("react/jsx-runtime").JSX.Element;
export type TooltipTriggerProps = {
    children: ReactNode;
    className?: string;
    asChild?: boolean;
};
export declare const TooltipTrigger: ({ children, className, asChild }: TooltipTriggerProps) => import("react/jsx-runtime").JSX.Element;
export type TooltipContentProps = {
    children: ReactNode;
    className?: string;
    align?: "left" | "right" | "center";
    side?: "top" | "bottom" | "left" | "right";
};
export declare const TooltipContent: ({ children, className, align, side, ...props }: TooltipContentProps & React.HTMLAttributes<HTMLDivElement>) => import("react/jsx-runtime").JSX.Element | null;
