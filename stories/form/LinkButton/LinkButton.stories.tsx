import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { LinkButton } from "wimui";


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

// T280: この値は VRT が撮るストーリーのどれにも描かれていなかった（Audit / ChatUI は撮影対象外）。
export const Variants: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", gap: "var(--wim-spacing-md)", alignItems: "center" }}>
        {(["solid", "outline", "ghost"] as const).map((variant) => (
          <LinkButton key={variant} {...args} variant={variant} href="https://google.com" target="_blank" icon="ExternalLinkIcon" iconPosition="right">
            {t("story.linkbutton_google")}
          </LinkButton>
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
          <LinkButton key={size} {...args} size={size} href="https://google.com" target="_blank" icon="ExternalLinkIcon" iconPosition="right">
            {t("story.linkbutton_google")}
          </LinkButton>
        ))}
      </div>
    );
  },
};
