import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Legend } from "@/components/Legend/Legend";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof Legend> = {
  title: "Components/Form Layout/Legend",
  component: Legend,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Legend>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Legend {...args}>{t("story_legend_title")}</Legend>;
  },
};

export const LongText: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Legend {...args}>{t("story_legend_long")}</Legend>;
  },
};
