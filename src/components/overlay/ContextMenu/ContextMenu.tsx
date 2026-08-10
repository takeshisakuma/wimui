import React, {
  useState,
  useRef,
  ReactNode,
  useContext,
} from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
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
} from "@floating-ui/react";
import { Transition } from "../../layout/Transition/Transition";
import { BaseListItem } from "../../_internal/BaseListItem";
import { useMergedRef } from "../../../hooks/useMergedRef";
import styles from "./context-menu.module.scss";

export type ContextMenuProps = {
  /**
   * Element that opens the context menu on right-click.
   */
  children: ReactNode;
  /** Menu items to display in the context menu */
  menu: ReactNode;
  /**
   * Additional CSS class name for the container.
   */
  className?: string;
  /** Disable the context menu */
  disabled?: boolean;
  /**
   * If true, merge trigger props onto the child element.
   */
  asChild?: boolean;
};

// Context to share state between components
const ContextMenuContext = React.createContext<{
  activeIndex: number | null;
  getItemProps: (userProps?: React.HTMLProps<HTMLElement> & { index?: number }) => Record<string, unknown>;
} | null>(null);

const ContextMenuInner = ({
  children,
  menu,
  className,
  disabled = false,
  asChild = false,
}: ContextMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const setContainerRef = useMergedRef(containerRef);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: (open) => {
      setIsOpen(open);
      if (!open) {
        setActiveIndex(null);
        setIsKeyboardOpen(false);
      }
    },
    strategy: "fixed",
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
    e.preventDefault();
    if (disabled) return;
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

  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      ref={setContainerRef}
      className={classNames(
        "wim-context-menu",
        // asChild は利用者の要素にマージされるので、こちらの display を
        // 持ち込まない（`<tr>` に inline-block が乗ると表が崩れる）
        !asChild && styles.container,
        disabled && styles.disabled,
        className,
      )}
      onContextMenu={handleContextMenu}
      onKeyDown={handleKeyDown}
      // role="button" を付けると内包する任意の children（Button 等）で
      // nested-interactive 違反になるため、フォーカス可能な汎用領域に留める
      // （aria-haspopup はロール無しでは不許可属性なので付けない）
      tabIndex={disabled ? -1 : 0}
      data-testid="context-menu-trigger"
    >
      <Slottable>{children}</Slottable>
      <FloatingPortal>
        <Transition
          show={isOpen}
          preset="fade"
        >
          <FloatingFocusManager
            context={context}
            modal={true}
            initialFocus={isKeyboardOpen ? (activeIndex ?? 0) : -1}
          >
            <div
              ref={refs.setFloating} // eslint-disable-line react-hooks/refs
              className={styles.menu}
              style={floatingStyles}
              {...(getFloatingProps({
                onClick: handleClose,
                onKeyDown(e: React.KeyboardEvent) {
                  if (e.key === "Escape") handleClose();
                },
              }) as React.HTMLAttributes<HTMLDivElement>)}
            >
              <ContextMenuContext.Provider value={{ activeIndex, getItemProps }}>
                <FloatingList elementsRef={elementsRef}>
                  {menu}
                </FloatingList>
              </ContextMenuContext.Provider>
            </div>
          </FloatingFocusManager>
        </Transition>
      </FloatingPortal>
    </Comp>
  );
};

export type ContextMenuItemProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
  danger?: boolean;
  /**
   * If true, merge item props onto the child (keep a wrapping `<li role="none">` for valid menu markup).
   */
  asChild?: boolean;
};


export const ContextMenuItem = ({
  children,
  onClick,
  disabled = false,
  className,
  icon,
  danger = false,
  asChild = false,
}: ContextMenuItemProps) => {
  const { ref, index } = useListItem();
  const context = useContext(ContextMenuContext);

  const handleClick = () => {
    if (disabled) return;

    if (onClick) {
      onClick();
    }
  };

  const itemProps = context ? context.getItemProps({
    index,
    onClick: () => handleClick(),
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleClick();
      }
    },
  }) : {};

  const sharedProps = {
    ref,
    className: classNames(
      styles.item,
      className,
    ),
    disabled,
    danger,
    icon,
    role: "menuitem" as const,
    tabIndex: context?.activeIndex === index ? 0 : -1,
    ...itemProps,
  };

  if (asChild) {
    return (
      <li role="none">
        <BaseListItem asChild {...sharedProps}>
          {children}
        </BaseListItem>
      </li>
    );
  }

  return (
    <BaseListItem {...sharedProps}>
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
      className={classNames(styles.divider, className)}
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
    <div role="group" className={className} data-testid="context-menu-group">
      {title && <div className={styles.groupTitle} data-testid="context-menu-group-title">{title}</div>}
      {children}
    </div>
  );
};
export interface ContextMenuComponent extends React.FC<ContextMenuProps> {
  Item: typeof ContextMenuItem;
  Divider: typeof ContextMenuDivider;
  Group: typeof ContextMenuGroup;
}

const ContextMenuCompound: ContextMenuComponent = (props) => <ContextMenuInner {...props} />;
ContextMenuCompound.displayName = "ContextMenu";
ContextMenuCompound.Item = ContextMenuItem;
ContextMenuCompound.Divider = ContextMenuDivider;
ContextMenuCompound.Group = ContextMenuGroup;

export { ContextMenuCompound as ContextMenu };
export default ContextMenuCompound;
