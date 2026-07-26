import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { BentoGrid, BentoGridItem, Icon, Avatar, AvatarGroup, Badge, Progress } from "wimui";
import { Sparkline } from "wimui/charts";


const meta: Meta<typeof BentoGrid> = {
  title: "Components/Layout/BentoGrid",
  component: BentoGrid,
  tags: [],
};

export default meta;
type Story = StoryObj<typeof meta>;

// カード header は「実コンポーネントで組んだトピック別ミニ UI」にする
// （灰色 Skeleton の偽プレースホルダはコンポジションガイドラインの禁止パターン）。
// 共通: header 領域を満たす flex コンテナ。
const fillHeader: React.CSSProperties = {
  display: "flex",
  height: "100%",
  minHeight: "6rem",
  padding: "var(--wim-spacing-sm)",
};

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const items = [
      {
        // AI: 対応できる操作を Badge チップで示す（ブランド名は使わない）
        title: t("story.bento_ai_title", "AI Integration"),
        description: t("story.bento_ai_desc", "Seamlessly integrate AI into your workflow."),
        header: (
          <div style={{ ...fillHeader, flexWrap: "wrap", alignContent: "center", gap: "var(--wim-spacing-xs)" }}>
            <Badge intent="neutral" variant="subtle">{t("story.bento_ai_cap_summarize")}</Badge>
            <Badge intent="neutral" variant="subtle">{t("story.bento_ai_cap_classify")}</Badge>
            <Badge intent="neutral" variant="subtle">{t("story.bento_ai_cap_extract")}</Badge>
            <Badge intent="neutral" variant="subtle">{t("story.bento_ai_cap_translate")}</Badge>
          </div>
        ),
        className: "wim-bento-grid-item--col-span-2",
        icon: <Icon name="CircleIcon" />,
      },
      {
        // Collaboration: 実在感のある多様な頭文字の AvatarGroup + 編集中の人数
        title: t("story.bento_collab_title", "Real-time Collaboration"),
        description: t("story.bento_collab_desc", "Work together with your team in real-time."),
        header: (
          <div style={{ ...fillHeader, alignItems: "center", gap: "var(--wim-spacing-sm)" }}>
            <AvatarGroup max={4} size="sm">
              <Avatar initials="AM" />
              <Avatar initials="RK" />
              <Avatar initials="SÖ" />
              <Avatar initials="JW" />
              <Avatar initials="LP" />
            </AvatarGroup>
            <span style={{ fontSize: "var(--wim-font-size-sm)", color: "var(--wim-color-text-secondary)" }}>
              {t("story.bento_collab_editing")}
            </span>
          </div>
        ),
        className: "wim-bento-grid-item--col-span-1",
        icon: <Icon name="SquareIcon" />,
      },
      {
        // Analytics: 現実的にギザついた推移の Sparkline
        title: t("story.bento_analytics_title", "Advanced Analytics"),
        description: t("story.bento_analytics_desc", "Discover insights with our powerful analytics tools."),
        header: (
          <div style={{ ...fillHeader, flexDirection: "column", justifyContent: "flex-end", gap: "var(--wim-spacing-2xs)" }}>
            <span style={{ fontSize: "var(--wim-font-size-xs)", color: "var(--wim-color-text-secondary)" }}>
              {t("story.bento_analytics_metric")}
            </span>
            <Sparkline
              data={[82, 140, 118, 173, 156, 201, 264]}
              type="area"
              width="100%"
              height={44}
              ariaLabel={t("story.bento_analytics_metric")}
            />
          </div>
        ),
        className: "wim-bento-grid-item--col-span-1",
        icon: <Icon name="ChevronDownIcon" />,
      },
      {
        // Cloud: リソース使用率を Progress で（実測的な半端な %）
        title: t("story.bento_cloud_title", "Cloud Infrastructure"),
        description: t("story.bento_cloud_desc", "Scalable and secure cloud hosting for your apps."),
        header: (
          <div style={{ ...fillHeader, flexDirection: "column", justifyContent: "center", gap: "var(--wim-spacing-sm)" }}>
            <Progress value={68} label={t("story.bento_cloud_storage")} showValue size="sm" />
            <Progress value={41} label={t("story.bento_cloud_bandwidth")} showValue size="sm" />
          </div>
        ),
        className: "wim-bento-grid-item--col-span-2",
        icon: <Icon name="ExternalLinkIcon" />,
      },
    ];
    return (
      <BentoGrid {...args}>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    );
  },
};
