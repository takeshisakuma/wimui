import { default as React } from '../../../node_modules/react';
type AvatarProps = React.ComponentPropsWithoutRef<"div"> & {
    src?: string;
    alt?: string;
    initials?: string;
    icon?: React.ReactNode;
    size?: "sm" | "md" | "lg";
    shape?: "circle" | "rounded";
    color?: "primary" | "secondary" | "neutral" | "error" | "success";
};
/**
 * ユーザーのアイコンやイニシャルを表示するためのアバターコンポーネント。
 */
export declare const Avatar: ({ src, alt, initials, icon, size, shape, color, className, ...props }: AvatarProps) => import("react/jsx-runtime").JSX.Element;
export {};
