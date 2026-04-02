import React, { useRef } from "react";
import classNames from "classnames";
import { useMergedRef } from "../../../hooks/useMergedRef";
import "./radio.scss";

type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  children?: React.ReactNode;
  className?: string;
};

/**
 * Radio component for single selection from a list.
 */

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ children, className, disabled, ...props }, ref) => {
    const defaultRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMergedRef(defaultRef, ref);

    return (
      <label
        className={classNames(
          "wim-radio-wrapper",
          disabled && "wim-radio--disabled",
          className,
        )}
      >
        <input
          type="radio"
          className="wim-radio-input"
          disabled={disabled}
          ref={mergedRef}
          {...props}
        />
        {children && (
          <span className="wim-radio-label">
            {children}
          </span>
        )}
      </label>
    );
  },
);

Radio.displayName = "Radio";
