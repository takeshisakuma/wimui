import React, { useId } from "react";
import classNames from "classnames";
import "./input.scss";
import { useMergedRef } from "../../../hooks/useMergedRef";
import { Icon } from "../../media/Icon/Icon";
import { InputBase, InputBaseIcon } from "../../_internal/InputBase";
import { FieldTemplate } from "../../_internal/FieldTemplate";
import { WimIntent } from "../../../types/tokens";

export type InputProps = React.ComponentPropsWithoutRef<"input"> & {
  intent?: WimIntent;
  variant?: "outline" | "ghost";
  fullWidth?: boolean;
  leftIcon?: React.ComponentProps<typeof Icon>["name"];
  rightIcon?: React.ComponentProps<typeof Icon>["name"];
  leftIconColor?: React.ComponentProps<typeof Icon>["color"];
  rightIconColor?: React.ComponentProps<typeof Icon>["color"];
  onLeftIconClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onRightIconClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  allowClear?: boolean;
  showPasswordToggle?: boolean;
  rightIconClassName?: string;
  rightIconRotated?: boolean;
  width?: "xs" | "sm" | "md" | "lg" | "xl" | string | number;
  label?: React.ReactNode;
  error?: string;
  required?: boolean;
  layout?: "vertical" | "horizontal";
  inputClassName?: string;
  showPasswordAriaLabel?: string;
  hidePasswordAriaLabel?: string;
  rightIconAriaLabel?: string;
};

/**
 * ユーザーからの入力を受け付けるための基本コンポーネント。
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
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
      showPasswordAriaLabel = "Show password",
      hidePasswordAriaLabel = "Hide password",
      rightIconAriaLabel = "Action",
      ...props
    },
    ref,
  ) => {
    // 内部状態
    const [internalValue, setInternalValue] = React.useState(
      defaultValue ?? "",
    );
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
    // クリアボタン用に input の DOM ref を保持
    const inputRef = React.useRef<HTMLInputElement>(null);
    const mergedRef = useMergedRef(ref, inputRef);

    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    const isDisabled = disabled;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    };

    const handleClear = () => {
      // 実際の DOM input に対してネイティブイベントをディスパッチ
      const input = inputRef.current;
      if (!input) return;

      // nativeInputValueSetter を使って React の合成イベントを正しく発火させる
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value",
      )?.set;

      if (nativeInputValueSetter) {
        nativeInputValueSetter.call(input, "");
        input.dispatchEvent(new Event("input", { bubbles: true }));
      } else {
        // フォールバック: nativeInputValueSetter が存在しない極めてまれな環境向け
        if (!isControlled) setInternalValue("");
        if (onChange) {
          input.value = "";
          onChange({ target: input, currentTarget: input } as React.ChangeEvent<HTMLInputElement>);
        }
      }

      if (!isControlled) setInternalValue("");
    };

    const togglePasswordVisibility = () => {
      setIsPasswordVisible((prev) => !prev);
    };

    // アイコン決定ロジック
    const showPasswordToggleBtn = type === "password" && showPasswordToggle;

    const rightIcons: InputBaseIcon[] = [];

    if (showPasswordToggleBtn) {
      rightIcons.push({
        name: isPasswordVisible ? "EyeOffIcon" : "EyeIcon",
        onClick: (_e: React.MouseEvent<HTMLButtonElement>) => togglePasswordVisibility(),
        ariaLabel: isPasswordVisible ? hidePasswordAriaLabel : showPasswordAriaLabel,
      });
    }

    // カスタム右アイコン
    if (rightIcon) {
      // 重複を避ける（名前が同じで既に存在する場合）
      const exists = rightIcons.some((icon) => icon.name === rightIcon);
      if (!exists) {
        rightIcons.push({
          name: rightIcon,
          onClick: onRightIconClick,
          color: rightIconColor,
          ariaLabel: rightIconAriaLabel,
          className: rightIconClassName,
          rotated: rightIconRotated,
        });
      }
    }

    const inputType = type === "password" && isPasswordVisible ? "text" : type;
    const effectiveIntent = isDisabled ? "disabled" : (error ? "error" : intent);

    const generatedId = useId();
    const id = customId || `wim-input-${generatedId}`;
    const errorId = error ? `${id}-error` : undefined;
    const labelId = label ? `${id}-label` : undefined;

    return (
      <FieldTemplate
        label={label}
        error={error}
        required={required}
        layout={layout}
        labelId={labelId}
        errorId={errorId}
        className={className}
      >
        <InputBase
          intent={error ? "error" : intent}
          variant={variant}
          fullWidth={fullWidth}
          width={width}
          disabled={isDisabled}
          leftIcon={leftIcon}
          leftIconColor={leftIconColor}
          onLeftIconClick={onLeftIconClick}
          rightIcons={rightIcons}
          allowClear={allowClear}
          hasValue={!!currentValue}
          onClear={handleClear}
        >
          <input
            id={id}
            ref={mergedRef}
            className={classNames(
              "wim-input",
              `wim-input--${effectiveIntent}`,
              `wim-input--${variant}`,
              fullWidth && "wim-input--full-width",
              leftIcon && "wim-input--has-left-icon",
              rightIcons.length > 0 && "wim-input--has-right-icon",
              inputClassName,
            )}
            disabled={isDisabled}
            value={currentValue}
            onChange={handleInputChange}
            type={inputType}
            aria-invalid={effectiveIntent === "error"}
            aria-describedby={errorId}
            aria-labelledby={label ? labelId : undefined}
            {...props}
            placeholder={props.placeholder}
            aria-label={props["aria-label"]}
          />
        </InputBase>
      </FieldTemplate>
    );
  },
);


Input.displayName = "Input";

