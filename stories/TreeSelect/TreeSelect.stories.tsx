import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  TreeSelect,
  TreeSelectNode,
} from "../../src/components/TreeSelect/TreeSelect";
import { Icon } from "../../src/components/Icon/Icon";

const meta: Meta<typeof TreeSelect> = {
  title: "Components/Advanced Inputs/TreeSelect",
  component: TreeSelect,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof TreeSelect>;

const treeData: TreeSelectNode[] = [
  {
    label: "Design",
    value: "design",
    icon: <Icon name="EditIcon" size="small" />,
    children: [
      {
        label: "Colors",
        value: "colors",
        children: [
          { label: "Primary", value: "primary" },
          { label: "Secondary", value: "secondary" },
        ],
      },
      {
        label: "Typography",
        value: "typography",
      },
    ],
  },
  {
    label: "Components",
    value: "components",
    icon: <Icon name="ProjectIcon" size="small" />,
    children: [
      { label: "Button", value: "button" },
      { label: "Input", value: "input" },
    ],
  },
];

export const Default: Story = {
  args: {
    treeData,
    placeholder: "Please select",
  },
};

export const Multiple: Story = {
  args: {
    treeData,
    multiple: true,
    placeholder: "Select multiple",
  },
};

export const Searchable: Story = {
  args: {
    treeData,
    searchable: true,
    placeholder: "Search nodes",
  },
};

export const DefaultExpanded: Story = {
  args: {
    treeData,
    defaultExpandedKeys: ["design", "colors"],
    placeholder: "Expanded by default",
  },
};

export const Disabled: Story = {
  args: {
    treeData,
    disabled: true,
    placeholder: "Disabled",
  },
};
