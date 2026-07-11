import React from "react";
import classNames from "classnames";
import { useId } from "react";
import { DatePicker } from "../../form/DatePicker/DatePicker";
import { FieldTemplate } from "../FieldTemplate";
import styles from "./date-range-picker.module.scss";

type DateRangePickerProps = {
  /** Props passed to the start-date DatePicker */
  startProps?: React.ComponentProps<typeof DatePicker>;
  /** Props passed to the end-date DatePicker */
  endProps?: React.ComponentProps<typeof DatePicker>;
  /** Additional class names */
  className?: string;
  /** Field label */
  label?: string;
  /** Error message */
  error?: string;
  /** Whether to show the required indicator */
  required?: boolean;
  /** Layout direction of label and field */
  layout?: "vertical" | "horizontal";
};

/**
 * Component for selecting a date range (start and end dates).
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
      className={classNames("wim-date-range-picker", styles.container, className)}
    >
      <div
        className={styles.root}
        role="group"
        aria-labelledby={labelId}
        aria-describedby={errorId}
      >
        <div className={styles.pickerWrapper}>
          <DatePicker
            {...startProps}
            label={undefined}
            error={undefined}
            intent={error ? "error" : startProps?.intent}
            fullWidth
          />
        </div>
        <span className={styles.separator}>~</span>
        <div className={styles.pickerWrapper}>
          <DatePicker
            {...endProps}
            label={undefined}
            error={undefined}
            intent={error ? "error" : endProps?.intent}
            fullWidth
          />
        </div>
      </div>
    </FieldTemplate>
  );
};
