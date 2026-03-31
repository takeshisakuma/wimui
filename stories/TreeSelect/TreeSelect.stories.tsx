import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import {
  TreeSelect,
  TreeSelectNode,
} from "../../src/components/form/TreeSelect/TreeSelect";
import { Icon } from "../../src/components/media/Icon/Icon";

const meta: Meta<typeof TreeSelect> = {
  title: "Components/Advanced Inputs/TreeSelect",
  component: TreeSelect,
};

export default meta;
type Story = StoryObj<typeof TreeSelect>;

const defaultTreeData: TreeSelectNode[] = [
  {
    label: "story.treeselect_design",
    value: "design",
    icon: <Icon name="EditIcon" size="sm" />,
    children: [
      {
        label: "story.treeselect_colors",
        value: "colors",
        children: [
          { label: "story.treeselect_primary", value: "primary" },
          { label: "story.treeselect_secondary", value: "secondary" },
        ],
      },
      {
        label: "story.treeselect_typography",
        value: "typography",
      },
    ],
  },
  {
    label: "story.treeselect_components",
    value: "components",
    icon: <Icon name="ProjectIcon" size="sm" />,
    children: [
      { label: "story.treeselect_button", value: "button" },
      { label: "story.treeselect_input", value: "input" },
    ],
  },
];

const translateTreeData = (
  nodes: TreeSelectNode[],
  t: (key: string) => string,
): TreeSelectNode[] => {
  return nodes.map((node) => ({
    ...node,
    label: t(node.label),
    children: node.children ? translateTreeData(node.children, t) : undefined,
  }));
};

export const Default: Story = {
  render: (args: any) => {
    const { t } = useTranslation("docs");
    const treeData = translateTreeData(defaultTreeData, t);
    return (
      <TreeSelect
        {...args}
        treeData={treeData}
        placeholder={t("story.treeselect_placeholder")}
      />
    );
  },
};

/**
 * cascade（デフォルト）: 親チェックで子全選択、子の一部で親が indeterminate。
 * 「Design」を選ぶと Colors・Typography・Primary・Secondary が全て選択される。
 */
export const CascadeMultiple: Story = {
  render: (args: any) => {
    const { t } = useTranslation("docs");
    const treeData = translateTreeData(defaultTreeData, t);
    return (
      <TreeSelect
        {...args}
        treeData={treeData}
        multiple
        checkStrategy="cascade"
        defaultExpandedKeys={["design"]}
        placeholder={t("story.treeselect_placeholder")}
      />
    );
  },
};

/**
 * exclusive: 親子排他。親を選ぶと子が解除され、子を選ぶと親が解除される。
 * 集計粒度の選択（「年」と「月」の同時選択を防ぐ）などに適する。
 */
export const ExclusiveMultiple: Story = {
  render: (args: any) => {
    const { t } = useTranslation("docs");
    const treeData = translateTreeData(defaultTreeData, t);
    return (
      <TreeSelect
        {...args}
        treeData={treeData}
        multiple
        checkStrategy="exclusive"
        defaultExpandedKeys={["design"]}
        placeholder={t("story.treeselect_placeholder")}
      />
    );
  },
};

export const Searchable: Story = {
  render: (args: any) => {
    const { t } = useTranslation("docs");
    const treeData = translateTreeData(defaultTreeData, t);
    return (
      <TreeSelect
        {...args}
        treeData={treeData}
        searchable
        placeholder={t("story.treeselect_placeholder")}
      />
    );
  },
};

export const DefaultExpanded: Story = {
  render: (args: any) => {
    const { t } = useTranslation("docs");
    const treeData = translateTreeData(defaultTreeData, t);
    return (
      <TreeSelect
        {...args}
        treeData={treeData}
        defaultExpandedKeys={["design", "colors"]}
        placeholder={t("story.treeselect_placeholder")}
      />
    );
  },
};

export const Disabled: Story = {
  render: (args: any) => {
    const { t } = useTranslation("docs");
    const treeData = translateTreeData(defaultTreeData, t);
    return (
      <TreeSelect
        {...args}
        treeData={treeData}
        disabled
        placeholder={t("story.treeselect_placeholder")}
      />
    );
  },
};
