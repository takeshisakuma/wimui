const fs = require('fs');

const jpPath = 'public/locales/ja/docs.json';
const enPath = 'public/locales/en/docs.json';

const jpData = JSON.parse(fs.readFileSync(jpPath, 'utf8'));
const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));

const keys = {
  'story_quote_default': { en: 'He who has a why to live can bear almost any how.', ja: '生きる理由を持つ者は、ほとんどどんな事にも耐えられる。' },
  'story_quote_design': { en: 'Design is not just what it looks like and feels like. Design is how it works.', ja: 'デザインとは単にどう見えるか、どう感じるかではない。どう機能するかだ。' },
  'story_quote_work': { en: 'The only way to do great work is to love what you do.', ja: '素晴らしい仕事をするための唯一の方法は、自分のしていることを愛することだ。' },
  'story_quote_simple': { en: 'Simplicity is the ultimate sophistication.', ja: 'シンプルさは究極の洗練である。' },
  'story_quote_black': { en: 'Black Quote', ja: 'ブラックの引用' },
  'story_quote_deepgray': { en: 'Deep Gray Quote', ja: 'ディープグレーの引用' },
  'story_quote_gray': { en: 'Gray Quote', ja: 'グレーの引用' },
  'story_quote_lightgray': { en: 'Light Gray Quote', ja: 'ライトグレーの引用' }
};

for (const [key, value] of Object.entries(keys)) {
  jpData[key] = value.ja;
  enData[key] = value.en;
}

fs.writeFileSync(jpPath, JSON.stringify(jpData, null, 2) + '\n');
fs.writeFileSync(enPath, JSON.stringify(enData, null, 2) + '\n');

// Update Quote.stories.tsx
let quoteContent = fs.readFileSync('stories/Quote/Quote.stories.tsx', 'utf8');

if (!quoteContent.includes('useTranslation')) {
    quoteContent = quoteContent.replace(
        'import { Quote } from "@/components/Quote/Quote";',
        'import { Quote } from "@/components/Quote/Quote";\nimport { useTranslation } from "react-i18next";'
    );
}

quoteContent = quoteContent.replace(/export const Default = \{[\s\S]*?};/, `export const Default = {
  render: (args: any) => {
    const { t } = useTranslation(['docs', 'common', 'components']);
    return <Quote {...args} content={t('story_quote_default')} />;
  },
  args: {}
};`);

quoteContent = quoteContent.replace(/export const WithCite = \{[\s\S]*?};/, `export const WithCite = {
  render: (args: any) => {
    const { t } = useTranslation(['docs', 'common', 'components']);
    return <Quote {...args} content={t('story_quote_design')} cite="Steve Jobs" />;
  },
  args: {}
};`);

quoteContent = quoteContent.replace(/export const Large = \{[\s\S]*?};/, `export const Large = {
  render: (args: any) => {
    const { t } = useTranslation(['docs', 'common', 'components']);
    return <Quote {...args} content={t('story_quote_work')} cite="Steve Jobs" />;
  },
  args: { size: "large" }
};`);

quoteContent = quoteContent.replace(/export const NoBorder = \{[\s\S]*?};/, `export const NoBorder = {
  render: (args: any) => {
    const { t } = useTranslation(['docs', 'common', 'components']);
    return <Quote {...args} content={t('story_quote_simple')} cite="Leonardo da Vinci" />;
  },
  args: { border: false }
};`);

quoteContent = quoteContent.replace(/export const VariousColors = \{[\s\S]*?render: \(args: any\) => \([\s\S]*?\)[\s\S]*?};/, `export const VariousColors = {
  render: function Render(args: any) {
    const { t } = useTranslation(['docs', 'common', 'components']);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Quote {...args} content={t('story_quote_black')} color="black" />
        <Quote {...args} content={t('story_quote_deepgray')} color="deepgray" />
        <Quote {...args} content={t('story_quote_gray')} color="gray" />
        <Quote {...args} content={t('story_quote_lightgray')} color="lightgray" />
      </div>
    );
  }
};`);

fs.writeFileSync('stories/Quote/Quote.stories.tsx', quoteContent);

console.log('Quote done');
