import React from "react";
import classNames from "classnames";
import "../Input/input.scss";
import "./colorPicker.scss";

type ColorPickerProps = React.ComponentPropsWithoutRef<"input"> & {
  state?: "default" | "error" | "disabled";
  variant?: "outline" | "ghost";
  fullWidth?: boolean;
};

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
  // disabled prop takes precedence for visual styling
  const effectiveState = disabled ? "disabled" : state;

  return (
    <div
      className={classNames(
        "wim-input-container",
        "wim-colorpicker-container",
        fullWidth && "wim-input--full-width",
        className,
      )}
    >
      <input
        type="color"
        className={classNames(
          "wim-input",
          "wim-colorpicker",
          `wim-input--${disabled ? "disabled" : state}`,
          `wim-input--${variant}`,
          fullWidth && "wim-input--full-width",
          className,
        )}
        disabled={disabled || state === "disabled"}
        {...props}
      />
    </div>
  );
};
