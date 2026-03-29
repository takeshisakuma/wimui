import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Legend } from "@/components/Legend/Legend";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


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
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Legend {...args}>{t("story.legend_title")}</Legend>;
  },
};

export const LongText: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Legend {...args}>{t("story.legend_long")}</Legend>;
  },
};
