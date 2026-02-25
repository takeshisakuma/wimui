import React from "react";
import { Input } from "../Input/Input";

/**
 * 数値入力に特化したコンポーネント。
 */
export const NumberInput = (props: React.ComponentProps<typeof Input>) => {
  return <Input type="number" {...props} />;
};
