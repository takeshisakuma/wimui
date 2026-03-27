export type RichTextEditorToolbarItem = "bold" | "italic" | "underline" | "strikethrough" | "h1" | "h2" | "h3" | "ul" | "ol" | "link" | "unlink" | "removeFormat" | "separator";
export type RichTextEditorProps = {
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    status?: "default" | "error";
    variant?: "outline" | "ghost";
    fullWidth?: boolean;
    minHeight?: number | string;
    label?: string;
    error?: string;
    required?: boolean;
    layout?: "vertical" | "horizontal";
    className?: string;
    id?: string;
    toolbar?: RichTextEditorToolbarItem[];
    "aria-label"?: string;
    "aria-labelledby"?: string;
};
/**
 * リッチテキスト入力を受け付けるWYSIWYGエディタコンポーネント。
 */
export declare const RichTextEditor: {
    ({ value, defaultValue, onChange, placeholder, disabled, status, variant, fullWidth, minHeight, label, error, required, layout, className, id: customId, toolbar, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, }: RichTextEditorProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
