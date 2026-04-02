import { default as React } from '../../../../node_modules/react';
import { Icon } from '../../media/Icon/Icon';
import { WimIntent } from '../../../types/tokens';
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
    intent?: WimIntent;
    variant?: "outline" | "ghost";
    fullWidth?: boolean;
    width?: "xs" | "sm" | "md" | "lg" | "xl" | string | number;
    className?: string;
    disabled?: boolean;
    leftIcon?: React.ComponentProps<typeof Icon>["name"];
    leftIconColor?: React.ComponentProps<typeof Icon>["color"];
    onLeftIconClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    leftIconAriaLabel?: string;
    rightIcons?: InputBaseIcon[];
    /** Whether to show a clear button when value is present */
    allowClear?: boolean;
    hasValue?: boolean;
    onClear?: () => void;
    clearAriaLabel?: string;
};
/**
 * フォーム入力コンポーネント（Input, SearchInput, Selectbox等）の外殻となる共用語コンポーネント。
 * prefix/suffix（アイコン）や clearable（クリアボタン）の配置とレイアウトを統一します。
 */
export declare const InputBase: ({ children, intent, variant, fullWidth, width, className, disabled, leftIcon, leftIconColor, onLeftIconClick, leftIconAriaLabel, rightIcons, allowClear, hasValue, onClear, clearAriaLabel, }: InputBaseProps) => import("react/jsx-runtime").JSX.Element;
