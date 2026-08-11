import React, { useCallback, useState } from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { Input } from "../../form/Input/Input";
import styles from "./color-input.module.scss";

/** `#rgb` / `#rrggbb`（大文字小文字は問わない）。 */
const HEX = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;

/**
 * `#abc` → `#aabbcc`。`input[type="color"]` は 6 桁しか受け付けないので、
 * **見本に渡すときだけ**伸ばす。入力欄の文字は打ったまま残す。
 */
const toSixDigit = (hex: string) =>
  hex.length === 4
    ? `#${hex
        .slice(1)
        .split("")
        .map((c) => c + c)
        .join("")}`
    : hex;

/**
 * 色を**文字で入れる**ための入力。`#f3ece1` のような値をそのまま打てて、
 * 右の見本から選ぶこともできる。
 *
 * **以前は `<Input type="color">` を出すだけ**で、テキスト欄が無かった。
 * `ColorPicker` と同じ見た目・同じ操作で、docs が言う「正確な値を文字で入れる」
 * ができない状態だった（T122）。役割分担はこう:
 *
 * - `ColorInput` — 値が決まっている（ブランド色・デザイン指定）ときに**打ち込む**
 * - `ColorPicker` — 値が決まっていないときに**見て選ぶ**
 */
export const ColorInput = ({
  className,
  value,
  defaultValue,
  onChange,
  style,
  ...props
}: React.ComponentProps<typeof Input>) => {
  const { t } = useWimTranslation("components");
  const [internalValue, setInternalValue] = useState(
    () => (defaultValue as string) ?? "#000000",
  );

  const isControlled = value !== undefined;
  const currentColor = (isControlled ? value : internalValue) as string;

  /**
   * 入力途中（`#1f` など）を消さずに見せるため、表示は別に持つ。
   * 確定した色が**外から**変わったときだけ表示を追随させる ── レンダー中に
   * 直前の色と比べて調整する形（effect で setState すると連鎖レンダーになる）。
   */
  const [text, setText] = useState<string>(currentColor);
  const [lastColor, setLastColor] = useState<string>(currentColor);
  if (currentColor !== lastColor) {
    setLastColor(currentColor);
    setText(currentColor);
  }

  const commit = useCallback(
    (next: string, e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setInternalValue(next);
      onChange?.(e);
    },
    [isControlled, onChange],
  );

  /** 文字を打っている間は何も確定しない。hex として読めた時点で確定する。 */
  const handleText = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;
      setText(raw);
      if (HEX.test(raw.trim())) commit(raw.trim(), e);
    },
    [commit],
  );

  const handleSwatch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
      commit(e.target.value, e);
    },
    [commit],
  );

  const swatchValue = HEX.test(currentColor)
    ? toSixDigit(currentColor).toLowerCase()
    : "#000000";

  return (
    <Input
      type="text"
      className={classNames("wim-color-input", styles.root, className)}
      value={text}
      onChange={handleText}
      style={style}
      spellCheck={false}
      autoCapitalize="none"
      autoCorrect="off"
      inputClassName={styles.input}
      suffix={
        <input
          type="color"
          className={styles.swatch}
          value={swatchValue}
          onChange={handleSwatch}
          disabled={props.disabled}
          aria-label={t("colorinput.swatch")}
          tabIndex={-1}
        />
      }
      {...props}
    />
  );
};
