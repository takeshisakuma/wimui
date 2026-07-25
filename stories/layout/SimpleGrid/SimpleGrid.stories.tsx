import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { SimpleGrid } from "wimui";
import { DemoCell, demoCellIntent } from "../_helpers/DemoCell";


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

export const FixedColumns: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <SimpleGrid {...args}>
        {Array.from({ length: 5 }, (_, i) => (
          <DemoCell key={i} intent={demoCellIntent(i)}>
            {t("story.grid_item", String(i + 1))}
          </DemoCell>
        ))}
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
        {Array.from({ length: 5 }, (_, i) => (
          <DemoCell key={i} intent={demoCellIntent(i)}>
            {t("story.grid_min_width")}
          </DemoCell>
        ))}
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
        {Array.from({ length: 8 }, (_, i) => (
          <DemoCell key={i} intent={demoCellIntent(i)}>
            {t("story.grid_item", String(i + 1))}
          </DemoCell>
        ))}
      </SimpleGrid>
    );
  },
  args: {
    cols: { base: 1, sm: 2, md: 3, lg: 4 },
    spacing: 16,
  },
};
