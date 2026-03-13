import { fn } from "storybook/test";
import { Paragraph } from "@/components/Paragraph/Paragraph";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


export default {
  title: "Components/Typography & Icons/Paragraph", //左メニューの表示
  component: Paragraph,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      control: "select",
      options: [
        "black",
        "deepgray",
        "gray",
        "lightgray",
        "white",
        "error",
        "primary",
        "success",
        "warning",
        "info",
      ],
    },
  },
  args: { onClick: fn() }, //`fn` を使用して onClick 引数を監視(呼び出されるとアクションパネルに表示)
};

//コンポーネントに渡す値

export const ExLargeParagraph = {
  render: (args: Parameters<typeof Paragraph>[0]) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Paragraph {...args} content={t('story_paragraph_exlarge')} />;
  },
  args: {
    size: "ex-large",
    weight: `normal`,
    lineHeight: `normal-latn`,
    fontStyle: `normal`,
  }
};

export const LargeParagraph = {
  render: (args: Parameters<typeof Paragraph>[0]) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Paragraph {...args} content={t('story_paragraph_large')} />;
  },
  args: {
    size: "large",
    weight: `normal`,
    lineHeight: `normal-latn`,
    fontStyle: `normal`,
  }
};

export const MediumParagraph = {
  render: (args: Parameters<typeof Paragraph>[0]) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Paragraph {...args} content={t('story_paragraph_medium')} />;
  },
  args: {
    size: "medium",
    weight: `normal`,
    lineHeight: `normal-latn`,
    fontStyle: `normal`,
  }
};

export const SmallParagrapht = {
  render: (args: Parameters<typeof Paragraph>[0]) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Paragraph {...args} content={t('story_paragraph_small')} />;
  },
  args: {
    size: "small",
    weight: `normal`,
    lineHeight: `normal-latn`,
    fontStyle: `normal`,
  }
};

export const ExSmallParagraph = {
  render: (args: Parameters<typeof Paragraph>[0]) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Paragraph {...args} content={t('story_paragraph_exsmall')} />;
  },
  args: {
    size: "ex-small",
    weight: `normal`,
    lineHeight: `normal-latn`,
    fontStyle: `normal`,
  }
};

export const BoldParagraph = {
  render: (args: Parameters<typeof Paragraph>[0]) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Paragraph {...args} content={t('story_paragraph_bold')} />;
  },
  args: {
    size: "medium",
    weight: "bold",
  }
};

export const StrikethroughParagraph = {
  render: (args: Parameters<typeof Paragraph>[0]) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Paragraph {...args} content={t('story_paragraph_strikethrough')} />;
  },
  args: {
    size: "medium",
    decoration: "line-through",
  }
};

export const HighlightParagraph = {
  render: (args: Parameters<typeof Paragraph>[0]) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Paragraph {...args} content={t('story_paragraph_highlight')} />;
  },
  args: {
    size: "medium",
    decoration: "highlight",
  }
};
