import React, { ReactNode, useState } from "react";
import classNames from "classnames";
import { Transition } from "../Transition/Transition";
import { Icon } from "../Icon/Icon";
import "./menu.scss";

// Context to share state between components
const MenuContext = React.createContext<{
  expandedItems: Set<string>;
  toggleItem: (key: string) => void;
}>({
  expandedItems: new Set(),
  toggleItem: () => {},
});

export type MenuProps = {
  children: ReactNode;
  className?: string;
  /** Mode of the menu */
  mode?: "vertical" | "horizontal" | "inline";
  /** Default selected keys */
  defaultSelectedKeys?: string[];
  /** Default opened submenu keys */
  defaultOpenKeys?: string[];
};

export const Menu = ({
  children,
  className,
  mode = "vertical",
  defaultOpenKeys = [],
}: MenuProps) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(defaultOpenKeys),
  );

  const toggleItem = (key: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  return (
    <MenuContext.Provider value={{ expandedItems, toggleItem }}>
      <ul
        className={classNames("wim-menu", `wim-menu--${mode}`, className)}
        role="menu"
      >
        {children}
      </ul>
    </MenuContext.Provider>
  );
};

export type MenuItemProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
  /** Unique key for this item */
  itemKey?: string;
};

export const MenuItem = ({
  children,
  onClick,
  disabled = false,
  className,
  icon,
}: MenuItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (disabled) return;

    if (onClick) {
      onClick();
    }
  };

  return (
    <li
      className={classNames(
        "wim-menu-item",
        disabled && "wim-menu-item--disabled",
        className,
      )}
      onClick={handleClick}
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      onKeyDown={(e) => {
        if (!disabled && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          handleClick(e as any);
        }
      }}
    >
      {icon && <span className="wim-menu-item__icon">{icon}</span>}
      <span className="wim-menu-item__content">{children}</span>
    </li>
  );
};

export type MenuItemGroupProps = {
  children: ReactNode;
  title?: string;
  className?: string;
};

export const MenuItemGroup = ({
  children,
  title,
  className,
}: MenuItemGroupProps) => {
  return (
    <li className={classNames("wim-menu-item-group", className)}>
      {title && <div className="wim-menu-item-group__title">{title}</div>}
      <ul className="wim-menu-item-group__list" role="group">
        {children}
      </ul>
    </li>
  );
};

export type SubMenuProps = {
  children: ReactNode;
  title: ReactNode;
  className?: string;
  icon?: ReactNode;
  /** Unique key for this submenu */
  itemKey: string;
};

export const SubMenu = ({
  children,
  title,
  className,
  icon,
  itemKey,
}: SubMenuProps) => {
  const { expandedItems, toggleItem } = React.useContext(MenuContext);
  const isOpen = expandedItems.has(itemKey);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleItem(itemKey);
  };

  return (
    <li
      className={classNames(
        "wim-menu-submenu",
        isOpen && "wim-menu-submenu--open",
        className,
      )}
    >
      <div
        className="wim-menu-submenu__title"
        onClick={handleToggle}
        role="menuitem"
        aria-haspopup="true"
        aria-expanded={isOpen}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleToggle(e as any);
          }
        }}
      >
        {icon && <span className="wim-menu-item__icon">{icon}</span>}
        <span className="wim-menu-item__content">{title}</span>
        <span
          className={classNames(
            "wim-menu-submenu__arrow",
            isOpen && "wim-menu-submenu__arrow--open",
          )}
        >
          <Icon name="ChevronRightIcon" size="small" />
        </span>
      </div>

      <Transition
        show={isOpen}
        enter="fade-enter"
        enterFrom="fade-enter-from"
        enterTo="fade-enter-to"
        leave="fade-leave"
        leaveFrom="fade-leave-from"
        leaveTo="fade-leave-to"
        className="wim-menu-submenu__list"
        role="menu"
      >
        <ul className="wim-menu-submenu__list">{children}</ul>
      </Transition>
    </li>
  );
};

export type MenuDividerProps = {
  className?: string;
};

export const MenuDivider = ({ className }: MenuDividerProps) => {
  return (
    <li
      className={classNames("wim-menu-divider", className)}
      role="separator"
    />
  );
};
