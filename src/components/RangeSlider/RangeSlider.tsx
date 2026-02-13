import React, { useState, useRef, useEffect, useCallback } from "react";
import classNames from "classnames";
import "./rangeSlider.scss";

type RangeSliderProps = {
    /**
     * 現在の値 [min, max]
     */
    value?: [number, number];
    /**
     * デフォルトの値 [min, max]（非制御時）
     */
    defaultValue?: [number, number];
    /**
     * 最小値
     */
    min?: number;
    /**
     * 最大値
     */
    max?: number;
    /**
     * ステップ値
     */
    step?: number;
    /**
     * 同じ値を許容するかどうか（交差はしない）
     */
    allowCross?: boolean;
    /**
     * 無効化フラグ
     */
    disabled?: boolean;
    /**
     * 値変更時のコールバック
     */
    onChange?: (value: [number, number]) => void;
    /**
     * ドラッグ終了時のコールバック
     */
    onAfterChange?: (value: [number, number]) => void;
    /**
     * 追加のクラス名
     */
    className?: string;
    /**
     * 名前の属性。フォーム送信時には name-min と name-max として送信されることを想定するか、
     * あるいはJSON文字列として送信するかなど検討が必要だが、ここでは隠しinputを2つつくる。
     */
    name?: string;
};

/**
 * 範囲（開始と終了）を選択するためのスライダーコンポーネント。
 */
export const RangeSlider = ({
    value,
    defaultValue = [20, 80],
    min = 0,
    max = 100,
    step = 1,
    allowCross = false,
    disabled = false,
    onChange,
    onAfterChange,
    className,
    name,
    ...props
}: RangeSliderProps) => {
    const isControlled = value !== undefined;
    // 初期値の正当性チェック
    const safeDefaultValue: [number, number] = [
        Math.max(min, Math.min(defaultValue[0], max)),
        Math.max(min, Math.min(defaultValue[1], max)),
    ];
    if (safeDefaultValue[0] > safeDefaultValue[1]) {
        safeDefaultValue.sort((a, b) => a - b);
    }

    const [internalValue, setInternalValue] = useState<[number, number]>(safeDefaultValue);
    const currentValue = isControlled ? value! : internalValue;
    const trackRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef<"min" | "max" | null>(null);

    // 値を範囲内に収める
    const clamp = useCallback((val: number, minVal: number, maxVal: number) =>
        Math.max(minVal, Math.min(val, maxVal)), []);

    // ステップに合わせる
    const alignToStep = useCallback((val: number) => {
        const steps = Math.round((val - min) / step);
        return clamp(min + steps * step, min, max);
    }, [clamp, min, max, step]);

    const calculateValue = useCallback((clientX: number) => {
        if (!trackRef.current) return min;
        const rect = trackRef.current.getBoundingClientRect();
        const percentage = clamp((clientX - rect.left) / rect.width, 0, 1);
        const rawValue = min + percentage * (max - min);
        return alignToStep(rawValue);
    }, [alignToStep, clamp, max, min]);

    const handleMouseDown = (e: React.MouseEvent | React.TouchEvent, handle: "min" | "max") => {
        if (disabled) return;
        isDragging.current = handle;
        e.stopPropagation(); // トラックのイベント発火を防ぐ
        e.preventDefault();
    };

    // トラッククリック時の挙動：近い方のハンドルを動かす
    const handleTrackMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
        if (disabled) return;
        const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        const clickValue = calculateValue(clientX);

        // 近い方のハンドルを探す
        const distMin = Math.abs(currentValue[0] - clickValue);
        const distMax = Math.abs(currentValue[1] - clickValue);

        let targetHandle: "min" | "max";
        if (distMin < distMax) targetHandle = "min";
        else if (distMax < distMin) targetHandle = "max";
        else {
            // 同じ距離なら左側（小さい方）を優先、あるいは値の大小で判断
            targetHandle = clickValue < currentValue[0] ? "min" : "max";
        }

        isDragging.current = targetHandle;

        updateValue(clickValue, targetHandle);
    };

    const updateValue = (newValue: number, handle: "min" | "max") => {
        let nextValues: [number, number] = [...currentValue];

        if (handle === "min") {
            // 上限を超えないように
            const limit = allowCross ? max : nextValues[1];
            nextValues[0] = Math.min(newValue, limit);
        } else {
            // 下限を超えないように
            const limit = allowCross ? min : nextValues[0];
            nextValues[1] = Math.max(newValue, limit);
        }

        if (!isControlled) {
            setInternalValue(nextValues);
        }
        onChange?.(nextValues);
    };



    // NOTE: updateValue depends on currentValue, so handleGlobalMouseMove needs to be updated or logic moved.
    // Instead of useCallback with deps, let's use a ref for values or just accept render updates.
    // However, dragging works better if we don't rely on React render cycle for "current" dragging state logic too much if it creates lag, but for this simple component it's fine.
    // Wait, if I put currentValue in deps, handleGlobalMouseMove is recreated every render.
    // That's fine. But addEventListener handles might accumulate if not cleaned up properly, or thrash.
    // Better approach: use ref for currentValue inside the effect or pass it.

    const currentValueRef = useRef(currentValue);
    useEffect(() => {
        currentValueRef.current = currentValue;
    }, [currentValue]);

    const handleGlobalMouseMoveRef = useCallback(
        (e: MouseEvent | TouchEvent) => {
            if (!isDragging.current || disabled) return;
            const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
            const newValue = calculateValue(clientX); // calculateValue depends on ref but min/max/step are usually stable or props.

            // Logic from updateValue but using ref
            let nextValues: [number, number] = [...currentValueRef.current];
            if (isDragging.current === "min") {
                const limit = allowCross ? max : nextValues[1];
                nextValues[0] = Math.min(newValue, limit);
            } else {
                const limit = allowCross ? min : nextValues[0];
                nextValues[1] = Math.max(newValue, limit);
            }
            if (!isControlled) {
                setInternalValue(nextValues);
            }
            onChange?.(nextValues);
        },
        [disabled, isControlled, onChange, allowCross, calculateValue, min, max]
    );


    const handleGlobalMouseUp = useCallback(() => {
        if (isDragging.current) {
            isDragging.current = null;
            onAfterChange?.(isControlled ? value! : internalValue); // NOTE: isControlled value might be stale here if we don't use ref? No, value comes from closure, might be stale.
            // Actually onAfterChange usually wants the final value.
            // Since it's inside useCallback with deps, we should check deps.
        }
    }, [isControlled, value, internalValue, onAfterChange]);

    // Actually, passing `value` in deps is safer for onAfterChange.

    useEffect(() => {
        document.addEventListener("mousemove", handleGlobalMouseMoveRef);
        document.addEventListener("mouseup", handleGlobalMouseUp);
        document.addEventListener("touchmove", handleGlobalMouseMoveRef, { passive: false });
        document.addEventListener("touchend", handleGlobalMouseUp);

        return () => {
            document.removeEventListener("mousemove", handleGlobalMouseMoveRef);
            document.removeEventListener("mouseup", handleGlobalMouseUp);
            document.removeEventListener("touchmove", handleGlobalMouseMoveRef);
            document.removeEventListener("touchend", handleGlobalMouseUp);
        };
    }, [handleGlobalMouseMoveRef, handleGlobalMouseUp]);

    // キーボード操作
    const handleKeyDown = (e: React.KeyboardEvent, handle: "min" | "max") => {
        if (disabled) return;

        let nextValues: [number, number] = [...currentValue];
        const targetValue = handle === "min" ? nextValues[0] : nextValues[1];
        let newValue = targetValue;

        if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
            newValue = Math.max(min, targetValue - step);
        } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
            newValue = Math.min(max, targetValue + step);
        } else if (e.key === "Home") {
            newValue = min;
        } else if (e.key === "End") {
            newValue = max;
        } else {
            return;
        }

        if (handle === "min") {
            const limit = allowCross ? max : nextValues[1];
            nextValues[0] = Math.min(newValue, limit);
        } else {
            const limit = allowCross ? min : nextValues[0];
            nextValues[1] = Math.max(newValue, limit);
        }

        if (!isControlled) {
            setInternalValue(nextValues);
        }
        onChange?.(nextValues);
        e.preventDefault();
    };

    const getPercentage = (val: number) => ((val - min) / (max - min)) * 100;
    const leftPerc = getPercentage(currentValue[0]);
    const rightPerc = getPercentage(currentValue[1]);

    return (
        /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
        <div
            className={classNames("wim-range-slider", disabled && "wim-range-slider--disabled", className)}
            onMouseDown={handleTrackMouseDown}
            onTouchStart={handleTrackMouseDown}
            {...props}
        >
            <div className="wim-range-slider__track-container" ref={trackRef}>
                <div
                    className="wim-range-slider__track"
                    style={{
                        left: `${leftPerc}%`,
                        width: `${rightPerc - leftPerc}%`
                    }}
                />
                <div
                    className="wim-range-slider__thumb"
                    style={{ left: `${leftPerc}%` }}
                    role="slider"
                    aria-valuemin={min}
                    aria-valuemax={currentValue[1]}
                    aria-valuenow={currentValue[0]}
                    aria-disabled={disabled}
                    tabIndex={disabled ? -1 : 0}
                    onMouseDown={(e) => handleMouseDown(e, "min")}
                    onTouchStart={(e) => handleMouseDown(e, "min")}
                    onKeyDown={(e) => handleKeyDown(e, "min")}
                />
                <div
                    className="wim-range-slider__thumb"
                    style={{ left: `${rightPerc}%` }}
                    role="slider"
                    aria-valuemin={currentValue[0]}
                    aria-valuemax={max}
                    aria-valuenow={currentValue[1]}
                    aria-disabled={disabled}
                    tabIndex={disabled ? -1 : 0}
                    onMouseDown={(e) => handleMouseDown(e, "max")}
                    onTouchStart={(e) => handleMouseDown(e, "max")}
                    onKeyDown={(e) => handleKeyDown(e, "max")}
                />
            </div>
            <input type="hidden" name={name ? `${name}-min` : ""} value={currentValue[0]} />
            <input type="hidden" name={name ? `${name}-max` : ""} value={currentValue[1]} />
        </div>
    );
};


