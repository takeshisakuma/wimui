import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Grid } from "wimui";
import { DemoCell, demoCellIntent, type DemoCellIntent } from "../_helpers/DemoCell";


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

export const Basic: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Grid {...args}>
        <DemoCell intent="primary">{t("story.grid_item", "1")}</DemoCell>
        <DemoCell intent="success">{t("story.grid_item", "2")}</DemoCell>
        <DemoCell intent="warning">{t("story.grid_item", "3")}</DemoCell>
        <DemoCell intent="danger">{t("story.grid_item", "4")}</DemoCell>
        <DemoCell intent="secondary">{t("story.grid_item", "5")}</DemoCell>
        <DemoCell intent="info">{t("story.grid_item", "6")}</DemoCell>
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
        <DemoCell intent="primary">1fr</DemoCell>
        <DemoCell intent="success">2fr</DemoCell>
        <DemoCell intent="warning">1fr</DemoCell>
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
    const intents: DemoCellIntent[] = Array.from({ length: 8 }, (_, i) => demoCellIntent(i));
    return (
      <Grid {...args}>
        {intents.map((intent, i) => (
          <DemoCell key={i} intent={intent}>{t("story.grid_item", String(i + 1))}</DemoCell>
        ))}
      </Grid>
    );
  },
  args: {
    cols: { base: 1, sm: 2, md: 3, lg: 4 },
    gap: 16,
  },
};
