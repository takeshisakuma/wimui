import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { ComponentSize, IndicatorIntent, IndicatorVariant } from "../../types/tokens";

export type IndicatorBaseProps<C extends React.ElementType = "span"> = {
  /**
   * If true, the indicator will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  intent?: IndicatorIntent;
  variant?: IndicatorVariant;
  size?: ComponentSize;
  styles?: { [key: string]: string };
  as?: C;
  className?: string;
} & React.ComponentPropsWithoutRef<C>;

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

