import React from "react";
import styles from "./color-picker.module.scss";


/**
 * ユーザーが色を選択するためのコンポーネント。
 */
import { Input, InputProps } from "../../form/Input/Input";

export type ColorPickerProps = Omit<InputProps, "type">;

/**
 * ユーザーが色を選択するためのコンポーネント。
 */
export const ColorPicker = ({
  status = "default",
  variant = "outline",
  fullWidth = false,
  className,
  disabled,
  ...props
}: ColorPickerProps) => {
  return (
    <Input
      type="color"
      status={status}
      variant={variant}
      fullWidth={fullWidth}
      className={className}
      inputClassName={styles.input}
      disabled={disabled}
      {...props}
    />
  );
};
