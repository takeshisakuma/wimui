import React, { useId, forwardRef, useState, useRef } from "react";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { useMergedRef } from "../../../hooks/useMergedRef";
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
      styles: stylesProp,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const { t } = useWimTranslation("common");
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

      // `getOwnPropertyDescriptor(...).set` は汎用的な PropertyDescriptor として扱われるため、
      // ネイティブセッターとして呼び出せるよう具体的な関数型へキャストする。
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value",
      )?.set as ((value: string) => void) | undefined;

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
    const currentIntent = error ? "danger" : intent;

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
          allowClear={allowClear}
          hasValue={!!currentValue}
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
            value={currentValue}
            onChange={handleInputChange}
            type={inputType}
            aria-invalid={currentIntent === "danger"}
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
