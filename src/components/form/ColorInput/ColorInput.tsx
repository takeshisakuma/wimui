import React, { useState, useCallback, useMemo } from "react";
import classNames from "classnames";
import { Input } from "../../form/Input/Input";
import styles from "./color-input.module.scss";

/**
 * HEX 色文字列を RGB に変換する。
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const cleaned = hex.replace("#", "");
  if (cleaned.length !== 6 && cleaned.length !== 3) return null;
  const full =
    cleaned.length === 3
      ? cleaned
          .split("")
          .map((c) => c + c)
          .join("")
      : cleaned;
  const num = parseInt(full, 16);
  if (isNaN(num)) return null;
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

/**
 * sRGB 成分から相対輝度を計算する（WCAG 2.x 準拠）。
 * 返り値は 0（黒）〜 1（白）。
 */
function relativeLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * 色が暗いかどうかを判定する。
 * WCAG AA 基準（コントラスト比 4.5:1）に近い閾値を使用。
 */
function isDarkColor(hex: string): boolean {
  const rgb = hexToRgb(hex);
  if (!rgb) return false;
  return relativeLuminance(rgb.r, rgb.g, rgb.b) < 0.4;
}

/**
 * カラー選択に特化した入力コンポーネント。
 */
export const ColorInput = ({
  className,
  value,
  defaultValue,
  onChange,
  style,
  ...props
}: React.ComponentProps<typeof Input>) => {
  const [internalValue, setInternalValue] = useState(
    () => (defaultValue as string) ?? "#000000",
  );

  const isControlled = value !== undefined;
  const currentColor = (isControlled ? value : internalValue) as string;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    },
    [isControlled, onChange],
  );

  const dark = useMemo(() => isDarkColor(currentColor), [currentColor]);

  return (
    <Input
      type="color"
      className={classNames(styles.root, dark && styles.dark, className)}
      value={currentColor}
      onChange={handleChange}
      style={style}
      {...props}
    />
  );
};
