import React, { useState, useRef, useEffect, useCallback, useId } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { useSliderCommon } from "../../utilities/slider-utils";
import { FieldTemplate } from "../_internal/FieldTemplate/FieldTemplate";
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
  label?: string;
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
  const { t } = useTranslation("common");
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const currentValue = isControlled ? value! : internalValue;
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const generatedId = useId();
  const id = customId || generatedId;
  const labelId = `wim-slider-label-${id}`;
  const errorId = `wim-slider-error-${id}`;

  const { calculateValue } = useSliderCommon(min, max, step);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (disabled) return;
    isDragging.current = true;

    // TouchEventとMouseEventの両対応
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;

    const newValue = calculateValue(clientX, trackRef.current);

    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);

    e.preventDefault(); // テキスト選択防止など
  };

  const handleGlobalMouseMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current || disabled) return;

      const clientX =
        "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const newValue = calculateValue(clientX, trackRef.current);

      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    },
    [disabled, isControlled, onChange, calculateValue],
  );

  const handleGlobalMouseUp = useCallback(() => {
    if (isDragging.current) {
      isDragging.current = false;
      onAfterChange?.(isControlled ? value! : internalValue);
    }
  }, [isControlled, value, internalValue, onAfterChange]);

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


  const percentage = ((currentValue - min) / (max - min)) * 100;

  return (
    <FieldTemplate
      label={label ? t(label) : undefined}
      error={error}
      required={required}
      layout={layout}
      labelId={labelId}
      errorId={errorId}
      className={classNames("wim-slider-container", className)}
    >
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className={classNames("wim-slider", disabled && "wim-slider--disabled")}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        {...props}
      >
        <div className="wim-slider__track-container" ref={trackRef}>
          <div
            className="wim-slider__track"
            style={{ width: `${percentage}%` }}
          />
          <div
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
        <input type="hidden" name={name} value={currentValue} />
      </div>
    </FieldTemplate>
  );
};
