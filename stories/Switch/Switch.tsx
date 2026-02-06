import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./switch.scss";

type SwitchProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    label?: string;
    size?: "small" | "medium";
    className?: string;
};

/**
 * Switch component for toggling a single setting on or off.
 */
export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
    ({ label, size = "medium", className, disabled, ...props }, ref) => {
        const defaultRef = useRef<HTMLInputElement>(null);
        const resolvedRef = (ref as React.RefObject<HTMLInputElement>) || defaultRef;

        return (
            <label
                className={[
                    "wim-switch-wrapper",
                    disabled ? "wim-switch--disabled" : "",
                    className,
                ]
                    .filter(Boolean)
                    .join(" ")}
            >
                <input
                    type="checkbox"
                    role="switch"
                    className="wim-switch-input"
                    disabled={disabled}
                    ref={resolvedRef}
                    {...props}
                />
                <div
                    className={[
                        "wim-switch-track",
                        size === "small" ? "wim-switch-track--small" : "",
                    ]
                        .filter(Boolean)
                        .join(" ")}
                >
                    <div className="wim-switch-thumb" />
                </div>
                {label && <span className="wim-switch-label">{label}</span>}
            </label>
        );
    }
);

Switch.displayName = "Switch";

Switch.propTypes = {
    /**
     * Label text to display next to the switch.
     */
    label: PropTypes.string,
    /**
     * Size of the switch.
     */
    size: PropTypes.oneOf(["small", "medium"]),
    /**
     * Additional class names.
     */
    className: PropTypes.string,
    /**
     * If true, the switch is checked.
     */
    checked: PropTypes.bool,
    /**
     * If true, the switch is default checked.
     */
    defaultChecked: PropTypes.bool,
    /**
     * If true, the switch is disabled.
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
