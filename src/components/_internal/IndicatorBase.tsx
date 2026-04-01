import React from "react";
import classNames from "classnames";
import { ComponentSize, IndicatorStatus } from "../../types/tokens";

export type IndicatorBaseProps<C extends React.ElementType = "span"> = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  status?: IndicatorStatus;
  variant?: "solid" | "outline" | "subtle";
  size?: ComponentSize;
  prefixClass: string;
  as?: C;
  className?: string;
} & React.ComponentPropsWithoutRef<C>;

export const IndicatorBase = <C extends React.ElementType = "span">({
  children,
  icon,
  status = "primary",
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
        `${prefixClass}--${status}`,
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
