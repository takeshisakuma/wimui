import { default as React, ReactNode } from '../../../../node_modules/react';
export type MenuProps = {
    /**
     * Menu items (MenuItem, MenuItemGroup, SubMenu, MenuDivider).
     */
    children: ReactNode;
    /**
     * Additional CSS class name for the container.
     */
    className?: string;
    /**
     * If true, the menu root will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
    /** Mode of the menu */
    mode?: "vertical" | "horizontal" | "inline";
    /** Default selected keys */
    defaultSelectedKeys?: string[];
    /** Default opened submenu keys */
    defaultOpenKeys?: string[];
};
export type MenuItemProps = {
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    danger?: boolean;
    className?: string;
    icon?: ReactNode;
    /** Unique key for this item */
    itemKey?: string;
    /**
     * If true, merge item props onto the child (keep a wrapping `<li role="none">` for valid menu markup).
     */
    asChild?: boolean;
} & React.ComponentPropsWithoutRef<"div">;
export declare const MenuItem: ({ children, onClick, disabled, danger, className, icon, asChild, ...props }: MenuItemProps) => React.JSX.Element;
export type MenuItemGroupProps = {
    children: ReactNode;
    title?: string;
    className?: string;
};
export declare const MenuItemGroup: ({ children, title, className, }: MenuItemGroupProps) => React.JSX.Element;
export type SubMenuProps = {
    children: ReactNode;
    title: ReactNode;
    className?: string;
    icon?: ReactNode;
    /** Unique key for this submenu */
    itemKey: string;
};
export declare const SubMenu: ({ children, title, className, icon, itemKey, }: SubMenuProps) => React.JSX.Element;
export type MenuDividerProps = {
    className?: string;
};
export declare const MenuDivider: ({ className }: MenuDividerProps) => React.JSX.Element;
export interface MenuComponent extends React.FC<MenuProps> {
    Item: typeof MenuItem;
    Group: typeof MenuItemGroup;
    SubMenu: typeof SubMenu;
    Divider: typeof MenuDivider;
}
export declare const Menu: MenuComponent;
export default Menu;
