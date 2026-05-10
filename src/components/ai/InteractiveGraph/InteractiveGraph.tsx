import React, { useMemo } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  ReactFlowProvider,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import classNames from "classnames";
import styles from "./interactive-graph.module.scss";

export interface InteractiveGraphProps {
  /** Initial nodes */
  nodes: Node[];
  /** Initial edges */
  edges: Edge[];
  /** Height of the container */
  height?: string | number;
  /** Width of the container */
  width?: string | number;
  /** Additional CSS class */
  className?: string;
  /** Whether to show the background grid */
  showGrid?: boolean;
  /** Whether to show the minimap */
  showMiniMap?: boolean;
  /** Whether to show controls */
  showControls?: boolean;
}

/**
 * InteractiveGraph provides a canvas for visualizing node-based data.
 * Ideal for RAG knowledge bases, agent workflows, or state machines.
 * Built on @xyflow/react with WIM UI styling.
 */
const InteractiveGraphContent: React.FC<InteractiveGraphProps> = ({
  nodes,
  edges,
  height = 500,
  width = "100%",
  className,
  showGrid = true,
  showMiniMap = true,
  showControls = true,
}) => {
  const containerStyle = useMemo(
    () => ({
      height,
      width,
    }),
    [height, width],
  );

  return (
    <div
      className={classNames(styles.root, className)}
      style={containerStyle}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        colorMode="system" // Automatically matches WIM dark mode tokens if configured
      >
        {showGrid && <Background />}
        {showMiniMap && <MiniMap className={styles.minimap} />}
        {showControls && <Controls className={styles.controls} />}
      </ReactFlow>
    </div>
  );
};

export const InteractiveGraph: React.FC<InteractiveGraphProps> = (props) => (
  <ReactFlowProvider>
    <InteractiveGraphContent {...props} />
  </ReactFlowProvider>
);

InteractiveGraph.displayName = "InteractiveGraph";
