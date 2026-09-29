import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { IconButton } from "wimui";


const meta: Meta<typeof IconButton> = {
  title: "Components/Buttons/IconButton",
  component: IconButton,
  tags: [],
  argTypes: {
    disabled: { control: "boolean" },
    variant: {
      control: "select",
      options: ["solid", "outline", "ghost"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <IconButton {...args} iconName="SearchIcon" aria-label={t("story.iconbutton_search")} />;
  },
};

export const Close: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <IconButton
        {...args}
        iconName="CloseIcon"
        aria-label={t("story.iconbutton_close")}
      />
    );
  },
  args: {
    variant: "ghost",
  },
};

// T280: この値は VRT が撮るストーリーのどれにも描かれていなかった（Audit / ChatUI は撮影対象外）。
export const Variants: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", gap: "var(--wim-spacing-md)", alignItems: "center" }}>
        {(["solid", "outline", "ghost"] as const).map((variant) => (
          <IconButton key={variant} {...args} variant={variant} iconName="SearchIcon" aria-label={t("story.iconbutton_search")} />
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", gap: "var(--wim-spacing-md)", alignItems: "center" }}>
        {(["sm", "md", "lg"] as const).map((size) => (
          <IconButton key={size} {...args} size={size} iconName="SearchIcon" aria-label={t("story.iconbutton_search")} />
        ))}
      </div>
    );
  },
};
