import React, { useState, useRef, useEffect, useId, forwardRef } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { Calendar } from "../../data-display/Calendar/Calendar";
import { InputBase } from "../InputBase";
import { useInlineFloating } from "../../_internal/useInlineFloating";
import { InlinePortal } from "../../_internal/InlinePortal";
import { useMergedRef } from "../../../hooks/useMergedRef";
import { FocusTrap } from "../../overlay/FocusTrap/FocusTrap";
import { FieldTemplate } from "../FieldTemplate";
import { FieldIntent, FieldVariant, FieldWidth } from "../../../types/tokens";
import styles from "./date-picker.module.scss";
import inputStyles from "../../form/Input/input.module.scss";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { componentsNs } from "@/i18n/generated/components";
import { composeEventHandlers } from "../../_internal/composeEventHandlers";
import { useEscapeLayer } from "../../_internal/escapeStack";

export type DatePickerLabels = {
  placeholder?: string;
};

export interface DatePickerProps extends Omit<
  React.ComponentPropsWithoutRef<"input">,
  "value" | "defaultValue" | "onChange"
> {
  /** Semantic intent of the field (e.g. error state) */
  intent?: FieldIntent;
  /** Visual style variant of the field */
  variant?: FieldVariant;
  /** Whether to take full width of parent */
  fullWidth?: boolean;
  /** Selected date value (`null` = cleared; omit/`undefined` = uncontrolled) */
  value?: Date | null;
  /** Default date value (uncontrolled) */
  defaultValue?: Date | null;
  /** Callback when date changes (`null` when cleared) */
  onChange?: (date: Date | null) => void;
  /** Date format for display (default: 'YYYY-MM-DD') */
  format?: string;
  /** Show clear button */
  clearable?: boolean;
  /** Placeholder text */
  placeholder?: string;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Disabled dates */
  disabledDates?: Date[];
  /** Field label */
  label?: string;
  /** Error message */
  error?: string;
  /** Whether to show the required indicator */
  required?: boolean;
  /** Layout direction of label and field */
  layout?: "vertical" | "horizontal";
  /** Labels for manual translation */
  labels?: DatePickerLabels;
  /** Fixed width of the field (width token, CSS value, or number in px) */
  width?: FieldWidth | string | number;
  /** Whether to render as a child element. */
  asChild?: boolean;
}

/**
 * Component for selecting a date.
 */
export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      intent = "default",
      variant = "outline",
      fullWidth = false,
      className,
      disabled,
      value,
      defaultValue,
      onChange,
      format = "YYYY-MM-DD",
      clearable = true,
      placeholder,
      minDate,
      maxDate,
      disabledDates,
      label,
      error,
      required,
      layout,
      id: customId,
      labels,
      width,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {

    const [isOpen, setIsOpen] = useState(false);
    const [internalValue, setInternalValue] = useState<Date | null>(
      defaultValue || null,
    );
    const containerRef = useRef<HTMLDivElement>(null);
    const portalRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);


    const { t } = useWimTranslation(componentsNs);
    const generatedId = useId();
    const id = customId || `wim-datepicker-${generatedId}`;
    const dropdownId = `${id}-dropdown`;
    const labelId = label ? `${id}-label` : undefined;
    const errorId = error ? `${id}-error` : undefined;

    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    const actualPlaceholder = placeholder ?? labels?.placeholder;
    const isDisabled = disabled;
    const currentIntent = error ? "danger" : intent;

    // Close calendar when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;
        if (
          containerRef.current &&
          !containerRef.current.contains(target) &&
          // 暦は body の影の箱にある（T432）。ここも内側に数える
          !portalRef.current?.contains(target)
        ) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // 開いている間の Escape。Dialog の中で開いても、閉じるのは暦だけ（T408）
    useEscapeLayer(isOpen, () => {
      setIsOpen(false);
      inputRef.current?.focus();
    });

    const formatDate = (date: Date | null): string => {
      if (!date) return "";

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      return format
        .replace("YYYY", String(year))
        .replace("MM", month)
        .replace("DD", day);
    };

    const handleDateChange = (date: Date) => {
      if (!isControlled) {
        setInternalValue(date);
      }
      onChange?.(date);
      setIsOpen(false);
      inputRef.current?.focus();
    };

    const handleClear = (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (!isDisabled) {
        if (!isControlled) {
          setInternalValue(null);
        }
        onChange?.(null);
      }
    };

    const handleInputClick = () => {
      if (!isDisabled) {
        setIsOpen(!isOpen);
      }
    };

    const handleInputKeyDown = (e: React.KeyboardEvent) => {
      if (isDisabled) return;

      if (e.key === "Escape") {
        // 開いていたときは止める。止めないと、暦の層が外れたあとの document で、外側の Dialog が同じ
        // Escape を受けて閉じる（開いた直後は、フォーカスがまだ入力欄にある。T408）
        if (isOpen) e.preventDefault();
        setIsOpen(false);
        inputRef.current?.focus();
      } else if (
        e.key === "Enter" ||
        e.key === " " ||
        (e.key === "ArrowDown" && (e.altKey || !isOpen))
      ) {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };

    // Focus management when opening
    useEffect(() => {
      if (isOpen) {
        const timer = setTimeout(() => {
          const focusedDay = portalRef.current?.querySelector<HTMLButtonElement>(
            '[data-calendar-day][tabindex="0"]:not(:disabled), [data-calendar-day][data-selected]:not(:disabled), [data-calendar-day]:focus',
          );
          if (focusedDay) {
            focusedDay.focus();
          } else {
            portalRef.current?.querySelector<HTMLButtonElement>(
              '[data-calendar-day]:not([data-other-month]):not(:disabled)',
            )?.focus();
          }
        }, 50);
        return () => clearTimeout(timer);
      }
    }, [isOpen]);

    const RootComponent = asChild ? Slot : "div";

    // 下に余地が無ければ上へ開き、画面の端からはみ出す分は内側へ寄せる（T342）。面は引き金の隣に
    // 描いたままで、向きと横のずれだけを受け取る。
    const { setReference: setFloatingReference, setFloating, setAnchor, floatingProps } = useInlineFloating({ open: isOpen && !disabled });
    const setAnchorRef = useMergedRef(portalRef, setAnchor);
    const setRootRef = useMergedRef(containerRef, ref, setFloatingReference);

    return (
      <FieldTemplate
        label={label}
        error={error}
        required={required}
        layout={layout}
        labelId={labelId}
        htmlFor={id}
        errorId={errorId}
        className={className}
      >
        <RootComponent
          ref={setRootRef}
          className={classNames("wim-date-picker", 
            styles.root,
            fullWidth && styles.fullWidth,
          )}
        >
          <InputBase
            intent={currentIntent}
            variant={variant}
            width={width}
            fullWidth={fullWidth}
            disabled={isDisabled}
            allowClear={clearable}
            hasValue={!!currentValue}
            onClear={handleClear}
            rightIcons={[
              {
                name: "ChevronDownIcon",
                rotated: isOpen,
                onClick: handleInputClick,
                // 開閉は入力欄の Enter / Space / ↓ が持つ。山形はポインタ用
                decorative: true,
              },
            ]}
          >
            <input
              id={id}
              ref={inputRef}
              type="text"
              readOnly
              role="combobox"
              className={classNames(
                inputStyles.root,
                styles.input,
              )}
              value={formatDate(currentValue)}
              placeholder={actualPlaceholder}
              disabled={isDisabled}
              aria-haspopup="dialog"
              aria-expanded={isOpen}
              aria-controls={isOpen ? dropdownId : undefined}
              aria-invalid={currentIntent === "danger"}
              aria-describedby={errorId}
              aria-labelledby={labelId}
              aria-required={required}
              {...props}
              onClick={composeEventHandlers(props.onClick, handleInputClick)}
              onKeyDown={composeEventHandlers(props.onKeyDown, handleInputKeyDown)}
            />
          </InputBase>
          {/* 暦は body へ出す（T432）。外側の overflow の箱（スクロールする Dialog の本文など）で切れないように。
              フォーカスは FocusTrap で暦の中に閉じ込めるので、DOM の位置が変わっても Tab の順は壊れない */}
          <InlinePortal open={isOpen && !disabled} transition="fade" anchorRef={setAnchorRef}>
          <div
            id={dropdownId}
            className={styles.dropdown}
            ref={setFloating}
            {...floatingProps}
          >
            <FocusTrap active={isOpen} initialFocus={false}>
              {/* パネルにも名前を付ける。見える label が無いとき（外側の <Label> で包む使い方・aria-label だけを
                  渡す使い方）は aria-labelledby が空になり、名前の無い dialog になっていた（axe の
                  aria-dialog-name・serious）。開いた姿のストーリーが無く、CI に写っていなかった。 */}
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby={labelId}
                aria-label={labelId ? undefined : (props["aria-label"] ?? t("datepicker.dialog"))}
              >
                {/* T349: 以前は 3 つとも受け取って捨てていて、範囲外の日を選べた。日の入り口は Calendar だけ（入力欄は打てない）なので、ここで渡せば足りる。 */}
                <Calendar
                  value={currentValue ?? undefined}
                  onChange={handleDateChange}
                  minDate={minDate}
                  maxDate={maxDate}
                  disabledDates={disabledDates}
                />
              </div>
            </FocusTrap>
          </div>
          </InlinePortal>
          {/* 利用者の要素（asChild の子）を Slottable に入れる。Slot はこれを根にして、上の中身をその中に描く。
              以前は逆（中身を Slottable に入れていた）で、asChild を付けると描画で例外になるか、部品の
              クラスが利用者の要素に付かなかった（T337）。 */}
          <Slottable>{children}</Slottable>
        </RootComponent>
      </FieldTemplate>
    );
  },
);

DatePicker.displayName = "DatePicker";

export default DatePicker;
