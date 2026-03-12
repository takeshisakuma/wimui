import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { TreeView } from "@/components/TreeView/TreeView";
import { Icon } from "@/components/Icon/Icon";
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <TreeView {...args} defaultExpandedValues={["1", "2"]}>
        <TreeView.Item
          value="1"
          label={t("story_tree_documents")}
          icon={<Icon name="CircleIcon" size="small" />}
        >
          <TreeView.Item
            value="1-1"
            label={t("story_tree_work")}
            icon={<Icon name="SquareIcon" size="small" />}
          >
            <TreeView.Item
              value="1-1-1"
              label={t("story_tree_project_a")}
              icon={<Icon name="CopyIcon" size="small" />}
            />
            <TreeView.Item
              value="1-1-2"
              label={t("story_tree_project_b")}
              icon={<Icon name="CopyIcon" size="small" />}
            />
          </TreeView.Item>
          <TreeView.Item
            value="1-2"
            label={t("story_tree_personal")}
            icon={<Icon name="SquareIcon" size="small" />}
          >
            <TreeView.Item
              value="1-2-1"
              label={t("story_tree_photos")}
              icon={<Icon name="CircleIcon" size="small" />}
            />
          </TreeView.Item>
        </TreeView.Item>
        <TreeView.Item
          value="2"
          label={t("story_tree_music")}
          icon={<Icon name="CircleIcon" size="small" />}
        >
          <TreeView.Item
            value="2-1"
            label={t("story_tree_rock")}
            icon={<Icon name="SquareIcon" size="small" />}
          />
          <TreeView.Item
            value="2-2"
            label={t("story_tree_jazz")}
            icon={<Icon name="SquareIcon" size="small" />}
          />
        </TreeView.Item>
        <TreeView.Item
          value="3"
          label={t("story_tree_videos")}
          icon={<Icon name="CircleIcon" size="small" />}
        />
      </TreeView>
    );
  },
};

export const MultiSelect: Story = {
  render: function Render() {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <TreeView multiSelect defaultExpandedValues={["1"]}>
        <TreeView.Item value="1" label={t("story_tree_system")}>
          <TreeView.Item value="1-1" label={t("story_tree_logs")} />
          <TreeView.Item value="1-2" label={t("story_tree_config")} />
        </TreeView.Item>
        <TreeView.Item value="2" label={t("story_tree_users")}>
          <TreeView.Item value="2-1" label={t("story_tree_admin")} />
          <TreeView.Item value="2-2" label={t("story_tree_guest")} />
        </TreeView.Item>
      </TreeView>
    );
  },
};

export const DisabledItems: Story = {
  render: function Render() {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <TreeView defaultExpandedValues={["1"]}>
        <TreeView.Item value="1" label={t("story_tree_root_enabled")}>
          <TreeView.Item
            value="1-1"
            label={t("story_tree_disabled_item")}
            disabled
          />
          <TreeView.Item value="1-2" label={t("story_tree_enabled_item")} />
        </TreeView.Item>
      </TreeView>
    );
  },
};

export const Overflow: Story = {
  render: function Render() {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <TreeView width={250} defaultExpandedValues={["1"]}>
        <TreeView.Item
          value="1"
          label={t("story_tree_long_folder")}
          icon={<Icon name="CircleIcon" size="small" />}
        >
          <TreeView.Item
            value="1-1"
            label={t("story_tree_long_subitem")}
            icon={<Icon name="SquareIcon" size="small" />}
          >
            <TreeView.Item
              value="1-1-1"
              label={t("story_tree_deep_nesting")}
              icon={<Icon name="CopyIcon" size="small" />}
            />
          </TreeView.Item>
        </TreeView.Item>
        <TreeView.Item
          value="2"
          label={t("story_tree_regular_item")}
          icon={<Icon name="CircleIcon" size="small" />}
        />
      </TreeView>
    );
  },
};
