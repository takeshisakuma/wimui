import { default as React, ReactNode } from '../../../../node_modules/react';
import { Placement } from '@floating-ui/react';
export type TooltipProps = {
    /**
     * Tooltip parts (TooltipTrigger and TooltipContent).
     */
    children: ReactNode;
    /**
     * Additional CSS class name for the container.
     */
    className?: string;
    /**
     * Delay before showing the tooltip in ms.
     */
    delay?: number;
    /**
     * If provided, controls the open state.
     */
    open?: boolean;
    /**
     * Callback when open state changes.
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * Preferred placement of the tooltip.
     */
    placement?: Placement;
    /**
     * The variant of the tooltip content.
     */
    variant?: "default" | "glass";
};
export declare const Tooltip: ({ children, className, delay, open: controlledOpen, onOpenChange, placement, variant, }: TooltipProps) => React.JSX.Element;
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
