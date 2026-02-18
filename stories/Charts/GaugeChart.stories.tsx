import type { Meta, StoryObj } from "@storybook/react-vite";
import { GaugeChart } from "@/components/Charts/GaugeChart";

const meta: Meta<typeof GaugeChart> = {
    title: "Component/Visualization/GaugeChart",
    component: GaugeChart,
    tags: ["autodocs"],
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
        color: "#ff4d4f",
    },
};
