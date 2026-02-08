import React, { useState, useRef, useEffect, ReactNode } from "react";
import classNames from "classnames";
import "./hoverCard.scss";

// Context to share state and handlers between components
const HoverCardContext = React.createContext<{
    isOpen: boolean;
    open: () => void;
    close: () => void;
}>({
    isOpen: false,
    open: () => { },
    close: () => { },
});

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

export const HoverCard = ({
    children,
    className = "",
    openDelay = 700,
    closeDelay = 300,
    isOpen: controlledOpen,
    onOpenChange,
}: HoverCardProps) => {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
    const isControlled = controlledOpen !== undefined;
    const isOpen = isControlled ? controlledOpen : uncontrolledOpen;
    const openTimerRef = useRef<number | null>(null);
    const closeTimerRef = useRef<number | null>(null);

    const open = () => {
        if (closeTimerRef.current) {
            window.clearTimeout(closeTimerRef.current);
            closeTimerRef.current = null;
        }

        if (isOpen) return;

        if (openTimerRef.current) {
            window.clearTimeout(openTimerRef.current);
        }

        openTimerRef.current = window.setTimeout(() => {
            if (!isControlled) setUncontrolledOpen(true);
            onOpenChange?.(true);
            openTimerRef.current = null;
        }, openDelay);
    };

    const close = () => {
        if (openTimerRef.current) {
            window.clearTimeout(openTimerRef.current);
            openTimerRef.current = null;
        }

        if (!isOpen) return;

        if (closeTimerRef.current) {
            window.clearTimeout(closeTimerRef.current);
        }

        closeTimerRef.current = window.setTimeout(() => {
            if (!isControlled) setUncontrolledOpen(false);
            onOpenChange?.(false);
            closeTimerRef.current = null;
        }, closeDelay);
    };

    useEffect(() => {
        return () => {
            if (openTimerRef.current) window.clearTimeout(openTimerRef.current);
            if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
        };
    }, []);

    return (
        <HoverCardContext.Provider value={{ isOpen, open, close }}>
            <div className={classNames("wim-hover-card", className)}>
                {children}
            </div>
        </HoverCardContext.Provider>
    );
};

export type HoverCardTriggerProps = {
    children: ReactNode;
    className?: string;
    asChild?: boolean;
};

export const HoverCardTrigger = ({ children, className = "", asChild }: HoverCardTriggerProps) => {
    const { open, close } = React.useContext(HoverCardContext);

    const handleMouseEnter = () => open();
    const handleMouseLeave = () => close();

    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children as React.ReactElement<any>, {
            onMouseEnter: (e: React.MouseEvent) => {
                const child = children as React.ReactElement<{ onMouseEnter?: React.MouseEventHandler }>;
                child.props.onMouseEnter?.(e);
                handleMouseEnter();
            },
            onMouseLeave: (e: React.MouseEvent) => {
                const child = children as React.ReactElement<{ onMouseLeave?: React.MouseEventHandler }>;
                child.props.onMouseLeave?.(e);
                handleMouseLeave();
            },
            onFocus: (e: React.FocusEvent) => {
                const child = children as React.ReactElement<{ onFocus?: React.FocusEventHandler }>;
                child.props.onFocus?.(e);
                handleMouseEnter();
            },
            onBlur: (e: React.FocusEvent) => {
                const child = children as React.ReactElement<{ onBlur?: React.FocusEventHandler }>;
                child.props.onBlur?.(e);
                handleMouseLeave();
            },
            className: classNames(className, (children as React.ReactElement<any>).props.className),
        });
    }

    return (
        <div
            className={classNames("wim-hover-card-trigger", className)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleMouseEnter}
            onBlur={handleMouseLeave}
            tabIndex={0}
        >
            {children}
        </div>
    );
};

export type HoverCardContentProps = {
    children: ReactNode;
    className?: string;
    align?: "left" | "right" | "center";
    side?: "top" | "bottom" | "left" | "right";
    sideOffset?: number;
};

export const HoverCardContent = ({
    children,
    className = "",
    align = "center",
    side = "bottom",
    sideOffset = 8,
    ...props
}: HoverCardContentProps & React.HTMLAttributes<HTMLDivElement>) => {
    const { isOpen, open, close } = React.useContext(HoverCardContext);

    if (!isOpen) return null;

    return (
        <div
            className={classNames(
                "wim-hover-card-content",
                `wim-hover-card-content--align-${align}`,
                `wim-hover-card-content--${side}`,
                className
            )}
            onMouseEnter={open}
            onMouseLeave={close}
            {...props}
        >
            {children}
        </div>
    );
};
