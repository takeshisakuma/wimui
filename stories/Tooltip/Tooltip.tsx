import React, { useState, useRef, useEffect, ReactNode } from "react";
import classNames from "classnames";
import "./tooltip.scss";

// Context to share state between components
const TooltipContext = React.createContext<{
    isOpen: boolean;
    open: () => void;
    close: () => void;
}>({
    isOpen: false,
    open: () => { },
    close: () => { },
});

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

export const Tooltip = ({
    children,
    className = "",
    delay = 200,
    isOpen: controlledOpen,
    onOpenChange,
}: TooltipProps) => {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
    const isControlled = controlledOpen !== undefined;
    const isOpen = isControlled ? controlledOpen : uncontrolledOpen;
    const timerRef = useRef<number | null>(null);

    const open = () => {
        if (timerRef.current) {
            window.clearTimeout(timerRef.current);
            timerRef.current = null;
        }

        timerRef.current = window.setTimeout(() => {
            if (!isControlled) setUncontrolledOpen(true);
            onOpenChange?.(true);
        }, delay);
    };

    const close = () => {
        if (timerRef.current) {
            window.clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        if (!isControlled) setUncontrolledOpen(false);
        onOpenChange?.(false);
    };

    useEffect(() => {
        return () => {
            if (timerRef.current) {
                window.clearTimeout(timerRef.current);
            }
        };
    }, []);

    return (
        <TooltipContext.Provider value={{ isOpen, open, close }}>
            <div className={classNames("wim-tooltip", className)}>
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

export const TooltipTrigger = ({ children, className = "", asChild }: TooltipTriggerProps) => {
    const { open, close } = React.useContext(TooltipContext);

    // Helper to merge handlers
    const handleMouseEnter = (e: React.MouseEvent) => {
        open();
    };

    const handleMouseLeave = (e: React.MouseEvent) => {
        close();
    };

    const handleFocus = (e: React.FocusEvent) => {
        open();
    };

    const handleBlur = (e: React.FocusEvent) => {
        close();
    };

    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children as React.ReactElement<any>, {
            onMouseEnter: (e: React.MouseEvent) => {
                const child = children as React.ReactElement<{ onMouseEnter?: React.MouseEventHandler }>;
                child.props.onMouseEnter?.(e);
                handleMouseEnter(e);
            },
            onMouseLeave: (e: React.MouseEvent) => {
                const child = children as React.ReactElement<{ onMouseLeave?: React.MouseEventHandler }>;
                child.props.onMouseLeave?.(e);
                handleMouseLeave(e);
            },
            onFocus: (e: React.FocusEvent) => {
                const child = children as React.ReactElement<{ onFocus?: React.FocusEventHandler }>;
                child.props.onFocus?.(e);
                handleFocus(e);
            },
            onBlur: (e: React.FocusEvent) => {
                const child = children as React.ReactElement<{ onBlur?: React.FocusEventHandler }>;
                child.props.onBlur?.(e);
                handleBlur(e);
            },
            className: classNames(className, (children as React.ReactElement<any>).props.className),
        });
    }

    return (
        <button
            className={classNames("wim-tooltip-trigger", className)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleFocus}
            onBlur={handleBlur}
            type="button"
        >
            {children}
        </button>
    );
};

export type TooltipContentProps = {
    children: ReactNode;
    className?: string;
    align?: "left" | "right" | "center";
    side?: "top" | "bottom" | "left" | "right";
};

export const TooltipContent = ({
    children,
    className = "",
    align = "center",
    side = "top",
    ...props
}: TooltipContentProps & React.HTMLAttributes<HTMLDivElement>) => {
    const { isOpen } = React.useContext(TooltipContext);

    if (!isOpen) return null;

    return (
        <div
            className={classNames(
                "wim-tooltip-content",
                `wim-tooltip-content--align-${align}`,
                `wim-tooltip-content--${side}`,
                className
            )}
            role="tooltip"
            {...props}
        >
            {children}
            <div className="wim-tooltip-arrow" />
        </div>
    );
};
