import React from "react";
import classNames from "classnames";
import "../../form/Input/input.scss";
import "./timePicker.scss";

import { Input, InputProps } from "../../form/Input/Input";

export type TimePickerProps = Omit<InputProps, "type" | "rightIcon">;

/**
 * ユーザーが時間を選択するためのコンポーネント。
 */
export const TimePicker = ({
  intent = "default",
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
      intent={ intent }
      variant={variant}
      fullWidth={fullWidth}
      className={classNames("wim-timepicker", className)}
      disabled={disabled}
      {...props}
    />
  );
};
