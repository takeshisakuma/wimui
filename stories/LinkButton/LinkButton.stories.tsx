import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { LinkButton } from "@/components/misc/LinkButton/LinkButton";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof LinkButton> = {
  title: "Components/Buttons/LinkButton",
  component: LinkButton,
  tags: [],
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <LinkButton {...args} href="https://google.com"
        target="_blank"
        icon="ExternalLinkIcon"
        iconPosition="right">{t("story.linkbutton_google")}</LinkButton>
    );
  },
};
