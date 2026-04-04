import type { Meta, StoryObj } from "@storybook/react-vite";
import { Grid } from "@/components/layout/Grid/Grid";
import React from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";


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

type BoxIntent = "primary" | "positive" | "caution" | "destructive" | "secondary" | "informative";
const intentStyles: Record<BoxIntent, { bg: string; text: string }> = {
  primary:     { bg: "var(--wim-color-primary)",     text: "var(--wim-color-text-on-primary)" },
  positive:    { bg: "var(--wim-color-positive)",    text: "var(--wim-color-text-on-positive)" },
  caution:     { bg: "var(--wim-color-caution)",     text: "var(--wim-color-text-on-caution)" },
  destructive: { bg: "var(--wim-color-destructive)", text: "var(--wim-color-text-on-destructive)" },
  secondary:   { bg: "var(--wim-color-secondary)",   text: "var(--wim-color-text-on-secondary)" },
  informative: { bg: "var(--wim-color-informative)", text: "var(--wim-color-text-on-informative)" },
};

const Box = ({
  children,
  intent = "primary",
}: {
  children: React.ReactNode;
  intent?: BoxIntent;
}) => (
  <div
    style={{
      backgroundColor: intentStyles[intent].bg,
      color: intentStyles[intent].text,
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
        <Box intent="positive">{t("story.grid_item", "2")}</Box>
        <Box intent="caution">{t("story.grid_item", "3")}</Box>
        <Box intent="destructive">{t("story.grid_item", "4")}</Box>
        <Box intent="secondary">{t("story.grid_item", "5")}</Box>
        <Box intent="informative">{t("story.grid_item", "6")}</Box>
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
        <Box intent="positive">2fr</Box>
        <Box intent="caution">1fr</Box>
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
    const intents: BoxIntent[] = ["primary", "positive", "caution", "destructive", "secondary", "informative", "secondary", "positive"];
    return (
      <Grid {...args}>
        {intents.map((intent, i) => (
          <Box key={i} intent={intent}>{t("story.grid_item", String(i + 1))}</Box>
        ))}
      </Grid>
    );
  },
  args: {
    cols: { base: 1, sm: 2, md: 3, lg: 4 },
    gap: 16,
  },
};
