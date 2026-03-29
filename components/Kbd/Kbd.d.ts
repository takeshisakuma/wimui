import { default as React } from '../../../node_modules/react';
import { ComponentSize } from '../../types/tokens';
export type KbdProps = React.ComponentPropsWithoutRef<"kbd"> & {
    /**
     * キーボードのラベル（または子要素）。
     */
    children: React.ReactNode;
    /**
     * サイズ。
     */
    size?: ComponentSize;
};
/**
 * ユーザーが入力するキーボードのショートカットやキーを表示するためのコンポーネント。
 */
export declare const Kbd: ({ children, size, className, ...props }: KbdProps) => import("react/jsx-runtime").JSX.Element;
