import React, { useState, useRef, useEffect, useId, useMemo } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Transition } from "../Transition/Transition";
import { Icon } from "../Icon/Icon";
import { TreeView } from "../TreeView/TreeView";
import { InputBase } from "../_internal/InputBase";
import "./tree-select.scss";

import { FieldTemplate } from "../_internal/FieldTemplate";

export type TreeSelectNode = {
  label: string;
  value: string;
  children?: TreeSelectNode[];
  disabled?: boolean;
  icon?: React.ReactNode;
};

export type TreeSelectProps = {
  treeData: TreeSelectNode[];
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  required?: boolean;
  layout?: "vertical" | "horizontal";
  className?: string;
  disabled?: boolean;
  multiple?: boolean;
  searchable?: boolean;
  defaultExpandedKeys?: string[];
  /** Whether to show a clear button when a value is selected */
  allowClear?: boolean;
  id?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
};

/**
 * ツリー形式の選択肢から1つまたは複数を選択するためのコンポーネント。
 */
export const TreeSelect = ({
  treeData = [],
  value,
  onChange,
  placeholder = "Select",
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
  id: customId,
  ...props
}: TreeSelectProps) => {
  const { t } = useTranslation("common");
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
      // Move focus to the tree when it opens
      const timer = setTimeout(() => {
        const tree = containerRef.current?.querySelector(".wim-tree-view") as HTMLElement;
        tree?.focus();
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

    if (e.key === "Escape" || e.key === "Tab") {
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
      return vals.map((v) => (flatNodes[v] ? t(flatNodes[v].label) : v)).join(", ");
    } else {
      const val = currentValue as string;
      if (!val) return null;
      return flatNodes[val] ? t(flatNodes[val].label) : val;
    }
  };

  const handleSelect = (selectedKeys: string[]) => {
    let newValue: string | string[];

    if (multiple) {
      newValue = selectedKeys;
    } else {
      newValue = selectedKeys[0] || "";
      setIsOpen(false);
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

  const renderTreeNodes = (nodes: TreeSelectNode[]) => {
    return nodes.map((node) => (
      <TreeView.Item
        key={node.value}
        value={node.value}
        label={t(node.label)}
        icon={node.icon}
        disabled={node.disabled}
      >
        {node.children && renderTreeNodes(node.children)}
      </TreeView.Item>
    ));
  };

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

  return (
    <FieldTemplate
      label={label}
      error={error}
      required={required}
      layout={layout}
      labelId={labelId}
      errorId={errorId}
      className={className}
    >
      <div
        className="wim-tree-select"
        ref={containerRef}
        {...wrapperProps}
      >
        <InputBase
          disabled={disabled}
          allowClear={allowClear}
          hasValue={!!displayValue}
          onClear={handleClear}
          status={error ? "error" : "default"}
          rightIcons={[{ name: "ChevronDownIcon", rotated: isOpen }]}
          className={classNames(
            isOpen && "wim-tree-select__trigger--open",
          )}
        >
          <div
            id={triggerId}
            className={classNames(
              "wim-tree-select__trigger",
              disabled && "wim-tree-select__trigger--disabled",
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
            aria-label={label ? undefined : (ariaLabel || t(placeholder))}
            aria-describedby={errorId || ariaDescribedBy}
            aria-invalid={!!error}
            ref={triggerRef}
          >
            <div
              className={classNames(
                "wim-tree-select__value",
                !displayValue && "wim-tree-select__value--placeholder",
              )}
            >
              {displayValue || t(placeholder)}
            </div>
          </div>
        </InputBase>

        <Transition
          show={isOpen && !disabled}
          enter="fade-enter"
          enterFrom="fade-enter-from"
          enterTo="fade-enter-to"
          leave="fade-leave"
          leaveFrom="fade-leave-from"
          leaveTo="fade-leave-to"
          className="wim-tree-select__dropdown"
        >
          <div id={dropdownId}>
            <TreeView
              multiSelect={multiple}
              defaultSelectedValues={selectedKeys}
              defaultCheckedValues={multiple ? selectedKeys : []}
              onCheckedChange={handleSelect}
              onSelectedChange={handleSelect}
              checkable={multiple}
              searchable={searchable}
              defaultExpandedValues={defaultExpandedKeys}
            >
              {renderTreeNodes(treeData)}
            </TreeView>
          </div>
        </Transition>
      </div>
    </FieldTemplate>
  );
};
