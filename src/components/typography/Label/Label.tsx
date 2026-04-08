import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { FieldLabelContent, FieldLabelContentProps } from "../../_internal/FieldLabelContent";
import "./label.scss";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>, FieldLabelContentProps {
  asChild?: boolean;
}

/**
 * フォーム項目のラベルを表示するコンポーネント。
 */
export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ asChild = false, label, required = false, showOptional = false, className, children, htmlFor, ...props }, ref) => {
    const Component = asChild ? Slot : "label";

    return (
      <Component className={classNames("wim-label", className)} htmlFor={htmlFor} // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any} {...props}>
        <span className="wim-label__header-wrapper">
          <FieldLabelContent
            label={label}
            required={required}
            showOptional={showOptional}
            className="wim-label__header"
          />
        </span>
        <Slottable>{children}</Slottable>
      </Component>
    );
  },
);

Label.displayName = "Label";
