import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heatmap } from "@/components/Charts/Heatmap";

const meta: Meta<typeof Heatmap> = {
    title: "Component/Visualization/Heatmap",
    component: Heatmap,
    tags: ["autodocs"],
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
        title: "Activity Heatmap",
        data,
        xAxisKey,
        yAxisKey,
    },
};


