import React, { useId } from "react";
import classNames from "classnames";
import { Icon } from "../Icon/Icon";
import "./segmented-control.scss";

type Option = {
    label?: string;
    value: string;
    iconName?: "CircleIcon" | "SquareIcon" | "LoadingIcon" | "ExternalLinkIcon";
};

type SegmentedControlProps = {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    size?: "small" | "medium" | "large";
    fullWidth?: boolean;
    className?: string;
    /**
     * アクセシビリティ用のラベル
     */
    label?: string;
};

export const SegmentedControl = ({
    options,
    value,
    onChange,
    size = "medium",
    fullWidth = false,
    className,
    label,
}: SegmentedControlProps) => {
    const [focusedIndex, setFocusedIndex] = React.useState<number | null>(null);
    const itemRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
    const generatedId = useId();
    const labelId = `wim-segmented-label-${generatedId}`;

    // Calculate the position of the slider
    const selectedIndex = options.findIndex((opt) => opt.value === value);
    const sliderStyle = {
        width: `calc((100% - 4px) / ${options.length})`,
        transform: `translateX(${selectedIndex * 100}%)`,
    };

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
        <div className={classNames("wim-segmented-control-container", className)}>
            {label && (
                <div id={labelId} className="wim-label" style={{ marginBottom: '8px' }}>
                    {label}
                </div>
            )}
            <div
                className={classNames(
                    "wim-segmented-control",
                    `wim-segmented-control--${size === "small" ? "sm" : size === "large" ? "lg" : "md"}`,
                    fullWidth && "wim-segmented-control--full-width"
                )}
                role="radiogroup"
                aria-labelledby={label ? labelId : undefined}
            >
                <div className="wim-segmented-control__slider" style={sliderStyle} aria-hidden="true" />
                {options.map((option, index) => {
                    const isSelected = option.value === value;
                    // If nothing is selected (unlikely for radio behavior but possible init state), make first tabable
                    const isTabbable = isSelected || (selectedIndex === -1 && index === 0);

                    return (
                        <button
                            key={option.value}
                            ref={(el) => { itemRefs.current[index] = el; }}
                            type="button"
                            className={classNames(
                                "wim-segmented-control__item",
                                isSelected && "wim-segmented-control__item--active",
                                !option.label && option.iconName && "wim-segmented-control__item--icon-only"
                            )}
                            onClick={() => onChange(option.value)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            onFocus={() => setFocusedIndex(index)}
                            onBlur={() => setFocusedIndex(null)}
                            role="radio"
                            aria-checked={isSelected}
                            tabIndex={isTabbable ? 0 : -1}
                            aria-label={option.label || option.value}
                        >
                            {option.iconName && (
                                <Icon
                                    name={option.iconName}
                                    size={size}
                                />
                            )}
                            {option.label && (
                                <span className="wim-segmented-control__label">{option.label}</span>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};



