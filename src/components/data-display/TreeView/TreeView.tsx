import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import classNames from "classnames";
import "./tree-view.scss";
import { Icon } from "../../media/Icon/Icon";
import { BaseListItem } from "../../_internal/BaseListItem";
import { useTreeViewItemExpansion } from "./useTreeViewItemExpansion";
import { VirtualList } from "../../data-display/VirtualList/VirtualList";

// ─── Types ────────────────────────────────────────────────────────────────────

type TreeViewContextType = {
  expandedValues: string[];
  selectedValues: string[];
  checkedValues: string[];
  indeterminateValues: string[];
  focusedValue: string | null;
  toggleExpand: (value: string) => void;
  select: (value: string) => void;
  toggleCheck: (value: string) => void;
  setFocusedValue: (value: string | null) => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
  multiSelect?: boolean;
  checkable?: boolean;
  checkStrategy: "cascade" | "exclusive";
  searchQuery?: string;
  labels?: TreeViewLabels;
};

const TreeViewContext = createContext<TreeViewContextType | null>(null);

const useTreeView = () => {
  const context = useContext(TreeViewContext);
  if (!context) {
    throw new Error("TreeView components must be used within a TreeView");
  }
  return context;
};

/**
 * データ駆動モードで使用するノード型。
 * TreeSelectNode と互換性があります。
 */
export type TreeViewNode = {
  value: string;
  label: React.ReactNode;
  children?: TreeViewNode[];
  disabled?: boolean;
  icon?: React.ReactNode;
};

/** データ駆動モードの内部フラットノード型 */
type FlatNode = TreeViewNode & {
  depth: number;
  hasChildren: boolean;
};

/** データ駆動モードのデフォルトアイテム高さ（px） */
const NODE_ITEM_HEIGHT = 40;

/** 仮想化を有効にするデフォルトのノード数しきい値 */
const DEFAULT_VIRTUAL_THRESHOLD = 100;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getLabelText(label: React.ReactNode): string {
  if (typeof label === "string") return label;
  if (typeof label === "number") return String(label);
  return "";
}

/**
 * ツリーデータを展開状態・検索クエリに基づいてフラット配列に変換する。
 */
function flattenVisible(
  nodes: TreeViewNode[],
  expandedValues: string[],
  searchQuery: string,
  depth = 0,
): FlatNode[] {
  const result: FlatNode[] = [];

  for (const node of nodes) {
    const labelText = getLabelText(node.label);
    const matchesSelf =
      !searchQuery ||
      labelText.toLowerCase().includes(searchQuery.toLowerCase());
    const hasMatchingDescendant =
      searchQuery && node.children
        ? hasMatchingChild(node.children, searchQuery)
        : false;

    if (searchQuery && !matchesSelf && !hasMatchingDescendant) continue;

    result.push({
      ...node,
      depth,
      hasChildren: !!(node.children && node.children.length > 0),
    });

    const isExpanded =
      expandedValues.includes(node.value) ||
      (!!searchQuery && hasMatchingDescendant);

    if (node.children && node.children.length > 0 && isExpanded) {
      result.push(
        ...flattenVisible(node.children, expandedValues, searchQuery, depth + 1),
      );
    }
  }

  return result;
}

function hasMatchingChild(nodes: TreeViewNode[], query: string): boolean {
  return nodes.some(
    (node) =>
      getLabelText(node.label).toLowerCase().includes(query.toLowerCase()) ||
      (node.children ? hasMatchingChild(node.children, query) : false),
  );
}

/** 指定ノードの全子孫 value を返す。見つからなければ null。 */
function getAllDescendantValues(
  nodes: TreeViewNode[],
  targetValue: string,
): string[] | null {
  for (const node of nodes) {
    if (node.value === targetValue) {
      const values: string[] = [];
      const collect = (ns: TreeViewNode[]) => {
        for (const n of ns) {
          values.push(n.value);
          if (n.children) collect(n.children);
        }
      };
      if (node.children) collect(node.children);
      return values;
    }
    if (node.children) {
      const found = getAllDescendantValues(node.children, targetValue);
      if (found !== null) return found;
    }
  }
  return null;
}

/** 指定ノードの全祖先 value を返す。見つからなければ null。 */
function getAllAncestorValues(
  nodes: TreeViewNode[],
  targetValue: string,
  ancestors: string[] = [],
): string[] | null {
  for (const node of nodes) {
    if (node.value === targetValue) return ancestors;
    if (node.children) {
      const found = getAllAncestorValues(node.children, targetValue, [
        ...ancestors,
        node.value,
      ]);
      if (found !== null) return found;
    }
  }
  return null;
}

type CascadeState = {
  indeterminateValues: string[];
  effectiveCheckedSet: Set<string>;
};

/**
 * cascade モード用: indeterminate なノードと、
 * 子孫から導出された親を含む「実効チェック済み」セットを計算する。
 */
function computeCascadeState(
  nodes: TreeViewNode[],
  checkedSet: Set<string>,
): CascadeState {
  const indet: string[] = [];
  const effective = new Set(checkedSet);

  function getState(
    node: TreeViewNode,
  ): "checked" | "indeterminate" | "unchecked" {
    if (!node.children?.length) {
      return effective.has(node.value) ? "checked" : "unchecked";
    }
    const childStates = node.children.map(getState);
    const allChecked = childStates.every((s) => s === "checked");
    const someActive = childStates.some((s) => s !== "unchecked");

    if (allChecked) {
      effective.add(node.value); // 子が全員 checked なら親も実効 checked
      return "checked";
    }
    if (someActive) {
      indet.push(node.value);
      return "indeterminate";
    }
    return "unchecked";
  }

  for (const node of nodes) getState(node);
  return { indeterminateValues: indet, effectiveCheckedSet: effective };
}

// ─── TreeView (主コンポーネント) ───────────────────────────────────────────────

export type TreeViewLabels = {
  searchPlaceholder?: string;
  searchAriaLabel?: string;
  expandLabel?: (label: string) => string;
  collapseLabel?: (label: string) => string;
};

export type TreeViewProps = {
  /** JSX ベースのアイテム（children API）。nodes を使わない場合に指定します。 */
  children?: React.ReactNode;
  /**
   * データ駆動モードのノード配列。
   * 指定した場合は children より優先され、大量データで自動的に仮想化されます。
   */
  nodes?: TreeViewNode[];
  className?: string;
  multiSelect?: boolean;
  checkable?: boolean;
  /**
   * チェック選択の動作モード（checkable かつ data-driven モード時に有効）。
   * - cascade: 親チェック→子全選択、子の一部→親は indeterminate（デフォルト）
   * - exclusive: 親子排他（親選択→子解除、子選択→親解除）
   */
  checkStrategy?: "cascade" | "exclusive";
  searchable?: boolean;
  defaultExpandedValues?: string[];
  defaultSelectedValues?: string[];
  defaultCheckedValues?: string[];
  onCheckedChange?: (checked: string[]) => void;
  onSelectedChange?: (selected: string[]) => void;
  width?: string | number;
  /**
   * データ駆動モードで仮想化を開始するノード数のしきい値。
   * デフォルトは 100。
   */
  virtualThreshold?: number;
  labels?: TreeViewLabels;
};

const TreeView = ({
  children,
  nodes,
  className,
  multiSelect = false,
  checkable = false,
  checkStrategy = "cascade",
  searchable = false,
  defaultExpandedValues = [],
  defaultSelectedValues = [],
  defaultCheckedValues = [],
  onCheckedChange,
  onSelectedChange,
  width,
  virtualThreshold = DEFAULT_VIRTUAL_THRESHOLD,
  labels = {},
}: TreeViewProps) => {
  const {
    searchPlaceholder = "Search...",
    searchAriaLabel = "Search tree items",
    expandLabel = (l: string) => `Expand ${l}`,
    collapseLabel = (l: string) => `Collapse ${l}`,
  } = labels;

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

  // ─── cascade 状態の導出 ────────────────────────────────────────────────────

  const { indeterminateValues, effectiveCheckedSet } = useMemo<
    CascadeState & { effectiveCheckedSet: Set<string> }
  >(() => {
    if (!nodes || checkStrategy !== "cascade") {
      return {
        indeterminateValues: [],
        effectiveCheckedSet: new Set(checkedValues),
      };
    }
    return computeCascadeState(nodes, new Set(checkedValues));
  }, [nodes, checkStrategy, checkedValues]);

  // ─── イベントハンドラ ──────────────────────────────────────────────────────

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
        let newChecked: string[];

        if (!nodes) {
          // children モード: 戦略なし、単純トグル
          newChecked = prev.includes(value)
            ? prev.filter((v) => v !== value)
            : [...prev, value];
          onCheckedChange?.(newChecked);
          return newChecked;
        }

        if (checkStrategy === "cascade") {
          const { indeterminateValues: currentIndet } = computeCascadeState(
            nodes,
            new Set(prev),
          );
          // indeterminate なノードをクリックした場合は「チェックする」方向に解決する
          const isEffectivelyChecked =
            prev.includes(value) && !currentIndet.includes(value);
          const descendants = getAllDescendantValues(nodes, value) ?? [];
          const related = [value, ...descendants];

          newChecked = isEffectivelyChecked
            ? prev.filter((v) => !related.includes(v))
            : [...prev, ...related.filter((v) => !prev.includes(v))];

          // onCheckedChange には indeterminate でない実効 checked のみを返す
          const { indeterminateValues: newIndet, effectiveCheckedSet: newEff } =
            computeCascadeState(nodes, new Set(newChecked));
          onCheckedChange?.(
            [...newEff].filter((v) => !newIndet.includes(v)),
          );
        } else {
          // exclusive: 選択時に祖先・子孫を全解除
          if (prev.includes(value)) {
            newChecked = prev.filter((v) => v !== value);
          } else {
            const ancestors = getAllAncestorValues(nodes, value) ?? [];
            const descendants = getAllDescendantValues(nodes, value) ?? [];
            const toRemove = new Set([...ancestors, ...descendants]);
            newChecked = [...prev.filter((v) => !toRemove.has(v)), value];
          }
          onCheckedChange?.(newChecked);
        }

        return newChecked;
      });
    },
    [checkStrategy, nodes, onCheckedChange],
  );

  // ─── Context ───────────────────────────────────────────────────────────────

  const contextValue = useMemo<TreeViewContextType>(
    () => ({
      expandedValues,
      selectedValues,
      checkedValues,
      indeterminateValues,
      focusedValue,
      toggleExpand,
      select,
      toggleCheck,
      setFocusedValue,
      containerRef,
      multiSelect,
      checkable,
      checkStrategy,
      searchQuery,
      labels: {
        expandLabel,
        collapseLabel,
      },
    }),
    [
      expandedValues,
      selectedValues,
      checkedValues,
      indeterminateValues,
      focusedValue,
      toggleExpand,
      select,
      toggleCheck,
      multiSelect,
      checkable,
      checkStrategy,
      searchQuery,
      expandLabel,
      collapseLabel,
    ],
  );

  // ─── データ駆動モード ──────────────────────────────────────────────────────

  const flatNodes = useMemo<FlatNode[]>(() => {
    if (!nodes) return [];
    return flattenVisible(nodes, expandedValues, searchQuery);
  }, [nodes, expandedValues, searchQuery]);

  const useVirtual = !!nodes && flatNodes.length >= virtualThreshold;

  const handleNodeKeyDown = useCallback(
    (e: React.KeyboardEvent, node: FlatNode, flatIndex: number) => {
      switch (e.key) {
        case "Enter":
        case " ":
          e.preventDefault();
          select(node.value);
          if (checkable) toggleCheck(node.value);
          break;
        case "ArrowDown":
          e.preventDefault();
          if (flatIndex < flatNodes.length - 1) {
            setFocusedValue(flatNodes[flatIndex + 1].value);
          }
          break;
        case "ArrowUp":
          e.preventDefault();
          if (flatIndex > 0) {
            setFocusedValue(flatNodes[flatIndex - 1].value);
          }
          break;
        case "Home":
          e.preventDefault();
          if (flatNodes.length > 0) setFocusedValue(flatNodes[0].value);
          break;
        case "End":
          e.preventDefault();
          if (flatNodes.length > 0)
            setFocusedValue(flatNodes[flatNodes.length - 1].value);
          break;
        case "ArrowRight":
          e.preventDefault();
          if (node.hasChildren && !expandedValues.includes(node.value)) {
            toggleExpand(node.value);
          } else if (node.hasChildren && flatIndex < flatNodes.length - 1) {
            setFocusedValue(flatNodes[flatIndex + 1].value);
          }
          break;
        case "ArrowLeft":
          e.preventDefault();
          if (node.hasChildren && expandedValues.includes(node.value)) {
            toggleExpand(node.value);
          } else {
            for (let i = flatIndex - 1; i >= 0; i--) {
              if (flatNodes[i].depth < node.depth) {
                setFocusedValue(flatNodes[i].value);
                break;
              }
            }
          }
          break;
      }
    },
    [
      flatNodes,
      expandedValues,
      select,
      checkable,
      toggleCheck,
      toggleExpand,
    ],
  );

  const renderFlatNode = useCallback(
    (node: FlatNode, index: number) => {
      const isSelected = selectedValues.includes(node.value);
      const isChecked = effectiveCheckedSet.has(node.value);
      const isIndeterminate = indeterminateValues.includes(node.value);
      const isExpanded = expandedValues.includes(node.value);
      const isFocused = focusedValue === node.value;

      const labelStr = getLabelText(node.label);

      return (
        <div
          className={classNames(
            "wim-tree-view-item",
            isSelected && "wim-tree-view-item--selected",
            node.disabled && "wim-tree-view-item--disabled",
          )}
          role="treeitem"
          aria-expanded={node.hasChildren ? isExpanded : undefined}
          aria-selected={isSelected}
          aria-disabled={node.disabled}
          aria-setsize={flatNodes.length}
          aria-posinset={index + 1}
          aria-level={node.depth + 1}
          data-value={node.value}
          tabIndex={isFocused ? 0 : -1}
          key={node.value}
          onClick={(e) => {
            e.stopPropagation();
            setFocusedValue(node.value);
            if (!node.disabled) {
              if (multiSelect && checkable) {
                toggleCheck(node.value);
              } else {
                select(node.value);
              }
            }
          }}
          onKeyDown={(e) => {
            e.stopPropagation();
            handleNodeKeyDown(e, node, index);
          }}
          onFocus={(e) => {
            e.stopPropagation();
            setFocusedValue(node.value);
          }}
          style={{ paddingLeft: node.depth * 20 }}
        >
          <BaseListItem
            className="wim-tree-view-item__label-container"
            active={isSelected}
            disabled={node.disabled}
            icon={
              <div className="wim-tree-view-item__icon-wrapper">
                {node.hasChildren ? (
                  <button
                    type="button"
                    className={classNames(
                      "wim-tree-view-item__expand-btn",
                      isExpanded && "wim-tree-view-item__expand-btn--expanded",
                    )}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!node.disabled) toggleExpand(node.value);
                    }}
                    disabled={node.disabled}
                    aria-label={
                      isExpanded
                        ? collapseLabel(labelStr)
                        : expandLabel(labelStr)
                    }
                    tabIndex={-1}
                  >
                    <Icon name="ChevronRightIcon" size="sm" />
                  </button>
                ) : (
                  <span className="wim-tree-view-item__spacer" />
                )}

                {checkable && (
                  <input
                    type="checkbox"
                    className="wim-tree-view-item__checkbox"
                    checked={isChecked && !isIndeterminate}
                    ref={(el) => {
                      if (el) el.indeterminate = isIndeterminate;
                    }}
                    onChange={(e) => {
                      e.stopPropagation();
                      if (!node.disabled) toggleCheck(node.value);
                    }}
                    disabled={node.disabled}
                    onClick={(e) => e.stopPropagation()}
                    aria-label={labelStr}
                    tabIndex={-1}
                  />
                )}

                {node.icon && (
                  <span className="wim-tree-view-item__icon">{node.icon}</span>
                )}
              </div>
            }
          >
            {node.label}
          </BaseListItem>
        </div>
      );
    },
    [
      selectedValues,
      effectiveCheckedSet,
      indeterminateValues,
      expandedValues,
      focusedValue,
      flatNodes.length,
      multiSelect,
      checkable,
      select,
      toggleCheck,
      toggleExpand,
      handleNodeKeyDown,
      expandLabel,
      collapseLabel,
    ],
  );

  // ─── レンダリング ──────────────────────────────────────────────────────────

  return (
    <TreeViewContext.Provider value={contextValue}>
      <div
        ref={containerRef}
        className={classNames("wim-tree-view", !!nodes && "wim-tree-view--data-driven", className)}
        role="tree"
        style={{ width, maxWidth: "100%" }}
        tabIndex={focusedValue ? -1 : 0}
        onFocus={(e) => {
          if (e.target === containerRef.current) {
            if (nodes) {
              if (focusedValue) {
                setFocusedValue(focusedValue);
              } else if (flatNodes.length > 0) {
                setFocusedValue(flatNodes[0].value);
              }
            } else {
              if (focusedValue) {
                const focusedItem = containerRef.current?.querySelector(
                  `[role="treeitem"][data-value="${focusedValue}"]`,
                ) as HTMLElement;
                focusedItem?.focus();
              } else {
                const firstItem = containerRef.current?.querySelector(
                  '[role="treeitem"]',
                ) as HTMLElement;
                firstItem?.focus();
              }
            }
          }
        }}
      >
        {searchable && (
          <div className="wim-tree-view__search">
            <input
              type="text"
              className="wim-tree-view__search-input"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label={searchAriaLabel}
            />
          </div>
        )}

        {nodes ? (
          // ─── データ駆動モード ────────────────────────────────────────────
          useVirtual ? (
            <VirtualList
              items={flatNodes}
              itemHeight={NODE_ITEM_HEIGHT}
              height={400}
              renderItem={renderFlatNode}
              itemRole="none"
              role="presentation"
            />
          ) : (
            flatNodes.map((node, index) => renderFlatNode(node, index))
          )
        ) : (
          // ─── children モード（既存 API） ────────────────────────────────
          children
        )}
      </div>
    </TreeViewContext.Provider>
  );
};

// ─── TreeViewItem (children モード用) ─────────────────────────────────────────

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
    indeterminateValues,
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

  const labelText = getLabelText(label);
  const matchesSearch =
    !searchQuery || labelText.toLowerCase().includes(searchQuery.toLowerCase());

  const hasMatchingChildren = React.useMemo(() => {
    if (!searchQuery || !children) return false;

    const checkChildren = (childNodes: React.ReactNode): boolean => {
      return React.Children.toArray(childNodes).some((child) => {
        if (!React.isValidElement(child)) return false;
        if (child.type !== TreeViewItem) return false;

        const childProps = child.props as TreeViewItemProps;
        const childLabel = childProps.label;
        const childLabelText = getLabelText(childLabel);
        if (childLabelText.toLowerCase().includes(searchQuery.toLowerCase())) {
          return true;
        }

        return childProps.children ? checkChildren(childProps.children) : false;
      });
    };

    return checkChildren(children);
  }, [children, searchQuery]);

  const isExpandedBySearch = !!searchQuery && hasMatchingChildren;
  const isExpanded = expandedValues.includes(value) || isExpandedBySearch;
  const isSelected = selectedValues.includes(value);
  const isChecked = checkedValues.includes(value);
  const isIndeterminate = indeterminateValues.includes(value);
  const hasChildren = !!React.Children.count(children);

  const { shouldRender, isVisualExpanded, handleTransitionEnd } =
    useTreeViewItemExpansion(isExpanded);

  if (searchQuery && !matchesSearch && !hasMatchingChildren) {
    return null;
  }

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
                aria-label={isExpanded ? `Collapse ${typeof label === "string" ? label : ""}` : `Expand ${typeof label === "string" ? label : ""}`}
                tabIndex={-1}
              >
                <Icon name="ChevronRightIcon" size="sm" />
              </button>
            )}
            {!hasChildren && <span className="wim-tree-view-item__spacer" />}

            {checkable && (
              <input
                id={checkboxId}
                type="checkbox"
                className="wim-tree-view-item__checkbox"
                checked={isChecked && !isIndeterminate}
                ref={(el) => {
                  if (el) el.indeterminate = isIndeterminate;
                }}
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
          <div className="wim-tree-view-item__children-inner" role="group">{children}</div>
        </div>
      )}
    </div>
  );
};

TreeView.displayName = "TreeView";
TreeViewItem.displayName = "TreeView.Item";

const TreeViewComponent = TreeView as typeof TreeView & {
  Item: typeof TreeViewItem;
};

TreeViewComponent.Item = TreeViewItem;

export { TreeViewComponent as TreeView };
export default TreeViewComponent;
