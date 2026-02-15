import React, { useState, useRef, useEffect, ReactNode, useId } from "react";
import classNames from "classnames";
import "./dropdown.scss";

// Context to share state between components
const DropdownContext = React.createContext<{
    isOpen: boolean;
    toggle: () => void;
    close: () => void;
    menuId: string;
    triggerId: string;
}>({
    isOpen: false,
    toggle: () => { },
    close: () => { },
    menuId: "",
    triggerId: "",
});

export type DropdownProps = {
    children: ReactNode;
    className?: string;
};

export const Dropdown = ({ children, className }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const generatedId = useId();
    const menuId = `wim-dropdown-menu-${generatedId}`;
    const triggerId = `wim-dropdown-trigger-${generatedId}`;

    const toggle = () => setIsOpen(!isOpen);
    const close = () => setIsOpen(false);

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
        <DropdownContext.Provider value={{ isOpen, toggle, close, menuId, triggerId }}>
            <div className={classNames("wim-dropdown", className)} ref={containerRef}>
                {children}
            </div>
        </DropdownContext.Provider>
    );
};

export type DropdownTriggerProps = {
    children: ReactNode;
    className?: string;
};

export const DropdownTrigger = ({ children, className }: DropdownTriggerProps) => {
    const { toggle, isOpen, menuId, triggerId } = React.useContext(DropdownContext);

    return (
        <div
            id={triggerId}
            className={classNames("wim-dropdown-trigger", className)}
            onClick={toggle}
            aria-haspopup="menu"
            aria-expanded={isOpen}
            aria-controls={isOpen ? menuId : undefined}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle();
                }
            }}
        >
            {children}
        </div>
    );
};

export type DropdownMenuProps = {
    children: ReactNode;
    className?: string;
    align?: "left" | "right";
};

export const DropdownMenu = ({
    children,
    className,
    align = "left",
}: DropdownMenuProps) => {
    const { isOpen, menuId, triggerId } = React.useContext(DropdownContext);

    if (!isOpen) return null;

    return (
        <div
            id={menuId}
            className={classNames(
                "wim-dropdown-menu",
                `wim-dropdown-menu--align-${align}`,
                className
            )}
            role="menu"
            aria-labelledby={triggerId}
        >
            {children}
        </div>
    );
};

export type DropdownItemProps = {
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
};

export const DropdownItem = ({
    children,
    onClick,
    disabled = false,
    className,
}: DropdownItemProps) => {
    const { close } = React.useContext(DropdownContext);

    const handleClick = (e: React.MouseEvent) => {
        if (disabled) return;

        if (onClick) {
            onClick();
        }
        close();
    };

    return (
        <div
            className={classNames(
                "wim-dropdown-item",
                disabled && "wim-dropdown-item--disabled",
                className
            )}
            onClick={handleClick}
            role="menuitem"
            tabIndex={disabled ? -1 : 0}
            aria-disabled={disabled}
            onKeyDown={(e) => {
                if (!disabled && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    handleClick(e as any);
                }
            }}
        >
            {children}
        </div>
    );
};

