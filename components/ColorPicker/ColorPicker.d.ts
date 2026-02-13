import { default as React } from '../../../node_modules/react';
type ColorPickerProps = React.ComponentPropsWithoutRef<"input"> & {
    state?: "default" | "error" | "disabled";
    variant?: "outline" | "ghost";
    fullWidth?: boolean;
};
/**
 * ユーザーが色を選択するためのコンポーネント。
 */
export declare const ColorPicker: ({ state, variant, fullWidth, className, disabled, ...props }: ColorPickerProps) => import("react/jsx-runtime").JSX.Element;
export {};
