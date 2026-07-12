import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { GaugeChart } from "wimui/charts";

const meta: Meta<typeof GaugeChart> = {
  title: "Components/Visualization/GaugeChart",
  component: GaugeChart,
};

export default meta;
type Story = StoryObj<typeof GaugeChart>;

export const Default: Story = {
  args: {
    value: 75,
    label: "75%",
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <GaugeChart {...args} title={t("story.chart_system_load")} />;
  },
};

export const CustomColor: Story = {
  args: {
    value: 92,
    label: "DANGER",
    color: "var(--wim-color-negative)",
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <GaugeChart {...args} title={t("story.chart_critical_level")} />;
  },
};
