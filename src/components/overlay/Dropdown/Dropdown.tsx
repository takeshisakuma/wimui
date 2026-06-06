import React, { useState, useRef, useEffect, ReactNode, useId, forwardRef } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { BaseListItem, type BaseListItemProps } from "../../_internal/BaseListItem";
import { mergeRefs } from "../../_internal/mergeRefs";
import { Transition } from "../../layout/Transition/Transition";
import styles from "./dropdown.module.scss";

// Context to share state between components
const DropdownContext = React.createContext<{
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  menuId: string;
  triggerId: string;
  focusedIndex: number;
  setFocusedIndex: (index: number) => void;
  registerItem: () => number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}>({
  isOpen: false,
  toggle: () => { },
  close: () => { },
  menuId: "",
  triggerId: "",
  focusedIndex: -1,
  setFocusedIndex: () => { },
  registerItem: () => 0,
  containerRef: { current: null },
});

export interface DropdownProps extends React.ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  asChild?: boolean;
}

const DropdownInner = forwardRef<HTMLDivElement, DropdownProps>(
  ({ children, className, asChild = false, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const itemCountRef = useRef(0);

    // Combine refs
    const combinedRef = mergeRefs(containerRef, ref);

    useEffect(() => {
      itemCountRef.current = 0;
    });

    const registerItem = () => {
      const index = itemCountRef.current;
      itemCountRef.current += 1;
      return index;
    };

    const generatedId = useId();
    const menuId = `wim-dropdown-menu-${generatedId}`;
    const triggerId = `wim-dropdown-trigger-${generatedId}`;

    const toggle = () => {
      const nextOpen = !isOpen;
      setIsOpen(nextOpen);
      if (nextOpen) {
        setFocusedIndex(0);
      } else {
        setFocusedIndex(-1);
      }
    };
    const close = () => {
      setIsOpen(false);
      setFocusedIndex(-1);
    };

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          close();
        }
      };

      const handleKeyDownGlobal = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          close();
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDownGlobal);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleKeyDownGlobal);
      };
    }, [isOpen]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (!isOpen) return;

      const items = Array.from(
        containerRef.current?.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])') || [],
      ) as HTMLElement[];

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setFocusedIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
          break;
        case "ArrowUp":
          e.preventDefault();
          setFocusedIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
          break;
        case "Home":
          e.preventDefault();
          setFocusedIndex(0);
          break;
        case "End":
          e.preventDefault();
          setFocusedIndex(items.length - 1);
          break;
        case "Tab":
          close();
          break;
      }
    };

    useEffect(() => {
      if (isOpen && focusedIndex >= 0) {
        const items = Array.from(
          containerRef.current?.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])') || [],
        ) as HTMLElement[];
        items[focusedIndex]?.focus();
      }
    }, [focusedIndex, isOpen]);

    const Component = asChild ? Slot : "div";

    return (
      <DropdownContext.Provider
        value={{ isOpen, toggle, close, menuId, triggerId, focusedIndex, setFocusedIndex, registerItem, containerRef }}
      >
        <Component
          {...props}
          role="none"
          className={classNames(styles.root, className)}
          ref={combinedRef}
          onKeyDown={handleKeyDown}
        >
          <Slottable>{children}</Slottable>
        </Component>
      </DropdownContext.Provider>
    );
  }
);
DropdownInner.displayName = "Dropdown";

export interface DropdownTriggerProps extends React.ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  asChild?: boolean;
}

export const DropdownTrigger = forwardRef<HTMLDivElement, DropdownTriggerProps>(
  ({ children, className, asChild = false, ...props }, ref) => {
    const { toggle, isOpen, menuId, triggerId } = React.useContext(DropdownContext);

    const Component = asChild ? Slot : "div";

    return (
      <Component
        {...props}
        ref={ref}
        id={triggerId}
        className={classNames(styles.trigger, className)}
        onClick={toggle}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={isOpen ? menuId : undefined}
        role="button"
        tabIndex={0}
        onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
      >
        <Slottable>{children}</Slottable>
      </Component>
    );
  }
);
DropdownTrigger.displayName = "Dropdown.Trigger";

// We Omit 'show' because it's managed via context
export interface DropdownMenuProps extends Omit<React.ComponentPropsWithoutRef<typeof Transition>, "show"> {
  children: ReactNode;
  align?: "left" | "right";
  show?: boolean; // Re-add optional show just in case someone wants to force it
}

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ children, className, align = "left", show: forceShow, ...props }, ref) => {
    const { isOpen, menuId, triggerId } = React.useContext(DropdownContext);
    const alignClass = align === "left" ? styles.alignLeft : styles.alignRight;

    return (
      <Transition
        {...props}
        ref={ref}
        show={forceShow !== undefined ? forceShow : isOpen}
        preset="fade"
        id={menuId}
        className={classNames(
          styles.menu,
          alignClass,
          className,
        )}
        role="menu"
        aria-labelledby={triggerId}
      >
        {children}
      </Transition>
    );
  }
);
DropdownMenu.displayName = "Dropdown.Menu";

export interface DropdownItemProps extends BaseListItemProps {
  children: ReactNode;
  onClick?: () => void;
}

export const DropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>(
  ({ children, onClick, disabled = false, className, ...props }, ref) => {
    const { close, focusedIndex, setFocusedIndex, registerItem } = React.useContext(DropdownContext);
    const [index] = useState(() => registerItem());
    const isFocused = focusedIndex === index;

    const handleClick = (e: React.SyntheticEvent) => {
      if (disabled) return;
      
      // Prevent event bubbling to trigger
      e.stopPropagation();

      if (onClick) {
        onClick();
      }
      close();
    };

    return (
      <BaseListItem
        {...props}
        ref={ref}
        className={classNames(styles.item, className)}
        onClick={handleClick}
        onFocus={() => setFocusedIndex(index)}
        disabled={disabled}
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
  }
);
DropdownItem.displayName = "Dropdown.Item";

export interface DropdownComponent extends React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<HTMLDivElement>> {
  Trigger: typeof DropdownTrigger;
  Menu: typeof DropdownMenu;
  Item: typeof DropdownItem;
}

const DropdownCompound = forwardRef<HTMLDivElement, DropdownProps>((props, ref) => (
  <DropdownInner {...props} ref={ref} />
)) as DropdownComponent;

DropdownCompound.displayName = "Dropdown";
DropdownCompound.Trigger = DropdownTrigger;
DropdownCompound.Menu = DropdownMenu;
DropdownCompound.Item = DropdownItem;

export { DropdownCompound as Dropdown };
export default DropdownCompound;
