import React, { useState, useRef, useEffect, useId, forwardRef } from "react";
import classNames from "classnames";
import { FieldTemplate } from "../FieldTemplate/FieldTemplate";
import { Icon } from "../../media/Icon/Icon";
import { Transition } from "../../layout/Transition/Transition";
import styles from "./phone-input.module.scss";
import { ChevronDownIcon } from "@/icon";

// ─── Country Data ─────────────────────────────────────────────────────────────

interface Country {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
}

export const PHONE_COUNTRIES: Country[] = [
  { code: "US", name: "United States", dialCode: "1", flag: "🇺🇸" },
  { code: "JP", name: "Japan", dialCode: "81", flag: "🇯🇵" },
  { code: "GB", name: "United Kingdom", dialCode: "44", flag: "🇬🇧" },
  { code: "AU", name: "Australia", dialCode: "61", flag: "🇦🇺" },
  { code: "DE", name: "Germany", dialCode: "49", flag: "🇩🇪" },
  { code: "FR", name: "France", dialCode: "33", flag: "🇫🇷" },
  { code: "CN", name: "China", dialCode: "86", flag: "🇨🇳" },
  { code: "KR", name: "South Korea", dialCode: "82", flag: "🇰🇷" },
  { code: "IN", name: "India", dialCode: "91", flag: "🇮🇳" },
  { code: "BR", name: "Brazil", dialCode: "55", flag: "🇧🇷" },
];

// ─── PhoneInput ────────────────────────────────────────────────────────────────

export type PhoneInputProps = {
  /** Phone number value (the number part, excluding the country dial code). */
  value?: string;
  /** Callback when the phone number changes. */
  onChange?: (value: string) => void;
  /** Selected country code (e.g. "JP", "US"). */
  countryCode?: string;
  /** Callback when the country code changes. */
  onCountryChange?: (countryCode: string) => void;
  /** Placeholder for the phone number input. */
  placeholder?: string;
  /** Whether the field is disabled. */
  disabled?: boolean;
  /** Error message. */
  error?: string;
  /** Whether to show the required indicator. */
  required?: boolean;
  /** Field label. */
  label?: string;
  /** Layout direction of label and field. */
  layout?: "vertical" | "horizontal";
  /** Additional class names. */
  className?: string;
  /** Whether to take full width of parent. */
  fullWidth?: boolean;
};

/**
 * Component combining a country dial-code selector with a phone number input.
 * Uses a custom dropdown for a polished design.
 */
export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    {
      value = "",
      onChange,
      countryCode = "US",
      onCountryChange,
      placeholder = "000-0000-0000",
      disabled = false,
      error,
      required = false,
      label,
      layout = "vertical",
      className,
      fullWidth = false,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = `wim-phone-input-${generatedId}`;
    const labelId = label ? `${inputId}-label` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;

    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Handle click outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };
      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen]);

    const selectedCountry =
      PHONE_COUNTRIES.find((c) => c.code === countryCode) ?? PHONE_COUNTRIES[0];

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <FieldTemplate
        label={label}
        labelId={labelId}
        htmlFor={inputId}
        required={required}
        error={error}
        errorId={errorId}
        layout={layout}
        className={className}
      >
        <div
          ref={containerRef}
          className={classNames("wim-phone-input", 
            styles.root,
            fullWidth && styles.fullWidth,
            disabled && styles.disabled,
            error && styles.danger,
          )}
          data-testid="phone-input-root"
          {...props}
        >
          <div className={styles.countryWrapper}>
            <button
              type="button"
              className={styles.countryTrigger}
              onClick={() => !disabled && setIsOpen(!isOpen)}
              disabled={disabled}
              aria-haspopup="listbox"
              aria-expanded={isOpen}
              aria-labelledby={labelId}
              aria-label={label ? undefined : "Select country"}
            >
              <span aria-hidden="true" style={{ fontSize: "1.2em" }}>{selectedCountry.flag}</span>
              <span className={styles.dialCode}>+{selectedCountry.dialCode}</span>
              <Icon
                component={ChevronDownIcon}
                size="sm"
                className={classNames(
                  styles.chevron,
                  isOpen && styles.chevronOpen,
                )}
              />
            </button>

            <Transition show={isOpen} preset="fade" className={styles.dropdown}>
              <ul className={styles.countryList} role="listbox">
                {PHONE_COUNTRIES.map((country) => (
                  <li
                    key={country.code}
                    className={classNames(
                      styles.countryOption,
                      selectedCountry.code === country.code && styles.selected,
                    )}
                    onClick={() => {
                      onCountryChange?.(country.code);
                      setIsOpen(false);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onCountryChange?.(country.code);
                        setIsOpen(false);
                      }
                    }}
                    tabIndex={0}
                    role="option"
                    aria-selected={selectedCountry.code === country.code}
                  >
                    <span aria-hidden="true">{country.flag}</span>
                    <span className={styles.countryName}>{country.name}</span>
                    <span className={styles.countryCode}>+{country.dialCode}</span>
                  </li>
                ))}
              </ul>
            </Transition>
          </div>

          <div className={styles.divider} aria-hidden="true" />

          <input
            id={inputId}
            ref={ref}
            type="tel"
            value={value}
            onChange={handleNumberChange}
            placeholder={placeholder}
            disabled={disabled}
            className={styles.number}
            aria-invalid={!!error}
            aria-describedby={errorId}
          />
        </div>
      </FieldTemplate>
    );
  },
);

PhoneInput.displayName = "PhoneInput";
