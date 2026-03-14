import { default as React } from '../../../node_modules/react';
import { Input } from '../Input/Input';
export type NumberInputProps = React.ComponentProps<typeof Input> & {
    /**
     * 'number': ネイティブの type="number" を使用（数量の増減など）
     * 'text': type="text" + inputmode を使用（クレカ番号、IDなど、ゼロを保持したい場合）
     */
    mode?: "number" | "text";
    /** スピンボタンを非表示にするか */
    hideSpinButton?: boolean;
    /** 小数点を許可するか (mode="number" の場合のみ有効) */
    allowDecimal?: boolean;
    /** 負の数を許可するか (mode="number" の場合のみ有効) */
    allowNegative?: boolean;
};
/**
 * 数値入力に特化したコンポーネント。
 */
export declare const NumberInput: ({ mode, hideSpinButton, allowDecimal, allowNegative, onKeyDown, className, ...props }: NumberInputProps) => import("react/jsx-runtime").JSX.Element;
