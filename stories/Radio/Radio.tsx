import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./radio.scss";

type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    className?: string;
};

/**
 * Radio component for single selection from a list.
 */
export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
    ({ label, className, disabled, ...props }, ref) => {
        const defaultRef = useRef<HTMLInputElement>(null);
        const resolvedRef = (ref as React.RefObject<HTMLInputElement>) || defaultRef;

        return (
            <label
                className={[
                    "wim-radio-wrapper",
                    disabled ? "wim-radio--disabled" : "",
                    className,
                ]
                    .filter(Boolean)
                    .join(" ")}
            >
                <input
                    type="radio"
                    className="wim-radio-input"
                    disabled={disabled}
                    ref={resolvedRef}
                    {...props}
                />
                <div className="wim-radio-visual">
                    <div className="wim-radio-dot" />
                </div>
                {label && <span className="wim-radio-label">{label}</span>}
            </label>
        );
    }
);

Radio.displayName = "Radio";

Radio.propTypes = {
    /**
     * Label text to display next to the radio.
     */
    label: PropTypes.string,
    /**
     * Additional class names.
     */
    className: PropTypes.string,
    /**
     * If true, the radio is checked.
     */
    checked: PropTypes.bool,
    /**
     * If true, the radio is disabled.
     */
    disabled: PropTypes.bool,
    /**
     * Function called when state changes.
     */
    onChange: PropTypes.func,
    /**
     * Name attribute for the input element.
     */
    name: PropTypes.string,
    /**
     * Value attribute for the input element.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
