const fs = require('fs');

const jpPath = 'public/locales/ja/docs.json';
const enPath = 'public/locales/en/docs.json';

const jpData = JSON.parse(fs.readFileSync(jpPath, 'utf8'));
const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));

const keys = {
  'story_stats_total_users': { en: 'Total Users', ja: '総ユーザー数' },
  'story_stats_revenue': { en: 'Revenue', ja: '収益' },
  'story_stats_active_alerts': { en: 'Active Alerts', ja: 'アクティブなアラート' },
  'story_stats_page_views': { en: 'Page Views', ja: 'ページビュー' },
  'story_stats_avg_session': { en: 'Avg. Session Time', ja: '平均セッション時間' },
  'story_stats_desc_users': { en: '+12.5% from last month', ja: '先月から+12.5%' },
  'story_stats_desc_session': { en: 'Sessions over 5 minutes', ja: '5分以上のセッション' }
};

for (const [key, value] of Object.entries(keys)) {
  jpData[key] = value.ja;
  enData[key] = value.en;
}

fs.writeFileSync(jpPath, JSON.stringify(jpData, null, 2) + '\n');
fs.writeFileSync(enPath, JSON.stringify(enData, null, 2) + '\n');

// Update Stats.stories.tsx
let statsContent = fs.readFileSync('stories/Stats/Stats.stories.tsx', 'utf8');

if (!statsContent.includes('useTranslation')) {
    statsContent = statsContent.replace(
        'import { Stats } from "@/components/Stats/Stats";',
        'import { Stats } from "@/components/Stats/Stats";\nimport { useTranslation } from "react-i18next";'
    );
}

statsContent = statsContent.replace(/export const Default: Story = \{[\s\S]*?};/, `export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(['docs', 'common', 'components']);
    return (
      <Stats {...args}>
        <Stats.Label>{t('story_stats_total_users')}</Stats.Label>
        <Stats.Value>1,234</Stats.Value>
        <Stats.Description>{t('story_stats_desc_users')}</Stats.Description>
      </Stats>
    );
  }
};`);

statsContent = statsContent.replace(/export const WithTrend: Story = \{[\s\S]*?};/, `export const WithTrend: Story = {
  render: function Render(args) {
    const { t } = useTranslation(['docs', 'common', 'components']);
    return (
      <Stats {...args}>
        <Stats.Label>{t('story_stats_revenue')}</Stats.Label>
        <Stats.Value>$45,231.89</Stats.Value>
        <Stats.Trend direction="up">+20.1%</Stats.Trend>
      </Stats>
    );
  }
};`);

statsContent = statsContent.replace(/export const NegativeTrend: Story = \{[\s\S]*?};/, `export const NegativeTrend: Story = {
  render: function Render(args) {
    const { t } = useTranslation(['docs', 'common', 'components']);
    return (
      <Stats {...args}>
        <Stats.Label>{t('story_stats_active_alerts')}</Stats.Label>
        <Stats.Value>12</Stats.Value>
        <Stats.Trend direction="down">-5%</Stats.Trend>
      </Stats>
    );
  }
};`);

statsContent = statsContent.replace(/export const Outline: Story = \{[\s\S]*?};/, `export const Outline: Story = {
  render: function Render(args) {
    const { t } = useTranslation(['docs', 'common', 'components']);
    return (
      <Stats {...args} variant="outline">
        <Stats.Label>{t('story_stats_page_views')}</Stats.Label>
        <Stats.Value>12,456</Stats.Value>
        <Stats.Trend direction="neutral">0%</Stats.Trend>
      </Stats>
    );
  }
};`);

statsContent = statsContent.replace(/export const Flat: Story = \{[\s\S]*?};/, `export const Flat: Story = {
  render: function Render(args) {
    const { t } = useTranslation(['docs', 'common', 'components']);
    return (
      <Stats {...args} variant="flat">
        <Stats.Label>{t('story_stats_avg_session')}</Stats.Label>
        <Stats.Value>2m 34s</Stats.Value>
        <Stats.Description>{t('story_stats_desc_session')}</Stats.Description>
      </Stats>
    );
  }
};`);

fs.writeFileSync('stories/Stats/Stats.stories.tsx', statsContent);

console.log('Stats done');
