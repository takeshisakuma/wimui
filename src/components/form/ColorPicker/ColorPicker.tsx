import React from "react";
import classNames from "classnames";
import "../../form/Input/input.scss";
import "./colorPicker.scss";


/**
 * ユーザーが色を選択するためのコンポーネント。
 */
import { Input, InputProps } from "../../form/Input/Input";

export type ColorPickerProps = Omit<InputProps, "type">;

/**
 * ユーザーが色を選択するためのコンポーネント。
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
      intent={ intent }
      variant={variant}
      fullWidth={fullWidth}
      className={classNames("wim-colorpicker", className)}
      disabled={disabled}
      {...props}
    />
  );
};
