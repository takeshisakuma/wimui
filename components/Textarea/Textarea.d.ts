import { default as React } from '../../../node_modules/react';
/**
 * 複数行のテキスト入力を受け付けるコンポーネント。
 */
export declare const Textarea: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> & {
    state?: "default" | "error" | "disabled";
    variant?: "outline" | "ghost";
    fullWidth?: boolean;
    fieldSizing?: "fixed" | "content";
} & React.RefAttributes<HTMLTextAreaElement>>;
