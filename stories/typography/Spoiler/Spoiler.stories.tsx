import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Spoiler } from "@/components/typography/Spoiler/Spoiler";

const meta: Meta<typeof Spoiler> = {
  title: "Components/Typography & Icons/Spoiler",
  component: Spoiler,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    lines: { control: { type: "number", min: 1 } },
    expanded: { control: "boolean" },
    defaultExpanded: { control: "boolean" },
    showLabel: { control: "text" },
    hideLabel: { control: "text" },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "480px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Spoiler>;

export const Default: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Spoiler {...args}>{t("story.spoiler_review")}</Spoiler>;
  },
};

export const CustomLines: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Spoiler {...args}>{t("story.spoiler_review")}</Spoiler>;
  },
  args: {
    lines: 5,
  },
};

export const DefaultExpanded: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Spoiler {...args}>{t("story.spoiler_review")}</Spoiler>;
  },
  args: {
    defaultExpanded: true,
  },
};

export const CustomLabels: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Spoiler
        {...args}
        showLabel={t("story.spoiler_show_label")}
        hideLabel={t("story.spoiler_hide_label")}
      >
        {t("story.spoiler_review")}
      </Spoiler>
    );
  },
};

export const ShortContent: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Spoiler {...args}>{t("story.spoiler_short")}</Spoiler>;
  },
};

export const RichContent: Story = {
  render: () => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Spoiler lines={4}>
        <p style={{ margin: "0 0 0.5em" }}>
          <strong>{t("story.spoiler_rich_pros_label")}</strong>{" "}
          {t("story.spoiler_rich_pros")}
        </p>
        <p style={{ margin: 0 }}>
          <strong>{t("story.spoiler_rich_cons_label")}</strong>{" "}
          {t("story.spoiler_rich_cons")}
        </p>
      </Spoiler>
    );
  },
};
