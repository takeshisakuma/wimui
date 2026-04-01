import React, { useRef, useId } from "react";
import classNames from "classnames";
import { ComponentSize } from "../../../types/tokens";
import { useMergedRef } from "../../../hooks/useMergedRef";
import "./switch.scss";

type SwitchProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  /** @deprecated Use `children` instead. */
  label?: React.ReactNode;
  size?: ComponentSize;
  className?: string;
  children?: React.ReactNode;
};

/**
 * Switch component for toggling a single setting on or off.
 */
export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    { label, children, size = "md", className, disabled, id: customId, ...props },
    ref,
  ) => {
    const defaultRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMergedRef(defaultRef, ref);
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
          // @ts-expect-error - 'switch' attribute is a progressive enhancement for Safari
          // eslint-disable-next-line react/no-unknown-property
          switch=""
          className={classNames(
            "wim-switch-input",
            size !== "md" && `wim-switch-input--${size}`,
          )}
          disabled={disabled}
          ref={mergedRef}
          {...props}
        />
        {(label || children) && (
          <span className="wim-switch-label">
            {label}
            {children}
          </span>
        )}
      </label>
    );
  },
);

Switch.displayName = "Switch";
