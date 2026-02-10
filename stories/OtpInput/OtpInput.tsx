import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./otp-input.scss";

type OtpInputProps = {
    length?: number;
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    error?: boolean;
    className?: string;
};

/**
 * OTP（ワンタイムパスワード）入力用コンポーネント。
 */
export const OtpInput = ({
    length = 6,
    value = "",
    onChange,
    disabled = false,
    error = false,
    className = "",
}: OtpInputProps) => {
    // 内部状態（非制御時にも対応できるようにするが、基本は制御コンポーネントとして使う想定）
    const [internalValues, setInternalValues] = useState<string[]>(Array(length).fill(""));
    const [prevValue, setPrevValue] = useState(value);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    // value propsが変更されたら内部状態を同期 (Derived State Pattern)
    if (value !== prevValue) {
        setPrevValue(value);
        const chars = value.split("").slice(0, length);
        const newValues = Array(length).fill("").map((_, i) => chars[i] || "");
        setInternalValues(newValues);
    }

    const triggerChange = (newValues: string[]) => {
        const newValueString = newValues.join("");
        if (onChange) {
            onChange(newValueString);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const val = e.target.value;
        // 数字のみ入力可能にする場合はここで正規表現チェックを入れるが、
        // 汎用性のためあえて制限しない（必要ならPropsで制御する形へ拡張）
        // 現状は最後の1文字を取得（入力上書き挙動）
        const newChar = val.slice(-1);

        const newValues = [...internalValues];
        newValues[index] = newChar;
        setInternalValues(newValues);
        triggerChange(newValues);

        // 文字が入力されたら次のフィールドへフォーカス
        if (newChar && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace") {
            if (!internalValues[index] && index > 0) {
                // 現在の入力が空でBackspaceが押されたら、前の入力へ移動して削除
                const newValues = [...internalValues];
                newValues[index - 1] = "";
                setInternalValues(newValues);
                triggerChange(newValues);
                inputRefs.current[index - 1]?.focus();
            } else if (internalValues[index]) {
                // 値がある場合は単に削除
                const newValues = [...internalValues];
                newValues[index] = "";
                setInternalValues(newValues);
                triggerChange(newValues);
            }
        } else if (e.key === "ArrowLeft" && index > 0) {
            e.preventDefault();
            inputRefs.current[index - 1]?.focus();
        } else if (e.key === "ArrowRight" && index < length - 1) {
            e.preventDefault();
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text").slice(0, length);
        const chars = pastedData.split("");

        const newValues = [...internalValues];
        chars.forEach((char, i) => {
            if (i < length) {
                newValues[i] = char;
            }
        });

        setInternalValues(newValues);
        triggerChange(newValues);

        // 貼り付けた最後の文字の次のboxにフォーカス、または最後のboxにフォーカス
        const nextFocusIndex = Math.min(chars.length, length - 1);
        inputRefs.current[nextFocusIndex]?.focus();
    };

    return (
        <div
            className={[
                "wim-otp-input-container",
                disabled ? "wim-otp-input-container--disabled" : "",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
        >
            {Array.from({ length }).map((_, index) => (
                <input
                    key={index}
                    ref={(el) => { inputRefs.current[index] = el; }}
                    className={[
                        "wim-otp-input",
                        error ? "wim-otp-input--error" : "",
                        disabled ? "wim-otp-input--disabled" : "",
                    ]
                        .filter(Boolean)
                        .join(" ")}
                    type="text"
                    maxLength={1} // 基本的に1文字だが、onChange制御で上書きも許可している
                    value={internalValues[index]}
                    onChange={(e) => handleInputChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={handlePaste}
                    disabled={disabled}
                    aria-label={`Digit ${index + 1}`}
                />
            ))}
        </div>
    );
};

OtpInput.propTypes = {
    /**
     * 入力桁数。デフォルトは6。
     */
    length: PropTypes.number,
    /**
     * 現在の値。
     */
    value: PropTypes.string,
    /**
     * 値が変更された時に呼ばれるコールバック。結合された文字列を返します。
     */
    onChange: PropTypes.func,
    /**
     * 無効化フラグ。
     */
    disabled: PropTypes.bool,
    /**
     * エラー状態フラグ。
     */
    error: PropTypes.bool,
    /**
     * 追加のクラス名。
     */
    className: PropTypes.string,
};
