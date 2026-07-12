import React, { useId, useRef, forwardRef } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
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
  /** List of segment options */
  options: Option[];
  /** Selected value */
  value: string;
  /** Callback when the selected value changes */
  onChange: (value: string) => void;
  /** Size of the control */
  size?: ComponentSizeBasic;
  /** Whether to take full width of parent */
  fullWidth?: boolean;
  /** Additional class names */
  className?: string;
  /** Accessible label */
  label?: string;
  /** Error message */
  error?: string;
  /** Whether to show the required indicator */
  required?: boolean;
  /** Layout direction of label and field */
  layout?: "vertical" | "horizontal";
  /** Whether the control is disabled */
  disabled?: boolean;
  /**
   * If true, merge radiogroup props onto the child element.
   */
  asChild?: boolean;
  /** Optional children used when asChild is true */
  children?: React.ReactNode;
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
  asChild = false,
  children,
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
    const Component = asChild ? Slot : "div";

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
        <Component
          ref={useMergedRef(containerRef, ref)}
          id={id}
          className={classNames("wim-segmented-control", 
            localStyles.root,
            localStyles[size],
            fullWidth && localStyles.fullWidth,
            isReady && localStyles.ready,
            error && localStyles.danger,
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
          <Slottable>{children}</Slottable>
        </Component>
      </FieldTemplate>
    );
});

SegmentedControl.displayName = "SegmentedControl";
