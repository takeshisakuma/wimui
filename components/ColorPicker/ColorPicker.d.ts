import { InputProps } from '../Input/Input';
export type ColorPickerProps = Omit<InputProps, "type">;
/**
 * ユーザーが色を選択するためのコンポーネント。
 */
export declare const ColorPicker: ({ status, variant, fullWidth, className, disabled, ...props }: ColorPickerProps) => import("react/jsx-runtime").JSX.Element;
