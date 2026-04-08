import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { FieldLabelContent, FieldLabelContentProps } from "../../_internal/FieldLabelContent";
import "./legend.scss";

export interface LegendProps extends React.HTMLAttributes<HTMLLegendElement>, FieldLabelContentProps {
  asChild?: boolean;
}

/**
 * Fieldset のタイトルを表示するコンポーネント。
 */
export const Legend = React.forwardRef<HTMLLegendElement, LegendProps>(
  ({ asChild = false, label, required, showOptional, className, children, ...props }, ref) => {
    const Component = asChild ? Slot : "legend";

    return (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <Component className={classNames("wim-legend", className)} ref={ref as any} {...props}>
        <FieldLabelContent label={label} required={required} showOptional={showOptional} />
        <Slottable>{children}</Slottable>
      </Component>
    );
  },
);

Legend.displayName = "Legend";
