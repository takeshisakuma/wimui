import React, { useRef } from "react";
import classNames from "classnames";
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
                className={classNames(
                    "wim-switch-wrapper",
                    disabled && "wim-switch--disabled",
                    className,
                )}
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
                    className={classNames(
                        "wim-switch-track",
                        size === "small" && "wim-switch-track--small"
                    )}
                >
                    <div className="wim-switch-thumb" />
                </div>
                {label && <span className="wim-switch-label">{label}</span>}
            </label>
        );
    }
);

Switch.displayName = "Switch";


