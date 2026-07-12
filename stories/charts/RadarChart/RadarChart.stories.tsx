import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { RadarChart } from "wimui/charts";

const meta: Meta<typeof RadarChart> = {
  title: "Components/Visualization/RadarChart",
  component: RadarChart,
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
    data,
    indexKey: "subject",
    keys: ["A", "B"],
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <RadarChart {...args} title={t("story.chart_user_skills")} />;
  },
};
