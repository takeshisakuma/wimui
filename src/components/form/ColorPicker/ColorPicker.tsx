import React from "react";
import styles from "./color-picker.module.scss";


import { Input, InputProps } from "../../form/Input/Input";
import { FieldIntent, FieldVariant } from "../../../types/tokens";

export type ColorPickerProps = Omit<InputProps, "type"> & {
  /** Semantic intent of the field (e.g. error state) */
  intent?: FieldIntent;
  /** Visual style variant of the field */
  variant?: FieldVariant;
  /** Whether to take full width of parent */
  fullWidth?: boolean;
};

/**
 * Component for selecting a color.
 */
export const ColorPicker = ({
  intent = "default",
  variant = "outline",
  fullWidth = false,
  className,
  disabled,
  ...props
}: ColorPickerProps) => {
  return (
    <Input
      type="color"
      intent={intent}
      variant={variant}
      fullWidth={fullWidth}
      className={className}
      inputClassName={styles.input}
      disabled={disabled}
      {...props}
    />
  );
};
