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
    bg: "var(--wim-color-surface-variant)",
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
    bg: "color-mix(in srgb, var(--wim-color-primary) 12%, var(--wim-color-surface))",
    color: "var(--wim-color-text-accent)",
    p: "10px 20px",
    radius: 6,
    style: { border: "1px solid var(--wim-color-primary)", cursor: "pointer", fontWeight: 600 },
  },
};

export const Spacing: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Box bg="var(--wim-color-surface-variant)" p={20} radius={8} style={{ border: "1px solid var(--wim-color-border)" }}>
        <Box
          bg="color-mix(in srgb, var(--wim-color-primary) 12%, var(--wim-color-surface))"
          p={15}
          mb={15}
          color="var(--wim-color-text-accent)"
          radius={4}
          style={{ border: "1px solid var(--wim-color-primary)" }}
        >
          {t("story.box_margin")}
        </Box>
        <Box
          bg="color-mix(in srgb, var(--wim-color-success) 12%, var(--wim-color-surface))"
          p={15}
          color="var(--wim-color-text-success)"
          radius={4}
          style={{ border: "1px solid var(--wim-color-success)" }}
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
    bg: "color-mix(in srgb, var(--wim-color-danger) 12%, var(--wim-color-surface))",
    color: "var(--wim-color-text-danger)",
    px: 40, // Left and right padding
    py: 10, // Top and bottom padding
    radius: 8,
    style: { border: "1px solid var(--wim-color-danger)", display: "inline-block" },
  },
};
