import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { useMergedRef } from "../../../hooks/useMergedRef";
import "./checkbox.scss";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /** @deprecated Use `children` instead. */
  label?: React.ReactNode;
  children?: React.ReactNode;
  indeterminate?: boolean;
  className?: string;
};

/**
 * Checkbox component for boolean user input.
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, children, indeterminate = false, className, disabled, ...props }, ref) => {
    const defaultRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMergedRef(defaultRef, ref);

    useEffect(() => {
      if (defaultRef.current) {
        defaultRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    return (
      <label
        className={classNames(
          "wim-checkbox-wrapper",
          disabled && "wim-checkbox--disabled",
          className,
        )}
      >
        <input
          type="checkbox"
          className="wim-checkbox-input"
          disabled={disabled}
          ref={mergedRef}
          {...props}
        />
        {(label || children) && (
          <span className="wim-checkbox-label">
            {label}
            {children}
          </span>
        )}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
