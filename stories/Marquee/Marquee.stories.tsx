import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Marquee } from "@/components/Marquee/Marquee";
import { Badge } from "@/components/Badge/Badge";
import { Group } from "@/components/Group/Group";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof Marquee> = {
  title: "Components/Utilities/Marquee",
  component: Marquee,
};

export default meta;
type Story = StoryObj<typeof Marquee>;

export const Default: Story = {
  render: (args) => {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Marquee {...args}>
        <Group gap="xl">
          <Badge color="primary">{t("story_marquee_new_feature")}</Badge>
          <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {t("story_marquee_welcome")}
          </span>
          <Badge color="secondary">{t("story_marquee_update")}</Badge>
          <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {t("story_marquee_check_out")}
          </span>
        </Group>
      </Marquee>
    );
  },
};

export const Fast: Story = {
  args: {
    duration: 5,
  },
  render: (args) => {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Marquee {...args}>
        <Group gap="xl">
          <Badge color="primary">{t("story_marquee_new_feature")}</Badge>
          <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {t("story_marquee_welcome")}
          </span>
          <Badge color="secondary">{t("story_marquee_update")}</Badge>
          <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {t("story_marquee_check_out")}
          </span>
        </Group>
      </Marquee>
    );
  },
};

export const Slow: Story = {
  args: {
    duration: 40,
  },
  render: (args) => {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Marquee {...args}>
        <Group gap="xl">
          <Badge color="primary">{t("story_marquee_new_feature")}</Badge>
          <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {t("story_marquee_welcome")}
          </span>
          <Badge color="secondary">{t("story_marquee_update")}</Badge>
          <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {t("story_marquee_check_out")}
          </span>
        </Group>
      </Marquee>
    );
  },
};

export const Reverse: Story = {
  args: {
    reverse: true,
  },
  render: (args) => {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Marquee {...args}>
        <Group gap="xl">
          <Badge color="primary">{t("story_marquee_new_feature")}</Badge>
          <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {t("story_marquee_welcome")}
          </span>
          <Badge color="secondary">{t("story_marquee_update")}</Badge>
          <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {t("story_marquee_check_out")}
          </span>
        </Group>
      </Marquee>
    );
  },
};

export const Vertical: Story = {
  render: (args) => {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <div style={{ height: "200px", border: "1px solid #ccc" }}>
        <Marquee {...args} vertical duration={5}>
          <div
            style={{ padding: "10px", textAlign: "center", fontWeight: "bold" }}
          >
            {t("story_marquee_item", { count: 1 })}
          </div>
          <div
            style={{ padding: "10px", textAlign: "center", fontWeight: "bold" }}
          >
            {t("story_marquee_item", { count: 2 })}
          </div>
          <div
            style={{ padding: "10px", textAlign: "center", fontWeight: "bold" }}
          >
            {t("story_marquee_item", { count: 3 })}
          </div>
        </Marquee>
      </div>
    );
  },
};
