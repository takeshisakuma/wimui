import { default as React } from '../../../../node_modules/react';
import { DiffView, CodeDiffViewerProps } from '../../ai/CodeDiffViewer/CodeDiffViewer';
export interface JsonDiffViewerProps extends Omit<CodeDiffViewerProps, "before" | "after" | "language"> {
    /** JSON value before the change */
    before: unknown;
    /** JSON value after the change */
    after: unknown;
    /** Indentation spaces for JSON.stringify (default: 2) */
    indent?: number;
    /** Display mode inherited from CodeDiffViewer */
    view?: DiffView;
}
/**
 * JsonDiffViewer compares two JSON values side-by-side or in unified form.
 * Delegates rendering to CodeDiffViewer with language="json".
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export declare const JsonDiffViewer: React.ForwardRefExoticComponent<JsonDiffViewerProps & React.RefAttributes<HTMLDivElement>>;
