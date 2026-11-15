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
  /** Whether to allow decimals (effective only when mode="number"). When false, both "." and "," are blocked — a browser in a locale that writes decimals with a comma takes "," as the decimal separator. */
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
      onPaste,
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

    // 不適切な文字の入力をブロック (指数表記 e, E, +, -, 小数の区切り)。
    // 小数の区切りは "." と "," の両方を止める（T394）。`<input type="number">` は、小数をコンマで書く
    // 言語のブラウザ（pt-BR・de など）では "," を小数点として受け取るので、"." だけを止めると
    // `allowDecimal={false}` のまま `1,5` が 1.5 として入っていた
    const blockedKeys = mode === "number" ? ["e", "E"] : [];
    if (mode === "number" && !allowNegative) blockedKeys.push("-", "+");
    if (mode === "number" && !allowDecimal) blockedKeys.push(".", ",");

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (blockedKeys.includes(e.key)) {
        e.preventDefault();
      }

      onKeyDown?.(e);
    };

    // キーで止めた文字は、貼り付けでも通さない
    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      const text = e.clipboardData.getData("text");
      if (blockedKeys.some((key) => text.includes(key))) {
        e.preventDefault();
      }

      onPaste?.(e);
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
        onPaste={handlePaste}
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
