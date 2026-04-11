import React, { useId, forwardRef, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { useMergedRef } from "../../../hooks/useMergedRef";
import { Icon } from "../../media/Icon/Icon";
import { InputBase, InputBaseIcon } from "../InputBase";
import { FieldTemplate } from "../FieldTemplate";
import { FieldIntent, FieldVariant, FieldWidth } from "../../../types/tokens";
import styles from "./input.module.scss";

export interface InputProps extends Omit<React.ComponentPropsWithoutRef<"input">, "prefix"> {
  intent?: FieldIntent;
  variant?: FieldVariant;
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
  width?: FieldWidth | string | number;
  label?: React.ReactNode;
  error?: string;
  required?: boolean;
  layout?: "vertical" | "horizontal";
  inputClassName?: string;
  showPasswordAriaLabel?: string;
  hidePasswordAriaLabel?: string;
  rightIconAriaLabel?: string;
  styles?: React.ComponentProps<typeof InputBase>["styles"];
  asChild?: boolean;
}

/**
 * ユーザーからの入力を受け付けるための基本コンポーネント。
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
      styles: stylesProp,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const { t } = useTranslation("common");
    const resolvedShowPasswordAriaLabel = showPasswordAriaLabel ?? t("a11y.show_password");
    const resolvedHidePasswordAriaLabel = hidePasswordAriaLabel ?? t("a11y.hide_password");
    const resolvedRightIconAriaLabel = rightIconAriaLabel ?? t("a11y.right_icon_action");

    const [internalValue, setInternalValue] = useState(
      defaultValue ?? "",
    );
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
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
      const input = inputRef.current;
      if (!input) return;

      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value",
        // `getOwnPropertyDescriptor(...).set` の型は汎用的な PropertyDescriptor として扱われるため、
        // ネイティブセッターとして呼び出すには `as any` でキャストする必要がある。
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      )?.set as any;

      if (nativeInputValueSetter) {
        nativeInputValueSetter.call(input, "");
        input.dispatchEvent(new Event("input", { bubbles: true }));
      } else {
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
          className: rightIconClassName,
          rotated: rightIconRotated,
        });
      }
    }

    const inputType = type === "password" && isPasswordVisible ? "text" : type;
    const currentIntent = error ? "error" : intent;

    const generatedId = useId();
    const id = customId || `wim-input-${generatedId}`;
    const errorId = error ? `${id}-error` : undefined;
    const labelId = label ? `${id}-label` : undefined;

    const Component = asChild ? Slot : "input";

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
          intent={currentIntent}
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
          styles={stylesProp}
        >
          <Component
            id={id}
            ref={mergedRef}
            className={classNames(
              styles.root,
              styles[currentIntent],
              isDisabled && styles.disabled,
              styles[variant],
              inputClassName,
            )}
            disabled={isDisabled}
            value={currentValue}
            onChange={handleInputChange}
            type={inputType}
            aria-invalid={currentIntent === "error"}
            aria-describedby={errorId}
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
