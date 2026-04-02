import React, { useState, useRef, useEffect, useCallback, useId } from "react";
import classNames from "classnames";
import { useSliderCommon } from "../../../utilities/slider-utils";
import { FieldTemplate } from "../FieldTemplate";
import "./slider.scss";

type SliderProps = Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> & {
  /**
   * 現在の値
   */
  value?: number;
  /**
   * デフォルトの値（非制御時）
   */
  defaultValue?: number;
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
   * 無効化フラグ
   */
  disabled?: boolean;
  /**
   * 値変更時のコールバック
   */
  onChange?: (value: number) => void;
  /**
   * ドラッグ終了時のコールバック
   */
  onAfterChange?: (value: number) => void;
  /**
   * 追加のクラス名
   */
  className?: string;
  /**
   * 名前の属性
   */
  name?: string;
  /**
   * アクセシビリティ用のラベル
   */
  label?: React.ReactNode;
  /**
   * エラーメッセージ
   */
  error?: string;
  /**
   * 必須表示にするかどうか
   */
  required?: boolean;
  /**
   * レイアウト方向
   */
  layout?: "vertical" | "horizontal";
  /**
   * カスタムID
   */
  id?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

/**
 * ユーザーが値の範囲から1つの値を選択するためのスライダーコンポーネント。
 */
export const Slider = ({
  value,
  defaultValue = 0,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  onChange,
  onAfterChange,
  className,
  name,
  label,
  error,
  required,
  layout = "vertical",
  id: customId,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  ...props
}: SliderProps) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const currentValue = isControlled ? value! : internalValue;
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const trackFillRef = useRef<HTMLDivElement>(null);
  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const isDragging = useRef(false);
  const dragValueRef = useRef(currentValue);
  const generatedId = useId();
  const id = customId || generatedId;
  const labelId = `wim-slider-label-${id}`;
  const errorId = `wim-slider-error-${id}`;

  const { calculateValue } = useSliderCommon(min, max, step);

  const toPct = useCallback(
    (val: number) => ((val - min) / (max - min)) * 100,
    [min, max],
  );

  // DOM を直接更新してレンダリングをスキップ
  const applyDomPosition = useCallback(
    (val: number) => {
      const pct = toPct(val);
      if (trackFillRef.current) trackFillRef.current.style.width = `${pct}%`;
      if (thumbRef.current) {
        thumbRef.current.style.left = `${pct}%`;
        thumbRef.current.setAttribute("aria-valuenow", String(val));
      }
      if (hiddenInputRef.current) hiddenInputRef.current.value = String(val);
    },
    [toPct],
  );

  // 制御モードで value が外部から変わったとき（ドラッグ中でなければ）DOM を同期
  useEffect(() => {
    if (!isDragging.current) {
      applyDomPosition(currentValue);
    }
  }, [currentValue, applyDomPosition]);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (disabled) return;
    isDragging.current = true;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const newValue = calculateValue(clientX, trackRef.current);
    dragValueRef.current = newValue;
    applyDomPosition(newValue);
    onChange?.(newValue);

    e.preventDefault();
  };

  const handleGlobalMouseMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current || disabled) return;

      const clientX =
        "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const newValue = calculateValue(clientX, trackRef.current);
      dragValueRef.current = newValue;
      applyDomPosition(newValue);
      onChange?.(newValue);
    },
    [disabled, calculateValue, onChange, applyDomPosition],
  );

  const handleGlobalMouseUp = useCallback(() => {
    if (isDragging.current) {
      isDragging.current = false;
      const finalValue = dragValueRef.current;
      if (!isControlled) {
        setInternalValue(finalValue);
      }
      onAfterChange?.(finalValue);
    }
  }, [isControlled, onAfterChange]);

  useEffect(() => {
    document.addEventListener("mousemove", handleGlobalMouseMove);
    document.addEventListener("mouseup", handleGlobalMouseUp);
    document.addEventListener("touchmove", handleGlobalMouseMove, {
      passive: false,
    });
    document.addEventListener("touchend", handleGlobalMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
      document.removeEventListener("touchmove", handleGlobalMouseMove);
      document.removeEventListener("touchend", handleGlobalMouseUp);
    };
  }, [handleGlobalMouseMove, handleGlobalMouseUp]);

  // キーボード操作
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    let newValue = currentValue;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      newValue = Math.max(min, currentValue - step);
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      newValue = Math.min(max, currentValue + step);
    } else if (e.key === "Home") {
      newValue = min;
    } else if (e.key === "End") {
      newValue = max;
    } else {
      return;
    }

    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
    e.preventDefault();
  };

  const percentage = toPct(currentValue);

  return (
    <FieldTemplate
      label={label}
      error={error}
      required={required}
      layout={layout}
      labelId={labelId}
      errorId={errorId}
      className={classNames("wim-slider-container", className)}
    >
      <div
        role="presentation"
        className={classNames("wim-slider", disabled && "wim-slider--disabled")}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        {...props}
      >
        <div className="wim-slider__track-container" ref={trackRef}>
          <div
            ref={trackFillRef}
            className="wim-slider__track"
            style={{ width: `${percentage}%` }}
          />
          <div
            ref={thumbRef}
            className="wim-slider__thumb"
            style={{ left: `${percentage}%` }}
            role="slider"
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={currentValue}
            aria-disabled={disabled}
            aria-labelledby={label ? labelId : ariaLabelledBy}
            aria-label={label ? undefined : ariaLabel}
            tabIndex={disabled ? -1 : 0}
            onKeyDown={handleKeyDown}
          />
        </div>
        <input ref={hiddenInputRef} type="hidden" name={name} value={currentValue} />
      </div>
    </FieldTemplate>
  );
};
