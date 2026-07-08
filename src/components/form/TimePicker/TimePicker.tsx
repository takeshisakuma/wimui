import React, { useState, useRef, forwardRef } from "react";
import classNames from "classnames";
import inputStyles from "../../form/Input/input.module.scss";
import styles from "./time-picker.module.scss";
import { useMergedRef } from "../../../hooks/useMergedRef";

import { Input, InputProps } from "../../form/Input/Input";
import { FieldIntent, FieldVariant } from "../../../types/tokens";

export type TimePickerProps = Omit<InputProps, "type" | "rightIcon"> & {
  /** Semantic intent of the field (e.g. error state) */
  intent?: FieldIntent;
  /** Visual style variant of the field */
  variant?: FieldVariant;
  /** Whether to take full width of parent */
  fullWidth?: boolean;
  /** Whether to show a clear button when value is present */
  allowClear?: boolean;
};

/**
 * Component for selecting a time.
 */
export const TimePicker = forwardRef<HTMLInputElement, TimePickerProps>(({
  intent = "default",
  variant = "outline",
  fullWidth = false,
  className,
  disabled,
  allowClear = true,
  value,
  defaultValue,
  onChange,
  ...props
}, ref) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const currentValue = isControlled ? value : internalValue;

  const inputRef = useRef<HTMLInputElement>(null);
  const mergedRef = useMergedRef(ref, inputRef);

  // Xボタンが表示されない場合（allowClear無効 or 値なし）はClockIconを表示
  const showClearButton = allowClear && !!currentValue && !disabled;
  const rightIcon = showClearButton ? undefined : "ClockIcon";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };

  const handleClockClick = () => {
    inputRef.current?.showPicker?.();
  };

  return (
    <Input
      ref={mergedRef}
      type="time"
      allowClear={showClearButton}
      intent={intent}
      variant={variant}
      fullWidth={fullWidth}
      className={className}
      inputClassName={classNames(inputStyles.root, styles.input)}
      disabled={disabled}
      value={value}
      defaultValue={defaultValue}
      onChange={handleChange}
      rightIcon={rightIcon}
      rightIconColor={showClearButton ? undefined : "primary"}
      onRightIconClick={showClearButton ? undefined : handleClockClick}
      {...props}
    />
  );
});

TimePicker.displayName = "TimePicker";
