export type CountryEntry = {
    code: string;
    dialCode: string;
    flag: string;
    name: string;
};
export declare const PHONE_COUNTRIES: CountryEntry[];
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
export declare const PhoneInput: ({ value, onChange, countryCode, onCountryChange, placeholder, disabled, error, required, label, layout, className, }: PhoneInputProps) => import("react/jsx-runtime").JSX.Element;
