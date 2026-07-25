import React, { useEffect, useMemo, useState } from "react";
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
import { useWim } from "@/WimProvider";
import { getWimTheme, type WimTheme } from "@/theme";
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
 * Resolve xyflow colorMode from WIM: explicit `data-theme` wins (ThemeToggle /
 * Storybook), otherwise the provider theme (incl. `system`).
 */
function useFlowColorMode(): WimTheme {
  const { theme } = useWim();
  const [attrTheme, setAttrTheme] = useState<WimTheme>(() => getWimTheme());

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setAttrTheme(getWimTheme());
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, [theme]);

  return attrTheme !== "system" ? attrTheme : theme;
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
  const colorMode = useFlowColorMode();

  const containerStyle = useMemo(
    () => ({
      height,
      width,
    }),
    [height, width],
  );

  return (
    <div
      className={classNames("wim-interactive-graph", styles.root, className)}
      style={containerStyle}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        colorMode={colorMode}
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
