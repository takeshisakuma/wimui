import { default as React } from '../../../node_modules/react';
import { ComponentSize } from '../../types/tokens';
type AvatarGroupProps = {
    children: React.ReactNode;
    max?: number;
    size?: ComponentSize;
    total?: number;
    className?: string;
};
/**
 * 複数のアバターを束ねて表示するためのコンポーネント。
 */
export declare const AvatarGroup: ({ children, max, size, total, className, }: AvatarGroupProps) => import("react/jsx-runtime").JSX.Element;
export {};
