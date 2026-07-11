import React, { useState, useRef, useEffect, useId, useMemo } from "react";
import classNames from "classnames";
import { Transition } from "../../layout/Transition/Transition";
import { TreeView, TreeViewNode } from "../../data-display/TreeView/TreeView";
import { InputBase } from "../InputBase";
import { FocusTrap } from "../../overlay/FocusTrap/FocusTrap";
import styles from "./tree-select.module.scss";
import { FieldTemplate } from "../FieldTemplate";
import { FieldWidth } from "../../../types/tokens";

/** treeData の label をそのまま使ってツリーを再構築する */
function resolveLabels(
  nodes: TreeSelectNode[],
): TreeViewNode[] {
  return nodes.map((node) => ({
    value: node.value,
    label: node.label,
    disabled: node.disabled,
    icon: node.icon,
    children: node.children ? resolveLabels(node.children) : undefined,
  }));
}

export type TreeSelectNode = {
  label: React.ReactNode;
  value: string;
  children?: TreeSelectNode[];
  disabled?: boolean;
  icon?: React.ReactNode;
};

export type TreeSelectProps = {
  /** Tree nodes to select from */
  treeData: TreeSelectNode[];
  /** Selected value(s) (controlled) */
  value?: string | string[];
  /** Callback when the selection changes */
  onChange?: (value: string | string[]) => void;
  /** Placeholder shown when nothing is selected */
  placeholder?: React.ReactNode;
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
  /** Whether the field is disabled */
  disabled?: boolean;
  /** Whether multiple nodes can be selected */
  multiple?: boolean;
  /** Whether to show a search input for filtering nodes */
  searchable?: boolean;
  /** Keys of the nodes expanded initially */
  defaultExpandedKeys?: string[];
  /** Whether to show a clear button when a value is selected */
  allowClear?: boolean;
  /**
   * Check selection behavior (effective when multiple).
   * - cascade: checking a parent selects all children; partially checked children make the parent indeterminate (default)
   * - exclusive: parent and children are mutually exclusive (selecting a parent deselects children and vice versa)
   */
  checkStrategy?: "cascade" | "exclusive";
  /** Unique ID for the component */
  id?: string;
  /** Accessible label for the trigger when no visible label is provided */
  "aria-label"?: string;
  /** ID of the element that labels the field */
  "aria-labelledby"?: string;
  /** ID of the element that describes the field */
  "aria-describedby"?: string;
  /** Fixed width of the field (width token, CSS value, or number in px) */
  width?: FieldWidth | string | number;
  /** Whether to take full width of parent */
  fullWidth?: boolean;
};

/**
 * Component for selecting one or more options from a tree structure.
 */
export const TreeSelect = ({
  treeData = [],
  value,
  onChange,
  placeholder,
  label,
  error,
  required,
  layout,
  className,
  disabled = false,
  multiple = false,
  searchable = false,
  defaultExpandedKeys = [],
  allowClear = false,
  checkStrategy = "cascade",
  id: customId,
  width,
  fullWidth = false,
  ...props
}: TreeSelectProps) => {
  const generatedId = useId();
  const id = customId || `wim-tree-select-${generatedId}`;
  const labelId = label ? `${id}-label` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const triggerId = `${id}-trigger`;
  const dropdownId = `${id}-dropdown`;

  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<string | string[]>(
    multiple ? [] : "",
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Move focus to the search input if searchable, otherwise to the tree
      const timer = setTimeout(() => {
        const searchInput = containerRef.current?.querySelector('[data-testid="tree-view-search-input"]') as HTMLElement;
        if (searchInput) {
          searchInput.focus();
        } else {
          const tree = containerRef.current?.querySelector('[data-testid="tree-view-root"]') as HTMLElement;
          tree?.focus();
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleToggle = () => {
    if (!disabled) {
      const nextOpen = !isOpen;
      setIsOpen(nextOpen);
      if (!nextOpen) {
        triggerRef.current?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    if (!isOpen) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    if (e.key === "Escape") {
      e.preventDefault();
      setIsOpen(false);
      triggerRef.current?.focus();
    }
  };

  const flatNodes = useMemo(() => {
    const flat: Record<string, TreeSelectNode> = {};
    const traverse = (nodes: TreeSelectNode[]) => {
      nodes.forEach((node) => {
        flat[node.value] = node;
        if (node.children) traverse(node.children);
      });
    };
    traverse(treeData);
    return flat;
  }, [treeData]);

  const getDisplayValue = () => {
    if (multiple) {
      const vals = Array.isArray(currentValue) ? currentValue : [];
      if (vals.length === 0) return null;
      // Note: ReactNode might be joined poorly if they are complex JSX.
      // Usually users will pass strings or translated strings here.
      return vals.map((v) => (flatNodes[v] ? flatNodes[v].label : v)).reduce((prev, curr) => [prev, ", ", curr]);
    } else {
      const val = currentValue as string;
      if (!val) return null;
      return flatNodes[val] ? flatNodes[val].label : val;
    }
  };

  const handleSelect = (selectedKeys: string[]) => {
    let newValue: string | string[];

    if (multiple) {
      newValue = selectedKeys;
    } else {
      newValue = selectedKeys[0] || "";
      setIsOpen(false);
      triggerRef.current?.focus();
    }

    if (!isControlled) {
      setInternalValue(newValue);
    }
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleClear = () => {
    if (disabled) return;

    const newValue = multiple ? [] : "";
    if (!isControlled) {
      setInternalValue(newValue);
    }
    if (onChange) {
      onChange(newValue);
    }
  };

  // treeData を TreeViewNode 形式に変換
  const resolvedNodes = useMemo(
    () => resolveLabels(treeData),
    [treeData],
  );

  const selectedKeys = useMemo(() => {
    if (multiple) return Array.isArray(currentValue) ? currentValue : [];
    return currentValue ? [currentValue as string] : [];
  }, [currentValue, multiple]);

  const displayValue = getDisplayValue();

  const {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
    ...wrapperProps
  } = props;

  const placeholderStr = typeof placeholder === "string" ? placeholder : "Select";

  return (
    <FieldTemplate
      label={label}
      error={error}
      required={required}
      layout={layout}
      labelId={labelId}
      errorId={errorId}
      className={classNames(styles.container, className)}
    >
      <div
        className={classNames("wim-tree-select", styles.root, fullWidth && styles.fullWidth)}
        ref={containerRef}
        {...wrapperProps}
      >
        <InputBase
          disabled={disabled}
          allowClear={allowClear}
          hasValue={!!displayValue}
          onClear={handleClear}
          intent={error ? "danger" : "default"}
          width={width}
          fullWidth={fullWidth}
          rightIcons={[{ name: "ChevronDownIcon", rotated: isOpen, onClick: handleToggle }]}
          className={classNames(
            isOpen && styles.open,
          )}
        >
          <div
            id={triggerId}
            className={classNames(
              styles.trigger,
              disabled && styles.disabled,
            )}
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
            tabIndex={disabled ? -1 : 0}
            role="combobox"
            aria-expanded={isOpen}
            aria-haspopup="tree"
            aria-controls={isOpen ? dropdownId : undefined}
            aria-disabled={disabled}
            aria-labelledby={labelId || ariaLabelledBy}
            aria-label={label ? undefined : (ariaLabel || placeholderStr)}
            aria-describedby={errorId || ariaDescribedBy}
            aria-required={required}
            aria-invalid={!!error}
            ref={triggerRef}
          >
            <div
              className={classNames(
                styles.value,
                !displayValue && styles.placeholder,
              )}
            >
              {displayValue || placeholder}
            </div>
          </div>
        </InputBase>

        <Transition
          show={isOpen && !disabled}
          preset="fade"
          className={styles.dropdown}
        >
          <div id={dropdownId}>
            <FocusTrap active={isOpen} initialFocus={false}>
              <div role="dialog" aria-modal="true" aria-labelledby={labelId}>
                <TreeView
                  multiSelect={multiple}
                  defaultSelectedValues={selectedKeys}
                  defaultCheckedValues={multiple ? selectedKeys : []}
                  nodes={resolvedNodes}
                  onCheckedChange={handleSelect}
                  onSelectedChange={handleSelect}
                  checkable={multiple}
                  checkStrategy={checkStrategy}
                  searchable={searchable}
                  defaultExpandedValues={defaultExpandedKeys}
                  styles={{
                    root: styles.treeView,
                    item: styles.treeViewItem,
                    search: styles.treeViewSearch,
                  }}
                />
              </div>
            </FocusTrap>
          </div>
        </Transition>
      </div>
    </FieldTemplate>
  );
};

TreeSelect.displayName = "TreeSelect";
