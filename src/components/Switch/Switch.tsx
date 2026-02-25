import React, { useRef, useId } from "react";
import classNames from "classnames";
import "./switch.scss";

type SwitchProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  label?: string;
  size?: "small" | "medium";
  className?: string;
};

/**
 * Switch component for toggling a single setting on or off.
 */
export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    { label, size = "medium", className, disabled, id: customId, ...props },
    ref,
  ) => {
    const defaultRef = useRef<HTMLInputElement>(null);
    const resolvedRef =
      (ref as React.RefObject<HTMLInputElement>) || defaultRef;
    const generatedId = useId();
    const id = customId || generatedId;

    return (
      <label
        htmlFor={id}
        className={classNames(
          "wim-switch-wrapper",
          disabled && "wim-switch--disabled",
          className,
        )}
      >
        <input
          id={id}
          type="checkbox"
          role="switch"
          className="wim-switch-input"
          disabled={disabled}
          ref={resolvedRef}
          {...props}
        />
        <div
          className={classNames(
            "wim-switch-track",
            size === "small" && "wim-switch-track--small",
          )}
          aria-hidden="true"
        >
          <div className="wim-switch-thumb" aria-hidden="true" />
        </div>
        {label && <span className="wim-switch-label">{label}</span>}
      </label>
    );
  },
);

Switch.displayName = "Switch";
