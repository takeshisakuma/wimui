import React, { useCallback, useMemo } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { NodeGraph } from "@/components/data-display/NodeGraph/NodeGraph";
import {
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  addEdge,
  type Node,
  type Edge,
  type OnConnect,
} from "@xyflow/react";

const meta: Meta<typeof NodeGraph> = {
  title: "Components/Visualization/NodeGraph",
  component: NodeGraph,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    showMiniMap: { control: "boolean" },
    showControls: { control: "boolean" },
    nodesDraggable: { control: "boolean" },
    nodesConnectable: { control: "boolean" },
    backgroundVariant: {
      control: "radio",
      options: [BackgroundVariant.Dots, BackgroundVariant.Lines, BackgroundVariant.Cross],
    },
  },
};

export default meta;
type Story = StoryObj<typeof NodeGraph>;

/**
 * Wrapper that manages React Flow state at the story level.
 * NodeGraph is a controlled component, so the story handles
 * nodes/edges state and the onConnect callback.
 */
function NodeGraphWithState({
  initialNodes,
  initialEdges,
  ...rest
}: { initialNodes: Node[]; initialEdges: Edge[] } & Omit<
  React.ComponentProps<typeof NodeGraph>,
  "nodes" | "edges" | "onNodesChange" | "onEdgesChange" | "onConnect"
>) {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect: OnConnect = useCallback(
    (params) => {
      setEdges((eds) => addEdge(params, eds));
    },
    [setEdges]
  );

  return (
    <NodeGraph
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      {...rest}
    />
  );
}

const useInitialData = () => {
  const { t, i18n } = useTranslation(ALL_NAMESPACES);
  const lang = i18n.language;

  const nodes: Node[] = useMemo(
    () => [
      { id: "1", position: { x: 100, y: 100 }, data: { label: t("story.nodegraph_label_start") }, type: "input" },
      { id: "2", position: { x: 300, y: 100 }, data: { label: t("story.nodegraph_label_process") } },
      { id: "3", position: { x: 500, y: 100 }, data: { label: t("story.nodegraph_label_end") }, type: "output" },
      { id: "4", position: { x: 300, y: 250 }, data: { label: t("story.nodegraph_label_error") } },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lang]
  );

  const edges: Edge[] = useMemo(
    () => [
      { id: "e1-2", source: "1", target: "2", label: t("story.nodegraph_edge_trigger") },
      { id: "e2-3", source: "2", target: "3", label: t("story.nodegraph_edge_success") },
      { id: "e2-4", source: "2", target: "4", label: t("story.nodegraph_edge_error") },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lang]
  );

  return { nodes, edges, lang };
};

export const Default: Story = {
  render: function Render(args) {
    const { nodes, edges, lang } = useInitialData();
    return (
      <div style={{ width: "100%", height: "500px" }}>
        <NodeGraphWithState
          key={lang}
          initialNodes={nodes}
          initialEdges={edges}
          {...args}
        />
      </div>
    );
  },
  args: {
    showControls: true,
    showMiniMap: false,
  },
};

export const WithMiniMap: Story = {
  render: function Render(args) {
    const { nodes, edges, lang } = useInitialData();
    return (
      <div style={{ width: "100%", height: "500px" }}>
        <NodeGraphWithState
          key={lang}
          initialNodes={nodes}
          initialEdges={edges}
          {...args}
        />
      </div>
    );
  },
  args: {
    showMiniMap: true,
    showControls: true,
  },
};

export const ReadOnly: Story = {
  render: function Render(args) {
    const { nodes, edges, lang } = useInitialData();
    return (
      <div style={{ width: "100%", height: "500px" }}>
        <NodeGraphWithState
          key={lang}
          initialNodes={nodes}
          initialEdges={edges}
          {...args}
        />
      </div>
    );
  },
  args: {
    nodesDraggable: false,
    nodesConnectable: false,
    deleteKeyCode: null,
    showControls: true,
  },
};
