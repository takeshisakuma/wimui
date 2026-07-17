import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { SimpleGrid } from "wimui";


const meta: Meta<typeof SimpleGrid> = {
  title: "Components/Layout/SimpleGrid",
  component: SimpleGrid,
  tags: [],
  argTypes: {
    cols: { control: "object" },
    spacing: { control: "text" },
    minChildWidth: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      backgroundColor: "color-mix(in srgb, var(--wim-color-primary) 12%, var(--wim-color-surface))",
      color: "var(--wim-color-text-accent)",
      padding: "20px",
      borderRadius: "8px",
      textAlign: "center",
      fontWeight: "bold",
    }}
  >
    {children}
  </div>
);

export const FixedColumns: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <SimpleGrid {...args}>
        <Box>{t("story.grid_item", "1")}</Box>
        <Box>{t("story.grid_item", "2")}</Box>
        <Box>{t("story.grid_item", "3")}</Box>
        <Box>{t("story.grid_item", "4")}</Box>
        <Box>{t("story.grid_item", "5")}</Box>
      </SimpleGrid>
    );
  },
  args: {
    cols: 3,
    spacing: "md",
  },
};

export const ResponsiveAuto: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <SimpleGrid {...args}>
        <Box>{t("story.grid_min_width")}</Box>
        <Box>{t("story.grid_min_width")}</Box>
        <Box>{t("story.grid_min_width")}</Box>
        <Box>{t("story.grid_min_width")}</Box>
        <Box>{t("story.grid_min_width")}</Box>
      </SimpleGrid>
    );
  },
  args: {
    minChildWidth: 200,
    spacing: 16,
  },
};

export const ResponsiveBreakpoints: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <SimpleGrid {...args}>
        <Box>{t("story.grid_item", "1")}</Box>
        <Box>{t("story.grid_item", "2")}</Box>
        <Box>{t("story.grid_item", "3")}</Box>
        <Box>{t("story.grid_item", "4")}</Box>
        <Box>{t("story.grid_item", "5")}</Box>
        <Box>{t("story.grid_item", "6")}</Box>
        <Box>{t("story.grid_item", "7")}</Box>
        <Box>{t("story.grid_item", "8")}</Box>
      </SimpleGrid>
    );
  },
  args: {
    cols: { base: 1, sm: 2, md: 3, lg: 4 },
    spacing: 16,
  },
};
