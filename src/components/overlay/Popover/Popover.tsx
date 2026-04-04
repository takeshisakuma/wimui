import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import {
  FloatingPortal,
  useMergeRefs,
  Placement,
  ReferenceType,
  FloatingContext,
  FloatingFocusManager,
} from "@floating-ui/react";
import classNames from "classnames";
import { Transition } from "../../layout/Transition/Transition";
import { Icon } from "../../media/Icon/Icon";
import "./popover.scss";

import { useFloatingElement } from "../../_internal/useFloatingElement";

type FloatingRefs = ReturnType<typeof useFloatingElement>["refs"];

type PopoverContextValue = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  refs: FloatingRefs;
  floatingStyles: React.CSSProperties;
  context: FloatingContext<ReferenceType>;
  getReferenceProps: (
    userProps?: React.HTMLProps<Element>,
  ) => Record<string, unknown>;
  getFloatingProps: (
    userProps?: React.HTMLProps<HTMLElement>,
  ) => Record<string, unknown>;
  close: () => void;
};

// Context to share state between components
const PopoverContext = React.createContext<PopoverContextValue | null>(null);

export type PopoverProps = {
  children: ReactNode;
  className?: string;
  /**
   * If true, the popover component will manage its own open state.
   */
  defaultOpen?: boolean;
  /**
   * If provided, controls the open state.
   */
  open?: boolean;
  /**
   * Callback when open state changes.
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Preferred placement of the popover.
   */
  placement?: Placement;
};

export const Popover = ({
  children,
  className,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  placement = "bottom-start",
}: PopoverProps) => {
  const {
    isOpen: open,
    setOpen: onOpenChangeInternal,
    refs,
    floatingStyles,
    context,
    getReferenceProps,
    getFloatingProps,
  } = useFloatingElement({
    placement,
    open: controlledOpen,
    defaultOpen,
    onOpenChange,
    trigger: "click",
  });

  const close = () => onOpenChangeInternal(false);

  return (
    <PopoverContext.Provider
      value={{
        open,
        onOpenChange: onOpenChangeInternal,
        refs,
        floatingStyles,
        context,
        getReferenceProps,
        getFloatingProps,
        close,
      }}
    >
      <div className={classNames("wim-popover", className)}>{children}</div>
    </PopoverContext.Provider>
  );
};


export type PopoverTriggerProps = {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
};

export const PopoverTrigger = React.forwardRef<
  HTMLElement,
  PopoverTriggerProps & React.HTMLProps<HTMLElement>
>(({ children, className, asChild, ...props }, propRef) => {
  const context = React.useContext(PopoverContext);

  if (context == null) {
    throw new Error("Popover components must be wrapped in <Popover />");
  }

  const childrenRef = (
    children as React.ReactElement & { ref?: React.Ref<unknown> }
  ).ref;
  const ref = useMergeRefs([
    context.refs.setReference,
    propRef,
    childrenRef ?? null,
  ]);

  if (asChild && React.isValidElement(children)) {
    const childProps = children.props as Record<string, unknown>;
    // eslint-disable-next-line react-hooks/refs
    const referenceProps = context.getReferenceProps({
      ref,
      ...props,
      ...(childProps as React.HTMLProps<Element>),
      className: classNames(
        className,
        childProps.className as string | undefined,
      ),
    }) as React.HTMLAttributes<Element>;
    return React.cloneElement(children, {
      ...referenceProps,
      "data-state": context.open ? "open" : "closed",
    } as React.HTMLAttributes<Element>);
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type="button"
      className={classNames("wim-popover-trigger", className)}
      data-state={context.open ? "open" : "closed"}
      {...(context.getReferenceProps(
        props,
      ) as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
});

PopoverTrigger.displayName = "PopoverTrigger";

export type PopoverContentProps = {
  children: ReactNode;
  className?: string;
  align?: "left" | "right" | "center";
  side?: "top" | "bottom";
  /** Whether the popover is modal. If true, focus will be trapped inside and interaction with outside will be disabled. */
  modal?: boolean;
};

export const PopoverContent = React.forwardRef<
  HTMLDivElement,
  PopoverContentProps & React.HTMLAttributes<HTMLDivElement>
>(({ children, className, align: _align, side: _side, style, modal = false, ...props }, propRef) => {
  const context = React.useContext(PopoverContext);

  if (context == null) {
    throw new Error("Popover components must be wrapped in <Popover />");
  }

  const { open, refs, floatingStyles, getFloatingProps, context: floatingContext } = context;
  const ref = useMergeRefs([refs.setFloating, propRef]);

  return (
    <FloatingPortal>
      <Transition
        show={open}
        enter="fade-enter"
        enterFrom="fade-enter-from"
        enterTo="fade-enter-to"
        leave="fade-leave"
        leaveFrom="fade-leave-from"
        leaveTo="fade-leave-to"
      >
        <FloatingFocusManager context={floatingContext} modal={modal}>
          <div
            ref={ref}
            style={{ ...floatingStyles, ...style }}
            className={classNames("wim-popover-content", className)}
            role="dialog"
            {...(getFloatingProps(props) as React.HTMLAttributes<HTMLDivElement>)}
          >
            {children}
          </div>
        </FloatingFocusManager>
      </Transition>
    </FloatingPortal>
  );
});

PopoverContent.displayName = "PopoverContent";

export const PopoverClose = ({
  children,
  className,
  asChild,
  ariaLabel,
  ...props
}: React.ComponentPropsWithoutRef<"button"> & {
  asChild?: boolean;
  ariaLabel?: string;
}) => {
  const { t } = useTranslation("common");
  const resolvedAriaLabel = ariaLabel ?? t("a11y.close");
  const context = React.useContext(PopoverContext);
  if (!context) return null;

  const { close } = context;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    close();
    props.onClick?.(e);
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<Record<string, unknown>>, {
      onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
        const child = children as React.ReactElement<{
          onClick?: React.MouseEventHandler;
        }>;
        child.props.onClick?.(e);
        handleClick(e);
      },
      className: classNames(
        className,
        (children as React.ReactElement<{ className?: string }>).props.className,
      ),
    });
  }

  return (
    <button
      type="button"
      className={classNames("wim-popover-close", className)}
      onClick={handleClick}
      aria-label={resolvedAriaLabel}
      {...props}
    >
      {children || <Icon name="CloseSmallIcon" width={15} height={15} />}
    </button>
  );
};
