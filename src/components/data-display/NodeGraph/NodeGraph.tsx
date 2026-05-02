import React from "react";
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
import styles from "./node-graph.module.scss";

export type { Node as NodeGraphNode, Edge as NodeGraphEdge };

export interface NodeGraphProps {
  /** Controlled nodes */
  nodes: Node[];
  /** Controlled edges */
  edges: Edge[];
  /** Called when nodes change (position, selection, removal) */
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
  ) => (
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
  )
);

NodeGraph.displayName = "NodeGraph";
