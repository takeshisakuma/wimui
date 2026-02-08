import type { Meta, StoryObj } from "@storybook/react";
import { PieChart } from "./PieChart";

const meta: Meta<typeof PieChart> = {
    title: "Component/Charts/PieChart",
    component: PieChart,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PieChart>;

const data = [
    { name: "Direct", value: 400 },
    { name: "Social", value: 300 },
    { name: "Referral", value: 300 },
    { name: "Organic", value: 200 },
];

export const Default: Story = {
    args: {
        title: "Traffic Sources",
        data,
    },
};

export const Donut: Story = {
    args: {
        title: "Traffic Sources (Donut)",
        data,
        donut: true,
    },
};
