import React, { useId, useRef, forwardRef } from "react";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import { useIndicator } from "../../_internal/useIndicator";
import { useMergedRef } from "../../../hooks/useMergedRef";
import { FieldTemplate } from "../FieldTemplate";
import { ComponentSizeBasic } from "../../../types/tokens";
import localStyles from "./segmented-control.module.scss";

type Option = {
  label?: string;
  value: string;
  iconName?: "CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon";
};

type SegmentedControlProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  size?: ComponentSizeBasic;
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
  /**
   * Unique ID for the component
   */
  id?: string;
  /**
   * Custom styles for internal parts
   */
  styles?: {
    root?: string;
    item?: string;
    slider?: string;
    label?: string;
  };
};

export const SegmentedControl = forwardRef<HTMLDivElement, SegmentedControlProps>(({
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
  id: customId,
  styles: stylesProp,
}, ref) => {
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const generatedId = useId();
  const id = customId || `wim-segmented-${generatedId}`;
  const labelId = `${id}-label`;
  const errorId = `${id}-error`;

  const { containerRef, sliderStyle, isReady } = useIndicator({
    activeSelector: `.${localStyles.active}`,
    dependence: options.length, // Recalculate if options change
  });

  const selectedIndex = options.findIndex((opt) => opt.value === value);

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    let nextIndex: number;

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

    const firstItemId = `${id}-item-0`;

    return (
      <FieldTemplate
        label={label}
        error={error}
        required={required}
        layout={layout}
        labelId={labelId}
        htmlFor={firstItemId}
        errorId={errorId}
        className={className}
      >
        <div
          ref={useMergedRef(containerRef, ref)}
          id={id}
          className={classNames(
            localStyles.root,
            localStyles[size],
            fullWidth && localStyles.fullWidth,
            isReady && localStyles.ready,
            error && localStyles.error,
            stylesProp?.root,
          )}
          role="radiogroup"
          aria-labelledby={label ? labelId : undefined}
          aria-required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
        >
          <div
            className={classNames(localStyles.slider, stylesProp?.slider)}
            style={sliderStyle}
            aria-hidden="true"
          />
          {options.map((option, index) => {
            const isSelected = option.value === value;
            // If nothing is selected (unlikely for radio behavior but possible init state), make first tabable
            const isTabbable =
              isSelected || (selectedIndex === -1 && index === 0);
            const itemId = `${id}-item-${index}`;

            return (
              <button
                key={option.value}
                id={itemId}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                type="button"
              className={classNames(
                localStyles.item,
                isSelected && localStyles.active,
                !option.label &&
                  option.iconName &&
                  localStyles.iconOnly,
                stylesProp?.item,
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
              {option.iconName && <Icon name={option.iconName} size={size} className={localStyles.icon} />}
              {option.label && (
                <span className={classNames(localStyles.label, stylesProp?.label)}>
                  {option.label}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </FieldTemplate>
  );
});

SegmentedControl.displayName = "SegmentedControl";
