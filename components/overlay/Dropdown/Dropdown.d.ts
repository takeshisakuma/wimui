import { default as React, ReactNode } from '../../../../node_modules/react';
import { BaseListItemProps } from '../../_internal/BaseListItem';
import { Transition } from '../../layout/Transition/Transition';
export interface DropdownProps extends React.ComponentPropsWithoutRef<"div"> {
    /**
     * Dropdown parts (Dropdown.Trigger and Dropdown.Menu).
     */
    children: ReactNode;
    /**
     * If true, the dropdown will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
}
export interface DropdownTriggerProps extends React.ComponentPropsWithoutRef<"div"> {
    children: ReactNode;
    asChild?: boolean;
}
export declare const DropdownTrigger: React.ForwardRefExoticComponent<DropdownTriggerProps & React.RefAttributes<HTMLDivElement>>;
export interface DropdownMenuProps extends Omit<React.ComponentPropsWithoutRef<typeof Transition>, "show"> {
    children: ReactNode;
    align?: "left" | "right";
    show?: boolean;
}
export declare const DropdownMenu: React.ForwardRefExoticComponent<DropdownMenuProps & React.RefAttributes<HTMLDivElement>>;
export interface DropdownItemProps extends BaseListItemProps {
    children: ReactNode;
    onClick?: () => void;
}
export declare const DropdownItem: React.ForwardRefExoticComponent<DropdownItemProps & React.RefAttributes<HTMLDivElement>>;
export interface DropdownComponent extends React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<HTMLDivElement>> {
    Trigger: typeof DropdownTrigger;
    Menu: typeof DropdownMenu;
    Item: typeof DropdownItem;
}
declare const DropdownCompound: DropdownComponent;
export { DropdownCompound as Dropdown };
export default DropdownCompound;
