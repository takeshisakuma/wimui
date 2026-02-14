import { default as React, ReactNode } from '../../../node_modules/react';
import { Placement } from '@floating-ui/react';
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
    /**
     * Preferred placement of the tooltip.
     */
    placement?: Placement;
};
export declare const Tooltip: ({ children, className, delay, isOpen: controlledOpen, onOpenChange, placement, }: TooltipProps) => import("react/jsx-runtime").JSX.Element;
export type TooltipTriggerProps = {
    children: ReactNode;
    className?: string;
    asChild?: boolean;
};
export declare const TooltipTrigger: React.ForwardRefExoticComponent<Omit<TooltipTriggerProps & React.HTMLProps<HTMLElement>, "ref"> & React.RefAttributes<HTMLElement>>;
export type TooltipContentProps = {
    children: ReactNode;
    className?: string;
};
export declare const TooltipContent: React.ForwardRefExoticComponent<Omit<TooltipContentProps & React.HTMLProps<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
