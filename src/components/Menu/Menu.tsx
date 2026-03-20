import React, { ReactNode, useState } from "react";
import classNames from "classnames";
import { BaseListItem } from "../_internal/BaseListItem";
import { Transition } from "../Transition/Transition";
import { Icon } from "../Icon/Icon";
import "./menu.scss";

// Context to share state between components
const MenuContext = React.createContext<{
  expandedItems: Set<string>;
  toggleItem: (key: string) => void;
  containerRef: React.RefObject<HTMLUListElement | null>;
  mode: "vertical" | "horizontal" | "inline";
  focusedIndex: number;
  setFocusedIndex: (index: number) => void;
  registerItem: () => number;
}>({
  expandedItems: new Set(),
  toggleItem: () => { },
  containerRef: { current: null },
  mode: "vertical",
  focusedIndex: 0,
  setFocusedIndex: () => { },
  registerItem: () => 0,
});

const useMenu = () => {
  const context = React.useContext(MenuContext);
  if (!context) {
    throw new Error("Menu sub-components must be used within a Menu");
  }
  return context;
};

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
  const [focusedIndex, setFocusedIndex] = useState(0);
  const itemCountRef = React.useRef(0);

  // Reset count on each render to handle dynamic items
  React.useEffect(() => {
    itemCountRef.current = 0;
  });

  const registerItem = () => {
    const index = itemCountRef.current;
    itemCountRef.current += 1;
    return index;
  };

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

  const containerRef = React.useRef<HTMLUListElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const items = Array.from(
      containerRef.current?.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])') || [],
    ) as HTMLElement[];
    const index = items.indexOf(document.activeElement as HTMLElement);

    if (index === -1) return;

    if (mode === "vertical" || mode === "inline") {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        items[(index + 1) % items.length]?.focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        items[(index - 1 + items.length) % items.length]?.focus();
      } else if (e.key === "ArrowRight") {
        const currentItem = items[index];
        if (currentItem.getAttribute("aria-haspopup") === "true" && currentItem.getAttribute("aria-expanded") === "false") {
          e.preventDefault();
          currentItem.click();
        }
      } else if (e.key === "ArrowLeft") {
        const currentItem = items[index];
        if (currentItem.getAttribute("aria-haspopup") === "true" && currentItem.getAttribute("aria-expanded") === "true") {
          e.preventDefault();
          currentItem.click();
        }
      }
    } else if (mode === "horizontal") {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        items[(index + 1) % items.length]?.focus();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        items[(index - 1 + items.length) % items.length]?.focus();
      } else if (e.key === "ArrowDown") {
        const currentItem = items[index];
        if (currentItem.getAttribute("aria-haspopup") === "true" && currentItem.getAttribute("aria-expanded") === "false") {
          e.preventDefault();
          currentItem.click();
        }
      }
    }

    if (e.key === "Home") {
      e.preventDefault();
      setFocusedIndex(0);
      items[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      setFocusedIndex(items.length - 1);
      items[items.length - 1]?.focus();
    }
  };

  return (
    <MenuContext.Provider
      value={{
        expandedItems,
        toggleItem,
        containerRef,
        mode,
        focusedIndex,
        setFocusedIndex,
        registerItem,
      }}
    >
      <ul
        ref={containerRef}
        className={classNames("wim-menu", `wim-menu--${mode}`, className)}
        role="menu"
        onKeyDown={handleKeyDown}
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
  const { focusedIndex, setFocusedIndex, registerItem } = useMenu();
  const [index] = useState(() => registerItem());
  const isFocused = focusedIndex === index;

  const handleClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    if (disabled) return;
    if (onClick) onClick();
  };

  return (
    <BaseListItem
      as="li"
      className={classNames("wim-menu-item", className)}
      onClick={handleClick}
      onFocus={() => setFocusedIndex(index)}
      disabled={disabled}
      icon={icon}
      role="menuitem"
      tabIndex={isFocused ? 0 : -1}
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
        if (!disabled && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          handleClick(e);
        }
      }}
    >
      {children}
    </BaseListItem>
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
  const { expandedItems, toggleItem, registerItem, focusedIndex, setFocusedIndex } = useMenu();
  const isOpen = expandedItems.has(itemKey);
  const [index] = useState(() => registerItem());
  const isFocused = focusedIndex === index;

  const handleToggle = (e: React.SyntheticEvent) => {
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
      <BaseListItem
        className="wim-menu-submenu__title"
        onClick={handleToggle}
        onFocus={() => setFocusedIndex(index)}
        icon={icon}
        rightSection={
          <span
            className={classNames(
              "wim-menu-submenu__arrow",
              isOpen && "wim-menu-submenu__arrow--open",
            )}
          >
            <Icon name="ChevronRightIcon" size="small" />
          </span>
        }
        role="menuitem"
        aria-haspopup="true"
        aria-expanded={isOpen}
        tabIndex={isFocused ? 0 : -1}
        onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleToggle(e);
          }
        }}
      >
        {title}
      </BaseListItem>

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
