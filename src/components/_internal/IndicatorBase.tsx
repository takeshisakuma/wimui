import React from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

export type IndicatorBaseProps<C extends React.ElementType = "span"> = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  status?: "primary" | "secondary" | "success" | "warning" | "error" | "neutral" | "info";
  variant?: "solid" | "outline" | "subtle";
  size?: "small" | "medium";
  prefixClass: string;
  as?: C;
  className?: string;
} & React.ComponentPropsWithoutRef<C>;

export const IndicatorBase = <C extends React.ElementType = "span">({
  children,
  icon,
  status = "primary",
  variant = "solid",
  size = "medium",
  prefixClass,
  as,
  className,
  ...props
}: IndicatorBaseProps<C>) => {
  const Component = as || "span";
  const { t } = useTranslation();

  return (
    <Component
      className={classNames(
        prefixClass,
        `${prefixClass}--${status}`,
        `${prefixClass}--${variant}`,
        `${prefixClass}--${size === "small" ? "sm" : "md"}`,
        className,
      )}
      {...props}
    >
      {icon && <span className={`${prefixClass}__icon`}>{icon}</span>}
      {typeof children === "string" ? t(children) : children}
    </Component>
  );
};
