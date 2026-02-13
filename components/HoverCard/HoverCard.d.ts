import { default as React, ReactNode } from '../../../node_modules/react';
export type HoverCardProps = {
    children: ReactNode;
    className?: string;
    /**
     * Delay before showing the hover card in ms.
     */
    openDelay?: number;
    /**
     * Delay before hiding the hover card in ms.
     */
    closeDelay?: number;
    /**
     * If provided, controls the open state.
     */
    isOpen?: boolean;
    /**
     * Callback when open state changes.
     */
    onOpenChange?: (open: boolean) => void;
};
export declare const HoverCard: ({ children, className, openDelay, closeDelay, isOpen: controlledOpen, onOpenChange, }: HoverCardProps) => import("react/jsx-runtime").JSX.Element;
export type HoverCardTriggerProps = {
    children: ReactNode;
    className?: string;
    asChild?: boolean;
};
export declare const HoverCardTrigger: ({ children, className, asChild }: HoverCardTriggerProps) => import("react/jsx-runtime").JSX.Element;
export type HoverCardContentProps = {
    children: ReactNode;
    className?: string;
    align?: "left" | "right" | "center";
    side?: "top" | "bottom" | "left" | "right";
    sideOffset?: number;
};
export declare const HoverCardContent: ({ children, className, align, side, sideOffset, ...props }: HoverCardContentProps & React.HTMLAttributes<HTMLDivElement>) => import("react/jsx-runtime").JSX.Element | null;
