import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { FieldLabelContent, FieldLabelContentProps } from "../../_internal/FieldLabelContent";
import styles from "./label.module.scss";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>, FieldLabelContentProps {
  /**
   * If true, the Label will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ asChild = false, label, required = false, showOptional = false, className, children, htmlFor, ...props }, ref) => {
    const Component = asChild ? Slot : "label";

    return (
      <Component
        className={classNames(styles.root, className)}
        htmlFor={htmlFor}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        {...props}
      >
        <span className={styles.headerWrapper}>
          <FieldLabelContent
            label={label}
            required={required}
            showOptional={showOptional}
            className={styles.header}
          />
        </span>
        <Slottable>{children}</Slottable>
      </Component>
    );
  },
);

Label.displayName = "Label";
