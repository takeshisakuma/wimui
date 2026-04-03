import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { TreeView, TreeViewNode } from "@/components/data-display/TreeView/TreeView";
import { Icon } from "@/components/media/Icon/Icon";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";


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
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <TreeView {...args} defaultExpandedValues={["1", "2"]}>
        <TreeView.Item
          value="1"
          label={t("story.tree_documents")}
          icon={<Icon name="CircleIcon" size="sm" />}
        >
          <TreeView.Item
            value="1-1"
            label={t("story.tree_work")}
            icon={<Icon name="SquareIcon" size="sm" />}
          >
            <TreeView.Item
              value="1-1-1"
              label={t("story.tree_project_a")}
              icon={<Icon name="CopyIcon" size="sm" />}
            />
            <TreeView.Item
              value="1-1-2"
              label={t("story.tree_project_b")}
              icon={<Icon name="CopyIcon" size="sm" />}
            />
          </TreeView.Item>
          <TreeView.Item
            value="1-2"
            label={t("story.tree_personal")}
            icon={<Icon name="SquareIcon" size="sm" />}
          >
            <TreeView.Item
              value="1-2-1"
              label={t("story.tree_photos")}
              icon={<Icon name="CircleIcon" size="sm" />}
            />
          </TreeView.Item>
        </TreeView.Item>
        <TreeView.Item
          value="2"
          label={t("story.tree_music")}
          icon={<Icon name="CircleIcon" size="sm" />}
        >
          <TreeView.Item
            value="2-1"
            label={t("story.tree_rock")}
            icon={<Icon name="SquareIcon" size="sm" />}
          />
          <TreeView.Item
            value="2-2"
            label={t("story.tree_jazz")}
            icon={<Icon name="SquareIcon" size="sm" />}
          />
        </TreeView.Item>
        <TreeView.Item
          value="3"
          label={t("story.tree_videos")}
          icon={<Icon name="CircleIcon" size="sm" />}
        />
      </TreeView>
    );
  },
};

export const MultiSelect: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <TreeView multiSelect defaultExpandedValues={["1"]}>
        <TreeView.Item value="1" label={t("story.tree_system")}>
          <TreeView.Item value="1-1" label={t("story.tree_logs")} />
          <TreeView.Item value="1-2" label={t("story.tree_config")} />
        </TreeView.Item>
        <TreeView.Item value="2" label={t("story.tree_users")}>
          <TreeView.Item value="2-1" label={t("story.tree_admin")} />
          <TreeView.Item value="2-2" label={t("story.tree_guest")} />
        </TreeView.Item>
      </TreeView>
    );
  },
};

export const DisabledItems: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <TreeView defaultExpandedValues={["1"]}>
        <TreeView.Item value="1" label={t("story.tree_root_enabled")}>
          <TreeView.Item
            value="1-1"
            label={t("story.tree_disabled_item")}
            disabled
          />
          <TreeView.Item value="1-2" label={t("story.tree_enabled_item")} />
        </TreeView.Item>
      </TreeView>
    );
  },
};

export const Overflow: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <TreeView width={250} defaultExpandedValues={["1"]}>
        <TreeView.Item
          value="1"
          label={t("story.tree_long_folder")}
          icon={<Icon name="CircleIcon" size="sm" />}
        >
          <TreeView.Item
            value="1-1"
            label={t("story.tree_long_subitem")}
            icon={<Icon name="SquareIcon" size="sm" />}
          >
            <TreeView.Item
              value="1-1-1"
              label={t("story.tree_deep_nesting")}
              icon={<Icon name="CopyIcon" size="sm" />}
            />
          </TreeView.Item>
        </TreeView.Item>
        <TreeView.Item
          value="2"
          label={t("story.tree_regular_item")}
          icon={<Icon name="CircleIcon" size="sm" />}
        />
      </TreeView>
    );
  },
};

// ─── checkStrategy デモ用ノード ────────────────────────────────────────────────

const regionNodes: TreeViewNode[] = [
  {
    value: "asia",
    label: "Asia",
    children: [
      {
        value: "east-asia",
        label: "East Asia",
        children: [
          { value: "japan", label: "Japan" },
          { value: "korea", label: "Korea" },
          { value: "china", label: "China" },
        ],
      },
      {
        value: "southeast-asia",
        label: "Southeast Asia",
        children: [
          { value: "thailand", label: "Thailand" },
          { value: "vietnam", label: "Vietnam" },
        ],
      },
    ],
  },
  {
    value: "europe",
    label: "Europe",
    children: [
      { value: "france", label: "France" },
      { value: "germany", label: "Germany" },
      { value: "italy", label: "Italy" },
    ],
  },
  {
    value: "americas",
    label: "Americas",
    children: [
      { value: "usa", label: "United States" },
      { value: "canada", label: "Canada" },
      { value: "brazil", label: "Brazil" },
    ],
  },
];

/**
 * cascade（デフォルト）: 親チェックで子全選択、子の一部で親が indeterminate。
 * バックアップ対象フォルダや地域フィルタのような「親 = 子を全て包含」用途。
 */
export const CascadeCheckable: Story = {
  render: function Render() {
    const [checked, setChecked] = React.useState<string[]>([]);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <TreeView
          nodes={regionNodes}
          checkable
          checkStrategy="cascade"
          multiSelect
          defaultExpandedValues={["asia", "east-asia", "europe"]}
          onCheckedChange={setChecked}
          width="100%"
        />
        <div style={{ fontSize: "12px", color: "var(--wim-color-text-secondary)" }}>
          Checked: {checked.length > 0 ? checked.join(", ") : "(none)"}
        </div>
      </div>
    );
  },
};

/**
 * exclusive: 親選択→子が自動解除、子選択→親が解除。
 * レポートの集計粒度やカテゴリ分類など「重複なしで最小セットを選ぶ」用途。
 */
export const ExclusiveCheckable: Story = {
  render: function Render() {
    const [checked, setChecked] = React.useState<string[]>([]);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <TreeView
          nodes={regionNodes}
          checkable
          checkStrategy="exclusive"
          multiSelect
          defaultExpandedValues={["asia", "east-asia", "europe"]}
          onCheckedChange={setChecked}
          width="100%"
        />
        <div style={{ fontSize: "12px", color: "var(--wim-color-text-secondary)" }}>
          Checked: {checked.length > 0 ? checked.join(", ") : "(none)"}
        </div>
      </div>
    );
  },
};
