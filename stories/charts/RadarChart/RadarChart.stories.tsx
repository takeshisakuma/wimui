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

export const Default: Story = {
  args: {
    indexKey: "subject",
    keys: ["A", "B"],
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    // 軸は「何を比べているのか」が読める実在の評価軸にする（DESIGN.md realism）。
    const data = [
      { subject: t("story.radar_subject_system_design"), A: 120, B: 110 },
      { subject: t("story.radar_subject_debugging"), A: 98, B: 130 },
      { subject: t("story.radar_subject_testing"), A: 86, B: 130 },
      { subject: t("story.radar_subject_review"), A: 99, B: 100 },
      { subject: t("story.radar_subject_docs"), A: 85, B: 90 },
      { subject: t("story.radar_subject_mentoring"), A: 65, B: 85 },
    ];
    return <RadarChart {...args} data={data} title={t("story.chart_user_skills")} />;
  },
};
