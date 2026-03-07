import React from "react";
import classNames from "classnames";
import "../Input/input.scss";
import "./colorPicker.scss";


/**
 * ユーザーが色を選択するためのコンポーネント。
 */
import { Input, InputProps } from "../Input/Input";

export type ColorPickerProps = Omit<InputProps, "type">;

/**
 * ユーザーが色を選択するためのコンポーネント。
 */
export const ColorPicker = ({
  state = "default",
  variant = "outline",
  fullWidth = false,
  className,
  disabled,
  ...props
}: ColorPickerProps) => {
  return (
    <Input
      type="color"
      state={state}
      variant={variant}
      fullWidth={fullWidth}
      className={classNames("wim-colorpicker", className)}
      disabled={disabled}
      {...props}
    />
  );
};
