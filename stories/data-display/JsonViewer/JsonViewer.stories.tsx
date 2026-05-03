import type { Meta, StoryObj } from "@storybook/react-vite";
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
