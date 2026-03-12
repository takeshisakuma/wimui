import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { VisuallyHidden } from "@/components/VisuallyHidden/VisuallyHidden";
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <VisuallyHidden {...args}>
        {t("story_visuallyhidden_accessible")}
      </VisuallyHidden>
    );
  },
};

export const WithinButton: Story = {
  render: function Render() {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <button aria-label={t("story_visuallyhidden_close")}>
        <span aria-hidden="true">×</span>
        <VisuallyHidden>{t("story_visuallyhidden_close")}</VisuallyHidden>
      </button>
    );
  },
};
