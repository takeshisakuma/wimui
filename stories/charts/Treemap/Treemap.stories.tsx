import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Treemap } from "wimui";

const meta: Meta<typeof Treemap> = {
  title: "Components/Visualization/Treemap",
  component: Treemap,
};

export default meta;
type Story = StoryObj<typeof Treemap>;

const data = [
  { name: "Category A", value: 400 },
  { name: "Category B", value: 300 },
  { name: "Category C", value: 300 },
  { name: "Category D", value: 200 },
  { name: "Category E", value: 278 },
  { name: "Category F", value: 189 },
];

export const Default: Story = {
  args: {
    data,
    dataKey: "value",
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Treemap {...args} title={t("story.chart_category_distribution")} />;
  },
};
