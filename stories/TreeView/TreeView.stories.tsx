import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { TreeView } from "@/components/TreeView/TreeView";
import { Icon } from "@/components/Icon/Icon";

const meta: Meta<typeof TreeView> = {
  title: "Components/Data Structures/TreeView",
  component: TreeView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100dvh",
          padding: "20px",
          boxSizing: "border-box",
          width: "100%",
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        }}
      >
        <div style={{ width: "100%", maxWidth: "400px" }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TreeView>;

export const Default: Story = {
  args: {
    width: "100%",
  },
  render: (args) => (
    <TreeView {...args} defaultExpandedValues={["1", "2"]}>
      <TreeView.Item
        value="1"
        label="Documents"
        icon={<Icon name="CircleIcon" size="small" />}
      >
        <TreeView.Item
          value="1-1"
          label="Work"
          icon={<Icon name="SquareIcon" size="small" />}
        >
          <TreeView.Item
            value="1-1-1"
            label="Project A.docx"
            icon={<Icon name="CopyIcon" size="small" />}
          />
          <TreeView.Item
            value="1-1-2"
            label="Project B.docx"
            icon={<Icon name="CopyIcon" size="small" />}
          />
        </TreeView.Item>
        <TreeView.Item
          value="1-2"
          label="Personal"
          icon={<Icon name="SquareIcon" size="small" />}
        >
          <TreeView.Item
            value="1-2-1"
            label="Photos"
            icon={<Icon name="CircleIcon" size="small" />}
          />
        </TreeView.Item>
      </TreeView.Item>
      <TreeView.Item
        value="2"
        label="Music"
        icon={<Icon name="CircleIcon" size="small" />}
      >
        <TreeView.Item
          value="2-1"
          label="Rock"
          icon={<Icon name="SquareIcon" size="small" />}
        />
        <TreeView.Item
          value="2-2"
          label="Jazz"
          icon={<Icon name="SquareIcon" size="small" />}
        />
      </TreeView.Item>
      <TreeView.Item
        value="3"
        label="Videos"
        icon={<Icon name="CircleIcon" size="small" />}
      />
    </TreeView>
  ),
};

export const MultiSelect: Story = {
  render: () => (
    <TreeView multiSelect defaultExpandedValues={["1"]}>
      <TreeView.Item value="1" label="System">
        <TreeView.Item value="1-1" label="Logs" />
        <TreeView.Item value="1-2" label="Config" />
      </TreeView.Item>
      <TreeView.Item value="2" label="Users">
        <TreeView.Item value="2-1" label="Admin" />
        <TreeView.Item value="2-2" label="Guest" />
      </TreeView.Item>
    </TreeView>
  ),
};

export const DisabledItems: Story = {
  render: () => (
    <TreeView defaultExpandedValues={["1"]}>
      <TreeView.Item value="1" label="Root (Enabled)">
        <TreeView.Item value="1-1" label="Disabled Item" disabled />
        <TreeView.Item value="1-2" label="Enabled Item" />
      </TreeView.Item>
    </TreeView>
  ),
};

export const Overflow: Story = {
  render: () => (
    <TreeView width={250} defaultExpandedValues={["1"]}>
      <TreeView.Item
        value="1"
        label="Extremely Long Folder Name That Will Definitely Overflow and Trigger Ellipsis"
        icon={<Icon name="CircleIcon" size="small" />}
      >
        <TreeView.Item
          value="1-1"
          label="Very Long Sub-item Name That Should Also Show Truncation When the Parent Width is Constrained"
          icon={<Icon name="SquareIcon" size="small" />}
        >
          <TreeView.Item
            value="1-1-1"
            label="Even at deeper nesting levels, the text will be truncated appropriately to maintain the sidebar layout without breaking the container."
            icon={<Icon name="CopyIcon" size="small" />}
          />
        </TreeView.Item>
      </TreeView.Item>
      <TreeView.Item
        value="2"
        label="Regular Item"
        icon={<Icon name="CircleIcon" size="small" />}
      />
    </TreeView>
  ),
};
