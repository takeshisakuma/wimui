import React, { useId, useRef } from "react";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import { useIndicator } from "../../_internal/useIndicator";
import { FieldTemplate } from "../FieldTemplate";
import { ComponentSize } from "../../../types/tokens";
import styles from "./segmented-control.module.scss";

type Option = {
  label?: string;
  value: string;
  iconName?: "CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon";
};

type SegmentedControlProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  size?: ComponentSize;
  fullWidth?: boolean;
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
  /**
   * 無効状態にするかどうか
   */
  disabled?: boolean;
};

export const SegmentedControl = ({
  options,
  value,
  onChange,
  size = "md",
  fullWidth = false,
  className,
  label,
  error,
  required,
  layout = "vertical",
  disabled = false,
}: SegmentedControlProps) => {
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const generatedId = useId();
  const labelId = `wim-segmented-label-${generatedId}`;
  const errorId = `wim-segmented-error-${generatedId}`;

  const { containerRef, sliderStyle, isReady } = useIndicator({
    activeSelector: `.${styles.active}`,
    dependence: options.length, // Recalculate if options change
  });

  const selectedIndex = options.findIndex((opt) => opt.value === value);

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    let nextIndex = index;

    switch (event.key) {
      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = index - 1;
        if (nextIndex < 0) nextIndex = options.length - 1;
        break;
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = index + 1;
        if (nextIndex >= options.length) nextIndex = 0;
        break;
      default:
        return;
    }

    event.preventDefault(); // Prevent scroll
    onChange(options[nextIndex].value);
    itemRefs.current[nextIndex]?.focus();
  };

  return (
    <FieldTemplate
      label={label}
      error={error}
      required={required}
      layout={layout}
      labelId={labelId}
      errorId={errorId}
      className={className}
    >
      <div
        ref={containerRef}
        className={classNames(
          styles.root,
          styles[size],
          fullWidth && styles.fullWidth,
          isReady && styles.ready,
        )}
        role="radiogroup"
        aria-labelledby={label ? labelId : undefined}
      >
        <div
          className={styles.slider}
          style={sliderStyle}
          aria-hidden="true"
        />
        {options.map((option, index) => {
          const isSelected = option.value === value;
          // If nothing is selected (unlikely for radio behavior but possible init state), make first tabable
          const isTabbable =
            isSelected || (selectedIndex === -1 && index === 0);

          return (
            <button
              key={option.value}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              type="button"
              className={classNames(
                styles.item,
                isSelected && styles.active,
                !option.label &&
                  option.iconName &&
                  styles.iconOnly,
              )}
              onClick={() => onChange(option.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onFocus={() => {}}
              onBlur={() => {}}
              role="radio"
              aria-checked={isSelected}
              tabIndex={isTabbable ? 0 : -1}
              aria-label={option.label || option.value}
              disabled={disabled}
            >
              {option.iconName && <Icon name={option.iconName} size={size} />}
              {option.label && (
                <span className={styles.label}>
                  {option.label}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </FieldTemplate>
  );
};
