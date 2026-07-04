import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Heatmap } from "wimui";

const meta: Meta<typeof Heatmap> = {
  title: "Components/Visualization/Heatmap",
  component: Heatmap,
};

export default meta;
type Story = StoryObj<typeof Heatmap>;

const xAxisKey = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const yAxisKey = ["Am", "Pm", "Night"];

const data = [];
let i = 0;
for (let x of xAxisKey) {
  for (let y of yAxisKey) {
    data.push({
      x,
      y,
      value: (i * 13) % 100, // Predictable value instead of random
    });
    i++;
  }
}

export const Default: Story = {
  args: {
    data,
    xAxisKey,
    yAxisKey,
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Heatmap {...args} title={t("story.chart_activity_heatmap")} />;
  },
};
