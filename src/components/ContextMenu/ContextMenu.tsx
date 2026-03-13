import React, {
  useState,
  useRef,
  ReactNode,
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

export const ContextMenu = ({
  children,
  menu,
  className,
  disabled = false,
}: ContextMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      flip(),
      shift({ padding: 10 }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "menu" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    dismiss,
    role,
  ]);

  const handleContextMenu = (e: React.MouseEvent) => {
    if (disabled) return;

    e.preventDefault();

    refs.setReference({
      getBoundingClientRect() {
        return {
          width: 0,
          height: 0,
          x: e.clientX,
          y: e.clientY,
          top: e.clientY,
          left: e.clientX,
          right: e.clientX,
          bottom: e.clientY,
        };
      },
    });

    setIsOpen(true);
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
          <FloatingFocusManager context={context} modal={true}>
            {/* eslint-disable react-hooks/refs */}
            <div
              ref={refs.setFloating}
              className="wim-context-menu"
              style={floatingStyles}
              {...getFloatingProps({
                onClick: handleClose,
                onKeyDown(e) {
                  if (e.key === "Escape") handleClose();
                },
              })}
            >
              {menu}
            </div>
            {/* eslint-enable react-hooks/refs */}
          </FloatingFocusManager>
        </Transition>
      </FloatingPortal>
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
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (disabled) return;

    if (onClick) {
      onClick();
    }
  };

  return (
    <BaseListItem
      className={classNames("wim-context-menu-item", className)}
      disabled={disabled}
      danger={danger}
      icon={icon}
      onClick={(e: React.MouseEvent) => handleClick(e)}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick(e as unknown as React.MouseEvent);
        }
      }}
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
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
