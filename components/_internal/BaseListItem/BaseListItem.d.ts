import { default as React } from '../../../../node_modules/react';
/**
 * Props for the BaseListItem component.
 * Extends standard HTML div attributes.
 */
export type BaseListItemProps = {
    /**
     * If true, the item will be rendered as its child, merging its props onto that child.
     * Use when the list item must be a specific element (e.g. `<li>` inside `<ul>`).
     */
    asChild?: boolean;
    /**
     * Left icon or element to display before the children.
     */
    icon?: React.ReactNode;
    /**
     * Right section (e.g., shortcuts, arrows, status indicators) to display after the children.
     */
    rightSection?: React.ReactNode;
    /**
     * If true, the item will be rendered in an active/highlighted state.
     */
    active?: boolean;
    /**
     * If true, the item will be rendered in a disabled state and become non-interactive.
     */
    disabled?: boolean;
    /**
     * If true, the item will be styled to indicate a dangerous or danger action.
     */
    danger?: boolean;
    /**
     * Additional CSS class name.
     */
    className?: string;
} & React.ComponentPropsWithoutRef<"div">;
/**
 * BaseListItem is an internal component that provides a consistent layout and styling
 * for items used in lists, menus, and dropdowns.
 *
 * Composition Contract:
 * - Supports polymorphic rendering via the `asChild` prop (Slot pattern).
 *   When `asChild` is true, the child element becomes the root; BaseListItem's className,
 *   aria-disabled, and event props are merged onto it via Slot. icon/rightSection slots
 *   are rendered inside the child using Slottable.
 * - Provides standardized slots for `icon` (start) and `rightSection` (end).
 * - Implements hover, active, and disabled states consistently.
 * - Handles basic accessibility (aria-disabled).
 *
 * This component is intended for internal use by components like Select, Menu, and Dropdown.
 */
export declare const BaseListItem: React.ForwardRefExoticComponent<{
    /**
     * If true, the item will be rendered as its child, merging its props onto that child.
     * Use when the list item must be a specific element (e.g. `<li>` inside `<ul>`).
     */
    asChild?: boolean;
    /**
     * Left icon or element to display before the children.
     */
    icon?: React.ReactNode;
    /**
     * Right section (e.g., shortcuts, arrows, status indicators) to display after the children.
     */
    rightSection?: React.ReactNode;
    /**
     * If true, the item will be rendered in an active/highlighted state.
     */
    active?: boolean;
    /**
     * If true, the item will be rendered in a disabled state and become non-interactive.
     */
    disabled?: boolean;
    /**
     * If true, the item will be styled to indicate a dangerous or danger action.
     */
    danger?: boolean;
    /**
     * Additional CSS class name.
     */
    className?: string;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLElement>>;
