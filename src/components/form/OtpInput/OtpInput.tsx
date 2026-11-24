import React, { useRef, useState, useId, forwardRef } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { FieldTemplate } from "../FieldTemplate";
import { HiddenFormValue } from "../../_internal/HiddenFormValue";
import styles from "./otp-input.module.scss";

export type OtpInputLabels = {
  /**
   * Accessible name for one digit box.
   *
   * `position` is **1-based**: the first box is `1`, and the last is `length`.
   * It is meant to be read aloud ("Digit 3 of 6"), so it counts the way a person
   * would. Treating it as a 0-based index and adding one yields "Digit 2" for the
   * first box.
   *
   * @param position 1-based position of the box, from `1` to `length`
   * @default (position) => `Digit ${position}`
   */
  digitAriaLabel?: (position: number) => string;
};

export interface OtpInputProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange" | "value" | "defaultValue"> {
  /** Number of digits */
  length?: number;
  /** Current value (controlled) */
  value?: string;
  /** Callback when the value changes */
  onChange?: (value: string) => void;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Error message */
  error?: string;
  /** Whether to show the required indicator */
  required?: boolean;
  /**
   * Name submitted with a native `<form>`. The whole code is sent as one hidden input, and a form reset clears the boxes when uncontrolled.
   */
  name?: string;
  /** Field label */
  label?: React.ReactNode;
  /** Layout direction of label and field */
  layout?: "vertical" | "horizontal";
  /**
   * Labels for internationalization. `digitAriaLabel(position)` names one digit
   * box and receives a **1-based** position — the first box is `1`, not `0`.
   */
  labels?: OtpInputLabels;
  /** Whether to render as a child element. */
  asChild?: boolean;
  /** Whether to take full width of parent */
  fullWidth?: boolean;
  /**
   * Keyboard shown on touch devices. Use `"text"` for codes that contain letters.
   * @default "numeric"
   */
  inputMode?: "numeric" | "text";
}

/** value を 1 文字ずつの配列（長さ length）に割り付ける。 */
const toDigits = (value: string | undefined, length: number): string[] => {
  const chars = (value ?? "").split("").slice(0, length);
  return Array(length)
    .fill("")
    .map((_, i) => chars[i] ?? "");
};

/**
 * Component for entering an OTP (one-time password).
 */
export const OtpInput = forwardRef<HTMLDivElement, OtpInputProps>(
  (
    {
      length = 6,
      // 既定値を置かない。`""` を置くと value が undefined にならず、制御していないときの
      // フォームの reset（下の HiddenFormValue の onReset）が空へ戻さなかった（T443 の検査で見つけた）
      value,
      onChange,
      disabled = false,
      error,
      required,
      name,
      label,
      layout,
      className,
      labels = {},
      asChild = false,
      fullWidth = false,
      inputMode = "numeric",
      children,
      // 名前と説明の参照は、ロールの無い包みではなく、読まれる要素へ届ける（T329）。
      // 名前は桁をまとめる `role="group"` へ、説明はエラーと同じく全部の桁へ。
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      ...props
    },
    ref,
  ) => {
    // position は 1 始まり（読み上げの「3 桁目」に対応する）。呼び出しは
    // `digitAriaLabel(index + 1)`。
    const { digitAriaLabel = (position: number) => `Digit ${position}` } = labels;

    // 内部状態（非制御時にも対応できるようにするが、基本は制御コンポーネントとして使う想定）
    // 初期値も value から取る。空配列で始めると prevValue === value のまま同期が
    // 走らず、マウント時に渡された value が一度も表示されない。
    const [internalValues, setInternalValues] = useState<string[]>(() =>
      toDigits(value, length),
    );
    const [prevValue, setPrevValue] = useState(value);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const generatedId = useId();
    const id = `wim-otp-input-${generatedId}`;
    const labelId = label ? `${id}-label` : undefined;
    const errorId = error ? `${id}-error` : undefined;
    // 部品のラベルがあればそれ、無ければ利用者が渡した参照（T328 と同じ決め方）。
    const groupNameRef = labelId ?? ariaLabelledBy;
    const describedBy = [ariaDescribedBy, errorId].filter(Boolean).join(" ") || undefined;

    // value propsが変更されたら内部状態を同期 (Derived State Pattern)
    if (value !== prevValue) {
      setPrevValue(value);
      setInternalValues(toDigits(value, length));
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
      // 欄に元からあった 1 文字を除いて、今回入った文字を取り出す。2 文字以上なら、SMS のコードの
      // 自動入力（`autocomplete="one-time-code"`。iOS はコード全体を最初の欄へ入れる）か、
      // 入力の補完がまとめて入れたもの ── 貼り付けと同じく、この欄から順に分ける（T424）。
      // 以前は `maxLength={1}` と最後の 1 文字だけを取る処理で、コードの最後の 1 桁しか残らなかった。
      const old = internalValues[index];
      const inserted = old && val.startsWith(old) ? val.slice(old.length) : old && val.endsWith(old) ? val.slice(0, -old.length) : val;
      if (inserted.length > 1) {
        fillFrom(index, inserted);
        return;
      }
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

    /** `start` の欄から順に文字を入れ、入れた最後の次の欄（無ければ最後の欄）へフォーカスを移す。 */
    const fillFrom = (start: number, text: string) => {
      const chars = text.slice(0, length - start).split("");
      const newValues = [...internalValues];
      chars.forEach((char, i) => {
        newValues[start + i] = char;
      });

      setInternalValues(newValues);
      triggerChange(newValues);

      const nextFocusIndex = Math.min(start + chars.length, length - 1);
      inputRefs.current[nextFocusIndex]?.focus();
    };

    // 貼り付けは、どの欄で貼っても最初の欄から入れる（コードは頭から貼るもの）
    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      fillFrom(0, e.clipboardData.getData("text"));
    };

    const Component = asChild ? Slot : "div";

    return (
      <FieldTemplate
        label={label}
        error={error}
        required={required}
        layout={layout}
        labelId={labelId}
        htmlFor={id}
        errorId={errorId}
        className={classNames(className, fullWidth && styles.fullWidth)}
      >
        <Component
          className={classNames("wim-otp-input", styles.root, fullWidth && styles.fullWidth)}
          ref={ref}
          {...props}
        >
          <div
            className={classNames(
              styles.container,
              disabled && styles.disabled,
            )}
            role="group"
            aria-labelledby={groupNameRef}
            aria-label={groupNameRef ? undefined : ariaLabel}
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
                  error && styles.danger,
                  disabled && styles.disabled,
                )}
                type="text"
                // 端末の SMS のコードの候補は、`one-time-code` の欄に出る。コードは最初の欄で受けて、
                // 上の handleInputChange が各欄へ分ける。ほかの欄に付けると、候補が欄ごとに出る
                autoComplete={index === 0 ? "one-time-code" : "off"}
                inputMode={inputMode}
                value={internalValues[index]}
                onChange={(e) => handleInputChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={handlePaste}
                disabled={disabled}
                aria-label={digitAriaLabel(index + 1)}
                aria-invalid={error ? "true" : "false"}
                aria-describedby={describedBy}
                aria-required={required ? "true" : undefined}
              />
            ))}
          </div>
          {/* 利用者の要素（asChild の子）を Slottable に入れる。Slot はこれを根にして、上の中身をその中に描く。
              以前は逆（中身を Slottable に入れていた）で、asChild を付けると描画で例外になるか、部品の
              クラスが利用者の要素に付かなかった（T337）。 */}
          <Slottable>{children}</Slottable>
        </Component>
        <HiddenFormValue name={name} value={internalValues.join("")} disabled={disabled} onReset={() => { if (value === undefined) setInternalValues(toDigits("", length)); }} />
      </FieldTemplate>
    );
  },
);

OtpInput.displayName = "OtpInput";

export default OtpInput;
