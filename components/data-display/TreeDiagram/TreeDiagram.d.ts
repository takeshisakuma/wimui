import { default as React } from '../../../../node_modules/react';
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
export declare const TreeDiagram: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "children" | "onSelect"> & {
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
} & React.RefAttributes<HTMLDivElement>>;
