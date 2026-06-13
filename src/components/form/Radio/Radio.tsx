import React, { useRef } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { useMergedRef } from "../../../hooks/useMergedRef";
import styles from "./radio.module.scss";

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  asChild?: boolean;
  children?: React.ReactNode;
  /** エラー状態として表示する（aria-invalid は radio ロールで非サポートのため RadioGroup 側に付与される） */
  error?: boolean;
}

/**
 * Radio component for single selection from a list.
 */
export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ asChild = false, children, error = false, className, disabled, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMergedRef(inputRef, ref);

    const Component = asChild ? Slot : "label";

    return (
      <Component
        className={classNames(styles.root, disabled && styles.disabled, className)}
      >
        <input
          type="radio"
          className={classNames(styles.input, error && styles.error)}
          disabled={disabled}
          ref={mergedRef}
          {...props}
        />
        <Slottable>{children}</Slottable>
      </Component>
    );
  },
);

Radio.displayName = "Radio";
