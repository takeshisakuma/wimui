import React, { useState, useRef, useEffect, ReactNode } from "react";
import classNames from "classnames";
import { Icon } from "../Icon/Icon";
import "./popover.scss";

// Context to share state between components
const PopoverContext = React.createContext<{
    isOpen: boolean;
    toggle: () => void;
    close: () => void;
    open: () => void;
}>({
    isOpen: false,
    toggle: () => { },
    close: () => { },
    open: () => { },
});

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

export const Popover = ({
    children,
    className,
    defaultOpen = false,
    isOpen: controlledOpen,
    onOpenChange,
}: PopoverProps) => {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
    const isControlled = controlledOpen !== undefined;
    const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

    const containerRef = useRef<HTMLDivElement>(null);

    const toggle = () => {
        const newState = !isOpen;
        if (!isControlled) setUncontrolledOpen(newState);
        onOpenChange?.(newState);
    };

    const close = () => {
        if (!isControlled) setUncontrolledOpen(false);
        onOpenChange?.(false);
    };

    const openFn = () => {
        if (!isControlled) setUncontrolledOpen(true);
        onOpenChange?.(true);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                close();
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                close();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    return (
        <PopoverContext.Provider value={{ isOpen, toggle, close, open: openFn }}>
            <div className={classNames("wim-popover", className)} ref={containerRef}>
                {children}
            </div>
        </PopoverContext.Provider>
    );
};

export type PopoverTriggerProps = {
    children: ReactNode;
    className?: string;
    asChild?: boolean;
};

export const PopoverTrigger = ({ children, className, asChild }: PopoverTriggerProps) => {
    const { toggle, isOpen } = React.useContext(PopoverContext);

    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children as React.ReactElement<any>, {
            onClick: (e: React.MouseEvent) => {
                const child = children as React.ReactElement<{ onClick?: React.MouseEventHandler }>;
                child.props.onClick?.(e);
                toggle();
            },
            className: classNames(className, (children as React.ReactElement<any>).props.className),
            "aria-haspopup": "true",
            "aria-expanded": isOpen,
        });
    }

    return (
        <button
            className={classNames("wim-popover-trigger", className)}
            onClick={toggle}
            aria-haspopup="true"
            aria-expanded={isOpen}
            type="button"
        >
            {children}
        </button>
    );
};

export type PopoverContentProps = {
    children: ReactNode;
    className?: string;
    align?: "left" | "right" | "center";
    side?: "top" | "bottom";
};

export const PopoverContent = ({
    children,
    className,
    align = "left",
    side = "bottom",
    ...props
}: PopoverContentProps & React.HTMLAttributes<HTMLDivElement>) => {
    const { isOpen } = React.useContext(PopoverContext);

    if (!isOpen) return null;

    return (
        <div
            className={classNames(
                "wim-popover-content",
                `wim-popover-content--align-${align}`,
                `wim-popover-content--${side}`,
                className
            )}
            role="dialog"
            {...props}
        >
            {children}
        </div>
    );
};

export const PopoverClose = ({
    children,
    className,
    asChild,
    ...props
}: React.ComponentPropsWithoutRef<"button"> & {
    asChild?: boolean;
}) => {
    const { close } = React.useContext(PopoverContext);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        close();
        props.onClick?.(e);
    };

    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children as React.ReactElement<any>, {
            onClick: (e: React.MouseEvent) => {
                const child = children as React.ReactElement<{ onClick?: React.MouseEventHandler }>;
                child.props.onClick?.(e);
                handleClick(e as any);
            },
            className: classNames(className, (children as React.ReactElement<any>).props.className),
        });
    }

    return (
        <button
            type="button"
            className={classNames("wim-popover-close", className)}
            onClick={handleClick}
            aria-label="Close"
            {...props}
        >
            {children || <Icon name="CloseSmallIcon" width={15} height={15} />}
        </button>
    );
};
