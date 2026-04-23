import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "../../../src/components/layout/Box/Box";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";


const meta: Meta<typeof Box> = {
  title: "Components/Layout/Box",
  component: Box,
  tags: [],
  argTypes: {
    as: { control: "text" },
    bg: { control: "color" },
    display: { control: "text" },
    position: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Box {...args}>{t("story.box_default")}</Box>;
  },
  args: {
    bg: "var(--wim-color-bg-secondary)",
    p: 20,
    radius: 8,
  },
};

export const WithCustomShadow: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Box {...args}>{t("story.box_shadow")}</Box>;
  },
  args: {
    bg: "var(--wim-color-surface)",
    p: 40,
    radius: 12,
    shadow:
      "var(--wim-shadow-md)",
  },
};

export const AsButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Box {...args}>{t("story.box_button")}</Box>;
  },
  args: {
    as: "button",
    bg: "color-mix(in srgb, var(--wim-color-primary) 12%, white)",
    color: "color-mix(in srgb, var(--wim-color-primary) 80%, black)",
    p: "10px 20px",
    radius: 6,
    style: { border: "1px solid var(--wim-color-primary)", cursor: "pointer", fontWeight: 600 },
  },
};

export const Spacing: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Box bg="var(--wim-color-bg-secondary)" p={20} radius={8} style={{ border: "1px solid var(--wim-color-border)" }}>
        <Box
          bg="color-mix(in srgb, var(--wim-color-primary) 12%, white)"
          p={15}
          mb={15}
          color="color-mix(in srgb, var(--wim-color-primary) 80%, black)"
          radius={4}
          style={{ border: "1px solid var(--wim-color-primary)" }}
        >
          {t("story.box_margin")}
        </Box>
        <Box
          bg="color-mix(in srgb, var(--wim-color-positive) 12%, white)"
          p={15}
          color="color-mix(in srgb, var(--wim-color-positive) 80%, black)"
          radius={4}
          style={{ border: "1px solid var(--wim-color-positive)" }}
        >
          {t("story.box_2")}
        </Box>
      </Box>
    );
  },
};

export const PaddingProps: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Box {...args}>{t("story.box_padding")}</Box>;
  },
  args: {
    bg: "color-mix(in srgb, var(--wim-color-destructive) 12%, white)",
    color: "color-mix(in srgb, var(--wim-color-destructive) 80%, black)",
    px: 40, // Left and right padding
    py: 10, // Top and bottom padding
    radius: 8,
    style: { border: "1px solid var(--wim-color-destructive)", display: "inline-block" },
  },
};
