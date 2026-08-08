import { Placement, ReferenceType } from '@floating-ui/react';
export type FloatingTriggerType = "click" | "hover" | "none";
export interface FloatingElementOptions {
    placement?: Placement;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    trigger?: FloatingTriggerType;
    offset?: number;
    role?: "dialog" | "menu" | "listbox" | "tooltip" | "label";
}
/**
 * useFloatingElement is a shared internal hook for "floating" components like Popover,
 * Dropdown, Menu, and Tooltip.
 *
 * Composition Contract:
 * - Centralizes Floating UI logic for automated position calculation.
 * - Handles standard interaction triggers (click, hover, focus).
 * - Manages accessibility attributes via `useRole`.
 * - Provides dismiss behavior (outside click, escape key).
 *
 * @param options Configuration options for positioning and interaction.
 */
export declare const useFloatingElement: ({ placement, open: controlledOpen, defaultOpen, onOpenChange, trigger, offset: offsetValue, role: roleType, }?: FloatingElementOptions) => {
    isPositioned: boolean;
    getReferenceProps: (userProps?: React.HTMLProps<Element>) => Record<string, unknown>;
    getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
    getItemProps: (userProps?: Omit<React.HTMLProps<HTMLElement>, "selected" | "active"> & {
        active?: boolean | undefined;
        selected?: boolean | undefined;
    }) => Record<string, unknown>;
    placement: Placement;
    strategy: import('@floating-ui/utils').Strategy;
    middlewareData: import('@floating-ui/core').MiddlewareData;
    x: number;
    y: number;
    update: () => void;
    floatingStyles: React.CSSProperties;
    refs: {
        reference: import('../../../node_modules/react').MutableRefObject<import('@floating-ui/react-dom').ReferenceType | null>;
        floating: React.MutableRefObject<HTMLElement | null>;
        setReference: (node: import('@floating-ui/react-dom').ReferenceType | null) => void;
        setFloating: (node: HTMLElement | null) => void;
    } & import('@floating-ui/react').ExtendedRefs<ReferenceType>;
    elements: {
        reference: import('@floating-ui/react-dom').ReferenceType | null;
        floating: HTMLElement | null;
    } & import('@floating-ui/react').ExtendedElements<ReferenceType>;
    context: {
        x: number;
        y: number;
        placement: Placement;
        strategy: import('@floating-ui/utils').Strategy;
        middlewareData: import('@floating-ui/core').MiddlewareData;
        isPositioned: boolean;
        update: () => void;
        floatingStyles: React.CSSProperties;
        open: boolean;
        onOpenChange: (open: boolean, event?: Event, reason?: import('@floating-ui/react').OpenChangeReason) => void;
        events: import('@floating-ui/react').FloatingEvents;
        dataRef: React.MutableRefObject<import('@floating-ui/react').ContextData>;
        nodeId: string | undefined;
        floatingId: string | undefined;
        refs: import('@floating-ui/react').ExtendedRefs<ReferenceType>;
        elements: import('@floating-ui/react').ExtendedElements<ReferenceType>;
    };
    isOpen: boolean;
    setOpen: (newOpen: boolean) => void;
};
