import React, { useState, useId } from "react";
import classNames from "classnames";
import { Icon } from "../Icon/Icon";
import "./rating.scss";

type RatingProps = {
    /**
     * 現在の値
     */
    value?: number;
    /**
     * デフォルトの値（非制御時）
     */
    defaultValue?: number;
    /**
     * 星の総数
     */
    count?: number;
    /**
     * ハーフスターを許可するかどうか
     */
    allowHalf?: boolean;
    /**
     * 無効化フラグ（読み取り専用）
     */
    disabled?: boolean;
    /**
     * サイズ
     */
    size?: "small" | "medium" | "large";
    /**
     * 値変更時のコールバック
     */
    onChange?: (value: number) => void;
    /**
     * 追加のクラス名
     */
    className?: string;
    /**
     * アクセシビリティ用のラベル
     */
    label?: string;
};

/**
 * ユーザーが評価を入力するためのレーティングコンポーネント。
 */
export const Rating = ({
    value,
    defaultValue = 0,
    count = 5,
    allowHalf = false,
    disabled = false,
    size = "medium",
    onChange,
    className,
    label,
    ...props
}: RatingProps) => {
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [hoverValue, setHoverValue] = useState<number | null>(null);
    const generatedId = useId();
    const labelId = `wim-rating-label-${generatedId}`;

    const currentValue = isControlled ? value! : internalValue;
    const displayValue = hoverValue !== null ? hoverValue : currentValue;

    const handleMouseMove = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
        if (disabled) return;

        let val = index + 1;
        if (allowHalf) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            if (x <= rect.width / 2) {
                val -= 0.5;
            }
        }
        setHoverValue(val);
    };

    const handleMouseLeave = () => {
        if (disabled) return;
        setHoverValue(null);
    };

    const handleClick = (val: number) => {
        if (disabled) return;

        if (!isControlled) {
            setInternalValue(val);
        }
        onChange?.(val);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (disabled) return;

        let nextValue = currentValue;
        const step = allowHalf ? 0.5 : 1;

        if (e.key === "ArrowRight" || e.key === "ArrowUp") {
            nextValue = Math.min(count, currentValue + step);
        } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
            nextValue = Math.max(0, currentValue - step);
        } else if (e.key === "Home") {
            nextValue = 0;
        } else if (e.key === "End") {
            nextValue = count;
        } else {
            return;
        }

        e.preventDefault();
        handleClick(nextValue);
    };

    const renderStar = (index: number) => {
        const starValue = index + 1;
        let isFull = displayValue >= starValue;
        let isHalf = !isFull && displayValue >= starValue - 0.5;

        return (
            <div
                key={index}
                className={classNames("wim-rating__star", isFull && "wim-rating__star--full", isHalf && "wim-rating__star--half")}
                onMouseMove={(e) => handleMouseMove(index, e)}
                onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    let val = index + 1;
                    if (allowHalf && x <= rect.width / 2) {
                        val -= 0.5;
                    }
                    handleClick(val);
                }}
                role="radio"
                aria-checked={currentValue === starValue || (allowHalf && currentValue === starValue - 0.5)}
                aria-label={`${index + 1} Stars`}
            >
                <div className="wim-rating__star-background">
                    <Icon name="StarIcon" size={size} />
                </div>
                <div className="wim-rating__star-foreground">
                    <Icon name="StarIcon" size={size} />
                </div>
            </div>
        );
    };

    const stars = Array.from({ length: count }, (_, i) => renderStar(i));

    return (
        <div className={classNames("wim-rating-container", className)}>
            {label && (
                <div id={labelId} className="wim-label" style={{ marginBottom: '4px' }}>
                    {label}
                </div>
            )}
            <div
                className={classNames("wim-rating", `wim-rating--${size}`, disabled && "wim-rating--disabled")}
                onMouseLeave={handleMouseLeave}
                role="radiogroup"
                aria-labelledby={label ? labelId : undefined}
                aria-disabled={disabled}
                tabIndex={disabled ? -1 : 0}
                onKeyDown={handleKeyDown}
                {...props}
            >
                {stars}
            </div>
        </div>
    );
};



