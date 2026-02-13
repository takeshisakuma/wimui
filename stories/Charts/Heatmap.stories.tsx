import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heatmap } from "@/components/Charts/Heatmap";

const meta: Meta<typeof Heatmap> = {
    title: "Component/Media & Viz/Heatmap",
    component: Heatmap,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Heatmap>;

const xAxisKey = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const yAxisKey = ["Am", "Pm", "Night"];

const data = [];
for (let x of xAxisKey) {
    for (let y of yAxisKey) {
        data.push({
            x,
            y,
            value: Math.floor(Math.random() * 100),
        });
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


