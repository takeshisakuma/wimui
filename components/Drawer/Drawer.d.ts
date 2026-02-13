import { default as React } from '../../../node_modules/react';
type DrawerSide = "top" | "right" | "bottom" | "left";
export interface DrawerProps {
    children: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    side?: DrawerSide;
}
export declare const Drawer: ({ children, open: controlledOpen, defaultOpen, onOpenChange, side, }: DrawerProps) => import("react/jsx-runtime").JSX.Element;
export interface DrawerTriggerProps {
    children: React.ReactNode;
    asChild?: boolean;
    className?: string;
}
export declare const DrawerTrigger: ({ children, asChild, className }: DrawerTriggerProps) => import("react/jsx-runtime").JSX.Element;
export interface DrawerCloseProps {
    children: React.ReactNode;
    asChild?: boolean;
    className?: string;
}
export declare const DrawerClose: ({ children, className, asChild }: DrawerCloseProps) => import("react/jsx-runtime").JSX.Element;
export interface DrawerContentProps {
    children: React.ReactNode;
    className?: string;
}
export declare const DrawerContent: ({ children, className }: DrawerContentProps) => React.ReactPortal | null;
export declare const DrawerHeader: ({ children, className }: {
    children: React.ReactNode;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
export declare const DrawerFooter: ({ children, className }: {
    children: React.ReactNode;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
export declare const DrawerTitle: ({ children, className }: {
    children: React.ReactNode;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
export declare const DrawerDescription: ({ children, className }: {
    children: React.ReactNode;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
export {};
