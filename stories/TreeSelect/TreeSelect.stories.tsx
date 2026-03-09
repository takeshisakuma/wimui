import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
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

const defaultTreeData: TreeSelectNode[] = [
  {
    label: "story_treeselect_design",
    value: "design",
    icon: <Icon name="EditIcon" size="small" />,
    children: [
      {
        label: "story_treeselect_colors",
        value: "colors",
        children: [
          { label: "story_treeselect_primary", value: "primary" },
          { label: "story_treeselect_secondary", value: "secondary" },
        ],
      },
      {
        label: "story_treeselect_typography",
        value: "typography",
      },
    ],
  },
  {
    label: "story_treeselect_components",
    value: "components",
    icon: <Icon name="ProjectIcon" size="small" />,
    children: [
      { label: "story_treeselect_button", value: "button" },
      { label: "story_treeselect_input", value: "input" },
    ],
  },
];

const translateTreeData = (
  nodes: TreeSelectNode[],
  t: any,
): TreeSelectNode[] => {
  return nodes.map((node) => ({
    ...node,
    label: t(node.label),
    children: node.children ? translateTreeData(node.children, t) : undefined,
  }));
};

export const Default: Story = {
  render: (args) => {
    const { t } = useTranslation("docs");
    const treeData = translateTreeData(defaultTreeData, t);
    return (
      <TreeSelect
        {...args}
        treeData={treeData}
        placeholder={t("story_treeselect_placeholder")}
      />
    );
  },
};

export const Multiple: Story = {
  render: (args) => {
    const { t } = useTranslation("docs");
    const treeData = translateTreeData(defaultTreeData, t);
    return (
      <TreeSelect
        {...args}
        treeData={treeData}
        multiple
        placeholder={t("story_treeselect_placeholder")}
      />
    );
  },
};

export const Searchable: Story = {
  render: (args) => {
    const { t } = useTranslation("docs");
    const treeData = translateTreeData(defaultTreeData, t);
    return (
      <TreeSelect
        {...args}
        treeData={treeData}
        searchable
        placeholder={t("story_treeselect_placeholder")}
      />
    );
  },
};

export const DefaultExpanded: Story = {
  render: (args) => {
    const { t } = useTranslation("docs");
    const treeData = translateTreeData(defaultTreeData, t);
    return (
      <TreeSelect
        {...args}
        treeData={treeData}
        defaultExpandedKeys={["design", "colors"]}
        placeholder={t("story_treeselect_placeholder")}
      />
    );
  },
};

export const Disabled: Story = {
  render: (args) => {
    const { t } = useTranslation("docs");
    const treeData = translateTreeData(defaultTreeData, t);
    return (
      <TreeSelect
        {...args}
        treeData={treeData}
        disabled
        placeholder={t("story_treeselect_placeholder")}
      />
    );
  },
};
