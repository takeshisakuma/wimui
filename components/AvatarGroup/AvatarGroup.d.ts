import { default as React } from '../../../node_modules/react';
type AvatarGroupProps = {
    children: React.ReactNode;
    max?: number;
    size?: "sm" | "md" | "lg";
    total?: number;
    className?: string;
};
/**
 * 複数のアバターを束ねて表示するためのコンポーネント。
 */
export declare const AvatarGroup: ({ children, max, size, total, className, }: AvatarGroupProps) => import("react/jsx-runtime").JSX.Element;
export {};
