import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { BaseListItem, type BaseListItemProps } from "../../_internal/BaseListItem";
import { Transition } from "../../layout/Transition/Transition";
import localStyles from "./menubar.module.scss";

type MenubarContextValue = {
  openMenuId: string | null;
  setOpenMenuId: (id: string | null) => void;
  registerTrigger: (id: string, el: HTMLElement | null) => void;
  getTriggerIds: () => string[];
  focusTrigger: (id: string) => void;
};

const MenubarContext = createContext<MenubarContextValue | null>(null);

type MenubarMenuContextValue = {
  menuId: string;
  triggerId: string;
  contentId: string;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const MenubarMenuContext = createContext<MenubarMenuContextValue | null>(null);

const useMenubar = () => {
  const ctx = useContext(MenubarContext);
  if (!ctx) throw new Error("Menubar compound parts must be used within <Menubar>");
  return ctx;
};

const useMenubarMenu = () => {
  const ctx = useContext(MenubarMenuContext);
  if (!ctx) throw new Error("Menubar.Trigger/Content/Item must be used within <Menubar.Menu>");
  return ctx;
};

export type MenubarProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * If true, the component will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
};

/**
 * Menubar is a desktop-style application menu strip (`role="menubar"`) with
 * floating submenu panels. Open at most one top-level menu at a time; hovering
 * another trigger while a menu is open switches menus (classic menubar UX).
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No (floating panels only; no OverlayBase / FocusTrap)
 * - Portal: No — panels position absolutely under each Menu (like Dropdown)
 * - Items: reuse BaseListItem via Menubar.Item
 */
const MenubarRoot = React.forwardRef<HTMLDivElement, MenubarProps>(
  ({ asChild = false, className, children, onKeyDown, ...props }, ref) => {
    const [openMenuId, setOpenMenuId] = useState<string | null>(null);
    const triggersRef = useRef<Map<string, HTMLElement>>(new Map());
    const rootRef = useRef<HTMLDivElement | null>(null);

    const setRefs = useCallback(
      (node: HTMLDivElement | null) => {
        rootRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      },
      [ref],
    );

    const registerTrigger = useCallback((id: string, el: HTMLElement | null) => {
      if (el) triggersRef.current.set(id, el);
      else triggersRef.current.delete(id);
    }, []);

    const getTriggerIds = useCallback(() => Array.from(triggersRef.current.keys()), []);

    const focusTrigger = useCallback((id: string) => {
      triggersRef.current.get(id)?.focus();
    }, []);

    useEffect(() => {
      if (!openMenuId) return;
      const handlePointerDown = (event: MouseEvent) => {
        if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
          setOpenMenuId(null);
        }
      };
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setOpenMenuId(null);
          if (openMenuId) focusTrigger(openMenuId);
        }
      };
      document.addEventListener("mousedown", handlePointerDown);
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("mousedown", handlePointerDown);
        document.removeEventListener("keydown", handleEscape);
      };
    }, [openMenuId, focusTrigger]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(event);
      if (event.defaultPrevented) return;

      const ids = getTriggerIds();
      if (ids.length === 0) return;

      const activeId =
        openMenuId ??
        ids.find((id) => triggersRef.current.get(id) === document.activeElement) ??
        null;
      if (!activeId) return;

      const index = ids.indexOf(activeId);
      if (index < 0) return;

      if (event.key === "ArrowRight") {
        event.preventDefault();
        const next = ids[(index + 1) % ids.length];
        if (openMenuId) setOpenMenuId(next);
        focusTrigger(next);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        const prev = ids[(index - 1 + ids.length) % ids.length];
        if (openMenuId) setOpenMenuId(prev);
        focusTrigger(prev);
      } else if (event.key === "Home") {
        event.preventDefault();
        const first = ids[0];
        if (openMenuId) setOpenMenuId(first);
        focusTrigger(first);
      } else if (event.key === "End") {
        event.preventDefault();
        const last = ids[ids.length - 1];
        if (openMenuId) setOpenMenuId(last);
        focusTrigger(last);
      }
    };

    const value = useMemo(
      () => ({
        openMenuId,
        setOpenMenuId,
        registerTrigger,
        getTriggerIds,
        focusTrigger,
      }),
      [openMenuId, registerTrigger, getTriggerIds, focusTrigger],
    );

    const Root = asChild ? Slot : "div";

    return (
      <MenubarContext.Provider value={value}>
        <Root
          ref={setRefs}
          role="menubar"
          className={classNames("wim-menubar", localStyles.root, className)}
          onKeyDown={handleKeyDown}
          {...props}
        >
          <Slottable>{children}</Slottable>
        </Root>
      </MenubarContext.Provider>
    );
  },
);

MenubarRoot.displayName = "Menubar";

export type MenubarMenuProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * Stable id for this top-level menu. Used for open-state coordination.
   */
  value: string;
  /**
   * Disables the top-level trigger and prevents opening.
   */
  disabled?: boolean;
};

const MenubarMenu = React.forwardRef<HTMLDivElement, MenubarMenuProps>(
  ({ value, disabled = false, className, children, ...props }, ref) => {
    const { openMenuId, setOpenMenuId } = useMenubar();
    const reactId = useId();
    const triggerId = `wim-menubar-trigger-${value}-${reactId}`;
    const contentId = `wim-menubar-content-${value}-${reactId}`;
    const isOpen = openMenuId === value;

    const open = () => {
      if (!disabled) setOpenMenuId(value);
    };
    const close = () => setOpenMenuId(null);
    const toggle = () => {
      if (disabled) return;
      setOpenMenuId(isOpen ? null : value);
    };

    const menuValue = useMemo(
      () => ({
        menuId: value,
        triggerId,
        contentId,
        isOpen,
        open,
        close,
        toggle,
      }),
      // open/close/toggle close over latest isOpen/disabled
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [value, triggerId, contentId, isOpen, disabled],
    );

    return (
      <MenubarMenuContext.Provider value={menuValue}>
        <div
          ref={ref}
          role="none"
          data-disabled={disabled || undefined}
          className={classNames(localStyles.menu, className)}
          {...props}
        >
          {children}
        </div>
      </MenubarMenuContext.Provider>
    );
  },
);

MenubarMenu.displayName = "Menubar.Menu";

export type MenubarTriggerProps = React.ComponentPropsWithoutRef<"button"> & {
  asChild?: boolean;
};

const MenubarTrigger = React.forwardRef<HTMLButtonElement, MenubarTriggerProps>(
  ({ asChild = false, className, children, onKeyDown, onMouseEnter, ...props }, ref) => {
    const { openMenuId, registerTrigger } = useMenubar();
    const { triggerId, contentId, isOpen, open, toggle, menuId } = useMenubarMenu();
    const disabled = Boolean(props.disabled);

    const setRefs = useCallback(
      (node: HTMLButtonElement | null) => {
        registerTrigger(menuId, node);
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      },
      [registerTrigger, menuId, ref],
    );

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      onKeyDown?.(event);
      if (event.defaultPrevented || disabled) return;
      if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    };

    const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
      onMouseEnter?.(event);
      if (openMenuId && !disabled) open();
    };

    const Component = asChild ? Slot : "button";

    return (
      <Component
        {...props}
        ref={setRefs}
        type={asChild ? undefined : "button"}
        id={triggerId}
        role="menuitem"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={isOpen ? contentId : undefined}
        disabled={disabled}
        className={classNames(localStyles.trigger, isOpen && localStyles.triggerOpen, className)}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        onMouseEnter={handleMouseEnter}
      >
        <Slottable>{children}</Slottable>
      </Component>
    );
  },
);

MenubarTrigger.displayName = "Menubar.Trigger";

export type MenubarContentProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * Horizontal alignment of the floating panel relative to the trigger.
   * @default "start"
   */
  align?: "start" | "end";
};

const MenubarContent = React.forwardRef<HTMLDivElement, MenubarContentProps>(
  ({ align = "start", className, children, ...props }, ref) => {
    const { contentId, triggerId, isOpen } = useMenubarMenu();
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const [wasOpen, setWasOpen] = useState(isOpen);
    const contentRef = useRef<HTMLDivElement | null>(null);

    if (isOpen !== wasOpen) {
      setWasOpen(isOpen);
      setFocusedIndex(isOpen ? 0 : -1);
    }

    const setRefs = useCallback(
      (node: HTMLDivElement | null) => {
        contentRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      },
      [ref],
    );

    useEffect(() => {
      if (!isOpen || focusedIndex < 0) return;
      const items = Array.from(
        contentRef.current?.querySelectorAll<HTMLElement>(
          '[role="menuitem"]:not([aria-disabled="true"])',
        ) ?? [],
      );
      items[focusedIndex]?.focus();
    }, [focusedIndex, isOpen]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      const items = Array.from(
        contentRef.current?.querySelectorAll<HTMLElement>(
          '[role="menuitem"]:not([aria-disabled="true"])',
        ) ?? [],
      );
      if (items.length === 0) return;

      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          setFocusedIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
          break;
        case "ArrowUp":
          event.preventDefault();
          setFocusedIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
          break;
        case "Home":
          event.preventDefault();
          setFocusedIndex(0);
          break;
        case "End":
          event.preventDefault();
          setFocusedIndex(items.length - 1);
          break;
        default:
          break;
      }
    };

    return (
      <Transition
        {...props}
        ref={setRefs}
        show={isOpen}
        preset="fade"
        id={contentId}
        role="menu"
        aria-labelledby={triggerId}
        className={classNames(
          localStyles.content,
          align === "end" ? localStyles.alignEnd : localStyles.alignStart,
          className,
        )}
        onKeyDown={handleKeyDown}
      >
        {children}
      </Transition>
    );
  },
);

MenubarContent.displayName = "Menubar.Content";

export type MenubarItemProps = BaseListItemProps & {
  children: ReactNode;
  onSelect?: () => void;
};

const MenubarItem = React.forwardRef<HTMLDivElement, MenubarItemProps>(
  ({ children, onSelect, onClick, disabled = false, className, ...props }, ref) => {
    const { close } = useMenubarMenu();

    const handleActivate = (event: React.SyntheticEvent) => {
      if (disabled) return;
      event.stopPropagation();
      onSelect?.();
      onClick?.(event as React.MouseEvent<HTMLDivElement>);
      close();
    };

    return (
      <BaseListItem
        {...props}
        ref={ref}
        className={classNames(localStyles.item, className)}
        disabled={disabled}
        role="menuitem"
        tabIndex={-1}
        onClick={handleActivate}
        onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
          if (!disabled && (event.key === "Enter" || event.key === " ")) {
            event.preventDefault();
            handleActivate(event);
          }
        }}
      >
        {children}
      </BaseListItem>
    );
  },
);

MenubarItem.displayName = "Menubar.Item";

export type MenubarSeparatorProps = React.ComponentPropsWithoutRef<"div">;

const MenubarSeparator = React.forwardRef<HTMLDivElement, MenubarSeparatorProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="separator"
      className={classNames(localStyles.separator, className)}
      {...props}
    />
  ),
);

MenubarSeparator.displayName = "Menubar.Separator";

export interface MenubarComponent
  extends React.ForwardRefExoticComponent<
    MenubarProps & React.RefAttributes<HTMLDivElement>
  > {
  Menu: typeof MenubarMenu;
  Trigger: typeof MenubarTrigger;
  Content: typeof MenubarContent;
  Item: typeof MenubarItem;
  Separator: typeof MenubarSeparator;
}

export const Menubar = MenubarRoot as MenubarComponent;
Menubar.Menu = MenubarMenu;
Menubar.Trigger = MenubarTrigger;
Menubar.Content = MenubarContent;
Menubar.Item = MenubarItem;
Menubar.Separator = MenubarSeparator;

export default Menubar;
