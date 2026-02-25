import React from "react";
import classNames from "classnames";
import { DatePicker } from "../DatePicker/DatePicker";
import "./dateRangePicker.scss";

type DateRangePickerProps = {
  startProps?: React.ComponentProps<typeof DatePicker>;
  endProps?: React.ComponentProps<typeof DatePicker>;
  className?: string;
};

/**
 * ユーザーが日付の範囲（開始日・終了日）を選択するためのコンポーネント。
 */
export const DateRangePicker = ({
  startProps,
  endProps,
  className,
}: DateRangePickerProps) => {
  return (
    <div className={classNames("wim-daterangepicker", className)}>
      <DatePicker {...startProps} fullWidth />
      <span className="wim-daterangepicker-separator">~</span>
      <DatePicker {...endProps} fullWidth />
    </div>
  );
};
