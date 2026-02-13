import { default as React } from '../../../node_modules/react';
import { Input } from '../Input/Input';
type InputMaskProps = React.ComponentProps<typeof Input> & {
    mask: string;
    maskChar?: string;
};
/**
 * 特定の形式に沿った入力を強制するためのマスク付き入力コンポーネント。
 * '9': 数字 (0-9)
 * 'a': 英字 (a-z, A-Z)
 * '*': 英数字
 * その他: そのまま表示
 */
export declare const InputMask: ({ mask, maskChar, value, defaultValue, onChange, ...props }: InputMaskProps) => import("react/jsx-runtime").JSX.Element;
export {};
