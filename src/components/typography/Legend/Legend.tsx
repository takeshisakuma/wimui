import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { FieldLabelContent, FieldLabelContentProps } from "../../_internal/FieldLabelContent";
import styles from "./legend.module.scss";

export interface LegendProps extends React.HTMLAttributes<HTMLLegendElement>, FieldLabelContentProps {
  /**
   * If true, the Legend will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
}

export const Legend = React.forwardRef<HTMLLegendElement, LegendProps>(
  ({ asChild = false, label, required, showOptional, className, children, ...props }, ref) => {
    const Component = asChild ? Slot : "legend";

    return (
      <Component
        className={classNames("wim-legend", styles.root, className)}
        ref={ref}
        {...props}
      >
        <FieldLabelContent label={label} required={required} showOptional={showOptional} />
        <Slottable>{children}</Slottable>
      </Component>
    );
  },
);

Legend.displayName = "Legend";
