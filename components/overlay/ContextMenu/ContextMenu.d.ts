import { default as React, ReactNode } from '../../../../node_modules/react';
export type ContextMenuProps = {
    /**
     * Element that opens the context menu on right-click.
     */
    children: ReactNode;
    /** Menu items to display in the context menu */
    menu: ReactNode;
    /**
     * Additional CSS class name for the container.
     */
    className?: string;
    /** Disable the context menu */
    disabled?: boolean;
    /**
     * If true, merge trigger props onto the child element.
     */
    asChild?: boolean;
};
export type ContextMenuItemProps = {
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    icon?: ReactNode;
    danger?: boolean;
    /**
     * If true, merge item props onto the child (keep a wrapping `<li role="none">` for valid menu markup).
     */
    asChild?: boolean;
};
export declare const ContextMenuItem: ({ children, onClick, disabled, className, icon, danger, asChild, }: ContextMenuItemProps) => React.JSX.Element;
export type ContextMenuDividerProps = {
    className?: string;
};
export declare const ContextMenuDivider: ({ className }: ContextMenuDividerProps) => React.JSX.Element;
export type ContextMenuGroupProps = {
    children: ReactNode;
    title?: string;
    className?: string;
};
export declare const ContextMenuGroup: ({ children, title, className, }: ContextMenuGroupProps) => React.JSX.Element;
export interface ContextMenuComponent extends React.FC<ContextMenuProps> {
    Item: typeof ContextMenuItem;
    Divider: typeof ContextMenuDivider;
    Group: typeof ContextMenuGroup;
}
declare const ContextMenuCompound: ContextMenuComponent;
export { ContextMenuCompound as ContextMenu };
export default ContextMenuCompound;
