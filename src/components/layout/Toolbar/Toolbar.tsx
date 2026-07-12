import React, { useCallback, useRef } from "react";
import classNames from "classnames";
import { Slot } from "@radix-ui/react-slot";
import type { ComponentSizeBasic } from "@/types/tokens";
import localStyles from "./toolbar.module.scss";

export type ToolbarProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * If true, the component will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /**
   * Visual density for padding and gap. Cascades to `--wim-toolbar-*` CSS variables.
   * @default "md"
   */
  size?: ComponentSizeBasic;
  /**
   * Layout axis of the toolbar.
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";
};

const FOCUSABLE =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Toolbar is a layout container for clustered actions (IconButton, ToggleGroup,
 * Button). It provides `role="toolbar"`, size density tokens, and arrow-key
 * roving focus between focusable children.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 * - Does not own action semantics — compose IconButton / ToggleGroup / Button
 * - Separators: use Toolbar.Separator (decorative); groups use Toolbar.Group
 */
const ToolbarRoot = React.forwardRef<HTMLDivElement, ToolbarProps>(
  (
    {
      asChild = false,
      size = "md",
      orientation = "horizontal",
      className,
      children,
      onKeyDown,
      ...props
    },
    ref,
  ) => {
    const rootRef = useRef<HTMLDivElement | null>(null);
    const setRefs = useCallback(
      (node: HTMLDivElement | null) => {
        rootRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      },
      [ref],
    );

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(event);
      if (event.defaultPrevented) return;

      const root = rootRef.current;
      if (!root) return;

      const items = Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => !el.closest('[aria-hidden="true"]') && root.contains(el),
      );
      if (items.length === 0) return;

      const currentIndex = items.indexOf(document.activeElement as HTMLElement);
      if (currentIndex < 0) return;

      const horizontal = orientation === "horizontal";
      const nextKey = horizontal ? "ArrowRight" : "ArrowDown";
      const prevKey = horizontal ? "ArrowLeft" : "ArrowUp";

      let nextIndex = currentIndex;
      if (event.key === nextKey) {
        event.preventDefault();
        nextIndex = (currentIndex + 1) % items.length;
      } else if (event.key === prevKey) {
        event.preventDefault();
        nextIndex = (currentIndex - 1 + items.length) % items.length;
      } else if (event.key === "Home") {
        event.preventDefault();
        nextIndex = 0;
      } else if (event.key === "End") {
        event.preventDefault();
        nextIndex = items.length - 1;
      } else {
        return;
      }

      items[nextIndex]?.focus();
    };

    const Root = asChild ? Slot : "div";

    return (
      <Root
        ref={setRefs}
        role="toolbar"
        aria-orientation={orientation}
        data-size={size}
        data-orientation={orientation}
        className={classNames(
          "wim-toolbar",
          localStyles.root,
          localStyles[`size-${size}`],
          localStyles[orientation],
          className,
        )}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {children}
      </Root>
    );
  },
);

ToolbarRoot.displayName = "Toolbar";

export type ToolbarGroupProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * If true, the group will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
};

/**
 * Logical cluster of related toolbar controls (`role="group"`).
 */
export const ToolbarGroup = React.forwardRef<HTMLDivElement, ToolbarGroupProps>(
  ({ asChild = false, className, children, ...props }, ref) => {
    const Root = asChild ? Slot : "div";
    return (
      <Root
        ref={ref}
        role="group"
        className={classNames(localStyles.group, className)}
        {...props}
      >
        {children}
      </Root>
    );
  },
);

ToolbarGroup.displayName = "Toolbar.Group";

export type ToolbarSeparatorProps = React.ComponentPropsWithoutRef<"div">;

/**
 * Visual separator between toolbar groups. Orientation follows the parent toolbar.
 */
export const ToolbarSeparator = React.forwardRef<HTMLDivElement, ToolbarSeparatorProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="separator"
      aria-hidden="true"
      className={classNames(localStyles.separator, className)}
      {...props}
    />
  ),
);

ToolbarSeparator.displayName = "Toolbar.Separator";

export interface ToolbarComponent
  extends React.ForwardRefExoticComponent<
    ToolbarProps & React.RefAttributes<HTMLDivElement>
  > {
  Group: typeof ToolbarGroup;
  Separator: typeof ToolbarSeparator;
}

export const Toolbar = ToolbarRoot as ToolbarComponent;
Toolbar.Group = ToolbarGroup;
Toolbar.Separator = ToolbarSeparator;

export default Toolbar;
