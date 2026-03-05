import { default as React } from '../../../../node_modules/react';
export type BaseListItemProps = {
    /** The component used for the root node. */
    as?: React.ElementType;
    /** Primary label or content */
    children: React.ReactNode;
    /** Left icon or element */
    icon?: React.ReactNode;
    /** Right section (shortcuts, arrows, etc.) */
    rightSection?: React.ReactNode;
    /** Whether the item is currently highlighted or active */
    active?: boolean;
    /** Whether the item is disabled */
    disabled?: boolean;
    /** Whether the item represents a dangerous action */
    danger?: boolean;
    /** Custom class name */
    className?: string;
} & React.ComponentPropsWithoutRef<any>;
/**
 * Internal component for consistent list items across Select, Menu, Dropdown, etc.
 * Not intended for direct public use.
 */
export declare const BaseListItem: React.ForwardRefExoticComponent<Omit<BaseListItemProps, "ref"> & React.RefAttributes<any>>;
