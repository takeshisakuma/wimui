import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "../../src/components/Box/Box";
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Box {...args}>{t("story_box_default")}</Box>;
  },
  args: {
    bg: "#f0f0f0",
    p: 20,
    radius: 8,
  },
};

export const WithCustomShadow: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Box {...args}>{t("story_box_shadow")}</Box>;
  },
  args: {
    bg: "white",
    p: 40,
    radius: 12,
    shadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
};

export const AsButton: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Box {...args}>{t("story_box_button")}</Box>;
  },
  args: {
    as: "button",
    bg: "#eff6ff",
    color: "#1d4ed8",
    p: "10px 20px",
    radius: 6,
    style: { border: "1px solid #bfdbfe", cursor: "pointer", fontWeight: 600 },
  },
};

export const Spacing: Story = {
  render: function Render() {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Box bg="#f8fafc" p={20} radius={8} style={{ border: "1px solid #e2e8f0" }}>
        <Box
          bg="#eff6ff"
          p={15}
          mb={15}
          color="#1d4ed8"
          radius={4}
          style={{ border: "1px solid #bfdbfe" }}
        >
          {t("story_box_margin")}
        </Box>
        <Box
          bg="#f0fdf4"
          p={15}
          color="#15803d"
          radius={4}
          style={{ border: "1px solid #bbf7d0" }}
        >
          {t("story_box_2")}
        </Box>
      </Box>
    );
  },
};

export const PaddingProps: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Box {...args}>{t("story_box_padding")}</Box>;
  },
  args: {
    bg: "#fdf2f8",
    color: "#be185d",
    px: 40, // Left and right padding
    py: 10, // Top and bottom padding
    radius: 8,
    style: { border: "1px solid #fbcfe8", display: "inline-block" },
  },
};
