import React, { ReactNode, useState } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { BaseListItem } from "../../_internal/BaseListItem";
import { Transition } from "../../layout/Transition/Transition";
import { Icon } from "../../media/Icon/Icon";
import styles from "./menu.module.scss";
import { ChevronRightIcon } from "@/icon";

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
  /**
   * Menu items (MenuItem, MenuItemGroup, SubMenu, MenuDivider).
   */
  children: ReactNode;
  /**
   * Additional CSS class name for the container.
   */
  className?: string;
  /**
   * If true, the menu root will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /** Mode of the menu */
  mode?: "vertical" | "horizontal" | "inline";
  /** Default selected keys */
  defaultSelectedKeys?: string[];
  /** Default opened submenu keys */
  defaultOpenKeys?: string[];
};

const MenuInner = ({
  children,
  className,
  asChild = false,
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

  const Root = asChild ? Slot : "ul";

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
      <Root
        ref={containerRef}
        className={classNames("wim-menu", styles.root, styles[mode], className)}
        role="menu"
        onKeyDown={handleKeyDown}
      >
        <Slottable>{children}</Slottable>
      </Root>
    </MenuContext.Provider>
  );
};

export type MenuItemProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  danger?: boolean;
  className?: string;
  icon?: ReactNode;
  /** Unique key for this item */
  itemKey?: string;
  /**
   * If true, merge item props onto the child (keep a wrapping `<li role="none">` for valid menu markup).
   */
  asChild?: boolean;
} & React.ComponentPropsWithoutRef<"div">;

export const MenuItem = ({
  children,
  onClick,
  disabled = false,
  danger = false,
  className,
  icon,
  asChild = false,
  ...props
}: MenuItemProps) => {
  const { focusedIndex, setFocusedIndex, registerItem } = useMenu();
  const [index] = useState(() => registerItem());
  const isFocused = focusedIndex === index;

  const handleClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    if (disabled) return;
    if (onClick) onClick();
  };

  const itemProps = {
    className: classNames(styles.item, className),
    onClick: handleClick,
    onFocus: () => setFocusedIndex(index),
    disabled,
    danger,
    icon,
    role: "menuitem" as const,
    tabIndex: isFocused ? 0 : -1,
    onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => {
      if (!disabled && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        handleClick(e);
      }
    },
    ...props,
  };

  if (asChild) {
    return (
      <li role="none">
        <BaseListItem asChild {...itemProps}>
          {children}
        </BaseListItem>
      </li>
    );
  }

  return (
    <BaseListItem asChild {...itemProps}>
      <li>{children}</li>
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
  const labelId = React.useId();
  return (
    <li className={classNames(styles.itemGroup, className)} role="none">
      {title && (
        <div id={labelId} className={styles.itemGroupTitle} aria-hidden="true">
          {title}
        </div>
      )}
      <ul
        className={styles.itemGroupList}
        role="group"
        aria-labelledby={title ? labelId : undefined}
      >
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
  const titleId = React.useId();

  const handleToggle = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    toggleItem(itemKey);
  };

  return (
    <li
      className={classNames(
        styles.submenu,
        isOpen && styles.open,
        className,
      )}
      role="none"
    >
      <BaseListItem
        id={titleId}
        className={styles.submenuTitle}
        onClick={handleToggle}
        onFocus={() => setFocusedIndex(index)}
        icon={icon}
        rightSection={
          <span
            className={classNames(
              styles.submenuArrow,
              isOpen && styles.open,
            )}
          >
            <Icon component={ChevronRightIcon} size="sm" />
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
        preset="fade"
        className={styles.submenuList}
      >
        <ul
          className={styles.submenuList}
          role="menu"
          aria-labelledby={titleId}
        >
          {children}
        </ul>
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
      className={classNames(styles.divider, className)}
      role="separator"
    />
  );
};

// --- Compound Components ---
export interface MenuComponent extends React.FC<MenuProps> {
  Item: typeof MenuItem;
  Group: typeof MenuItemGroup;
  SubMenu: typeof SubMenu;
  Divider: typeof MenuDivider;
}

export const Menu: MenuComponent = Object.assign(MenuInner, {
  Item: MenuItem,
  Group: MenuItemGroup,
  SubMenu: SubMenu,
  Divider: MenuDivider,
});

export default Menu;
