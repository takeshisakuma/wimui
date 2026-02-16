import { ReactNode } from '../../../node_modules/react';
export type DropdownProps = {
    children: ReactNode;
    className?: string;
};
export declare const Dropdown: ({ children, className }: DropdownProps) => import("react/jsx-runtime").JSX.Element;
export type DropdownTriggerProps = {
    children: ReactNode;
    className?: string;
};
export declare const DropdownTrigger: ({ children, className }: DropdownTriggerProps) => import("react/jsx-runtime").JSX.Element;
export type DropdownMenuProps = {
    children: ReactNode;
    className?: string;
    align?: "left" | "right";
};
export declare const DropdownMenu: ({ children, className, align, }: DropdownMenuProps) => import("react/jsx-runtime").JSX.Element;
export type DropdownItemProps = {
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
};
export declare const DropdownItem: ({ children, onClick, disabled, className, }: DropdownItemProps) => import("react/jsx-runtime").JSX.Element;
