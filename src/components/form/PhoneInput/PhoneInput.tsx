import React, { useId } from "react";
import classNames from "classnames";
import { FieldTemplate } from "../../_internal/FieldTemplate";
import "./phone-input.scss";

// ─── Country Data ─────────────────────────────────────────────────────────────

export type CountryEntry = {
  code: string;
  dialCode: string;
  flag: string;
  name: string;
};

export const PHONE_COUNTRIES: CountryEntry[] = [
  { code: "AU", dialCode: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "BR", dialCode: "+55", flag: "🇧🇷", name: "Brazil" },
  { code: "CA", dialCode: "+1", flag: "🇨🇦", name: "Canada" },
  { code: "CN", dialCode: "+86", flag: "🇨🇳", name: "China" },
  { code: "FR", dialCode: "+33", flag: "🇫🇷", name: "France" },
  { code: "DE", dialCode: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "IN", dialCode: "+91", flag: "🇮🇳", name: "India" },
  { code: "IT", dialCode: "+39", flag: "🇮🇹", name: "Italy" },
  { code: "JP", dialCode: "+81", flag: "🇯🇵", name: "Japan" },
  { code: "KR", dialCode: "+82", flag: "🇰🇷", name: "Korea" },
  { code: "MX", dialCode: "+52", flag: "🇲🇽", name: "Mexico" },
  { code: "SG", dialCode: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "ES", dialCode: "+34", flag: "🇪🇸", name: "Spain" },
  { code: "GB", dialCode: "+44", flag: "🇬🇧", name: "UK" },
  { code: "US", dialCode: "+1", flag: "🇺🇸", name: "US" },
];

// ─── PhoneInput ────────────────────────────────────────────────────────────────

export type PhoneInputProps = {
  /**
   * 電話番号の値（国番号を除く番号部分）。
   */
  value?: string;
  /**
   * 電話番号が変更されたときに呼び出されるコールバック。
   */
  onChange?: (value: string) => void;
  /**
   * 選択中の国コード（例: "JP", "US"）。
   */
  countryCode?: string;
  /**
   * 国コードが変更されたときに呼び出されるコールバック。
   */
  onCountryChange?: (countryCode: string) => void;
  /**
   * 電話番号入力欄のプレースホルダー。
   */
  placeholder?: string;
  /**
   * 無効状態。
   */
  disabled?: boolean;
  /**
   * エラーメッセージ。
   */
  error?: string;
  /**
   * 必須フラグ。
   */
  required?: boolean;
  /**
   * フィールドラベル。
   */
  label?: string;
  /**
   * レイアウト方向。
   */
  layout?: "vertical" | "horizontal";
  /**
   * 追加CSSクラス。
   */
  className?: string;
};

/**
 * 国番号セレクターと電話番号入力を組み合わせたコンポーネント。
 */
export const PhoneInput = ({
  value = "",
  onChange,
  countryCode = "US",
  onCountryChange,
  placeholder,
  disabled = false,
  error,
  required,
  label,
  layout,
  className,
}: PhoneInputProps) => {
  const generatedId = useId();
  const inputId = `wim-phone-input-${generatedId}`;
  const labelId = label ? `${inputId}-label` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;

  const selectedCountry =
    PHONE_COUNTRIES.find((c) => c.code === countryCode) ?? PHONE_COUNTRIES[0];

  return (
    <FieldTemplate
      label={label}
      labelId={labelId}
      required={required}
      error={error}
      errorId={errorId}
      layout={layout}
    >
      <div
        className={classNames(
          "wim-phone-input",
          disabled && "wim-phone-input--disabled",
          error && "wim-phone-input--error",
          className,
        )}
      >
        <div className="wim-phone-input__country-wrapper">
          <select
            className="wim-phone-input__country"
            value={countryCode}
            disabled={disabled}
            aria-label="Country code"
            onChange={(e) => onCountryChange?.(e.target.value)}
          >
            {PHONE_COUNTRIES.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.dialCode}
              </option>
            ))}
          </select>
          <span className="wim-phone-input__dial-preview" aria-hidden="true">
            {selectedCountry.flag} {selectedCountry.dialCode}
          </span>
        </div>
        <span className="wim-phone-input__divider" aria-hidden="true" />
        <input
          id={inputId}
          type="tel"
          className="wim-phone-input__number"
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          aria-labelledby={labelId}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={errorId}
          onChange={(e) => {
            const filtered = e.target.value.replace(/[^0-9+\-() ]/g, "");
            onChange?.(filtered);
          }}
        />
      </div>
    </FieldTemplate>
  );
};
