import React from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import "./input.scss";
import { Icon } from "../Icon/Icon";

export type InputProps = React.ComponentPropsWithoutRef<"input"> & {
  status?: "default" | "error" | "disabled";
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
};

import { InputBase, InputBaseIcon } from "../_internal/InputBase";

/**
 * ユーザーからの入力を受け付けるための基本コンポーネント。
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      status = "default",
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
      ...props
    },
    ref,
  ) => {
    const { t } = useTranslation();

    // 内部状態
    const [internalValue, setInternalValue] = React.useState(
      defaultValue ?? "",
    );
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
    // クリアボタン用に input の DOM ref を保持
    const inputRef = React.useRef<HTMLInputElement>(null);
    const mergedRef = useMergeRef(ref, inputRef);

    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    // `status="disabled"` は後方互換のために残すが、標準の `disabled` を優先
    const isDisabled = disabled || status === "disabled";

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
        // フォールバック
        if (!isControlled) setInternalValue("");
        if (onChange) {
          const syntheticEvent = {
            target: input,
            currentTarget: input,
            nativeEvent: new Event("change"),
            bubbles: true,
            cancelable: false,
            defaultPrevented: false,
            eventPhase: 0,
            isTrusted: false,
            preventDefault: () => { },
            isDefaultPrevented: () => false,
            stopPropagation: () => { },
            isPropagationStopped: () => false,
            persist: () => { },
            timeStamp: Date.now(),
            type: "change",
          } as unknown as React.ChangeEvent<HTMLInputElement>;
          onChange(syntheticEvent);
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
        onClick: togglePasswordVisibility as unknown as (
          e: React.MouseEvent<HTMLButtonElement>,
        ) => void,
        ariaLabel: isPasswordVisible ? t("a11y_hide_password") : t("a11y_show_password"),
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
          ariaLabel: t("a11y_right_icon_action"),
          className: rightIconClassName,
          rotated: rightIconRotated,
        });
      }
    }

    const inputType = type === "password" && isPasswordVisible ? "text" : type;
    const effectiveStatus = isDisabled ? "disabled" : status;

    return (
      <InputBase
        status={effectiveStatus}
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
        className={className}
      >
        <input
          ref={mergedRef}
          className={classNames(
            "wim-input",
            `wim-input--${effectiveStatus}`,
            `wim-input--${variant}`,
            fullWidth && "wim-input--full-width",
            leftIcon && "wim-input--has-left-icon",
            rightIcons.length > 0 && "wim-input--has-right-icon",
            // Note: InputBase classes will handle most of the layout, but we keep core wim-input classes
          )}
          disabled={isDisabled}
          value={currentValue}
          onChange={handleInputChange}
          type={inputType}
          {...props}
          placeholder={props.placeholder ? t(props.placeholder) : undefined}
          aria-label={props["aria-label"] ? t(props["aria-label"]) : undefined}
        />
      </InputBase>
    );
  },
);


Input.displayName = "Input";

/**
 * 複数の ref を1つにマージするユーティリティ
 */
function useMergeRef<T>(
  ...refs: (React.Ref<T> | null | undefined)[]
): React.RefCallback<T> {
  return React.useCallback(
    (value: T | null) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref != null) {
          (ref as React.MutableRefObject<T | null>).current = value;
        }
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs,
  );
}
