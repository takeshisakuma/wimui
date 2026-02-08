import React from "react";
import { Input } from "../Input/Input";

/**
 * 検索に特化した入力コンポーネント。
 * 検索アイコンを標準装備し、入力がある場合はクリアボタンを表示します。
 */
export const SearchInput = (props: React.ComponentProps<typeof Input>) => {
    return (
        <Input
            leftIcon="SearchIcon"
            allowClear
            {...props}
        />
    );
};
