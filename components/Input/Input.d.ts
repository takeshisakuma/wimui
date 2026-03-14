import { default as React } from '../../../node_modules/react';
import { Icon } from '../Icon/Icon';
export type InputProps = React.ComponentPropsWithoutRef<"input"> & {
    status?: "default" | "error" | "disabled";
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
    rightIconClassName?: string;
    rightIconRotated?: boolean;
    width?: "xs" | "sm" | "md" | "lg" | "xl" | string | number;
    label?: string;
    error?: string;
    required?: boolean;
    layout?: "vertical" | "horizontal";
    inputClassName?: string;
};
/**
 * ユーザーからの入力を受け付けるための基本コンポーネント。
 */
export declare const Input: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & {
    status?: "default" | "error" | "disabled";
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
    rightIconClassName?: string;
    rightIconRotated?: boolean;
    width?: "xs" | "sm" | "md" | "lg" | "xl" | string | number;
    label?: string;
    error?: string;
    required?: boolean;
    layout?: "vertical" | "horizontal";
    inputClassName?: string;
} & React.RefAttributes<HTMLInputElement>>;
