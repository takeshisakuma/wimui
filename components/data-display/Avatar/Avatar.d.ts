import { default as React } from '../../../../node_modules/react';
import { ComponentSize } from '../../../types/tokens';
type AvatarProps = React.ComponentPropsWithoutRef<"div"> & {
    src?: string;
    alt?: string;
    initials?: string;
    icon?: React.ReactNode;
    size?: ComponentSize;
    shape?: "circle" | "rounded";
    /** ステータス */
    status?: "primary" | "secondary" | "neutral" | "error" | "success";
};
/**
 * ユーザーのアイコンやイニシャルを表示するためのアバターコンポーネント。
 */
export declare const Avatar: ({ src, alt, initials, icon, size, shape, status, className, ...props }: AvatarProps) => import("react/jsx-runtime").JSX.Element;
export {};
