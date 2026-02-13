import React, { useState, useEffect, useLayoutEffect, useRef, ReactNode } from "react";
import classNames from "classnames";
import "./contextMenu.scss";

export type ContextMenuProps = {
    children: ReactNode;
    /** Menu items to display in the context menu */
    menu: ReactNode;
    className?: string;
    /** Disable the context menu */
    disabled?: boolean;
};

export const ContextMenu = ({
    children,
    menu,
    className,
    disabled = false,
}: ContextMenuProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleContextMenu = (e: React.MouseEvent) => {
        if (disabled) return;

        e.preventDefault();
        e.stopPropagation();

        const { clientX, clientY } = e;
        setPosition({ x: clientX, y: clientY });
        setIsVisible(true);
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                handleClose();
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                handleClose();
            }
        };

        const handleScroll = () => {
            handleClose();
        };

        if (isVisible) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleKeyDown);
            document.addEventListener("scroll", handleScroll, true);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("scroll", handleScroll, true);
        };
    }, [isVisible]);

    // Adjust position to keep menu within viewport
    useLayoutEffect(() => {
        if (isVisible && menuRef.current) {
            const menuRect = menuRef.current.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            let { x, y } = position;

            // Adjust horizontal position
            if (x + menuRect.width > viewportWidth) {
                x = viewportWidth - menuRect.width - 10;
            }

            // Adjust vertical position
            if (y + menuRect.height > viewportHeight) {
                y = viewportHeight - menuRect.height - 10;
            }

            // Ensure minimum position
            x = Math.max(10, x);
            y = Math.max(10, y);

            if (x !== position.x || y !== position.y) {
                setPosition({ x, y });
            }
        }
    }, [isVisible, position]);

    return (
        <div
            ref={containerRef}
            className={classNames("wim-context-menu-container", className)}
            onContextMenu={handleContextMenu}
        >
            {children}
            {isVisible && (
                <div
                    ref={menuRef}
                    className="wim-context-menu"
                    style={{
                        left: `${position.x}px`,
                        top: `${position.y}px`,
                    }}
                    role="menu"
                    onClick={handleClose}
                >
                    {menu}
                </div>
            )}
        </div>
    );
};

export type ContextMenuItemProps = {
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    icon?: ReactNode;
    danger?: boolean;
};

export const ContextMenuItem = ({
    children,
    onClick,
    disabled = false,
    className,
    icon,
    danger = false,
}: ContextMenuItemProps) => {
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (disabled) return;

        if (onClick) {
            onClick();
        }
    };

    return (
        <div
            className={classNames(
                "wim-context-menu-item",
                disabled && "wim-context-menu-item--disabled",
                danger && "wim-context-menu-item--danger",
                className
            )}
            onClick={handleClick}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleClick(e as unknown as React.MouseEvent);
                }
            }}
            role="menuitem"
            tabIndex={disabled ? -1 : 0}
            aria-disabled={disabled}
        >
            {icon && <span className="wim-context-menu-item__icon">{icon}</span>}
            <span className="wim-context-menu-item__content">{children}</span>
        </div>
    );
};

export type ContextMenuDividerProps = {
    className?: string;
};

export const ContextMenuDivider = ({ className }: ContextMenuDividerProps) => {
    return <div className={classNames("wim-context-menu-divider", className)} role="separator" />;
};

export type ContextMenuGroupProps = {
    children: ReactNode;
    title?: string;
    className?: string;
};

export const ContextMenuGroup = ({
    children,
    title,
    className,
}: ContextMenuGroupProps) => {
    return (
        <div className={classNames("wim-context-menu-group", className)}>
            {title && <div className="wim-context-menu-group__title">{title}</div>}
            {children}
        </div>
    );
};
