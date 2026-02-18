import { default as React } from '../../../node_modules/react';
import { Icon } from '../Icon/Icon';
export type InputProps = React.ComponentPropsWithoutRef<"input"> & {
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
export declare const Input: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & {
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
} & React.RefAttributes<HTMLInputElement>>;
