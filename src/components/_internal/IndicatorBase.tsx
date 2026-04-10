import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { ComponentSize, WimIntent, IndicatorVariant } from "../../types/tokens";

export type IndicatorBaseProps<C extends React.ElementType = "span"> = {
  /**
   * If true, the indicator will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  intent?: WimIntent;
  variant?: IndicatorVariant;
  size?: ComponentSize;
  styles?: { [key: string]: string };
  as?: C;
  className?: string;
} & React.ComponentPropsWithoutRef<C>;

interface IndicatorBaseComponent {
  <C extends React.ElementType = "span">(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props: IndicatorBaseProps<C> & { ref?: React.Ref<any> },
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.Ref<any>,
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
      ref={ref}
      className={resolvedClassName}
      {...props}
    >
      {icon && <span className={iconClassName}>{icon}</span>}
      <Slottable>{children}</Slottable>
    </Component>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const IndicatorBase: IndicatorBaseComponent = React.forwardRef(IndicatorBaseInner as any) as any;

IndicatorBase.displayName = "IndicatorBase";

