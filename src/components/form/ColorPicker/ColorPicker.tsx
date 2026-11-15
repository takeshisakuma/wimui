import React, { forwardRef, useRef, useState } from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { formNs } from "@/i18n/generated/form";
import styles from "./color-picker.module.scss";

import { Input, InputProps } from "../../form/Input/Input";
import { FieldIntent, FieldVariant } from "../../../types/tokens";
import { useMergedRef } from "../../../hooks/useMergedRef";
import { getRovingIndex } from "../../_internal/rovingIndex";

export type ColorPickerSwatch = string | {
  /** Color in `#rrggbb` (or `#rgb`) form */
  value: string;
  /** Name read out by assistive technology. Falls back to `value` */
  label?: string;
};

export type ColorPickerProps = Omit<InputProps, "type"> & {
  /** Semantic intent of the field (e.g. error state) */
  intent?: FieldIntent;
  /** Visual style variant of the field */
  variant?: FieldVariant;
  /** Whether to take full width of parent */
  fullWidth?: boolean;
  /**
   * Preset colors shown next to the field. Choosing one sets it as the value
   * and fires `onChange` like the native picker does. Use `#rrggbb` (or `#rgb`).
   * Name the field with the `label` prop rather than wrapping it in a `<label>`:
   * the swatch buttons inside a `<label>` would be read as part of the field's name.
   */
  swatches?: ColorPickerSwatch[];
  /** Accessible name of the swatch group */
  swatchesLabel?: string;
};

// ネイティブの color の値は常に小文字の #rrggbb。見本の値もそろえて比べる（#rgb は広げる）
const normalizeHex = (color: string) => {
  const hex = color.trim().toLowerCase();
  const short = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/.exec(hex);
  return short ? `#${short[1]}${short[1]}${short[2]}${short[2]}${short[3]}${short[3]}` : hex;
};

/**
 * Component for selecting a color.
 */
export const ColorPicker = forwardRef<HTMLInputElement, ColorPickerProps>(({
  intent = "default",
  variant = "outline",
  fullWidth = false,
  className,
  disabled,
  swatches,
  swatchesLabel,
  value,
  defaultValue,
  onChange,
  ...props
}, ref) => {
  const { t } = useWimTranslation(formNs);
  const inputRef = useRef<HTMLInputElement>(null);
  const mergedRef = useMergedRef(inputRef, ref);
  const swatchRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [uncontrolledValue, setUncontrolledValue] = useState(String(defaultValue ?? "#000000"));
  const current = normalizeHex(String(value ?? uncontrolledValue));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (value === undefined) setUncontrolledValue(event.target.value);
    onChange?.(event);
  };

  const input = (
    <Input
      ref={mergedRef}
      type="color"
      intent={intent}
      variant={variant}
      fullWidth={fullWidth}
      className={classNames("wim-color-picker", className)}
      inputClassName={styles.input}
      disabled={disabled}
      value={value}
      defaultValue={defaultValue}
      onChange={handleChange}
      {...props}
    />
  );

  if (!swatches?.length) return input;

  const items = swatches.map((swatch) =>
    typeof swatch === "string"
      ? { value: normalizeHex(swatch), label: swatch }
      : { value: normalizeHex(swatch.value), label: swatch.label ?? swatch.value },
  );
  const selectedIndex = items.findIndex((item) => item.value === current);

  // ネイティブの選ぶ面で選んだときと同じ経路を通す（input イベント → React の onChange）。
  // 値を直に書くと React の値の追跡に気づかれず onChange が来ない。prototype の setter で書けば、
  // 非制御・制御・react-hook-form の register のどれでも同じに届く
  const choose = (color: string) => {
    const element = inputRef.current;
    if (!element) return;
    Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set?.call(element, color);
    element.dispatchEvent(new Event("input", { bubbles: true }));
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    const next = getRovingIndex({ key: event.key, current: index, count: items.length });
    if (next === null) return;
    event.preventDefault();
    choose(items[next].value);
    swatchRefs.current[next]?.focus();
  };

  return (
    <div className={classNames(styles.root, fullWidth && styles.fullWidth)}>
      {input}
      <div
        role="radiogroup"
        aria-label={swatchesLabel ?? t("color_picker.swatches")}
        className={styles.swatches}
      >
        {items.map((item, index) => {
          const checked = index === selectedIndex;
          return (
            <button
              key={`${item.value}-${index}`}
              ref={(el) => {
                swatchRefs.current[index] = el;
              }}
              type="button"
              role="radio"
              aria-checked={checked}
              aria-label={item.label}
              tabIndex={checked || (selectedIndex === -1 && index === 0) ? 0 : -1}
              disabled={disabled}
              className={styles.swatch}
              style={{ "--wim-swatch-fill": item.value } as React.CSSProperties}
              onClick={() => choose(item.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          );
        })}
      </div>
    </div>
  );
});

ColorPicker.displayName = "ColorPicker";
