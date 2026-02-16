import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";
import classNames from "classnames";
import { Portal } from "../Portal/Portal";
import { Transition } from "../Transition/Transition";
import { FocusTrap } from "../FocusTrap/FocusTrap";
import "./bottomSheet.scss";

// --- BottomSheet Context ---
type BottomSheetContextType = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

const BottomSheetContext = createContext<BottomSheetContextType | undefined>(undefined);

const useBottomSheet = () => {
    const context = useContext(BottomSheetContext);
    if (!context) {
        throw new Error("useBottomSheet must be used within a BottomSheet provider");
    }
    return context;
};

// --- BottomSheet Root ---
export interface BottomSheetProps {
    children: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export const BottomSheet = ({
    children,
    open: controlledOpen,
    defaultOpen = false,
    onOpenChange,
}: BottomSheetProps) => {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
    const isControlled = controlledOpen !== undefined;
    const open = isControlled ? controlledOpen : uncontrolledOpen;

    const handleOpenChange = useCallback((newOpen: boolean) => {
        if (!isControlled) {
            setUncontrolledOpen(newOpen);
        }
        onOpenChange?.(newOpen);
    }, [isControlled, onOpenChange]);

    return (
        <BottomSheetContext.Provider value={{ open, onOpenChange: handleOpenChange }}>
            {children}
        </BottomSheetContext.Provider>
    );
};

// --- BottomSheet Trigger ---
export interface BottomSheetTriggerProps {
    children: React.ReactNode;
    asChild?: boolean;
    className?: string;
}

export const BottomSheetTrigger = ({ children, asChild, className }: BottomSheetTriggerProps) => {
    const { onOpenChange } = useBottomSheet();

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
        <button className={classNames("wim-bottom-sheet-trigger", className)} onClick={handleClick}>
            {children}
        </button>
    );
};

// --- BottomSheet Close ---
export interface BottomSheetCloseProps {
    children: React.ReactNode;
    asChild?: boolean;
    className?: string;
}

export const BottomSheetClose = ({ children, className, asChild }: BottomSheetCloseProps) => {
    const { onOpenChange } = useBottomSheet();

    const handleClick = () => {
        onOpenChange(false);
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
        <button type="button" className={classNames("wim-bottom-sheet-close-button", className)} onClick={handleClick}>
            {children}
        </button>
    );
};

// --- BottomSheet Content ---
export interface BottomSheetContentProps {
    children: React.ReactNode;
    className?: string;
}

export const BottomSheetContent = ({ children, className }: BottomSheetContentProps) => {
    const { open, onOpenChange } = useBottomSheet();
    const contentRef = useRef<HTMLDivElement>(null);

    // Close on Escape
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && open) {
                e.preventDefault();
                e.stopPropagation();
                onOpenChange(false);
            }
        };

        if (open) {
            document.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [open, onOpenChange]);

    // Lock body scroll
    useEffect(() => {
        if (open) {
            const originalStyle = window.getComputedStyle(document.body).overflow;
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = originalStyle;
            };
        }
    }, [open]);

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
                    className="wim-bottom-sheet-overlay"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            onOpenChange(false);
                        }
                    }}
                >
                    <Transition
                        show={open}
                        enter="slide-bottom-enter"
                        enterFrom="slide-bottom-enter-from"
                        enterTo="slide-bottom-enter-to"
                        leave="slide-bottom-leave"
                        leaveFrom="slide-bottom-leave-from"
                        leaveTo="slide-bottom-leave-to"
                    >
                        <FocusTrap active={open} autoFocus={true} className="wim-bottom-sheet-focus-trap-wrapper">
                            <div
                                ref={contentRef}
                                role="dialog"
                                aria-modal="true"
                                className={classNames("wim-bottom-sheet-content", className)}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="wim-bottom-sheet-handle" />
                                {children}
                            </div>
                        </FocusTrap>
                    </Transition>
                </div>
            </Transition>
        </Portal>
    );
};

// --- BottomSheet Sections ---
export const BottomSheetHeader = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={classNames("wim-bottom-sheet-header", className)}>
        {children}
    </div>
);

export const BottomSheetFooter = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={classNames("wim-bottom-sheet-footer", className)}>
        {children}
    </div>
);

export const BottomSheetTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <h2 className={classNames("wim-bottom-sheet-title", className)}>
        {children}
    </h2>
);

export const BottomSheetDescription = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <p className={classNames("wim-bottom-sheet-description", className)}>
        {children}
    </p>
);

export const BottomSheetBody = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={classNames("wim-bottom-sheet-body", className)}>
        {children}
    </div>
);
