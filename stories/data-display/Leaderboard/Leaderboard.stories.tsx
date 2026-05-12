import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Leaderboard, type LeaderboardEntry } from "@/components/data-display/Leaderboard/Leaderboard";

const meta: Meta<typeof Leaderboard> = {
  title: "Components/Data Indicators/Leaderboard",
  component: Leaderboard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "radio", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof Leaderboard>;

function useEntries(): LeaderboardEntry[] {
  const { t } = useTranslation(ALL_NAMESPACES);
  return [
    { id: "1", name: t("story.lb_alice"), score: 2450 },
    { id: "2", name: t("story.lb_bob"), score: 2100 },
    { id: "3", name: t("story.lb_charlie"), score: 1900 },
    { id: "4", name: t("story.lb_diana"), score: 1650 },
    { id: "5", name: t("story.lb_eve"), score: 1400 },
  ];
}

export const Default: Story = {
  render: function Render(args) {
    const entries = useEntries();
    return <Leaderboard {...args} entries={entries} size="md" />;
  },
};

export const WithUnit: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const entries = useEntries();
    return <Leaderboard {...args} entries={entries} unit={t("story.lb_unit_pts")} size="md" />;
  },
};

export const WithHighlight: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const entries: LeaderboardEntry[] = [
      { id: "1", name: t("story.lb_alice"), score: 2450 },
      { id: "2", name: t("story.lb_bob"), score: 2100 },
      { id: "3", name: t("story.lb_charlie"), score: 1900 },
      { id: "4", name: t("story.lb_diana"), score: 1650, highlight: true },
      { id: "5", name: t("story.lb_eve"), score: 1400 },
    ];
    return <Leaderboard {...args} entries={entries} unit={t("story.lb_unit_pts")} size="md" />;
  },
};

export const Small: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const entries = useEntries();
    return <Leaderboard {...args} entries={entries} unit={t("story.lb_unit_pts")} size="sm" />;
  },
};

export const Large: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const entries = useEntries();
    return <Leaderboard {...args} entries={entries} unit={t("story.lb_unit_pts")} size="lg" />;
  },
};
