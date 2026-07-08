import React, { useState, useCallback } from "react";

import { Input } from "../../form/Input/Input";
import classNames from "classnames";
import styles from "./input-mask.module.scss";

type InputMaskProps = React.ComponentProps<typeof Input> & {
  /** Mask pattern ('9': digit, 'a': letter, '*': alphanumeric; other characters are shown as-is) */
  mask: string;
  /** Placeholder character for unfilled mask positions */
  maskChar?: string;
};

/**
 * Masked input component that enforces a specific input format.
 * '9': digit (0-9)
 * 'a': letter (a-z, A-Z)
 * '*': alphanumeric
 * Other characters are shown as-is.
 */
export const InputMask = ({
  mask,
  maskChar = "_",
  value,
  defaultValue,
  onChange,
  ...props
}: InputMaskProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue || "");
  const isControlled = value !== undefined;
  const currentValue = isControlled ? (value as string) : internalValue;

  const applyMask = useCallback(
    (val: string) => {
      let result = "";
      let maskIndex = 0;

      // 実際には入力された文字だけを取り出してマスクに当てはめる
      const rawChars = val.replace(/[^a-zA-Z0-9]/g, "");
      let rawIndex = 0;

      while (maskIndex < mask.length) {
        const m = mask[maskIndex];
        if (m === "9" || m === "a" || m === "*") {
          if (rawIndex < rawChars.length) {
            const char = rawChars[rawIndex];
            if (
              (m === "9" && /[0-9]/.test(char)) ||
              (m === "a" && /[a-zA-Z]/.test(char)) ||
              m === "*"
            ) {
              result += char;
              rawIndex++;
            } else {
              // マッチしない場合はそこで止めるか、スキップするか
              // ここでは止める
              break;
            }
          } else {
            break;
          }
        } else {
          result += m;
        }
        maskIndex++;
      }

      return result;
    },
    [mask],
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = applyMask(e.target.value);
    if (!isControlled) {
      setInternalValue(maskedValue);
    }
    if (onChange) {
      // イベントを模倣して値を渡す
      const dummyEvent = {
        ...e,
        target: { ...e.target, value: maskedValue },
        currentTarget: { ...e.currentTarget, value: maskedValue },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(dummyEvent);
    }
  };

  return (
    <Input
      {...props}
      className={classNames(styles.root, props.className)}
      value={currentValue}
      onChange={handleInputChange}
      placeholder={props.placeholder || mask.replace(/[9a*]/g, maskChar)}
    />
  );
};
