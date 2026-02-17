import React from "react";
import classNames from "classnames";
import { Input } from "../Input/Input";

/**
 * カラー選択に特化した入力コンポーネント。
 */
export const ColorInput = ({ className, ...props }: React.ComponentProps<typeof Input>) => {
    return (
        <Input
            type="color"
            className={classNames("wim-color-input", className)}
            {...props}
        />
    );
};
