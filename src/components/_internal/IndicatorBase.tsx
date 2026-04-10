import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { ComponentSize, IndicatorIntent, IndicatorVariant } from "../../types/tokens";

/**
 * Props for the IndicatorBase component.
 */
export type IndicatorBaseProps<C extends React.ElementType = "span"> = {
  /**
   * If true, the indicator will be rendered as its child, merging its props onto that child.
   * @default false
   */
  asChild?: boolean;
  /**
   * Content to be rendered inside the indicator.
   */
  children?: React.ReactNode;
  /**
   * Optional icon to display before the children.
   */
  icon?: React.ReactNode;
  /**
   * Semantic intent for color coding.
   * @default "primary"
   */
  intent?: IndicatorIntent;
  /**
   * Visual variant (solid, outline, subtle).
   * @default "solid"
   */
  variant?: IndicatorVariant;
  /**
   * Size of the indicator.
   * @default "md"
   */
  size?: ComponentSize;
  /**
   * Mapping of class names from a CSS module to apply theme-specific styling.
   */
  styles?: { [key: string]: string };
  /**
   * The element type to render.
   * @default "span"
   */
  as?: C;
  /**
   * Additional CSS class name.
   */
  className?: string;
} & React.ComponentPropsWithoutRef<C>;

/**
 * IndicatorBase is a foundational internal component used to build indicator-style 
 * components such as Badge, Chip, and Tag.
 * 
 * Composition Contract:
 * - Supports polymorphic rendering via `as` or `asChild`.
 * - Expects a `styles` object (usually from local CSS Modules) to map semantic states to classes.
 * - Automatically handles the root, intent, variant, and size classes from the provided `styles`.
 * - Provides a standardized layout for an optional icon and children.
 */
interface IndicatorBaseComponent {
  <C extends React.ElementType = "span">(
    props: IndicatorBaseProps<C> & { ref?: React.Ref<React.ComponentRef<C>> },
  ): React.ReactElement;
  displayName?: string;
}

const IndicatorBaseInner = <C extends React.ElementType = "span">(
  {
    asChild = false,
    children,
    icon,
    intent = "primary",
    variant = "solid",
    size = "md",
    styles,
    as,
    className,
    ...props
  }: IndicatorBaseProps<C>,
  ref: React.Ref<React.ComponentRef<C>>,
) => {
  const Component = asChild ? Slot : (as || "span");

  const resolvedClassName = classNames(
    styles?.root,
    styles?.[intent],
    styles?.[variant],
    styles?.[size],
    className,
  );

  const iconClassName = styles?.icon;

  return (
    <Component
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={resolvedClassName}
      {...props}
    >
      {icon && <span className={iconClassName}>{icon}</span>}
      <Slottable>{children}</Slottable>
    </Component>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const IndicatorBase = React.forwardRef(IndicatorBaseInner as any) as IndicatorBaseComponent;

IndicatorBase.displayName = "IndicatorBase";

