import React, { createContext, useContext, useState, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import "./tree-view.scss";
import { Icon } from "../Icon/Icon";

type TreeViewContextType = {
    expandedValues: string[];
    selectedValues: string[];
    checkedValues: string[];
    toggleExpand: (value: string) => void;
    select: (value: string) => void;
    toggleCheck: (value: string) => void;
    multiSelect?: boolean;
    checkable?: boolean;
    searchQuery?: string;
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
    checkable?: boolean;
    searchable?: boolean;
    defaultExpandedValues?: string[];
    defaultSelectedValues?: string[];
    defaultCheckedValues?: string[];
    onCheckedChange?: (checked: string[]) => void;
    width?: string | number;
};

export const TreeView = ({
    children,
    className,
    multiSelect = false,
    checkable = false,
    searchable = false,
    defaultExpandedValues = [],
    defaultSelectedValues = [],
    defaultCheckedValues = [],
    onCheckedChange,
    width,
}: TreeViewProps) => {
    const [expandedValues, setExpandedValues] = useState<string[]>(defaultExpandedValues);
    const [selectedValues, setSelectedValues] = useState<string[]>(defaultSelectedValues);
    const [checkedValues, setCheckedValues] = useState<string[]>(defaultCheckedValues);
    const [searchQuery, setSearchQuery] = useState("");

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

    const toggleCheck = useCallback((value: string) => {
        setCheckedValues((prev) => {
            const newChecked = prev.includes(value)
                ? prev.filter((v) => v !== value)
                : [...prev, value];
            onCheckedChange?.(newChecked);
            return newChecked;
        });
    }, [onCheckedChange]);

    const contextValue = useMemo(() => ({
        expandedValues,
        selectedValues,
        checkedValues,
        toggleExpand,
        select,
        toggleCheck,
        multiSelect,
        checkable,
        searchQuery,
    }), [expandedValues, selectedValues, checkedValues, toggleExpand, select, toggleCheck, multiSelect, checkable, searchQuery]);

    return (
        <TreeViewContext.Provider value={contextValue}>
            <div
                className={["wim-tree-view", className].filter(Boolean).join(" ")}
                role="tree"
                style={{ width }}
            >
                {searchable && (
                    <div className="wim-tree-view__search">
                        <input
                            type="text"
                            className="wim-tree-view__search-input"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                )}
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
    const {
        expandedValues,
        selectedValues,
        checkedValues,
        toggleExpand,
        select,
        toggleCheck,
        checkable,
        searchQuery
    } = useTreeView();

    const isExpanded = expandedValues.includes(value);
    const isSelected = selectedValues.includes(value);
    const isChecked = checkedValues.includes(value);
    const hasChildren = !!React.Children.count(children);

    // Search filtering
    const labelText = typeof label === 'string' ? label : '';
    const matchesSearch = !searchQuery || labelText.toLowerCase().includes(searchQuery.toLowerCase());

    // Check if any children match the search
    const hasMatchingChildren = React.useMemo(() => {
        if (!searchQuery || !children) return false;

        const checkChildren = (childNodes: React.ReactNode): boolean => {
            return React.Children.toArray(childNodes).some((child) => {
                if (!React.isValidElement(child)) return false;
                if (child.type !== TreeViewItem) return false;

                const childProps = child.props as TreeViewItemProps;
                const childLabel = childProps.label;
                const childLabelText = typeof childLabel === 'string' ? childLabel : '';
                if (childLabelText.toLowerCase().includes(searchQuery.toLowerCase())) {
                    return true;
                }

                return childProps.children ? checkChildren(childProps.children) : false;
            });
        };

        return checkChildren(children);
    }, [children, searchQuery]);

    // Hide if doesn't match search and has no matching children
    if (searchQuery && !matchesSearch && !hasMatchingChildren) {
        return null;
    }

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

    const handleClick = () => {
        if (!disabled) {
            select(value);
        }
    };

    const handleToggleExpand = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!disabled && hasChildren) {
            toggleExpand(value);
        }
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        if (!disabled) {
            toggleCheck(value);
        }
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
                    e.preventDefault();
                    toggleExpand(value);
                }
                break;
            case "ArrowLeft":
                if (hasChildren && isExpanded) {
                    e.preventDefault();
                    toggleExpand(value);
                }
                break;
        }
    };

    return (
        <div
            className={[
                "wim-tree-view-item",
                isSelected && "wim-tree-view-item--selected",
                disabled && "wim-tree-view-item--disabled",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            role="treeitem"
            aria-selected={isSelected}
            aria-expanded={hasChildren ? isExpanded : undefined}
            aria-disabled={disabled}
        >
            <div
                className="wim-tree-view-item__label-container"
                onClick={handleClick}
                onKeyDown={handleKeyDown}
                tabIndex={disabled ? -1 : 0}
            >
                {hasChildren && (
                    <button
                        type="button"
                        className={`wim-tree-view-item__expand-btn ${isExpanded ? "wim-tree-view-item__expand-btn--expanded" : ""}`}
                        onClick={handleToggleExpand}
                        disabled={disabled}
                        aria-label={isExpanded ? "Collapse" : "Expand"}
                    >
                        <Icon name="ChevronRightIcon" size="small" />
                    </button>
                )}
                {!hasChildren && <span className="wim-tree-view-item__spacer" />}

                {checkable && (
                    <input
                        type="checkbox"
                        className="wim-tree-view-item__checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        disabled={disabled}
                        onClick={(e) => e.stopPropagation()}
                    />
                )}

                {icon && <span className="wim-tree-view-item__icon">{icon}</span>}
                <span className="wim-tree-view-item__label">{label}</span>
            </div>

            {hasChildren && shouldRender && (
                <div
                    className={`wim-tree-view-item__children ${isVisualExpanded ? "wim-tree-view-item__children--expanded" : ""}`}
                    onTransitionEnd={handleTransitionEnd}
                    style={{
                        gridTemplateRows: isVisualExpanded ? "1fr" : "0fr",
                    }}
                >
                    <div className="wim-tree-view-item__children-inner">
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
