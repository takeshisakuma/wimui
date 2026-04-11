import React from "react";
import classNames from "classnames";
import styles from "./base-list-item.module.scss";

/**
 * Props for the BaseListItem component.
 * Extends standard HTML attributes of the element specified by the `as` prop.
 */
export type BaseListItemProps<C extends React.ElementType = "div"> = {
    /** 
     * The component or element used for the root node. 
     * @default "div"
     */
    as?: C;
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
     * If true, the item will be styled to indicate a dangerous or destructive action.
     */
    danger?: boolean;
    /** 
     * Additional CSS class name.
     */
    className?: string;
} & React.ComponentPropsWithoutRef<C>;

/**
 * BaseListItem is an internal component that provides a consistent layout and styling 
 * for items used in lists, menus, and dropdowns.
 * 
 * Composition Contract:
 * - Supports polymorphic rendering via the `as` prop.
 * - Provides standardized slots for `icon` (start) and `rightSection` (end).
 * - Implements hover, active, and disabled states consistently.
 * - Handles basic accessibility (aria-disabled).
 * 
 * This component is intended for internal use by components like Select, Menu, and Dropdown.
 */
export interface BaseListItemComponent {
    <C extends React.ElementType = "div">(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        props: BaseListItemProps<C> & { ref?: React.Ref<any> },
    ): React.ReactElement | null;
    displayName?: string;
}

export const BaseListItem = React.forwardRef(
    <C extends React.ElementType = "div">(
        {
            as,
            children,
            icon,
            rightSection,
            active,
            disabled,
            danger,
            className,
            ...props
        }: BaseListItemProps<C>,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref: React.Ref<any>,
    ) => {
        const Component = as || "div";
        return (
            <Component
                ref={ref}
                className={classNames(
                    styles.root,
                    active && styles.active,
                    disabled && styles.disabled,
                    danger && styles.danger,
                    className,
                )}
                aria-disabled={disabled}
                {...props}
            >
                {icon && <span className={styles.icon}>{icon}</span>}
                <span className={styles.content}>{children}</span>
                {rightSection && (
                    <span className={styles.rightSection}>
                        {rightSection}
                    </span>
                )}
            </Component>
        );
    },
) as BaseListItemComponent;


BaseListItem.displayName = "BaseListItem";
