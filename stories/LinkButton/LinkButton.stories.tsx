import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { LinkButton } from "@/components/LinkButton/LinkButton";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof LinkButton> = {
  title: "Components/Buttons/LinkButton",
  component: LinkButton,
  tags: [],
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <LinkButton
        {...args}
        label={t("story_linkbutton_google")}
        href="https://google.com"
        target="_blank"
        iconName="ExternalLinkIcon"
        iconPosition="right"
      />
    );
  },
};
