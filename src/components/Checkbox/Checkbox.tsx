import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { Icon } from "../Icon/Icon";
import "./checkbox.scss";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    indeterminate?: boolean;
    className?: string;
};

/**
 * Checkbox component for boolean user input.
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    // eslint-disable-next-line react/prop-types
    ({ label, indeterminate = false, className, disabled, ...props }, ref) => {
        const defaultRef = useRef<HTMLInputElement>(null);
        const resolvedRef = (ref as React.RefObject<HTMLInputElement>) || defaultRef;

        useEffect(() => {
            if (resolvedRef.current) {
                resolvedRef.current.indeterminate = indeterminate;
            }
        }, [indeterminate, resolvedRef]);

        return (
            <label
                className={classNames(
                    "wim-checkbox-wrapper",
                    disabled && "wim-checkbox--disabled",
                    className
                )}
            >
                <input
                    type="checkbox"
                    className="wim-checkbox-input"
                    disabled={disabled}
                    ref={resolvedRef}
                    {...props}
                />
                <div className="wim-checkbox-visual">
                    {indeterminate ? (
                        <div className="wim-checkbox-indeterminate-mark" />
                    ) : (
                        <Icon name="CheckIcon" size="small" style={{ color: "currentColor" }} />
                    )}
                </div>
                {label && <span className="wim-checkbox-label">{label}</span>}
            </label>
        );
    }
);

Checkbox.displayName = "Checkbox";


