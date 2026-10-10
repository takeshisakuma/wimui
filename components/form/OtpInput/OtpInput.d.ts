import { default as React } from '../../../../node_modules/react';
export type OtpInputLabels = {
    /**
     * Accessible name for one digit box.
     *
     * `position` is **1-based**: the first box is `1`, and the last is `length`.
     * It is meant to be read aloud ("Digit 3 of 6"), so it counts the way a person
     * would. Treating it as a 0-based index and adding one yields "Digit 2" for the
     * first box.
     *
     * @param position 1-based position of the box, from `1` to `length`
     * @default (position) => `Digit ${position}`
     */
    digitAriaLabel?: (position: number) => string;
};
export interface OtpInputProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange" | "value" | "defaultValue"> {
    /** Number of digits */
    length?: number;
    /** Current value (controlled) */
    value?: string;
    /** Callback when the value changes */
    onChange?: (value: string) => void;
    /** Whether the input is disabled */
    disabled?: boolean;
    /** Error message */
    error?: string;
    /** Whether to show the required indicator */
    required?: boolean;
    /** Field label */
    label?: React.ReactNode;
    /** Layout direction of label and field */
    layout?: "vertical" | "horizontal";
    /**
     * Labels for internationalization. `digitAriaLabel(position)` names one digit
     * box and receives a **1-based** position — the first box is `1`, not `0`.
     */
    labels?: OtpInputLabels;
    /** Whether to render as a child element. */
    asChild?: boolean;
    /** Whether to take full width of parent */
    fullWidth?: boolean;
}
/**
 * Component for entering an OTP (one-time password).
 */
export declare const OtpInput: React.ForwardRefExoticComponent<OtpInputProps & React.RefAttributes<HTMLDivElement>>;
export default OtpInput;
