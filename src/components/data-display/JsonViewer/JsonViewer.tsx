import React, { useState, useCallback, useId } from "react";
import classNames from "classnames";
import localStyles from "./json-viewer.module.scss";
import { Icon } from "../../media/Icon/Icon";
import { IconButton } from "../../form/IconButton/IconButton";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { PlusIcon, TrashIcon, ChevronDownIcon, ChevronRightIcon } from "@/icon";

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
 * Deeply updates a value in a JSON object given a path
 */
const updateAtPath = (obj: unknown, path: (string | number)[], value: unknown): unknown => {
  if (path.length === 0) return value;
  const [head, ...tail] = path;
  if (Array.isArray(obj)) {
    const newArr = [...obj];
    newArr[head as number] = updateAtPath(obj[head as number], tail, value);
    return newArr;
  } else if (obj !== null && typeof obj === "object") {
    return {
      ...(obj as Record<string, unknown>),
      [head]: updateAtPath((obj as Record<string, unknown>)[head], tail, value),
    };
  }
  return obj;
};

/**
 * Deeply deletes a key/index in a JSON object given a path
 */
const deleteAtPath = (obj: unknown, path: (string | number)[]): unknown => {
  if (path.length === 0) return obj;
  const [head, ...tail] = path;
  if (path.length === 1) {
    if (Array.isArray(obj)) {
      return obj.filter((_, i) => i !== head);
    } else if (obj !== null && typeof obj === "object") {
      const rest = { ...(obj as Record<string, unknown>) };
      delete rest[head];
      return rest;
    }
    return obj;
  }
  if (Array.isArray(obj)) {
    const newArr = [...obj];
    newArr[head as number] = deleteAtPath(obj[head as number], tail);
    return newArr;
  } else if (obj !== null && typeof obj === "object") {
    return {
      ...(obj as Record<string, unknown>),
      [head]: deleteAtPath((obj as Record<string, unknown>)[head], tail),
    };
  }
  return obj;
};

/**
 * Deeply adds a value to an object/array at a path
 */
const addAtPath = (obj: unknown, path: (string | number)[], key?: string): unknown => {
  if (path.length === 0) {
    if (Array.isArray(obj)) return [...obj, ""];
    if (obj !== null && typeof obj === "object") {
      return { ...(obj as Record<string, unknown>), [key || "new_key"]: "" };
    }
    return obj;
  }
  const [head, ...tail] = path;
  if (Array.isArray(obj)) {
    const newArr = [...obj];
    newArr[head as number] = addAtPath(obj[head as number], tail, key);
    return newArr;
  } else if (obj !== null && typeof obj === "object") {
    return {
      ...(obj as Record<string, unknown>),
      [head]: addAtPath((obj as Record<string, unknown>)[head], tail, key),
    };
  }
  return obj;
};

const EditableValue = ({ 
  value, 
  onSave, 
  className 
}: { 
  value: unknown; 
  onSave: (val: unknown) => void;
  className?: string;
}) => {
  const [editing, setEditing] = useState(false);
  const [tempValue, setTempValue] = useState(String(value));
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  const handleBlur = () => {
    setEditing(false);
    let finalValue: unknown = tempValue;
    if (typeof value === "number") finalValue = Number(tempValue);
    if (typeof value === "boolean") finalValue = tempValue === "true";
    if (tempValue === "null") finalValue = null;
    onSave(finalValue);
  };

  if (!editing) {
    return (
      <span 
        role="button"
        tabIndex={0}
        className={classNames(localStyles.value, className, localStyles.editable)}
        onClick={() => setEditing(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setEditing(true);
          }
        }}
      >
        {typeof value === "string" ? `"${value}"` : String(value)}
      </span>
    );
  }

  return (
    <input
      ref={inputRef}
      className={localStyles.input}
      value={tempValue}
      onChange={(e) => setTempValue(e.target.value)}
      onBlur={handleBlur}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleBlur();
        if (e.key === "Escape") setEditing(false);
      }}
    />
  );
};

const JsonNode = ({
  label,
  value,
  depth,
  currentDepth,
  path,
  editable,
  onUpdate,
  onDelete,
  onAdd,
}: {
  label?: string;
  value: unknown;
  depth: number;
  currentDepth: number;
  path: (string | number)[];
  editable?: boolean;
  onUpdate: (path: (string | number)[], val: unknown) => void;
  onDelete: (path: (string | number)[]) => void;
  onAdd: (path: (string | number)[]) => void;
}) => {
  const { t } = useWimTranslation();
  const [expanded, setExpanded] = useState(currentDepth < depth);
  const isObject = value !== null && typeof value === "object";
  const isArray = Array.isArray(value);

  const toggle = () => setExpanded(!expanded);

  const renderActions = () => {
    if (!editable) return null;
    return (
      <div className={localStyles.actions}>
        {isObject && (
          <button 
            type="button"
            className={localStyles.nodeAction} 
            onClick={(e) => { e.stopPropagation(); onAdd(path); }} 
            title={t("jsonViewer.addItem")}
            aria-label={t("jsonViewer.addItem")}
          >
            <Icon component={PlusIcon} size="xs" />
          </button>
        )}
        {currentDepth > 0 && (
          <button 
            type="button"
            className={classNames(localStyles.nodeAction, localStyles.delete)} 
            onClick={(e) => { e.stopPropagation(); onDelete(path); }} 
            title={t("jsonViewer.deleteItem")}
            aria-label={t("jsonViewer.deleteItem")}
          >
            <Icon component={TrashIcon} size="xs" />
          </button>
        )}
      </div>
    );
  };

  if (!isObject) {
    return (
      <div className={localStyles.node}>
        {label && <span className={localStyles.key}>{label}:</span>}
        {editable ? (
          <EditableValue 
            value={value} 
            onSave={(val) => onUpdate(path, val)} 
            className={localStyles[value === null ? "null" : typeof value]}
          />
        ) : (
          <span className={classNames(localStyles.value, localStyles[value === null ? "null" : typeof value])}>
            {typeof value === "string" ? `"${value}"` : String(value)}
          </span>
        )}
        {renderActions()}
      </div>
    );
  }

  const isEmpty = isArray ? (value as unknown[]).length === 0 : Object.keys(value as object).length === 0;

  return (
    <div className={localStyles.node}>
      <div
        role="button"
        tabIndex={isEmpty ? -1 : 0}
        className={classNames(localStyles.header, !isEmpty && localStyles.collapsible)}
        onClick={!isEmpty ? toggle : undefined}
        onKeyDown={(e) => {
          if (!isEmpty && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            toggle();
          }
        }}
      >
        {!isEmpty && (
          <Icon
            component={expanded ? ChevronDownIcon : ChevronRightIcon}
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
        {renderActions()}
      </div>
      {expanded && !isEmpty && (
        <div className={localStyles.children}>
          {isArray
            ? (value as unknown[]).map((item, i) => (
                <JsonNode 
                  key={i} 
                  value={item} 
                  depth={depth} 
                  currentDepth={currentDepth + 1} 
                  path={[...path, i]}
                  editable={editable}
                  onUpdate={onUpdate}
                  onDelete={onDelete}
                  onAdd={onAdd}
                />
              ))
            : Object.entries(value as object).map(([k, v]) => (
                <JsonNode 
                  key={k} 
                  label={k} 
                  value={v} 
                  depth={depth} 
                  currentDepth={currentDepth + 1} 
                  path={[...path, k]}
                  editable={editable}
                  onUpdate={onUpdate}
                  onDelete={onDelete}
                  onAdd={onAdd}
                />
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
 * Supports inline editing when `editable` is true.
 */
export const JsonViewer = React.forwardRef<HTMLDivElement, JsonViewerProps>(
  ({ data: initialData, expandDepth = 1, showCopy = true, showToolbar = true, editable = false, onChange, className, ...props }, ref) => {
    const { t } = useWimTranslation();
    const [data, setData] = useState(initialData);
    const [prevInitialData, setPrevInitialData] = useState(initialData);
    const titleId = useId();

    // Sync state with props using the "Derived State" pattern
    if (initialData !== prevInitialData) {
      setData(initialData);
      setPrevInitialData(initialData);
    }

    const handleUpdate = useCallback((path: (string | number)[], value: unknown) => {
      setData((current: unknown) => {
        const newData = updateAtPath(current, path, value);
        onChange?.(newData);
        return newData;
      });
    }, [onChange]);

    const handleDelete = useCallback((path: (string | number)[]) => {
      setData((current: unknown) => {
        const newData = deleteAtPath(current, path);
        onChange?.(newData);
        return newData;
      });
    }, [onChange]);

    const handleAdd = useCallback((path: (string | number)[]) => {
      setData((current: unknown) => {
        const newData = addAtPath(current, path);
        onChange?.(newData);
        return newData;
      });
    }, [onChange]);

    const copyToClipboard = () => {
      navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    };

    return (
      <div 
        ref={ref} 
        className={classNames("wim-json-viewer", localStyles.root, className)} 
        aria-labelledby={showToolbar ? titleId : undefined}
        {...props}
      >
        {showToolbar && (
          <div className={localStyles.toolbar}>
            <span id={titleId} className={localStyles.title}>{editable ? t("jsonViewer.edit") : t("jsonViewer.title")}</span>
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
          <JsonNode 
            value={data} 
            depth={expandDepth} 
            currentDepth={0} 
            path={[]} 
            editable={editable}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            onAdd={handleAdd}
          />
        </div>
      </div>
    );
  }
);

JsonViewer.displayName = "JsonViewer";
