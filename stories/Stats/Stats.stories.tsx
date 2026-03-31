import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stats } from "@/components/data-display/Stats/Stats";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Stats> = {
  title: "Components/Data Structures/Stats",
  component: Stats,
  parameters: {
    layout: "centered",
  },
  tags: [],
};

export default meta;
type Story = StoryObj<typeof Stats>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Stats {...args}>
        <Stats.Label>{t('story.stats_total_users')}</Stats.Label>
        <Stats.Value>1,234</Stats.Value>
        <Stats.Description>{t('story.stats_desc_users')}</Stats.Description>
      </Stats>
    );
  }
};

export const WithTrend: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Stats {...args}>
        <Stats.Label>{t('story.stats_revenue')}</Stats.Label>
        <Stats.Value>$45,231.89</Stats.Value>
        <Stats.Trend direction="up">+20.1%</Stats.Trend>
      </Stats>
    );
  }
};

export const NegativeTrend: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Stats {...args}>
        <Stats.Label>{t('story.stats_active_alerts')}</Stats.Label>
        <Stats.Value>12</Stats.Value>
        <Stats.Trend direction="down">-5%</Stats.Trend>
      </Stats>
    );
  }
};

export const Outline: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Stats {...args} variant="outline">
        <Stats.Label>{t('story.stats_page_views')}</Stats.Label>
        <Stats.Value>12,456</Stats.Value>
        <Stats.Trend direction="neutral">0%</Stats.Trend>
      </Stats>
    );
  }
};

export const Flat: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Stats {...args} variant="flat">
        <Stats.Label>{t('story.stats_avg_session')}</Stats.Label>
        <Stats.Value>2m 34s</Stats.Value>
        <Stats.Description>{t('story.stats_desc_session')}</Stats.Description>
      </Stats>
    );
  }
};
