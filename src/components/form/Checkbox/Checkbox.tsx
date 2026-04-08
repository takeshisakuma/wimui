import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { useMergedRef } from "../../../hooks/useMergedRef";
import "./checkbox.scss";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  asChild?: boolean;
  children?: React.ReactNode;
  indeterminate?: boolean;
}

/**
 * Checkbox component for boolean user input.
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ asChild = false, children, indeterminate = false, className, disabled, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMergedRef(inputRef, ref);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const Component = asChild ? Slot : "label";

    return (
      <Component
        className={classNames("wim-checkbox-wrapper", disabled && "wim-checkbox--disabled", className)}
      >
        <input type="checkbox" className="wim-checkbox-input" disabled={disabled} ref={mergedRef} {...props} />
        <Slottable>{children}</Slottable>
      </Component>
    );
  },
);

Checkbox.displayName = "Checkbox";
