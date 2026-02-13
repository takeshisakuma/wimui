import { default as React } from '../../../node_modules/react';
import { Input } from '../Input/Input';
type PasswordInputProps = React.ComponentProps<typeof Input>;
/**
 * パスワード入力に特化したコンポーネント。
 * 表示/非表示の切り替え機能を内蔵しています。
 */
export declare const PasswordInput: (props: Omit<PasswordInputProps, "type" | "rightIcon" | "onRightIconClick" | "showPasswordToggle">) => import("react/jsx-runtime").JSX.Element;
export {};
