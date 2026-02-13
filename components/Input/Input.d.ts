import { default as React } from '../../../node_modules/react';
import { Icon } from '../Icon/Icon';
type InputProps = React.ComponentPropsWithoutRef<"input"> & {
    state?: "default" | "error" | "disabled";
    variant?: "outline" | "ghost";
    fullWidth?: boolean;
    leftIcon?: React.ComponentProps<typeof Icon>["name"];
    rightIcon?: React.ComponentProps<typeof Icon>["name"];
    leftIconColor?: React.ComponentProps<typeof Icon>["color"];
    rightIconColor?: React.ComponentProps<typeof Icon>["color"];
    onLeftIconClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onRightIconClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    allowClear?: boolean;
    showPasswordToggle?: boolean;
};
/**
 * ユーザーからの入力を受け付けるための基本コンポーネント。
 */
export declare const Input: ({ state, variant, fullWidth, className, disabled, leftIcon, rightIcon, leftIconColor, rightIconColor, onLeftIconClick, onRightIconClick, allowClear, showPasswordToggle, value, defaultValue, onChange, type, ...props }: InputProps) => import("react/jsx-runtime").JSX.Element;
export {};
