import { default as React } from '../../../node_modules/react';
/**
 * 複数行のテキスト入力を受け付けるコンポーネント。
 */
export declare const Textarea: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> & {
    status?: "default" | "error";
    variant?: "outline" | "ghost";
    fullWidth?: boolean;
    fieldSizing?: "fixed" | "content";
    label?: string;
    error?: string;
    required?: boolean;
    layout?: "vertical" | "horizontal";
} & React.RefAttributes<HTMLTextAreaElement>>;
