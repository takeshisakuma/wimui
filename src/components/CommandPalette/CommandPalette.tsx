import React, { createContext, useContext, useState, useEffect, useCallback, useRef, ReactNode } from "react";
import classNames from "classnames";
import { Portal } from "../Portal/Portal";
import { Transition } from "../Transition/Transition";
import { Icon } from "../Icon/Icon";
import { FocusTrap } from "../FocusTrap/FocusTrap";
import "./commandPalette.scss";

// --- Context ---
type CommandPaletteContextType = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    search: string;
    setSearch: (search: string) => void;
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    itemCount: number;
    registerItem: () => number;
    unregisterItem: () => void;
};

const CommandPaletteContext = createContext<CommandPaletteContextType | undefined>(undefined);

const useCommandPalette = () => {
    const context = useContext(CommandPaletteContext);
    if (!context) {
        throw new Error("CommandPalette sub-components must be used within a CommandPalette");
    }
    return context;
};

// --- CommandPalette Root (Provider) ---
export interface CommandPaletteProps {
    children: ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export const CommandPalette = ({ children, open: controlledOpen, onOpenChange }: CommandPaletteProps) => {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);
    const itemCountRef = useRef(0);

    const isControlled = controlledOpen !== undefined;
    const open = isControlled ? controlledOpen : uncontrolledOpen;

    const handleOpenChange = useCallback((newOpen: boolean) => {
        if (!isControlled) {
            setUncontrolledOpen(newOpen);
        }
        onOpenChange?.(newOpen);
        if (!newOpen) {
            setSearch("");
            setActiveIndex(0);
        }
    }, [isControlled, onOpenChange]);

    const registerItem = useCallback(() => {
        const index = itemCountRef.current;
        itemCountRef.current += 1;
        return index;
    }, []);

    const unregisterItem = useCallback(() => {
        itemCountRef.current -= 1;
    }, []);

    // Reset item count on each render to handle dynamic lists
    /* eslint-disable-next-line react-hooks/refs */
    itemCountRef.current = 0;

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                handleOpenChange(!open);
            }
            if (e.key === "Escape" && open) {
                handleOpenChange(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [open, handleOpenChange]);

    const contextValue = React.useMemo(() => ({
        open,
        onOpenChange: handleOpenChange,
        search,
        setSearch,
        activeIndex,
        setActiveIndex,
        /* eslint-disable-next-line react-hooks/refs */
        itemCount: itemCountRef.current,
        registerItem,
        unregisterItem
    }), [open, handleOpenChange, search, activeIndex, registerItem, unregisterItem]);

    return (
        // eslint-disable-next-line react-hooks/refs
        <CommandPaletteContext.Provider value={contextValue}>
            {children}
        </CommandPaletteContext.Provider>
    );
};

// --- CommandPalette Trigger ---
export interface CommandPaletteTriggerProps {
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export const CommandPaletteTrigger = ({ children, asChild, className }: CommandPaletteTriggerProps) => {
    const { onOpenChange } = useCommandPalette();

    const handleClick = () => {
        onOpenChange(true);
    };

    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children as React.ReactElement<{ onClick?: React.MouseEventHandler; className?: string }>, {
            onClick: (e: React.MouseEvent) => {
                const child = children as React.ReactElement<{ onClick?: React.MouseEventHandler }>;
                child.props.onClick?.(e);
                handleClick();
            },
            className: classNames(className, (children as React.ReactElement<{ className?: string }>).props.className),
        });
    }

    return (
        <button className={classNames("wim-command-palette-trigger", className)} onClick={handleClick}>
            {children}
        </button>
    );
};

// --- CommandPalette Content (Modal) ---
export interface CommandPaletteContentProps {
    children: ReactNode;
    className?: string;
}

export const CommandPaletteContent = ({ children, className }: CommandPaletteContentProps) => {
    const { open, onOpenChange, setActiveIndex, itemCount } = useCommandPalette();

    return (
        <Portal>
            <Transition
                show={open}
                enter="fade-enter"
                enterFrom="fade-enter-from"
                enterTo="fade-enter-to"
                leave="fade-leave"
                leaveFrom="fade-leave-from"
                leaveTo="fade-leave-to"
            >
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
                <div
                    className="wim-command-palette-overlay"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            onOpenChange(false);
                        }
                    }}
                >
                    <Transition
                        show={open}
                        enter="scale-enter"
                        enterFrom="scale-enter-from"
                        enterTo="scale-enter-to"
                        leave="scale-leave"
                        leaveFrom="scale-leave-from"
                        leaveTo="scale-leave-to"
                    >
                        <FocusTrap active={open} autoFocus={true}>
                            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                            <div
                                className={classNames("wim-command-palette-content", className)}
                                onClick={(e) => e.stopPropagation()}
                                onKeyDown={(e) => {
                                    if (e.key === "ArrowDown") {
                                        e.preventDefault();
                                        setActiveIndex((prev) => (prev + 1) % itemCount);
                                    } else if (e.key === "ArrowUp") {
                                        e.preventDefault();
                                        setActiveIndex((prev) => (prev - 1 + itemCount) % itemCount);
                                    }
                                }}
                            >
                                {children}
                            </div>
                        </FocusTrap>
                    </Transition>
                </div>
            </Transition>
        </Portal>
    );
};

// --- Input ---
export interface CommandPaletteInputProps {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const CommandPaletteInput = ({ placeholder = "Search commands...", value, onChange }: CommandPaletteInputProps) => {
    const { search, setSearch, setActiveIndex, activeIndex } = useCommandPalette();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setSearch(val);
        setActiveIndex(0); // Reset selection on search
        onChange?.(val);
    };

    return (
        <div className="wim-command-palette-input-wrapper">
            <Icon name="SearchIcon" size="small" />
            <input
                className="wim-command-palette-input"
                placeholder={placeholder}
                value={value ?? search}
                onChange={handleChange}
                /* eslint-disable-next-line jsx-a11y/no-autofocus */
                autoFocus
                role="combobox"
                aria-autocomplete="list"
                aria-expanded={true}
                aria-controls="wim-command-palette-listbox"
                aria-activedescendant={`wim-command-palette-item-${activeIndex}`}
            />
        </div>
    );
};

// --- List ---
export const CommandPaletteList = ({ children }: { children: ReactNode }) => {
    return (
        <div
            className="wim-command-palette-list"
            role="listbox"
            id="wim-command-palette-listbox"
        >
            {children}
        </div>
    );
};

// --- Group ---
export const CommandPaletteGroup = ({ children, heading }: { children: ReactNode; heading?: string }) => {
    return (
        <div className="wim-command-palette-group">
            {heading && <div className="wim-command-palette-group-heading">{heading}</div>}
            {children}
        </div>
    );
};

// --- Item ---
export interface CommandPaletteItemProps {
    children: ReactNode;
    onSelect?: () => void;
    icon?: ReactNode;
    shortcut?: string[];
    disabled?: boolean;
}

export const CommandPaletteItem = ({ children, onSelect, icon, shortcut, disabled }: CommandPaletteItemProps) => {
    const { activeIndex, setActiveIndex, registerItem, onOpenChange } = useCommandPalette();
    const [index] = useState(() => registerItem());

    const isActive = activeIndex === index;

    useEffect(() => {
        if (isActive && !disabled) {
            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === "Enter") {
                    onSelect?.();
                    onOpenChange(false);
                }
            };
            window.addEventListener("keydown", handleKeyDown);
            return () => window.removeEventListener("keydown", handleKeyDown);
        }
    }, [isActive, disabled, onSelect, onOpenChange]);

    return (
        /* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus */
        <div
            role="option"
            id={`wim-command-palette-item-${index}`}
            aria-selected={isActive}
            className={classNames("wim-command-palette-item", {
                "wim-command-palette-item--active": isActive,
                "wim-command-palette-item--disabled": disabled,
            })}
            onMouseEnter={() => !disabled && setActiveIndex(index)}
            onClick={() => {
                if (!disabled) {
                    onSelect?.();
                    onOpenChange(false);
                }
            }}
        >
            {icon && <div className="wim-command-palette-item-icon">{icon}</div>}
            <div className="wim-command-palette-item-label">{children}</div>
            {shortcut && (
                <div className="wim-command-palette-item-shortcut">
                    {shortcut.map((s) => (
                        <kbd key={s} className="wim-kbd wim-kbd--sm">
                            {s}
                        </kbd>
                    ))}
                </div>
            )}
        </div>
    );
};

// --- Empty ---
export const CommandPaletteEmpty = ({ children = "No results found." }: { children?: ReactNode }) => {
    const { itemCount } = useCommandPalette();
    if (itemCount > 0) return null;
    return <div className="wim-command-palette-empty">{children}</div>;
};

// --- Footer ---
export const CommandPaletteFooter = ({ children }: { children: ReactNode }) => {
    return <div className="wim-command-palette-footer">{children}</div>;
};
