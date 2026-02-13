import { default as React } from '../../../node_modules/react';
export interface DialogProps {
    children: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
}
export declare const Dialog: ({ children, open: controlledOpen, defaultOpen, onOpenChange, }: DialogProps) => import("react/jsx-runtime").JSX.Element;
export interface DialogTriggerProps {
    children: React.ReactNode;
    asChild?: boolean;
    className?: string;
}
export declare const DialogTrigger: ({ children, asChild, className }: DialogTriggerProps) => import("react/jsx-runtime").JSX.Element;
export interface DialogCloseProps {
    children: React.ReactNode;
    asChild?: boolean;
    className?: string;
}
export declare const DialogClose: ({ children, className, asChild }: DialogCloseProps) => import("react/jsx-runtime").JSX.Element;
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
export declare const DialogContent: ({ children, className }: DialogContentProps) => React.ReactPortal | null;
export declare const DialogHeader: ({ children, className }: {
    children: React.ReactNode;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
export declare const DialogFooter: ({ children, className }: {
    children: React.ReactNode;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
export declare const DialogTitle: ({ children, className }: {
    children: React.ReactNode;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
export declare const DialogDescription: ({ children, className }: {
    children: React.ReactNode;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
