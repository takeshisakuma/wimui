import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import "./checkbox.scss";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  indeterminate?: boolean;
  className?: string;
};

/**
 * Checkbox component for boolean user input.
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  // eslint-disable-next-line react/prop-types
  ({ label, indeterminate = false, className, disabled, ...props }, ref) => {
    const { t } = useTranslation();
    const defaultRef = useRef<HTMLInputElement>(null);
    const resolvedRef =
      (ref as React.RefObject<HTMLInputElement>) || defaultRef;

    useEffect(() => {
      if (resolvedRef.current) {
        resolvedRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate, resolvedRef]);

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
          ref={resolvedRef}
          {...props}
        />
        {label && <span className="wim-checkbox-label">{t(label)}</span>}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
