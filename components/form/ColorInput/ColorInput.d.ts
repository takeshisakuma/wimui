import { default as React } from '../../../../node_modules/react';
import { Input } from '../../form/Input/Input';
/**
 * 色を**文字で入れる**ための入力。`#f3ece1` のような値をそのまま打てて、
 * 右の見本から選ぶこともできる。
 *
 * **以前は `<Input type="color">` を出すだけ**で、テキスト欄が無かった。
 * `ColorPicker` と同じ見た目・同じ操作で、docs が言う「正確な値を文字で入れる」
 * ができない状態だった（T122）。役割分担はこう:
 *
 * - `ColorInput` — 値が決まっている（ブランド色・デザイン指定）ときに**打ち込む**
 * - `ColorPicker` — 値が決まっていないときに**見て選ぶ**
 */
export declare const ColorInput: ({ className, value, defaultValue, onChange, style, ...props }: React.ComponentProps<typeof Input>) => React.JSX.Element;
