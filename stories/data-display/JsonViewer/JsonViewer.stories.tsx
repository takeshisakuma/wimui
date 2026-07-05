import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { JsonViewer } from "@/components/data-display/JsonViewer/JsonViewer";

const meta: Meta<typeof JsonViewer> = {
  title: "Components/Data-display/JsonViewer",
  component: JsonViewer,
};

export default meta;
type Story = StoryObj<typeof JsonViewer>;

const mockData = {
  id: "wim-001",
  name: "WIM UI Component",
  version: 1.0,
  active: true,
  metadata: {
    author: "Antigravity",
    tags: ["react", "ui", "library"],
    config: {
      theme: "dark",
      compact: false,
      retries: 3
    }
  },
  items: [
    { id: 1, label: "First" },
    { id: 2, label: "Second", extra: null }
  ]
};

export const Default: Story = {
  args: {
    data: mockData,
    expandDepth: 2,
  },
};

export const FullyCollapsed: Story = {
  args: {
    data: mockData,
    expandDepth: 0,
  },
};

export const NoToolbar: Story = {
  args: {
    data: mockData,
    showToolbar: false,
  },
};

export const Editable: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [data, setData] = React.useState(mockData);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <JsonViewer {...args} data={data} editable onChange={(newData) => setData(newData as typeof mockData)} />
        <div style={{ padding: "10px", background: "var(--wim-color-surface-subtle)", borderRadius: "4px" }}>
          <h4 style={{ margin: "0 0 10px 0", fontSize: "12px", color: "var(--wim-color-text-secondary)" }}>{t("story.jsonviewer_parent_state")}</h4>
          <pre style={{ margin: 0, fontSize: "12px" }}>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </div>
    );
  },
};
