import React, { createContext, useContext, useState, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import "./tree-view.scss";
import { Icon } from "../Icon/Icon";

type TreeViewContextType = {
    expandedValues: string[];
    selectedValues: string[];
    toggleExpand: (value: string) => void;
    select: (value: string) => void;
    multiSelect?: boolean;
};

const TreeViewContext = createContext<TreeViewContextType | null>(null);

const useTreeView = () => {
    const context = useContext(TreeViewContext);
    if (!context) {
        throw new Error("TreeView components must be used within a TreeView");
    }
    return context;
};

type TreeViewProps = {
    children: React.ReactNode;
    className?: string;
    multiSelect?: boolean;
    defaultExpandedValues?: string[];
    defaultSelectedValues?: string[];
    width?: string | number;
};

export const TreeView = ({
    children,
    className,
    multiSelect = false,
    defaultExpandedValues = [],
    defaultSelectedValues = [],
    width,
}: TreeViewProps) => {
    const [expandedValues, setExpandedValues] = useState<string[]>(defaultExpandedValues);
    const [selectedValues, setSelectedValues] = useState<string[]>(defaultSelectedValues);

    const toggleExpand = useCallback((value: string) => {
        setExpandedValues((prev) =>
            prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
        );
    }, []);

    const select = useCallback((value: string) => {
        if (multiSelect) {
            setSelectedValues((prev) =>
                prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
            );
        } else {
            setSelectedValues([value]);
        }
    }, [multiSelect]);

    const value = useMemo(() => ({
        expandedValues,
        selectedValues,
        toggleExpand,
        select,
        multiSelect
    }), [expandedValues, selectedValues, toggleExpand, select, multiSelect]);

    return (
        <TreeViewContext.Provider value={value}>
            <div
                className={["wim-tree-view", className].filter(Boolean).join(" ")}
                role="tree"
                style={{ width }}
            >
                {children}
            </div>
        </TreeViewContext.Provider>
    );
};

type TreeViewItemProps = {
    value: string;
    label: React.ReactNode;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
};

export const TreeViewItem = ({
    value,
    label,
    icon,
    children,
    className,
    disabled = false,
}: TreeViewItemProps) => {
    const { expandedValues, selectedValues, toggleExpand, select } = useTreeView();
    const isExpanded = expandedValues.includes(value);
    const isSelected = selectedValues.includes(value);
    const hasChildren = !!React.Children.count(children);

    const [isAnimating, setIsAnimating] = React.useState(false);
    const [shouldRender, setShouldRender] = React.useState(isExpanded);
    const [isVisualExpanded, setIsVisualExpanded] = React.useState(isExpanded);

    React.useEffect(() => {
        if (isExpanded) {
            setShouldRender(true);
            const timer = setTimeout(() => {
                setIsVisualExpanded(true);
            }, 10);
            return () => clearTimeout(timer);
        } else {
            setIsVisualExpanded(false);
            setIsAnimating(true);
        }
    }, [isExpanded]);

    const handleTransitionEnd = (e: React.TransitionEvent) => {
        if (e.propertyName === "grid-template-rows" && !isExpanded) {
            setShouldRender(false);
            setIsAnimating(false);
        }
    };

    const handleToggle = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (disabled) return;
        if (hasChildren) {
            toggleExpand(value);
        }
    };

    const handleSelect = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (disabled) return;
        select(value);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (disabled) return;
        switch (e.key) {
            case "Enter":
            case " ":
                e.preventDefault();
                select(value);
                break;
            case "ArrowRight":
                if (hasChildren && !isExpanded) {
                    toggleExpand(value);
                }
                break;
            case "ArrowLeft":
                if (hasChildren && isExpanded) {
                    toggleExpand(value);
                }
                break;
        }
    };

    return (
        <div
            className={[
                "wim-tree-item",
                isVisualExpanded ? "wim-tree-item--expanded" : "",
                isSelected ? "wim-tree-item--selected" : "",
                disabled ? "wim-tree-item--disabled" : "",
                className,
            ].filter(Boolean).join(" ")}
            role="treeitem"
            aria-expanded={hasChildren ? isExpanded : undefined}
            aria-selected={isSelected}
            tabIndex={disabled ? -1 : 0}
            onKeyDown={handleKeyDown}
        >
            <div className="wim-tree-item__content" onClick={handleSelect}>
                <span className="wim-tree-item__toggle" onClick={handleToggle}>
                    {hasChildren && (
                        <Icon
                            name="ChevronRightIcon"
                            size="small"
                            className={[
                                "wim-tree-item__chevron",
                                isVisualExpanded ? "wim-tree-item__chevron--open" : ""
                            ].join(" ")}
                        />
                    )}
                </span>
                {icon && <span className="wim-tree-item__icon">{icon}</span>}
                <span className="wim-tree-item__label">{label}</span>
            </div>
            {hasChildren && shouldRender && (
                <div
                    className={[
                        "wim-tree-item__children-wrapper",
                        isVisualExpanded ? "wim-tree-item__children-wrapper--open" : ""
                    ].join(" ")}
                    onTransitionEnd={handleTransitionEnd}
                >
                    <div className="wim-tree-item__children" role="group">
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};

TreeView.Item = TreeViewItem;

TreeView.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    multiSelect: PropTypes.bool,
    defaultExpandedValues: PropTypes.arrayOf(PropTypes.string),
    defaultSelectedValues: PropTypes.arrayOf(PropTypes.string),
};

TreeViewItem.propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired,
    icon: PropTypes.node,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
};
