import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { CalendarHeatmap, Label } from "wimui";

const meta: Meta<typeof CalendarHeatmap> = {
  title: "Components/Data-display/CalendarHeatmap",
  component: CalendarHeatmap,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    asChild: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof CalendarHeatmap>;

const generateMockData = (year: number) => {
  const data = [];
  const start = new Date(year, 0, 1);
  const end = new Date(year, 11, 31);
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    data.push({
      date: d.toISOString().split("T")[0],
      count: Math.floor(Math.random() * 10),
    });
  }
  return data;
};

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const currentYear = new Date().getFullYear();
    const mockData = React.useMemo(() => generateMockData(currentYear), [currentYear]);

    return (
      <Label label={t("story.heatmap_label")}>
        <CalendarHeatmap {...args} data={mockData} year={currentYear} />
      </Label>
    );
  },
};
