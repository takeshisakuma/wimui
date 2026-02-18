import React, { useState, useRef, useEffect, useId, useMemo } from "react";
import classNames from "classnames";
import { Transition } from "../Transition/Transition";
import { Icon } from "../Icon/Icon";
import { TreeView } from "../TreeView/TreeView";
import "./tree-select.scss";

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
    onChange?: (value: any) => void;
    placeholder?: string;
    label?: string;
    className?: string;
    disabled?: boolean;
    multiple?: boolean;
    searchable?: boolean;
    defaultExpandedKeys?: string[];
    id?: string;
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
    className,
    disabled = false,
    multiple = false,
    searchable = false,
    defaultExpandedKeys = [],
    id: customId,
    ...props
}: TreeSelectProps) => {
    const generatedId = useId();
    const id = customId || generatedId;
    const labelId = `wim-tree-select-label-${id}`;
    const triggerId = `wim-tree-select-trigger-${id}`;

    const [isOpen, setIsOpen] = useState(false);
    const [internalValue, setInternalValue] = useState<string | string[]>(multiple ? [] : "");
    const containerRef = useRef<HTMLDivElement>(null);

    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleToggle = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
        }
    };

    const flatNodes = useMemo(() => {
        const flat: Record<string, TreeSelectNode> = {};
        const traverse = (nodes: TreeSelectNode[]) => {
            nodes.forEach(node => {
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
            return vals.map(v => flatNodes[v]?.label || v).join(", ");
        } else {
            const val = currentValue as string;
            if (!val) return null;
            return flatNodes[val]?.label || val;
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

    const renderTreeNodes = (nodes: TreeSelectNode[]) => {
        return nodes.map(node => (
            <TreeView.Item
                key={node.value}
                value={node.value}
                label={node.label}
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

    return (
        <div
            className={classNames("wim-tree-select", className)}
            ref={containerRef}
            {...(props as any)}
        >
            {label && (
                <label id={labelId} htmlFor={triggerId} className="wim-tree-select__label">
                    {label}
                </label>
            )}
            <div
                id={triggerId}
                className={classNames(
                    "wim-tree-select__trigger",
                    isOpen && "wim-tree-select__trigger--open",
                    disabled && "wim-tree-select__trigger--disabled"
                )}
                onClick={handleToggle}
                tabIndex={disabled ? -1 : 0}
                role="combobox"
                aria-expanded={isOpen}
                aria-haspopup="tree"
                aria-disabled={disabled}
                aria-labelledby={label ? labelId : undefined}
            >
                <div className={classNames("wim-tree-select__value", !displayValue && "wim-tree-select__value--placeholder")}>
                    {displayValue || placeholder}
                </div>
                <div className="wim-tree-select__icon">
                    <Icon name="ChevronDownIcon" size="medium" />
                </div>
            </div>

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
                <TreeView
                    multiSelect={multiple}
                    defaultSelectedValues={selectedKeys}
                    onCheckedChange={multiple ? handleSelect : undefined}
                    onSelectedChange={!multiple ? handleSelect : undefined}
                    checkable={multiple}
                    searchable={searchable}
                    defaultExpandedValues={defaultExpandedKeys}
                >
                    {renderTreeNodes(treeData)}
                </TreeView>
            </Transition>
        </div>
    );
};
