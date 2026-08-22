import { default as React } from '../../../../node_modules/react';
import { Node, Edge } from '@xyflow/react';
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
export declare const InteractiveGraph: React.FC<InteractiveGraphProps>;
