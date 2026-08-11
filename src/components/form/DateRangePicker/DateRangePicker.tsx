import React from "react";
import classNames from "classnames";
import { useId } from "react";
import { useWimTranslation } from "@/i18n/useWimTranslation";
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
  const { t } = useWimTranslation("components");
  const generatedId = useId();
  const id = `wim-daterangepicker-${generatedId}`;
  const labelId = label ? `${id}-label` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  /**
   * 内側の 2 つの入力に**必ず名前を与える**。
   *
   * 以前はここで `label={undefined}` と上書きしていたため、`startProps.label` を
   * 渡しても捨てられ、外側の `label` は `role="group"` にしか効かず、**入力 2 つが
   * 無名のまま出荷されていた**（axe `label` critical・T130）。
   *
   * 何も渡さないときの既定名を内蔵の翻訳から与え、`startProps` を後から広げる
   * ことで、利用者の `aria-label` が既定に勝つようにしている。
   *
   * **見えるラベルがあるときは既定名を出さない。** 両方付けると DOM に
   * `aria-label` と `aria-labelledby` が並び、accname では後者が勝つのに
   * 前者が残る（テストで気付いた）。
   */
  const startName = startProps?.label ? undefined : t("daterangepicker.start");
  const endName = endProps?.label ? undefined : t("daterangepicker.end");

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
            aria-label={startName}
            {...startProps}
            intent={error ? "danger" : startProps?.intent}
            fullWidth
          />
        </div>
        <span className={styles.separator}>~</span>
        <div className={styles.pickerWrapper}>
          <DatePicker
            aria-label={endName}
            {...endProps}
            intent={error ? "danger" : endProps?.intent}
            fullWidth
          />
        </div>
      </div>
    </FieldTemplate>
  );
};
