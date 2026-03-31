import { fn } from "storybook/test";
import { Span } from "@/components/typography/Span/Span";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


export default {
  title: "Components/Typography & Icons/Span", //左メニューの表示
  component: Span,
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

export const ExLargeSpan = {
  render: (args: Parameters<typeof Span>[0]) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "xl",
    weight: `normal`,
    color: `deepgray`,
    fontStyle: `normal`,
  }
};

export const LargeSpan = {
  render: (args: Parameters<typeof Span>[0]) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "lg",
    weight: `normal`,
    color: `deepgray`,
    fontStyle: `normal`,
  }
};

export const MediumSpan = {
  render: (args: Parameters<typeof Span>[0]) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "md",
    weight: `normal`,
    color: `deepgray`,
    fontStyle: `normal`,
  }
};

export const SmallSpan = {
  render: (args: Parameters<typeof Span>[0]) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "sm",
    weight: `normal`,
    color: `deepgray`,
    fontStyle: `normal`,
  }
};

export const ExSmallSpan = {
  render: (args: Parameters<typeof Span>[0]) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "xs",
    weight: `normal`,
    color: `deepgray`,
    fontStyle: `normal`,
  }
};

export const SmallSpanWithIcon = {
  render: (args: Parameters<typeof Span>[0]) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "sm",
    weight: `normal`,
    color: `deepgray`,
    fontStyle: `normal`,
    iconName: "SquareIcon", //アイコン名を指定
    iconPosition: "left", //アイコンの位置を指定
  }
};

export const LargeSpanWithIconOnRight = {
  render: (args: Parameters<typeof Span>[0]) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "lg",
    weight: "bold",
    color: "black",
    fontStyle: "italic",
    iconName: "CircleIcon",
    iconPosition: "right",
  }
};

export const IconOnlySpan = {
  args: {
    size: "md",
    content: "", // テキストなし
    iconName: "CircleIcon",
  }
};

export const BoldSpan = {
  render: (args: Parameters<typeof Span>[0]) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "md",
    weight: "bold",
  }
};

export const StrikethroughSpan = {
  render: (args: Parameters<typeof Span>[0]) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "md",
    decoration: "line-through",
  }
};

export const HighlightSpan = {
  render: (args: Parameters<typeof Span>[0]) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Span {...args} content={t('story.span_medium')} />;
  },
  args: {
    size: "md",
    decoration: "highlight",
  }
};
