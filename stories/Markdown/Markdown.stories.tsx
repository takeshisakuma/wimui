import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Markdown } from "@/components/Markdown/Markdown";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof Markdown> = {
  title: "Components/Utilities/Markdown",
  component: Markdown,
};

export default meta;
type Story = StoryObj<typeof Markdown>;

export const Default: Story = {
  render: (args) => {
    const { t } = useTranslation(["docs", "common", "components"]);
    return <Markdown {...args}>{t("story_markdown_sample")}</Markdown>;
  },
};
