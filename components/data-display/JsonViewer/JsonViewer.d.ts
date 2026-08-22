import { default as React } from '../../../../node_modules/react';
export interface JsonViewerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The JSON data to display */
    data: unknown;
    /** Initial depth to expand */
    expandDepth?: number;
    /** If true, show copy button */
    showCopy?: boolean;
    /** If true, show toolbar */
    showToolbar?: boolean;
    /** If true, the data can be edited inline */
    editable?: boolean;
    /** Callback when data changes */
    onChange?: (data: unknown) => void;
}
/**
 * JsonViewer component displays JSON data in a recursive, interactive tree format.
 * Supports inline editing when `editable` is true.
 */
export declare const JsonViewer: React.ForwardRefExoticComponent<JsonViewerProps & React.RefAttributes<HTMLDivElement>>;
