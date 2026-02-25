import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadarChart } from "@/components/Charts/RadarChart";

const meta: Meta<typeof RadarChart> = {
  title: "Components/Visualization/RadarChart",
  component: RadarChart,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RadarChart>;

const data = [
  { subject: "Skill 1", A: 120, B: 110 },
  { subject: "Skill 2", A: 98, B: 130 },
  { subject: "Skill 3", A: 86, B: 130 },
  { subject: "Skill 4", A: 99, B: 100 },
  { subject: "Skill 5", A: 85, B: 90 },
  { subject: "Skill 6", A: 65, B: 85 },
];

export const Default: Story = {
  args: {
    title: "User Skills Comparison",
    data,
    indexKey: "subject",
    keys: ["A", "B"],
  },
};
