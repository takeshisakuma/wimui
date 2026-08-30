import React, { useRef } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { useMergedRef } from "../../../hooks/useMergedRef";
import styles from "./radio.module.scss";

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Whether to render as a child element. */
  asChild?: boolean;
  /** Label content rendered next to the radio */
  children?: React.ReactNode;
  /** Whether to display as an error state (aria-invalid is not supported on the radio role, so it is applied on the RadioGroup side) */
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

    /** ラベルの文字が無い形を CSS から見分ける印（T239）。理由は Checkbox 側の注記。 */
    const bare = React.Children.count(children) === 0;

    return (
      <Component
        className={classNames(
          "wim-radio",
          styles.root,
          bare && styles.bare,
          disabled && styles.disabled,
          className,
        )}
      >
        <input
          type="radio"
          className={classNames(styles.input, error && styles.danger)}
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
