import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { InteractiveGraph } from "@/components/ai/InteractiveGraph/InteractiveGraph";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";

const meta: Meta<typeof InteractiveGraph> = {
  title: "Components/AI/InteractiveGraph",
  component: InteractiveGraph,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default: StoryObj<typeof InteractiveGraph> = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);

    const graphNodes = [
      { id: "1", position: { x: 200, y: 0 }, data: { label: t("story.interactive_graph_node1") } },
      { id: "2", position: { x: 200, y: 150 }, data: { label: t("story.interactive_graph_node2") } },
      { id: "3", position: { x: 200, y: 300 }, data: { label: t("story.interactive_graph_node3") } },
    ];

    const graphEdges = [
      { id: "e1-2", source: "1", target: "2", animated: true },
      { id: "e2-3", source: "2", target: "3", animated: true },
    ];

    return (
      <div style={{ width: "100%", height: "500px", padding: "20px", boxSizing: "border-box" }}>
        <div style={{ width: "100%", height: "100%", border: "1px solid var(--wim-color-border)", borderRadius: "8px", overflow: "hidden" }}>
          <InteractiveGraph nodes={graphNodes} edges={graphEdges} height="100%" />
        </div>
      </div>
    );
  },
};
