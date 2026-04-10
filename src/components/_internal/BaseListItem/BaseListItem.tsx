import React from "react";
import classNames from "classnames";
import styles from "./base-list-item.module.scss";

export type BaseListItemProps<C extends React.ElementType = "div"> = {
    /** The component used for the root node. */
    as?: C;
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
} & React.ComponentPropsWithoutRef<C>;

/**
 * Internal component for consistent list items across Select, Menu, Dropdown, etc.
 * Not intended for direct public use.
 */
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
        ref: React.Ref<HTMLElement>,
    ) => {
        const Component = as || "div";
        return (
            <Component
                ref={ref as React.Ref<HTMLDivElement>}
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
);


BaseListItem.displayName = "BaseListItem";
