import React, { useMemo } from "react";
import { CodeDiffViewer, type DiffView, type CodeDiffViewerProps } from "../../ai/CodeDiffViewer/CodeDiffViewer";

export interface JsonDiffViewerProps
  extends Omit<CodeDiffViewerProps, "before" | "after" | "language"> {
  /** JSON value before the change */
  before: unknown;
  /** JSON value after the change */
  after: unknown;
  /** Indentation spaces for JSON.stringify (default: 2) */
  indent?: number;
  /** Display mode inherited from CodeDiffViewer */
  view?: DiffView;
}

function serialize(value: unknown, indent: number): string {
  try {
    return JSON.stringify(value, null, indent) ?? "null";
  } catch {
    return String(value);
  }
}

/**
 * JsonDiffViewer compares two JSON values side-by-side or in unified form.
 * Delegates rendering to CodeDiffViewer with language="json".
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const JsonDiffViewer = React.forwardRef<HTMLDivElement, JsonDiffViewerProps>(
  ({ before, after, indent = 2, ...props }, ref) => {
    const beforeStr = useMemo(() => serialize(before, indent), [before, indent]);
    const afterStr = useMemo(() => serialize(after, indent), [after, indent]);

    return (
      <CodeDiffViewer
        ref={ref}
        before={beforeStr}
        after={afterStr}
        language="json"
        {...props}
      />
    );
  }
);

JsonDiffViewer.displayName = "JsonDiffViewer";
