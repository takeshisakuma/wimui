import { default as React, ReactNode } from '../../../node_modules/react';
export type PopoverProps = {
    children: ReactNode;
    className?: string;
    /**
     * If true, the popover component will manage its own open state.
     */
    defaultOpen?: boolean;
    /**
     * If provided, controls the open state.
     */
    isOpen?: boolean;
    /**
     * Callback when open state changes.
     */
    onOpenChange?: (open: boolean) => void;
};
export declare const Popover: ({ children, className, defaultOpen, isOpen: controlledOpen, onOpenChange, }: PopoverProps) => import("react/jsx-runtime").JSX.Element;
export type PopoverTriggerProps = {
    children: ReactNode;
    className?: string;
    asChild?: boolean;
};
export declare const PopoverTrigger: ({ children, className, asChild }: PopoverTriggerProps) => import("react/jsx-runtime").JSX.Element;
export type PopoverContentProps = {
    children: ReactNode;
    className?: string;
    align?: "left" | "right" | "center";
    side?: "top" | "bottom";
};
export declare const PopoverContent: ({ children, className, align, side, ...props }: PopoverContentProps & React.HTMLAttributes<HTMLDivElement>) => import("react/jsx-runtime").JSX.Element;
export declare const PopoverClose: ({ children, className, asChild, ...props }: React.ComponentPropsWithoutRef<"button"> & {
    asChild?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
