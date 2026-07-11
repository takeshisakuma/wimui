import React, { forwardRef } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { Input } from "../../form/Input/Input";
import inputStyles from "../../form/Input/input.module.scss";

export interface NumberInputProps extends React.ComponentPropsWithoutRef<typeof Input> {
  /**
   * 'number': uses the native type="number" (e.g. quantity steppers)
   * 'text': uses type="text" + inputmode (e.g. card numbers or IDs where leading zeros must be kept)
   */
  mode?: "number" | "text";
  /** Whether to hide the spin buttons */
  hideSpinButton?: boolean;
  /** Whether to allow decimal points (effective only when mode="number") */
  allowDecimal?: boolean;
  /** Whether to allow negative numbers (effective only when mode="number") */
  allowNegative?: boolean;
  /** Whether to render as a child element. */
  asChild?: boolean;
}

/**
 * Component specialized for numeric input.
 */
export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      mode = "number",
      hideSpinButton = true,
      allowDecimal = false,
      allowNegative = false,
      onKeyDown,
      className,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const type = mode === "number" ? "number" : "text";

    // mode="text" の場合は、ドキュメント推奨の属性を自動付与
    const inputMode = mode === "text" ? "numeric" : props.inputMode;
    const pattern = mode === "text" ? "[0-9]*" : props.pattern;

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (mode === "number") {
        // 不適切な文字の入力をブロック (指数表記 e, E, +, -, .)
        const blockedKeys = ["e", "E"];
        if (!allowNegative) blockedKeys.push("-", "+");
        if (!allowDecimal) blockedKeys.push(".");

        if (blockedKeys.includes(e.key)) {
          e.preventDefault();
        }
      }

      onKeyDown?.(e);
    };

    const Component = asChild ? Slot : Input;

    return (
      <Component
        {...props}
        ref={ref}
        type={type}
        inputMode={inputMode}
        pattern={pattern}
        onKeyDown={handleKeyDown}
        className={classNames("wim-number-input", className)}
        inputClassName={classNames(hideSpinButton && inputStyles.hideSpin)}
      >
        {asChild ? <Slottable>{children}</Slottable> : null}
      </Component>
    );
  },
);

NumberInput.displayName = "NumberInput";

export default NumberInput;
