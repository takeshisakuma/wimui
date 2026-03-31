import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Marquee } from "@/components/data-display/Marquee/Marquee";
import { Badge } from "@/components/data-display/Badge/Badge";
import { Group } from "@/components/layout/Group/Group";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Marquee> = {
  title: "Components/Utilities/Marquee",
  component: Marquee,
};

export default meta;
type Story = StoryObj<typeof Marquee>;

export const Default: Story = {
  render: (args: any) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Marquee {...args}>
        <Group gap="xl">
          <Badge color="primary">{t("story.marquee_new_feature")}</Badge>
          <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {t("story.marquee_welcome")}
          </span>
          <Badge color="secondary">{t("story.marquee_update")}</Badge>
          <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {t("story.marquee_check_out")}
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
  render: (args: any) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Marquee {...args}>
        <Group gap="xl">
          <Badge color="primary">{t("story.marquee_new_feature")}</Badge>
          <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {t("story.marquee_welcome")}
          </span>
          <Badge color="secondary">{t("story.marquee_update")}</Badge>
          <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {t("story.marquee_check_out")}
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
  render: (args: any) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Marquee {...args}>
        <Group gap="xl">
          <Badge color="primary">{t("story.marquee_new_feature")}</Badge>
          <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {t("story.marquee_welcome")}
          </span>
          <Badge color="secondary">{t("story.marquee_update")}</Badge>
          <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {t("story.marquee_check_out")}
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
  render: (args: any) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Marquee {...args}>
        <Group gap="xl">
          <Badge color="primary">{t("story.marquee_new_feature")}</Badge>
          <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {t("story.marquee_welcome")}
          </span>
          <Badge color="secondary">{t("story.marquee_update")}</Badge>
          <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {t("story.marquee_check_out")}
          </span>
        </Group>
      </Marquee>
    );
  },
};

export const Vertical: Story = {
  render: (args: any) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ height: "200px", border: "1px solid #ccc" }}>
        <Marquee {...args} vertical duration={5}>
          <div
            style={{ padding: "10px", textAlign: "center", fontWeight: "bold" }}
          >
            {t("story.marquee_item", { count: 1 })}
          </div>
          <div
            style={{ padding: "10px", textAlign: "center", fontWeight: "bold" }}
          >
            {t("story.marquee_item", { count: 2 })}
          </div>
          <div
            style={{ padding: "10px", textAlign: "center", fontWeight: "bold" }}
          >
            {t("story.marquee_item", { count: 3 })}
          </div>
        </Marquee>
      </div>
    );
  },
};
