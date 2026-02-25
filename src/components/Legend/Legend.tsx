import React from "react";
import classNames from "classnames";
import "./legend.scss";

type LegendProps = React.ComponentPropsWithoutRef<"legend"> & {
  children: React.ReactNode;
  className?: string;
};

/**
 * Fieldset のタイトルを表示するコンポーネント。
 */
export const Legend = ({ children, className, ...props }: LegendProps) => {
  return (
    <legend className={classNames("wim-legend", className)} {...props}>
      {children}
    </legend>
  );
};
