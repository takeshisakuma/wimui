import { default as React } from '../../../../node_modules/react';
import { WimIntent, FieldVariant } from '../../../types/tokens';
export type RichTextEditorToolbarItem = "bold" | "italic" | "underline" | "strikethrough" | "h1" | "h2" | "h3" | "ul" | "ol" | "link" | "unlink" | "removeFormat" | "separator";
export type RichTextEditorLabels = {
    bold?: string;
    italic?: string;
    underline?: string;
    strikethrough?: string;
    h1?: string;
    h2?: string;
    h3?: string;
    ul?: string;
    ol?: string;
    link?: string;
    unlink?: string;
    removeFormat?: string;
    toolbar?: string;
    linkPrompt?: string;
};
export type RichTextEditorProps = {
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    intent?: WimIntent;
    variant?: FieldVariant;
    fullWidth?: boolean;
    minHeight?: number | string;
    label?: React.ReactNode;
    error?: string;
    required?: boolean;
    layout?: "vertical" | "horizontal";
    className?: string;
    id?: string;
    toolbar?: RichTextEditorToolbarItem[];
    labels?: RichTextEditorLabels;
    "aria-label"?: string;
    "aria-labelledby"?: string;
};
/**
 * リッチテキスト入力を受け付けるWYSIWYGエディタコンポーネント。
 */
export declare const RichTextEditor: {
    ({ value, defaultValue, onChange, placeholder, disabled, intent, variant, fullWidth, minHeight, label, error, required, layout, className, id: customId, toolbar, labels, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, }: RichTextEditorProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
