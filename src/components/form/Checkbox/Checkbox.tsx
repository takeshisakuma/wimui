import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { useMergedRef } from "../../../hooks/useMergedRef";
import styles from "./checkbox.module.scss";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Whether to render as a child element. */
  asChild?: boolean;
  /** Label content rendered next to the checkbox */
  children?: React.ReactNode;
  /** Whether to show the indeterminate (mixed) state */
  indeterminate?: boolean;
  /** Whether to display as an error state (aria-invalid is applied) */
  error?: boolean;
}

/**
 * Checkbox component for boolean user input.
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ asChild = false, children, indeterminate = false, error = false, className, disabled, ...props }, ref) => {
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
        className={classNames(styles.root, disabled && styles.disabled, className)}
      >
        <input
          type="checkbox"
          className={classNames(styles.input, error && styles.error)}
          disabled={disabled}
          aria-invalid={error || undefined}
          ref={mergedRef}
          {...props}
        />
        <Slottable>{children}</Slottable>
      </Component>
    );
  },
);

Checkbox.displayName = "Checkbox";
