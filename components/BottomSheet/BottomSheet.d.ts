import { default as React } from '../../../node_modules/react';
export interface BottomSheetProps {
    children: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
}
export declare const BottomSheet: ({ children, open: controlledOpen, defaultOpen, onOpenChange, }: BottomSheetProps) => import("react/jsx-runtime").JSX.Element;
export interface BottomSheetTriggerProps {
    children: React.ReactNode;
    asChild?: boolean;
    className?: string;
}
export declare const BottomSheetTrigger: ({ children, asChild, className }: BottomSheetTriggerProps) => import("react/jsx-runtime").JSX.Element;
export interface BottomSheetCloseProps {
    children: React.ReactNode;
    asChild?: boolean;
    className?: string;
}
export declare const BottomSheetClose: ({ children, className, asChild }: BottomSheetCloseProps) => import("react/jsx-runtime").JSX.Element;
export interface BottomSheetContentProps {
    children: React.ReactNode;
    className?: string;
}
export declare const BottomSheetContent: ({ children, className }: BottomSheetContentProps) => import("react/jsx-runtime").JSX.Element;
export declare const BottomSheetHeader: ({ children, className }: {
    children: React.ReactNode;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
export declare const BottomSheetFooter: ({ children, className }: {
    children: React.ReactNode;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
export declare const BottomSheetTitle: ({ children, className }: {
    children: React.ReactNode;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
export declare const BottomSheetDescription: ({ children, className }: {
    children: React.ReactNode;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
export declare const BottomSheetBody: ({ children, className }: {
    children: React.ReactNode;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
