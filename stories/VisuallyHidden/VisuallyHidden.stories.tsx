import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { VisuallyHidden } from "@/components/misc/VisuallyHidden/VisuallyHidden";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof VisuallyHidden> = {
  title: "Components/Internal/VisuallyHidden",
  component: VisuallyHidden,
  tags: [],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof VisuallyHidden>;

export const Primary: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <VisuallyHidden {...args}>
        {t("story.visuallyhidden_accessible")}
      </VisuallyHidden>
    );
  },
};

export const WithinButton: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <button aria-label={t("story.visuallyhidden_close")}>
        <span aria-hidden="true">×</span>
        <VisuallyHidden>{t("story.visuallyhidden_close")}</VisuallyHidden>
      </button>
    );
  },
};
