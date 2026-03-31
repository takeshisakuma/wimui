import React from "react";
import classNames from "classnames";
import { useId } from "react";
import { DatePicker } from "../../form/DatePicker/DatePicker";
import { FieldTemplate } from "../../_internal/FieldTemplate/FieldTemplate";
import "./dateRangePicker.scss";

type DateRangePickerProps = {
  startProps?: React.ComponentProps<typeof DatePicker>;
  endProps?: React.ComponentProps<typeof DatePicker>;
  className?: string;
  label?: string;
  error?: string;
  required?: boolean;
  layout?: "vertical" | "horizontal";
};

/**
 * ユーザーが日付の範囲（開始日・終了日）を選択するためのコンポーネント。
 */
export const DateRangePicker = ({
  startProps,
  endProps,
  className,
  label,
  error,
  required,
  layout = "vertical",
}: DateRangePickerProps) => {
  const generatedId = useId();
  const id = `wim-daterangepicker-${generatedId}`;
  const labelId = label ? `${id}-label` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  return (
    <FieldTemplate
      label={label}
      error={error}
      required={required}
      layout={layout}
      labelId={labelId}
      errorId={errorId}
      className={classNames("wim-daterangepicker-container", className)}
    >
      <div className="wim-daterangepicker">
        <DatePicker {...startProps} fullWidth />
        <span className="wim-daterangepicker-separator">~</span>
        <DatePicker {...endProps} fullWidth />
      </div>
    </FieldTemplate>
  );
};
