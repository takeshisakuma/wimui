import { default as React, ReactNode } from '../../../../node_modules/react';
import { BaseListItemProps } from '../../_internal/BaseListItem';
export type MenubarProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * If true, the component will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
};
export type MenubarMenuProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * Stable id for this top-level menu. Used for open-state coordination.
     */
    value: string;
    /**
     * Disables the top-level trigger and prevents opening.
     */
    disabled?: boolean;
};
declare const MenubarMenu: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    /**
     * Stable id for this top-level menu. Used for open-state coordination.
     */
    value: string;
    /**
     * Disables the top-level trigger and prevents opening.
     */
    disabled?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
export type MenubarTriggerProps = React.ComponentPropsWithoutRef<"button"> & {
    asChild?: boolean;
};
declare const MenubarTrigger: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    asChild?: boolean;
} & React.RefAttributes<HTMLButtonElement>>;
export type MenubarContentProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * Horizontal alignment of the floating panel relative to the trigger.
     * @default "start"
     */
    align?: "start" | "end";
};
declare const MenubarContent: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    /**
     * Horizontal alignment of the floating panel relative to the trigger.
     * @default "start"
     */
    align?: "start" | "end";
} & React.RefAttributes<HTMLDivElement>>;
export type MenubarItemProps = BaseListItemProps & {
    children: ReactNode;
    onSelect?: () => void;
};
declare const MenubarItem: React.ForwardRefExoticComponent<{
    asChild?: boolean;
    icon?: React.ReactNode;
    rightSection?: React.ReactNode;
    active?: boolean;
    disabled?: boolean;
    danger?: boolean;
    className?: string;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    children: ReactNode;
    onSelect?: () => void;
} & React.RefAttributes<HTMLDivElement>>;
export type MenubarSeparatorProps = React.ComponentPropsWithoutRef<"div">;
declare const MenubarSeparator: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export interface MenubarComponent extends React.ForwardRefExoticComponent<MenubarProps & React.RefAttributes<HTMLDivElement>> {
    Menu: typeof MenubarMenu;
    Trigger: typeof MenubarTrigger;
    Content: typeof MenubarContent;
    Item: typeof MenubarItem;
    Separator: typeof MenubarSeparator;
}
export declare const Menubar: MenubarComponent;
export default Menubar;
