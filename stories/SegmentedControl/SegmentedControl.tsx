import React from "react";
import PropTypes from "prop-types";
import "./segmented-control.scss";

type Option = {
    label: string;
    value: string;
    iconName?: "CircleIcon" | "SquareIcon";
};

type SegmentedControlProps = {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    size?: "small" | "medium" | "large";
    fullWidth?: boolean;
};

export const SegmentedControl = ({
    options,
    value,
    onChange,
    size = "medium",
    fullWidth = false,
}: SegmentedControlProps) => {
    const sizeMap: Record<"small" | "medium" | "large", string> = {
        small: "sm",
        medium: "md",
        large: "lg",
    };

    const containerClass = [
        "wim-segmented-control",
        `wim-segmented-control--${sizeMap[size]}`,
        fullWidth ? "wim-segmented-control--full-width" : "",
    ]
        .filter(Boolean)
        .join(" ");

    // Calculate the position of the slider
    const selectedIndex = options.findIndex((opt) => opt.value === value);
    const sliderStyle = {
        width: `calc((100% - 4px) / ${options.length})`,
        transform: `translateX(${selectedIndex * 100}%)`,
    };

    return (
        <div className={containerClass}>
            <div className="wim-segmented-control__slider" style={sliderStyle} />
            {options.map((option) => (
                <button
                    key={option.value}
                    type="button"
                    className={[
                        "wim-segmented-control__item",
                        option.value === value ? "wim-segmented-control__item--active" : "",
                    ]
                        .filter(Boolean)
                        .join(" ")}
                    onClick={() => onChange(option.value)}
                    aria-pressed={option.value === value}
                >
                    <span className="wim-segmented-control__label">{option.label}</span>
                </button>
            ))}
        </div>
    );
};

SegmentedControl.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            iconName: PropTypes.oneOf(["CircleIcon", "SquareIcon"]),
        })
    ).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    fullWidth: PropTypes.bool,
};
