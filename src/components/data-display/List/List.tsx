import React, { createContext, useContext } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { mergeRefs } from "../../_internal/mergeRefs";
import styles from "./list.module.scss";
import { Icon } from "../../media/Icon/Icon";
import { ComponentSize } from "../../../types/tokens";

type ListContextType = {
  size: ComponentSize;
};

const ListContext = createContext<ListContextType>({ size: "md" });

export interface ListProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
  size?: ComponentSize;
  spacing?: "tight" | "normal" | "loose";
  bordered?: boolean;
  fullWidth?: boolean;
  hoverable?: boolean;
}

export const List = React.forwardRef<HTMLElement, ListProps>(
  ({ asChild = false, size = "md", spacing = "normal", bordered = false, fullWidth = false, hoverable = false, children, className, ...props }, ref) => {
    const Component = asChild ? Slot : "ul";

    return (
      <ListContext.Provider value={{ size }}>
        <Component
          className={classNames(
            styles.root,
            styles[size],
            styles[`spacing-${spacing}`],
            bordered && styles.bordered,
            fullWidth && styles.fullWidth,
            hoverable && styles.hoverable,
            className
          )}
          ref={mergeRefs(ref)}
          {...props}
        >
          <Slottable>{children}</Slottable>
        </Component>
      </ListContext.Provider>
    );
  },
);

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  asChild?: boolean;
  children: React.ReactNode;
  iconName?: React.ComponentProps<typeof Icon>["name"];
  iconPosition?: "left" | "right";
  iconColor?: React.ComponentProps<typeof Icon>["color"];
  selected?: boolean;
}

export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ asChild = false, children, className, iconName, iconPosition = "left", iconColor, selected = false, ...props }, ref) => {
    const { size } = useContext(ListContext);
    const Component = asChild ? Slot : "li";

    return (
      <Component
        className={classNames(
          styles.item,
          iconName && styles.withIcon,
          selected && styles.selected,
          className
        )}
        ref={ref}
        {...props}
      >
        {iconName ? (
          <div className={styles.itemContent}>
            {iconPosition === "left" && (
              <div className={classNames(styles.iconContainer, styles.left)}>
                <Icon name={iconName} size={size} color={iconColor} className={styles.icon} />
              </div>
            )}
            <div className={styles.text}>
              <Slottable>{children}</Slottable>
            </div>
            {iconPosition === "right" && (
              <div className={classNames(styles.iconContainer, styles.right)}>
                <Icon name={iconName} size={size} color={iconColor} className={styles.icon} />
              </div>
            )}
          </div>
        ) : (
          <Slottable>{children}</Slottable>
        )}
      </Component>
    );
  },
);

List.displayName = "List";
ListItem.displayName = "List.Item";

