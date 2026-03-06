import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from "@/components/IconButton/IconButton";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof IconButton> = {
  title: "Components/Buttons/IconButton",
  component: IconButton,
  tags: [],
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation();
    return <IconButton {...args} iconName="SearchIcon" aria-label={t("story_iconbutton_search")} />;
  },
};

export const Close: Story = {
  render: function Render(args) {
    const { t } = useTranslation();
    return (
      <IconButton
        {...args}
        iconName="CloseIcon"
        aria-label={t("story_iconbutton_close")}
        priority="tertiary"
      />
    );
  },
};
