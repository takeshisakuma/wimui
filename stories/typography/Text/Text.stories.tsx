import React from "react";
import { fn } from "storybook/test";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Text } from "wimui";


export default {
  title: "Components/Typography & Icons/Text",
  component: Text,
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
        "danger",
        "primary",
        "success",
        "warning",
        "info",
      ],
    },
  },
  args: { onClick: fn() },
};

export const ExLargeText = {
  render: (args: React.ComponentProps<typeof Text>) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Text {...args} content={t('story.paragraph_exlarge')} />;
  },
  args: {
    size: "xl",
    weight: `normal`,
    lineHeight: `normal-latn`,
    fontStyle: `normal`,
  }
};

export const LargeText = {
  render: (args: React.ComponentProps<typeof Text>) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Text {...args} content={t('story.paragraph_large')} />;
  },
  args: {
    size: "lg",
    weight: `normal`,
    lineHeight: `normal-latn`,
    fontStyle: `normal`,
  }
};

export const MediumText = {
  render: (args: React.ComponentProps<typeof Text>) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Text {...args} content={t('story.paragraph_medium')} />;
  },
  args: {
    size: "md",
    weight: `normal`,
    lineHeight: `normal-latn`,
    fontStyle: `normal`,
  }
};

export const SmallText = {
  render: (args: React.ComponentProps<typeof Text>) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Text {...args} content={t('story.paragraph_small')} />;
  },
  args: {
    size: "sm",
    weight: `normal`,
    lineHeight: `normal-latn`,
    fontStyle: `normal`,
  }
};

export const ExSmallText = {
  render: (args: React.ComponentProps<typeof Text>) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Text {...args} content={t('story.paragraph_exsmall')} />;
  },
  args: {
    size: "xs",
    weight: `normal`,
    lineHeight: `normal-latn`,
    fontStyle: `normal`,
  }
};

export const BoldText = {
  render: (args: React.ComponentProps<typeof Text>) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Text {...args} content={t('story.paragraph_bold')} />;
  },
  args: {
    size: "md",
    weight: "bold",
  }
};

export const StrikethroughText = {
  render: (args: React.ComponentProps<typeof Text>) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Text {...args} content={t('story.paragraph_strikethrough')} />;
  },
  args: {
    size: "md",
    decoration: "line-through",
  }
};

export const HighlightText = {
  render: (args: React.ComponentProps<typeof Text>) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Text {...args} content={t('story.paragraph_highlight')} />;
  },
  args: {
    size: "md",
    decoration: "highlight",
  }
};
