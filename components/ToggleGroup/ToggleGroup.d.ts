import { default as React } from '../../../node_modules/react';
import { Icon } from '../Icon/Icon';
export type Option = {
    label?: string;
    value: string;
    iconName?: React.ComponentProps<typeof Icon>["name"];
    disabled?: boolean;
};
type ToggleGroupProps = {
    options: Option[];
    value?: string | string[];
    defaultValue?: string | string[];
    onChange?: (value: string | string[]) => void;
    selectionMode?: "single" | "multiple";
    size?: "small" | "medium" | "large";
    fullWidth?: boolean;
    className?: string;
    /**
     * アクセシビリティ用のラベル（role="radiogroup" / "toolbar" の accessible name）
     */
    "aria-label"?: string;
    /**
     * アクセシビリティ用のラベルID（aria-label の代替）
     */
    "aria-labelledby"?: string;
};
/**
 * ToggleGroup component allows users to select one or multiple options from a set of buttons.
 */
export declare const ToggleGroup: ({ options, value, defaultValue, onChange, selectionMode, size, fullWidth, className, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, }: ToggleGroupProps) => import("react/jsx-runtime").JSX.Element;
export {};
