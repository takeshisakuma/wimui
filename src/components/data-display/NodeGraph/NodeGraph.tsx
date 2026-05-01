import React, { useCallback } from "react";
import classNames from "classnames";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  BackgroundVariant,
  type Node,
  type Edge,
  type OnConnect,
  type NodeTypes,
  type EdgeTypes,
  type FitViewOptions,
  type DefaultEdgeOptions,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import styles from "./node-graph.module.scss";

export type { Node as NodeGraphNode, Edge as NodeGraphEdge };

export interface NodeGraphProps {
  /** Initial nodes (uncontrolled) or controlled nodes */
  nodes?: Node[];
  /** Initial edges (uncontrolled) or controlled edges */
  edges?: Edge[];
  /** Custom node type renderers */
  nodeTypes?: NodeTypes;
  /** Custom edge type renderers */
  edgeTypes?: EdgeTypes;
  /** Called when nodes change (position, selection, removal) */
  onNodesChange?: Parameters<typeof useNodesState>[0] extends Node[]
    ? (nodes: Node[]) => void
    : never;
  /** Called when edges change */
  onEdgesChange?: Parameters<typeof useEdgesState>[0] extends Edge[]
    ? (edges: Edge[]) => void
    : never;
  /** Called when a new connection is made */
  onConnect?: OnConnect;
  /** Whether nodes can be dragged */
  nodesDraggable?: boolean;
  /** Whether nodes can be connected */
  nodesConnectable?: boolean;
  /** Whether elements can be deleted with Backspace/Delete */
  deleteKeyCode?: string | null;
  /** Show the minimap panel */
  showMiniMap?: boolean;
  /** Show zoom/fit controls */
  showControls?: boolean;
  /** Background grid style */
  backgroundVariant?: BackgroundVariant;
  /** Fit view options on mount */
  fitView?: boolean;
  fitViewOptions?: FitViewOptions;
  /** Default options applied to new edges */
  defaultEdgeOptions?: DefaultEdgeOptions;
  /** Additional CSS class */
  className?: string;
  /** Accessible label for the graph region */
  "aria-label"?: string;
}

/**
 * NodeGraph wraps React Flow to render interactive node-based diagrams.
 *
 * Composition Contract:
 * - Managed by: App consumption; ReactFlow manages its own portal for edge labels
 * - Scroll lock: No
 */
export const NodeGraph = React.forwardRef<HTMLDivElement, NodeGraphProps>(
  (
    {
      nodes: initialNodes = [],
      edges: initialEdges = [],
      nodeTypes,
      edgeTypes,
      onConnect: onConnectProp,
      nodesDraggable = true,
      nodesConnectable = true,
      deleteKeyCode = "Backspace",
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
    ref
  ) => {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect: OnConnect = useCallback(
      (params) => {
        setEdges((eds) => addEdge(params, eds));
        onConnectProp?.(params);
      },
      [setEdges, onConnectProp]
    );

    return (
      <div
        ref={ref}
        className={classNames(styles.root, className)}
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
          deleteKeyCode={deleteKeyCode}
          fitView={fitView}
          fitViewOptions={fitViewOptions}
          defaultEdgeOptions={defaultEdgeOptions}
          className={styles.flow}
        >
          <Background variant={backgroundVariant} className={styles.background} />
          {showControls && <Controls className={styles.controls} />}
          {showMiniMap && <MiniMap className={styles.miniMap} />}
        </ReactFlow>
      </div>
    );
  }
);

NodeGraph.displayName = "NodeGraph";
