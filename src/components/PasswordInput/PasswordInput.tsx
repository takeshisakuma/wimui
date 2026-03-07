import React, { useState } from "react";
import { Input } from "../Input/Input";

type PasswordInputProps = React.ComponentProps<typeof Input>;

/**
 * パスワード入力に特化したコンポーネント。
 * 表示/非表示の切り替え機能を内蔵しています。
 */
export const PasswordInput = (
  props: Omit<
    PasswordInputProps,
    "type" | "rightIcon" | "onRightIconClick" | "showPasswordToggle"
  >,
) => {
  return <Input {...props} type="password" showPasswordToggle={true} />;
};
