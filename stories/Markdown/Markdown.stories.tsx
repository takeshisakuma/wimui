import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Markdown } from "@/components/Markdown/Markdown";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Markdown> = {
  title: "Components/Utilities/Markdown",
  component: Markdown,
};

export default meta;
type Story = StoryObj<typeof Markdown>;

export const Default: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Markdown {...args}>{t("story_markdown_sample")}</Markdown>;
  },
};
