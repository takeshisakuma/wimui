import React from "react";
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
};

export const SegmentedControl = ({
    options,
    value,
    onChange,
    size = "medium",
    fullWidth = false,
    className,
}: SegmentedControlProps) => {
    // Calculate the position of the slider
    const selectedIndex = options.findIndex((opt) => opt.value === value);
    const sliderStyle = {
        width: `calc((100% - 4px) / ${options.length})`,
        transform: `translateX(${selectedIndex * 100}%)`,
    };

    return (
        <div
            className={classNames(
                "wim-segmented-control",
                `wim-segmented-control--${size === "small" ? "sm" : size === "large" ? "lg" : "md"}`,
                fullWidth && "wim-segmented-control--full-width",
                className
            )}
        >
            <div className="wim-segmented-control__slider" style={sliderStyle} />
            {options.map((option) => (
                <button
                    key={option.value}
                    type="button"
                    className={classNames(
                        "wim-segmented-control__item",
                        option.value === value && "wim-segmented-control__item--active",
                        !option.label && option.iconName && "wim-segmented-control__item--icon-only"
                    )}
                    onClick={() => onChange(option.value)}
                    aria-pressed={option.value === value}
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
            ))}
        </div>
    );
};


