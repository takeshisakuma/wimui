import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { componentsNs } from "@/i18n/generated/components";
import { MinusIcon } from "@/icon";
import { Icon } from "../../media/Icon/Icon";
import { layoutTree, type TreeLayoutNode } from "./layoutTree";
import localStyles from "./tree-diagram.module.scss";

export type TreeDiagramNode = {
  /** Unique across the whole diagram (used for expansion, selection and focus). */
  value: string;
  /** Main line of the card, e.g. a person's name. */
  label: React.ReactNode;
  /** Second line of the card, e.g. a job title. */
  description?: React.ReactNode;
  /** Leading visual, e.g. an `Avatar`. */
  avatar?: React.ReactNode;
  children?: TreeDiagramNode[];
};

export type TreeDiagramNodeState = {
  depth: number;
  expanded: boolean;
  selected: boolean;
  /** Descendants hidden because this node is collapsed (0 when expanded). */
  hiddenCount: number;
};

export type TreeDiagramLabels = {
  /** Accessible name of the collapse / expand button. */
  expand?: (label: string) => string;
  collapse?: (label: string) => string;
};

export type TreeDiagramProps = Omit<React.ComponentPropsWithoutRef<"div">, "children" | "onSelect"> & {
  /** The roots of the tree. Several roots are laid out side by side. */
  nodes: TreeDiagramNode[];
  /**
   * `vertical` grows from top to bottom (an org chart). `horizontal` grows from left to
   * right, which suits deep trees and narrow containers.
   */
  orientation?: "vertical" | "horizontal";
  /** Expanded nodes (controlled). A node that is not listed shows only itself. */
  expandedValues?: string[];
  /** Expanded nodes on first render (uncontrolled). Defaults to every node that has children. */
  defaultExpandedValues?: string[];
  /** Called with the new list of expanded nodes when a node is expanded or collapsed. */
  onExpandedChange?: (values: string[]) => void;
  /** Selected node (controlled). Pass `null` for none. */
  selectedValue?: string | null;
  /**
   * Called when a node is chosen by click, Enter or Space. Nodes are only selectable when
   * this is given; without it the diagram is read-only.
   */
  onSelect?: (value: string) => void;
  /** Replaces the default card (label, description, avatar). The card frame stays. */
  renderNode?: (node: TreeDiagramNode, state: TreeDiagramNodeState) => React.ReactNode;
  /**
   * Card width in px. Every card has the same size so the layout is decided before
   * anything is measured; long text is truncated and read in full by assistive technology.
   */
  nodeWidth?: number;
  /** Card height in px. */
  nodeHeight?: number;
  /** Accessible names of the collapse / expand button, for when the built-in translations do not fit. */
  labels?: TreeDiagramLabels;
};

// レイアウトは描画の前に数で決める（中身を測って並べ直すと、描画のあとで位置が動く）。
// そのため寸法はトークン（CSS 変数）ではなく数で持つ。
const DEFAULT_NODE_WIDTH = 200; /* Exception: Structural Logic — 配置の計算に使う固定のカード幅（描画前に決める） */
const DEFAULT_NODE_HEIGHT = 64; /* Exception: Structural Logic — 配置の計算に使う固定のカード高さ */
const SIBLING_GAP = 24; /* Exception: Structural Logic — 兄弟の部分木の間隔（配置の計算の入力） */
const LEVEL_GAP = 48; /* Exception: Structural Logic — 親子の間隔。線の折れ目をこの中点に置く */

const collectParents = (nodes: TreeDiagramNode[], out: string[] = []): string[] => {
  for (const n of nodes) {
    if (n.children?.length) {
      out.push(n.value);
      collectParents(n.children, out);
    }
  }
  return out;
};

const indexNodes = (nodes: TreeDiagramNode[], map = new Map<string, TreeDiagramNode>()) => {
  for (const n of nodes) {
    map.set(n.value, n);
    if (n.children) indexNodes(n.children, map);
  }
  return map;
};

const textOf = (node: TreeDiagramNode) => (typeof node.label === "string" ? node.label : node.value);

/**
 * TreeDiagram — lays out a tree (an org chart, a site map, a taxonomy) from the data alone:
 * no coordinates are passed. Parents sit centred over their children and sibling subtrees
 * never overlap. Subtrees can be collapsed.
 *
 * Keyboard follows the WAI-ARIA tree pattern, the same as `TreeView`: Up / Down move through
 * the visible nodes in reading order, Right expands or moves to the first child, Left
 * collapses or moves to the parent, Home / End jump to the first / last node, and Enter /
 * Space select when `onSelect` is given.
 *
 * Only trees: every node has one parent. A family tree with two parents per person is a
 * different layout problem and is out of scope.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No (the diagram scrolls inside its own box when it is wider than it)
 */
export const TreeDiagram = React.forwardRef<HTMLDivElement, TreeDiagramProps>(
  (
    {
      nodes,
      orientation = "vertical",
      expandedValues: controlledExpanded,
      defaultExpandedValues,
      onExpandedChange,
      selectedValue,
      onSelect,
      renderNode,
      nodeWidth = DEFAULT_NODE_WIDTH,
      nodeHeight = DEFAULT_NODE_HEIGHT,
      labels,
      className,
      "aria-label": ariaLabel,
      ...props
    },
    ref,
  ) => {
    const { t } = useWimTranslation(componentsNs);
    const idBase = React.useId();
    const expandLabel = labels?.expand ?? ((l: string) => t("treediagram.expand", { label: l }));
    const collapseLabel = labels?.collapse ?? ((l: string) => t("treediagram.collapse", { label: l }));

    const [uncontrolledExpanded, setUncontrolledExpanded] = useState<string[]>(
      () => defaultExpandedValues ?? collectParents(nodes),
    );
    const expanded = controlledExpanded ?? uncontrolledExpanded;
    const expandedSet = useMemo(() => new Set(expanded), [expanded]);

    const setExpanded = useCallback(
      (next: string[]) => {
        if (controlledExpanded === undefined) setUncontrolledExpanded(next);
        onExpandedChange?.(next);
      },
      [controlledExpanded, onExpandedChange],
    );
    const toggle = useCallback(
      (value: string) =>
        setExpanded(expandedSet.has(value) ? expanded.filter((v) => v !== value) : [...expanded, value]),
      [expanded, expandedSet, setExpanded],
    );

    const byValue = useMemo(() => indexNodes(nodes), [nodes]);
    const layout = useMemo(
      () =>
        layoutTree(nodes, {
          nodeWidth,
          nodeHeight,
          siblingGap: SIBLING_GAP,
          levelGap: LEVEL_GAP,
          orientation,
          isExpanded: (v) => expandedSet.has(v),
        }),
      [nodes, nodeWidth, nodeHeight, orientation, expandedSet],
    );
    const laid = useMemo(() => new Map(layout.nodes.map((n) => [n.value, n])), [layout]);

    // roving tabindex: 見えているノードのうち 1 つだけが Tab で届く
    const [focused, setFocused] = useState<string | null>(null);
    const current = focused !== null && laid.has(focused) ? focused : null;
    const tabStop = current ?? selectedValue ?? layout.nodes[0]?.value ?? null;
    const itemRefs = useRef(new Map<string, HTMLDivElement>());
    const moveFocus = useRef(false);

    // 折りたたみで隠れたノードにフォーカスがあったら、見えている一番近い祖先へ移す
    useEffect(() => {
      if (focused === null || laid.has(focused)) return;
      let v: string | null | undefined = focused;
      const parentOf = (x: string) => {
        for (const [p, n] of byValue) if (n.children?.some((c) => c.value === x)) return p;
        return null;
      };
      while (v && !laid.has(v)) v = parentOf(v);
      setFocused(v ?? null);
      moveFocus.current = true;
    }, [focused, laid, byValue]);

    useEffect(() => {
      if (!moveFocus.current || current === null) return;
      moveFocus.current = false;
      const el = itemRefs.current.get(current);
      el?.focus();
      el?.scrollIntoView?.({ block: "nearest", inline: "nearest" });
    }, [current]);

    const go = (value: string | undefined) => {
      if (value === undefined) return;
      moveFocus.current = true;
      setFocused(value);
    };

    const onKeyDown = (e: React.KeyboardEvent, n: TreeLayoutNode, index: number) => {
      const list = layout.nodes;
      const isOpen = expandedSet.has(n.value);
      switch (e.key) {
        case "ArrowDown":
          go(list[index + 1]?.value);
          break;
        case "ArrowUp":
          go(list[index - 1]?.value);
          break;
        case "Home":
          go(list[0]?.value);
          break;
        case "End":
          go(list[list.length - 1]?.value);
          break;
        case "ArrowRight":
          if (n.hasChildren && !isOpen) toggle(n.value);
          else if (n.hasChildren) go(list[index + 1]?.value);
          break;
        case "ArrowLeft":
          if (n.hasChildren && isOpen) toggle(n.value);
          else if (n.parent !== null) go(n.parent);
          break;
        case "Enter":
        case " ":
          if (!onSelect) return;
          onSelect(n.value);
          break;
        default:
          return;
      }
      e.preventDefault();
    };

    const vertical = orientation === "vertical";
    const edgePath = (from: TreeLayoutNode, to: TreeLayoutNode) => {
      if (vertical) {
        const x1 = from.x + nodeWidth / 2;
        const y1 = from.y + nodeHeight;
        const x2 = to.x + nodeWidth / 2;
        const mid = y1 + LEVEL_GAP / 2;
        return `M${x1} ${y1}V${mid}H${x2}V${to.y}`;
      }
      const x1 = from.x + nodeWidth;
      const y1 = from.y + nodeHeight / 2;
      const y2 = to.y + nodeHeight / 2;
      const mid = x1 + LEVEL_GAP / 2;
      return `M${x1} ${y1}H${mid}V${y2}H${to.x}`;
    };

    return (
      <div
        ref={ref}
        role="tree"
        aria-label={ariaLabel ?? t("treediagram.aria")}
        aria-orientation={orientation}
        className={classNames(
          "wim-tree-diagram",
          localStyles.root,
          vertical ? localStyles.vertical : localStyles.horizontal,
          className,
        )}
        {...props}
      >
        <div className={localStyles.canvas} style={{ width: layout.width, height: layout.height }}>
          <svg
            className={localStyles.edges}
            width={layout.width}
            height={layout.height}
            aria-hidden="true"
            focusable="false"
          >
            {layout.edges.map((edge) => (
              <path key={`${edge.from}>${edge.to}`} d={edgePath(laid.get(edge.from)!, laid.get(edge.to)!)} />
            ))}
          </svg>
          {layout.nodes.map((n, index) => {
            const data = byValue.get(n.value)!;
            const isOpen = expandedSet.has(n.value);
            const selected = selectedValue === n.value;
            const state: TreeDiagramNodeState = { depth: n.depth, expanded: isOpen, selected, hiddenCount: n.hiddenCount };
            const text = textOf(data);
            return (
              <div
                key={n.value}
                ref={(el) => {
                  if (el) itemRefs.current.set(n.value, el);
                  else itemRefs.current.delete(n.value);
                }}
                role="treeitem"
                aria-level={n.depth + 1}
                aria-setsize={n.setSize}
                aria-posinset={n.posInSet}
                aria-expanded={n.hasChildren ? isOpen : undefined}
                aria-selected={onSelect ? selected : undefined}
                tabIndex={n.value === tabStop ? 0 : -1}
                data-value={n.value}
                // 名前はカードの中身だけ（名前と説明を別々に指し、間に空白を入れる）。開閉ボタンの名前は混ぜない
                aria-labelledby={
                  renderNode || !data.description
                    ? `${idBase}-${index}`
                    : `${idBase}-${index} ${idBase}-${index}-d`
                }
                className={classNames(localStyles.node, selected && localStyles.selected, onSelect && localStyles.selectable)}
                style={{ left: n.x, top: n.y, width: nodeWidth, height: nodeHeight }}
                title={text}
                onKeyDown={(e) => onKeyDown(e, n, index)}
                onFocus={() => setFocused(n.value)}
                onClick={onSelect ? () => onSelect(n.value) : undefined}
              >
                {renderNode ? (
                  <span id={`${idBase}-${index}`} className={localStyles.custom}>
                    {renderNode(data, state)}
                  </span>
                ) : (
                  <span className={localStyles.content}>
                    {data.avatar && <span className={localStyles.avatar}>{data.avatar}</span>}
                    <span className={localStyles.text}>
                      <span id={`${idBase}-${index}`} className={localStyles.label}>
                        {data.label}
                      </span>
                      {data.description && (
                        <span id={`${idBase}-${index}-d`} className={localStyles.description}>
                          {data.description}
                        </span>
                      )}
                    </span>
                  </span>
                )}
                {n.hasChildren && (
                  <button
                    type="button"
                    tabIndex={-1}
                    className={localStyles.toggle}
                    aria-label={isOpen ? collapseLabel(text) : expandLabel(text)}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggle(n.value);
                    }}
                  >
                    {isOpen ? <Icon component={MinusIcon} size="xs" /> : `+${n.hiddenCount}`}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);

TreeDiagram.displayName = "TreeDiagram";
