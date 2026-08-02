import React, { createContext, useContext } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { mergeRefs } from "../../_internal/mergeRefs";
import styles from "./list.module.scss";
import { Icon } from "../../media/Icon/Icon";
import { ComponentSizeBasic } from "../../../types/tokens";

type ListContextType = {
  size: ComponentSizeBasic;
};

const ListContext = createContext<ListContextType>({ size: "md" });

export interface ListProps extends React.HTMLAttributes<HTMLElement> {
  /** Whether to render as a child element. */
  asChild?: boolean;
  /** Size of the list items */
  size?: ComponentSizeBasic;
  /** Spacing between items */
  spacing?: "tight" | "normal" | "loose";
  /** Whether to show borders between items */
  bordered?: boolean;
  /** Whether to take full width of parent */
  fullWidth?: boolean;
  /** Whether items highlight on hover */
  hoverable?: boolean;
}

export const List = React.forwardRef<HTMLElement, ListProps>(
  ({ asChild = false, size = "md", spacing = "normal", bordered = false, fullWidth = false, hoverable = false, children, className, ...props }, ref) => {
    const Component = asChild ? Slot : "ul";

    return (
      <ListContext.Provider value={{ size }}>
        <Component
          className={classNames("wim-list", 
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
  /** Whether to render as a child element. */
  asChild?: boolean;
  /** Content of the list item */
  children: React.ReactNode;
  /** Icon name to display */
  iconName?: React.ComponentProps<typeof Icon>["name"];
  /** Position of the icon relative to the content */
  iconPosition?: "left" | "right";
  /** Color of the icon */
  iconColor?: React.ComponentProps<typeof Icon>["color"];
  /** Whether the item is in the selected state */
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
              // 左右の間隔は `.item.withIcon .itemContent` の gap が作る。
              // 位置は DOM の前後で表せているので、位置クラスは要らない（T58）。
              <div className={styles.iconContainer}>
                <Icon name={iconName} size={size} color={iconColor} className={styles.icon} />
              </div>
            )}
            <div className={styles.text}>
              <Slottable>{children}</Slottable>
            </div>
            {iconPosition === "right" && (
              <div className={styles.iconContainer}>
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

