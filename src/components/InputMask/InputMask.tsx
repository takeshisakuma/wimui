import React, { useState, useEffect, useCallback, useRef } from "react";

import { Input } from "../Input/Input";
import "./input-mask.scss";

type InputMaskProps = React.ComponentProps<typeof Input> & {
    mask: string;
    maskChar?: string;
};

/**
 * 特定の形式に沿った入力を強制するためのマスク付き入力コンポーネント。
 * '9': 数字 (0-9)
 * 'a': 英字 (a-z, A-Z)
 * '*': 英数字
 * その他: そのまま表示
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
    const inputRef = useRef<HTMLInputElement>(null);

    const applyMask = useCallback(
        (val: string) => {
            let result = "";
            let maskIndex = 0;
            let valIndex = 0;

            // 文字列からマスク対象外の文字をフィルタリング
            const cleanVal = val.split("").filter((char, i) => {
                // すでにマスクが適用されている場合、リテラル文字をスキップするために必要
                // ただし、単純なフィルタリングでは不十分な場合があるため、
                // 入力値のみを抽出するロジックを検討
                return true;
            });

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
                            (m === "*")
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
        [mask]
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
            value={currentValue}
            onChange={handleInputChange}
            placeholder={props.placeholder || mask.replace(/[9a*]/g, maskChar)}
        />
    );
};


