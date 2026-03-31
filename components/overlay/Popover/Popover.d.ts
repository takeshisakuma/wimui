import { default as React, ReactNode } from '../../../../node_modules/react';
import { Placement } from '@floating-ui/react';
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
    open?: boolean;
    /**
     * Callback when open state changes.
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * Preferred placement of the popover.
     */
    placement?: Placement;
};
export declare const Popover: ({ children, className, defaultOpen, open: controlledOpen, onOpenChange, placement, }: PopoverProps) => import("react/jsx-runtime").JSX.Element;
export type PopoverTriggerProps = {
    children: ReactNode;
    className?: string;
    asChild?: boolean;
};
export declare const PopoverTrigger: React.ForwardRefExoticComponent<Omit<PopoverTriggerProps & React.HTMLProps<HTMLElement>, "ref"> & React.RefAttributes<HTMLElement>>;
export type PopoverContentProps = {
    children: ReactNode;
    className?: string;
    align?: "left" | "right" | "center";
    side?: "top" | "bottom";
    /** Whether the popover is modal. If true, focus will be trapped inside and interaction with outside will be disabled. */
    modal?: boolean;
};
export declare const PopoverContent: React.ForwardRefExoticComponent<PopoverContentProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export declare const PopoverClose: ({ children, className, asChild, ...props }: React.ComponentPropsWithoutRef<"button"> & {
    asChild?: boolean;
}) => import("react/jsx-runtime").JSX.Element | null;
