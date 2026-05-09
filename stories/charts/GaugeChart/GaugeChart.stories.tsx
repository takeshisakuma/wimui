import type { Meta, StoryObj } from "@storybook/react-vite";
import { GaugeChart } from "wimui";

const meta: Meta<typeof GaugeChart> = {
  title: "Components/Visualization/GaugeChart",
  component: GaugeChart,
};

export default meta;
type Story = StoryObj<typeof GaugeChart>;

export const Default: Story = {
  args: {
    title: "System Load",
    value: 75,
    label: "75%",
  },
};

export const CustomColor: Story = {
  args: {
    title: "Critical Level",
    value: 92,
    label: "DANGER",
    color: "var(--wim-color-negative)",
  },
};
