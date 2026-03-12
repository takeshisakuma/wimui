import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import classNames from "classnames";
import "./tree-view.scss";
import { Icon } from "../Icon/Icon";
import { BaseListItem } from "../_internal/BaseListItem";

type TreeViewContextType = {
  expandedValues: string[];
  selectedValues: string[];
  checkedValues: string[];
  focusedValue: string | null;
  toggleExpand: (value: string) => void;
  select: (value: string) => void;
  toggleCheck: (value: string) => void;
  setFocusedValue: (value: string | null) => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
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
  onSelectedChange?: (selected: string[]) => void;
  width?: string | number;
};

const TreeView = ({
  children,
  className,
  multiSelect = false,
  checkable = false,
  searchable = false,
  defaultExpandedValues = [],
  defaultSelectedValues = [],
  defaultCheckedValues = [],
  onCheckedChange,
  onSelectedChange,
  width,
}: TreeViewProps) => {
  const [expandedValues, setExpandedValues] = useState<string[]>(
    defaultExpandedValues,
  );
  const [selectedValues, setSelectedValues] = useState<string[]>(
    defaultSelectedValues,
  );
  const [checkedValues, setCheckedValues] =
    useState<string[]>(defaultCheckedValues);
  const [searchQuery, setSearchQuery] = useState("");
  const [focusedValue, setFocusedValue] = useState<string | null>(
    defaultSelectedValues[0] || null,
  );
  const containerRef = React.useRef<HTMLDivElement>(null);

  const toggleExpand = useCallback((value: string) => {
    setExpandedValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  }, []);

  const select = useCallback(
    (value: string) => {
      if (multiSelect) {
        setSelectedValues((prev) => {
          const newSelected = prev.includes(value)
            ? prev.filter((v) => v !== value)
            : [...prev, value];
          onSelectedChange?.(newSelected);
          return newSelected;
        });
      } else {
        const newSelected = [value];
        setSelectedValues(newSelected);
        onSelectedChange?.(newSelected);
      }
    },
    [multiSelect, onSelectedChange],
  );

  const toggleCheck = useCallback(
    (value: string) => {
      setCheckedValues((prev) => {
        const newChecked = prev.includes(value)
          ? prev.filter((v) => v !== value)
          : [...prev, value];
        onCheckedChange?.(newChecked);
        return newChecked;
      });
    },
    [onCheckedChange],
  );

  const contextValue = useMemo(
    () => ({
      expandedValues,
      selectedValues,
      checkedValues,
      focusedValue,
      toggleExpand,
      select,
      toggleCheck,
      setFocusedValue,
      containerRef,
      multiSelect,
      checkable,
      searchQuery,
    }),
    [
      expandedValues,
      selectedValues,
      checkedValues,
      focusedValue,
      toggleExpand,
      select,
      toggleCheck,
      multiSelect,
      checkable,
      searchQuery,
    ],
  );

  return (
    <TreeViewContext.Provider value={contextValue}>
      <div
        ref={containerRef}
        className={classNames("wim-tree-view", className)}
        role="tree"
        style={{ width, maxWidth: "100%" }}
        tabIndex={focusedValue ? -1 : 0}
        onFocus={(e) => {
          if (e.target === containerRef.current) {
            if (focusedValue) {
               const focusedItem = containerRef.current.querySelector(`[role="treeitem"][data-value="${focusedValue}"]`) as HTMLElement;
               focusedItem?.focus();
            } else {
              const firstItem = containerRef.current.querySelector(
                '[role="treeitem"]',
              ) as HTMLElement;
              firstItem?.focus();
            }
          }
        }}
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
    focusedValue,
    toggleExpand,
    select,
    toggleCheck,
    setFocusedValue,
    containerRef,
    multiSelect,
    checkable,
    searchQuery,
  } = useTreeView();

  const generatedId = React.useId();
  const checkboxId = `wim-tree-view-item-checkbox-${generatedId}`;
  const labelId = `wim-tree-view-item-label-${generatedId}`;

  const isExpanded = expandedValues.includes(value);
  const isSelected = selectedValues.includes(value);
  const isChecked = checkedValues.includes(value);
  const hasChildren = !!React.Children.count(children);

  // Search filtering
  const labelText = typeof label === "string" ? label : "";
  const matchesSearch =
    !searchQuery || labelText.toLowerCase().includes(searchQuery.toLowerCase());

  // Check if any children match the search
  const hasMatchingChildren = React.useMemo(() => {
    if (!searchQuery || !children) return false;

    const checkChildren = (childNodes: React.ReactNode): boolean => {
      return React.Children.toArray(childNodes).some((child) => {
        if (!React.isValidElement(child)) return false;
        if (child.type !== TreeViewItem) return false;

        const childProps = child.props as TreeViewItemProps;
        const childLabel = childProps.label;
        const childLabelText = typeof childLabel === "string" ? childLabel : "";
        if (childLabelText.toLowerCase().includes(searchQuery.toLowerCase())) {
          return true;
        }

        return childProps.children ? checkChildren(childProps.children) : false;
      });
    };

    return checkChildren(children);
  }, [children, searchQuery]);

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

  // Hide if doesn't match search and has no matching children
  if (searchQuery && !matchesSearch && !hasMatchingChildren) {
    return null;
  }

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (e.propertyName === "grid-template-rows" && !isExpanded) {
      setShouldRender(false);
      setIsAnimating(false);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFocusedValue(value);
    if (!disabled) {
      if (multiSelect && checkable) {
        toggleCheck(value);
      } else {
        select(value);
      }
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
    e.stopPropagation();

    const items = Array.from(
      containerRef.current?.querySelectorAll(
        '[role="treeitem"]:not([aria-disabled="true"])',
      ) || [],
    ) as HTMLElement[];
    const currentIndex = items.indexOf(e.currentTarget as HTMLElement);

    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        select(value);
        if (checkable) toggleCheck(value);
        break;
      case "ArrowDown":
        e.preventDefault();
        if (currentIndex < items.length - 1) {
          items[currentIndex + 1].focus();
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (currentIndex > 0) {
          items[currentIndex - 1].focus();
        }
        break;
      case "Home":
        e.preventDefault();
        if (items.length > 0) {
          items[0].focus();
        }
        break;
      case "End":
        e.preventDefault();
        if (items.length > 0) {
          items[items.length - 1].focus();
        }
        break;
      case "ArrowRight":
        if (hasChildren) {
          if (!isExpanded) {
            e.preventDefault();
            toggleExpand(value);
          } else {
            // Move to first child
            e.preventDefault();
            if (currentIndex < items.length - 1) {
              items[currentIndex + 1].focus();
            }
          }
        }
        break;
      case "ArrowLeft":
        if (hasChildren && isExpanded) {
          e.preventDefault();
          toggleExpand(value);
        } else {
          // Move to parent
          e.preventDefault();
          const parentItem = (e.currentTarget as HTMLElement).parentElement
            ?.closest('[role="treeitem"]') as HTMLElement;
          if (parentItem) {
            parentItem.focus();
          }
        }
        break;
    }
  };

  const handleFocus = (e: React.FocusEvent) => {
    e.stopPropagation();
    setFocusedValue(value);
  };

  return (
    <div
      className={classNames(
        "wim-tree-view-item",
        isSelected && "wim-tree-view-item--selected",
        disabled && "wim-tree-view-item--disabled",
        className,
      )}
      role="treeitem"
      aria-expanded={hasChildren ? isExpanded : undefined}
      aria-selected={isSelected}
      aria-disabled={disabled}
      data-value={value}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      tabIndex={focusedValue === value ? 0 : -1}
    >
      <BaseListItem
        id={labelId}
        className="wim-tree-view-item__label-container"
        active={isSelected}
        disabled={disabled}
        icon={
          <div className="wim-tree-view-item__icon-wrapper">
            {hasChildren && (
              <button
                type="button"
                className={classNames(
                  "wim-tree-view-item__expand-btn",
                  isExpanded && "wim-tree-view-item__expand-btn--expanded",
                )}
                onClick={handleToggleExpand}
                disabled={disabled}
                aria-label={isExpanded ? "Collapse" : "Expand"}
                tabIndex={-1}
              >
                <Icon name="ChevronRightIcon" size="small" />
              </button>
            )}
            {!hasChildren && <span className="wim-tree-view-item__spacer" />}

            {checkable && (
              <input
                id={checkboxId}
                type="checkbox"
                className="wim-tree-view-item__checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                disabled={disabled}
                onClick={(e) => e.stopPropagation()}
                aria-labelledby={labelId}
                tabIndex={-1}
              />
            )}

            {icon && <span className="wim-tree-view-item__icon">{icon}</span>}
          </div>
        }
      >
        {label}
      </BaseListItem>

      {hasChildren && shouldRender && (
        <div
          className={classNames(
            "wim-tree-view-item__children",
            isVisualExpanded && "wim-tree-view-item__children--expanded",
          )}
          onTransitionEnd={handleTransitionEnd}
          style={{
            gridTemplateRows: isVisualExpanded ? "1fr" : "0fr",
          }}
        >
          <div className="wim-tree-view-item__children-inner">{children}</div>
        </div>
      )}
    </div>
  );
};

const TreeViewComponent = TreeView as typeof TreeView & {
  Item: typeof TreeViewItem;
};

TreeViewComponent.Item = TreeViewItem;

export { TreeViewComponent as TreeView };
export default TreeViewComponent;
