import React, { createContext, useContext } from "react";
import classNames from "classnames";
import "./list.scss";
import { Icon } from "../../media/Icon/Icon";
import { ComponentSize } from "../../../types/tokens";

type ListContextType = {
  size: ComponentSize;
};

const ListContext = createContext<ListContextType>({ size: "md" });

type ListProps = React.ComponentPropsWithoutRef<"ul"> & {
  as?: "ul" | "ol";
  size?: ComponentSize;
  spacing?: "tight" | "normal" | "loose";
  children: React.ReactNode;
};

export const List = ({
  as: Component = "ul",
  size = "md",
  spacing = "normal",
  children,
  className,
  ...props
}: ListProps) => {
  return (
    <ListContext.Provider value={{ size }}>
      <Component
        className={classNames(
          "wim-list",
          `wim-list--${size}`,
          `wim-list--spacing-${spacing}`,
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    </ListContext.Provider>
  );
};

type ListItemProps = React.ComponentPropsWithoutRef<"li"> & {
  children: React.ReactNode;
  iconName?: React.ComponentProps<typeof Icon>["name"];
  iconPosition?: "left" | "right";
};

export const ListItem = ({
  children,
  className,
  iconName,
  iconPosition = "left",
  ...props
}: ListItemProps) => {
  const { size } = useContext(ListContext);

  return (
    <li
      className={classNames(
        "wim-list__item",
        iconName && "wim-list__item--with-icon",
        className,
      )}
      {...props}
    >
      <div className="wim-list__item-content">
        {iconName && iconPosition === "left" && (
          <div className="wim-list__icon-container wim-list__icon-container--left">
            <Icon name={iconName} size={size} className="wim-list__icon" />
          </div>
        )}
        <div className="wim-list__text">
          {children}
        </div>
        {iconName && iconPosition === "right" && (
          <div className="wim-list__icon-container wim-list__icon-container--right">
            <Icon name={iconName} size={size} className="wim-list__icon" />
          </div>
        )}
      </div>
    </li>
  );
};
