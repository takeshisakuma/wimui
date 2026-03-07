import { fn } from "storybook/test";
import { Span } from "@/components/Span/Span";
import { useTranslation } from "react-i18next";

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
  render: (args: any) => {
    const { t } = useTranslation(['docs', 'common', 'components']);
    return <Span {...args} content={t('story_span_medium')} />;
  },
  args: {
    size: "ex-large",
    weight: `normal`,
    color: `deepgray`,
    fontStyle: `normal`,
  }
};

export const LargeSpan = {
  render: (args: any) => {
    const { t } = useTranslation(['docs', 'common', 'components']);
    return <Span {...args} content={t('story_span_medium')} />;
  },
  args: {
    size: "large",
    weight: `normal`,
    color: `deepgray`,
    fontStyle: `normal`,
  }
};

export const MediumSpan = {
  render: (args: any) => {
    const { t } = useTranslation(['docs', 'common', 'components']);
    return <Span {...args} content={t('story_span_medium')} />;
  },
  args: {
    size: "medium",
    weight: `normal`,
    color: `deepgray`,
    fontStyle: `normal`,
  }
};

export const SmallSpan = {
  render: (args: any) => {
    const { t } = useTranslation(['docs', 'common', 'components']);
    return <Span {...args} content={t('story_span_medium')} />;
  },
  args: {
    size: "small",
    weight: `normal`,
    color: `deepgray`,
    fontStyle: `normal`,
  }
};

export const ExSmallSpan = {
  render: (args: any) => {
    const { t } = useTranslation(['docs', 'common', 'components']);
    return <Span {...args} content={t('story_span_medium')} />;
  },
  args: {
    size: "ex-small",
    weight: `normal`,
    color: `deepgray`,
    fontStyle: `normal`,
  }
};

export const SmallSpanWithIcon = {
  render: (args: any) => {
    const { t } = useTranslation(['docs', 'common', 'components']);
    return <Span {...args} content={t('story_span_medium')} />;
  },
  args: {
    size: "small",
    weight: `normal`,
    color: `deepgray`,
    fontStyle: `normal`,
    iconName: "SquareIcon", //アイコン名を指定
    iconPosition: "left", //アイコンの位置を指定
  }
};

export const LargeSpanWithIconOnRight = {
  render: (args: any) => {
    const { t } = useTranslation(['docs', 'common', 'components']);
    return <Span {...args} content={t('story_span_medium')} />;
  },
  args: {
    size: "large",
    weight: "bold",
    color: "black",
    fontStyle: "italic",
    iconName: "CircleIcon",
    iconPosition: "right",
  }
};

export const IconOnlySpan = {
  args: {
    size: "medium",
    content: "", // テキストなし
    iconName: "CircleIcon",
  }
};

export const BoldSpan = {
  render: (args: any) => {
    const { t } = useTranslation(['docs', 'common', 'components']);
    return <Span {...args} content={t('story_span_medium')} />;
  },
  args: {
    size: "medium",
    weight: "bold",
  }
};

export const StrikethroughSpan = {
  render: (args: any) => {
    const { t } = useTranslation(['docs', 'common', 'components']);
    return <Span {...args} content={t('story_span_medium')} />;
  },
  args: {
    size: "medium",
    decoration: "line-through",
  }
};

export const HighlightSpan = {
  render: (args: any) => {
    const { t } = useTranslation(['docs', 'common', 'components']);
    return <Span {...args} content={t('story_span_medium')} />;
  },
  args: {
    size: "medium",
    decoration: "highlight",
  }
};
