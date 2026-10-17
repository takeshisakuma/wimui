import { default as React } from '../../../../node_modules/react';
export type DiffView = "split" | "unified";
export interface CodeDiffViewerProps extends React.ComponentPropsWithoutRef<"div"> {
    /** Code before the change */
    before: string;
    /** Code after the change */
    after: string;
    /** Language label shown in header */
    language?: string;
    /** Filename shown in header (takes precedence over language) */
    filename?: string;
    /** Display mode */
    view?: DiffView;
    /** Called when user clicks Apply */
    onApply?: () => void;
    /** Called when user clicks Reject */
    onReject?: () => void;
    /** Additional CSS class */
    className?: string;
    /** Whether the change is currently being applied */
    isApplying?: boolean;
    /** Whether the change has been successfully applied */
    isApplied?: boolean;
}
/**
 * CodeDiffViewer displays before/after code changes in git-diff style,
 * with optional Apply/Reject actions.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export declare const CodeDiffViewer: React.ForwardRefExoticComponent<CodeDiffViewerProps & React.RefAttributes<HTMLDivElement>>;
