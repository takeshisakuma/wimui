import React, { useRef, useId } from "react";
import classNames from "classnames";
import { Slottable } from "@radix-ui/react-slot";
import { ComponentSizeBasic } from "../../../types/tokens";
import { useMergedRef } from "../../../hooks/useMergedRef";
import styles from "./switch.module.scss";

type SwitchProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  /** Size of the switch */
  size?: ComponentSizeBasic;
  /** Additional class names */
  className?: string;
  /** Label content rendered next to the switch */
  children?: React.ReactNode;
  /** Whether to display as an error state (aria-invalid is applied) */
  error?: boolean;
};

/**
 * Switch component for toggling a single setting on or off.
 */
export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    { children, size = "md", error = false, className, disabled, id: customId, ...props },
    ref,
  ) => {
    const defaultRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMergedRef(defaultRef, ref);
    const generatedId = useId();
    const id = customId || generatedId;

    return (
      <label
        htmlFor={id}
        className={classNames("wim-switch", 
          styles.root,
          disabled && styles.disabled,
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
            styles.input,
            size !== "md" && styles[size],
            error && styles.error,
          )}
          disabled={disabled}
          aria-invalid={error || undefined}
          ref={mergedRef}
          {...props}
        />
        <Slottable>{children}</Slottable>
      </label>
    );
  },
);

Switch.displayName = "Switch";
