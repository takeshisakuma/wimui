import React from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Blockquote } from "wimui";


export default {
  title: "Components/Typography & Icons/Blockquote",
  component: Blockquote,
  parameters: {
    layout: "centered",
  },
  tags: [],
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    color: {
      control: "select",
      options: [
        "black",
        "deepgray",
        "gray",
        "lightgray",
        "white",
        "primary",
        "success",
        "warning",
        "danger",
        "info",
      ],
    },
  },
};

export const Default = {
  render: (args: React.ComponentProps<typeof Blockquote>) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Blockquote {...args} content={t('story.quote_default')} />;
  },
  args: {}
};

export const WithCite = {
  render: (args: React.ComponentProps<typeof Blockquote>) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Blockquote {...args} content={t('story.quote_design')} cite="Steve Jobs" />;
  },
  args: {}
};

export const Large = {
  render: (args: React.ComponentProps<typeof Blockquote>) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Blockquote {...args} content={t('story.quote_work')} cite="Steve Jobs" />;
  },
  args: { size: "lg" }
};

// T280: この値はどのストーリーにも描かれていなかった（変えても VRT が赤を出さない）。
export const Small = {
  render: (args: React.ComponentProps<typeof Blockquote>) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Blockquote {...args} content={t('story.quote_work')} cite="Steve Jobs" />;
  },
  args: { size: "sm" }
};

export const NoBorder = {
  render: (args: React.ComponentProps<typeof Blockquote>) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Blockquote {...args} content={t('story.quote_simple')} cite="Leonardo da Vinci" />;
  },
  args: { border: false }
};

export const VariousColors = {
  render: function Render(args: React.ComponentProps<typeof Blockquote>) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Blockquote {...args} content={t('story.quote_black')} color="text-primary" />
        <Blockquote {...args} content={t('story.quote_deepgray')} color="text-secondary" />
        <Blockquote {...args} content={t('story.quote_gray')} color="text-tertiary" />
        <div data-theme="dark" style={{ backgroundColor: "var(--wim-color-surface-void)", padding: "12px", borderRadius: "4px" }}>
          <Blockquote {...args} content={t('story.quote_lightgray')} color="text-disabled" />
        </div>
      </div>
    );
  }
};

// intent の色（color="primary" など）。この値はどのストーリーにも描かれておらず、dark で文字が
// 面に沈んでいても（コントラスト 1.01〜3.81）a11y の CI に写らなかった（2026-10-04 に text-* へ修正）。
export const Intents = {
  render: function Render(args: React.ComponentProps<typeof Blockquote>) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--wim-spacing-2xl)" }}>
        <Blockquote {...args} content={t('story.quote_default')} color="primary" />
        <Blockquote {...args} content={t('story.quote_work')} color="success" />
        <Blockquote {...args} content={t('story.quote_simple')} color="warning" />
        <Blockquote {...args} content={t('story.quote_black')} color="danger" />
        <Blockquote {...args} content={t('story.quote_deepgray')} color="info" />
      </div>
    );
  }
};

export const AsChild = {
  render: (args: React.ComponentProps<typeof Blockquote>) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Blockquote {...args} content={t('story.quote_default')} asChild>
        <div style={{ padding: "20px", background: "var(--wim-color-surface-variant)" }}>
          {t('story.quote_default')}
        </div>
      </Blockquote>
    );
  },
  args: {}
};
