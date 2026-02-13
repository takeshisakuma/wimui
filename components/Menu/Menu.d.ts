import { ReactNode } from '../../../node_modules/react';
export type MenuProps = {
    children: ReactNode;
    className?: string;
    /** Mode of the menu */
    mode?: "vertical" | "horizontal" | "inline";
    /** Default selected keys */
    defaultSelectedKeys?: string[];
    /** Default opened submenu keys */
    defaultOpenKeys?: string[];
};
export declare const Menu: ({ children, className, mode, defaultOpenKeys, }: MenuProps) => import("react/jsx-runtime").JSX.Element;
export type MenuItemProps = {
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    icon?: ReactNode;
    /** Unique key for this item */
    itemKey?: string;
};
export declare const MenuItem: ({ children, onClick, disabled, className, icon, }: MenuItemProps) => import("react/jsx-runtime").JSX.Element;
export type MenuItemGroupProps = {
    children: ReactNode;
    title?: string;
    className?: string;
};
export declare const MenuItemGroup: ({ children, title, className }: MenuItemGroupProps) => import("react/jsx-runtime").JSX.Element;
export type SubMenuProps = {
    children: ReactNode;
    title: ReactNode;
    className?: string;
    icon?: ReactNode;
    /** Unique key for this submenu */
    itemKey: string;
};
export declare const SubMenu: ({ children, title, className, icon, itemKey, }: SubMenuProps) => import("react/jsx-runtime").JSX.Element;
export type MenuDividerProps = {
    className?: string;
};
export declare const MenuDivider: ({ className }: MenuDividerProps) => import("react/jsx-runtime").JSX.Element;
