import { default as React } from '../../../node_modules/react';
type TimePickerProps = React.ComponentPropsWithoutRef<"input"> & {
    state?: "default" | "error" | "disabled";
    variant?: "outline" | "ghost";
    fullWidth?: boolean;
};
/**
 * ユーザーが時間を選択するためのコンポーネント。
 */
export declare const TimePicker: ({ state, variant, fullWidth, className, disabled, ...props }: TimePickerProps) => import("react/jsx-runtime").JSX.Element;
export {};
