import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Icon, TreeView, TreeViewNode } from "wimui";


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
          background: "linear-gradient(135deg, var(--wim-color-surface-variant) 0%, var(--wim-color-bg-tertiary) 100%)",
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
    const labels = {
      expandLabel: (label: string) => t("components:a11y.expand_label", { label }),
      collapseLabel: (label: string) => t("components:a11y.collapse_label", { label }),
    };
    return (
      <TreeView {...args} defaultExpandedValues={["1", "2"]} labels={labels}>
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

const regionNodes = (t: (k: string) => string): TreeViewNode[] => [
  {
    value: "asia",
    label: t("story.tree_asia"),
    children: [
      {
        value: "east-asia",
        label: t("story.tree_east_asia"),
        children: [
          { value: "japan", label: t("story.tree_japan") },
          { value: "korea", label: t("story.tree_korea") },
          { value: "china", label: t("story.tree_china") },
        ],
      },
      {
        value: "southeast-asia",
        label: t("story.tree_southeast_asia"),
        children: [
          { value: "thailand", label: t("story.tree_thailand") },
          { value: "vietnam", label: t("story.tree_vietnam") },
        ],
      },
    ],
  },
  {
    value: "europe",
    label: t("story.tree_europe"),
    children: [
      { value: "france", label: t("story.tree_france") },
      { value: "germany", label: t("story.tree_germany") },
      { value: "italy", label: t("story.tree_italy") },
    ],
  },
  {
    value: "americas",
    label: t("story.tree_americas"),
    children: [
      { value: "usa", label: t("story.tree_united_states") },
      { value: "canada", label: t("story.tree_canada") },
      { value: "brazil", label: t("story.tree_brazil") },
    ],
  },
];

/**
 * cascade（デフォルト）: 親チェックで子全選択、子の一部で親が indeterminate。
 * バックアップ対象フォルダや地域フィルタのような「親 = 子を全て包含」用途。
 */
export const CascadeCheckable: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [checked, setChecked] = React.useState<string[]>([]);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <TreeView
          nodes={regionNodes(t)}
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
    const { t } = useTranslation(ALL_NAMESPACES);
    const [checked, setChecked] = React.useState<string[]>([]);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <TreeView
          nodes={regionNodes(t)}
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
