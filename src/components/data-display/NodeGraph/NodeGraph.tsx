import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import classNames from "classnames";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  BackgroundVariant,
  type Node,
  type Edge,
  type OnNodesChange,
  type OnEdgesChange,
  type OnConnect,
  type NodeTypes,
  type EdgeTypes,
  type FitViewOptions,
  type DefaultEdgeOptions,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Icon } from "../../media/Icon/Icon";
import { PlusIcon, TrashIcon } from "@/icon";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import styles from "./node-graph.module.scss";

export type { Node as NodeGraphNode, Edge as NodeGraphEdge };

const DEFAULT_DELETE_KEYS = ["Backspace", "Delete"] as const;
/** New nodes sit to the right of the current rightmost node. Catalog stories use the same kind of layout numbers. */
const NEW_NODE_OFFSET_X = 180;
const NEW_NODE_ORIGIN = 80;

function nextNodeId(nodes: Node[]): string {
  let n = 1;
  const ids = new Set(nodes.map((node) => node.id));
  while (ids.has(`node-${n}`)) n += 1;
  return `node-${n}`;
}

function nextNodePosition(nodes: Node[]): { x: number; y: number } {
  if (nodes.length === 0) return { x: NEW_NODE_ORIGIN, y: NEW_NODE_ORIGIN };
  const maxX = Math.max(...nodes.map((node) => node.position.x));
  const y = nodes[nodes.length - 1]?.position.y ?? NEW_NODE_ORIGIN;
  return { x: maxX + NEW_NODE_OFFSET_X, y };
}

export interface NodeGraphProps {
  /** Controlled nodes */
  nodes: Node[];
  /** Controlled edges */
  edges: Edge[];
  /** Called when nodes change (position, selection, add, removal) */
  onNodesChange: OnNodesChange;
  /** Called when edges change */
  onEdgesChange: OnEdgesChange;
  /** Called when a new connection is made */
  onConnect?: OnConnect;
  /** Custom node type renderers */
  nodeTypes?: NodeTypes;
  /** Custom edge type renderers */
  edgeTypes?: EdgeTypes;
  /** Whether nodes can be dragged */
  nodesDraggable?: boolean;
  /** Whether nodes can be connected */
  nodesConnectable?: boolean;
  /**
   * Keys that delete the selection, and whether the on-canvas add/delete controls are shown.
   * `null` hides the controls and disables key deletion (read-only).
   * When omitted, both Backspace and Delete work.
   */
  deleteKeyCode?: string | null;
  /** Show the minimap panel */
  showMiniMap?: boolean;
  /** Show zoom/fit controls */
  showControls?: boolean;
  /** Background grid style */
  backgroundVariant?: BackgroundVariant;
  /** Fit view options on mount */
  fitView?: boolean;
  /** Options for the initial fit-view behavior */
  fitViewOptions?: FitViewOptions;
  /** Default options applied to new edges */
  defaultEdgeOptions?: DefaultEdgeOptions;
  /** Additional CSS class */
  className?: string;
  /** Accessible label for the graph region */
  "aria-label"?: string;
}

/**
 * NodeGraph — a controlled wrapper around React Flow.
 *
 * The consumer manages nodes/edges state via useNodesState / useEdgesState
 * hooks and passes them as props alongside their change handlers.
 *
 * Composition Contract:
 * - Managed by: App consumption; ReactFlow manages its own portal for edge labels
 * - Scroll lock: No
 */
export const NodeGraph = React.forwardRef<HTMLDivElement, NodeGraphProps>(
  (
    {
      nodes,
      edges,
      onNodesChange,
      onEdgesChange,
      onConnect,
      nodeTypes,
      edgeTypes,
      nodesDraggable = true,
      nodesConnectable = true,
      deleteKeyCode,
      showMiniMap = false,
      showControls = true,
      backgroundVariant = BackgroundVariant.Dots,
      fitView = true,
      fitViewOptions,
      defaultEdgeOptions,
      className,
      "aria-label": ariaLabel = "Node graph",
      ...props
    },
    ref,
  ) => {
    const { t } = useWimTranslation("common");
    const addLabel = t("nodeGraph.add_node");
    const nameLabel = t("nodeGraph.node_name");
    const namePlaceholder = t("nodeGraph.new_node");
    const deleteLabel = t("a11y.delete");
    const resolvedDeleteKey =
      deleteKeyCode === undefined ? [...DEFAULT_DELETE_KEYS] : deleteKeyCode;
    const canEdit = resolvedDeleteKey != null;
    const [naming, setNaming] = useState(false);
    const [draft, setDraft] = useState("");
    const nameRef = useRef<HTMLInputElement>(null);
    const selectedNodes = useMemo(() => nodes.filter((node) => node.selected), [nodes]);
    const selectedEdges = useMemo(() => edges.filter((edge) => edge.selected), [edges]);
    const hasSelection = selectedNodes.length > 0 || selectedEdges.length > 0;
    const name = draft.trim();
    const shortcut =
      resolvedDeleteKey == null
        ? undefined
        : Array.isArray(resolvedDeleteKey)
          ? resolvedDeleteKey.join(" ")
          : resolvedDeleteKey;

    useEffect(() => {
      if (naming) nameRef.current?.focus();
    }, [naming]);

    const commitAdd = useCallback(() => {
      if (!canEdit || !name) return;
      onNodesChange([
        {
          type: "add",
          item: {
            id: nextNodeId(nodes),
            position: nextNodePosition(nodes),
            data: { label: name },
          },
        },
      ]);
      setNaming(false);
      setDraft("");
    }, [canEdit, name, nodes, onNodesChange]);

    const handleAdd = useCallback(() => {
      if (!canEdit) return;
      if (!naming) {
        setNaming(true);
        return;
      }
      commitAdd();
    }, [canEdit, naming, commitAdd]);

    const handleNameKey = useCallback(
      (event: React.KeyboardEvent<HTMLInputElement>) => {
        event.stopPropagation();
        if (event.key === "Enter") {
          event.preventDefault();
          commitAdd();
        }
        if (event.key === "Escape") {
          event.preventDefault();
          setNaming(false);
          setDraft("");
        }
      },
      [commitAdd],
    );

    const handleDelete = useCallback(() => {
      if (!canEdit || !hasSelection) return;
      const selectedNodeIds = new Set(selectedNodes.map((node) => node.id));
      const edgeIds = new Set(selectedEdges.map((edge) => edge.id));
      for (const edge of edges) {
        if (selectedNodeIds.has(edge.source) || selectedNodeIds.has(edge.target)) {
          edgeIds.add(edge.id);
        }
      }
      if (edgeIds.size > 0) {
        onEdgesChange([...edgeIds].map((id) => ({ type: "remove", id })));
      }
      if (selectedNodeIds.size > 0) {
        onNodesChange([...selectedNodeIds].map((id) => ({ type: "remove", id })));
      }
    }, [canEdit, hasSelection, selectedNodes, selectedEdges, edges, onEdgesChange, onNodesChange]);

    const stopPane = useCallback((event: React.PointerEvent | React.MouseEvent) => {
      event.stopPropagation();
    }, []);

    return (
      <div
        ref={ref}
        className={classNames("wim-node-graph", styles.root, className)}
        role="region"
        aria-label={ariaLabel}
        {...props}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          nodesDraggable={nodesDraggable}
          nodesConnectable={nodesConnectable}
          deleteKeyCode={resolvedDeleteKey}
          fitView={fitView}
          fitViewOptions={fitViewOptions}
          defaultEdgeOptions={defaultEdgeOptions}
          className={styles.flow}
        >
          <Background variant={backgroundVariant} className={styles.background} />
          {showControls && <Controls className={styles.controls} />}
          {showMiniMap && <MiniMap className={styles.miniMap} />}
        </ReactFlow>
        {canEdit && (
          <div className={styles.tools}>
            {naming && (
              <input
                ref={nameRef}
                className={classNames("nodrag", "nopan", styles.name)}
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={handleNameKey}
                onPointerDown={stopPane}
                onMouseDown={stopPane}
                aria-label={nameLabel}
                placeholder={namePlaceholder}
              />
            )}
            <div className={styles.toolRow}>
              <button
                type="button"
                className={classNames("nodrag", "nopan", styles.tool)}
                disabled={naming && !name}
                onClick={handleAdd}
                onPointerDown={stopPane}
                onMouseDown={stopPane}
                aria-label={addLabel}
                aria-expanded={naming}
              >
                <Icon component={PlusIcon} size="sm" />
                {addLabel}
              </button>
              <button
                type="button"
                className={classNames("nodrag", "nopan", styles.tool)}
                disabled={!hasSelection}
                onClick={handleDelete}
                onPointerDown={stopPane}
                onMouseDown={stopPane}
                aria-label={deleteLabel}
                aria-keyshortcuts={shortcut}
              >
                <Icon component={TrashIcon} size="sm" />
                {deleteLabel}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  },
);

NodeGraph.displayName = "NodeGraph";
