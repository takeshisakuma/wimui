/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
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
    const { t } = useTranslation();
    const defaultRef = useRef<HTMLInputElement>(null);
    const resolvedRef =
      (ref as React.RefObject<HTMLInputElement>) || defaultRef;

    return (
      <label
        className={classNames(
          "wim-radio-wrapper",
          disabled && "wim-radio--disabled",
          className,
        )}
      >
        <input
          type="radio"
          className="wim-radio-input"
          disabled={disabled}
          ref={resolvedRef}
          {...props}
        />
        {label && <span className="wim-radio-label">{t(label)}</span>}
      </label>
    );
  },
);

Radio.displayName = "Radio";
