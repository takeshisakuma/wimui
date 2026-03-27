import { default as React } from '../../../../node_modules/react';
import { Icon } from '../../Icon/Icon';
export type InputBaseIcon = {
    name: React.ComponentProps<typeof Icon>["name"];
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    color?: React.ComponentProps<typeof Icon>["color"];
    ariaLabel?: string;
    className?: string;
    /** Whether the icon should be rotated 180deg */
    rotated?: boolean;
};
export type InputBaseProps = {
    children: React.ReactNode;
    status?: "default" | "error";
    variant?: "outline" | "ghost";
    fullWidth?: boolean;
    width?: "xs" | "sm" | "md" | "lg" | "xl" | string | number;
    className?: string;
    disabled?: boolean;
    leftIcon?: React.ComponentProps<typeof Icon>["name"];
    leftIconColor?: React.ComponentProps<typeof Icon>["color"];
    onLeftIconClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    rightIcons?: InputBaseIcon[];
    /** Whether to show a clear button when value is present */
    allowClear?: boolean;
    hasValue?: boolean;
    onClear?: () => void;
};
/**
 * フォーム入力コンポーネント（Input, SearchInput, Selectbox等）の外殻となる共用語コンポーネント。
 * prefix/suffix（アイコン）や clearable（クリアボタン）の配置とレイアウトを統一します。
 */
export declare const InputBase: ({ children, status, variant, fullWidth, width, className, disabled, leftIcon, leftIconColor, onLeftIconClick, rightIcons, allowClear, hasValue, onClear, }: InputBaseProps) => import("react/jsx-runtime").JSX.Element;
