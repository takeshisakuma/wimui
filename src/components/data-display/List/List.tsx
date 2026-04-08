import React, { createContext, useContext } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import "./list.scss";
import { Icon } from "../../media/Icon/Icon";
import { ComponentSize } from "../../../types/tokens";

type ListContextType = {
  size: ComponentSize;
};

const ListContext = createContext<ListContextType>({ size: "md" });

export interface ListProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
  as?: "ul" | "ol";
  size?: ComponentSize;
  spacing?: "tight" | "normal" | "loose";
}

export const List = React.forwardRef<HTMLElement, ListProps>(
  ({ asChild = false, as: ComponentTag = "ul", size = "md", spacing = "normal", children, className, ...props }, ref) => {
    const Component = asChild ? Slot : ComponentTag;

    return (
      <ListContext.Provider value={{ size }}>
        <Component
          className={classNames("wim-list", `wim-list--${size}`, `wim-list--spacing-${spacing}`, className)}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ref={ref as any}
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
}

export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ asChild = false, children, className, iconName, iconPosition = "left", ...props }, ref) => {
    const { size } = useContext(ListContext);
    const Component = asChild ? Slot : "li";

    return (
      <Component
        className={classNames("wim-list__item", iconName && "wim-list__item--with-icon", className)}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        {...props}
      >
        {iconName ? (
          <div className="wim-list__item-content">
            {iconPosition === "left" && (
              <div className="wim-list__icon-container wim-list__icon-container--left">
                <Icon name={iconName} size={size} className="wim-list__icon" />
              </div>
            )}
            <div className="wim-list__text">
              <Slottable>{children}</Slottable>
            </div>
            {iconPosition === "right" && (
              <div className="wim-list__icon-container wim-list__icon-container--right">
                <Icon name={iconName} size={size} className="wim-list__icon" />
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
