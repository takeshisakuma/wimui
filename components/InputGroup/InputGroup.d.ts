import { default as React } from '../../../node_modules/react';
type InputGroupProps = {
    children: React.ReactNode;
    fullWidth?: boolean;
    className?: string;
};
/**
 * 複数の入力要素やボタン、テキストを組み合わせて一つのユニットとして表示するコンポーネント。
 */
export declare const InputGroup: ({ children, fullWidth, className, }: InputGroupProps) => import("react/jsx-runtime").JSX.Element;
type InputGroupTextProps = {
    children: React.ReactNode;
    className?: string;
};
/**
 * InputGroup内でテキストやアイコンを表示するためのアドオンコンポーネント。
 */
export declare const InputGroupText: ({ children, className, }: InputGroupTextProps) => import("react/jsx-runtime").JSX.Element;
export {};
