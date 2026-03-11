type OtpInputProps = {
    length?: number;
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    error?: string;
    required?: boolean;
    label?: string;
    layout?: "vertical" | "horizontal";
    className?: string;
};
/**
 * OTP（ワンタイムパスワード）入力用コンポーネント。
 */
export declare const OtpInput: ({ length, value, onChange, disabled, error, required, label, layout, className, }: OtpInputProps) => import("react/jsx-runtime").JSX.Element;
export {};
