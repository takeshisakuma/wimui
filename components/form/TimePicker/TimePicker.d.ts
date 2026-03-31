import { InputProps } from '../../form/Input/Input';
export type TimePickerProps = Omit<InputProps, "type" | "rightIcon">;
/**
 * ユーザーが時間を選択するためのコンポーネント。
 */
export declare const TimePicker: ({ status, variant, fullWidth, className, disabled, allowClear, ...props }: TimePickerProps) => import("react/jsx-runtime").JSX.Element;
