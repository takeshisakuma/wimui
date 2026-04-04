import React from "react";
import classNames from "classnames";
import { FieldLabelContent, FieldLabelContentProps } from "../../_internal/FieldLabelContent";
import "./label.scss";

type LabelProps = React.ComponentPropsWithoutRef<"label"> & FieldLabelContentProps;

/**
 * フォーム項目のラベルを表示するコンポーネント。
 */
export const Label = ({
  label,
  required = false,
  showOptional = false,
  className,
  children,
  htmlFor,
  ...props
}: LabelProps) => {
  return (
    <label className={classNames("wim-label", className)} htmlFor={htmlFor} {...props}>
      <span className="wim-label__header-wrapper">
        <FieldLabelContent
          label={label}
          required={required}
          showOptional={showOptional}
          className="wim-label__header"
        />
      </span>
      {children}
    </label>
  );
};
