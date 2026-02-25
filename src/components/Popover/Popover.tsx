import React, { useState, ReactNode } from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
  useMergeRefs,
  Placement,
  ReferenceType,
  FloatingContext,
} from "@floating-ui/react";
import classNames from "classnames";
import { Transition } from "../Transition/Transition";
import { Icon } from "../Icon/Icon";
import "./popover.scss";

type PopoverContextValue = {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  refs: any;
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
  isOpen?: boolean;
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
  isOpen: controlledOpen,
  onOpenChange,
  placement = "bottom-start",
}: PopoverProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isOpen = controlledOpen ?? uncontrolledOpen;

  const setOpen = (newOpen: boolean) => {
    if (controlledOpen === undefined) {
      setUncontrolledOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  const { refs, floatingStyles, context } = useFloating<ReferenceType>({
    open: isOpen,
    onOpenChange: setOpen,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [offset(8), flip(), shift({ padding: 10 })],
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  const close = () => setOpen(false);

  return (
    <PopoverContext.Provider
      value={{
        isOpen,
        setOpen,
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
      "data-state": context.isOpen ? "open" : "closed",
    } as React.HTMLAttributes<Element>);
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type="button"
      className={classNames("wim-popover-trigger", className)}
      data-state={context.isOpen ? "open" : "closed"}
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
};

export const PopoverContent = React.forwardRef<
  HTMLDivElement,
  PopoverContentProps & React.HTMLAttributes<HTMLDivElement>
>(({ children, className, align, side, style, ...props }, propRef) => {
  const context = React.useContext(PopoverContext);

  if (context == null) {
    throw new Error("Popover components must be wrapped in <Popover />");
  }

  const { isOpen, refs, floatingStyles, getFloatingProps } = context;
  const ref = useMergeRefs([refs.setFloating, propRef]);

  // align and side are handled by Popover's placement prop now, but we keep them for backward compatibility in stories
  // Map old align/side to placement if needed? Actually, let's just use the current placement.

  return (
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
        <div
          ref={ref}
          style={{ ...floatingStyles, ...style }}
          className={classNames("wim-popover-content", className)}
          role="dialog"
          {...(getFloatingProps(props) as React.HTMLAttributes<HTMLDivElement>)}
        >
          {children}
        </div>
      </Transition>
    </FloatingPortal>
  );
});

PopoverContent.displayName = "PopoverContent";

export const PopoverClose = ({
  children,
  className,
  asChild,
  ...props
}: React.ComponentPropsWithoutRef<"button"> & {
  asChild?: boolean;
}) => {
  const context = React.useContext(PopoverContext);
  if (!context) return null;

  const { close } = context;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    close();
    props.onClick?.(e);
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onClick: (e: React.MouseEvent) => {
        const child = children as React.ReactElement<{
          onClick?: React.MouseEventHandler;
        }>;
        child.props.onClick?.(e);
        handleClick(e as any);
      },
      className: classNames(
        className,
        (children as React.ReactElement<any>).props.className,
      ),
    });
  }

  return (
    <button
      type="button"
      className={classNames("wim-popover-close", className)}
      onClick={handleClick}
      aria-label="Close"
      {...props}
    >
      {children || <Icon name="CloseSmallIcon" width={15} height={15} />}
    </button>
  );
};
