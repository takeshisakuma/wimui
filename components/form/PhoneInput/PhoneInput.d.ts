import { default as React } from '../../../../node_modules/react';
interface Country {
    code: string;
    name: string;
    dialCode: string;
    flag: string;
}
export declare const PHONE_COUNTRIES: Country[];
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
export declare const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps & React.RefAttributes<HTMLInputElement>>;
export {};
