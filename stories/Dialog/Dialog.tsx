import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import { FocusTrap } from "../FocusTrap/FocusTrap";
import "./dialog.scss";

// --- Dialog Context ---
type DialogContextType = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

const DialogContext = createContext<DialogContextType | undefined>(undefined);

const useDialog = () => {
    const context = useContext(DialogContext);
    if (!context) {
        throw new Error("useDialog must be used within a Dialog provider");
    }
    return context;
};

// --- Dialog Root ---
export interface DialogProps {
    children: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export const Dialog = ({
    children,
    open: controlledOpen,
    defaultOpen = false,
    onOpenChange,
}: DialogProps) => {
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
        <DialogContext.Provider value={{ open, onOpenChange: handleOpenChange }}>
            {children}
        </DialogContext.Provider>
    );
};

// --- Dialog Trigger ---
export interface DialogTriggerProps {
    children: React.ReactNode;
    asChild?: boolean;
    className?: string;
}

export const DialogTrigger = ({ children, asChild, className }: DialogTriggerProps) => {
    const { onOpenChange } = useDialog();

    const handleClick = (e: React.MouseEvent) => {
        onOpenChange(true);
    };

    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children as React.ReactElement<any>, {
            onClick: (e: React.MouseEvent) => {
                const child = children as React.ReactElement<{ onClick?: React.MouseEventHandler }>;
                child.props.onClick?.(e);
                handleClick(e);
            },
            className: classNames(className, (children as React.ReactElement<any>).props.className),
        });
    }

    return (
        <button className={classNames("wim-dialog-trigger", className)} onClick={handleClick}>
            {children}
        </button>
    );
};

// --- Dialog Close ---
export interface DialogCloseProps {
    children: React.ReactNode;
    asChild?: boolean;
    className?: string;
}

export const DialogClose = ({ children, className, asChild }: DialogCloseProps) => {
    const { onOpenChange } = useDialog();

    const handleClick = () => {
        onOpenChange(false);
    }

    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children as React.ReactElement<any>, {
            onClick: (e: React.MouseEvent) => {
                const child = children as React.ReactElement<{ onClick?: React.MouseEventHandler }>;
                child.props.onClick?.(e);
                handleClick();
            },
            className: classNames(className, (children as React.ReactElement<any>).props.className),
        });
    }

    return (
        <button type="button" className={classNames("wim-dialog-close-button", className)} onClick={handleClick}>
            {children}
        </button>
    );
};

// --- Dialog Content ---
export interface DialogContentProps {
    children: React.ReactNode;
    className?: string;
    /**
     * Called when the dialog is closed via Escape key or overlay click.
     */
    onCloseAutoFocus?: (e: Event) => void;
    /**
     * If true, the default close button (X icon) will be hidden.
     */
    hideCloseButton?: boolean;
}

export const DialogContent = ({ children, className }: DialogContentProps) => {
    const { open, onOpenChange } = useDialog();
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

    if (!open) return null;

    return createPortal(
        <div className="wim-dialog-overlay" onClick={(e) => {
            if (e.target === e.currentTarget) {
                onOpenChange(false);
            }
        }}>
            <FocusTrap active={open} autoFocus={true} className="wim-dialog-focus-trap-wrapper">
                <div
                    ref={contentRef}
                    role="dialog"
                    aria-modal="true"
                    className={classNames("wim-dialog-content", className)}
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </FocusTrap>
        </div>,
        document.body
    );
};

// --- Dialog Sections ---
export const DialogHeader = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={classNames("wim-dialog-header", className)}>
        {children}
    </div>
);

export const DialogFooter = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={classNames("wim-dialog-footer", className)}>
        {children}
    </div>
);

export const DialogTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <h2 className={classNames("wim-dialog-title", className)}>
        {children}
    </h2>
);

export const DialogDescription = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <p className={classNames("wim-dialog-description", className)}>
        {children}
    </p>
);
