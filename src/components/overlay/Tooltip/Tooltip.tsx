import React, { useState, useLayoutEffect, ReactNode, useRef } from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
  FloatingArrow,
  arrow,
  Placement,
  safePolygon,
  useMergeRefs,
  UseFloatingReturn,
  FloatingContext,
  ReferenceType,
} from "@floating-ui/react";
import classNames from "classnames";
import styles from "./tooltip.module.scss";

type TooltipContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  refs: UseFloatingReturn<ReferenceType>["refs"];
  floatingStyles: React.CSSProperties;
  context: FloatingContext<ReferenceType>;
  getReferenceProps: (
    userProps?: React.HTMLProps<Element>,
  ) => Record<string, unknown>;
  getFloatingProps: (
    userProps?: React.HTMLProps<HTMLElement>,
  ) => Record<string, unknown>;
  arrowRef: React.RefObject<SVGSVGElement | null>;
  placement: string;
  variant: "default" | "glass";
  /** ツールチップの文。名前と同じときは説明として結ばない（T398）。 */
  descriptionText: string;
  setDescriptionText: (text: string) => void;
  floatingId: string | undefined;
};

function normalizeText(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function textOf(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (React.isValidElement(node)) {
    const props = node.props as { children?: ReactNode };
    return textOf(props.children);
  }
  return "";
}

/** 引き金のアクセシブルな名前。`aria-labelledby`、`aria-label`、中の文字の順。 */
function triggerName(props: Record<string, unknown>, children: ReactNode): string {
  const labelledBy = props["aria-labelledby"];
  if (typeof labelledBy === "string" && labelledBy.trim() && typeof document !== "undefined") {
    const text = labelledBy
      .split(/\s+/)
      .filter(Boolean)
      .map((id) => document.getElementById(id)?.textContent ?? "")
      .join(" ");
    return normalizeText(text);
  }
  const label = props["aria-label"];
  if (typeof label === "string") return normalizeText(label);
  return normalizeText(textOf(children));
}

/**
 * 名前とツールチップの文が同じとき、ツールチップ自身の id を `aria-describedby` から外す。
 * 利用者が別に渡した id は残す。
 */
function withoutDuplicateDescription(
  props: Record<string, unknown>,
  children: ReactNode,
  description: string,
  floatingId: string | undefined,
) {
  if (!description || !floatingId) return;
  const describedBy = props["aria-describedby"];
  if (typeof describedBy !== "string" || !describedBy.trim()) return;
  const name = triggerName(props, children);
  if (!name || name !== description) return;
  const ids = describedBy.split(/\s+/).filter((id) => id && id !== floatingId);
  if (ids.length > 0) props["aria-describedby"] = ids.join(" ");
  else delete props["aria-describedby"];
}

// Context to share state between components
const TooltipContext = React.createContext<TooltipContextValue | null>(null);

export type TooltipProps = {
  /**
   * Tooltip parts (TooltipTrigger and TooltipContent).
   */
  children: ReactNode;
  /**
   * Additional CSS class name for the container.
   */
  className?: string;
  /**
   * Delay before showing the tooltip in ms.
   */
  delay?: number;
  /**
   * If provided, controls the open state.
   */
  open?: boolean;
  /**
   * Callback when open state changes.
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Preferred placement of the tooltip.
   */
  placement?: Placement;
  /**
   * The variant of the tooltip content.
   */
  variant?: "default" | "glass";
};

export const Tooltip = ({
  children,
  className,
  delay = 200,
  open: controlledOpen,
  onOpenChange,
  placement = "top",
  variant = "default",
}: TooltipProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const [descriptionText, setDescriptionText] = useState("");

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = (newOpen: boolean) => {
    if (controlledOpen === undefined) {
      setUncontrolledOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  const arrowRef = useRef<SVGSVGElement>(null);

  const {
    refs,
    floatingStyles,
    context,
    placement: finalPlacement,
  } = useFloating<ReferenceType>({
    open,
    onOpenChange: setOpen,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(8),
      flip({
        fallbackAxisSideDirection: "start",
      }),
      shift(),
      // eslint-disable-next-line react-hooks/refs
      arrow({
        element: arrowRef,
      }),
    ],
  });

  const hover = useHover(context, {
    move: false,
    delay: { open: delay, close: 100 },
    handleClose: safePolygon(),
  });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]) as {
    getReferenceProps: (
      userProps?: React.HTMLProps<Element>,
    ) => Record<string, unknown>;
    getFloatingProps: (
      userProps?: React.HTMLProps<HTMLElement>,
    ) => Record<string, unknown>;
  };

  return (
    <TooltipContext.Provider
      value={{
        open,
        setOpen,
        refs,
        floatingStyles,
        context,
        getReferenceProps,
        getFloatingProps,
        arrowRef,
        placement: finalPlacement,
        variant,
        descriptionText,
        setDescriptionText,
        floatingId: context.floatingId,
      }}
    >
      <div className={classNames("wim-tooltip", styles.root, className)}>
        {children}
      </div>
    </TooltipContext.Provider>
  );
};

export type TooltipTriggerProps = {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
};

export const TooltipTrigger = React.forwardRef<
  HTMLElement,
  TooltipTriggerProps & React.HTMLProps<HTMLElement>
>(({ children, className, asChild, ...props }, propRef) => {
  const context = React.useContext(TooltipContext);

  if (context == null) {
    throw new Error("Tooltip components must be wrapped in <Tooltip />");
  }

  // React 19 では ref は子の props に入る（`element.ref` は非推奨で、読むと警告が出る）。
  const childrenRef = React.isValidElement(children)
    ? ((children.props as { ref?: React.Ref<unknown> }).ref ??
      (children as React.ReactElement & { ref?: React.Ref<unknown> }).ref)
    : undefined;
  const ref = useMergeRefs([
    context.refs.setReference,
    propRef,
    childrenRef ?? null,
  ]);

  if (asChild && React.isValidElement(children)) {
    const childProps = children.props as Record<string, unknown>;
    // eslint-disable-next-line react-hooks/refs
    const referenceProps = context.getReferenceProps({
      ...props,
      ...(childProps as React.HTMLProps<Element>),
      // 子の props のあとに置く。React 19 では子の ref も props に入っていて、先に置くと、
      // 位置合わせに使う ref が子の ref で上書きされ、面が画面の左上に出る（Popover の T416 と同じ形）。
      // 子の ref は上の useMergeRefs で束ねてある。
      ref,
      className: classNames(
        className,
        childProps.className as string | undefined,
      ),
    }) as Record<string, unknown>;
    withoutDuplicateDescription(
      referenceProps,
      children,
      context.descriptionText,
      context.floatingId,
    );
    return React.cloneElement(children, {
      ...referenceProps,
      "data-state": context.open ? "open" : "closed",
    } as React.HTMLAttributes<Element>);
  }

  const referenceProps = context.getReferenceProps(props) as Record<string, unknown>;
  withoutDuplicateDescription(
    referenceProps,
    children,
    context.descriptionText,
    context.floatingId,
  );

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type="button"
      className={classNames(styles.trigger, className)}
      data-state={context.open ? "open" : "closed"}
      {...(referenceProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
});

TooltipTrigger.displayName = "TooltipTrigger";

export type TooltipContentProps = {
  children: ReactNode;
  className?: string;
};

export const TooltipContent = React.forwardRef<
  HTMLDivElement,
  TooltipContentProps & React.HTMLProps<HTMLDivElement>
>(({ children, className, style, ...props }, propRef) => {
  const context = React.useContext(TooltipContext);

  if (context == null) {
    throw new Error("Tooltip components must be wrapped in <Tooltip />");
  }

  const {
    context: floatingContext,
    open,
    refs,
    floatingStyles,
    getFloatingProps,
    arrowRef,
    setDescriptionText,
  } = context;
  const ref = useMergeRefs([refs.setFloating, propRef]);
  const text = normalizeText(textOf(children));
  useLayoutEffect(() => {
    setDescriptionText(text);
  }, [text, setDescriptionText]);

  if (!open) return null;

  return (
    <FloatingPortal>
      <div
        ref={ref}
        style={{ ...floatingStyles, ...style }}
        className={classNames(
          styles.content,
          styles[context.variant],
          className
        )}
        {...(getFloatingProps(props) as React.HTMLAttributes<HTMLDivElement>)}
      >
        {children}
        <FloatingArrow
          ref={arrowRef}
          context={floatingContext}
          fill={context.variant === "glass" ? "var(--wim-color-glass-bg)" : "var(--wim-comp-tooltip-bg)"}
          strokeWidth={context.variant === "glass" ? 1 : 0}
          stroke={context.variant === "glass" ? "var(--wim-color-glass-border)" : "transparent"}
          className={styles.arrow}
        />
      </div>
    </FloatingPortal>
  );
});

TooltipContent.displayName = "TooltipContent";

