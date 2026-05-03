import React, { useState } from "react";
import classNames from "classnames";
import { Slot } from "@radix-ui/react-slot";
import localStyles from "./json-viewer.module.scss";
import { Icon } from "../../media/Icon/Icon";
import { IconButton } from "../../form/IconButton/IconButton";
import { useTranslation } from "react-i18next";

export interface JsonViewerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The JSON data to display */
  data: unknown;
  /** Initial depth to expand */
  expandDepth?: number;
  /** If true, show copy button */
  showCopy?: boolean;
  /** If true, show toolbar */
  showToolbar?: boolean;
  /** If true, the component will be rendered as its child */
  asChild?: boolean;
}

const JsonNode = ({
  label,
  value,
  depth,
  currentDepth,
}: {
  label?: string;
  value: unknown;
  depth: number;
  currentDepth: number;
}) => {
  const [expanded, setExpanded] = useState(currentDepth < depth);
  const isObject = value !== null && typeof value === "object";
  const isArray = Array.isArray(value);

  const toggle = () => setExpanded(!expanded);

  if (!isObject) {
    return (
      <div className={localStyles.node}>
        {label && <span className={localStyles.key}>{label}:</span>}
        <span className={classNames(localStyles.value, localStyles[value === null ? "null" : typeof value])}>
          {typeof value === "string" ? `"${value}"` : String(value)}
        </span>
      </div>
    );
  }

  const isEmpty = isArray ? (value as unknown[]).length === 0 : Object.keys(value as object).length === 0;

  return (
    <div className={localStyles.node}>
      <div
        className={classNames(localStyles.header, !isEmpty && localStyles.collapsible)}
        onClick={!isEmpty ? toggle : undefined}
        onKeyDown={(e) => {
          if (!isEmpty && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            toggle();
          }
        }}
        tabIndex={!isEmpty ? 0 : undefined}
        role={!isEmpty ? "button" : undefined}
        aria-expanded={expanded}
      >
        {!isEmpty && (
          <Icon
            name={expanded ? "ChevronDownIcon" : "ChevronRightIcon"}
            size="sm"
            className={localStyles.toggle}
          />
        )}
        {label && <span className={localStyles.key}>{label}:</span>}
        <span className={localStyles.bracket}>{isArray ? "[" : "{"}</span>
        {!expanded && !isEmpty && <span className={localStyles.ellipsis}>...</span>}
        {!expanded && <span className={localStyles.bracket}>{isArray ? "]" : "}"}</span>}
        {expanded && (
          <span className={localStyles.count}>
            {isArray ? `${(value as unknown[]).length} items` : `${Object.keys(value as object).length} keys`}
          </span>
        )}
      </div>
      {expanded && !isEmpty && (
        <div className={localStyles.children}>
          {isArray
            ? (value as unknown[]).map((item, i) => (
                <JsonNode key={i} value={item} depth={depth} currentDepth={currentDepth + 1} />
              ))
            : Object.entries(value as object).map(([k, v]) => (
                <JsonNode key={k} label={k} value={v} depth={depth} currentDepth={currentDepth + 1} />
              ))}
        </div>
      )}
      {expanded && (
        <div className={localStyles.footer}>
          <span className={localStyles.bracket}>{isArray ? "]" : "}"}</span>
        </div>
      )}
    </div>
  );
};

/**
 * JsonViewer component displays JSON data in a recursive, interactive tree format.
 * 
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const JsonViewer = React.forwardRef<HTMLDivElement, JsonViewerProps>(
  ({ data, expandDepth = 1, showCopy = true, showToolbar = true, asChild = false, className, ...props }, ref) => {
    const { t } = useTranslation();
    const Root = asChild ? Slot : "div";

    const copyToClipboard = () => {
      navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    };

    return (
      <Root ref={ref} className={classNames(localStyles.root, className)} {...props}>
        {showToolbar && (
          <div className={localStyles.toolbar}>
            <span className={localStyles.title}>JSON Viewer</span>
            {showCopy && (
              <IconButton
                iconName="CopyIcon"
                variant="ghost"
                size="sm"
                onClick={copyToClipboard}
                aria-label={t("jsonViewer.copy")}
              />
            )}
          </div>
        )}
        <div className={localStyles.tree}>
          <JsonNode value={data} depth={expandDepth} currentDepth={0} />
        </div>
      </Root>
    );
  }
);

JsonViewer.displayName = "JsonViewer";
