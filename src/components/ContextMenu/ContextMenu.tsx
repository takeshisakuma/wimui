import React, {
  useState,
  useRef,
  ReactNode,
  useContext,
} from "react";
import classNames from "classnames";
import {
  useFloating,
  autoUpdate,
  flip,
  shift,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
  FloatingFocusManager,
  useListNavigation,
  useListItem,
  FloatingList,
  useMergeRefs,
} from "@floating-ui/react";
import { Transition } from "../Transition/Transition";
import { BaseListItem } from "../_internal/BaseListItem";
import "./contextMenu.scss";

export type ContextMenuProps = {
  children: ReactNode;
  /** Menu items to display in the context menu */
  menu: ReactNode;
  className?: string;
  /** Disable the context menu */
  disabled?: boolean;
};

// Context to share state between components
const ContextMenuContext = React.createContext<{
  activeIndex: number | null;
  getItemProps: (userProps?: React.HTMLProps<HTMLElement> & { index?: number }) => Record<string, unknown>;
} | null>(null);

export const ContextMenu = ({
  children,
  menu,
  className,
  disabled = false,
}: ContextMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  const { refs, floatingStyles, context, isPositioned } = useFloating({
    open: isOpen,
    onOpenChange: (open) => {
      setIsOpen(open);
      if (!open) {
        setActiveIndex(null);
        setIsKeyboardOpen(false);
      }
    },
    middleware: [
      flip(),
      shift({ padding: 10 }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "menu" });
  const listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    onNavigate: setActiveIndex,
    loop: true,
  });

  const { getFloatingProps, getItemProps } = useInteractions([
    dismiss,
    role,
    listNavigation,
  ]);

  const openMenu = (x: number, y: number, isKeyboard: boolean) => {
    refs.setReference({
      getBoundingClientRect() {
        return {
          width: 0,
          height: 0,
          x,
          y,
          top: y,
          left: x,
          right: x,
          bottom: y,
        };
      },
    });

    setIsKeyboardOpen(isKeyboard);
    setIsOpen(true);
    setActiveIndex(0);
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    if (disabled) return;

    e.preventDefault();
    // Default context menu triggered by keyboard usually has clientX/Y as 0 or center of element
    const isKeyboard = e.clientX === 0 && e.clientY === 0;
    openMenu(e.clientX, e.clientY, isKeyboard);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        openMenu(rect.left + rect.width / 2, rect.top + rect.height / 2, true);
      }
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Merge refs for the container
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={classNames("wim-context-menu-container", className)}
      onContextMenu={handleContextMenu}
      onKeyDown={handleKeyDown}
      tabIndex={disabled ? -1 : 0}
      role="button"
      aria-haspopup="menu"
    >
      {children}
      <FloatingPortal>
        <Transition
          show={isOpen}
          enter="fade-enter"
          enterFrom="fade-enter-from"
          enterTo="fade-enter-to"
          leave="fade-leave"
          leaveFrom="fade-leave-from"
          leaveTo="fade-leave-to"
        >
          <FloatingFocusManager 
            context={context} 
            modal={true} 
            initialFocus={isKeyboardOpen ? (activeIndex ?? 0) : -1}
          >
            <ContextMenuContent 
              isOpen={isOpen}
              refs={refs}
              floatingStyles={floatingStyles}
              isPositioned={isPositioned}
              getFloatingProps={getFloatingProps}
              handleClose={handleClose}
              activeIndex={activeIndex}
              getItemProps={getItemProps}
              elementsRef={elementsRef}
              menu={menu}
            />
          </FloatingFocusManager>
        </Transition>
      </FloatingPortal>
    </div>
  );
};

type ContextMenuContentProps = {
  isOpen: boolean;
  refs: ReturnType<typeof useFloating>["refs"];
  floatingStyles: React.CSSProperties;
  isPositioned: boolean;
  getFloatingProps: (props?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
  handleClose: () => void;
  activeIndex: number | null;
  getItemProps: (props?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
  elementsRef: React.RefObject<(HTMLElement | null)[]>;
  menu: ReactNode;
};

const ContextMenuContent = ({
  isOpen,
  refs,
  floatingStyles,
  isPositioned,
  getFloatingProps,
  handleClose,
  activeIndex,
  getItemProps,
  elementsRef,
  menu,
}: ContextMenuContentProps) => {
  const internalRef = useRef<HTMLDivElement>(null);
  const combinedRef = useMergeRefs([refs.setFloating, internalRef]);

  React.useLayoutEffect(() => {
    const el = internalRef.current;
    if (!el || !("showPopover" in el)) return;

    if (isOpen && isPositioned) {
      // Small delay via RAF to ensure the initial layout/styles are committed
      const frame = requestAnimationFrame(() => {
        try { el.showPopover(); } catch { /* popover not supported */ }
      });
      return () => cancelAnimationFrame(frame);
    } else if (!isOpen) {
      try { el.hidePopover(); } catch { /* popover not supported */ }
    }
  }, [isOpen, isPositioned]);

  return (
    <div
      ref={combinedRef}
      className="wim-context-menu"
      style={floatingStyles}
      data-positioned={isPositioned}
      {...(getFloatingProps({
        onClick: handleClose,
        onKeyDown(e: React.KeyboardEvent) {
          if (e.key === "Escape") handleClose();
        },
      }) as React.HTMLAttributes<HTMLDivElement>)}
      {...({ popover: "manual" } as React.HTMLAttributes<HTMLDivElement>)}
    >
      <ContextMenuContext.Provider value={{ activeIndex, getItemProps }}>
        <FloatingList elementsRef={elementsRef}>
          {menu}
        </FloatingList>
      </ContextMenuContext.Provider>
    </div>
  );
};

export type ContextMenuItemProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
  danger?: boolean;
};


export const ContextMenuItem = ({
  children,
  onClick,
  disabled = false,
  className,
  icon,
  danger = false,
}: ContextMenuItemProps) => {
  const { ref, index } = useListItem();
  const context = useContext(ContextMenuContext);

  const handleClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    if (disabled) return;

    if (onClick) {
      onClick();
    }
  };

  const itemProps = context ? context.getItemProps({
    index,
    onClick: (e: React.SyntheticEvent) => handleClick(e),
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleClick(e);
      }
    },
  }) : {};

  return (
    <BaseListItem
      ref={ref}
      className={classNames(
        "wim-context-menu-item", 
        className,
        context?.activeIndex === index && "wim-base-list-item--active"
      )}
      disabled={disabled}
      danger={danger}
      icon={icon}
      role="menuitem"
      tabIndex={context?.activeIndex === index ? 0 : -1}
      {...itemProps}
    >
      {children}
    </BaseListItem>
  );
};

export type ContextMenuDividerProps = {
  className?: string;
};

export const ContextMenuDivider = ({ className }: ContextMenuDividerProps) => {
  return (
    <div
      className={classNames("wim-context-menu-divider", className)}
      role="separator"
    />
  );
};

export type ContextMenuGroupProps = {
  children: ReactNode;
  title?: string;
  className?: string;
};

export const ContextMenuGroup = ({
  children,
  title,
  className,
}: ContextMenuGroupProps) => {
  return (
    <div className={classNames("wim-context-menu-group", className)}>
      {title && <div className="wim-context-menu-group__title">{title}</div>}
      {children}
    </div>
  );
};

