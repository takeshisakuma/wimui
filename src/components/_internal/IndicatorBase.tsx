import React from "react";
import classNames from "classnames";
import { ComponentSize, WimIntent, IndicatorVariant } from "../../types/tokens";

export type IndicatorBaseProps<C extends React.ElementType = "span"> = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  intent?: WimIntent;
  variant?: IndicatorVariant;
  size?: ComponentSize;
  prefixClass: string;
  as?: C;
  className?: string;
} & React.ComponentPropsWithoutRef<C>;

export const IndicatorBase = <C extends React.ElementType = "span">({
  children,
  icon,
  intent = "primary",
  variant = "solid",
  size = "md",
  prefixClass,
  as,
  className,
  ...props
}: IndicatorBaseProps<C>) => {
  const Component = as || "span";

  return (
    <Component
      className={classNames(
        prefixClass,
        `${prefixClass}--${intent}`,
        `${prefixClass}--${variant}`,
        `${prefixClass}--${size}`,
        className,
      )}
      {...props}
    >
      {icon && <span className={`${prefixClass}__icon`}>{icon}</span>}
      {children}
    </Component>
  );
};
