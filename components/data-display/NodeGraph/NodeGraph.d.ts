import { default as React } from '../../../../node_modules/react';
import { BackgroundVariant, Node, Edge, OnNodesChange, OnEdgesChange, OnConnect, NodeTypes, EdgeTypes, FitViewOptions, DefaultEdgeOptions } from '@xyflow/react';
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
export declare const NodeGraph: React.ForwardRefExoticComponent<NodeGraphProps & React.RefAttributes<HTMLDivElement>>;
