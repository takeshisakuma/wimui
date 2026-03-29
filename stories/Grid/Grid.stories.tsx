import type { Meta, StoryObj } from "@storybook/react-vite";
import { Grid } from "@/components/Grid/Grid";
import React from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Grid> = {
  title: "Components/Layout/Grid",
  component: Grid,
  tags: [],
  argTypes: {
    cols: { control: "object" },
    rows: { control: "text" },
    gap: { control: "text" },
    align: {
      control: "select",
      options: ["start", "center", "end", "stretch"],
    },
    justify: {
      control: "select",
      options: ["start", "center", "end", "between", "around", "stretch"],
    },
    flow: {
      control: "select",
      options: ["row", "column", "dense", "row dense", "column dense"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Box = ({
  children,
  color = "#3b82f6",
}: {
  children: React.ReactNode;
  color?: string;
}) => (
  <div
    style={{
      backgroundColor: color,
      color: "white",
      padding: "20px",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
    }}
  >
    {children}
  </div>
);

export const Basic: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Grid {...args}>
        <Box>{t("story.grid_item", "1")}</Box>
        <Box color="#10b981">{t("story.grid_item", "2")}</Box>
        <Box color="#f59e0b">{t("story.grid_item", "3")}</Box>
        <Box color="#ef4444">{t("story.grid_item", "4")}</Box>
        <Box color="#8b5cf6">{t("story.grid_item", "5")}</Box>
        <Box color="#ec4899">{t("story.grid_item", "6")}</Box>
      </Grid>
    );
  },
  args: {
    cols: 3,
    gap: 16,
  },
};

export const CustomColumns: Story = {
  render: function Render(args) {
    return (
      <Grid {...args}>
        <Box>1fr</Box>
        <Box color="#10b981">2fr</Box>
        <Box color="#f59e0b">1fr</Box>
      </Grid>
    );
  },
  args: {
    cols: "1fr 2fr 1fr",
    gap: "1rem",
  },
};

export const Responsive: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Grid {...args}>
        <Box>{t("story.grid_item", "1")}</Box>
        <Box color="#10b981">{t("story.grid_item", "2")}</Box>
        <Box color="#f59e0b">{t("story.grid_item", "3")}</Box>
        <Box color="#ef4444">{t("story.grid_item", "4")}</Box>
        <Box color="#8b5cf6">{t("story.grid_item", "5")}</Box>
        <Box color="#ec4899">{t("story.grid_item", "6")}</Box>
        <Box color="#6366f1">{t("story.grid_item", "7")}</Box>
        <Box color="#14b8a6">{t("story.grid_item", "8")}</Box>
      </Grid>
    );
  },
  args: {
    cols: { base: 1, sm: 2, md: 3, lg: 4 },
    gap: 16,
  },
};
