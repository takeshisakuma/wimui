type OtpInputProps = {
    length?: number;
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    error?: boolean;
    className?: string;
};
/**
 * OTP（ワンタイムパスワード）入力用コンポーネント。
 */
export declare const OtpInput: ({ length, value, onChange, disabled, error, className, }: OtpInputProps) => import("react/jsx-runtime").JSX.Element;
export {};
