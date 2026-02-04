import React from "react";
import PropTypes from "prop-types";
import "./input.scss";
import { Icon } from "../Icon/Icon";

type InputProps = React.ComponentPropsWithoutRef<"input"> & {
    state?: "default" | "error" | "disabled";
    variant?: "outline" | "ghost";
    fullWidth?: boolean;
    leftIcon?: "SearchIcon";
    rightIcon?: "ChevronDownIcon";
    leftIconColor?: React.ComponentProps<typeof Icon>["color"];
    rightIconColor?: React.ComponentProps<typeof Icon>["color"];
    onLeftIconClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onRightIconClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    allowClear?: boolean;
    showPasswordToggle?: boolean;
};

/**
 * ユーザーからの入力を受け付けるための基本コンポーネント。
 */
export const Input = ({
    state = "default",
    variant = "outline",
    fullWidth = false,
    className = "",
    disabled,
    leftIcon,
    rightIcon,
    leftIconColor,
    rightIconColor,
    onLeftIconClick,
    onRightIconClick,
    allowClear = false,
    showPasswordToggle = true,
    value,
    defaultValue,
    onChange,
    type,
    ...props
}: InputProps) => {
    // 内部状態
    const [internalValue, setInternalValue] = React.useState(defaultValue || "");
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    // disabled prop takes precedence for visual styling
    const effectiveState = disabled ? "disabled" : state;
    const stateClass = `wim-input--${effectiveState}`;
    const variantClass = `wim-input--${variant}`;
    const widthClass = fullWidth ? "wim-input--full-width" : "";

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isControlled) {
            setInternalValue(e.target.value);
        }
        if (onChange) {
            onChange(e);
        }
    };

    const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!isControlled) {
            setInternalValue("");
        }
        if (onChange) {
            const dummyEvent = {
                target: { value: "" },
                currentTarget: { value: "" },
            } as unknown as React.ChangeEvent<HTMLInputElement>;
            onChange(dummyEvent);
        }
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const getIconColor = (customColor?: React.ComponentProps<typeof Icon>["color"]) => {
        if (customColor) return customColor;
        if (state === "disabled" || disabled) return "disabled";
        if (state === "error") return "destructive";
        return "secondary";
    };

    // アイコン決定ロジック (優先順位順)
    let finalRightIcon: React.ComponentProps<typeof Icon>["name"] | undefined = undefined;
    let finalOnRightIconClick: ((e: React.MouseEvent<HTMLButtonElement>) => void) | undefined = undefined;

    if (type === "password" && showPasswordToggle) {
        // パスワード表示トグルを最優先 (セキュリティ上重要)
        finalRightIcon = isPasswordVisible ? "EyeOffIcon" : "EyeIcon";
        finalOnRightIconClick = togglePasswordVisibility;
    } else if (rightIcon === "ChevronDownIcon") {
        // 明示的な下矢印（ドロップダウン等）
        finalRightIcon = "ChevronDownIcon";
        finalOnRightIconClick = onRightIconClick;
    } else if (allowClear && currentValue) {
        // 文字がある時のクリアボタン
        finalRightIcon = "CloseIcon";
        finalOnRightIconClick = handleClear;
    }

    const inputType = type === "password" && isPasswordVisible ? "text" : type;

    const inputElement = (
        <input
            className={[
                "wim-input",
                stateClass,
                variantClass,
                widthClass,
                leftIcon ? "wim-input--has-left-icon" : "",
                finalRightIcon ? "wim-input--has-right-icon" : "",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            disabled={disabled || state === "disabled"}
            value={currentValue}
            onChange={handleInputChange}
            type={inputType}
            {...props}
        />
    );

    return (
        <div
            className={[
                "wim-input-container",
                widthClass,
                className,
            ]
                .filter(Boolean)
                .join(" ")}
        >
            {leftIcon && (
                <div className={[
                    "wim-input-icon",
                    "wim-input-icon--left",
                    onLeftIconClick ? "wim-input-icon--clickable" : "",
                ].filter(Boolean).join(" ")}>
                    {onLeftIconClick ? (
                        <button type="button" onClick={onLeftIconClick} className="wim-input-icon-button" aria-label="left-icon-action">
                            <Icon name={leftIcon} size="medium" color={getIconColor(leftIconColor)} />
                        </button>
                    ) : (
                        <Icon name={leftIcon} size="medium" color={getIconColor(leftIconColor)} />
                    )}
                </div>
            )}
            {inputElement}
            {finalRightIcon && (
                <div className={[
                    "wim-input-icon",
                    "wim-input-icon--right",
                    finalOnRightIconClick ? "wim-input-icon--clickable" : "",
                ].filter(Boolean).join(" ")}>
                    {finalOnRightIconClick ? (
                        <button type="button" onClick={finalOnRightIconClick} className="wim-input-icon-button" aria-label="right-icon-action">
                            <Icon name={finalRightIcon} size="medium" color={getIconColor(rightIconColor)} />
                        </button>
                    ) : (
                        <Icon name={finalRightIcon} size="medium" color={getIconColor(rightIconColor)} />
                    )}
                </div>
            )}
        </div>
    );
};

Input.propTypes = {
    /**
     * 入力フィールドの状態。
     */
    state: PropTypes.oneOf(["default", "error", "disabled"]),
    /**
     * 入力フィールドのデザインバリエーション。
     */
    variant: PropTypes.oneOf(["outline", "ghost"]),
    /**
     * 横幅を100%にするかどうか。
     */
    fullWidth: PropTypes.bool,
    /**
     * 追加のクラス名。
     */
    className: PropTypes.string,
    /**
     * 左側に表示するアイコン。検索のインジケーターとして SearchIcon のみを受け付けます。
     */
    leftIcon: PropTypes.oneOf(["SearchIcon"]),
    /**
     * 右側に表示するアイコン。ドロップダウン等を示す ChevronDownIcon のみを想定しています。
     */
    rightIcon: PropTypes.oneOf(["ChevronDownIcon"]),
    /**
     * クリアボタンを表示するかどうか。文字入力時に自動的に CloseIcon が右側に表示されます。
     */
    allowClear: PropTypes.bool,
    /**
     * パスワード表示切り替えボタンを表示するかどうか(type="password"時のみ)。デフォルト true。
     */
    showPasswordToggle: PropTypes.bool,
};
