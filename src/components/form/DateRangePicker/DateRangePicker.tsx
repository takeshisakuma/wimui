import React from "react";
import classNames from "classnames";
import { useId } from "react";
import { DatePicker } from "../../form/DatePicker/DatePicker";
import { FieldTemplate } from "../FieldTemplate";
import styles from "./date-range-picker.module.scss";

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
      className={classNames(styles.container, className)}
    >
      <div
        className={styles.root}
        role="group"
        aria-labelledby={labelId}
        aria-describedby={errorId}
      >
        <div className={styles.pickerWrapper}>
          <DatePicker {...startProps} fullWidth />
        </div>
        <span className={styles.separator}>~</span>
        <div className={styles.pickerWrapper}>
          <DatePicker {...endProps} fullWidth />
        </div>
      </div>
    </FieldTemplate>
  );
};
