import { ReactNode } from '../../../node_modules/react';
export type ContextMenuProps = {
    children: ReactNode;
    /** Menu items to display in the context menu */
    menu: ReactNode;
    className?: string;
    /** Disable the context menu */
    disabled?: boolean;
};
export declare const ContextMenu: ({ children, menu, className, disabled, }: ContextMenuProps) => import("react/jsx-runtime").JSX.Element;
export type ContextMenuItemProps = {
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    icon?: ReactNode;
    danger?: boolean;
};
export declare const ContextMenuItem: ({ children, onClick, disabled, className, icon, danger, }: ContextMenuItemProps) => import("react/jsx-runtime").JSX.Element;
export type ContextMenuDividerProps = {
    className?: string;
};
export declare const ContextMenuDivider: ({ className }: ContextMenuDividerProps) => import("react/jsx-runtime").JSX.Element;
export type ContextMenuGroupProps = {
    children: ReactNode;
    title?: string;
    className?: string;
};
export declare const ContextMenuGroup: ({ children, title, className, }: ContextMenuGroupProps) => import("react/jsx-runtime").JSX.Element;
