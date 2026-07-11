import React from "react";
import classNames from "classnames";
import { Input } from "../../form/Input/Input";

type PasswordInputProps = React.ComponentProps<typeof Input>;

/**
 * パスワード入力に特化したコンポーネント。
 * 表示/非表示の切り替え機能を内蔵しています。
 */
export const PasswordInput = (
  // placeholder は型レベルで禁止（RULES.md: パスワード入力に placeholder は付けない。
  // 平文表示は入力例として機能せず、伏字風の文字列は入力済みと誤認されるため）
  props: Omit<
    PasswordInputProps,
    "type" | "rightIcon" | "onRightIconClick" | "showPasswordToggle" | "placeholder"
  >,
) => {
  return <Input {...props} type="password" showPasswordToggle={true} className={classNames("wim-password-input", props.className)} />;
};
