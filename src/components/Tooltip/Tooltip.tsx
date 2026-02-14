import React, { useState, ReactNode, useRef } from "react";
import {
    useFloating,
    autoUpdate,
    offset,
    flip,
    shift,
    useHover,
    useFocus,
    useDismiss,
    useRole,
    useInteractions,
    FloatingPortal,
    FloatingArrow,
    arrow,
    Placement,
    safePolygon,
    useMergeRefs,
} from "@floating-ui/react";
import classNames from "classnames";
import "./tooltip.scss";

// Context to share state between components
const TooltipContext = React.createContext<{
    open: boolean;
    setOpen: (open: boolean) => void;
    refs: any;
    floatingStyles: React.CSSProperties;
    context: any;
    getReferenceProps: (userProps?: React.HTMLProps<Element>) => Record<string, unknown>;
    getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
    arrowRef: React.RefObject<SVGSVGElement | null>;
    placement: string;
} | null>(null);

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

export const Tooltip = ({
    children,
    className,
    delay = 200,
    isOpen: controlledOpen,
    onOpenChange,
    placement = "top",
}: TooltipProps) => {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(false);

    const open = controlledOpen ?? uncontrolledOpen;
    const setOpen = (newOpen: boolean) => {
        if (controlledOpen === undefined) {
            setUncontrolledOpen(newOpen);
        }
        onOpenChange?.(newOpen);
    };

    const arrowRef = useRef<SVGSVGElement>(null);

    const { refs, floatingStyles, context, placement: finalPlacement } = useFloating({
        open,
        onOpenChange: setOpen,
        placement,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(8),
            flip({
                fallbackAxisSideDirection: "start",
            }),
            shift(),
            arrow({
                element: arrowRef,
            }),
        ],
    });

    const hover = useHover(context, {
        move: false,
        delay: { open: delay, close: 100 },
        handleClose: safePolygon(),
    });
    const focus = useFocus(context);
    const dismiss = useDismiss(context);
    const role = useRole(context, { role: "tooltip" });

    // Type casting here to satisfy the context type definition, 
    // as useInteractions returns a slightly more complex type map but compatible at runtime
    const { getReferenceProps, getFloatingProps } = useInteractions([
        hover,
        focus,
        dismiss,
        role,
    ]) as {
        getReferenceProps: (userProps?: React.HTMLProps<Element>) => Record<string, unknown>;
        getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
    };

    return (
        <TooltipContext.Provider
            value={{
                open,
                setOpen,
                refs,
                floatingStyles,
                context,
                getReferenceProps,
                getFloatingProps,
                arrowRef,
                placement: finalPlacement,
            }}
        >
            <div className={classNames("wim-tooltip-root", className)}>
                {children}
            </div>
        </TooltipContext.Provider>
    );
};

export type TooltipTriggerProps = {
    children: ReactNode;
    className?: string;
    asChild?: boolean;
};

export const TooltipTrigger = React.forwardRef<
    HTMLElement,
    TooltipTriggerProps & React.HTMLProps<HTMLElement>
>(({ children, className, asChild, ...props }, propRef) => {
    const context = React.useContext(TooltipContext);

    if (context == null) {
        throw new Error("Tooltip components must be wrapped in <Tooltip />");
    }

    const childrenRef = (children as any).ref;
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

    if (asChild && React.isValidElement(children)) {
        const childProps = children.props as any;
        return React.cloneElement(
            children,
            context.getReferenceProps({
                ref,
                ...props,
                ...childProps,
                className: classNames(className, childProps.className),
                "data-state": context.open ? "open" : "closed",
            }) as any // Cast to any to satisfy React.cloneElement requirements
        );
    }

    return (
        <button
            ref={ref}
            type="button"
            className={classNames("wim-tooltip-trigger", className)}
            data-state={context.open ? "open" : "closed"}
            {...context.getReferenceProps(props)}
        >
            {children}
        </button>
    );
});

export type TooltipContentProps = {
    children: ReactNode;
    className?: string;
};

export const TooltipContent = React.forwardRef<
    HTMLDivElement,
    TooltipContentProps & React.HTMLProps<HTMLDivElement>
>(({ children, className, style, ...props }, propRef) => {
    const context = React.useContext(TooltipContext);

    if (context == null) {
        throw new Error("Tooltip components must be wrapped in <Tooltip />");
    }

    const { context: floatingContext, open, refs, floatingStyles, getFloatingProps, arrowRef } = context;
    const ref = useMergeRefs([refs.setFloating, propRef]);

    if (!open) return null;

    return (
        <FloatingPortal>
            <div
                ref={ref}
                style={{ ...floatingStyles, ...style }}
                className={classNames(
                    "wim-tooltip-content",
                    className
                )}
                {...getFloatingProps(props)}
            >
                {children}
                <FloatingArrow
                    ref={arrowRef}
                    context={floatingContext}
                    fill="var(--bg-tooltip, #333)"
                    strokeWidth={0}
                    className="wim-tooltip-arrow"
                />
            </div>
        </FloatingPortal>
    );
});
