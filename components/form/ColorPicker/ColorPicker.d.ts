import { InputProps } from '../../form/Input/Input';
export type ColorPickerProps = Omit<InputProps, "type">;
/**
 * ユーザーが色を選択するためのコンポーネント。
 */
export declare const ColorPicker: ({ intent, variant, fullWidth, className, disabled, ...props }: ColorPickerProps) => import("react/jsx-runtime").JSX.Element;
