import React from "react";
import { Input } from "../Input/Input";

/**
 * カラー選択に特化した入力コンポーネント。
 */
export const ColorInput = (props: React.ComponentProps<typeof Input>) => {
    return (
        <Input
            type="color"
            {...props}
        />
    );
};
