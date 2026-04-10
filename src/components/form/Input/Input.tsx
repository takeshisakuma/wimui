import React, { useId } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import styles from "./input.module.scss";
import { useMergedRef } from "../../../hooks/useMergedRef";
import { Icon } from "../../media/Icon/Icon";
import { InputBase, InputBaseIcon } from "../InputBase";
import { FieldTemplate } from "../FieldTemplate";
import { FieldIntent, FieldVariant, FieldWidth } from "../../../types/tokens";

export type InputProps = React.ComponentPropsWithoutRef<"input"> & {
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
      showPasswordAriaLabel,
      hidePasswordAriaLabel,
      rightIconAriaLabel,
      styles: stylesProp,
      ...props
    },
    ref,
  ) => {
    const { t } = useTranslation("common");
    const resolvedShowPasswordAriaLabel = showPasswordAriaLabel ?? t("a11y.show_password");
    const resolvedHidePasswordAriaLabel = hidePasswordAriaLabel ?? t("a11y.hide_password");
    const resolvedRightIconAriaLabel = rightIconAriaLabel ?? t("a11y.right_icon_action");

    const [internalValue, setInternalValue] = React.useState(
      defaultValue ?? "",
    );
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
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
      const input = inputRef.current;
      if (!input) return;

      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value",
      )?.set;

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
          <input
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
