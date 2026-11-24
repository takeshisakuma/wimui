import React, { useId, forwardRef, useState, useRef } from "react";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { commonNs } from "@/i18n/generated/common";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { mergeRefs } from "../../_internal/mergeRefs";
import { useFormReset } from "../../_internal/HiddenFormValue";
import { Icon } from "../../media/Icon/Icon";
import { InputBase, InputBaseIcon } from "../InputBase";
import { FieldTemplate } from "../FieldTemplate";
import { FieldIntent, FieldVariant, FieldWidth } from "../../../types/tokens";
import styles from "./input.module.scss";

export interface InputProps extends Omit<React.ComponentPropsWithoutRef<"input">, "prefix"> {
  /** Semantic intent of the field (e.g. error state) */
  intent?: FieldIntent;
  /** Visual style variant of the field */
  variant?: FieldVariant;
  /** Whether to take full width of parent */
  fullWidth?: boolean;
  /** Icon name to display on the left side */
  leftIcon?: React.ComponentProps<typeof Icon>["name"];
  /** Icon name to display on the right side */
  rightIcon?: React.ComponentProps<typeof Icon>["name"];
  /** Color of the left icon */
  leftIconColor?: React.ComponentProps<typeof Icon>["color"];
  /** Color of the right icon */
  rightIconColor?: React.ComponentProps<typeof Icon>["color"];
  /** Callback when the left icon is clicked (renders the icon as a button) */
  onLeftIconClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Callback when the right icon is clicked (renders the icon as a button) */
  onRightIconClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Whether to show a clear button when value is present */
  allowClear?: boolean;
  /** Whether to show the visibility toggle when type is "password" */
  showPasswordToggle?: boolean;
  /** Additional class name for the right icon */
  rightIconClassName?: string;
  /** Whether to rotate the right icon 180 degrees (e.g. for an open state) */
  rightIconRotated?: boolean;
  /** Fixed width of the field (width token, CSS value, or number in px) */
  width?: FieldWidth | string | number;
  /** Field label */
  label?: React.ReactNode;
  /** Error message */
  error?: string;
  /** Whether to show the required indicator */
  required?: boolean;
  /** Layout direction of label and field */
  layout?: "vertical" | "horizontal";
  /** Additional class name for the inner input element */
  inputClassName?: string;
  /** Aria label for the show-password toggle */
  showPasswordAriaLabel?: string;
  /** Aria label for the hide-password toggle */
  hidePasswordAriaLabel?: string;
  /** Aria label for the right icon button */
  rightIconAriaLabel?: string;
  /**
   * Treats the clickable right icon as a pointer-only affordance: it stays
   * clickable but leaves the tab order and is hidden from assistive technology.
   * Use it when the field already does the same thing from the keyboard.
   * @default false
   */
  rightIconDecorative?: boolean;
  /**
   * Static text shown after the field, inside the same shell — a unit such as
   * `kg`, `%` or `円`. It is announced with the field via `aria-describedby`,
   * so the unit does not have to be repeated in the label.
   */
  suffix?: React.ReactNode;
  /** Custom styles for internal parts */
  styles?: React.ComponentProps<typeof InputBase>["styles"];
  /** Whether to render as a child element. */
  asChild?: boolean;
}

/**
 * Basic component for accepting user input.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      intent = "default",
      variant = "outline",
      fullWidth = false,
      className,
      disabled,
      leftIcon,
      rightIcon,
      leftIconColor,
      rightIconColor,
      onLeftIconClick,
      onRightIconClick,
      allowClear = false,
      showPasswordToggle = true,
      rightIconClassName,
      rightIconRotated,
      width,
      value,
      defaultValue,
      onChange,
      type,
      label,
      error,
      required,
      layout,
      id: customId,
      inputClassName,
      showPasswordAriaLabel,
      hidePasswordAriaLabel,
      rightIconAriaLabel,
      rightIconDecorative = false,
      suffix,
      styles: stylesProp,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const { t } = useWimTranslation(commonNs);
    const resolvedShowPasswordAriaLabel = showPasswordAriaLabel ?? t("a11y.show_password");
    const resolvedHidePasswordAriaLabel = hidePasswordAriaLabel ?? t("a11y.hide_password");
    const resolvedRightIconAriaLabel = rightIconAriaLabel ?? t("a11y.right_icon_action");

    // 制御していないときは、値を DOM に持たせる（`value` を渡さず `defaultValue` で渡す）。以前は内部の値を
    // `value` で渡していたので、react-hook-form の `register` が DOM に書いた既定値や `reset(values)` の値を、
    // 次の描画で上書きしていた（T438）。素のフォームの reset も、ブラウザーが既定の値へ戻す。
    // 持つのは「値が入っているか」だけ（消すボタンの出し分け）で、変わりうるときに DOM から読み直す。
    const [filled, setFilled] = useState(!!defaultValue);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const syncFilled = () => setFilled(!!inputRef.current?.value);
    // 要素を受け取った直後にも読む（register の ref は、受け取ったその場で既定値を書く）。
    // 描画ごとに作り直す mergeRefs にする。useMergedRef は関数が変わらないので、React が ref を呼び直さず、
    // react-hook-form が reset のあとに要素を受け取り直せなかった（T438）
    const mergedRef = mergeRefs(ref, inputRef, (node: HTMLInputElement | null) => {
      if (node) setFilled(!!node.value);
    });

    // 一度でも `value` を受け取ったら、そのあと `undefined` が来ても空の文字として制御を続ける。`value={undefined}` で
    // 欄を空にする使い方で、DOM に前の文字が残り、React が制御から非制御への切り替えを警告しないように（以前と同じ姿）
    const [wasControlled, setWasControlled] = useState(value !== undefined);
    if (value !== undefined && !wasControlled) setWasControlled(true);
    const isControlled = value !== undefined || wasControlled;

    // reset のあとは、ブラウザーと react-hook-form（reset(values) は素の reset のあとに値を書く）が
    // 書き終えてから読む
    useFormReset(inputRef, () => {
      if (!isControlled) queueMicrotask(syncFilled);
    });

    const isDisabled = disabled;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setFilled(!!e.target.value);
      onChange?.(e);
    };

    const handleClear = () => {
      const input = inputRef.current;
      if (!input) return;

      // prototype の setter で書くと、React の値の追跡に気づかれず、次の input イベントが
      // onChange になる（内部の値もそこで空になる）
      Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set?.call(input, "");
      input.dispatchEvent(new Event("input", { bubbles: true }));
    };

    const togglePasswordVisibility = () => {
      setIsPasswordVisible((prev) => !prev);
    };

    const showPasswordToggleBtn = type === "password" && showPasswordToggle;

    const rightIcons: InputBaseIcon[] = [];

    if (showPasswordToggleBtn) {
      rightIcons.push({
        name: isPasswordVisible ? "EyeOffIcon" : "EyeIcon",
        onClick: (_e: React.MouseEvent<HTMLButtonElement>) => togglePasswordVisibility(),
        ariaLabel: isPasswordVisible ? resolvedHidePasswordAriaLabel : resolvedShowPasswordAriaLabel,
      });
    }

    if (rightIcon) {
      const exists = rightIcons.some((icon) => icon.name === rightIcon);
      if (!exists) {
        rightIcons.push({
          name: rightIcon,
          onClick: onRightIconClick,
          color: rightIconColor,
          ariaLabel: resolvedRightIconAriaLabel,
          decorative: rightIconDecorative,
          className: rightIconClassName,
          rotated: rightIconRotated,
        });
      }
    }

    const inputType = type === "password" && isPasswordVisible ? "text" : type;
    const currentIntent = error ? "danger" : intent;

    const generatedId = useId();
    const id = customId || `wim-input-${generatedId}`;
    const errorId = error ? `${id}-error` : undefined;
    const hasSuffix = suffix !== undefined && suffix !== null && suffix !== "";
    const suffixId = hasSuffix ? `${id}-suffix` : undefined;
    // 単位が見えているのに読み上げられないと、ラベルに「（kg）」と書き足す
    // 回避に戻ってしまう。エラーと併記できるよう連結する。
    const describedBy = [errorId, suffixId].filter(Boolean).join(" ") || undefined;
    const labelId = label ? `${id}-label` : undefined;

    const Component = asChild ? Slot : "input";

    return (
      <FieldTemplate
        label={label}
        error={error}
        required={required}
        layout={layout}
        labelId={labelId}
        htmlFor={id}
        errorId={errorId}
        className={className}
      >

        <InputBase
          intent={currentIntent}
          variant={variant}
          fullWidth={fullWidth}
          width={width}
          disabled={isDisabled}
          leftIcon={leftIcon}
          leftIconColor={leftIconColor}
          onLeftIconClick={onLeftIconClick}
          rightIcons={rightIcons}
          suffix={suffix}
          suffixId={suffixId}
          allowClear={allowClear}
          hasValue={isControlled ? !!value : filled}
          onClear={handleClear}
          styles={stylesProp}
        >
          <Component
            id={id}
            ref={mergedRef}
            className={classNames("wim-input", 
              styles.root,
              styles[currentIntent],
              isDisabled && styles.disabled,
              styles[variant],
              inputClassName,
            )}
            disabled={isDisabled}
            value={isControlled ? (value ?? "") : undefined}
            defaultValue={isControlled ? undefined : defaultValue}
            onChange={handleInputChange}
            type={inputType}
            aria-invalid={currentIntent === "danger"}
            aria-describedby={describedBy}
            aria-labelledby={label ? labelId : undefined}
            aria-required={required}
            {...props}
          >
            {asChild ? <Slottable>{children}</Slottable> : null}
          </Component>
        </InputBase>
      </FieldTemplate>
    );
  },
);

Input.displayName = "Input";

export default Input;
