import { default as React } from '../../../../node_modules/react';
export type OtpInputLabels = {
    digitAriaLabel?: (index: number) => string;
};
type OtpInputProps = {
    length?: number;
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    error?: string;
    required?: boolean;
    label?: React.ReactNode;
    layout?: "vertical" | "horizontal";
    className?: string;
    labels?: OtpInputLabels;
};
/**
 * OTP（ワンタイムパスワード）入力用コンポーネント。
 */
export declare const OtpInput: ({ length, value, onChange, disabled, error, required, label, layout, className, labels, }: OtpInputProps) => import("react/jsx-runtime").JSX.Element;
export {};
