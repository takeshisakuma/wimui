import { default as React } from '../../../../node_modules/react';
import { FieldIntent, FieldVariant, FieldWidth } from '../../../types/tokens';
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
    linkApply?: string;
    linkCancel?: string;
};
export type RichTextEditorProps = {
    /** HTML content (controlled) */
    value?: string;
    /** Initial HTML content (uncontrolled) */
    defaultValue?: string;
    /** Callback when the content changes */
    onChange?: (value: string) => void;
    /** Placeholder shown when the editor is empty */
    placeholder?: string;
    /** Whether the editor is disabled */
    disabled?: boolean;
    /** Semantic intent of the field (e.g. error state) */
    intent?: FieldIntent;
    /** Visual style variant of the field */
    variant?: FieldVariant;
    /** Whether to take full width of parent */
    fullWidth?: boolean;
    /** Fixed width of the field (width token, CSS value, or number in px) */
    width?: FieldWidth | string | number;
    /** Minimum height of the editing area */
    minHeight?: number | string;
    /** Field label */
    label?: React.ReactNode;
    /** Error message */
    error?: string;
    /** Whether to show the required indicator */
    required?: boolean;
    /** Layout direction of label and field */
    layout?: "vertical" | "horizontal";
    /** Additional class names */
    className?: string;
    /** Unique ID for the component */
    id?: string;
    /** Toolbar items to display, in order */
    toolbar?: RichTextEditorToolbarItem[];
    /** Labels for internationalization */
    labels?: RichTextEditorLabels;
    /** Accessible label when no visible label is provided */
    "aria-label"?: string;
    /** ID of the element that labels the editor */
    "aria-labelledby"?: string;
};
/**
 * WYSIWYG editor component for rich text input.
 */
export declare const RichTextEditor: {
    ({ value, defaultValue, onChange, placeholder, disabled, intent, variant, fullWidth, width, minHeight, label, error, required, layout, className, id: customId, toolbar, labels, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, }: RichTextEditorProps): React.JSX.Element;
    displayName: string;
};
