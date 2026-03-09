import React from "react";
import classNames from "classnames";
import { FieldLabelContent, FieldLabelContentProps } from "../_internal/FieldLabelContent";
import "./legend.scss";

type LegendProps = React.ComponentPropsWithoutRef<"legend"> & FieldLabelContentProps;

/**
 * Fieldset のタイトルを表示するコンポーネント。
 */
export const Legend = ({
  label,
  required,
  showOptional,
  className,
  children,
  ...props
}: LegendProps) => {
  return (
    <legend className={classNames("wim-legend", className)} {...props}>
      <FieldLabelContent
        label={label}
        required={required}
        showOptional={showOptional}
      />
      {children}
    </legend>
  );
};
