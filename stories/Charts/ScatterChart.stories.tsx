import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScatterChart } from "@/components/Charts/ScatterChart";

const meta: Meta<typeof ScatterChart> = {
    title: "Component/Visualization/ScatterChart",
    component: ScatterChart,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ScatterChart>;

const data = [
    { x: 10, y: 30, z: 200, name: "A" },
    { x: 20, y: 50, z: 260, name: "B" },
    { x: 45, y: 20, z: 400, name: "C" },
    { x: 65, y: 90, z: 280, name: "D" },
    { x: 80, y: 40, z: 500, name: "E" },
    { x: 95, y: 85, z: 300, name: "F" },
];

export const Default: Story = {
    args: {
        title: "Price vs Quantity",
        data,
        xAxisName: "Price",
        yAxisName: "Quantity",
    },
};


