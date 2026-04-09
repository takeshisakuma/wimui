import React from "react";
import classNames from "classnames";
import { Input } from "../../form/Input/Input";
import inputStyles from "../../form/Input/input.module.scss";

export type NumberInputProps = React.ComponentProps<typeof Input> & {
  /**
   * 'number': ネイティブの type="number" を使用（数量の増減など）
   * 'text': type="text" + inputmode を使用（クレカ番号、IDなど、ゼロを保持したい場合）
   */
  mode?: "number" | "text";
  /** スピンボタンを非表示にするか */
  hideSpinButton?: boolean;
  /** 小数点を許可するか (mode="number" の場合のみ有効) */
  allowDecimal?: boolean;
  /** 負の数を許可するか (mode="number" の場合のみ有効) */
  allowNegative?: boolean;
};

/**
 * 数値入力に特化したコンポーネント。
 */
export const NumberInput = ({
  mode = "number",
  hideSpinButton = true,
  allowDecimal = false,
  allowNegative = false,
  onKeyDown,
  className,
  ...props
}: NumberInputProps) => {
  const type = mode === "number" ? "number" : "text";

  // mode="text" の場合は、ドキュメント推奨の属性を自動付与
  const inputMode = mode === "text" ? "numeric" : props.inputMode;
  const pattern = mode === "text" ? "[0-9]*" : props.pattern;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (mode === "number") {
      // 不適切な文字の入力をブロック (指数表記 e, E, +, -, .)
      const blockedKeys = ["e", "E"];
      if (!allowNegative) blockedKeys.push("-", "+");
      if (!allowDecimal) blockedKeys.push(".");

      if (blockedKeys.includes(e.key)) {
        e.preventDefault();
      }
    }

    onKeyDown?.(e);
  };

  return (
    <Input
      {...props}
      type={type}
      inputMode={inputMode}
      pattern={pattern}
      onKeyDown={handleKeyDown}
      className={className}
      inputClassName={classNames(
        hideSpinButton && inputStyles.hideSpin
      )}
    />
  );
};
