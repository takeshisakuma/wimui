import React, { useRef, useState, useId, forwardRef } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { FieldTemplate } from "../FieldTemplate";
import styles from "./otp-input.module.scss";

export type OtpInputLabels = {
  digitAriaLabel?: (index: number) => string;
};

export interface OtpInputProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange" | "value" | "defaultValue"> {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  error?: string;
  required?: boolean;
  label?: React.ReactNode;
  layout?: "vertical" | "horizontal";
  labels?: OtpInputLabels;
  asChild?: boolean;
  fullWidth?: boolean;
}

/**
 * OTP（ワンタイムパスワード）入力用コンポーネント。
 */
export const OtpInput = forwardRef<HTMLDivElement, OtpInputProps>(
  (
    {
      length = 6,
      value = "",
      onChange,
      disabled = false,
      error,
      required,
      label,
      layout,
      className,
      labels = {},
      asChild = false,
      fullWidth = false,
      children,
      ...props
    },
    ref,
  ) => {
    const { digitAriaLabel = (i: number) => `Digit ${i}` } = labels;

    // 内部状態（非制御時にも対応できるようにするが、基本は制御コンポーネントとして使う想定）
    const [internalValues, setInternalValues] = useState<string[]>(
      Array(length).fill(""),
    );
    const [prevValue, setPrevValue] = useState(value);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const generatedId = useId();
    const id = `wim-otp-input-${generatedId}`;
    const labelId = label ? `${id}-label` : undefined;
    const errorId = error ? `${id}-error` : undefined;

    // value propsが変更されたら内部状態を同期 (Derived State Pattern)
    if (value !== prevValue) {
      setPrevValue(value);
      const chars = value.split("").slice(0, length);
      const newValues = Array(length)
        .fill("")
        .map((_, i) => chars[i] || "");
      setInternalValues(newValues);
    }

    const triggerChange = (newValues: string[]) => {
      const newValueString = newValues.join("");
      if (onChange) {
        onChange(newValueString);
      }
    };

    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement>,
      index: number,
    ) => {
      const val = e.target.value;
      const newChar = val.slice(-1);

      const newValues = [...internalValues];
      newValues[index] = newChar;
      setInternalValues(newValues);
      triggerChange(newValues);

      // 文字が入力されたら次のフィールドへフォーカス
      if (newChar && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handleKeyDown = (
      e: React.KeyboardEvent<HTMLInputElement>,
      index: number,
    ) => {
      if (e.key === "Backspace") {
        if (!internalValues[index] && index > 0) {
          // 現在の入力が空でBackspaceが押されたら、前の入力へ移動して削除
          const newValues = [...internalValues];
          newValues[index - 1] = "";
          setInternalValues(newValues);
          triggerChange(newValues);
          inputRefs.current[index - 1]?.focus();
        } else if (internalValues[index]) {
          // 値がある場合は単に削除
          const newValues = [...internalValues];
          newValues[index] = "";
          setInternalValues(newValues);
          triggerChange(newValues);
        }
      } else if (e.key === "ArrowLeft" && index > 0) {
        e.preventDefault();
        inputRefs.current[index - 1]?.focus();
      } else if (e.key === "ArrowRight" && index < length - 1) {
        e.preventDefault();
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pastedData = e.clipboardData.getData("text").slice(0, length);
      const chars = pastedData.split("");

      const newValues = [...internalValues];
      chars.forEach((char, i) => {
        if (i < length) {
          newValues[i] = char;
        }
      });

      setInternalValues(newValues);
      triggerChange(newValues);

      // 貼り付けた最後の文字の次のboxにフォーカス、または最後のboxにフォーカス
      const nextFocusIndex = Math.min(chars.length, length - 1);
      inputRefs.current[nextFocusIndex]?.focus();
    };

    const Component = asChild ? Slot : "div";

    return (
      <FieldTemplate
        label={label}
        error={error}
        required={required}
        layout={layout}
        labelId={labelId}
        errorId={errorId}
        className={classNames(className, fullWidth && styles.fullWidth)}
      >
        <Component
          className={classNames(styles.root, fullWidth && styles.fullWidth)}
          ref={ref}
          {...props}
        >
          <Slottable>
            <div
              className={classNames(
                styles.container,
                disabled && styles.disabled,
              )}
              data-testid="otp-input-container"
              data-disabled={disabled}
            >
              {Array.from({ length }).map((_, index) => (
                <input
                  key={index}
                  id={index === 0 ? id : undefined}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  data-testid="otp-input"
                  className={classNames(
                    styles.input,
                    error && styles.error,
                    disabled && styles.disabled,
                  )}
                  type="text"
                  maxLength={1}
                  value={internalValues[index]}
                  onChange={(e) => handleInputChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={handlePaste}
                  disabled={disabled}
                  aria-label={digitAriaLabel(index + 1)}
                  aria-invalid={!!error}
                  aria-describedby={errorId}
                  aria-required={required}
                />
              ))}
            </div>
          </Slottable>
          {children}
        </Component>
      </FieldTemplate>
    );
  },
);

OtpInput.displayName = "OtpInput";

export default OtpInput;
