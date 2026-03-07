import React from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import "./input.scss";
import { Icon } from "../Icon/Icon";

export type InputProps = React.ComponentPropsWithoutRef<"input"> & {
  state?: "default" | "error" | "disabled";
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
  width?: "xs" | "sm" | "md" | "lg" | "xl" | string | number;
};

/**
 * ユーザーからの入力を受け付けるための基本コンポーネント。
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      state = "default",
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

    // `state="disabled"` は後方互換のために残すが、標準の `disabled` を優先
    const isDisabled = disabled || state === "disabled";

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

    const getIconColor = (
      customColor?: React.ComponentProps<typeof Icon>["color"],
    ) => {
      if (customColor) return customColor;
      if (isDisabled) return "disabled";
      if (state === "error") return "destructive";
      return "secondary";
    };

    // アイコン決定ロジック
    const showClear = allowClear && currentValue && !isDisabled;
    const showPasswordToggleBtn = type === "password" && showPasswordToggle;

    const rightIcons: Array<{
      name: React.ComponentProps<typeof Icon>["name"];
      onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
      color?: React.ComponentProps<typeof Icon>["color"];
      ariaLabel?: string;
      className?: string;
    }> = [];

    if (showPasswordToggleBtn) {
      rightIcons.push({
        name: isPasswordVisible ? "EyeOffIcon" : "EyeIcon",
        onClick: togglePasswordVisibility as unknown as (
          e: React.MouseEvent<HTMLButtonElement>,
        ) => void,
        ariaLabel: isPasswordVisible ? t("a11y_hide_password") : t("a11y_show_password"),
      });
    }

    // クリアボタン
    if (showClear) {
      rightIcons.push({
        name: "CloseIcon",
        onClick: handleClear as unknown as (
          e: React.MouseEvent<HTMLButtonElement>,
        ) => void,
        ariaLabel: t("a11y_clear_input"),
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
        });
      }
    }

    const inputType = type === "password" && isPasswordVisible ? "text" : type;

    const effectiveState = isDisabled ? "disabled" : state;

    const inputElement = (
      <input
        ref={mergedRef}
        className={classNames(
          "wim-input",
          `wim-input--${effectiveState}`,
          `wim-input--${variant}`,
          fullWidth && "wim-input--full-width",
          leftIcon && "wim-input--has-left-icon",
          rightIcons.length > 0 && "wim-input--has-right-icon",
          rightIcons.length >= 2 && "wim-input--has-multiple-right-icons",
          !rightIcons.length && allowClear && "wim-input--reserve-right-icon",
          width !== undefined && "wim-input--has-custom-width",
          className,
        )}
        disabled={isDisabled}
        value={currentValue}
        onChange={handleInputChange}
        type={inputType}
        {...props}
        placeholder={props.placeholder ? t(props.placeholder) : undefined}
        aria-label={props["aria-label"] ? t(props["aria-label"]) : undefined}
      />
    );

    const isSemanticWidth =
      typeof width === "string" && ["xs", "sm", "md", "lg", "xl"].includes(width);

    // fullWidth が true の場合は width 属性よりも優先される
    const effectiveHasCustomWidth = width !== undefined && !isSemanticWidth && !fullWidth;
    const effectiveSemanticWidth = isSemanticWidth && !fullWidth ? width : undefined;

    return (
      <div
        className={classNames(
          "wim-input-container",
          fullWidth && "wim-input--full-width",
          effectiveHasCustomWidth && "wim-input--has-custom-width",
          effectiveSemanticWidth && `wim-input--width-${effectiveSemanticWidth}`,
          leftIcon && "wim-input--has-left-icon",
          rightIcons.length > 0 && "wim-input--has-right-icon",
          rightIcons.length >= 2 && "wim-input--has-multiple-right-icons",
        )}
        style={
          effectiveHasCustomWidth
            ? ({
              ["--wim-input-width" as any]:
                typeof width === "number" ? `${width}px` : width,
            } as React.CSSProperties)
            : undefined
        }
      >
        {leftIcon && (
          <div
            className={classNames(
              "wim-input-icon",
              "wim-input-icon--left",
              onLeftIconClick && "wim-input-icon--clickable",
            )}
          >
            {onLeftIconClick ? (
              <button
                type="button"
                onClick={onLeftIconClick}
                className="wim-input-icon-button"
                aria-label={t("a11y_left_icon_action")}
              >
                <Icon
                  name={leftIcon}
                  size="medium"
                  color={getIconColor(leftIconColor)}
                />
              </button>
            ) : (
              <Icon
                name={leftIcon}
                size="medium"
                color={getIconColor(leftIconColor)}
              />
            )}
          </div>
        )}
        {inputElement}
        {rightIcons.length > 0 && (
          <div
            className={classNames(
              "wim-input-icons",
              "wim-input-icons--right",
            )}
          >
            {rightIcons.map((icon, index) => (
              <div
                key={`${icon.name}-${index}`}
                className={classNames(
                  "wim-input-icon-item",
                  icon.onClick && "wim-input-icon-item--clickable",
                  (icon as any).className,
                )}
              >
                {icon.onClick ? (
                  <button
                    type="button"
                    onClick={icon.onClick}
                    className="wim-input-icon-button"
                    aria-label={icon.ariaLabel || t("a11y_right_icon_action")}
                  >
                    <Icon
                      name={icon.name}
                      size="medium"
                      color={getIconColor(icon.color)}
                    />
                  </button>
                ) : (
                  <Icon
                    name={icon.name}
                    size="medium"
                    color={getIconColor(icon.color)}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
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
