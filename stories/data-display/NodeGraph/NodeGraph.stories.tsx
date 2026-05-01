import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { NodeGraph } from "@/components/data-display/NodeGraph/NodeGraph";
import { BackgroundVariant, type Node, type Edge } from "@xyflow/react";

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

const initialNodes: Node[] = [
  { id: "1", position: { x: 100, y: 100 }, data: { label: "Start" }, type: "input" },
  { id: "2", position: { x: 300, y: 100 }, data: { label: "Process" } },
  { id: "3", position: { x: 500, y: 100 }, data: { label: "End" }, type: "output" },
  { id: "4", position: { x: 300, y: 250 }, data: { label: "Error Handler" } },
];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", label: "trigger" },
  { id: "e2-3", source: "2", target: "3", label: "success" },
  { id: "e2-4", source: "2", target: "4", label: "error" },
];

export const Default: Story = {
  render: (args) => (
    <div style={{ width: "100%", height: "500px" }}>
      <NodeGraph {...args} nodes={initialNodes} edges={initialEdges} />
    </div>
  ),
  args: {
    showControls: true,
    showMiniMap: false,
  },
};

export const WithMiniMap: Story = {
  render: (args) => (
    <div style={{ width: "100%", height: "500px" }}>
      <NodeGraph {...args} nodes={initialNodes} edges={initialEdges} />
    </div>
  ),
  args: {
    showMiniMap: true,
    showControls: true,
  },
};

export const ReadOnly: Story = {
  render: (args) => (
    <div style={{ width: "100%", height: "500px" }}>
      <NodeGraph {...args} nodes={initialNodes} edges={initialEdges} />
    </div>
  ),
  args: {
    nodesDraggable: false,
    nodesConnectable: false,
    deleteKeyCode: null,
    showControls: true,
  },
};
