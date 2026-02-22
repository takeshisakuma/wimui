import { default as React, ReactNode } from '../../../node_modules/react';
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
    isOpen?: boolean;
    /**
     * Callback when open state changes.
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * Preferred placement of the popover.
     */
    placement?: Placement;
};
export declare const Popover: ({ children, className, defaultOpen, isOpen: controlledOpen, onOpenChange, placement, }: PopoverProps) => import("react/jsx-runtime").JSX.Element;
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
};
export declare const PopoverContent: React.ForwardRefExoticComponent<PopoverContentProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export declare const PopoverClose: ({ children, className, asChild, ...props }: React.ComponentPropsWithoutRef<"button"> & {
    asChild?: boolean;
}) => import("react/jsx-runtime").JSX.Element | null;
