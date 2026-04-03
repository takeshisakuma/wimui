import React, { useState, useRef, useEffect, ReactNode, useId } from "react";
import classNames from "classnames";
import { BaseListItem } from "../../_internal/BaseListItem";
import "./dropdown.scss";

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

export type DropdownProps = {
  children: ReactNode;
  className?: string;
};

export const Dropdown = ({ children, className }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemCountRef = useRef(0);

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

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
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

  return (
    <DropdownContext.Provider
      value={{ isOpen, toggle, close, menuId, triggerId, focusedIndex, setFocusedIndex, registerItem, containerRef }}
    >
      <div role="none" className={classNames("wim-dropdown", className)} ref={containerRef} onKeyDown={handleKeyDown}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

export type DropdownTriggerProps = {
  children: ReactNode;
  className?: string;
};

export const DropdownTrigger = ({
  children,
  className,
}: DropdownTriggerProps) => {
  const { toggle, isOpen, menuId, triggerId } =
    React.useContext(DropdownContext);

  return (
    <div
      id={triggerId}
      className={classNames("wim-dropdown-trigger", className)}
      onClick={toggle}
      aria-haspopup="menu"
      aria-expanded={isOpen}
      aria-controls={isOpen ? menuId : undefined}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
    >
      {children}
    </div>
  );
};

export type DropdownMenuProps = {
  children: ReactNode;
  className?: string;
  align?: "left" | "right";
};

import { Transition } from "../../layout/Transition/Transition";

export const DropdownMenu = ({
  children,
  className,
  align = "left",
}: DropdownMenuProps) => {
  const { isOpen, menuId, triggerId } = React.useContext(DropdownContext);

  return (
    <Transition
      show={isOpen}
      enter="fade-enter"
      enterFrom="fade-enter-from"
      enterTo="fade-enter-to"
      leave="fade-leave"
      leaveFrom="fade-leave-from"
      leaveTo="fade-leave-to"
      id={menuId}
      className={classNames(
        "wim-dropdown-menu",
        `wim-dropdown-menu--align-${align}`,
        className,
      )}
      role="menu"
      aria-labelledby={triggerId}
    >
      {children}
    </Transition>
  );
};

export type DropdownItemProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export const DropdownItem = ({
  children,
  onClick,
  disabled = false,
  className,
}: DropdownItemProps) => {
  const { close, focusedIndex, setFocusedIndex, registerItem } = React.useContext(DropdownContext);
  const [index] = useState(() => registerItem());
  const isFocused = focusedIndex === index;

  const handleClick = (_e: React.SyntheticEvent) => {
    if (disabled) return;

    if (onClick) {
      onClick();
    }
    close();
  };

  return (
    <BaseListItem
      className={classNames("wim-dropdown-item", className)}
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
};
