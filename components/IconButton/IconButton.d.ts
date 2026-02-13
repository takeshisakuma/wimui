import { default as React } from '../../../node_modules/react';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
type IconButtonProps = Omit<React.ComponentProps<typeof Button>, "label" | "iconPosition"> & {
    iconName: React.ComponentProps<typeof Icon>["name"];
    "aria-label": string;
};
/**
 * アイコンのみのボタンコンポーネント。
 */
export declare const IconButton: ({ iconName, ...props }: IconButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
