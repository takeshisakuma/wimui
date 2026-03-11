import React from "react";
import classNames from "classnames";
import "../Input/input.scss";
import "./timePicker.scss";

import { Input, InputProps } from "../Input/Input";

export type TimePickerProps = Omit<InputProps, "type" | "rightIcon">;

/**
 * ユーザーが時間を選択するためのコンポーネント。
 */
export const TimePicker = ({
  status = "default",
  variant = "outline",
  fullWidth = false,
  className,
  disabled,
  allowClear = true,
  ...props
}: TimePickerProps) => {
  return (
    <Input
      type="time"
      allowClear={allowClear}
      status={status}
      variant={variant}
      fullWidth={fullWidth}
      className={classNames("wim-timepicker", className)}
      disabled={disabled}
      {...props}
    />
  );
};
