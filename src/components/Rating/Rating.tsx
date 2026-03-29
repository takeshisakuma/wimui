import React, { useState, useId, useRef } from "react";
import classNames from "classnames";
import { Icon } from "../Icon/Icon";
import { useTranslation } from "react-i18next";
import { FieldTemplate } from "../_internal/FieldTemplate/FieldTemplate";
import { ComponentSize } from "../../types/tokens";
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
   * 無効化フラグ
   */
  disabled?: boolean;
  /**
   * 読み取り専用フラグ（表示専用。disabledと異なりグレーアウトしない）
   */
  readOnly?: boolean;
  /**
   * サイズ
   */
  size?: ComponentSize;
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
  readOnly = false,
  size = "medium",
  onChange,
  className,
  label,
  error,
  required,
  layout = "vertical",
  ...props
}: RatingProps) => {
  const { t } = useTranslation("components");
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const generatedId = useId();
  const labelId = `wim-rating-label-${generatedId}`;
  const errorId = `wim-rating-error-${generatedId}`;
  const starRefs = useRef<(HTMLDivElement | null)[]>([]);

  const currentValue = isControlled ? value! : internalValue;
  const displayValue = hoverValue !== null ? hoverValue : currentValue;

  const handleMouseMove = (
    index: number,
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    if (disabled || readOnly) return;

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
    if (disabled || readOnly) return;
    setHoverValue(null);
  };

  const handleClick = (val: number) => {
    if (disabled || readOnly) return;

    if (!isControlled) {
      setInternalValue(val);
    }
    onChange?.(val);
  };

  // roving tabindex: チェック済みのstarがtabIndex=0、未選択時は先頭star
  const getActiveIndex = () => {
    if (currentValue === 0) return 0;
    for (let i = 0; i < count; i++) {
      const starValue = i + 1;
      const isChecked =
        currentValue === starValue ||
        (allowHalf && currentValue === starValue - 0.5);
      if (isChecked) return i;
    }
    return 0;
  };

  const activeIndex = getActiveIndex();

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (disabled || readOnly) return;

    const step = allowHalf ? 0.5 : 1;

    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      const nextValue = Math.min(count, currentValue + step);
      const nextIndex = Math.min(Math.ceil(nextValue) - 1, count - 1);
      handleClick(nextValue);
      starRefs.current[nextIndex]?.focus();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      const nextValue = Math.max(0, currentValue - step);
      const nextIndex = nextValue === 0 ? 0 : Math.ceil(nextValue) - 1;
      handleClick(nextValue);
      starRefs.current[nextIndex]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      handleClick(0);
      starRefs.current[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      handleClick(count);
      starRefs.current[count - 1]?.focus();
    }
  };

  const renderStar = (index: number) => {
    const starValue = index + 1;
    const isFull = displayValue >= starValue;
    const isHalf = !isFull && displayValue >= starValue - 0.5;
    const isChecked =
      currentValue === starValue ||
      (allowHalf && currentValue === starValue - 0.5);

    return (
      <div
        key={index}
        ref={(el) => {
          starRefs.current[index] = el;
        }}
        className={classNames(
          "wim-rating__star",
          isFull && "wim-rating__star--full",
          isHalf && "wim-rating__star--half",
        )}
        onMouseMove={(e) => handleMouseMove(index, e)}
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          let val = starValue;
          if (allowHalf && x <= rect.width / 2) {
            val -= 0.5;
          }
          handleClick(val);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick(starValue);
          } else {
            handleKeyDown(index, e);
          }
        }}
        role={readOnly ? "presentation" : "radio"}
        tabIndex={disabled || readOnly ? -1 : index === activeIndex ? 0 : -1}
        aria-checked={readOnly ? undefined : isChecked}
        aria-label={readOnly ? undefined : t("rating.stars", { count: index + 1 })}
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
    <FieldTemplate
      label={label ? t(label) : undefined}
      error={error}
      required={required}
      layout={layout}
      labelId={labelId}
      errorId={errorId}
      className={classNames("wim-rating-container", className)}
    >
      <div
        className={classNames(
          "wim-rating",
          `wim-rating--${size}`,
          disabled && "wim-rating--disabled",
        )}
        onMouseLeave={readOnly ? undefined : handleMouseLeave}
        role={readOnly ? "img" : "radiogroup"}
        aria-label={
          readOnly
            ? t("rating.readonly_label", { count: currentValue, max: count })
            : undefined
        }
        aria-labelledby={!readOnly && label ? labelId : undefined}
        aria-disabled={!readOnly && disabled ? true : undefined}
        aria-required={!readOnly ? required : undefined}
        aria-describedby={!readOnly && error ? errorId : undefined}
        {...props}
      >
        {stars}
      </div>
    </FieldTemplate>
  );
};
