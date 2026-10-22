import { default as React } from '../../../../node_modules/react';
import { FieldIntent, FieldVariant, FieldWidth } from '../../../types/tokens';
export type RichTextEditorToolbarItem = "bold" | "italic" | "underline" | "strikethrough" | "h1" | "h2" | "h3" | "ul" | "ol" | "link" | "unlink" | "image" | "removeFormat" | "separator";
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
    /** Error shown in the link dialog when the URL is not allowed (only http, https, mailto and relative URLs are). */
    linkInvalid?: string;
    /** Title of the image button and the image dialog. */
    image?: string;
    /** Label of the image URL field. */
    imageUrl?: string;
    /** Label of the alternative text field. */
    imageAlt?: string;
    /** Hint under the alternative text field. */
    imageAltHint?: string;
    /** Label of the button that picks a file (shown only with onImageUpload). */
    imageUpload?: string;
    /** Error shown when onImageUpload rejects or returns a URL that is not allowed. */
    imageUploadFailed?: string;
    /** Error shown in the image dialog when the URL is not allowed (only http, https and relative URLs are). */
    imageInvalid?: string;
};
export type RichTextEditorProps = {
    /** Content (controlled), in the format given by `format`. An empty editor is reported as "". */
    value?: string;
    /** Initial content (uncontrolled), in the format given by `format` */
    defaultValue?: string;
    /**
     * Callback when the content changes, in the format given by `format`. The content only contains what the editor's schema
     * allows, whichever format is used.
     */
    onChange?: (value: string) => void;
    /**
     * Format of `value`, `defaultValue` and `onChange`. With `"markdown"`, the editor reads and writes Markdown and has no underline
     * (Markdown has no syntax for it): the underline button is hidden and underlined input keeps only its text. Read when the
     * editor is created; changing it later does not convert the content.
     */
    format?: "html" | "markdown";
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
    /**
     * Uploads an image file and resolves to its URL (http, https or relative). When given, the image dialog offers a file picker
     * and image files pasted or dropped into the editor are uploaded and inserted. The editor stores only the URL it gets back.
     */
    onImageUpload?: (file: File) => Promise<string>;
};
/**
 * WYSIWYG editor component for rich text input, built on Tiptap (import from `wimui/form/rich-text-editor`).
 */
export declare const RichTextEditor: {
    ({ value, defaultValue, onChange, placeholder, disabled, intent, variant, fullWidth, width, minHeight, label, error, required, layout, className, id: customId, toolbar: toolbarProp, labels, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, onImageUpload, format, }: RichTextEditorProps): React.JSX.Element;
    displayName: string;
};
